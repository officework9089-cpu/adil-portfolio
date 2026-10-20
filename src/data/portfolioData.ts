import { ServiceItem, ExpertiseGroup, ProcessStep, ProjectItem, TestimonialItem } from '../types';
import heroCyberInfrastructure from '@/assets/images/project_security_scanner_1792535538415.jpg';
import projectWordPressPlatform from '@/assets/images/project_wordpress_platform_1792535537433.jpg';
import projectSecurityScanner from '@/assets/images/hero_cyber_infrastructure_1792535536909.jpg';
import testimonialClientAvatar from '@/assets/images/testimonial_client_avatar_1792535537592.jpg';
 
export const ASSETS = {
  heroCyberInfrastructure: '/src/assets/images/hero_cyber_infrastructure_1792535536909.jpg',
  aboutDeveloperPortrait: '/src/assets/images/about_developer_portrait_1792535537127.jpg',
  projectSecurityScanner: '/src/assets/images/project_security_scanner_1792535538415.jpg',
  projectWordPressPlatform: '/src/assets/images/project_wordpress_platform_1792535537433.jpg',
  testimonialClientAvatar: '/src/assets/images/testimonial_client_avatar_1792535537592.jpg',
};

export const PERSONAL_INFO = {
  name: 'Adil Khan',
  title: 'Cybersecurity Practitioner & WordPress Developer',
  company: 'SecStackHQ',
  companyRole: 'Founder at SecStackHQ',
  email: 'adisay01@gmail.com',
  phoneDisplay: '+923486603537',
  phoneRaw: '923486603537',
  get whatsAppUrl(): string {
    const text = encodeURIComponent(
      'Hello Adil, I would like to discuss a project regarding cybersecurity or web development with SecStackHQ.'
    );
    return `https://wa.me/${this.phoneRaw}?text=${text}`;
  },
  servicesSummary: 'Penetration Testing | WordPress Architecture | Technical SEO & Security Audits',
  availability: 'Available for Select Projects',
  heroIntro:
    "Hi, I'm Adil Khan — a Cybersecurity Practitioner and WordPress Developer focused on offensive security, technical optimization, and modern web application development.",
  heroSubIntro:
    'As the founder of SecStackHQ, I help businesses strengthen their digital security, improve website performance, and build scalable web experiences.',
  aboutBio1:
    'Hi, I’m Adil Khan — a Cybersecurity Practitioner and WordPress Developer specializing in offensive security, technical optimization, and modern web application builds. I’m also the founder of SecStackHQ, an initiative focused on helping businesses build fast, scalable, and secure digital infrastructure.',
  aboutBio2:
    'Over the years, I’ve worked with a diverse global client base across Pakistan, the United States, and beyond. My work sits at the intersection of security and development, helping organizations identify weaknesses, improve technical foundations, and deliver better digital experiences.',
  aboutBio3:
    'Whether I’m auditing a web application for security vulnerabilities or crafting a custom solution for a business, my goal remains the same: delivering clean, battle-tested work that solves real-world technical challenges.',
};

