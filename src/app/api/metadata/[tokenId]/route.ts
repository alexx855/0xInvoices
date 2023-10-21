export async function GET(request: Request) {
  const urlParts = request.url.split('/')
  const tokenId = urlParts[urlParts.length - 1]
  const invoices = {
    "title": `Invoice #{tokenId}`,
    "type": "object",
    "properties": {
      "name": {
        "type": "string",
        "description": "name"
      },
      "description": {
        "type": "string",
        "description": "description"
      },
      "image": {
        "type": "string",
        "description": `http://localhost:3000/api/metadata/${tokenId}/image`
      }
    }
  }

  return Response.json(invoices)
}