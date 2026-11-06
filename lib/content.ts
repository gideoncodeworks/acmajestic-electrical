// Single source of truth for A.C. Majestic Electrical — business info, services,
// service area, FAQs. Edit here; pages, schema, and sitemap all read from this.

export const SITE = {
  name: 'A.C. Majestic Electrical',
  legalName: 'A.C. Majestic Electrical Service LLC',
  owner: 'Antonio Cunningham',
  url: 'https://acmajesticelectrical.com',
  phone: '216-584-5959',
  phoneTel: '+12165845959',
  phoneDisplay: '216.584.5959',
  booking: 'https://acmajesticelectrical.as.me/schedule/431602ed',
  instagram: 'https://instagram.com/acm_electric',
  instagramHandle: '@acm_electric',
  city: 'Cleveland',
  state: 'OH',
  stateFull: 'Ohio',
  foundingYear: 2020,
} as const

export const SERVICE_AREAS = [
  'Cleveland',
  'Akron',
  'Painesville',
  'Lakewood',
  'Parma',
  'Cleveland Heights',
  'Shaker Heights',
  'Maple Heights',
  'Garfield Heights',
  'Euclid',
  'Mentor',
  'Willoughby',
  'Beachwood',
  'Strongsville',
  'North Olmsted',
  'Westlake',
  'Rocky River',
  'Bedford',
  'Twinsburg',
  'Hudson',
  'Stow',
  'Cuyahoga Falls',
] as const

// Three service pillars the site is organized around.
export const PILLARS = [
  {
    id: 'electrical',
    label: 'Residential Electrical',
    icon: 'bolt',
    summary:
      'The core of the business. Licensed electrical work on homes across the Cleveland area — safe, up to code, and cleaned up when the job is done.',
    services: ['panel-changeout', 'rewire', 'outside-service', 'lighting', 'circuits'],
  },
  {
    id: 'commercial',
    label: 'Light Commercial',
    icon: 'building',
    summary:
      'Electrical work for shops, offices, salons, restaurants, and small commercial spaces. Flexible scheduling so your business keeps running.',
    services: ['light-commercial'],
  },
  {
    id: 'rehab',
    label: 'Total Rehabs',
    icon: 'hammer',
    summary:
      'Antonio also runs residential rehabs — electrical, drywall, framing, roofs. A single contractor you can trust across the whole scope, or just the one piece you need.',
    services: ['total-rehab'],
  },
] as const

export type ServiceSlug =
  | 'panel-changeout'
  | 'rewire'
  | 'outside-service'
  | 'lighting'
  | 'circuits'
  | 'light-commercial'
  | 'total-rehab'

export type Service = {
  slug: ServiceSlug
  pillar: 'electrical' | 'commercial' | 'rehab'
  title: string
  shortLabel: string
  icon: string
  tagline: string
  description: string
  bullets: string[]
  faq: { q: string; a: string }[]
  metaTitle: string
  metaDescription: string
}

