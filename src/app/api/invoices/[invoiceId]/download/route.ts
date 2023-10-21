import { NextResponse } from "next/server"
import { readFileSync } from 'fs';
import path from 'path';

export async function GET(request: Request) {
  // get ?force from query
  const force = request.url.includes('?force')

  // load image from file system
  const imagePath = path.join(process.cwd(), 'public', 'image_test.png');
  const imageBuffer = readFileSync(imagePath);

  // return image as response
  const response = new NextResponse(imageBuffer.buffer, {
    headers: {
      'Content-Type': 'image/png',
      'Content-Disposition': force ? 'attachment; filename="image_test.png"' : 'inline',
    },
  })

  return response
}
