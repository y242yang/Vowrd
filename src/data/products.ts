export type FeatureIcon = "watch" | "heart" | "trophy" | "chart" | "share" | "target" | "search" | "users" | "calendar" | "receipt";

export type Feature = {
  icon: FeatureIcon;
  title: string;
  description: string;
};

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  status: "live" | "coming-soon";
  storeUrl?: string;
  group: "am" | "pm";
  features?: Feature[];
};

export const products: Product[] = [
  {
    slug: "easyout",
    name: "EasyOut",
    tagline: "Split expenses and plan trips.\nNo awkward 'you owe me' texts.",
    description:
      "EasyOut takes the friction out of tracking shared costs with friends. Create a group, add anyone by name with no account needed, and log expenses with exactly who paid and who's splitting it. Plan the whole trip alongside it, with flights, hotel rooms, a day-by-day itinerary, and a wish list you vote on together. Everything updates for the whole group in real time.",
    icon: "/easyout-logo.png",
    status: "coming-soon",
    group: "am",
    features: [
      {
        icon: "users",
        title: "No accounts required",
        description: "Add members by name only. Nobody needs to download EasyOut or sign up to be in your group.",
      },
      {
        icon: "receipt",
        title: "Log expenses your way",
        description: "Categorize each expense, pick who paid, and choose exactly who splits it, with totals that update for everyone in real time.",
      },
      {
        icon: "calendar",
        title: "Plan the whole trip",
        description: "Build a day-by-day itinerary, and track flights and hotel rooms by member.",
      },
      {
        icon: "heart",
        title: "Decide together",
        description: "Build a shared wish list for the trip and vote on what makes the cut.",
      },
    ],
  },
  {
    slug: "repilot",
    name: "Repilot",
    tagline: "Your workout log and coach.",
    description:
      "Repilot is your workout log and coach, built to live on your wrist. Log sets in real time from your Apple Watch, or let it pull runs, rides, swims, and more straight from Apple Health automatically. It flags personal records the moment you hit them, scores every session across cardio, strength, and mobility, and turns your week into a report with a plan for what to focus on next. Cap off a workout with a shareable recap card, ready for your story. Everything stays on your device, no account or backend required.",
    icon: "/repilot-icon.png",
    status: "live",
    storeUrl: "https://apps.apple.com/us/app/repilot/id6775357927",
    group: "am",
    features: [
      {
        icon: "watch",
        title: "Live from your wrist",
        description: "Log sets in real time from your Apple Watch. No phone required.",
      },
      {
        icon: "heart",
        title: "Auto-imported from Health",
        description: "Runs, rides, swims, and more sync in automatically from Apple Health.",
      },
      {
        icon: "trophy",
        title: "PRs flagged instantly",
        description: "Know the moment you beat your all-time best on any lift.",
      },
      {
        icon: "chart",
        title: "Progress from every angle",
        description: "Weekly volume and training-balance charts, plus long-term trends for pace, heart rate, reps, and weight lifted, down to a single exercise.",
      },
      {
        icon: "target",
        title: "Coaching tuned to your goal",
        description: "Set a goal, like build muscle or improve cardio, and get a training-balance breakdown with specific suggestions for hitting it, computed right on your device.",
      },
      {
        icon: "share",
        title: "Shareable recap cards",
        description: "Turn any workout into a story-ready image in one tap.",
      },
    ],
  },
  {
    slug: "studio-hop",
    name: "Studio Hop",
    tagline: "Find dance classes and studios\nnear you.",
    description:
      "Studio Hop helps you find dance classes and studios across the Bay Area. Search by date, style, level, location, or studio, then book straight from the app or add a class to your calendar. Follow friends to see what they've saved and committed to, with a shared-class badge whenever you've both shown up to the same session, so you're never dancing alone.",
    icon: "/dance-icon.png",
    status: "live",
    storeUrl: "https://apps.apple.com/us/app/studio-hop-bay-area-edition/id6785327093",
    group: "am",
    features: [
      {
        icon: "search",
        title: "Search five ways",
        description: "Filter by date, style, level, location, or studio, across dozens of styles from Hip Hop to Bachata to Vogue.",
      },
      {
        icon: "users",
        title: "See where your friends dance",
        description: "Follow friends to see their saved and committed classes once they accept, and spot a shared badge whenever you've both signed up for the same session.",
      },
      {
        icon: "heart",
        title: "Save now, commit later",
        description: "Heart a class to save it, then swipe to commit once you've actually gone, building a running log of everything you've danced.",
      },
      {
        icon: "calendar",
        title: "Book and get reminded",
        description: "Book straight through the studio's page and add the class to your calendar with the instructor, studio, and address already filled in.",
      },
    ],
  },
  {
    slug: "become",
    name: "Become: Vision to Day",
    tagline: "Build habits that stick.\nBecome who you want to be.",
    description:
      "Become is a habit builder designed to help things actually stick. Set the identity you're building toward, like Disciplined or Strong, and let routines, weekly commitments, and monthly themes flow from there. Track streaks day by day, then zoom out to a full year to see the arc, one small win at a time.",
    icon: "/become-icon.png",
    status: "coming-soon",
    group: "pm",
    features: [
      {
        icon: "target",
        title: "Built around who you're becoming",
        description: "Set identities like Disciplined or Strong, then let a monthly theme and its goals flow from there.",
      },
      {
        icon: "calendar",
        title: "Routines that fit your week",
        description: "Build routines with daily or weekly recurrence and a day picker, and add them straight to your calendar.",
      },
      {
        icon: "chart",
        title: "Zoom from a day to a year",
        description: "Move between Week, Month, and Year views, with a full month grid and a 12-month view to see the whole arc.",
      },
      {
        icon: "trophy",
        title: "Streaks and a year-end recap",
        description: "Track your current and longest streaks, see your best and toughest months, and export a full month as a shareable PDF.",
      },
    ],
  },
];