export const SERVICES: Service[] = [
  {
    slug: 'panel-changeout',
    pillar: 'electrical',
    title: 'Electrical Panel Changeouts',
    shortLabel: 'Panel changeouts',
    icon: 'panel',
    tagline: 'Upgrade an old or undersized panel so the rest of the house stops fighting it.',
    description:
      'If breakers trip every time the microwave and AC run together, if the panel is a brand nobody insures anymore, or if you’re planning an EV charger, a hot tub, or a kitchen remodel, the panel is where the job starts. A.C. Majestic replaces residential panels end-to-end — permit, service drop coordination, grounding, labeling, and the clean-up after.',
    bullets: [
      '100A, 150A, and 200A residential service upgrades',
      'Replacement of outdated or recalled panels (Federal Pacific, Zinsco, etc.)',
      'Sub-panel installation for additions, garages, and basements',
      'Proper grounding and bonding to current NEC code',
      'Honest labeling of every circuit before we leave',
    ],
    faq: [
      {
        q: 'How long does a panel changeout take?',
        a: 'Most residential panel swaps in Cleveland take one working day, plus a short power-off window with the utility. We try to get the permit pulled and the utility coordinated before we arrive so you lose power once, not twice.',
      },
      {
        q: 'Do I need to upgrade to 200 amps?',
        a: 'Not automatically. 100A is fine for a lot of smaller homes. If you’re adding an EV charger, central AC, a tankless electric water heater, or doing a full rehab, 200A usually makes sense. Antonio will walk the house with you before quoting.',
      },
    ],
    metaTitle: 'Electrical Panel Changeouts in Cleveland | A.C. Majestic Electrical',
    metaDescription:
      'Licensed residential panel changeouts, 100A–200A service upgrades, and sub-panels across Cleveland, Akron, and Painesville. Permits pulled, grounding to NEC code, every circuit labeled.',
  },
  {
    slug: 'rewire',
    pillar: 'electrical',
    title: 'Whole-House & Partial Rewires',
    shortLabel: 'Rewires',
    icon: 'bolt',
    tagline: 'Pull the knob-and-tube or cloth-wrapped wiring and replace it with safe modern cable.',
    description:
      'A rewire is the right call when the house still has knob-and-tube, cloth-insulated wiring, or aluminum branch circuits — or when every room has two outlets and you’re running extension cords. A.C. Majestic handles whole-house and partial rewires with careful drywall patching and a punch-list review at the end.',
    bullets: [
      'Full-home rewires in older Cleveland-area housing stock',
      'Knob-and-tube and aluminum-branch replacement',
      'Room-by-room or circuit-by-circuit rewires',
      'New GFCI and AFCI protection where code now requires it',
      'Drywall opening kept to the minimum needed',
    ],
    faq: [
      {
        q: 'Can you rewire without tearing the walls down?',
        a: 'Most of the time, yes. A good electrician fishes new cable through existing walls and only opens drywall where it’s unavoidable. We mark every planned opening with you before we cut.',
      },
      {
        q: 'Will a rewire lower my insurance?',
        a: 'In Ohio it often does — carriers hate knob-and-tube and aluminum branch wiring. Ask your agent for a new quote after the rewire; most will re-run it on the spot.',
      },
    ],
    metaTitle: 'Whole-House Rewires in Cleveland | A.C. Majestic Electrical',
    metaDescription:
      'Licensed whole-house and partial rewires for older Cleveland-area homes. Knob-and-tube and aluminum-branch replacement, modern GFCI/AFCI protection, minimal drywall damage.',
  },
  {
    slug: 'outside-service',
    pillar: 'electrical',
    title: 'Outside Services — Garages, Sheds, Outlets & EV',
    shortLabel: 'Outside services',
    icon: 'bolt',
    tagline: 'Power from the house to anywhere you need it — garages, sheds, pools, EV chargers, and exterior outlets.',
    description:
      'If you need power past the four walls of the house, this is the service. A.C. Majestic runs feeders out to detached garages, pole barns, sheds, and workshops; installs exterior GFCI outlets for the patio, driveway, and soffit; and brings power to pools, hot tubs, pole lighting, and EV chargers. We size the cable, bury or run the conduit cleanly, land the sub-panel, and pull the permit so it inspects on the first visit.',
    bullets: [
      'Feeders and sub-panels for detached garages, sheds, and pole barns',
      'Exterior GFCI outlets — patios, decks, soffits for seasonal lighting',
      'Power to pools, hot tubs, pond pumps, and well pumps',
      'EV charger circuits in the driveway or garage',
      'Buried conduit or direct-burial cable, done to NEC depth and clearances',
    ],
    faq: [
      {
        q: 'Can you run a sub-panel to my detached garage?',
        a: 'Yes. Detached-garage feeders are one of the most common outside-service jobs we do. We size the feeder for the load you want, bury the conduit to code depth, and land a sub-panel in the garage with its own grounding.',
      },
      {
        q: 'Can I get an outdoor outlet by the driveway or patio?',
        a: 'Yes, and it should be GFCI-protected and weather-rated. We can pick up from a nearby interior circuit or run a new one depending on what the location needs.',
      },
      {
        q: 'Can you install an EV charger in the garage?',
        a: 'Yes. Most Level 2 chargers land on a dedicated 50A, 240V circuit. Share the charger model with us and we’ll size the breaker, cable, and outlet (NEMA 14-50 or hardwire) correctly.',
      },
    ],
    metaTitle: 'Power to Garage, Shed, Pool & EV Charger — Outside Services Cleveland | A.C. Majestic',
    metaDescription:
      'Feeders to detached garages, sheds, and pole barns. Exterior GFCI outlets, pool and hot-tub power, EV charger circuits. Licensed, permit-pulled, buried to code across Cleveland and Northeast Ohio.',
  },
  {
    slug: 'lighting',
    pillar: 'electrical',
    title: 'Lighting Installation',
    shortLabel: 'Lighting',
    icon: 'bulb',
    tagline: 'Recessed cans, fixtures, exterior lighting, switches, and dimmers — done clean.',
    description:
      'From a single dining-room fixture to a whole-floor recessed lighting plan, A.C. Majestic hangs lighting that looks like it was always supposed to be there. Switches land square, trims sit flush, and the drywall gets patched before we go.',
    bullets: [
      'Recessed can and LED retrofit lighting',
      'Chandelier and ceiling-fixture hanging',
      'Exterior, soffit, and security lighting',
      'Dimmer and smart-switch installation',
      'Fan boxes, fan support, and fan-rated wiring',
    ],
    faq: [
      {
        q: 'Can you install a fan where a light fixture used to be?',
        a: 'Only with a fan-rated box. Regular light boxes aren’t built for the weight or torque of a ceiling fan. We swap the box when needed so the fan is safe and quiet.',
      },
    ],
    metaTitle: 'Lighting Installation in Cleveland | A.C. Majestic Electrical',
    metaDescription:
      'Recessed lighting, fixture hanging, exterior lighting, dimmers, and fan installs across Cleveland and Northeast Ohio. Clean patches, fan-rated boxes, honest pricing.',
  },
  {
    slug: 'circuits',
    pillar: 'electrical',
    title: 'Added Circuits & Outlets',
    shortLabel: 'Circuits & outlets',
    icon: 'outlet',
    tagline: 'A dedicated circuit for the EV charger, the window AC, the garage freezer — done right.',
    description:
      'If you’re adding an EV charger, a window AC, a garage freezer, a workshop, or a kitchen appliance that keeps tripping the shared circuit, it needs its own dedicated line. A.C. Majestic runs new circuits from the panel, lands them on proper breakers, and installs the outlets you need.',
    bullets: [
      'Dedicated 15A, 20A, 30A, and 50A circuits',
      'EV charger (NEMA 14-50 and hardwired) installation',
      'GFCI outlets for kitchens, baths, garages, and exteriors',
      'USB and USB-C integrated outlets',
      'Switch replacements and dimmer upgrades',
    ],
    faq: [
      {
        q: 'What kind of circuit do I need for a Level 2 EV charger?',
        a: 'Most residential Level 2 chargers land on a dedicated 50A, 240V circuit. The exact breaker and wire size depends on the charger. Send us the model and we’ll size it right.',
      },
    ],
    metaTitle: 'New Circuits, Outlets & EV Chargers in Cleveland | A.C. Majestic Electrical',
    metaDescription:
      'Dedicated circuits, GFCI outlets, and EV charger installs in Cleveland, Akron, and Painesville. Properly sized breakers, clean conduit runs, and labeled panels.',
  },
  {
    slug: 'light-commercial',
    pillar: 'commercial',
    title: 'Light Commercial Electrical',
    shortLabel: 'Light commercial',
    icon: 'building',
    tagline: 'Shops, salons, offices, and small restaurants — electrical work that doesn’t interrupt your day.',
    description:
      'A.C. Majestic takes on light commercial projects across Cleveland — tenant fit-outs, lighting retrofits, outlet and circuit adds, panel work, and troubleshooting. We schedule around your business hours when we can, keep the space clean, and get the inspection signed off.',
    bullets: [
      'Tenant improvement and fit-out electrical',
      'Commercial lighting retrofits (LED, high-bay, exterior)',
      'Dedicated circuits for ovens, salon chairs, servers, POS',
      'Troubleshooting for intermittent issues that disrupt operations',
      'After-hours and weekend scheduling available',
    ],
    faq: [
      {
        q: 'Do you work after hours so we don’t have to close?',
        a: 'Yes. We regularly schedule commercial work for evenings or weekends so the business keeps running. Get on the calendar early — those slots fill fast.',
      },
    ],
    metaTitle: 'Light Commercial Electrician in Cleveland | A.C. Majestic Electrical',
    metaDescription:
      'Light commercial electrical for shops, salons, offices, and restaurants across Cleveland, Akron, and Painesville. Tenant improvements, LED retrofits, after-hours scheduling.',
  },
  {
    slug: 'total-rehab',
    pillar: 'rehab',
    title: 'Residential Rehabs & General Contracting',
    shortLabel: 'Total rehabs',
    icon: 'hammer',
    tagline: 'One contractor across the whole house — or just the one trade you need.',
    description:
      'Antonio also runs residential rehabs. That means A.C. Majestic can take on the full scope — electrical, drywall, framing, roof — on a flip, a rental turn, or a long-overdue remodel. If you just need the roof or just the drywall, that’s fine too; we take individual trades and don’t require a whole-house contract to say yes.',
    bullets: [
      'Full-rehab project management, electrical included',
      'Rental turns and flip remodels on realistic timelines',
      'Roofing, drywall, and framing — standalone or bundled',
      'Honest scope-and-timeline conversations before the first invoice',
      'Local, owner-run, reachable when something changes',
    ],
    faq: [
      {
        q: 'Will you do just the roof, or do I have to hire you for everything?',
        a: 'Just the roof is fine. Antonio is happy to take individual pieces of a project. If the scope grows, we grow with it; if not, we finish the one thing and move on.',
      },
      {
        q: 'Do you work with investors on rental turns?',
        a: 'Yes. Rental turns and small rehabs are a big part of what we do. We work to a budget and a turn-date, not a dream scope.',
      },
    ],
    metaTitle: 'Residential Rehabs & General Contracting in Cleveland | A.C. Majestic',
    metaDescription:
      'Residential rehabs, rental turns, and single-trade work across Cleveland. Electrical, drywall, framing, and roofs — bundled or standalone, owner-run.',
  },
]

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug)
}

