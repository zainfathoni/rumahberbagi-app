import type { NextApiRequest, NextApiResponse } from "next";

const GITHUB_RAW_BASE_URL =
  "https://raw.githubusercontent.com/zainfathoni/rumahberbagi-app/main/public/files";

/**
 * API route to redirect file downloads to GitHub raw URLs.
 *
 * This saves Vercel bandwidth by serving static files from GitHub instead.
 * GitHub doesn't charge bandwidth for public repositories.
 *
 * Example:
 * - Request: /api/files/ramadhan-planner-for-kids-1442h-id.pdf
 * - Redirects to: https://raw.githubusercontent.com/.../ramadhan-planner-for-kids-1442h-id.pdf
 */
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;

  // slug is an array of path segments
  const filePath = Array.isArray(slug) ? slug.join("/") : slug;

  if (!filePath) {
    return res.status(400).json({ error: "File path is required" });
  }

  // Construct GitHub raw URL
  const githubUrl = `${GITHUB_RAW_BASE_URL}/${filePath}`;

  // Redirect to GitHub
  res.redirect(302, githubUrl);
}
