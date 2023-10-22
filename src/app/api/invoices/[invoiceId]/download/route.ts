import { NextResponse } from "next/server"
import puppeteer from 'puppeteer'

export async function GET(request: Request) {
  try {
    const force = request.url.includes('?force')
    const browser = await puppeteer.launch({ ignoreDefaultArgs: ['--disable-extensions'] })
    const page = await browser.newPage()
    await page.goto(request.url.replace('/api', '').replace('/download', '/pdf'))
    await page.emulateMediaType('screen')
    const pdfBuffer = await page.pdf({ format: 'A4' })
    await browser.close()
    // return image as response
    const response = new NextResponse(pdfBuffer, {
      headers: {
        'Content-Type': ' application/pdf',
        'Content-Disposition': force ? 'attachment; filename="invoice_test.pdf"' : 'inline',
      },
    })
    return response
  } catch (error) {
    console.log(error)
    return new NextResponse(null, {
      status: 500,
      statusText: 'Internal Server Error',
    })
  }

}
