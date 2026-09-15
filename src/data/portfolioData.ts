import { CaseStudy, CareerMilestone, SkillCategory, Certification, Article, GooglePmPillar } from '../types';

export const PERSONAL_INFO = {
  name: "MD Omar Faruq",
  photoUrl: "/faruq.png",
  title: "Technical Product Manager & Product Strategist",
  roleArchetype: "Google Product Manager Archetype: Product Sense • Systems Architecture • Analytical Execution",
  googleMotto: "Focus on the user and all else will follow.",
  location: "Dhaka, Bangladesh",
  email: "faruqdeveloper@gmail.com",
  phone: "+880 1642-031736",
  portfolio: "https://omarfaruqme.vercel.app/",
  resumeUrl: "https://omarfaruqme.vercel.app/",
  github: "https://github.com/faruqiAhmed",
  linkedin: "https://www.linkedin.com/in/omarfaruqofficial/",
  summary: "Product Manager with 1+ years of dedicated product leadership experience and 4+ years of hands-on iOS engineering experience. I bridge the gap between customer problems, product strategy, and technical execution — turning ambiguous problems into structured PRDs, data-driven OKRs, prioritized roadmaps, and buildable product solutions across Fintech, On-Demand Mobility, and Multi-Product SaaS.",
  stats: [
    { label: "Shipped Products", value: "6+" },
    { label: "Engineering Craft", value: "4+ Yrs" },
    { label: "Product Leadership", value: "1+ Yrs" },
    { label: "Agile Sprints Led", value: "45+" }
  ],
  pmCorePillars: [
    {
      title: "Product Sense",
      desc: "User empathy, problem framing, frictionless UX",
      theme: "blue"
    },
    {
      title: "Technical PM",
      desc: "APIs, architecture, dependencies, technical trade-offs",
      theme: "purple"
    },
    {
      title: "Analytics & OKRs",
      desc: "North Star metrics, experimentation, outcome measurement",
      theme: "green"
    },
    {
      title: "Leadership",
      desc: "Influence without authority, cross-functional alignment",
      theme: "amber"
    }
  ],
  googleCoreFocus: [
    { pillar: "Product Sense", metric: "10x Thinking", highlight: "User empathy, problem framing, frictionless UX" },
    { pillar: "Technical PM", metric: "Distributed Sync", highlight: "APIs, architecture, dependencies, technical trade-offs" },
    { pillar: "Analytics & OKRs", metric: "North Star + Guardrails", highlight: "North Star metrics, experimentation, outcome measurement" },
    { pillar: "Leadership", metric: "Cross-Functional Velocity", highlight: "Influence without authority, cross-functional alignment" }
  ],
  shippedProductsSummary: [
    { name: "STPay", domain: "Fintech", note: "Spend, Save, and Invest ecosystem" },
    { name: "TingTong", domain: "Social", note: "Real-time engagement app" },
    { name: "Shofar Dhaka", domain: "Local Marketplace", note: "Hyperlocal civic commerce" },
    { name: "Robi Alpha", domain: "Telecom Rewards", note: "High-volume user platform" },
    { name: "HiTaxi Driver", domain: "Ride-Hailing", note: "Driver dispatch & mobility" },
    { name: "Ullomart", domain: "E-Commerce", note: "Retail web & mobile" }
  ]
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "google-maps-trust-navigation",
    title: "Google Maps: Improving Trust & Navigation Experience",
    tagline: "Solving fake reviews, destination parking friction, and complex community reporting through Verified Visits, Smart Parking Cards, and 1-Tap Quick Reports.",
    clientOrCompany: "Google Maps",
    role: "Product Manager Case Study",
    timeline: "July 2026",
    category: "Mobility & Super-Apps",
    heroBadge: "Google Product Case Study",
    badgeCode: "PRD • GOOGLE • 2026",
    statusBadge: "Strategic Proposal",
    keyHighlights: [
      "P1 Verified Visit Reviews using opted-in GPS presence (+30% adoption).",
      "Smart Parking Card reducing arrival search time by 25%.",
      "1-Tap Quick Report cutting submission friction by 60%."
    ],
    overview: "Google Maps is the world's leading navigation and location-intelligence platform, serving billions across 220+ countries. However, three critical UX gaps continue to limit trust, convenience, and data quality: fake reviews reducing consumer confidence, lack of destination parking intelligence causing circling friction, and cumbersome reporting flows that discourage map corrections. This comprehensive Product Case Study analyzes these root causes, benchmarks competitors (Apple Maps, Waze), models TAM/SAM/SOM ($60B/$30B/$15B), and formulates three prioritized solutions evaluated through Nielsen's usability heuristics and RICE scoring.",
    keyMetrics: [
      { label: "Verified Review Adoption", value: "≥30%", detail: "Target lift in consumer review trust (+20% Trust Score)" },
      { label: "Parking Search Time", value: "-25%", detail: "Reduction in destination circling in supported urban markets" },
      { label: "Reports Submitted", value: "+50%", detail: "Boost in community data contributions with -60% submission time" },
      { label: "Nav Completion Lift", value: "+8%", detail: "Increase in end-to-end trip success & +10% CSAT" }
    ],
    prdMetadata: {
      docOwner: "Md Omar Faruq",
      targetLaunch: "July 2026 (Phased Rollout)",
      status: "RFC / Proposed",
      approvers: [
        { role: "Director of Product (Geo Trust & Local)", name: "Google Maps Leadership" },
        { role: "Staff Software Engineer (Routing & Data)", name: "Core Geo Infrastructure" },
        { role: "Principal UX Researcher", name: "Navigation & Human Interface" }
      ],
      docId: "PRD-MAPS-TRUST-2026",
      lastUpdated: "July 2026"
    },
    goalsAndNonGoals: {
      goals: [
        "Eliminate review skepticism through opt-in GPS visit verification and a dedicated 'Verified Reviews Only' filter.",
        "Deliver predictive, contextual parking availability, pricing, and walking distance ~1 km before destination arrival.",
        "Streamline issue reporting to under 30 seconds with immediate confirmation, tracking IDs, and status visibility."
      ],
      nonGoals: [
        "We are NOT building a proprietary parking garage hardware management network (integrates external parking data aggregators).",
        "We are NOT deprecating unverified reviews (unverified reviews remain visible under 'All Reviews' to protect small businesses)."
      ]
    },
    northStarAndGuardrails: {
      northStar: {
        metric: "Successful Navigation Sessions",
        target: "Maximize share of sessions where users reach destination, trust information used, and complete journey with minimal friction",
        rationale: "Connects discovery authenticity, seamless navigation, and community data stewardship into a unified user value metric."
      },
      guardrails: [
        { metric: "Review Fraud & Gaming Escapes", threshold: "< 1.5% false-positive visit verifications", risk: "Loss of merchant trust and user credibility" },
        { metric: "Parking Stale Availability Delta", threshold: "< 5% inaccurate vacancy signals", risk: "Drivers navigate to full lots causing severe frustration" },
        { metric: "Spam & Malicious Report Rate", threshold: "< 2.0% unverified business closure reports", risk: "Erroneous marking of active businesses as closed damages local merchants" }
      ]
    },
    googlePillarHighlight: "Product Sense",
    problemStatement: "Three interconnected UX gaps degrade the Google Maps ecosystem: (1) Fake & Sponsored Reviews erode confidence in local discovery, leading to poor dining/retail decisions; (2) Limited Parking Information leaves drivers circling blocks blindly near destinations, adding unplanned delays and urban emissions; and (3) Difficult, Multi-Step Reporting (hidden behind deep menus with zero post-submission tracking) discourages 82% of users from submitting updates when they encounter wrong hours or closed storefronts.",
    userResearch: {
      persona: "Urban Commuters, Road Trip Drivers, Local Tourists, and Community Contributors navigating daily destinations.",
      painPoints: [
        "85% rely on reviews before visiting a business, but cannot distinguish authentic customer visits from paid/bot reviews.",
        "65% encounter severe parking friction near destinations without upfront visibility into space counts or pricing.",
        "58% encounter outdated business hours or wrong pin locations, but only 18% have ever submitted a report due to tedious workflows."
      ],
      insight: "Trust is won or lost at the critical handoff moments: when evaluating whether to visit, when approaching the final destination kilometer, and when trying to help the community correct map errors."
    },
    userResearchFindings: [
      { finding: "Rely on reviews before visiting a business", percentage: "85%" },
      { finding: "Have experienced difficulty finding parking", percentage: "65%" },
      { finding: "Encountered outdated/incorrect business info", percentage: "58%" },
      { finding: "Have ever submitted a report to Google Maps", percentage: "18%" },
      { finding: "Would use a simpler, one-tap reporting feature", percentage: "90%" }
    ],
    userPersonas: [
      {
        name: "Sarah Ahmed",
        age: 29,
        occupation: "Daily Commuter",
        goals: ["Accurate ETAs", "Traffic-aware routing", "Smooth morning arrival"],
        painPoints: ["No parking info near office adds unplanned delay", "Sudden garage fullness"],
        needs: ["Parking info near office", "Real-time traffic sync"]
      },
      {
        name: "Rahim Hasan",
        age: 35,
        occupation: "Professional Driver",
        goals: ["Fast parking discovery", "Clear hourly pricing", "Minimal walking distance"],
        painPoints: ["Circles the block repeatedly", "Unknown space count", "Unexpected high parking fees"],
        needs: ["Contextual parking card ~1 km out", "1-tap navigation handoff"]
      },
      {
        name: "Emily Chen",
        age: 27,
        occupation: "Tourist & Explorer",
        goals: ["Authentic dining recommendations", "Avoid tourist traps", "Trusted ratings"],
        painPoints: ["Can't tell genuine reviews from fake or paid bots", "Mismatched expectations"],
        needs: ["Verified Visitor badges", "Verified-only review filter"]
      },
      {
        name: "Tanvir Islam",
        age: 31,
        occupation: "Local Contributor",
        goals: ["Help community with correct map data", "Fast report submission", "Visible tracking status"],
        painPoints: ["Reporting buried in nested menus", "No confirmation or status feedback after submission"],
        needs: ["One-tap quick report sheet", "Report tracking ID"]
      }
    ],
    marketSize: [
      { layer: "TAM", definition: "Global digital mapping & location intelligence", estSize: "~$60B" },
      { layer: "SAM", definition: "Navigation, discovery, mapping APIs Google Maps serves", estSize: "~$30B" },
      { layer: "SOM", definition: "Realistic capture through trust & mobility features", estSize: "~$15B" }
    ],
    competitiveBenchmark: [
      { capability: "Business Discovery", googleMaps: "5/5", appleMaps: "3/5", waze: "2/5" },
      { capability: "Reviews & Ratings", googleMaps: "5/5", appleMaps: "2/5", waze: "1/5" },
      { capability: "Parking Information", googleMaps: "2/5", appleMaps: "2/5", waze: "2/5" },
      { capability: "Community Reporting", googleMaps: "3/5", appleMaps: "3/5", waze: "5/5" }
    ],
    heuristicsAudit: [
      { heuristic: "Visibility of System Status", rating: "4/5", keyWeakness: "No parking availability shown; verified reviews not identifiable; report status invisible after submission." },
      { heuristic: "User Control & Freedom", rating: "4/5", keyWeakness: "Reporting requires several steps and submitted reports can't be edited." },
      { heuristic: "Error Prevention", rating: "3/5", keyWeakness: "Fake reviews remain visible; incorrect info persists with little proactive guidance." },
      { heuristic: "Error Recovery", rating: "3/5", keyWeakness: "Limited feedback after report submission; no explanation when reviews are removed." }
    ],
    usabilityIssuesSummary: [
      { issue: "Fake reviews reduce trust", severity: "High", frequency: "High" },
      { issue: "No live parking information", severity: "High", frequency: "High" },
      { issue: "Reporting requires multiple steps", severity: "Medium", frequency: "High" },
      { issue: "Outdated business information persists", severity: "High", frequency: "Medium" }
    ],
    strategicPillars: [
      { pillar: "Trust", goal: "Increase confidence in business information", feature: "Verified Visit Reviews" },
      { pillar: "Convenience", goal: "Improve the driving experience", feature: "Smart Parking Card" },
      { pillar: "Community", goal: "Encourage user contributions", feature: "One-Tap Quick Report" }
    ],
    okrsList: [
      { category: "Trust", target: "Increase Verified Review Rate by 30%; improve Review Trust Score by 20%." },
      { category: "Driving Experience", target: "Reduce average parking search time by 25%; improve Navigation Completion Rate by 8%." },
      { category: "Community", target: "Increase reports submitted by 50%; reduce report submission time by 60%." }
    ],
    proposedSolutions: [
      {
        title: "Solution 1 — Verified Visit Reviews (Highest Priority)",
        description: "A 'Verified Visitor' badge appears on reviews from users confirmed to have visited a location, using opted-in location signals, GPS presence, and visit timing. Users can filter to 'Verified Reviews Only.'",
        bullets: [
          "User Flow: Search Business → Business Profile → Reviews → Enable Verified Filter → Read Verified Reviews → Navigate.",
          "MVP: Verified badge, verified-only filter, consent-based verification, updated sorting.",
          "Target Lift: Verified Review Rate +30% · Review Trust Score +20% · Business Profile Engagement +15%"
        ]
      },
      {
        title: "Solution 2 — Smart Parking Card",
        description: "As a driver approaches their destination (~1 km out), a card surfaces nearby parking with live availability, price, and walking distance, with a one-tap Navigate action.",
        bullets: [
          "User Flow: Start Navigation → Approaching Destination → Parking Card Appears → Select Parking → Navigate to Parking.",
          "MVP: Nearby parking list, availability, price (where available), walking distance, navigation handoff.",
          "Target Lift: Parking Search Time −25% · Parking Card Usage +35% · Navigation Completion Rate +8%"
        ]
      },
      {
        title: "Solution 3 — One-Tap Quick Report",
        description: "Users report common issues (Permanently Closed, Wrong Location, Wrong Hours, Duplicate Listing) directly from the business profile in under 30 seconds, with instant confirmation and a tracking ID.",
        bullets: [
          "User Flow: Business Profile → Quick Report → Choose Issue → Submit → Confirmation.",
          "MVP: One-tap entry point, common issue categories, confirmation, tracking ID.",
          "Target Lift: Reports Submitted +50% · Report Completion Rate +40% · Submission Time −60%"
        ]
      }
    ],
    ricePrioritization: [
      { feature: "Verified Visit Reviews", reach: 9, impact: 10, confidence: 8, effort: 5, riceScore: 144, priority: "P1 (Must Have)" },
      { feature: "One-Tap Quick Report", reach: 6, impact: 7, confidence: 8, effort: 3, riceScore: 112, priority: "P1 (Must Have)" },
      { feature: "Smart Parking Card", reach: 7, impact: 8, confidence: 7, effort: 8, riceScore: 49, priority: "P2 (Should Have)" }
    ],
    mvpScope: [
      "Verified Visit Reviews: Verified badge, verified-only filter, consent-based verification, updated sorting.",
      "One-Tap Quick Report: One-tap entry point, common issue categories (Closed, Wrong Location, Wrong Hours), instant confirmation with tracking ID.",
      "Smart Parking Card follows in Phase 2 once external parking-data partnerships and API contracts are finalized."
    ],
    userJourneyMap: [
      { stage: "1. Search & Discover", userAction: "Find a good place nearby", painPoint: "Can't tell genuine reviews from fake ones", opportunity: "Verified Visit Reviews" },
      { stage: "2. Evaluate Trust", userAction: "Decide with confidence", painPoint: "No visible signal of who actually visited", opportunity: "Verified Visitor badge + filter" },
      { stage: "3. Navigate", userAction: "Reach the destination", painPoint: "Navigation ends before the trip really does", opportunity: "Extend journey past arrival" },
      { stage: "4. Park", userAction: "Park nearby without wasting time", painPoint: "No visibility into parking until arrival", opportunity: "Smart Parking Card" },
      { stage: "5. Arrive & Contribute", userAction: "Correct what's wrong, quickly", painPoint: "Reporting is buried and slow", opportunity: "One-Tap Quick Report" }
    ],
    personaJourneys: [
      { persona: "Sarah — Daily Commuter", journey: "Check traffic → navigate → arrive at office", breaksWhere: "No parking info near the office adds unplanned delay", fix: "Smart Parking Card" },
      { persona: "Rahim — Driver", journey: "Search client site → drive → find parking → visit", breaksWhere: "Circles the block; doesn't know price or space count", fix: "Smart Parking Card" },
      { persona: "Emily — Tourist", journey: "Search restaurant → read reviews → decide → visit", breaksWhere: "Can't tell genuine reviews from fake or paid ones", fix: "Verified Visit Reviews" },
      { persona: "Tanvir — Contributor", journey: "Notice wrong hours → try to report → give up", breaksWhere: "Reporting is buried in menus with no status feedback", fix: "One-Tap Quick Report" }
    ],
    edgeCases: [
      { feature: "Verified Reviews", scenario: "Location history disabled / GPS unavailable", expectedBehavior: "Review posts without a verification badge (transparent fallback)." },
      { feature: "Smart Parking", scenario: "No parking data available in area", expectedBehavior: "Show 'Parking information unavailable' gracefully without blocking navigation." },
      { feature: "Quick Report", scenario: "No internet connection on submission", expectedBehavior: "Save report locally in offline queue and submit when connection is restored." }
    ],
    architectureRisks: [
      { solution: "Verified Visit Reviews", keyComponents: "Visit verification service, consent-based location signals, review metadata API", primaryRisk: "Balancing fraud prevention with user privacy" },
      { solution: "Smart Parking Card", keyComponents: "Parking data aggregation, live availability service, routing integration", primaryRisk: "Inconsistent third-party data across cities" },
      { solution: "One-Tap Quick Report", keyComponents: "Report submission API, moderation pipeline, notification service", primaryRisk: "Spam/duplicate report volume" }
    ],
    goToMarketPhases: [
      { phase: "Phase 1 — Internal Testing", timeline: "0–1 mo", focus: "Dogfooding with Google employees and QA" },
      { phase: "Phase 2 — Beta", timeline: "1–2.5 mo", focus: "Local Guides and opt-in Android users" },
      { phase: "Phase 3 — Regional Rollout", timeline: "3–5 mo", focus: "US, UK, Japan, Germany, India" },
      { phase: "Phase 4 — Global Launch", timeline: "5+ mo", focus: "Gradual global rollout by readiness across 220+ countries" }
    ],
    productRoadmap: [
      { phase: "Phase 1 (MVP)", timeline: "0–3 months", items: ["Verified Visit Reviews", "One-Tap Quick Report", "Analytics & A/B testing framework"] },
      { phase: "Phase 2", timeline: "3–6 months", items: ["Smart Parking Card", "Regional rollout (US, UK, JP, DE, IN)", "UX refinements"] },
      { phase: "Phase 3", timeline: "6–12 months", items: ["AI Fake Review Detection", "Parking Reservation", "Voice Reporting", "Global scale"] }
    ],
    milestonesList: [
      { milestone: "Product requirements approved", timeline: "Week 2" },
      { milestone: "Engineering sprint 1 complete", timeline: "Week 8" },
      { milestone: "Beta launch (Local Guides)", timeline: "Week 12" },
      { milestone: "Regional rollout", timeline: "Month 5" },
      { milestone: "Global expansion begins", timeline: "Month 8" }
    ],
    sixMonthSuccessCriteria: [
      { metric: "Verified Review Adoption", target: "≥30%" },
      { metric: "Review Trust Score", target: "+20%" },
      { metric: "Parking Card Usage (supported markets)", target: "≥35%" },
      { metric: "Parking Search Time", target: "−25%" },
      { metric: "Reports Submitted", target: "+50%" },
      { metric: "Report Completion Rate", target: "+40%" },
      { metric: "CSAT Lift", target: "+10%" }
    ],
    risksAndMitigation: [
      { risk: "Parking data availability varies by region", impact: "High", mitigation: "Launch city-by-city; clearly label unsupported areas." },
      { risk: "Incorrect review verification", impact: "High", mitigation: "Combine multiple signals (GPS dwell, Wi-Fi BSSID); allow users to flag errors." },
      { risk: "User privacy concerns over location signals", impact: "High", mitigation: "Explicit opt-in consent; minimum data collection and anonymized tokens." },
      { risk: "Spam or duplicate reports", impact: "Medium", mitigation: "Rate limiting and confidence-based moderation (3-reporter consensus)." },
      { risk: "Low feature adoption", impact: "Medium", mitigation: "Contextual onboarding and in-app education ('What's New' cards, timely prompts)." }
    ],
    strategyAndTradeoffs: {
      approach: "Extends Material Design 3 system across three critical touchpoints: Verified Visitor badges for authentic review trust, contextual Smart Parking cards surfacing ~1 km before arrival, and a lightweight bottom-sheet One-Tap Quick Report with tracking IDs.",
      tradeoffsConsidered: [
        "Mandatory check-in vs. Passive GPS visit verification: Chose passive opt-in GPS presence with timestamp matching to eliminate user friction while preventing remote bot review fraud.",
        "Aggressive community report auto-publishing vs. Confidence-based moderation: Implemented multi-reporter consensus (3 independent reports) before modifying business status, preventing competitor sabotage."
      ],
      rationale: "Trust is the fundamental currency of Google Maps. By solving review authenticity and parking friction without altering core navigation habits, we maximize retention and enterprise local value."
    },
    technicalArchitecturePM: [
      "Visit verification pipeline correlating opted-in location history, Wi-Fi BSSID beacons, and dwell time",
      "Parking aggregation middleware unifying municipal open APIs, private operator feeds, and crowd sensors",
      "Asynchronous report queue with offline SQLite cache and exponential backoff retry",
      "Material Design 3 bottom-sheet component library integrated into standard Google Maps client"
    ],
    executionMilestones: [
      { phase: "Discovery & UX Audit", description: "Benchmarked 20 users, evaluated Nielsen heuristics, identified 3 critical experience gaps (Trust, Driving, Contribution).", result: "Prioritized Verified Visit Reviews as highest impact." },
      { phase: "RICE Prioritization & MVP", description: "Scored Verified Reviews (144), Quick Report (112), and Parking Card (49). Scoped Phase 1 MVP.", result: "Finalized spec for high-confidence rollout." },
      { phase: "GTM & Systems Architecture", description: "Defined 4-phase rollout from internal dogfooding to global launch across 220+ countries with privacy safeguards.", result: "Ready for engineering execution." }
    ],
    outcomesAndImpact: [
      "Established a scalable product framework to eliminate fake reviews (+20% Trust Score, ≥30% Verified Review Adoption).",
      "Designed friction-free parking intelligence delivering 25% reduction in destination search time.",
      "Architected a sub-30-second reporting flow projected to lift community data updates by 50%.",
      "Demonstrated Google-caliber Product Sense, Systems Architecture, and Analytical Execution across global consumer scale."
    ],
    retrospective: "Trust is Google Maps' core value proposition. When users doubt reviews, struggle to park, or hit closed businesses due to outdated listings, the entire ecosystem suffers. Solving high-frequency trust problems with lightweight, contextual design generates outsized customer loyalty and enduring business value."
  },
  {
    id: "stpay-fintech-ecosystem",
    title: "STPay: Architecting a Seamless Spend, Save & Invest Fintech Mobile Experience",
    tagline: "Translating complex personal-finance micro-services into an intuitive consumer wallet from PRD through App Store launch.",
    clientOrCompany: "ShareTrip Limited",
    role: "Product & iOS Lead",
    timeline: "Oct 2022 – Dec 2024",
    category: "Fintech",
    heroBadge: "Flagship Shipped Product",
    badgeCode: "PRD • TECH • FIN-2024",
    statusBadge: "Production",
    keyHighlights: [
      "Built modular micro-services (wallet, savings, investing).",
      "Achieved 78% onboarding completion and 4.7★ app store rating."
    ],
    overview: "STPay was conceived as a next-generation personal finance platform allowing users in an emerging market to seamlessly Spend, Save, and Invest under one unified app. Bridged product specifications with scalable technical execution, establishing Firebase-backed realtime sync and rigorous KYC compliance without introducing user churn.",
    keyMetrics: [
      { label: "Onboarding Completion", value: "78%", detail: "+26% improvement after tiered KYC redesign" },
      { label: "App Store Rating", value: "4.7 ★", detail: "Maintained over initial 25,000+ downloads" },
      { label: "Daily Transaction Velocity", value: "3.2x", detail: "Growth within 90 days post-launch" },
      { label: "Crash-Free Sessions", value: "99.8%", detail: "Rigorous MVVM & offline fallback guards" }
    ],
    prdMetadata: {
      docOwner: "MD Omar Faruq",
      targetLaunch: "Shipped Q4 2023",
      status: "In Production",
      approvers: [
        { role: "Chief Technology Officer", name: "ShareTrip Eng" },
        { role: "VP of Product", name: "Fintech Division" },
        { role: "Head of Legal & Compliance", name: "Regulatory Affairs" }
      ],
      docId: "PRD-FIN-STPAY-01",
      lastUpdated: "December 2024"
    },
    goalsAndNonGoals: {
      goals: [
        "Unify Spend (utility/merchant bills), Save (micro-deposits), and Invest (mutual funds) in one seamless iOS/Android client.",
        "Slash KYC drop-offs from 54% to under 25% via progressive verification.",
        "Deliver sub-second transaction feedback and 99.8% crash-free session stability on mobile."
      ],
      nonGoals: [
        "We are NOT building a physical credit card issuance or underwriting pipeline in v1.",
        "We are NOT supporting peer-to-peer crypto assets due to central bank regulatory prohibitions."
      ]
    },
    northStarAndGuardrails: {
      northStar: {
        metric: "Monthly Transacting Active Users (MTAU)",
        target: "Achieve 45% transacting ratio among registered user base within 90 days of launch",
        rationale: "Differentiates casual app openers from users who trust STPay with real capital."
      },
      guardrails: [
        { metric: "Payment Failure / Timeout Rate", threshold: "< 0.8% of total attempted transactions", risk: "Users lose confidence and abandon wallet after single failed payment" },
        { metric: "KYC Fraud Escapes", threshold: "0.00% tolerated fraud on high-tier transfers", risk: "Central bank regulatory fines and license suspension" }
      ]
    },
    googlePillarHighlight: "Technical Architecture",
    problemStatement: "Emerging market consumers often juggled 3-4 disjointed portals for utility payments, micro-savings, and equity/mutual fund investments. Drop-offs at biometric and National ID (NID) verification exceeded 54%, and slow network conditions caused duplicate transaction panics among anxious users.",
    userResearch: {
      persona: "The Aspirant Urban Professional (24–38 yrs) seeking digital financial autonomy with zero tolerance for delayed payment feedback.",
      painPoints: [
        "Opaque fee breakdowns and sudden transaction timeouts on 3G connections",
        "Overwhelming, multi-page KYC registration asking for extensive documentation up-front",
        "Lack of actionable feedback on when deposited savings would mature or accrue interest"
      ],
      insight: "Users don't abandon fintech because of caution—they abandon when the interface fails to communicate state certainty during financial handshakes."
    },
    strategyAndTradeoffs: {
      approach: "Introduced 'Progressive Disclosure KYC': allowed users to explore the dashboard, calculate returns, and perform low-tier transactions ($10 max) with basic phone OTP, prompting full biometric verification only when unlocking high-cap transfers.",
      tradeoffsConsidered: [
        "Strict Upfront Regulatory Check vs. Gradual Tiered KYC: Chose tiered compliance with backend fraud limits to preserve top-of-funnel conversion.",
        "Custom WebSocket Gateway vs. Firebase Realtime State: Chose Firebase for optimistic UI updates with automatic reconciliation, saving 6 weeks of custom backend build time."
      ],
      rationale: "Optimistic UI combined with cryptographic server confirmation gave users instant visual feedback while shielding the backend from double-spending race conditions."
    },
    technicalArchitecturePM: [
      "Modular MVVM state architecture isolating Spend, Save, and Invest into distinct view modules",
      "Firebase Cloud Firestore with offline cache persistence for balance inquiries during packet drops",
      "Bank-grade SSL Pinning & Biometric Keychain authentication (FaceID / TouchID / Secure PIN)",
      "Automated event analytics pipeline feeding funnel metrics into Amplitude"
    ],
    executionMilestones: [
      { phase: "Discovery & PRD", description: "Conducted 24 customer interviews and benchmarked Southeast Asian fintech wallets (GCash, GrabPay).", result: "Synthesized 14 core epics into a phased MVP release." },
      { phase: "Alpha & TestFlight", description: "Rolled out closed beta to 350 internal and beta testers with bug bounty program.", result: "Identified and patched 3 critical edge cases in payment gateway timeouts." },
      { phase: "Public App Store Launch", description: "Coordinated GTM with marketing, customer support, and compliance teams.", result: "Ranked Top 5 in Finance category within the first week." }
    ],
    outcomesAndImpact: [
      "Successfully launched on the Apple App Store, handling high daily transaction volume reliably.",
      "Lowered average checkout completion time from 42 seconds to 14 seconds via saved beneficiary shortcuts.",
      "Built trust through granular transaction receipt generators and instant push notifications."
    ],
    retrospective: "Directly collaborating with backend engineers on payload sizing early prevented late-stage refactoring. Progressive KYC proved that compliance and conversion don't need to be adversaries when phased thoughtfully."
  },

  {
    id: "nexcent-multi-product-portfolio",
    title: "Nexcent Tech: Multi-Product Portfolio Delivery & Startup Incubation",
    tagline: "Leading software delivery for external clients while incubating scalable internal digital products under unified Agile roadmaps.",
    clientOrCompany: "Nexcent Tech Ltd",
    role: "Product Manager",
    timeline: "Jan 2025 – Present",
    category: "Platforms & SaaS",
    heroBadge: "Current Leadership",
    badgeCode: "PRD • TECH • 2025",
    statusBadge: "In Production",
    keyHighlights: [
      "Delivered 3 major client products across web & mobile.",
      "Built an incubation pipeline for 2 internal startups."
    ],
    overview: "At Nexcent Tech, managed the end-to-end product lifecycle across multiple high-stakes client initiatives and internal ventures. Translated ambiguous client business goals into concrete product specifications, user stories, wireframes, and sprint goals for cross-functional engineering teams.",
    keyMetrics: [
      { label: "Products Shipped", value: "3 Major", detail: "Outfit Sourcing BD, Alumni Platform, Ullomart" },
      { label: "On-Time Delivery", value: "94%", detail: "Maintained across 8 consecutive two-week sprints" },
      { label: "Client NPS Score", value: "72", detail: "+18 points over industry agency benchmark" },
      { label: "Scoping Accuracy", value: "88%", detail: "Reduced sprint spillover by 35% through user-story sizing" }
    ],
    problemStatement: "Clients routinely arrived with broad, undefined concepts ('build an Alibaba for Bangladesh apparel' or 'a full university ecosystem') with fixed deadlines. Cross-functional engineers suffered from shifting requirements, scope creep, and unclear acceptance criteria.",
    userResearch: {
      persona: "Apparel manufacturers, B2B wholesale buyers, university administrators, and retail consumers with disparate digital literacy levels.",
      painPoints: [
        "Unrealistic client scope expectations without understanding architectural complexity",
        "Fragmented communication between designers, mobile developers, and QA",
        "Lack of defined KPIs to measure post-launch product viability"
      ],
      insight: "Clients don't need endless feature wishlists; they need a partner who can ruthless prioritize the critical 20% of functionality that delivers 80% of business validation."
    },
    strategyAndTradeoffs: {
      approach: "Instituted the Dual-Track Agile Discovery & Delivery model. While developers executed current sprint user stories, the PM and UX designer ran discovery spikes for the next milestone, validating wireframes before engineering commitment.",
      tradeoffsConsidered: [
        "Bespoke codebases vs. shared component design system: Implemented a standardized UI kit across React and mobile, slashing UI sprint time by 28%.",
        "Feature completeness vs. Time-to-Market: Defended MVP boundaries to deliver functional platforms in 60-day cycles instead of 9-month monolithic delays."
      ],
      rationale: "Early customer validation on a lean, functioning product beats a bloated system delivered months past the market window."
    },
    technicalArchitecturePM: [
      "Jira Kanban and Scrum boards with explicit Definition of Ready (DoR) and Definition of Done (DoD)",
      "Figma interactive design system linked to reusable mobile & web components",
      "API contract-first development using OpenAPI/Swagger to unblock frontend and backend dependencies",
      "Weekly executive demo meetings replacing verbose status reports"
    ],
    executionMilestones: [
      { phase: "Process Modernization", description: "Replaced ad-hoc Slack tasking with structured Jira backlog grooming, poker estimation, and sprint retrospectives.", result: "Reduced bug escapes by 42% in the first quarter." },
      { phase: "Outfit Sourcing BD Launch", description: "B2B garment sourcing portal connecting foreign buyers to certified Bangladeshi RMG factories.", result: "Onboarded 40+ export factories in month one." },
      { phase: "Ullomart E-Commerce", description: "Direct-to-consumer e-commerce app with cart optimization and one-click COD checkout.", result: "Shipped on schedule with 100% test coverage on checkout flows." }
    ],
    outcomesAndImpact: [
      "Guided cross-functional teams (8 developers, 2 designers, 1 QA) to deliver 3 flagship web and mobile applications.",
      "Transformed ambiguous client briefs into crystal-clear PRDs with interactive Figma prototypes.",
      "Empowered junior developers to understand business context, increasing engineering engagement and retention."
    ],
    retrospective: "Product management in a delivery firm requires constant alignment between business contract scope and user value. Transparency around trade-offs builds enduring client trust.",
    prdMetadata: {
      docOwner: "MD Omar Faruq",
      targetLaunch: "Multi-Product Sprints (2025)",
      status: "In Production",
      approvers: [
        { role: "Managing Director", name: "Nexcent Leadership" },
        { role: "Lead Architect", name: "Engineering Core" },
        { role: "Lead UI/UX Designer", name: "Design Studio" }
      ],
      docId: "PRD-NXC-MULTI-2025",
      lastUpdated: "February 2025"
    },
    goalsAndNonGoals: {
      goals: [
        "Achieve 90%+ on-time delivery across client milestone deadlines without scope burnout.",
        "Establish standardized Design Systems and OpenAPI contracts across React web and iOS/Android squads.",
        "Incubate internal venture hypotheses with sub-60 day MVP validation cycles."
      ],
      nonGoals: [
        "We are NOT accepting custom feature work that derails shared architectural components without executive escalation."
      ]
    },
    northStarAndGuardrails: {
      northStar: {
        metric: "On-Time Milestone Acceptance Rate",
        target: "> 90% client acceptance on initial sprint demo review",
        rationale: "Validates that requirement discovery accurately reflected stakeholder business goals."
      },
      guardrails: [
        { metric: "Sprint Spillover Deficit", threshold: "< 12% total story points carried over", risk: "Signals poor backlog sizing or blocked API dependencies" },
        { metric: "Post-Release Bug Escape Rate", threshold: "< 2 critical defects per production deployment", risk: "Damages client trust and drains future sprint velocity on hotfixes" }
      ]
    },
    googlePillarHighlight: "Leadership"
  },
  {
    id: "pathao-smart-activity-center",
    title: "Pathao: Redesigning Transaction History into a Smart Activity Center",
    tagline: "Redesigning transaction history into a centralized Smart Activity Center with universal search, advanced filtering, and spending insights across South Asia's leading super app.",
    clientOrCompany: "Pathao Super App",
    role: "Product Manager & UX Researcher",
    timeline: "July 2026",
    category: "Mobility & Super-Apps",
    heroBadge: "Product Case Study",
    badgeCode: "CASE STUDY • PM • 2026",
    statusBadge: "Strategic Handoff",
    keyHighlights: [
      "Transformed chronological activity log into a unified Smart Activity Center.",
      "Prioritized features via RICE framework with universal search & advanced filters (P1)."
    ],
    overview: "Pathao is one of the leading super apps in Bangladesh, offering ride-sharing, food delivery, parcel delivery, and digital payment services (Pathao Pay) through a single platform. Despite these strengths, one area of user experience remained underserved: transaction history management. As users complete dozens of rides, food orders, parcel deliveries, and payments monthly, the Activity page became difficult to navigate. This Product Case Study proposes redesigning that experience into a Smart Activity Center — a centralized hub that enables users to efficiently search, filter, analyze, and manage all their transactions in one place.",
    keyMetrics: [
      { label: "Lookup Speed", value: "50% Faster", detail: "Find past transactions within 30 seconds" },
      { label: "Support Ticket Deflection", value: "-30%", detail: "In-context 'Report Issue' & instant refunds" },
      { label: "Pathao Pay Adoption", value: "+40%", detail: "Driven by monthly spending analytics" },
      { label: "Filter Usage Rate", value: "+45%", detail: "Multi-vertical filtering across all services" }
    ],
    prdMetadata: {
      docOwner: "Md Omar Faruq (Product Manager)",
      targetLaunch: "3-Phase Rollout (7 Weeks)",
      status: "RFC / Proposed",
      approvers: [
        { role: "Director of Product", name: "Super-App Experience" },
        { role: "Head of Engineering", name: "Mobile Platform Squad" },
        { role: "Lead Product Designer", name: "UX Research & Systems" }
      ],
      docId: "CASE-STUDY-PATHAO-01",
      lastUpdated: "July 2026"
    },
    goalsAndNonGoals: {
      goals: [
        "Enable users to find any previous transaction within 30 seconds through universal search and advanced multi-vertical filtering.",
        "Provide transparent monthly spending analytics across Ride, Food, and Parcel to increase financial awareness and Pathao Pay engagement.",
        "Streamline issue resolution by embedding in-context support ('Report Issue' / 'Request Refund') directly on transaction details.",
        "Unify disparate vertical records (Ride, Food, Parcel, Payments) into a coherent, standardized activity feed."
      ],
      nonGoals: [
        "We are NOT replacing backend core accounting or banking ledger engines.",
        "We are NOT altering individual pricing, fare calculations, or courier commission algorithms."
      ]
    },
    northStarAndGuardrails: {
      northStar: {
        metric: "Percentage of users finding a previous transaction within 30 seconds",
        target: "> 85% lookup completion within 30 seconds",
        rationale: "Directly measures whether the redesigned Smart Activity Center resolves the core user friction of locating past records efficiently."
      },
      guardrails: [
        { metric: "Activity Feed Load Latency", threshold: "< 400ms on 3G/4G networks", risk: "Sluggish transaction loading frustrates users checking receipts on the go" },
        { metric: "Support Escalation Accuracy", threshold: "> 95% correctly routed ticket categories", risk: "Inaccurate auto-tagging routes refunds to wrong support queues" },
        { metric: "Home Screen Discovery Cannibalization", threshold: "0% drop in primary ride or food booking funnels", risk: "Adding persistent activity access must not distract from booking actions" }
      ]
    },
    googlePillarHighlight: "Product Sense",
    problemStatement: "Although Pathao successfully integrates multiple services into one application, its transaction history experience has not evolved to match the growing complexity of user activities. The current Activity page displays transactions as a single chronological list with no universal search, poor filtering, limited payment transparency, and disconnected experiences between Ride, Food, and Payments. This causes user frustration, increases customer support inquiries (55% of interviewed users contacted support for payment verification), and leaves users relying on manual screenshots to track expenses.",
    userResearch: {
      persona: "Office Workers (Rahim, 29), Students (Ayesha, 22), and Small Business Owners (Hasan, 34) completing multiple rides, food orders, and parcels weekly.",
      painPoints: [
        "80% of interviewed users struggled to find previous transactions in the endless chronological list",
        "75% wanted better search (by merchant, driver, transaction ID, destination, or amount) and filters",
        "70% needed monthly spending insights across ride, food, and parcel",
        "55% contacted customer support solely to verify payment or refund status",
        "45% saved phone screenshots as transaction records for expense reimbursement"
      ],
      insight: "Users do not perceive the Activity page as a useful management tool; they view it as a static transaction log. Frequent users expect to search instantly, filter by service or payment type, track monthly spending, and resolve issues directly from the transaction."
    },
    strategyAndTradeoffs: {
      approach: "Redesigned Activity into a centralized Smart Activity Center structured around 3 pillars: (1) Instant Discoverability (Universal Search + multi-dimensional filtering by service, status, payment method, date range); (2) Financial Transparency (Spend Analytics dashboard with category breakdowns and PDF/CSV receipt exports); and (3) In-Context Support (direct refund/issue resolution with auto-attached metadata).",
      tradeoffsConsidered: [
        "Full Analytics Dashboard vs. Lean MVP: Phased rollout prioritizes Search & Filters in Phase 1 (MVP) since they deliver the highest user impact (RICE score 288 & 216) with low/medium effort, while deferring advanced analytics and PDF exports to Phases 2 & 3.",
        "Separate Tabs per Vertical vs. Unified Feed with Chips: Chose unified feed with horizontal filter chips to preserve cross-service discovery while reducing navigational clicks."
      ],
      rationale: "Solving immediate lookup pain points builds trust and paves the way for habituating users to Pathao Pay as their everyday financial hub."
    },
    technicalArchitecturePM: [
      "Universal Search indexing supporting fuzzy matching on merchant, driver, destination, amount, and transaction ID",
      "Multi-attribute filtering engine supporting compound queries (Service, Status, Payment Method, Date Range)",
      "Client-side caching with optimistic UI for recent transactions and cursor-based backend pagination for historical data",
      "In-context support API webhook auto-binding transaction UUID and receipt state to customer support tickets",
      "Client-side PDF/CSV receipt generator for instant expense claim downloads"
    ],
    executionMilestones: [
      { phase: "Phase 1: Discoverability MVP (2 Weeks)", description: "Implement Universal Search bar, Advanced Filter chips (Ride, Food, Parcel, Payment, Refund), and updated Transaction Cards.", result: "50% faster transaction lookup and elimination of manual chronological scrolling." },
      { phase: "Phase 2: Financial Visibility (3 Weeks)", description: "Deploy Expense Analytics Dashboard, Monthly Spending Category breakdown charts, and in-context Quick Support integration.", result: "+40% increase in Pathao Pay engagement and -30% reduction in payment support tickets." },
      { phase: "Phase 3: Convenience & Power Tools (2 Weeks)", description: "Roll out PDF/CSV export for expense reports, Favorite/Repeat transactions shortcut, and enhanced spending insights.", result: "Streamlined corporate reimbursement workflow for office workers and SME parcel sellers." }
    ],
    outcomesAndImpact: [
      "Projected 50% reduction in time required to locate past transactions (from >60s to <30s).",
      "30% expected decrease in payment-verification customer support ticket volume.",
      "40% projected lift in Pathao Pay adoption driven by spending transparency and budget tracking.",
      "High user satisfaction improvement (CSAT +20% to +24%) across all primary user segments."
    ],
    retrospective: "A super app's strength is its breadth, but its biggest vulnerability is fragmentation. By treating transaction history as an active management center rather than a passive chronological log, we turn an administrative utility into a core driver of user trust and retention.",
    userResearchFindings: [
      { finding: "Struggled to find previous transactions", percentage: "80%" },
      { finding: "Wanted better search and filters", percentage: "75%" },
      { finding: "Needed monthly spending insights", percentage: "70%" },
      { finding: "Contacted support for payment verification", percentage: "55%" },
      { finding: "Saved screenshots as transaction records", percentage: "45%" }
    ],
    userPersonas: [
      {
        name: "Rahim Ahmed",
        age: 29,
        occupation: "Software Engineer (Office Worker)",
        goals: [
          "Book fast rides during office hours",
          "Track monthly transportation expenses",
          "Quickly retrieve payment records for reimbursement"
        ],
        painPoints: [
          "Difficult to find previous ride receipts",
          "No monthly spending summary",
          "Cannot filter ride history by date"
        ],
        needs: ["Smart Search", "Date Filters", "Expense Analytics"]
      },
      {
        name: "Ayesha Islam",
        age: 22,
        occupation: "University Student",
        goals: [
          "Order affordable meals",
          "Use promo codes effectively",
          "Reorder favorite restaurants"
        ],
        painPoints: [
          "Previous food orders are difficult to locate",
          "Cannot search by restaurant name",
          "Order history becomes cluttered"
        ],
        needs: ["Restaurant Search", "Food Filters", "Favorite Orders"]
      },
      {
        name: "Hasan Ali",
        age: 34,
        occupation: "Online Seller (Small Business Owner)",
        goals: [
          "Manage parcel deliveries",
          "Verify delivery payments",
          "Download transaction records"
        ],
        painPoints: [
          "Difficult to track parcel transactions",
          "No export option",
          "Payment verification takes time"
        ],
        needs: ["Parcel Filter", "Export PDF/CSV", "Transaction Search"]
      }
    ],
    uxAudit: [
      {
        issue: "Issue 1: Difficulty Finding Previous Transactions",
        description: "The Activity page displays all transactions in a single chronological list. Users must scroll through numerous records to locate a specific ride or payment.",
        impact: ["Time-consuming", "Frustrating for frequent users", "Increases support requests"],
        recommendations: [
          "Add universal search bar to Activity page",
          "Allow search by merchant, driver, destination, or amount",
          "Surface the most recent transactions at the top",
          "Add quick date-range shortcuts (Today, 7 Days, Month)",
          "Highlight matching text within search results"
        ]
      },
      {
        issue: "Issue 2: Poor Order History Filtering",
        description: "Users cannot efficiently filter transactions by service type, payment method, or date.",
        impact: ["Poor discoverability", "Difficult to manage records", "Reduced efficiency"],
        recommendations: [
          "Add search bar for quick order search",
          "Add advanced filters (date, type, amount, payment method, status)",
          "Enable timeline grouping by month",
          "Allow sorting (Newest first, Oldest first, Amount: High to Low)",
          "Provide export option (PDF/CSV)"
        ]
      },
      {
        issue: "Issue 3: Limited Payment Transparency",
        description: "Payment information lacks meaningful categorization and spending insights. Users cannot easily understand monthly ride expenses, food spending, parcel costs, or refund history.",
        impact: ["Difficult financial tracking", "Reduced trust", "Lower Pathao Pay adoption"],
        recommendations: [
          "Add an Expense Analytics dashboard",
          "Categorize spend automatically by service type",
          "Show monthly spending trend charts",
          "Add a dedicated refund history section",
          "Enable CSV/PDF export for expense reports"
        ]
      },
      {
        issue: "Issue 4: Customer Support Delays",
        description: "When users encounter payment or order-related issues, they must manually search for transaction details before contacting support.",
        impact: ["Longer resolution time", "Increased support workload", "Lower customer satisfaction"],
        recommendations: [
          "Add 'Report an Issue' button on every transaction",
          "Add 'Request Refund' as a one-tap quick action",
          "Auto-attach transaction details to the support ticket",
          "Offer live chat directly from the transaction screen",
          "Show ticket status in-app (Open / In Progress / Resolved)"
        ]
      },
      {
        issue: "Issue 5: Disconnected Cross-Service Experience",
        description: "Ride, Food, Parcel, and Payments operate as separate experiences with limited integration in transaction history.",
        impact: ["Inconsistent user experience", "Lower ecosystem engagement"],
        recommendations: [
          "Merge all services into one unified Activity feed",
          "Add service-type filter chips (All / Ride / Food / Parcel / Payment)",
          "Standardize the transaction card design across services",
          "Enable search and filtering across all services at once",
          "Show a combined monthly summary across the ecosystem"
        ]
      },
      {
        issue: "Issue 6: Confusing Navigation",
        description: "The home screen contains multiple services competing for attention, making it difficult for users to access the feature they need quickly.",
        impact: ["Cognitive overload", "Longer task completion", "Reduced discoverability"],
        recommendations: [
          "Simplify the home screen layout and visual hierarchy",
          "Add personalized shortcuts based on usage patterns",
          "Keep Activity as a persistent bottom navigation tab",
          "Reduce visual clutter — group secondary services under 'More'",
          "Use a clear visual hierarchy (primary vs. secondary actions)"
        ]
      }
    ],
    userJourneyMap: [
      { stage: "Open App", userAction: "Launch Pathao", painPoint: "The home screen is crowded", opportunity: "Personalized shortcuts" },
      { stage: "Choose Service", userAction: "Ride / Food / Parcel", painPoint: "Multiple services compete for attention", opportunity: "Better navigation" },
      { stage: "Complete Order", userAction: "Payment completed", painPoint: "Transaction buried in history", opportunity: "Smart categorization" },
      { stage: "Find Transaction", userAction: "Search old record", painPoint: "No search / filter", opportunity: "Smart Search & Filters" },
      { stage: "Need Support", userAction: "Contact customer service", painPoint: "Manual lookup required", opportunity: "Support from the transaction page" }
    ],
    ricePrioritization: [
      { feature: "Transaction Filters", reach: 8, impact: 8, confidence: 9, effort: 2, riceScore: 288, priority: "P1 — Must Have" },
      { feature: "Smart Search", reach: 9, impact: 8, confidence: 9, effort: 3, riceScore: 216, priority: "P1 — Must Have" },
      { feature: "Expense Analytics", reach: 6, impact: 7, confidence: 8, effort: 5, riceScore: 67.2, priority: "P2 — Should Have" },
      { feature: "Quick Support", reach: 5, impact: 7, confidence: 8, effort: 4, riceScore: 70, priority: "P2 — Should Have" },
      { feature: "Export PDF/CSV", reach: 4, impact: 5, confidence: 7, effort: 4, riceScore: 35, priority: "P3 — Could Have" },
      { feature: "Favorite Transactions", reach: 4, impact: 5, confidence: 6, effort: 3, riceScore: 40, priority: "P3 — Could Have" }
    ],
    impactEffortMatrix: [
      { feature: "Filters", userImpact: "High", developmentEffort: "Low", decision: "Build First (MVP)" },
      { feature: "Smart Search", userImpact: "High", developmentEffort: "Medium", decision: "Build First (MVP)" },
      { feature: "Expense Analytics", userImpact: "High", developmentEffort: "Medium", decision: "Phase 2" },
      { feature: "Quick Support", userImpact: "Medium", developmentEffort: "Medium", decision: "Phase 2" },
      { feature: "Export PDF", userImpact: "Medium", developmentEffort: "Medium", decision: "Phase 3" },
      { feature: "Favorites", userImpact: "Medium", developmentEffort: "Low", decision: "Phase 3" }
    ],
    mvpScope: [
      "Universal Search bar supporting merchant, driver, transaction ID, destination, and amount lookup",
      "Advanced Filters across Service (Ride, Food, Parcel, Payment, Refund), Status, Payment Method, and Date",
      "Improved Transaction Cards with clear visual hierarchy, service badges, and amount transparency",
      "Better Activity Timeline grouped chronologically by month"
    ],
    risksAndMitigation: [
      { risk: "Increased UI complexity", impact: "Users may feel overwhelmed", mitigation: "Progressive disclosure and simple defaults" },
      { risk: "Large transaction history may affect performance", impact: "Slow loading", mitigation: "Backend pagination, indexing, and lazy loading" },
      { risk: "Privacy concerns", impact: "User trust issues", mitigation: "Secure authentication, encrypted storage, and role-based access" },
      { risk: "Low adoption of new features", impact: "Features may go unused", mitigation: "Onboarding tips, feature highlights, and user education" }
    ],
    productRoadmap: [
      { phase: "Phase 1: Improve Discoverability", timeline: "2 Weeks", items: ["Smart Search", "Advanced Filters", "Updated Transaction Cards"] },
      { phase: "Phase 2: Improve Financial Visibility", timeline: "3 Weeks", items: ["Expense Analytics Dashboard", "Monthly Spending Insights", "Quick Support Integration"] },
      { phase: "Phase 3: Increase Convenience", timeline: "2 Weeks", items: ["Export PDF/CSV", "Favorite Transactions", "Enhanced Activity Insights"] }
    ]
  },
  {
    id: "bkash-financial-inclusion-teardown",
    title: "bKash Mobile Money: Financial Inclusion & Cash-Out Usability Analysis",
    tagline: "Product tear-down addressing agent fee transparency, cognitive load for low-literacy users, and PIN security friction.",
    clientOrCompany: "Independent PM Case Study",
    role: "Product Teardown Lead",
    timeline: "Strategic Analysis",
    category: "Product Teardown",
    heroBadge: "Fintech Inclusion Study",
    badgeCode: "PRD • MRC • 2021",
    statusBadge: "Strategic Teardown",
    keyHighlights: [
      "Reduced cash-out friction through simpler flows.",
      "Improved PIN security and agent verification."
    ],
    overview: "bKash powers financial transactions for over 70 million citizens. Analyzed the cash-out and P2P transfer mechanics, focusing on the human vulnerability at the agent point-of-sale, hidden fee anxiety, and how tactile/audio feedback can replace text-heavy confirmations for semi-literate demographics.",
    keyMetrics: [
      { label: "Target User Base", value: "70M+", detail: "Diverse literacy and device spectrums" },
      { label: "Agent Fraud Reduction", value: "Est. -34%", detail: "Through dynamic QR verification and voice confirmations" },
      { label: "Accidental Transfer Rate", value: "Est. -45%", detail: "With recipient photo avatars and name confirmation step" }
    ],
    prdMetadata: {
      docOwner: "MD Omar Faruq",
      targetLaunch: "Inclusive UX Proposal",
      status: "Strategic Teardown",
      approvers: [
        { role: "Chief Commercial Officer", name: "MFS Strategy Group" },
        { role: "Head of Consumer Experience", name: "Inclusion Taskforce" }
      ],
      docId: "PRD-INC-BKASH-01",
      lastUpdated: "January 2025"
    },
    goalsAndNonGoals: {
      goals: [
        "Provide 100% upfront fee transparency dynamically calculated as digits are entered.",
        "Prevent accidental transfers to incorrect 11-digit phone numbers via recipient identity preview cards.",
        "Shield user PINs from roadside agent counter surveillance through biometric and randomized numeric keypads."
      ],
      nonGoals: [
        "We are NOT altering the central bank statutory cash-out tariff (fee calculations reflect regulatory policy)."
      ]
    },
    northStarAndGuardrails: {
      northStar: {
        metric: "First-Time Error-Free Transfer Rate",
        target: "> 96% of cash-out and P2P transactions executed without cancellation or reversal requests",
        rationale: "Directly protects low-income users from catastrophic accidental transfers."
      },
      guardrails: [
        { metric: "Transaction Authorization Latency", threshold: "< 2.5 seconds under 2G edge networks", risk: "Hangs on low-speed cellular cause duplicate transfer attempts" }
      ]
    },
    googlePillarHighlight: "Analytical Execution",
    problemStatement: "The Cash-Out flow required entering an Agent number or scanning a printed QR code. Users often feared entering the wrong number or being overcharged on the 1.85% cash-out fee. The 5-digit PIN submission screen caused anxiety because of physical snooping at crowded agent counters.",
    userResearch: {
      persona: "Micro-business owners, migrant workers, and everyday retail customers sending remittances.",
      painPoints: [
        "Hidden fee calculation: users had to mentally calculate fee deductions before sending",
        "Fear of sending money to an erroneous 11-digit phone number without easy name verification",
        "Public PIN entry at roadside agent counters where bystanders could observe keystrokes"
      ],
      insight: "Financial trust in emerging markets is physical before it is digital. If the digital app doesn't replicate the certainty of handing over cash, users resort to stressful verbal verification."
    },
    strategyAndTradeoffs: {
      approach: "Engineered a 'Transparent Calculation Pill' that updates live as the user inputs amounts, showing exact Fee, Net Received, and Remaining Balance. Paired with interactive Recipient Confirmation Badges and optional randomized keypad scrambler for PIN protection.",
      tradeoffsConsidered: [
        "Mandatory 2-Step Confirmation vs. 1-Tap Speed: Retained the long-press 'Hold to Confirm' button, which has become a cultural signature of trust in Bangladesh, but added recipient photo previews.",
        "Audio voice prompts in Bangla vs. Silent Haptic: Recommended optional Bangla voice readout of transaction summary before final authorization."
      ],
      rationale: "When dealing with hard-earned savings, deliberate friction that provides clarity is welcomed by users, not rejected."
    },
    technicalArchitecturePM: [
      "Offline agent number caching and recent agent geographic proximity filtering",
      "Dynamic Fee Calculation engine handling tiered operator slabs locally in client memory",
      "Biometric fallback allowing fingerprint authentication instead of PIN typing in crowded spaces"
    ],
    executionMilestones: [
      { phase: "Field Survey", description: "Interviewed 15 street-side bKash agents and 20 regular consumers in Dhaka markets.", result: "Discovered that 40% of users asked the agent to type the number for them due to fear of errors." },
      { phase: "Information Architecture Redesign", description: "Restructured the confirmation screen to emphasize recipient identity over transaction reference numbers.", result: "Reduced cognitive hesitation in prototype testing." }
    ],
    outcomesAndImpact: [
      "Delivered a comprehensive UX & PM proposal for inclusive banking UX.",
      "Highlighted the crucial balance between regulatory MFS compliance and intuitive consumer micro-interactions.",
      "Established deep credibility in financial product design and user empathy."
    ],
    retrospective: "Designing for the next billion users requires stripping away assumptions forged in Silicon Valley. Accessibility isn't just font size; it is psychological safety and cognitive clarity."
  },
  {
    id: "walletmix-payment-gateway",
    title: "Walletmix & Robi Alpha: Scaling High-Volume Payment Gateways",
    tagline: "Modernizing payment processing APIs and driving v1 & v2 releases to support telecom rewards and municipal applications.",
    clientOrCompany: "Walletmix",
    role: "iOS Engineer & Technical Product Lead",
    timeline: "May 2021 – Oct 2022",
    category: "Platforms & SaaS",
    heroBadge: "Core Infrastructure",
    badgeCode: "PRD • PAY • 2024–25",
    statusBadge: "Launched",
    keyHighlights: [
      "Built high-throughput, low-latency payment gateway.",
      "Scaled to 800% volume with stable success rate."
    ],
    overview: "Spearheaded two major mobile product releases (v1 and v2) for Walletmix payment gateway integrations, while architecting the mobile integration for Robi Alpha (major telecom rewards program) and Shobar Dhaka (Dhaka North City Corporation civic app).",
    keyMetrics: [
      { label: "Active Users Served", value: "500K+", detail: "Across Robi Alpha & municipal apps" },
      { label: "Payment Success Rate", value: "98.4%", detail: "Up from 91.2% through intelligent retry logic" },
      { label: "API Latency Reduction", value: "40%", detail: "Optimized payload serialization and batching" },
      { label: "Releases Delivered", value: "2 Major", detail: "v1 launch and v2 complete architectural revamp" }
    ],
    prdMetadata: {
      docOwner: "MD Omar Faruq",
      targetLaunch: "Shipped v1 & v2 (2021-2022)",
      status: "Launched",
      approvers: [
        { role: "VP of Engineering", name: "Walletmix Core" },
        { role: "Director of Strategic Partnerships", name: "Robi Axiata Integration" }
      ],
      docId: "PRD-PAY-WMX-V2",
      lastUpdated: "October 2022"
    },
    goalsAndNonGoals: {
      goals: [
        "Modernize iOS & Android payment SDKs with lightweight, decoupled architectural modules.",
        "Implement client-side idempotency tokens to eliminate double-charging on network dropouts.",
        "Support 10x traffic bursts during national telecom flash sale events."
      ],
      nonGoals: [
        "We are NOT replacing bank card network clearing houses (integration connects to licensed acquirers)."
      ]
    },
    northStarAndGuardrails: {
      northStar: {
        metric: "Payment Completion Success Rate (PCSR)",
        target: "> 98.0% across all mobile gateway transactions",
        rationale: "Directly correlates with merchant revenue and consumer confidence."
      },
      guardrails: [
        { metric: "Duplicate Charge Probability", threshold: "0.00% via cryptographic idempotency", risk: "Severe financial penalties, merchant chargebacks, and legal liability" }
      ]
    },
    googlePillarHighlight: "Technical Architecture",
    problemStatement: "During telecom flash sales and civic utility due dates, payment gateway traffic spiked by 800%. Outdated SDK integrations caused dropped sessions, duplicate card charges, and customer service gridlock.",
    userResearch: {
      persona: "Telecom subscribers redeeming rewards and citizens paying municipal bills on fluctuating 3G/4G networks.",
      painPoints: [
        "Unresponsive payment screens when gateways took longer than 10 seconds to respond",
        "Loss of entered billing details when switching apps for OTP SMS verification",
        "Cryptic error codes ('Error 504') giving users no actionable instructions"
      ],
      insight: "When money is in transit, silence is the worst possible state. An explicit heartbeat indicator prevents panic-induced app kills."
    },
    strategyAndTradeoffs: {
      approach: "Introduced client-side idempotency keys and stateful background session handling so that switching to SMS OTP never killed the payment handshake. Rewrote the SDK with modular decoupling.",
      tradeoffsConsidered: [
        "Strict synchronous timeouts vs. Asynchronous polling queue: Replaced rigid 15s timeouts with smart 3-stage exponential backoff and status polling.",
        "Heavy monolithic SDK vs. Lightweight core module: Stripped out legacy dependencies, reducing SDK bundle size from 28MB to 4.2MB."
      ],
      rationale: "A lightweight SDK reduced crash rates in host applications and drastically increased third-party developer adoption."
    },
    technicalArchitecturePM: [
      "Native iOS Swift & UIKit architecture with strict MVVM separation",
      "Cryptographic request signing and idempotency token management",
      "Deep integration with local payment rails (Visa, Mastercard, bKash, Nagad, Rocket)",
      "Zero-downtime v1 to v2 migration strategy with backwards-compatible API contracts"
    ],
    executionMilestones: [
      { phase: "v1 Launch & Stabilization", description: "Shipped the initial payment SDK integration for merchant partners.", result: "Onboarded first 50 merchants within 60 days." },
      { phase: "v2 Re-Architecture", description: "Redesigned checkout UI and rewrote backend communication layer.", result: "Halved API latency and boosted success rate to 98.4%." }
    ],
    outcomesAndImpact: [
      "Successfully scaled payment processing to handle over 500,000 active users across key national platforms.",
      "Directly contributed to significant merchant revenue expansion by slashing checkout friction.",
      "Solidified reputation for rock-solid technical delivery and cross-functional partner alignment."
    ],
    retrospective: "Technical constraints must inform product requirements from day zero. Understanding network protocols allowed us to design graceful failure states that retained customer trust."
  }
];

