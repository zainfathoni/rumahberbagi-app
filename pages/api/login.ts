import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse): void => {
  const {
    body: { email, password },
    method,
  } = req;
  switch (method) {
    case "POST":
      if (email && email === password) {
        res.status(200).json({ token: password });
      } else {
        res.status(401).json({ error: "Email/password salah" });
      }
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
