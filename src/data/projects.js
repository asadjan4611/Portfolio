import marketLaneImage from "../assets/images/3.png";
import nestScoutImage from "../assets/images/2.png";
import sociopediaImage from "../assets/images/1.png";

export const projects = [
  {
    id: "marketlane",
    name: "MarketLane",
    period: "Independent product build",
    repo: "https://github.com/asadjan4611/WEB_APP",
    live: "https://frontend-multivendor.netlify.app/",
    cover: marketLaneImage,
    solution:
      "A multi-vendor marketplace that connects customers, sellers, and administrators through one coherent commerce workflow.",
    overview:
      "I designed and built the marketplace end to end: account roles, seller onboarding, catalogue and order flows, payments, and customer–seller communication. The challenge was keeping a complex three-sided product understandable without weakening access control or transaction safety.",
    impact: [
      "Delivered a complete commerce journey from seller onboarding and product discovery through checkout, order tracking, and support.",
    ],
    sections: [
      {
        title: "Separate roles, one product",
        solution:
          "Created focused customer, seller, and administrator journeys with explicit permissions and guarded actions.",
      },
      {
        title: "Transactions people can trust",
        solution:
          "Connected payment confirmation to a predictable order lifecycle so users always understand what happens next.",
      },
      {
        title: "Communication in context",
        solution:
          "Kept buyer–seller messages connected to the relevant order, making questions and support easier to resolve.",
      },
    ],
  },
  {
    id: "nestscout",
    name: "NestScout",
    period: "Independent product build",
    repo: "https://github.com/asadjan4611/MERN_ESTATE_APP",
    live: "https://mern-estate-frontend.netlify.app/",
    cover: nestScoutImage,
    solution:
      "A property discovery product with secure ownership, image-led listings, and focused search across practical buying criteria.",
    overview:
      "I built the complete listing lifecycle—from low-friction sign-in and owner-only publishing to image management and server-side discovery. The product balances simple browsing for visitors with clear control for listing owners.",
    impact: [
      "Created a dependable path for owners to publish and manage properties while helping visitors narrow a large catalogue quickly.",
    ],
    sections: [
      {
        title: "Ownership by default",
        solution:
          "Enforced ownership rules at the service boundary so only the correct account can change or remove a listing.",
      },
      {
        title: "Useful property discovery",
        solution:
          "Designed filtering, sorting, and pagination around the criteria people use when comparing homes.",
      },
      {
        title: "A visual publishing flow",
        solution:
          "Built multi-image upload and management into the listing workflow without making publishing feel heavy.",
      },
    ],
  },
  {
    id: "sociopedia",
    name: "Sociopedia",
    period: "Independent product build",
    repo: null,
    live: "https://sociopedia-front-end.netlify.app/",
    cover: sociopediaImage,
    solution:
      "A responsive social product for publishing media, following conversations, and interacting through likes and comments.",
    overview:
      "I shaped a familiar social experience around a protected account and content model. The work covered the entire interaction loop: identity, publishing, feed rendering, media, reactions, and conversation.",
    impact: [
      "Delivered a complete authenticated social loop with responsive publishing, browsing, and interaction flows.",
    ],
    sections: [
      {
        title: "Protected participation",
        solution:
          "Separated public presentation from authenticated actions and guarded private operations at the API boundary.",
      },
      {
        title: "Media without friction",
        solution:
          "Kept post creation direct while supporting image-led content and responsive feed presentation.",
      },
      {
        title: "Fast interaction feedback",
        solution:
          "Structured likes and comments so the interface can respond immediately while retaining consistent server state.",
      },
    ],
  },
  {
    id: "chemist-lab",
    name: "Chemist Lab",
    period: "Mobile product build",
    repo: null,
    live: null,
    cover: null,
    solution:
      "A mobile booking experience that helps people find lab tests, organise selections, and request a convenient appointment.",
    overview:
      "I built a compact mobile journey for discovering tests, reviewing a cart, choosing a time, and completing a validated booking request. Local persistence keeps unfinished selections intact across restarts and unreliable connections.",
    impact: [
      "Turned a multi-step laboratory booking task into a focused mobile flow that remains useful across interrupted sessions.",
    ],
    sections: [
      {
        title: "Find the right test",
        solution:
          "Combined categories and local search to help people move quickly through an unfamiliar medical catalogue.",
      },
      {
        title: "A calm booking sequence",
        solution:
          "Organised selection, review, scheduling, and personal details into a guided flow with clear validation.",
      },
      {
        title: "Resilient on mobile",
        solution:
          "Persisted cart and form progress locally so a closed app or interrupted connection does not erase the user’s work.",
      },
    ],
  },
];