export const GOOGLE_PM_PILLARS: GooglePmPillar[] = [
  {
    id: "product-sense",
    title: "1. Product Sense & 10x Thinking",
    badge: "User Empathy & Vision",
    color: "blue",
    googlePrinciple: "Focus on the user and all else will follow.",
    summary: "Dissecting complex human behaviors to identify unarticulated user needs, framing the right problem before jumping to solutions, and designing habit-forming, zero-friction experiences that scale globally.",
    keyCapabilities: [
      {
        capability: "First-Principles Problem Framing",
        description: "Refusing to accept existing suboptimal paradigms; breaking problems down to fundamental truths and designing 10x leaps.",
        realWorldEvidence: "Authored Google Maps Dhaka Micro-Mobility PRD addressing unmapped informal transit (rickshaws/lagunas) and urban canyon GPS multipath drift for 22M+ residents."
      },
      {
        capability: "Next Billion Users (NBU) Empathy",
        description: "Designing for users with varying digital literacy, intermittent 2G/3G connectivity, and shared family devices.",
        realWorldEvidence: "Analyzed bKash's 70M+ MFS ecosystem, designing live fee transparency, audio confirmations, and biometric safety gates."
      },
      {
        capability: "Ruthless Scope Boundaries (Goals vs Non-Goals)",
        description: "Clarifying what a product will NOT do to prevent scope bloat and preserve team velocity.",
        realWorldEvidence: "Structured every PRD with explicit non-goals (e.g. STPay v1 strictly excluding crypto & complex margin trading)."
      }
    ],
    interviewQuestionFraming: "Demonstrates ability to navigate questions like: 'How would you design Google Maps for megacities with informal transit?' or 'How would you redesign the onboarding for an emerging market fintech wallet?'"
  },
  {
    id: "technical-depth",
    title: "2. Technical Craft & Systems Architecture",
    badge: "Engineering Empathy",
    color: "red",
    googlePrinciple: "Engineering excellence as a strategic multiplier.",
    summary: "4+ years of hands-on native systems engineering provides an unfair advantage: evaluating technical feasibility in real time, anticipating edge-case failures, and forging high-velocity partnerships with Staff Engineers.",
    keyCapabilities: [
      {
        capability: "Client-Server System Design & Sync",
        description: "Designing resilient data flows, optimistic UI updates, background task queues, and conflict resolution.",
        realWorldEvidence: "Architected Firebase Realtime Firestore synchronization for STPay, ensuring consistent balance reads during network packet drops."
      },
      {
        capability: "Non-Functional Requirements (NFRs)",
        description: "Setting strict latency budgets, memory caps, battery drain limits, and cryptographic payload integrity.",
        realWorldEvidence: "Cut payment gateway SDK footprint from 28MB to 4.2MB and established client-side idempotency tokens for Walletmix & Robi Alpha."
      },
      {
        capability: "API Contracts & Developer Experience",
        description: "Writing OpenAPI/Swagger specs early to unblock frontend and backend teams to build in parallel.",
        realWorldEvidence: "Instituted contract-first development at Nexcent Tech, eliminating cross-dependency sprint blockers by 35%."
      }
    ],
    interviewQuestionFraming: "Demonstrates ability to navigate system design questions: 'How would you architect offline-first caching for high-frequency transactions?' or 'How do you handle race conditions during payment authorization?'"
  },
  {
    id: "analytical-execution",
    title: "3. Analytical Execution & OKRs",
    badge: "Data-Driven Rigor",
    color: "green",
    googlePrinciple: "Data wins arguments; measure what truly matters.",
    summary: "Establishing meaningful Objectives and Key Results (OKRs), coupling North Star outcomes with non-negotiable guardrail metrics, diagnosing funnel drop-offs, and prioritizing backlogs with mathematical precision.",
    keyCapabilities: [
      {
        capability: "North Star & Guardrail Metric Pairing",
        description: "Never optimizing a primary metric in a vacuum; protecting system health with strict counter-metrics.",
        realWorldEvidence: "Paired STPay's Monthly Transacting Active Users (MTAU) with a < 0.8% payment timeout guardrail and 0.00% fraud escape threshold."
      },
      {
        capability: "Funnel Drop-Off Diagnostics",
        description: "Deconstructing user journey stages into micro-conversion steps to pinpoint friction.",
        realWorldEvidence: "Identified 54% drop-off at upfront National ID submission in STPay; redesigned to Progressive Disclosure KYC, lifting completion by 26%."
      },
      {
        capability: "Prioritization Frameworks (RICE / MoSCoW)",
        description: "Evaluating Reach, Impact, Confidence, and Effort with engineering leads to defend sprint roadmaps.",
        realWorldEvidence: "Prioritized 14 core epics for STPay MVP, delivering on-time App Store launch while deferring non-critical secondary features."
      }
    ],
    interviewQuestionFraming: "Demonstrates ability to navigate analytical execution questions: 'Your core engagement metric dropped 12% week-over-week. How do you triage root causes?' or 'How do you define OKRs for a 0-to-1 mobile product?'"
  },
  {
    id: "leadership",
    title: "4. Leadership Without Authority",
    badge: "Cross-Functional Momentum",
    color: "yellow",
    googlePrinciple: "Cross-functional momentum through clarity and empathy.",
    summary: "Leading without hierarchical power by communicating crystal-clear product rationale, cultivating psychological safety, aligning engineering, design, and business executives, and conducting blameless post-mortems.",
    keyCapabilities: [
      {
        capability: "Dual-Track Agile Discovery & Delivery",
        description: "Running discovery spikes one sprint ahead of engineering execution so developers never build unvalidated wireframes.",
        realWorldEvidence: "Led 45+ Agile sprints across Nexcent Tech squads, maintaining a 94% on-time milestone delivery rate."
      },
      {
        capability: "Executive & Stakeholder Storytelling",
        description: "Translating technical constraints into business impact for C-suite clients and non-technical partners.",
        realWorldEvidence: "Successfully secured client sign-off on 3 major enterprise platforms (Outfit Sourcing, City Alumni, Ullomart)."
      },
      {
        capability: "Blameless Post-Mortems & Continuous Learning",
        description: "Treating outages and failed experiments as systemic learning opportunities rather than personal blame.",
        realWorldEvidence: "Conducted post-launch retrospectives identifying gateway timeout patterns, resulting in automated retry backoff algorithms."
      }
    ],
    interviewQuestionFraming: "Demonstrates ability to navigate behavioral leadership questions: 'Tell me about a time you strongly disagreed with an engineering lead on timeline and how you resolved it.'"
  }
];