export const VALUE_PROPOSITIONS = [
  {
    title: 'Security-first thinking',
    description:
      'Rigorous defensive and offensive security principles embedded directly into every architectural layer from inception.',
  },
  {
    title: 'Performance-driven development',
    description:
      'Optimized loading times, efficient database queries, and clean codebase engineering tailored for Core Web Vitals.',
  },
  {
    title: 'Practical, scalable solutions',
    description:
      'Battle-tested implementations built for sustainable long-term maintainability without unnecessary architectural bloat.',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'offensive-security',
    title: 'Offensive Security & Penetration Testing',
    description:
      'Identify security weaknesses in web applications and digital infrastructure through authorized penetration testing and structured security assessments.',
    deliverables: [
      'Web application security testing',
      'Vulnerability assessment',
      'Security findings and remediation guidance',
      'Risk-focused reporting',
    ],
    ctaText: 'Discuss Security Testing',
    badge: 'Offensive Security',
  },
  {
    id: 'wordpress-architecture',
    title: 'WordPress Development & Architecture',
    description:
      'Build clean, responsive, maintainable WordPress websites designed for usability, stability, performance, and future growth.',
    deliverables: [
      'Custom WordPress websites',
      'Theme customization and development',
      'Responsive layouts',
      'Website optimization and maintenance',
    ],
    ctaText: 'Build My Website',
    badge: 'Development',
  },
  {
    id: 'technical-seo',
    title: 'Technical SEO & Performance Optimization',
    description:
      'Improve website discoverability and usability by optimizing technical foundations, site structure, loading performance, and search engine accessibility.',
    deliverables: [
      'Technical SEO audits',
      'Site architecture improvements',
      'Core Web Vitals optimization',
      'Crawlability and indexability reviews',
    ],
    ctaText: 'Improve My Website',
    badge: 'Performance',
  },
  {
    id: 'security-audits',
    title: 'Security Audits & Hardening',
    description:
      'Assess website security configurations and implement practical improvements to reduce exposure to common threats.',
    deliverables: [
      'Website security reviews',
      'WordPress security hardening',
      'Configuration assessments',
      'Remediation recommendations',
    ],
    ctaText: 'Request a Security Audit',
    badge: 'Hardening',
  },
];

export const EXPERTISE_GROUPS: ExpertiseGroup[] = [
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    description:
      'Proactive identification, analysis, and remediation of digital vulnerabilities across authorized environments.',
    skills: [
      {
        name: 'Offensive Security',
        description: 'Simulated adversary perspective to evaluate system defenses and uncover potential attack vectors.',
      },
      {
        name: 'Penetration Testing',
        description: 'Methodical authorized security assessments targeting application logic and network entry points.',
      },
      {
        name: 'Vulnerability Assessment',
        description: 'Systematic scans and verification to prioritize and eliminate exposures before exploitation.',
      },
      {
        name: 'Web Application Security',
        description: 'Deep inspection of client-server exchanges, authentication schemes, and OWASP Top 10 vulnerabilities.',
      },
      {
        name: 'Security Auditing',
        description: 'Holistic evaluation of configurations, access permissions, and defensive posture against industry baselines.',
      },
      {
        name: 'Security Hardening',
        description: 'Locking down server headers, database privileges, file permissions, and exposed attack surfaces.',
      },
    ],
  },
  {
    id: 'development',
    name: 'Web Development',
    description:
      'End-to-end engineering of responsive, extensible, and high-performance WordPress systems and modern web interfaces.',
    skills: [
      {
        name: 'WordPress Development',
        description: 'Clean PHP/React/REST-API implementations with custom schemas and extensible architectures.',
      },
      {
        name: 'Website Architecture',
        description: 'Structural database optimization, clean code hierarchy, and modular asset loading strategies.',
      },
      {
        name: 'Responsive Web Design',
        description: 'Pixel-perfect mobile, tablet, and desktop interfaces prioritizing fluid UX and touch accessibility.',
      },
      {
        name: 'Website Maintenance',
        description: 'Proactive version upgrades, compatibility testing, automated backups, and uptime assurance.',
      },
      {
        name: 'Modern Web Applications',
        description: 'Contemporary frontend paradigms with TypeScript, clean APIs, and modern styling architectures.',
      },
    ],
  },
  {
    id: 'performance',
    name: 'Technical SEO & Performance',
    description:
      'Maximizing search bot crawl efficiency, index coverage, and ultra-fast visual rendering for end users.',
    skills: [
      {
        name: 'Technical SEO',
        description: 'Deep crawl budget optimization, robots.txt directives, canonical paths, and schema definitions.',
      },
      {
        name: 'Website Performance Optimization',
        description: 'Critical rendering path tuning, code splitting, asset compression, and caching strategies.',
      },
      {
        name: 'Core Web Vitals',
        description: 'Laser focus on LCP (Largest Contentful Paint), INP (Interaction to Next Paint), and CLS reduction.',
      },
      {
        name: 'Site Architecture',
        description: 'Logical semantic link structures, parent-child taxonomy, and content discoverability.',
      },
      {
        name: 'Search Engine Accessibility',
        description: 'Semantic HTML5 landmark hierarchy, WCAG accessibility compliance, and structured data validation.',
      },
    ],
  },
];

