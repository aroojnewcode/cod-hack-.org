# COD Hack (codhack.org)

Static Astro site for Call of Duty hack — silent aim Aimbot, ESP, wallhack, radar hack — Cloudflare Workers ready.

Worldwide English SEO targeting **call of duty hack**, **cod hack**, and **undetected warzone hack**.

```bash
npm install
npm run dev
npm run build
npx wrangler deploy
```

Cloudflare Workers Builds (deploy command locked to `npx wrangler deploy`) uses `wrangler.toml` `[build]` to run `npm ci --include=dev && npm run build` so `./dist` exists before Wrangler uploads assets. Set Node to **22**.
