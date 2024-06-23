// pages/api/request.ts
import { DestinationItem } from '@/models/suggestion/get';
import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';

export const maxDuration = 60; // This function can run for a maximum of 60 seconds
const GET = async (request: Request) => {

  try {
    const { searchParams } = new URL(request.url);
    const location = searchParams.get('location');
    const time = searchParams.get('time');
    const activity = searchParams.get('activity');
    
    // check params
    if (!location) {
      return new NextResponse(
        JSON.stringify({ error: 'Missing location parameter' }),
        {
          status: 400,
        }
      );
    }

    if (!time) {
      return new NextResponse(
        JSON.stringify({ error: 'Missing time parameter' }),
        {
          status: 400,
        }
      );
    }

    if (!activity) {
      return new NextResponse(
        JSON.stringify({ error: 'Missing activity parameter' }),
        {
          status: 400,
        }
      );
    }

    // Tạo text prompt từ các tham số
    let textPrompt = `Gợi ý top 4 địa điểm vui chơi ở ${location} vào thời gian ${time}`;
    if (activity) textPrompt += ` có hoạt động ${activity}.`;
    textPrompt += ' Format dưới dạng tên địa điểm - mô tả nổi bật của địa điểm. Không có dấu ** xuất hiện';

    // Khởi tạo đối tượng OpenAI với API key
    const openai = new OpenAI({apiKey:"sk-gotravelapp-Vw7xdD0dOol6uRD7tBZpT3BlbkFJszHwDD4XBLpdH851rN9k"});

    try {
      // Gửi yêu cầu tới OpenAI API để tạo nội dung
      const response = await openai.chat.completions.create({
        model: 'gpt-4o',
        messages: [{ role: 'user', content: textPrompt }],
        temperature: 0,
        max_tokens: 4000,
      });

      const content = response.choices[0].message.content;
      const entries = content?.split('\n').filter(entry => entry.trim() !== '');

      const destinations: DestinationItem[] = [];
      if (entries == null) {
        return new NextResponse(
            JSON.stringify({}),
            {
                  status: 200,
            }
        );
      }
      for (const entry of entries) {
        const [locationWithNumber, description] = entry.split(' - ');
        const location = locationWithNumber.substring(locationWithNumber.indexOf('.') + 2).trim();

        if (location) {
          // Gửi yêu cầu tới OpenAI API để tạo hình ảnh
          try {
            const image = await openai.images.generate({
              prompt: 'Ảnh thực tế của địa điểm ' + location,
              n: 1,
              size: '512x512',
            });
            destinations.push({
              location,
              description,
              img: image.data[0].url,
            });
          }
          catch (error) {
            console.log(error);
            return new NextResponse(
              JSON.stringify({ error: 'Lỗi khi call api generate ảnh.' }),
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
          'Content-Type': 'application/json',
        },
      });

    } catch (error) {
      console.log(error);
      return new NextResponse(
        JSON.stringify({ error: 'Lỗi khi call api địa điểm.' }),
        {
          status: 500,
        }
      );
    }
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ error: 'An error occurred when get params.' }),
      {
        status: 500,
      }
    );
  }
}
export { GET }