export function servicesByPillar(pillarId: string): Service[] {
  return SERVICES.filter((s) => s.pillar === pillarId)
}

// Top-level FAQs for the home page and FAQ schema. Written to answer the
// questions people actually ask voice assistants and AI search.
export const HOME_FAQ = [
  {
    q: 'What areas does A.C. Majestic Electrical serve?',
    a: 'A.C. Majestic Electrical serves Cleveland, Akron, Painesville, and most communities within about a one-hour drive of Cleveland — including the east side suburbs, Lakewood, Parma, Mentor, Hudson, and out to Sandusky’s edge.',
  },
  {
    q: 'Is A.C. Majestic Electrical licensed and insured?',
    a: 'Yes. A.C. Majestic Electrical Service LLC is a licensed and insured residential electrical contractor based in the Cleveland, Ohio area.',
  },
  {
    q: 'Does A.C. Majestic Electrical do more than electrical work?',
    a: 'Yes. Antonio Cunningham is a residential electrician who also runs total rehabs — including roofing, drywall, and framing. You can hire him for the single trade you need, or for the whole project.',
  },
  {
    q: 'How do I book A.C. Majestic Electrical?',
    a: 'Call 216-584-5959 or book online at acmajesticelectrical.com. Online booking opens the live calendar so you can pick a time that works for you.',
  },
  {
    q: 'Is A.C. Majestic Electrical hiring?',
    a: 'Yes. A.C. Majestic Electrical is actively growing and hiring 1099 electricians and skilled trade help across the Cleveland area. See the Careers page to get in touch.',
  },
] as const

