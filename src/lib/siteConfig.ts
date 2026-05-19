/**
 * Single source of truth for everything brand-specific.
 *
 * When the App Store approves the final name, change the values in this file
 * (and update the OG image + favicon) and the entire site is rebranded.
 */

export type SiteConfig = {
  brandName: string;
  brandShortName: string;
  brandLowerName: string;
  /** Used in OG / page-title fallback. */
  tagline: string;
  domain: string;
  /** Null until live. When set, swap waitlist UI for App Store CTA. */
  appStoreUrl: string | null;
  contactEmail: string;

  /** Hero composition — three-line serif stack with the italic word in the middle. */
  hero: {
    /** UPPERCASE chip above the headline. Placeholder count rendered next to it. */
    liveEyebrowTarget: number;
    liveEyebrowLabel: string;
    /** Three-part headline: [pre, italicWord, post]. */
    headline: readonly [string, string, string];
    /** Italic lede paragraph beneath the headline. */
    lede: string;
    /** Meta strip below the email field. */
    metaStrip: ReadonlyArray<string>;
  };

  /** Course marquee — duplicated automatically for seamless loop. */
  marquee: ReadonlyArray<string>;

  /** Stats strip — four cells. */
  stats: ReadonlyArray<
    | { kind: "number"; target: number; prefix?: string; suffix?: string; label: string }
    | { kind: "static"; value: string; label: string }
  >;

  /** Three feature cards — `kind` selects the motif (atlas / tap / circle). */
  features: ReadonlyArray<{
    kind: "atlas" | "tap" | "circle";
    eyebrow: string;
    title: string;
    body: string;
  }>;

  /** Closing CTA section. */
  closingCta: {
    eyebrowTarget: number;
    eyebrowLabel: string;
    headlinePre: string;
    headlineItalic: string;
    sub: string;
    ctaLabel: string;
  };

  /** Section labels for the features header. */
  featuresHeader: {
    eyebrow: string;
    titlePre: string;
    titleItalic: string;
    sub: string;
  };

  footer: {
    /** Short marks shown to the right of the wordmark. */
    marks: ReadonlyArray<string>;
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
    liveEyebrowTarget: 2847,
    liveEyebrowLabel: "joined the waiting list this week",
    headline: ["Every course in ", "England", ", tracked."],
    lede:
      "An iPhone app to keep the golf courses you have played in England, and compare your collection with friends. Almost ready.",
    metaStrip: ["iPhone, iOS 17+", "Free at launch", "Spring 2026"],
  },

  marquee: [
    "Royal Birkdale",
    "Sunningdale",
    "Walton Heath",
    "Royal St George’s",
    "The Berkshire",
    "Royal Lytham",
    "Royal Liverpool",
    "St Enodoc",
    "Saunton",
    "Woodhall Spa",
    "Royal Cinque Ports",
    "Hillside",
    "Royal North Devon",
    "Ganton",
    "Notts (Hollinwell)",
    "Alwoodley",
    "Royal St David’s",
    "Princes",
    "Burnham & Berrow",
    "Trevose",
  ],

  stats: [
    { kind: "number", target: 1842, label: "Courses, top to bottom" },
    { kind: "number", target: 39, label: "Historic counties" },
    { kind: "number", target: 0, prefix: "£", label: "Cost at launch" },
    { kind: "static", value: "Spring ’26", label: "On the App Store" },
  ],

  featuresHeader: {
    eyebrow: "Inside the app",
    titlePre: "Three small ideas, ",
    titleItalic: "kept simple.",
    sub:
      "No scorecards. No leaderboards. No shots gained. Just a quiet way to keep the places you have played, and look at where you should go next.",
  },

  features: [
    {
      kind: "atlas",
      eyebrow: "The atlas",
      title: "Every course in England.",
      body:
        "All 1,842 of them, from championship links to nine-hole village greens. The map is complete on the day we launch.",
    },
    {
      kind: "tap",
      eyebrow: "One tap",
      title: "A round, recorded.",
      body:
        "Tap the course. That is it. No card to scan, no shots to log — the round is kept in the time it takes to read this sentence.",
    },
    {
      kind: "circle",
      eyebrow: "Your circle",
      title: "A polite competition.",
      body:
        "See whose collection runs deepest among the people you play with most. No global rankings. No streaks. No strangers.",
    },
  ],

  closingCta: {
    eyebrowTarget: 2847,
    eyebrowLabel: "already on the list",
    headlinePre: "Be among the ",
    headlineItalic: "first.",
    sub: "One note when the App Store listing arrives. Nothing else. We promise.",
    ctaLabel: "Get notified",
  },

  footer: {
    marks: ["Pinehollow Studios", "Sheffield", "MMXXVI"],
  },
};
