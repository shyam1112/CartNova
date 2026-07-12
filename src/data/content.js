export const SERVICES = [
  {
    slug: 'shopify-development',
    icon: '⚙️',
    title: 'Shopify Development',
    summary: 'Full-cycle store builds on Shopify and Shopify Plus, from information architecture to launch.',
    details: [
      'Store setup, configuration & third-party integrations',
      'Custom Liquid sections and dynamic storefront features',
      'Speed, Core Web Vitals & conversion-rate optimization',
      'API integrations with ERP, CRM, and fulfillment tools',
    ],
  },
  {
    slug: 'theme-design',
    icon: '🎨',
    title: 'Shopify Theme Design',
    summary: 'Custom-coded themes and design systems built around your brand, not a generic template.',
    details: [
      'Pixel-perfect custom theme design & development',
      'Theme customization for OS 2.0 (sections everywhere)',
      'Responsive, accessible, mobile-first layouts',
      'Design system components reusable across pages',
    ],
  },
  {
    slug: 'custom-apps',
    icon: '🧩',
    title: 'Shopify Custom Apps',
    summary: 'Public and private apps that extend Shopify with logic your business actually needs.',
    details: [
      'Embedded admin apps with Shopify App Bridge & Polaris',
      'Custom storefront APIs and headless integrations',
      'Automations, webhooks, and background job pipelines',
      'App Store-ready public apps with billing built in',
    ],
  },
  {
    slug: 'shopify-plus',
    icon: '🚀',
    title: 'Shopify Plus & Supplier Database',
    summary: 'Enterprise-grade Shopify Plus builds with supplier/inventory database architecture.',
    details: [
      'Multi-supplier and multi-warehouse inventory systems',
      'Automated supplier feed ingestion & catalog sync',
      'B2B storefronts, wholesale pricing & customer segmentation',
      'Launchpad, Flow, and Script automation for scale',
    ],
  },
  {
    slug: 'checkout-extensions',
    icon: '💳',
    title: 'Checkout Extension Development',
    summary: 'Custom checkout UI and logic built on Shopify Functions and checkout extensibility.',
    details: [
      'Custom checkout UI extensions (Shopify Plus)',
      'Shopify Functions for custom discounts, shipping & payments',
      'Post-purchase upsell and thank-you page customization',
      'Validation rules and custom fields at checkout',
    ],
  },
  {
    slug: 'product-migration',
    icon: '📦',
    title: 'Product & Store Migration',
    summary: 'Clean, zero-downtime migrations to Shopify from any platform.',
    details: [
      'Migration from WooCommerce, Magento, BigCommerce & custom builds',
      'Product, customer, order & metafield data migration',
      'SEO-safe URL redirects to protect search rankings',
      'Post-migration QA across devices and browsers',
    ],
  },
  {
    slug: 'store-audit',
    icon: '🔍',
    title: 'Store Audit & Optimization',
    summary: 'A full technical, UX, and performance audit with a prioritized action plan.',
    details: [
      'Performance, SEO & accessibility audits',
      'Conversion funnel & UX review',
      'Third-party app and script bloat clean-up',
      'Actionable roadmap ranked by impact and effort',
    ],
  },
  {
    slug: 'support',
    icon: '🛠️',
    title: 'Ongoing Support & Maintenance',
    summary: 'A dependable Shopify partner for updates, fixes, and continuous improvement.',
    details: [
      'Monthly retainer for updates, fixes & small features',
      'Theme and app version upgrades handled safely',
      'Priority bug fixes with fast turnaround',
      'Monthly performance & health reports',
    ],
  },
]

export const PROCESS = [
  {
    step: '01',
    title: 'Discover',
    description: 'We map your goals, catalog complexity, and existing stack to scope the right solution.',
  },
  {
    step: '02',
    title: 'Design',
    description: 'Wireframes and UI design tailored to your brand and conversion goals — no generic templates.',
  },
  {
    step: '03',
    title: 'Build',
    description: 'Clean, maintainable Shopify development with regular check-ins and staging previews.',
  },
  {
    step: '04',
    title: 'Launch',
    description: 'QA across devices, performance checks, and a coordinated go-live with zero surprises.',
  },
  {
    step: '05',
    title: 'Support',
    description: 'Post-launch monitoring and an ongoing partnership as your store grows.',
  },
]

