// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { IResponse } from '../response'
import { services } from './services'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IResponse>
) {
  // const requestMethod = req.method
  // const body = JSON.parse(req.body)
  const { pid } = req.query
  const service = services.find(service => service.slug === pid)
  if (!service) {
    return res.status(404).json({
      status: 404,
      message: 'Not Found',
    })
  }

  res.status(200).json({
    status: 404,
    message: 'Not Found',
    data: service,
  })
}
