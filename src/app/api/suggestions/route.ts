// pages/api/request.ts
import { DestinationItem } from '@/models/suggestion/get';
import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';


const GET = async (request: Request) => {

  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
  try {
    const { searchParams } = new URL(request.url);
    const location = searchParams.get('location');
    const time = searchParams.get('time');
    const activity = searchParams.get('activity');
    // check params
    if(!location) {
      return new NextResponse(
        JSON.stringify({ error: 'Missing location parameter' }),
        {
          status: 400,
        }
      );
    }

    if(!time) {
      return new NextResponse(
        JSON.stringify({ error: 'Missing month parameter' }),
        {
          status: 400,
        }
      );
    }

    if(!activity) {
      return new NextResponse(
        JSON.stringify({ error: 'Missing activity parameter' }),
        {
          status: 400,
        }
      );
    }

     // Tạo text prompt từ các tham số
  let textPrompt = `Gợi ý 4 địa điểm vui chơi ở ${location} vào ${time}`;
  if (activity) textPrompt += ` có hoạt động ${activity}.`;
  textPrompt += 'Format dưới dạng Location - Description.';

  // Khởi tạo đối tượng OpenAI với API key
  const openai = new OpenAI();
  openai.apiKey = OPENAI_API_KEY as string;

  try {
    // Gửi yêu cầu tới OpenAI API để tạo nội dung
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: textPrompt }],
      temperature: 0,
      max_tokens: 2000,
    });

    // Xử lý phản hồi từ OpenAI API
    const [, ...entries] = JSON.stringify(
      response.choices[0].message.content
    ).split("\\n");

    const destinations: DestinationItem[] = [];

    for (const entry of entries) {
      const [locationWithNumber, description] = entry.split(" - ");
      const [, location] = locationWithNumber.split(".");

      if (location) {
        // Gửi yêu cầu tới OpenAI API để tạo hình ảnh
        const image = await openai.images.generate({
          prompt: 'Ảnh thực tế của ' + location,
          n: 1,
          size: '512x512',
        });
        destinations.push({
          location,
          description,
          img: image.data[0].url,
        });
      }
    }

    // Gửi phản hồi về các điểm đến
    return new NextResponse(JSON.stringify(destinations), {
      headers: {
        'Content-Type': 'application/json',
      },
    });

  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: 'An error occurred when call open ai.' }),
      {
        status: 500,
      }
    );
  }
  }
  catch (error) {
    return new NextResponse(
      JSON.stringify({ error: 'An error occurred when get params.' }),
      {
        status: 500,
      }
    );
  }
}
export { GET }


