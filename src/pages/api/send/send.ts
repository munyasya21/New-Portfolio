import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '../hello/';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { data, error } = await resend.emails.send({
    from: 'Cynthia <munyasyacynthia@gmail.com>',
    to: ['munyasyacynthia@gmail.com>'],
    subject: 'Hello world',
    react: EmailTemplate({ firstName: 'munyasya' }),
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};