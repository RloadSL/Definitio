// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { buildTemplate, sendMailer } from './controllers/send-mailers'

type Data = {
  name: string
}

export default function handlerSendMail(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const template = buildTemplate('contacto', req.body)
  sendMailer(['jose@rload.es','hola@rload.es'], 'Contact form Definitio', template)
  .then(()=>{
    res.status(200).end()
  })
  .catch(()=>{
    res.status(500).end()
  })
 
}
