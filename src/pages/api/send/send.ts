import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend('re_h6w6jvDX_DD8JK983QRiuJ3no3JQR4Y9b');

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
