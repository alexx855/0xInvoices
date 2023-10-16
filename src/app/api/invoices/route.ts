import { invoiceABI } from "@/generated"
import litInstance from "@/lit"
import { type Chain, createPublicClient, http } from "viem"
import { FOUNDRY_CONTRACT_ADDRESS, INVOICE_MOCK } from "@/constants"
import { Invoice } from "@/invoice"

export async function POST(request: Request) {
  console.log("POST /invoices")
  // const { searchParams } = new URL(request.url)
  // const jwt = searchParams.get('jwt')

  // // TODO: send in headers
  // if (!jwt) {
  //   // return 401 if no jwt
  //   return new Response('Unauthorized', { status: 401 })
  // }

  // // verify jwt
  // const verified = await litInstance.verifyJWT(jwt)
  // if (!verified) {
  //   // return 401 if jwt is not verified
  //   return new Response('Unauthorized', { status: 401 })
  // }

  // try {
  //   // get user invoices from rpc, in contract FOUNDRY_CONTRACT_ADDRESS
  //   // TODO: get address from jwt
  //   const address = '0x0c4773Cc8aBd313F83686DB0eD6c947A7Fef01c6'
  //   const chain = FOUNDRY_LOCAL_CHAIN
  // const chain = process.env.NODE_ENV === 'development' ? foundryLocal : scrollSepolia

  // const client = createPublicClient({
  //   chain,
  //   transport: http()
  // })
  // const balance = await client.readContract({
  //   address: FOUNDRY_CONTRACT_ADDRESS,
  //   abi: invoiceABI,
  //   functionName: 'balanceOf',
  //   args: [address]
  // })


  // return invoices`
  //   return Response.json({ invoices })
  // } catch (error) {
  //   console.log(error)
  // }

  const data = Array(Number(4)).fill(INVOICE_MOCK).map((mock, index) => { return { ...mock, id: String(index) } }) satisfies Invoice[]
  return Response.json({ data })
}