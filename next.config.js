/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export to ./out — served straight off disk by Caddy on the Pi,
  // so there is no Node process to run or keep alive there.
  output: "export",

  // An export has no server, so the built-in image optimizer cannot run.
  images: { unoptimized: true },

  // Emit /en/index.html rather than /en.html so a plain file server can
  // resolve extensionless URLs without rewrite rules.
  trailingSlash: true,

  // NOTE: the bare "/" -> "/en" redirect that used to live here is not
  // supported by output:"export" (it needs a server). Caddy performs it now —
  // see the `redir / /en/` line in the repo Caddyfile.
};

module.exports = nextConfig;
