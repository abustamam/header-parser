import Cors from 'cors';

import initMiddleware from '../../lib/init-middleware';

const cors = initMiddleware(
  Cors({
    methods: ['GET'],
  })
);

export default async (req, res) => {
  await cors(req, res);
  const { headers, connection } = req;
  const ipaddress = headers['x-real-ip'] || connection.remoteAddress;
  const language = headers['accept-language'];
  const software = headers['user-agent'];
  res.statusCode = 200;
  res.json({ ipaddress, language, software });
};
