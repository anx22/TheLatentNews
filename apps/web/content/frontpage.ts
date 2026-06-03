export type VisualWorld =
  | "nocturne-grid"
  | "paper-fold"
  | "archive-dust"
  | "redaction-band"
  | "signal-orb"
  | "chrome-bloom";

export type FrontpageStory = {
  title: string;
  kicker: string;
  visualWorld: VisualWorld;
  dek: string;
};

export type FrontpageCanonItem = {
  eyebrow: string;
  title: string;
  summary: string;
};

export type FrontpageContent = {
  masthead: {
    meta: string;
    title: string;
    tagline: string;
  };
  hero: {
    indicatorLabel: string;
    indicatorValue: string;
    eyebrow: string;
    title: string;
    dek: string;
    visualLabel: string;
  };
  signalRail: {
    eyebrow: string;
    title: string;
    signals: string[];
  };
  stories: FrontpageStory[];
  essay: {
    eyebrow: string;
    title: string;
    body: string;
  };
  canonIndex: FrontpageCanonItem[];
  footerTicker: string[];
};

export const frontpageContent: FrontpageContent = {
  masthead: {
    meta: "AI · Technology · Culture · Future",
    title: "The Latent Times",
    tagline: "Understand signals. Shape tomorrow.",
  },
  hero: {
    indicatorLabel: "Lead Indicator",
    indicatorValue: "01 / Machine Culture",
    eyebrow: "Frontpage Briefing · Issue 000",
    title: "Artificial intelligence is no longer a sector. It is the weather.",
    dek: "The Latent Times tracks the ambient forces turning models into media, interfaces into rituals, and technical decisions into cultural gravity.",
    visualLabel: "Latent Field",
  },
  signalRail: {
    eyebrow: "Signal Rail",
    title: "Five movements below the fold",
    signals: [
      "Synthetic provenance becomes a luxury marker.",
      "Small models move from utility to intimacy.",
      "Interfaces collapse into prompts, rituals, and taste.",
      "AI labor shifts from replacement to orchestration.",
      "The archive becomes the next contested frontier.",
    ],
  },
  stories: [
    {
      title: "The Machine Room Has a Velvet Rope",
      kicker: "Infrastructure",
      visualWorld: "nocturne-grid",
      dek: "How compute scarcity is being styled as cultural capital.",
    },
    {
      title: "When Agents Learn House Style",
      kicker: "Design",
      visualWorld: "paper-fold",
      dek: "Brand systems are becoming living editorial organisms.",
    },
    {
      title: "The New Mythology of the Dataset",
      kicker: "Culture",
      visualWorld: "archive-dust",
      dek: "Every corpus carries a worldview; every worldview wants a curator.",
    },
    {
      title: "Soft Power, Hard Models",
      kicker: "Policy",
      visualWorld: "redaction-band",
      dek: "National AI strategy now reads like a fashion week calendar.",
    },
    {
      title: "Post-Search Memory Palaces",
      kicker: "Interfaces",
      visualWorld: "signal-orb",
      dek: "The web is reorganizing around recall, not retrieval.",
    },
    {
      title: "Couture for the Synthetic Self",
      kicker: "Identity",
      visualWorld: "chrome-bloom",
      dek: "Personal models make taste programmable and reputation portable.",
    },
  ],
  essay: {
    eyebrow: "Essay Strip",
    title:
      "The next newspaper is not a dashboard. It is a discipline for seeing the pattern before it becomes consensus.",
    body: "Read slowly. Compare signals. Distrust frictionless certainty. The future arrives first as a tonal shift, then as infrastructure.",
  },
  canonIndex: [
    {
      eyebrow: "Canon",
      title: "The Prompt Is Dead",
      summary: "From command line to conversation, from conversation to choreography.",
    },
    {
      eyebrow: "Index",
      title: "Signal Map",
      summary: "A living taxonomy for agents, archives, compute, culture, and power.",
    },
  ],
  footerTicker: ["News", "Analysis", "Interviews", "Reports", "Signals", "The Latent Lens"],
};