export const STATS = [
  { value: '120+', label: 'Shopify projects delivered' },
  { value: '98%', label: 'Client retention rate' },
  { value: '35+', label: 'Custom apps built' },
  { value: '4.9/5', label: 'Average client rating' },
]

export const TESTIMONIALS = [
  {
    quote: 'Cartnova rebuilt our storefront and migrated 40,000+ SKUs from Magento without a single day of downtime. Conversion rate is up 22% since launch.',
    name: 'Priya Nair',
    role: 'Founder, Loomcraft Home',
  },
  {
    quote: 'Their custom checkout extension work solved a pricing rule problem three other agencies told us was impossible on Shopify Plus.',
    name: 'Daniel Reyes',
    role: 'VP Ecommerce, Northfield Supply Co.',
  },
  {
    quote: 'We needed a supplier database synced across 6 warehouses. The Cartnova team designed and shipped it in under 8 weeks.',
    name: 'Aisha Khan',
    role: 'Operations Director, Verve Retail Group',
  },
]

export const PORTFOLIO = [
  {
    title: 'Redskapsfabrikken',
    category: 'Supplier Database',
    tags: ['Multi-Supplier Inventory Sync', 'Theme & UX Refresh', 'Abandoned Cart Recovery'],
    description: 'Norway\'s largest heavy-equipment attachment retailer. We synced live inventory across multiple suppliers into a single Shopify catalog, refreshed the theme and on-site UX, and grew revenue through abandoned-cart recovery and proactive customer outreach.',
    url: 'https://www.redskapsfabrikken.no/',
    live: true,
  },
  {
    title: 'Proffdeler',
    category: 'Store Migration',
    tags: ['200,000+ Product Migration', 'Built From Scratch', 'B2B Parts Catalog'],
    description: 'Norway\'s OEM parts marketplace for excavators and construction machinery, covering 35+ machine brands. We built the Shopify store from the ground up and migrated a 200,000+ product supplier catalog, with a brand/model part-finder built for workshops and contractors.',
    url: 'https://www.proffdeler.no/',
    live: true,
  },
  {
    title: 'Loomcraft Home',
    category: 'Migration & Theme Design',
    tags: ['Magento Migration', 'Custom Theme'],
    description: 'Migrated a 40,000-SKU home goods catalog from Magento to Shopify Plus with a fully custom theme.',
  },
  {
    title: 'Northfield Supply Co.',
    category: 'Checkout Extensions',
    tags: ['Shopify Plus', 'Shopify Functions'],
    description: 'Built custom checkout logic for tiered B2B pricing using Shopify Functions and UI extensions.',
  },
  {
    title: 'Verve Retail Group',
    category: 'Supplier Database',
    tags: ['Shopify Plus', 'Custom App'],
    description: 'Designed a multi-warehouse supplier database with automated feed ingestion across 6 locations.',
  },
  {
    title: 'Aurelle Skincare',
    category: 'Theme Design',
    tags: ['Custom Theme', 'CRO'],
    description: 'Custom OS 2.0 theme with a subscription-first UX that lifted repeat purchase rate by 18%.',
  },
  {
    title: 'Pathforge Outdoors',
    category: 'Custom App',
    tags: ['Custom App', 'ERP Integration'],
    description: 'Built a private app syncing inventory in real time between Shopify and a legacy ERP system.',
  },
  {
    title: 'Milbrook Coffee Roasters',
    category: 'Store Migration',
    tags: ['WooCommerce Migration', 'SEO'],
    description: 'Zero-downtime migration from WooCommerce with 100% redirect coverage and no ranking loss.',
  },
]

export const FAQS = [
  {
    q: 'What Shopify plans do you work with?',
    a: 'We work across Shopify, Shopify Advanced, and Shopify Plus — including headless and B2B setups.',
  },
  {
    q: 'Can you migrate our existing store without losing SEO rankings?',
    a: 'Yes. Every migration includes a full URL redirect map and metadata migration to preserve search rankings.',
  },
  {
    q: 'Do you build custom Shopify apps for the App Store?',
    a: 'Yes, we design, build, and can help submit public apps, as well as private apps for internal use.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'A custom theme build typically takes 3–6 weeks; migrations and custom apps vary based on scope, usually 4–10 weeks.',
  },
  {
    q: 'Do you offer ongoing support after launch?',
    a: 'Yes, we offer monthly retainer plans for updates, monitoring, and continuous improvements.',
  },
]
