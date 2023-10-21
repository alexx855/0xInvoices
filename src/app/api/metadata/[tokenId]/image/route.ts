import { NextResponse } from "next/server"
import { readFileSync } from 'fs';
import path from 'path';

export async function GET(request: Request) {
  // load image from file system
  const imagePath = path.join(process.cwd(), 'public', 'demo.jpg');
  const imageBuffer = readFileSync(imagePath);

  // return image as response
  const response = new NextResponse(imageBuffer.buffer, {
    headers: {
      'Content-Type': 'image/jpeg',
    },
  })

  return response
}
