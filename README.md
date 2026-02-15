# Rumah Berbagi App

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Development Setup

First, run the development server:

```bash
yarn dev
```

## Vercel Build Notes

If you see `error:0308010C:digital envelope routines::unsupported` on Vercel with Node.js 24+, set `NODE_OPTIONS=--openssl-legacy-provider` for the build. This repository already applies the flag in the build script, but you can also configure it as a Vercel environment variable if needed.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## GitHub Extensions

To view [Mermaid](https://mermaid-js.github.io/mermaid/) diagrams in GitHub Discussions & Issues, please install [GitHub Mermaid Extension](https://github.com/BackMarket/github-mermaid-extension) in your browser.
