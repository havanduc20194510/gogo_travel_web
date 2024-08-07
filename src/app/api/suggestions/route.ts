// pages/api/request.ts
import { DestinationItem } from "@/models/suggestion/get";
import { NextResponse } from "next/server";
import { OpenAI } from "openai";

export const maxDuration = 60; // This function can run for a maximum of 60 seconds
const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const location = searchParams.get("location");
  const time = searchParams.get("time");
  const activity = searchParams.get("activity");

  // check params
  if (!location) {
    return new NextResponse(
      JSON.stringify({ error: "Missing location parameter" }),
      {
        status: 400,
      }
    );
  }

  // Tạo text prompt từ các tham số
  let textPrompt = `Gợi ý top 4 địa điểm du lịch ở ${location}`;
  if (time) textPrompt += ` vào ${time}`;
  if (activity) textPrompt += ` có hoạt động ${activity}.`;
  textPrompt +=
    " Format dưới dạng tên địa điểm - mô tả nổi bật của địa điểm. Không hiện dấu **.";

  // Khởi tạo đối tượng OpenAI với API key
  const openai = new OpenAI({
    apiKey: "sk-my-travel-key-qunjtDFhzlDNSZIGZ5d3T3BlbkFJ9adK83Hi2syKY6jrJ3CE"
  });

  try {
    // Gửi yêu cầu tới OpenAI API để tạo nội dung
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: textPrompt }],
      temperature: 0,
      max_tokens: 3000,
    });

    const content = response.choices[0].message.content;
    const entries = content?.split("\n").filter((entry) => entry.trim() !== "");

    const destinations: DestinationItem[] = [];
    if (entries == null) {
      return new NextResponse(JSON.stringify({}), {
        status: 200,
      });
    }
    for (const entry of entries) {
      const [locationWithNumber, description] = entry.split(" - ");
      const location = locationWithNumber
        .substring(locationWithNumber.indexOf(".") + 2)
        .trim();

      if (location) {
        // Gửi yêu cầu tới OpenAI API để tạo hình ảnh
        try {
          const image = await openai.images.generate({
            prompt: "Ảnh thực tế của địa điểm " + location,
            n: 1,
            size: "512x512",
          });
          destinations.push({
            location,
            description,
            img: image.data[0].url,
          });
        } catch (error) {
          console.log(error);
          return new NextResponse(
            JSON.stringify({ error: "Lỗi khi call api generate ảnh." }),
            {
              status: 500,
            }
          );
        }
      }
    }

    console.log(destinations);

    // Gửi phản hồi về các điểm đến
    return new NextResponse(JSON.stringify(destinations), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ error: "Lỗi khi call api địa điểm." }),
      {
        status: 500,
      }
    );
  }
};
export { GET };