export const SECSTACK_PILLARS = [
  {
    title: 'Security by Design',
    description:
      'Embedding threat modeling, authentication safeguards, and security best practices directly into the architecture rather than treating them as an afterthought.',
  },
  {
    title: 'Performance & Scalability',
    description:
      'Eliminating latency bottlenecks and bloated dependencies to create agile, lightweight digital infrastructure that grows effortlessly alongside your business.',
  },
  {
    title: 'Practical Technical Solutions',
    description:
      'Delivering actionable, reliable engineering and clear remediation roadmaps designed for real-world impact without unnecessary operational friction.',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand',
    summary: 'Understand the business, technical environment, objectives, and requirements.',
    details: [
      'Comprehensive stakeholder discovery',
      'System environment mapping & scoping',
      'Target performance and security benchmarks',
    ],
  },
  {
    number: '02',
    title: 'Assess & Build',
    summary: 'Evaluate the existing infrastructure, identify opportunities, and develop an appropriate solution.',
    details: [
      'Deep-dive audit & vulnerability testing',
      'Clean architectural planning & code construction',
      'Iterative refinement against security standards',
    ],
  },
  {
    number: '03',
    title: 'Improve & Deliver',
    summary: 'Implement improvements, validate results, and provide practical recommendations for ongoing success.',
    details: [
      'Validation across devices & threat scenarios',
      'Clear technical documentation & handover',
      'Actionable recommendations for sustained resilience',
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'secstack-sentinel',
    title: 'SecStack Sentinel — Security Header & Attack Surface Scanner',
    category: 'Full-Stack & Tools',
    filterGroup: 'Tools',
    tagline: 'Automated offensive inspection engine analyzing HTTP security headers, TLS ciphers, and DNS posture in seconds.',
    description:
      'Engineered an open security auditing utility for dev teams to audit edge defenses, identify missing security policies (CSP, HSTS, X-Content-Type), and test TLS cipher compliance before deployment.',
    imageUrl: heroCyberInfrastructure,
    impactMetrics: ['<800ms Average Scan Latency', '100% OWASP Header Mapping', 'Automated JSON/CLI Reporting'],
    technologies: ['TypeScript', 'Node.js', 'Express', 'React', 'Docker'],
    deliverables: [
      'Strict CSP and HSTS configuration templates',
      'Automated CLI tool with exit code checks for CI/CD pipelines',
      'Real-time web inspection UI with actionable fix snippets',
    ],
    demoType: 'terminal',
    terminalCommand: 'secstack-sentinel inspect --target https://client-app.io --deep-scan',
    demoLogs: [
      { timestamp: '14:02:01', level: 'info', message: 'Resolving DNS records and evaluating TLS 1.3 handshakes...' },
      { timestamp: '14:02:02', level: 'success', message: 'TLS Handshake verified: ECDHE-ECDSA-AES256-GCM-SHA384' },
      { timestamp: '14:02:02', level: 'warn', message: 'Content-Security-Policy missing "frame-ancestors" directive' },
      { timestamp: '14:02:03', level: 'success', message: 'Strict-Transport-Security: max-age=63072000; includeSubDomains; preload' },
      { timestamp: '14:02:04', level: 'success', message: 'Scan finished in 740ms. Remediation script auto-generated.' },
    ],
  },
  {
    id: 'enterprise-headless-wc',
    title: 'Headless WooCommerce Enterprise Architecture',
    category: 'WordPress Architecture',
    filterGroup: 'WordPress',
    tagline: 'Decoupled WordPress & WooCommerce infrastructure delivering sub-400ms TTFB across multi-region edge caches.',
    description:
      'Designed and deployed a decoupled enterprise commerce architecture utilizing WordPress as a headless content/catalog engine connected to a performant React storefront with Redis caching and distributed Edge workers.',
    imageUrl: projectWordPressPlatform,
    impactMetrics: ['340ms Global Median TTFB', '99.98% Uptime Under Flash Sale Load', 'Zero Database Lockups'],
    technologies: ['WordPress REST API', 'React', 'Redis Object Cache', 'MariaDB', 'Cloudflare Workers'],
    deliverables: [
      'High-throughput decoupled REST/GraphQL endpoint routing',
      'Redis micro-caching rules for authenticated cart sessions',
      'Optimized MySQL queries eliminating slow postmeta joins',
    ],
    demoType: 'architecture',
    architectureLayers: [
      { layer: 'Global Edge Layer', role: 'Cloudflare Edge Caching & DDoS Shield', status: 'Active (Tier 1)' },
      { layer: 'Frontend Presentation', role: 'React SPA Storefront with Instant Hydration', status: 'Sub-400ms TTFB' },
      { layer: 'Application Engine', role: 'Decoupled Headless WordPress / PHP 8.3 FPM', status: 'Secured & Isolated' },
      { layer: 'Data & Cache Tier', role: 'Redis Memory Store + Master-Replica MariaDB', status: 'Zero-Lock Queries' },
    ],
  },
  {
    id: 'fintech-pentest-audit',
    title: 'FinTech Platform Authorized Penetration Assessment',
    category: 'Offensive Security',
    filterGroup: 'Security',
    tagline: 'Methodical authorized security assessment covering broken authorization, JWT replay vectors, and privilege escalation.',
    description:
      'Conducted a structured, authorized penetration test against an early-stage financial technology portal, discovering logic flaws in token refresh cycles and authorization perimeter weaknesses before public release.',
    imageUrl: projectSecurityScanner,
    impactMetrics: ['14 Vulnerabilities Triaged', 'Zero Production Exploitations', 'Executive & Technical Fix Guide'],
    technologies: ['Burp Suite Professional', 'OWASP ZAP', 'Python', 'Bash Scripting', 'Hardened Linux'],
    deliverables: [
      'Comprehensive vulnerability assessment report with CVSS 3.1 scores',
      'Remediation proof-of-concept patches for the engineering team',
      'Re-testing validation confirming 100% resolution of high/medium findings',
    ],
    demoType: 'audit',
    statHighlights: [
      { label: 'Scope', value: 'Web & API', detail: '42 REST endpoints audited' },
      { label: 'Remediation Rate', value: '100%', detail: 'All findings patched pre-launch' },
      { label: 'CVSS High Findings', value: '0 Open', detail: 'Fully mitigated in re-test' },
    ],
  },
  {
    id: 'vitalsboost-core-web',
    title: 'High-Traffic Publishing Portal Core Web Vitals Overhaul',
    category: 'Technical SEO',
    filterGroup: 'Optimization',
    tagline: 'Full-stack front-end asset re-engineering, removing render-blocking bloat and achieving green Core Web Vitals.',
    description:
      'Re-engineered a high-volume WordPress editorial magazine receiving over 500k monthly readers, eliminating render-blocking CSS/JS, modernizing image pipelines, and boosting Lighthouse performance.',
    imageUrl: projectWordPressPlatform,
    impactMetrics: ['98/100 Mobile Lighthouse', 'LCP dropped from 3.8s to 1.1s', 'CLS dropped to 0.008'],
    technologies: ['Critical CSS Engine', 'WebP/AVIF Pipeline', 'Brotli Compression', 'WordPress Hooks', 'Lighthouse CI'],
    deliverables: [
      'Critical path CSS extraction and dynamic header injection',
      'Automatic image dimension calculation and responsive srcset generator',
      'Third-party analytics script isolation and deferred web worker execution',
    ],
    demoType: 'metrics',
    statHighlights: [
      { label: 'Mobile Lighthouse', value: '98/100', detail: '+54 points from baseline' },
      { label: 'Largest Contentful Paint', value: '1.1s', detail: 'Reduced from 3.8s (-71%)' },
      { label: 'Cumulative Layout Shift', value: '0.008', detail: 'Zero perceptible visual shift' },
    ],
  },
  {
    id: 'wp-fortress-hardening',
    title: 'WP-Fortress: Defense-in-Depth WordPress Hardening Matrix',
    category: 'Offensive Security',
    filterGroup: 'Security',
    tagline: 'Multi-layer security configuration framework mitigating brute-force attacks, XML-RPC abuse, and unauthorized execution.',
    description:
      'Created an automated hardening matrix for high-risk WordPress instances that locks down attack vectors, isolates upload directory scripts, validates admin IP allowlists, and enforces strict server permissions.',
    imageUrl: projectSecurityScanner,
    impactMetrics: ['99.4% Reduction in Bot Probes', 'Zero Core File Modifications', 'Hardened Permissions (chmod 640/750)'],
    technologies: ['Nginx Hardening Rules', 'Fail2ban Jails', 'PHP 8.3 OPcache', 'Security Headers', 'Linux sysctl'],
    deliverables: [
      'Nginx location blocks blocking wp-config.php and /wp-includes/*.php execution',
      'XML-RPC and unused REST user enum endpoint disabling',
      'Automated daily file checksum integrity checks against wordpress.org hashes',
    ],
    demoType: 'audit',
    statHighlights: [
      { label: 'Unauthorized Probes', value: '-99.4%', detail: 'Dropped via edge WAF rules' },
      { label: 'Integrity Monitoring', value: '24/7', detail: 'Automated SHA-256 diff checks' },
      { label: 'Attack Surface', value: 'Minimal', detail: 'Disabled XML-RPC & user enumeration' },
    ],
  },
  {
    id: 'global-multisite-portal',
    title: 'Enterprise Multi-Region WordPress Multisite Platform',
    category: 'WordPress Architecture',
    filterGroup: 'WordPress',
    tagline: 'Unified multi-country localized digital platform supporting 12 regions with custom RBAC access and shared design system tokens.',
    description:
      'Architected a centralized WordPress multisite network for an international B2B organization, allowing regional teams in the US, Europe, and Asia-Pacific to publish localized content under uniform governance.',
    imageUrl: projectWordPressPlatform,
    impactMetrics: ['12 Regional Portals Synchronized', 'Single Codebase Deployment', 'Sub-500ms Regional CDN Delivery'],
    technologies: ['WordPress Multisite', 'PHP 8.3', 'Custom REST APIs', 'Tailwind CSS', 'MariaDB'],
    deliverables: [
      'Shared custom theme architecture powered by localized token variables',
      'Role-based permissions separating regional editors from central DevOps',
      'Automated database table partitioning for high-traffic territorial subdomains',
    ],
    demoType: 'architecture',
    architectureLayers: [
      { layer: 'Unified Core', role: 'Single WordPress Multisite codebase with git deployments', status: 'Centralized' },
      { layer: 'Regional Portals', role: '12 localized territorial subdomains with GeoIP routing', status: 'Isolated' },
      { layer: 'Governance & RBAC', role: 'Custom capability mapping preventing cross-site changes', status: 'Enforced' },
      { layer: 'Asset Cache', role: 'Shared CSS/JS bundles with regional cache-control headers', status: 'Optimized' },
    ],
  },
  {
    id: 'healthtech-api-gateway',
    title: 'HealthTech Platform API Security & Resilience Audit',
    category: 'Offensive Security',
    filterGroup: 'Security',
    tagline: 'Deep inspection of patient portal endpoints, verifying data encryption, session timeouts, and rate-limiting resilience.',
    description:
      'Performed an authorized offensive audit on patient record transmission routes, ensuring strict CORS isolation, secure JWT lifecycle handling, and defense against automated scraping attacks.',
    imageUrl: projectSecurityScanner,
    impactMetrics: ['Strict Zero-Trust Compliance', 'Sensitive Data Masking Validated', 'Hardened Token Expiry Lifecycles'],
    technologies: ['Postman Security Rig', 'JWT Auditing Tools', 'Docker', 'Bash Automation', 'TLS 1.3'],
    deliverables: [
      'Verification of bearer token signature verification algorithms (RS256)',
      'Rate-limiting stress tests confirming resistance against credential stuffing',
      'Implementation checklist for HIPAA/GDPR technical security safeguards',
    ],
    demoType: 'terminal',
    terminalCommand: 'secstack-api-audit --spec openapi-v3.json --check-auth-expiry --test-rate-limit',
    demoLogs: [
      { timestamp: '10:14:01', level: 'info', message: 'Testing endpoint /api/v2/patient-records with expired token...' },
      { timestamp: '10:14:02', level: 'success', message: 'HTTP 401 Unauthorized correctly returned' },
      { timestamp: '10:14:03', level: 'info', message: 'Evaluating token rotation against replay attacks...' },
      { timestamp: '10:14:04', level: 'warn', message: 'Rate-limiting threshold reached at 60 req/min (enforced)' },
      { timestamp: '10:14:05', level: 'success', message: 'All 18 patient endpoints conform to strict auth policy.' },
    ],
  },
  {
    id: 'ecommerce-schema-seo',
    title: 'E-Commerce Search Graph & Schema Engine Architecture',
    category: 'Technical SEO',
    filterGroup: 'Optimization',
    tagline: 'End-to-end structural SEO revamp introducing dynamic JSON-LD nested schemas, breadcrumb hierarchy, and indexation hygiene.',
    description:
      'Engineered a custom technical SEO schema engine for a 20,000-SKU retail catalog, eliminating duplicate crawl paths, structuring rich product snippets, and establishing canonical tree consistency.',
    imageUrl: projectWordPressPlatform,
    impactMetrics: ['+100% Rich Result Eligibility', 'Zero Orphaned Product URLs', 'Crawl Waste Reduced by 45%'],
    technologies: ['Schema.org JSON-LD', 'Google Search Console API', 'Custom WP Plugin', 'Screaming Frog Scripting'],
    deliverables: [
      'Custom WordPress plugin generating nested Product, Offer, and MerchantReturn schemas',
      'Dynamic XML sitemap generator segmenting high-velocity inventory updates',
      'Breadcrumb and faceted navigation canonicalization avoiding parameter bloat',
    ],
    demoType: 'metrics',
    statHighlights: [
      { label: 'Rich Snippet Match', value: '100%', detail: 'Validated in Google Rich Results' },
      { label: 'Crawl Waste', value: '-45%', detail: 'Filtered infinite filter URLs' },
      { label: 'Indexed URLs', value: '20,400', detail: 'Fully structured and canonicalized' },
    ],
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    name: 'David Vance',
    role: 'VP of Engineering',
    organization: 'FinScale Cloud Systems (US)',
    avatar: testimonialClientAvatar,
    quote:
      'Adil conducted a structured offensive security audit on our patient-facing portal and API gateway. His remediation report gave our developers immediate, actionable steps to eliminate authorization risks before public launch.',
    outcome: 'Zero High-Risk Production Exposure',
    projectDomain: 'Penetration Testing & Hardening',
  },
  {
    id: 't2',
    name: 'Marcus Chen',
    role: 'Technical Operations Director',
    organization: 'Omnia Global Media',
    avatar: testimonialClientAvatar,
    quote:
      'Our high-volume WordPress publishing portal was failing Core Web Vitals under peak traffic. Adil redesigned our critical CSS pipeline and edge caching, taking our mobile Lighthouse score from 44 to 98 and cutting LCP by 71%.',
    outcome: '98/100 Mobile Lighthouse Score',
    projectDomain: 'Core Web Vitals & WordPress',
  },
  {
    id: 't3',
    name: 'Sarah Lindqvist',
    role: 'Co-Founder & Product Lead',
    organization: 'Nordic Digital Commerce',
    avatar: testimonialClientAvatar,
    quote:
      'From custom multisite architecture to securing our database schemas, Adil brings a rare combination of offensive security acumen and deep WordPress internals. Truly battle-tested execution.',
    outcome: '12 Localized Portals Unified',
    projectDomain: 'Enterprise WordPress Architecture',
  },
];
