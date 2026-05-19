/**
 * Single source of truth for everything brand-specific.
 *
 * When the App Store approves the final name, change the values in this file
 * (and update the OG image + favicon) and the entire site is rebranded.
 *
 * Anything that needs to swap with the name lives here — display copy, domain,
 * App Store URL, social handles, contact email. Layout / colours / structure
 * stay in code.
 */

export type SiteConfig = {
  /** Public-facing brand name. Used in titles, headers, OG tags. */
  brandName: string;
  /** Short form for tight layouts (footer, navbar). */
  brandShortName: string;
  /** Lower-case version for body copy ("the {brandLowerName} app does..."). */
  brandLowerName: string;
  /** One-line product tagline. Shown under the wordmark + in social cards. */
  tagline: string;
  /** Domain without protocol — used for absolute URLs and OG. */
  domain: string;
  /** App Store URL — null until live. Hides the App Store CTA when null. */
  appStoreUrl: string | null;
  /** Contact email for footer + privacy queries. */
  contactEmail: string;
  /** Hero stack — three lines composed for the page-hero composition. */
  hero: {
    /** UPPERCASE eyebrow caption above the hero stack. */
    eyebrow: string;
    /** First serif line ("Every course in"). */
    line1: string;
    /** Second serif line, rendered with the mint→lime gradient ("England"). */
    line2Gradient: string;
    /** Closing serif line, in soft italic ("tracked."). */
    line3Italic: string;
    /** Body paragraph below the hero stack. */
    subhead: string;
  };
  /** The 3 product feature cards under the hero. */
  features: ReadonlyArray<{
    eyebrow: string;
    title: string;
    body: string;
  }>;
  /** Quiet B2B / "for golf clubs" block — plants the flag pre-launch. */
  forClubs: {
    eyebrow: string;
    title: string;
    body: string;
    ctaLabel: string;
    /** mailto:, anchor, or a TBD link. */
    ctaHref: string;
  };
  /** Footer link groups. */
  footer: {
    studioName: string;
    /** Year + studio shown in the bottom rule. */
    copyrightLine: string;
    /** Right-hand small links. */
    links: ReadonlyArray<{ label: string; href: string }>;
  };
};

export const siteConfig: SiteConfig = {
  brandName: "Fairways",
  brandShortName: "Fairways",
  brandLowerName: "fairways",
  tagline: "Every course in England, tracked.",
  domain: "fairways.app",
  appStoreUrl: null,
  contactEmail: "hello@pinehollow.studio",
  hero: {
    eyebrow: "Coming to iOS",
    line1: "Every course in",
    line2Gradient: "England",
    line3Italic: "tracked.",
    subhead:
      "Mark the courses you've played. Watch the map fill in, counties tick over, and your collection grow round by round.",
  },
  features: [
    {
      eyebrow: "The map",
      title: "An atlas of England's golf courses",
      body:
        "Every course in the country, county by county. Tap one you've played. Tap another. Counties light up as you complete them.",
    },
    {
      eyebrow: "Round logging",
      title: "Log a round, not a chore",
      body:
        "Score, photo, who you played with, a short note. That's it. No data entry, no per-hole bookkeeping. The round is the memory.",
    },
    {
      eyebrow: "Friends",
      title: "Compare collections, not handicaps",
      body:
        "See where your friends have been. Tick off the same courses. The leaderboard counts where you've been — not how well you played there.",
    },
  ],
  forClubs: {
    eyebrow: "For golf clubs",
    title: "Understand who's playing your course",
    body:
      "We sell aggregated, anonymised insights to clubs — visitor profile, bucket-list demand, conversion trends. Individual user data is never sold or exposed. If you run a club and want a preview, get in touch.",
    ctaLabel: "Talk to us",
    ctaHref: "mailto:hello@pinehollow.studio?subject=Fairways%20for%20clubs",
  },
  footer: {
    studioName: "Pinehollow Studios",
    copyrightLine: `© ${new Date().getFullYear()} Pinehollow Studios Limited`,
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Contact", href: "mailto:hello@pinehollow.studio" },
    ],
  },
};
