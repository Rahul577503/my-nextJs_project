// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { IServices, services } from './services'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IServices[]>
) {
  res.status(200).json(services)
}
