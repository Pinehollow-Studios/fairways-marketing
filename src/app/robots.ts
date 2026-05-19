import type { MetadataRoute } from "next";

/**
 * Pre-launch: keep the site out of search indexes.
 *
 * When the App Store name lands and you're ready to be discoverable, flip
 * `allow` to `"/"` and remove the meta-robots noindex from RootLayout.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", disallow: "/" }],
  };
}