// Image registry — royalty-free Unsplash photos, downloaded to /public/images.
// alt text written for accessibility + AEO (describes the scene, not the keyword).
export const IMAGES = {
  hero: { src: '/images/hero-electrician.jpg', alt: 'Electrician testing wiring inside a residential control panel with a multimeter' },
  electricalWork: { src: '/images/electrical-work.jpg', alt: 'Electrician in a yellow hard hat and safety glasses installing new wiring at a residential job site' },
  panelChangeout: { src: '/images/panel-changeout.jpg', alt: 'Interior of an electrical panel showing circuit breakers and colored branch-circuit wiring' },
  commercialPanel: { src: '/images/commercial-panel.jpg', alt: 'Open commercial electrical control panel with wiring, breakers, and relays' },
  circuits: { src: '/images/circuits.jpg', alt: 'Electrician in a hi-vis shirt using a screwdriver to land conductors in an electrical panel' },
  crew: { src: '/images/crew.jpg', alt: 'A group of construction crew members standing together on a work site' },
  jobSite: { src: '/images/outside-service.jpg', alt: 'Two workers on an active construction job site' },
  cleveland: { src: '/images/cleveland.jpg', alt: 'The Cleveland, Ohio skyline on a clear day' },
  clevelandHarbor: { src: '/images/cleveland-harbor.jpg', alt: 'The Cleveland skyline and lakefront with a cargo ship in the harbor' },
  rehab: { src: '/images/rehab.jpg', alt: 'A contractor on a ladder inside a residential property mid-renovation' },
  lighting: { src: '/images/lighting.jpg', alt: 'Warm pendant lights hanging in a residential interior' },
  framing: { src: '/images/framing.jpg', alt: 'Wooden framing and layout of a residential home under construction' },
} as const

export const SERVICE_IMAGE: Record<ServiceSlug, keyof typeof IMAGES> = {
  'panel-changeout': 'panelChangeout',
  rewire: 'electricalWork',
  'outside-service': 'jobSite',
  lighting: 'lighting',
  circuits: 'circuits',
  'light-commercial': 'commercialPanel',
  'total-rehab': 'rehab',
}

// Short-form reviews placeholder. The Google Business Profile is pending; when
// it goes live, swap these for the real embed.
export const REVIEWS_PLACEHOLDER = {
  pending: true,
  heading: 'Reviews coming soon',
  note:
    'A.C. Majestic Electrical’s Google Business Profile is live and collecting reviews. The feed below will pull in once the first batch posts — until then, here’s how Antonio describes his own work.',
  quote:
    'A lot of people get hired for jobs, take the money and don’t come back. I stand on my word. I show up, I do the work, and I finish it before I go to the next one.',
  quoteAttribution: 'Antonio Cunningham, Owner',
}
