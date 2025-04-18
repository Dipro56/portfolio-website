/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  distDir: "out",
  images: {
    unoptimized: true, // Disable image optimization
  },
};

export default nextConfig;

// let userConfig = undefined;
// try {
//   // try to import ESM first
//   userConfig = await import("./v0-user-next.config.mjs");
// } catch (e) {
//   try {
//     // fallback to CJS import
//     userConfig = await import("./v0-user-next.config");
//   } catch (innerError) {
//     // ignore error
//   }
// }

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   images: {
//     unoptimized: true,
//   },
//   experimental: {
//     webpackBuildWorker: true,
//     parallelServerBuildTraces: true,
//     parallelServerCompiles: true,
//   },
//   // basePath: "/portfolio-website",
//   // assetPrefix: "/portfolio-website/",
//   // output: "export",
//   reactStrictMode: true,
//   trailingSlash: true, // Optional: Helps with GitHub Pages hosting
//   reactStrictMode: true,
// };

// if (userConfig) {
//   // ESM imports will have a "default" property
//   const config = userConfig.default || userConfig;

//   for (const key in config) {
//     if (
//       typeof nextConfig[key] === "object" &&
//       !Array.isArray(nextConfig[key])
//     ) {
//       nextConfig[key] = {
//         ...nextConfig[key],
//         ...config[key],
//       };
//     } else {
//       nextConfig[key] = config[key];
//     }
//   }
// }

// export default nextConfig;