export const CAREER_MILESTONES: CareerMilestone[] = [
  {
    id: "nexcent-pm",
    period: "JAN 2025 – PRESENT",
    role: "Product Manager",
    company: "Nexcent Tech Ltd",
    location: "Dhaka, Bangladesh",
    category: "pm",
    highlightBadge: "Current Role",
    description: "Leading a software development and digital product company delivering web, mobile, and SaaS solutions to clients while incubating internal ventures.",
    responsibilities: [
      "Set product vision, roadmaps, and feature backlogs aligned with business impact and user needs.",
      "Guide cross-functional teams (design, engineering, product, and data) through discovery, delivery, and iteration.",
      "Lead OKRs, stakeholder communication, and go-to-market execution for web, mobile, and SaaS products.",
      "Own early-stage to launch execution, including product analytics and customer feedback loops."
    ],
    keyWins: [
      "Shipped Outfit Sourcing BD (B2B sourcing portal), City University Alumni Platform, and Ullormart (e-commerce).",
      "Maintained 94% on-time delivery across 8 consecutive two-week sprints with 0 high-severity production rollbacks.",
      "Built and led a user-centric product culture with measurable business outcomes."
    ],
    technologies: ["Product Roadmaps", "Agile/Scrum", "Jira", "Figma", "PRD Authoring", "Stakeholder Management", "Data Analytics"]
  },
  {
    id: "sharetrip-ios",
    period: "OCT 2022 – DEC 2024",
    role: "iOS Engineer",
    company: "ShareTrip Limited",
    location: "Dhaka, Bangladesh",
    category: "engineering",
    highlightBadge: "Fintech Scale",
    description: "Owned STPay, an ambitious personal-finance product spanning Spend, Save, and Invest modules, from feature specification through successful App Store release.",
    responsibilities: [
      "Collaborated closely with product designers, backend teams, and compliance officers to define user stories and UX flows.",
      "Translated complex fintech compliance and transaction workflows into a scalable, Firebase-backed technical implementation.",
      "Weighed engineering feasibility trade-offs against user experience to prioritize sprint scope for a live product used daily by thousands.",
      "Built resilient offline caching and bank-grade cryptographic authentication."
    ],
    keyWins: [
      "Built and scaled core iOS features for Spend, Save, and Invest modules.",
      "Improved app performance, stability, and release cycle.",
      "Worked closely with product and backend teams to deliver v1.0 and v2.0 releases."
    ],
    technologies: ["Swift", "iOS SDK", "MVVM", "Analytics", "App Store Release", "Cross-functional Collaboration"]
  },
  {
    id: "walletmix-ios",
    period: "MAY 2021 – OCT 2022",
    role: "iOS Engineer",
    company: "Walletmix",
    location: "Dhaka, Bangladesh",
    category: "engineering",
    highlightBadge: "Payment Rail Delivery",
    description: "Drove two full product releases (v1 and v2), continuously reworking scope and requirements as the product matured.",
    responsibilities: [
      "Defined a scalable mobile API integration strategy in collaboration with cross-functional partners to support high-concurrency traffic.",
      "Delivered robust integrations for Robi Alpha (telecom loyalty platform) and Shobar Dhaka (civic municipal services).",
      "Monitored post-release telemetry and error logs to prioritize bug triage and performance optimizations."
    ],
    keyWins: [
      "Delivered v1 and v2 product releases with improved stability and UX.",
      "Worked closely with product and backend teams to refine features and solve complex technical challenges.",
      "Improved app performance and user experience metrics."
    ],
    technologies: ["Swift", "Objective-C", "iOS SDK", "REST APIs", "Agile", "Cross-team Collaboration"]
  },
  {
    id: "jr-consulting-ios",
    period: "MAY 2020 – MAY 2021",
    role: "iOS Engineer",
    company: "Jr Consulting",
    location: "Remote — Australia",
    category: "engineering",
    highlightBadge: "Global Remote",
    description: "Owned the full product lifecycle — requirements, design, build, and deployment — for client-facing international applications.",
    responsibilities: [
      "Served as the primary technical point of contact for international clients, converting business needs directly into shipped features.",
      "Managed client sprint demos, requirement gathering, and feedback loops independently across timezones."
    ],
    keyWins: [
      "Built and scaled core iOS features for international client deliverables.",
      "Delivered 100% of client milestones within contracted budget and deadlines.",
      "Established foundational expertise in client consultation, expectation management, and user-centric architecture."
    ],
    technologies: ["Swift", "UIKit", "Remote Agile", "Client Management", "App Lifecycle", "GitLab"]
  },
  {
    id: "ict-scholar",
    period: "2019",
    role: "National ICT Scholar",
    company: "ICT Ministry, Bangladesh",
    location: "Dhaka, Bangladesh",
    category: "recognition",
    highlightBadge: "Prestigious Honor",
    description: "Selected for a competitive national scholarship program organized by the Government of Bangladesh's Information and Communication Technology (ICT) Division.",
    responsibilities: [
      "Built an interactive Swift Playground prototype using Apple's SpriteKit physics framework.",
      "Engaged directly with veteran industry engineers, product architects, and designers on iOS product direction and mobile innovation."
    ],
    keyWins: [
      "Awarded full scholarship for higher studies in ICT.",
      "Gained access to advanced training, research opportunities, and international exposure."
    ],
    technologies: ["ICT Innovation", "Research & Development", "Technology Leadership"]
  },
  {
    id: "city-university-degree",
    period: "APRIL 2015 – MAY 2019",
    role: "B.Sc. in Computer Science and Engineering",
    company: "City University",
    location: "Dhaka, Bangladesh",
    category: "education",
    highlightBadge: "Academic Foundation",
    description: "Built a strong foundation in computer science, software engineering, and problem-solving through rigorous academic and project work.",
    responsibilities: [
      "Studied Software Engineering, Database Management Systems, Object-Oriented Programming, and Data Structures.",
      "Active participant in collegiate programming contests and hackathons."
    ],
    keyWins: [
      "Data Structures & Algorithms",
      "Software Engineering & System Design",
      "Database Systems & Networking",
      "Problem Solving & Analytical Thinking"
    ],
    technologies: ["DSA", "Operating Systems", "Computer Networks", "Database Systems", "Software Engineering"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Core Product Management",
    subtitle: "End-to-end product leadership from user discovery to GTM execution",
    skills: [
      { name: "Product Strategy & Vision", level: "Expert", context: "Defining North Star metrics, business model alignment, and value propositions." },
      { name: "SDLC & Agile Delivery", level: "Expert", context: "Scrum, Kanban, 2-week sprint cadences, dual-track discovery." },
      { name: "Business Requirements & PRDs", level: "Expert", context: "Authoring unambiguous epics, user stories, and acceptance criteria." },
      { name: "User & Market Research", level: "Advanced", context: "Qualitative interviews, usability heuristics, competitive benchmarking." },
      { name: "Wireframing & UI/UX", level: "Advanced", context: "Translating customer journeys into clickable Figma wireframes and flows." },
      { name: "Stakeholder Management", level: "Expert", context: "Aligning executive leadership, clients, designers, and engineering." },
      { name: "Product Roadmap Planning", level: "Expert", context: "Quarterly OKR mapping, capacity planning, and feature prioritization." },
      { name: "Data-Driven Decision Making", level: "Advanced", context: "Funnel analysis, cohort retention, A/B testing hypotheses." },
      { name: "Go-to-Market Strategy", level: "Advanced", context: "Launch playbooks, App Store optimization, sales enablement." }
    ]
  },
  {
    title: "Technical PM Depth",
    subtitle: "4+ years of native systems engineering enabling seamless developer empathy",
    skills: [
      { name: "Native iOS (Swift / SwiftUI)", level: "Expert", context: "Deep understanding of mobile runtime, memory, and view lifecycles." },
      { name: "RESTful APIs & System Architecture", level: "Expert", context: "API contract design, payload optimization, idempotent transactions." },
      { name: "Firebase & Cloud Infrastructure", level: "Advanced", context: "Realtime synchronization, Firestore security rules, Cloud Functions." },
      { name: "SQL & Relational Databases", level: "Advanced", context: "Relational modeling, indexing, schema migrations, query tuning." },
      { name: "Mobile App Store Release Lifecycle", level: "Expert", context: "App Store guidelines, test flight distribution, crash telemetry." },
      { name: "Git & CI/CD Pipelines", level: "Advanced", context: "Branching workflows, automated regression builds, feature flagging." }
    ]
  },
  {
    title: "PM Frameworks & Prioritization",
    subtitle: "Systematic mental models applied to avoid feature-creep and maximize ROI",
    skills: [
      { name: "RICE Framework", level: "Expert", context: "Reach, Impact, Confidence, Effort scoring to rank sprint backlogs." },
      { name: "MoSCoW Method", level: "Expert", context: "Must-have, Should-have, Could-have, Won't-have scoping with clients." },
      { name: "Kano Model", level: "Advanced", context: "Categorizing baseline expectations vs. delightful customer differentiators." },
      { name: "Opportunity Solution Trees", level: "Advanced", context: "Connecting high-level business goals with user pain points and experiments." },
      { name: "Jobs to Be Done (JTBD)", level: "Expert", context: "Uncovering the emotional and functional 'jobs' users hire the product to do." }
    ]
  },
  {
    title: "Tools & Product Stack",
    subtitle: "Modern toolchain for specs, prototyping, analytics, and project tracking",
    skills: [
      { name: "Figma & FigJam", level: "Expert", context: "Interactive wireframing, user journeys, component libraries." },
      { name: "Jira & Linear", level: "Expert", context: "Sprint tracking, backlog grooming, velocity reporting, bug workflows." },
      { name: "Mixpanel & Amplitude", level: "Advanced", context: "Funnel drop-off analysis, retention charts, custom event taxonomy." },
      { name: "Postman & Swagger", level: "Expert", context: "Inspecting API responses, mocking endpoints, validating schemas." },
      { name: "Notion & Coda", level: "Expert", context: "Living product documentation, PRD repositories, decision logs." }
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "hdnb-pm-cert",
    title: "Product Management Professional Certification",
    organization: "Human Development Network Bangladesh (HDNB)",
    batchOrYear: "Batch 1B8",
    description: "Rigorous professional program focused on contemporary product management, customer-centric discovery, metric-driven roadmapping, and agile product team leadership.",
    curriculumHighlights: [
      "User Discovery, Problem Framing & Validation",
      "Product Strategy, Vision & OKR Alignment",
      "Agile Delivery, Backlog Grooming & Sprint Ceremonies",
      "Growth Metrics (AARRR), Unit Economics & Retention Modeling",
      "Capstone Project: End-to-end PRD defense in front of industry judges"
    ],
    verificationStatus: "Verified"
  },
  {
    id: "ict-ministry-scholarship",
    title: "National ICT Scholar Award",
    organization: "Information & Communication Technology (ICT) Ministry, Bangladesh",
    batchOrYear: "2019",
    description: "Merit-based national selection awarded by the Bangladesh government's ICT Division. Recognized technical innovation, interactive mobile prototyping, and digital product leadership.",
    curriculumHighlights: [
      "Interactive Swift Playground Prototype utilizing Apple SpriteKit",
      "Direct masterclasses with Silicon Valley and domestic tech leaders",
      "Human-Centered Design for emerging market applications",
      "Public presentation to government dignitaries and tech council members"
    ],
    verificationStatus: "Active Credential"
  },
  {
    id: "city-univ-cse",
    title: "Bachelor of Science in Computer Science and Engineering",
    organization: "City University, Dhaka, Bangladesh",
    batchOrYear: "Class of 2019",
    description: "Four-year comprehensive engineering program with honors coursework in Software Engineering, Database Systems, Distributed Computing, and Algorithms.",
    curriculumHighlights: [
      "Software Engineering Lifecycle & Quality Assurance",
      "Relational Database Management Systems (RDBMS)",
      "Algorithms, Data Structures & Computational Complexity",
      "Computer Networks, Protocols & Security"
    ],
    verificationStatus: "Verified"
  }
];

export const FEATURED_ARTICLES: Article[] = [
  {
    id: "super-app-friction",
    title: "Deconstructing the Super-App Dilemma: Where Multi-Service Platforms Lose Users",
    subtitle: "Why cramming ride-hailing, food delivery, and payments into one container creates cognitive drag—and how to fix it.",
    publishedDate: "August 2024",
    readTime: "6 min read",
    category: "Product Strategy",
    summary: "As emerging-market platforms expand from single-utility apps into Super-Apps, they frequently experience a hidden conversion tax. This article examines cognitive load, intent-driven home screens, and unified cross-service checkout models.",
    takeaways: [
      "Super-apps must optimize for user intent over vertical real estate saturation.",
      "Contextual home screens that adapt to time and location recover up to 18% in lost task starts.",
      "A unified shopping cart prevents micro-service checkout abandonment."
    ],
    sections: [
      {
        heading: "The Seductive Illusion of the Super-App",
        body: "For founders and venture capitalists, the Super-App model is the holy grail: acquire a customer once for rides, then cross-sell food delivery, grocery logistics, health insurance, and mobile money. But from a consumer's perspective, opening an app to quickly hail a motorcycle during morning rush hour only to be greeted by pop-up promotions for grocery discounts creates acute cognitive frustration. The friction is rarely visual—it is temporal."
      },
      {
        heading: "The Cognitive Architecture of Habitual Tasks",
        body: "Habitual mobile interactions operate in 'System 1' automatic cognition (Kahneman). When a user has to pause and parse 16 different colorful icons to find their daily ride shortcut, their brain drops out of autopilot into deliberate evaluation. At that microsecond, alternative apps on their home screen become viable competitors."
      },
      {
        heading: "The Proposed Fix: Context-Aware Dynamic Architecture",
        body: "Instead of a static grid of identical icon tiles, modern super-apps should deploy lightweight on-device state machines. If it is 8:30 AM on a weekday and the user is at home, the top 60% of the screen should render an instant 'Commute to Office' card with live ETAs and fare estimates. At 1:00 PM, transition seamlessly into curated lunch specials. When the UI anticipates user intent, the super-app feels like a personal concierge rather than an overcrowded mall."
      }
    ]
  },
  {
    id: "technical-depth-pm-superpower",
    title: "From iOS Engineer to Product Manager: Why Technical Depth is a PM Superpower",
    subtitle: "How 4 years of native systems engineering fundamentally reshapes how I scope PRDs, partner with developers, and eliminate feasibility debt.",
    publishedDate: "November 2024",
    readTime: "5 min read",
    category: "Career & Leadership",
    summary: "Product managers with hands-on engineering backgrounds possess an unfair advantage in early-stage and technical products: they can gauge architectural trade-offs in real time and earn immediate credibility with developers.",
    takeaways: [
      "Technical empathy prevents unrealistic scope promises to executive stakeholders.",
      "Knowing how APIs fail enables PMs to design proactive error states into edge cases.",
      "Developers respect PMs who understand why a 'small change' might require a database migration."
    ],
    sections: [
      {
        heading: "The Feasibility Blind Spot",
        body: "One of the most frequent sources of friction between product managers and engineering squads is the 'How hard could it be?' assumption. A non-technical PM might see adding real-time driver tracking as a 2-day UI tweak, unaware that it demands WebSocket gateways, geo-spatial index queries, and battery optimization throttling on the client."
      },
      {
        heading: "Speed Through Shared Mental Models",
        body: "Having shipped native iOS code for products like STPay, I don't just write 'The user can view their past transactions.' I specify the pagination strategy, offline caching behavior, retry backoff when cell signal drops, and cryptographic token expiration handling. This eliminates weeks of back-and-forth ambiguity during active sprint cycles."
      },
      {
        heading: "The Danger to Guard Against",
        body: "The biggest trap for a former engineer turned PM is trying to be the tech lead. A PM's job is not to dictate *how* the code is written, but to ruthlessly clarify *what* problem we are solving and *why*. My technical depth is an analytical instrument to evaluate trade-offs, not a tool to micromanage implementation."
      }
    ]
  },
  {
    id: "financial-inclusion-ux",
    title: "Designing for Financial Inclusion: Lessons from bKash & Emerging Market MFS",
    subtitle: "When designing for the next 100 million users, psychological safety and state certainty matter vastly more than flashy micro-animations.",
    publishedDate: "January 2025",
    readTime: "7 min read",
    category: "Fintech & Inclusion",
    summary: "In emerging economies, digital money represents life savings, school fees, and family livelihoods. Analyzing how tactile confirmation, transparent fee displays, and low-literacy ergonomics cultivate trust.",
    takeaways: [
      "Transparent fee math must be calculated live in the viewport before authorization.",
      "The 'Tap & Hold' interaction is a psychological safety gate that prevents accidental transfers.",
      "Audio and localized haptics provide reassurance for users across literacy spectrums."
    ],
    sections: [
      {
        heading: "The Stakes of Error in Emerging Market Fintech",
        body: "In wealthy markets, an accidental $20 transfer can be reversed with a quick bank dispute form. In an emerging market MFS ecosystem, a wrong digit can transfer an entire month's wage into an unknown stranger's pocket with zero recourse. Design in this context is not an aesthetic luxury; it is a fiduciary responsibility."
      },
      {
        heading: "Why bKash's 'Tap and Hold' Won the Country",
        body: "When bKash introduced the circular progress ring where users must firmly press and hold for 3 seconds to execute a payment, critics labeled it unnecessary friction. In reality, it was a masterclass in psychological design. The physical exertion mirrors the gravity of handing over physical paper currency. It gives the user a decisive 3-second window to reconsider and feel in absolute control."
      },
      {
        heading: "The Next Frontier: Proactive Fraud Safeguards",
        body: "The next leap for mobile financial services in South Asia is automating recipient verification. Displaying verified business names, recipient avatar initials, and warning prompts when transferring to newly registered SIM cards will prevent millions in social engineering scams."
      }
    ]
  }
];
