import { useState, useRef, useEffect, useCallback } from 'react';
import {
  Menu, X, Crown, Plus, Minus, Play, Download, Maximize2, ZoomIn, ZoomOut,
  ShieldCheck, FileText, Landmark, Award, BadgeCheck, GraduationCap,
  Mail, Phone, MapPin, Bell, Instagram, Twitter,
  Globe, BookOpen, Heart, UtensilsCrossed, Shirt, Home as HomeIcon, Wrench, Wallet,
  Shield, ChevronDown, ChevronRight, ChevronLeft, ArrowRight, ArrowUpRight, CheckCircle2,
  Check, AlertCircle, Upload, Briefcase, CreditCard, Calendar, Building2, Fuel, Baby,
  ShoppingBag, Clock, Monitor, Sparkles, Quote, Users, Lock, Eye, EyeOff,
  Star, Flame, Search, TrendingUp, ArrowUp, Loader2, Stamp, Scale, RefreshCw, Share2,
} from 'lucide-react';

/* ═══════════════════ CUSTOM BRAND ICONS ═══════════════════ */
const WhatsAppIcon = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

/* ═══════════════════ DATA ═══════════════════ */
const PILLARS = [
  { icon: GraduationCap, title: 'Free Education', desc: 'World-class schooling at zero cost to every Nigerian child and young adult.', accent: 'from-emerald-50 to-emerald-100 text-emerald-700' },
  { icon: UtensilsCrossed, title: 'Free Food', desc: 'Nutritious daily meals for families and communities across the nation.', accent: 'from-amber-50 to-amber-100 text-amber-700' },
  { icon: HomeIcon, title: 'Free Shelter', desc: 'Safe, dignified housing for the displaced and the vulnerable.', accent: 'from-teal-50 to-teal-100 text-teal-700' },
  { icon: Shirt, title: 'Free Clothing', desc: 'Quality attire so no child ever goes to school unclothed.', accent: 'from-sky-50 to-sky-100 text-sky-700' },
  { icon: Wrench, title: 'Vocational Training', desc: 'Hands-on apprenticeships for self-reliance and enterprise.', accent: 'from-orange-50 to-orange-100 text-orange-700' },
  { icon: Wallet, title: 'Monthly Stipends', desc: 'Guaranteed financial support during and after each programme.', accent: 'from-rose-50 to-rose-100 text-rose-700' },
  { icon: Shield, title: 'Human Freedom', desc: 'Upholding the dignity, rights and liberty of every citizen.', accent: 'from-violet-50 to-violet-100 text-violet-700' },
];

const SERVICES = [
  {
    icon: ShoppingBag, title: 'Alkebulan Commercial Marketplace', subtitle: 'Best Price Guarantee',
    tag: 'Lowest Price', gradient: 'from-benin-green to-benin-green-mid',
    image: '/MISSION%20STATEMENT.jpg',
    desc: 'A royal retail network with the most competitive prices in Nigeria — verified, guaranteed in writing, and delivered nationwide.',
    features: ['Royal price-match promise', 'Market-day bulk pricing', 'Nationwide delivery'],
  },
  {
    icon: Fuel, title: 'Alkebulan Oil & Gas', subtitle: 'Energy for the People',
    tag: 'Energy', gradient: 'from-benin-bronze-dark to-benin-bronze',
    image: '/OIL%20AND%20GAS.jpg',
    desc: 'Reliable petroleum products and clean energy solutions powering homes, farms, businesses and industry.',
    features: ['Retail & depot supply', 'LPG cooking gas rollout', 'Community fueling stations'],
  },
  {
    icon: Building2, title: 'Alkebulan Real Estate', subtitle: 'Homes You Deserve',
    tag: 'Property', gradient: 'from-emerald-900 to-emerald-700',
    image: '/REAL%20ESTATE.jpg',
    desc: 'Affordable housing developments for Nigerian families — from transparent land acquisition to turnkey estates.',
    features: ['Flexible payment plans', 'Verified titles only', 'Estate management'],
  },
  {
    icon: Baby, title: 'Montessori Children Tutorial Center', subtitle: 'Nurturing Young Minds',
    tag: 'Education', gradient: 'from-amber-500 to-amber-700',
    image: '/MONTESSORI.jpg',
    desc: 'A premium Montessori programme blending Nigerian culture with world-class early-childhood methodology.',
    features: ['Certified guides', 'Child-centred learning', 'Early literacy & numeracy'],
  },
];

const COURSES = [
  {
    id: 1, title: 'Fundraising Concepts & Strategic Planning',
    badge: 'YALI Network / US Dept of State', category: 'Finance & Resource Mobilization',
    description: 'Master the key principles of strategic fundraising, executive communication, and capital acquisition for both non-profit initiatives and for-profit ventures.',
    url: 'https://yali.state.gov/courses/course-766/#/lesson/components-of-a-fundraising-plan-yali',
    duration: 'Self-paced', certification: 'Personalized Completion Certificate',
    gradient: 'from-emerald-800 via-emerald-700 to-teal-600', accent: 'text-emerald-600',
  },
  {
    id: 2, title: 'Global ESL Teaching & International Educator (TEFL)',
    badge: 'Teacher Record International', category: 'Global Remote Career & Education',
    description: 'Accredited training and certification to teach English online from home or abroad. Connects graduates with verified international remote tutoring opportunities.',
    url: 'https://teacherrecord.com/teacher',
    duration: '120 Hours', certification: 'Accredited TEFL/TESOL Certificate',
    gradient: 'from-amber-700 via-amber-600 to-orange-500', accent: 'text-amber-600',
  },
  {
    id: 3, title: 'Smart Entrepreneurship: Expanding Your Enterprise',
    badge: 'YALI Network / US Dept of State', category: 'Business Development & Scaling',
    description: 'Learn proven frameworks for business model validation, operational expansion, risk mitigation, and scaling African enterprises sustainably.',
    url: 'https://yali.state.gov/courses/course-3715/',
    duration: 'Self-paced', certification: 'Official YALI Certificate',
    gradient: 'from-lime-700 via-green-700 to-emerald-700', accent: 'text-lime-700',
  },
];

const AFRICA_VIDEOS = [
  { file: '/first.mp4', title: "Africa's History, Sovereignty & Oba Ovonramwen (1897)", badge: 'Heritage', caption: 'The definitive retelling of 1897 — a king, a kingdom, and the theft of its bronzes.' },
  { file: '/second.mp4', title: 'The Benin Bronzes: Looted Legacy, Reclaimed Future', badge: 'Restitution', caption: 'How the world’s finest bronzes left Benin — and the global fight for restitution.' },
  { file: '/third.mp4', title: 'Alkebulan Rising: Pan-African Renaissance', badge: 'Sovereignty', caption: 'From Lagos to Accra to Luanda — the new African economy telling its own story.' },
];

const FEATURED_VIDEO = {
  file: '/fourth.mp4',
  title: 'The Ovonramwen Pact: The Future We Owe Ourselves',
  badge: 'Episode 04 · New',
  caption: 'From the looted past to a reclaimed tomorrow — the road ahead for a sovereign people.',
};

const TOPBAR_SOCIALS = [
  { name: 'WhatsApp', icon: WhatsAppIcon, handle: 'Live chat', base: 'bg-[#25D366]', badge: true },
  { name: 'Instagram', icon: Instagram, handle: '@ovonramwenltd' },
  { name: 'X', icon: Twitter, handle: '@OvonramwenHQ' },
];

const CERTIFICATES = [
  {
    title: 'Cooperative Certificate', type: 'Training Certificate',
    issuer: 'Ovonramwen Limited · Cooperative Training', ref: 'OVL/2026/COOP-0014',
    status: 'Verified Original', size: '68 KB', stamp: 'ORIGINAL', image: '/COOP%20CERT.jpg',
    tone: { sheet: 'from-amber-50 to-white', badge: 'bg-benin-bronze', ring: 'hover:ring-amber-500/50', text: 'text-amber-800' },
  },
  {
    title: 'English Certificate', type: 'Training Certificate',
    issuer: 'Ovonramwen Limited · Language Training', ref: 'OVL/2026/ENG-0028',
    status: 'Verified Original', size: '43 KB', stamp: 'ORIGINAL', image: '/ENGLISH%20CERT.jpg',
    tone: { sheet: 'from-emerald-50 to-white', badge: 'bg-emerald-600', ring: 'hover:ring-emerald-500/50', text: 'text-emerald-800' },
  },
  {
    title: 'Money Laundering Certificate', type: 'Compliance Certificate',
    issuer: 'Ovonramwen Limited · Compliance Desk', ref: 'OVL/2026/AML-0009',
    status: 'Verified Original', size: '64 KB', stamp: 'ORIGINAL', image: '/MONEY%20LAUN%20CERT.jpg',
    tone: { sheet: 'from-sky-50 to-white', badge: 'bg-benin-green', ring: 'hover:ring-emerald-500/50', text: 'text-emerald-800' },
  },
];

const AFFIDAVIT = {
  title: 'Official Sworn Affidavit of Universal Welfare & Human Freedom',
  type: 'Sworn Affidavit of Universal Welfare & Human Freedom',
  issuer: 'High Court of Justice, Benin City, Edo State', ref: 'OVL/2026/AFF-0012-WHF',
  status: 'Sworn & Notarized', size: '1.8 MB', stamp: 'SEAL',
  tone: { sheet: 'from-emerald-50 to-white', badge: 'bg-emerald-600', ring: 'hover:ring-emerald-500/50', text: 'text-emerald-800' },
};

const STATS = [
  { end: 50000, suffix: '+', label: 'Beneficiaries Enrolled' },
  { end: 25, suffix: '', label: 'States Covered' },
  { end: 120, suffix: '+', label: 'Courses Offered' },
  { end: 98, suffix: '%', label: 'Completion Rate' },
];

const NIGERIA_STATES = [
  'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno',
  'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'Gombe', 'Imo', 'Jigawa',
  'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa', 'Niger',
  'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe',
  'Zamfara', 'FCT Abuja',
];

const BANKS = [
  'Access Bank', 'Citibank Nigeria', 'Ecobank Nigeria', 'Fidelity Bank', 'First Bank of Nigeria',
  'First City Monument Bank (FCMB)', 'Globus Bank', 'Guaranty Trust Bank (GTBank)', 'Heritage Bank',
  'Keystone Bank', 'Kuda Microfinance Bank', 'MoniePoint', 'OPay Digital Services', 'Polaris Bank',
  'Stanbic IBTC Bank', 'Standard Chartered', 'Sterling Bank', 'SunTrust Bank', 'Titan Trust Bank',
  'Union Bank', 'United Bank for Africa (UBA)', 'Unity Bank', 'Wema Bank', 'Zenith Bank',
];

const SOCIALS = [
  { name: 'WhatsApp', icon: WhatsAppIcon, handle: '@ovonramwen', url: '#', base: 'bg-[#25D366]', glow: 'group-hover:shadow-[0_8px_24px_-6px_#25D366]' },
  { name: 'X', icon: Twitter, handle: '@OvonramwenHQ', url: '#', base: 'bg-slate-900', glow: 'group-hover:shadow-[0_8px_24px_-6px_#111827]' },
  { name: 'Instagram', icon: Instagram, handle: '@ovonramwenltd', url: '#', base: 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]', glow: 'group-hover:shadow-[0_8px_24px_-6px_#ee2a7b]' },
];

const TICKER_ITEMS = [
  'OBA OVONRAMWEN NOGBAISI — EXILED 1897', 'FREE EDUCATION', 'FREE FOOD', 'FREE SHELTER',
  'FREE CLOTHING', 'VOCATIONAL TRAINING', 'MONTHLY STIPENDS', 'HUMAN FREEDOM',
  'RESTORING THE ROYAL LEGACY OF WELFARE',
];

/* ═══════════════════ HOOKS & UTILITIES ═══════════════════ */
function Reveal({ children, delay = 0, className = '' }) {
  return (
    <div className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function CountUp({ end, suffix = '' }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        let start = null;
        const step = (ts) => {
          if (!start) start = ts;
          const progress = Math.min((ts - start) / 1800, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setVal(Math.floor(eased * end));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        obs.disconnect();
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [end]);
  return (
    <span ref={ref}>
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ═══════════════════ SHARED UI PRIMITIVES ═══════════════════ */
function SectionHeading({ eyebrow, title, highlight, subtitle, light = false, center = true }) {
  return (
    <Reveal className={center ? 'text-center' : ''}>
      <span className={`inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] uppercase ${light ? 'text-benin-gold' : 'text-benin-bronze'}`}>
        <span className="h-px w-8 bg-current" />
        {eyebrow}
        <span className="h-px w-8 bg-current" />
      </span>
      <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 ${light ? 'text-white' : 'text-benin-green-dark'}`}>
        {title} {highlight && <span className="text-benin-bronze">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed ${light ? 'text-white/60' : 'text-slate-500'}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}

const inputClass =
  'w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-benin-green focus:bg-white focus:ring-4 focus:ring-benin-green/10 outline-none transition-all duration-200 text-sm text-slate-800 placeholder:text-slate-400';

const labelClass = 'block text-sm font-semibold text-slate-700 mb-1.5';

function ErrorMsg({ msg }) {
  if (!msg) return null;
  return (
    <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-rose-600 animate-fade-in">
      <AlertCircle className="h-3.5 w-3.5" /> {msg}
    </p>
  );
}
/* ═══════════════════ MEDIA SLOT COMPONENTS ═══════════════════ */

/* 1 — COURSES + HERO COURSE VIDEO HUB */
function CourseVideoHub({ courses, active, setActive, onEnrol, onSelect }) {
  const course = courses[active];

  const select = (i) => {
    setActive(i);
  };

  return (
    <section id="course-hub" className="relative py-20 sm:py-24 overflow-hidden bg-slate-100/80">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-benin-gold/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-emerald-400/10 blur-3xl pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Academy Course Hub"
          title="Real Courses."
          highlight="& Real Certificates."
          subtitle="Stream the featured course preview, then pick your track. Enrol free today — or select a course for your scholarship and we pre-fill your application."
        />

        <div className="mt-14 grid lg:grid-cols-5 gap-6 lg:gap-8 items-stretch">
          {/* Featured Player */}
          <Reveal className="lg:col-span-3">
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-benin-green-dark shadow-2xl ring-1 ring-black/10">
              {/* real video player */}
              <div className="relative aspect-video overflow-hidden bg-black">
                <video
                  src="/fourth.mp4"
                  controls
                  muted
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <span className="pointer-events-none absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-black/40 backdrop-blur px-3 py-1.5 text-[10px] font-bold tracking-widest text-white">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-benin-gold opacity-60" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-benin-gold" />
                  </span>
                  NOW PLAYING · ACADEMY PREVIEW
                </span>
                <span className="pointer-events-none absolute top-3 right-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-black/40 backdrop-blur px-3 py-1.5 text-[10px] font-bold tracking-widest text-white">
                  <Monitor className="h-3.5 w-3.5 text-benin-gold" /> HD
                </span>
              </div>

              {/* course caption */}
              <div className="relative flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-benin-gold px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-benin-green-dark">
                    {course.badge}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-white/90">
                    <Calendar className="h-3.5 w-3.5 text-benin-gold" /> {course.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-white/90">
                    <BookOpen className="h-3.5 w-3.5 text-benin-gold" /> {course.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-white/90">
                    <BadgeCheck className="h-3.5 w-3.5 text-benin-gold" /> {course.certification}
                  </span>
                </div>
                <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-white">{course.title}</h3>
                <p className="mt-2 text-sm text-white/80 leading-relaxed">{course.description}</p>
                <p className="mt-3 text-[11px] font-bold uppercase tracking-widest text-white/50">
                  Watch the legacy · /fourth.mp4
                </p>
              </div>
            </div>
          </Reveal>

          {/* Course selection cards */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {courses.map((c, i) => {
              const selected = active === i;
              return (
                <Reveal key={c.title} delay={i * 100} className="flex-1">
                  <article
                    onClick={() => select(i)}
                    className={`group relative w-full h-full cursor-pointer rounded-2xl p-4 sm:p-5 transition-all duration-300 ${
                      selected
                        ? 'bg-white shadow-xl ring-2 ring-benin-green scale-[1.01]'
                        : 'bg-white/70 hover:bg-white hover:shadow-lg ring-1 ring-slate-200 hover:ring-benin-bronze/40'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <span className={`relative shrink-0 h-14 w-14 rounded-xl overflow-hidden bg-gradient-to-br ${c.gradient} flex items-center justify-center shadow-lg`}>
                        <span className="font-display text-xl font-black text-white/90">{String(i + 1).padStart(2, '0')}</span>
                        {selected && (
                          <span className="absolute -top-1 -right-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-benin-gold text-white shadow">
                            <Check className="h-3 w-3" strokeWidth={4} />
                          </span>
                        )}
                      </span>
                      <span className="flex-1 min-w-0">
                        <span className="inline-flex items-center gap-1 rounded-md bg-benin-gold/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-benin-bronze">
                          <BookOpen className="h-3 w-3" /> {c.category}
                        </span>
                        <span className={`mt-1 block font-display text-base font-bold leading-snug ${selected ? 'text-benin-green-dark' : 'text-slate-800'}`}>{c.title}</span>
                        <span className="mt-1 inline-flex items-center gap-1.5 text-[11px] font-bold text-benin-green">
                          <BadgeCheck className="h-3.5 w-3.5" /> {c.badge}
                        </span>
                      </span>
                    </div>
                    <p className="mt-3 text-[13px] text-slate-500 leading-relaxed">{c.description}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-1 text-[10px] font-semibold text-slate-600">
                        <Clock className="h-3 w-3" /> {c.duration}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-1 text-[10px] font-semibold text-emerald-700">
                        <BadgeCheck className="h-3 w-3" /> {c.certification}
                      </span>
                    </div>
                    <div className="mt-4 flex flex-wrap items-center gap-2" onClick={(e) => e.stopPropagation()}>
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-xl bg-benin-green px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-benin-green/25 transition-all duration-300 hover:bg-benin-green-mid hover:-translate-y-0.5"
                      >
                        Enroll / Start Course <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                      <button
                        onClick={() => onSelect && onSelect(c)}
                        className="inline-flex items-center gap-1.5 rounded-xl bg-benin-gold/15 px-4 py-2.5 text-xs font-bold text-benin-bronze transition-all duration-300 hover:bg-benin-gold hover:text-benin-green-dark hover:-translate-y-0.5"
                      >
                        <Sparkles className="h-3.5 w-3.5" /> Select for My Scholarship
                      </button>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* certified outcome strip */}
        <Reveal className="mt-8">
          <div className="rounded-2xl bg-gradient-to-r from-benin-green to-benin-green-mid p-6 sm:p-8 ring-1 ring-black/5 shadow-xl">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-5">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-benin-gold text-benin-green-dark shadow-lg">
                <BadgeCheck className="h-7 w-7" />
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-benin-gold-light">Upon completion of: {course.title}</p>
                <p className="mt-1 font-display text-lg sm:text-xl font-bold text-white">You earn a {course.certification} — free, from anywhere in Africa.</p>
              </div>
              <a
                href={course.url}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-display text-sm font-bold text-benin-green shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                Begin {course.title} <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* 2 — VOICES OF ALKEBULAN · AFRICAN SOVEREIGNTY VIDEO GRID */
function AlkebulanVideoGrid({ videos, id, onPlay, onShare }) {
  const videoRefs = useRef([]);
  const [started, setStarted] = useState(() => videos.map(() => false));

  const play = (i) => {
    const v = videoRefs.current[i];
    if (v && v.play) v.play();
    setStarted((s) => s.map((x, idx) => (idx === i ? true : x)));
    onPlay && onPlay(i);
  };

  const share = async (i) => {
    const video = videos[i];
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(url);
      }
    } catch (_) {
      /* clipboard unavailable — still notify */
    } finally {
      onShare && onShare(video.title);
    }
  };

  return (
    <section id={id} className="relative py-20 sm:py-24 overflow-hidden bg-benin-green-dark">
      <div className="absolute inset-0 dot-pattern opacity-10" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-72 rounded-full bg-benin-bronze/20 blur-3xl pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          light
          eyebrow="Alkebulan · The Mother Continent"
          title="Voices of Alkebulan &"
          highlight="African Sovereignty"
          subtitle="An original documentary series reclaiming African history, heritage and sovereignty — told by us, for us. Tap play, or download each episode to watch offline."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {videos.map((video, i) => {
            const isStarted = started[i];
            return (
              <Reveal key={video.title} delay={i * 120} className={video.featured ? 'md:col-span-3' : ''}>
                {video.featured ? (
                  /* featured full-width player */
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl ring-1 ring-benin-gold/30 bg-slate-900/70 shadow-2xl transition-all duration-300 hover:-translate-y-1.5 md:flex-row">
                    <div className="relative aspect-video overflow-hidden bg-black md:aspect-auto md:w-2/5">
                      <video
                        ref={(el) => { videoRefs.current[i] = el; }}
                        src={video.file}
                        controls
                        muted
                        playsInline
                        preload="metadata"
                        onPlay={() => setStarted((s) => s.map((x, idx) => (idx === i ? true : x)))}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <span className="pointer-events-none absolute left-3 top-3 z-20 inline-flex items-center gap-1.5 rounded-lg bg-black/50 backdrop-blur px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-benin-gold">
                        <Play className="h-3 w-3 fill-current" /> {video.badge}
                      </span>
                      {!isStarted && (
                        <button
                          onClick={() => play(i)}
                          aria-label={`Play ${video.title}`}
                          className="absolute inset-0 z-10 flex w-full items-center justify-center group/pl"
                        >
                          <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
                          <span className="relative ml-1 inline-flex h-20 w-20 items-center justify-center rounded-full bg-benin-gold shadow-2xl ring-4 ring-white/30 transition-transform duration-300 group-hover/pl:scale-110 group-hover/pl:bg-benin-gold-light">
                            <Play className="h-8 w-8 fill-white text-white" />
                          </span>
                          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 w-24 animate-pulse-ring" />
                        </button>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col justify-center p-6 sm:p-8">
                      <span className="inline-flex w-max items-center gap-2 rounded-full bg-benin-gold/15 ring-1 ring-benin-gold/30 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-benin-gold">
                        <Flame className="h-3 w-3" /> Featured Episode
                      </span>
                      <h3 className="mt-3 font-display text-2xl font-bold text-white leading-snug">{video.title}</h3>
                      <p className="mt-2 max-w-2xl text-sm text-white/70 leading-relaxed">{video.caption}</p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-bold tracking-widest uppercase text-white/40">
                        <Monitor className="h-3.5 w-3.5" /> {video.file}
                      </span>
                      <div className="mt-6 flex items-center gap-2 sm:max-w-md">
                        <a
                          href={video.file}
                          download
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-white/10 ring-1 ring-white/15 px-3 py-3 text-xs font-bold text-white transition-all duration-300 hover:bg-benin-gold hover:text-benin-green-dark hover:-translate-y-0.5"
                        >
                          <Download className="h-3.5 w-3.5" /> Download
                        </a>
                        <button
                          onClick={() => share(i)}
                          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-benin-gold/15 ring-1 ring-benin-gold/30 px-3 py-3 text-xs font-bold text-benin-gold transition-all duration-300 hover:bg-benin-gold hover:text-benin-green-dark hover:-translate-y-0.5"
                        >
                          <Share2 className="h-3.5 w-3.5" /> Share
                        </button>
                      </div>
                    </div>
                  </article>
                ) : (
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl ring-1 ring-white/10 bg-slate-900/60 shadow-2xl hover:-translate-y-1.5 transition-all duration-300">
                    {/* video frame */}
                    <div className="relative aspect-video overflow-hidden rounded-t-2xl bg-black">
                      <video
                        ref={(el) => { videoRefs.current[i] = el; }}
                        src={video.file}
                        controls
                        muted
                        playsInline
                        preload="metadata"
                        onPlay={() => setStarted((s) => s.map((x, idx) => (idx === i ? true : x)))}
                        className="absolute inset-0 h-full w-full object-cover"
                      />

                      {/* title tag badge */}
                      <span className="pointer-events-none absolute right-3 top-3 z-20 inline-flex items-center gap-1.5 rounded-lg bg-black/50 backdrop-blur px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-benin-gold">
                        <Play className="h-3 w-3 fill-current" /> {video.badge}
                      </span>

                      {/* pre-play overlay */}
                      {!isStarted && (
                        <button
                          onClick={() => play(i)}
                          aria-label={`Play ${video.title}`}
                          className="absolute inset-0 z-10 flex w-full items-center justify-center group/pl"
                        >
                          <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
                          <span className="relative ml-1 inline-flex h-16 w-16 items-center justify-center rounded-full bg-benin-gold shadow-2xl ring-4 ring-white/30 transition-transform duration-300 group-hover/pl:scale-110 group-hover/pl:bg-benin-gold-light">
                            <Play className="h-6 w-6 fill-white text-white" />
                          </span>
                          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 w-24 animate-pulse-ring" />
                        </button>
                      )}
                    </div>

                    {/* captions */}
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-display text-lg font-bold text-white leading-snug">{video.title}</h3>
                      <p className="mt-2 flex-1 text-sm text-white/60 leading-relaxed">{video.caption}</p>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-bold tracking-widest uppercase text-white/40">
                        <Monitor className="h-3.5 w-3.5" /> {video.file}
                      </span>
                      <div className="mt-4 flex items-center gap-2">
                        <a
                          href={video.file}
                          download
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-white/10 ring-1 ring-white/15 px-3 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:bg-benin-gold hover:text-benin-green-dark hover:-translate-y-0.5"
                        >
                          <Download className="h-3.5 w-3.5" /> Download
                        </a>
                        <button
                          onClick={() => share(i)}
                          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-benin-gold/15 ring-1 ring-benin-gold/30 px-3 py-2.5 text-xs font-bold text-benin-gold transition-all duration-300 hover:bg-benin-gold hover:text-benin-green-dark hover:-translate-y-0.5"
                        >
                          <Share2 className="h-3.5 w-3.5" /> Share
                        </button>
                      </div>
                    </div>
                  </article>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* 3 — FEATURED FILM (single player, top of Academy next to courses) */
function FeaturedVideo({ video, id, onPlay, onShare }) {
  const videoRef = useRef(null);
  const [started, setStarted] = useState(false);

  const play = () => {
    const v = videoRef.current;
    if (v && v.play) v.play();
    setStarted(true);
    onPlay && onPlay(video.title);
  };

  const share = async () => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(url);
      }
    } catch (_) { /* clipboard unavailable — still notify */ } finally {
      onShare && onShare(video.title);
    }
  };

  return (
    <section id={id} className="relative py-16 sm:py-20 overflow-hidden bg-benin-green-dark">
      <div className="absolute inset-0 dot-pattern opacity-10" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-72 rounded-full bg-benin-bronze/20 blur-3xl pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          light
          eyebrow="Ovonramwen Media Center"
          title="Watch the Film —"
          highlight="Right Here"
          subtitle="The newest episode streams on-screen, downloads offline, and shares with one tap."
        />
        <Reveal>
          <article className="group relative mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl ring-1 ring-white/10 bg-slate-900/60 shadow-2xl">
            <div className="relative aspect-video overflow-hidden bg-black">
              <video
                ref={videoRef}
                src={video.file}
                controls
                muted
                playsInline
                preload="metadata"
                onPlay={() => setStarted(true)}
                className="absolute inset-0 h-full w-full object-cover"
              />
              {/* title tag badge */}
              <span className="pointer-events-none absolute right-3 top-3 z-20 inline-flex items-center gap-1.5 rounded-lg bg-black/50 backdrop-blur px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-benin-gold">
                <Play className="h-3 w-3 fill-current" /> {video.badge}
              </span>

              {/* pre-play overlay */}
              {!started && (
                <button
                  onClick={play}
                  aria-label={`Play ${video.title}`}
                  className="absolute inset-0 z-10 flex w-full items-center justify-center group/pl"
                >
                  <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
                  <span className="relative ml-1 inline-flex h-20 w-20 items-center justify-center rounded-full bg-benin-gold shadow-2xl ring-4 ring-white/30 transition-transform duration-300 group-hover/pl:scale-110 group-hover/pl:bg-benin-gold-light">
                    <Play className="h-8 w-8 fill-white text-white" />
                  </span>
                  <span className="absolute bottom-6 left-1/2 -translate-x-1/2 w-28 animate-pulse-ring" />
                </button>
              )}
            </div>

            {/* captions + actions */}
            <div className="flex flex-col gap-4 p-6 sm:p-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-snug">{video.title}</h3>
                <p className="mt-2 max-w-xl text-sm text-white/60 leading-relaxed">{video.caption}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-bold tracking-widest uppercase text-white/40">
                  <Monitor className="h-3.5 w-3.5" /> {video.file}
                </span>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <a
                  href={video.file}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-white/10 ring-1 ring-white/15 px-4 py-3 text-xs font-bold text-white transition-all duration-300 hover:bg-benin-gold hover:text-benin-green-dark hover:-translate-y-0.5"
                >
                  <Download className="h-4 w-4" /> Download
                </a>
                <button
                  onClick={share}
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-benin-gold/15 ring-1 ring-benin-gold/30 px-4 py-3 text-xs font-bold text-benin-gold transition-all duration-300 hover:bg-benin-gold hover:text-benin-green-dark hover:-translate-y-0.5"
                >
                  <Share2 className="h-4 w-4" /> Share
                </button>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

/* 4 — CERTIFICATION TRUST SLOTS (2 showcase cards) */
function CertificateSlots({ certificates, onView, id }) {
  return (
    <section id={id} className="relative py-20 sm:py-24 bg-slate-100/80 overflow-hidden">
      <div className="absolute -top-32 left-0 w-80 h-80 rounded-full bg-benin-bronze/10 blur-3xl pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Verified Credentials"
          title="Certifications &"
          highlight="Accreditation"
          subtitle="Three original certificates back every guarantee Ovonramwen Limited makes. Click any card to inspect the full certified copy at high resolution."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert) => (
            <Reveal key={cert.title}>
              <article className={`group h-full rounded-3xl bg-white p-6 sm:p-8 shadow-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ring-1 ring-slate-200 ${cert.tone.ring}`}>
                <div className="flex items-start justify-between">
                  <span className={`inline-flex items-center gap-2 rounded-full ${cert.tone.badge} px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white`}>
                    <BadgeCheck className="h-3.5 w-3.5" /> {cert.status}
                  </span>
                  <span className="text-xs font-medium text-slate-400">{cert.size}</span>
                </div>

                {/* certificate image */}
                <button
                  onClick={() => onView(cert)}
                  className={`mt-6 block w-full overflow-hidden rounded-2xl bg-gradient-to-br ${cert.tone.sheet} ring-1 ring-slate-200 text-left transition-all duration-300 hover:ring-2 ${cert.tone.ring.replace('hover:', '')}`}
                >
                  <span className="relative flex items-center justify-center bg-white p-3">
                    <img src={cert.image} alt={cert.title} className="block h-auto w-full" loading="lazy" />
                    <span className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/5" />
                  </span>
                  <span className="block p-5">
                    <p className="flex justify-between text-xs text-slate-500"><span className="font-semibold text-slate-400">Reference</span> <span className="font-mono font-semibold text-slate-700">{cert.ref}</span></p>
                    <span className={`mt-3 inline-flex items-center gap-2 text-xs font-bold tracking-wide ${cert.tone.text}`}>
                      <Maximize2 className="h-3.5 w-3.5" /> Tap to view full certified copy
                    </span>
                  </span>
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 4 — LEGAL AFFIDAVIT SLOT (1 framed showcase) */
function AffidavitSlot({ affidavit, onView, id }) {
  return (
    <section id={id} className="relative py-16 sm:py-20 overflow-hidden bg-white">
      <div className="absolute -bottom-32 right-0 w-96 h-96 rounded-full bg-benin-green/10 blur-3xl pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-benin-green-dark via-benin-green to-benin-green-light p-8 sm:p-14">
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <div className="absolute inset-0 dot-pattern opacity-10" />
            <span className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-benin-gold/20 blur-3xl" />

            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              {/* narrative */}
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-benin-gold/15 ring-1 ring-benin-gold/40 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-widest text-benin-gold-light">
                  <Scale className="h-3.5 w-3.5" /> Ref: {affidavit.ref}
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-5 leading-tight">
                  Our mission is sworn in law.
                  <span className="block text-benin-gold-light">Not just in words.</span>
                </h2>
                <p className="mt-5 text-white/70 leading-relaxed max-w-xl">
                  The <strong className="text-white">Official Sworn Affidavit of Universal Welfare & Human Freedom</strong> binds
                  Ovonramwen Limited — before the High Court of Benin City — to feed, educate, shelter, clothe,
                  train and empower the people. Every promise on this platform is a sworn obligation.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 backdrop-blur px-3 py-1.5 text-xs font-semibold text-white">
                    <ShieldCheck className="h-4 w-4 text-benin-gold" /> {affidavit.status}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 backdrop-blur px-3 py-1.5 text-xs font-semibold text-white">
                    <Building2 className="h-4 w-4 text-benin-gold" /> {affidavit.issuer}
                  </span>
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => onView(affidavit)}
                    className="inline-flex items-center gap-2 rounded-2xl bg-benin-gold px-6 py-4 font-display text-base font-bold text-benin-green-dark shadow-xl shadow-black/20 hover:bg-benin-gold-light hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                  >
                    <Maximize2 className="h-5 w-5" /> Preview the Affidavit
                  </button>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-benin-gold-light hover:text-white transition-colors"
                  >
                    <FileText className="h-4 w-4" /> {affidavit.size} · Certified copy
                  </a>
                </div>
              </div>

              {/* framed showcase + seal */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative w-full max-w-sm rotate-2 rounded-2xl bg-gradient-to-br from-amber-200 via-amber-100 to-emerald-100 p-2 shadow-2xl ring-1 ring-white/40 transition-transform duration-500 hover:rotate-0">
                  <div className="relative rounded-xl bg-gradient-to-br from-amber-50 to-white p-6 sm:p-8 overflow-hidden">
                    <div className="absolute inset-2 border-2 border-benin-bronze/25 rounded-lg pointer-events-none" />
                    <div className="flex items-center justify-center gap-4">
                      <Crown className="h-10 w-10 text-benin-bronze" />
                      <Scale className="h-10 w-10 text-benin-bronze" />
                      <Crown className="h-10 w-10 text-benin-bronze" />
                    </div>
                    <p className="mt-5 text-center text-[9px] font-bold uppercase tracking-[0.3em] text-benin-bronze">In the High Court of Justice</p>
                    <p className="mt-1 text-center text-[10px] font-semibold uppercase tracking-widest text-slate-500">Benin City, Edo State</p>
                    <h3 className="mt-4 text-center font-display text-lg leading-snug font-black text-slate-800">
                      Official Sworn Affidavit of Universal Welfare & Human Freedom
                    </h3>
                    <p className="mt-3 text-center text-[11px] text-slate-500 italic leading-relaxed">
                      "The deponent undertakes, on oath, to advance the universal welfare and human freedom of the people."
                    </p>
                    <div className="mt-5 flex items-center justify-between border-t border-dashed border-slate-300 pt-4">
                      <span className="font-mono text-[10px] font-semibold text-slate-500">No. {affidavit.ref}</span>
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                        <Stamp className="h-3.5 w-3.5" /> {affidavit.stamp} · Authentic
                      </span>
                    </div>
                  </div>
                </div>
                {/* seal badge */}
                <span className="absolute -top-5 -right-2 lg:right-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-benin-gold ring-4 ring-white shadow-2xl animate-float">
                  <Stamp className="h-9 w-9 text-benin-green-dark" />
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [topbarDismissed, setTopbarDismissed] = useState(false);
  const [toast, setToast] = useState(null);

  const [activeCourse, setActiveCourse] = useState(0);

  const [scholarshipCourse, setScholarshipCourse] = useState('');

  const [activeDoc, setActiveDoc] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(100);

  const [showTop, setShowTop] = useState(false);

  const notify = useCallback((msg) => {
    setToast(msg);
    window.clearTimeout(window.__toastT);
    window.__toastT = window.setTimeout(() => setToast(null), 3400);
  }, []);

  /* reveal-on-scroll observer */
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.reveal-visible)');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [currentPage]);

  /* back-to-top visibility */
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    setNotificationOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openDoc = (doc) => {
    setActiveDoc(doc);
    setZoomLevel(100);
  };

  const selectForScholarship = (course) => {
    setScholarshipCourse(course.title);
    notify(`"${course.title}" selected for your scholarship — confirm it in Step 2.`);
    go('register');
  };

  /* ═══════════════ HERO LOGO MARK ═══════════════ */
  const LogoMark = ({ size = 'h-11 w-11' }) => (
    <span className={`${size} relative flex items-center justify-center rounded-xl bg-gradient-to-br from-benin-gold to-benin-bronze shadow-lg shadow-benin-bronze/30 shrink-0`}>
      <Crown className="h-[55%] w-[55%] text-white" strokeWidth={2.2} />
      <span className="absolute -bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-emerald-300 ring-2 ring-white" />
    </span>
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased">
      {/* ═══════════════ TOPBAR · SOCIAL HANDLES ═══════════════ */}
      <div className={`fixed top-0 inset-x-0 z-[60] transition-all duration-300 ${topbarDismissed ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className="bg-benin-green-dark text-white shadow-lg shadow-benin-green-dark/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center">
            <div className="flex items-center justify-between gap-3 w-full">
              <p className="flex items-center gap-2 text-[11px] sm:text-xs font-medium text-white/85 min-w-0">
                <Sparkles className="h-3.5 w-3.5 text-benin-gold shrink-0" />
                <span className="truncate">The 1897 legacy, renewed in 2026 — welfare for all Africans.</span>
              </p>

              <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
                {TOPBAR_SOCIALS.map((s) => {
                  const Icon = s.icon;
                  const isWa = s.name === 'WhatsApp';
                  return (
                    <a
                      key={s.name}
                      href="#"
                      onClick={(e) => { e.preventDefault(); isWa && notify('Opening WhatsApp — our live welfare desk is ready for you.'); }}
                      title={s.handle}
                      className={`relative inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold transition-all duration-200 hover:-translate-y-0.5 sm:px-3 ${isWa ? s.base : 'bg-white/10 hover:bg-white/20'}`}
                    >
                      <Icon className="h-3.5 w-3.5" />
                      <span className={`hidden lg:inline ${isWa ? 'text-white' : 'text-white/90'}`}>{s.handle}</span>
                      {s.badge && (
                        <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-white/40" />
                        </span>
                      )}
                    </a>
                  );
                })}
                <button
                  onClick={() => setTopbarDismissed(true)}
                  aria-label="Dismiss alert bar"
                  className="ml-1 inline-flex h-7 w-7 items-center justify-center rounded-full text-white/60 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════ NAVBAR ═══════════════ */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${topbarDismissed ? 'top-0' : 'mt-9'} bg-white/85 backdrop-blur-xl shadow-sm border-b border-slate-200/70`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-[72px] items-center justify-between gap-4">
            {/* logo */}
            <button onClick={() => go('home')} className="flex items-center gap-3 group">
              <LogoMark />
              <span className="text-left leading-tight">
                <span className="block font-display text-[15px] sm:text-base font-black tracking-wide text-benin-green-dark">
                  OVONRAMWEN
                </span>
                <span className="block text-[10px] font-semibold tracking-[0.32em] uppercase text-benin-bronze">
                  Limited · Est. Welfare
                </span>
              </span>
            </button>

            {/* desktop links */}
            <div className="hidden lg:flex items-center gap-1">
              {[
                ['home', 'Home'],
                ['services', 'Services'],
                ['academy', 'Academy'],
                ['about', 'About Us'],
              ].map(([id, label]) => (
                <button
                  key={id}
                  onClick={() => go(id)}
                  className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    currentPage === id ? 'text-benin-green' : 'text-slate-600 hover:text-benin-green'
                  }`}
                >
                  {label}
                  {currentPage === id && (
                    <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-benin-gold to-benin-bronze" />
                  )}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              {/* notification bell */}
              <div className="relative">
                <button
                  onClick={() => setNotificationOpen(!notificationOpen)}
                  aria-label="Notifications"
                  className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 hover:text-benin-green transition-colors"
                >
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-2 right-2 flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-benin-bronze opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-benin-bronze" />
                  </span>
                </button>
                {notificationOpen && (
                  <>
                    <button className="fixed inset-0 z-40 cursor-default" onClick={() => setNotificationOpen(false)} aria-label="Close notifications" />
                    <div className="absolute right-0 mt-2 w-72 rounded-2xl bg-white shadow-2xl ring-1 ring-slate-200 z-50 animate-drop-in overflow-hidden">
                      <div className="flex items-center justify-between bg-benin-green px-4 py-3">
                        <p className="text-sm font-bold text-white">Notifications</p>
                        <span className="rounded-full bg-benin-gold px-2 py-0.5 text-[10px] font-bold text-benin-green-dark">2 NEW</span>
                      </div>
                      <div className="p-2 space-y-1">
                        {[
                          { icon: GraduationCap, t: 'New course track unlocked', d: 'Agritech & Agribusiness is now live — enrol free.' },
                          { icon: BadgeCheck, t: 'Accreditation renewed', d: 'Our educational accreditation has been renewed for 2026.' },
                        ].map((n) => (
                          <button key={n.t} onClick={() => { go('academy'); notify(n.t); }} className="flex w-full items-start gap-3 rounded-xl p-3 text-left hover:bg-slate-50 transition-colors">
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-benin-green/10 text-benin-green">
                              <n.icon className="h-4.5 w-4.5" />
                            </span>
                            <span>
                              <span className="block text-sm font-bold text-slate-800">{n.t}</span>
                              <span className="block text-xs text-slate-500 mt-0.5">{n.d}</span>
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* apply CTA */}
              <button
                onClick={() => go('register')}
                className="hidden sm:inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-benin-green to-benin-green-light px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-benin-green/30 transition-all duration-300 hover:shadow-xl hover:shadow-benin-green/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                Apply Now <ArrowRight className="h-4 w-4" />
              </button>

              {/* mobile hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-700 hover:bg-slate-100 transition-colors"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* ═══════════════ MOBILE DRAWER ═══════════════ */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[70] lg:hidden">
          <button className="absolute inset-0 bg-benin-green-dark/60 backdrop-blur-sm animate-fade-in" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu" />
          <div className="absolute left-0 top-0 h-full w-[86%] max-w-sm bg-white shadow-2xl anim-drawer-in flex flex-col">
            <div className="flex items-center justify-between bg-gradient-to-r from-benin-green to-benin-green-mid px-6 py-5">
              <div className="flex items-center gap-3">
                <LogoMark />
                <span className="block text-left leading-tight">
                  <span className="block font-display text-lg font-black text-white">OVONRAMWEN</span>
                  <span className="block text-[10px] font-semibold tracking-[0.28em] uppercase text-benin-gold">Limited</span>
                </span>
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20" aria-label="Close">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-1">
              {[
                ['home', 'Home', HomeIcon],
                ['services', 'Alkebulan Services', ShoppingBag],
                ['academy', 'Academy & Media', GraduationCap],
                ['about', 'About Us', Landmark],
              ].map(([id, label, Icon]) => (
                <button
                  key={id}
                  onClick={() => go(id)}
                  className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3.5 text-left text-[15px] font-semibold transition-colors ${
                    currentPage === id ? 'bg-benin-green/10 text-benin-green' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-benin-green/10 text-benin-green">
                    <Icon className="h-5 w-5" />
                  </span>
                  {label}
                  {currentPage === id && <CheckCircle2 className="ml-auto h-4.5 w-4.5 text-benin-green" />}
                </button>
              ))}
            </div>
            <div className="border-t border-slate-100 p-5">
              <button
                onClick={() => go('register')}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-benin-green to-benin-green-light px-5 py-4 text-base font-bold text-white shadow-lg shadow-benin-green/25"
              >
                Apply for Benefits <ArrowRight className="h-4 w-4" />
              </button>
              <p className="mt-3 text-center text-[11px] text-slate-400">Free Education · Food · Shelter · Clothing · Stipends</p>
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════ FLOATING SOCIAL SIDEBAR (desktop) ═══════════════ */}
      <div className="hidden xl:flex fixed left-5 top-1/2 z-40 -translate-y-1/2 flex-col gap-2.5">
        {SOCIALS.map((s) => {
          const Icon = s.icon;
          return (
            <a
              key={s.name}
              href={s.url}
              onClick={(e) => e.preventDefault()}
              title={s.handle}
              className={`group relative flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-500 ring-1 ring-slate-200 shadow-lg transition-all duration-300 hover:text-white ${s.base} ${s.glow} hover:-translate-y-0.5`}
            >
              <Icon className="h-4.5 w-4.5" />
              <span className="absolute left-12 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white opacity-0 pointer-events-none transition-all duration-200 group-hover:opacity-100">
                {s.handle}
              </span>
            </a>
          );
        })}
      </div>

      {/* ═══════════════ MOBILE WHATSAPP BUBBLE ═══════════════ */}
      <a
        href="#"
        onClick={(e) => { e.preventDefault(); notify('WhatsApp welfare desk opening…'); }}
        className="xl:hidden fixed bottom-24 right-5 z-40 flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] p-3.5 text-white shadow-2xl shadow-[#25D366]/40 transition-transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon className="h-6 w-6" />
        <span className="absolute top-0 right-0 flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-300 ring-2 ring-white" />
        </span>
      </a>

      {/* ═══════════════ BACK TO TOP ═══════════════ */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className={`fixed right-5 bottom-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-benin-green to-benin-green-dark text-white shadow-2xl shadow-benin-green/30 ring-1 ring-white/20 transition-all duration-300 hover:-translate-y-1 ${showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      {/* ═══════════════ DOCUMENT PREVIEW MODAL (certs + affidavit) ═══════════════ */}
      {activeDoc && (
        <div className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center p-0 sm:p-6">
          <button className="absolute inset-0 bg-benin-green-dark/80 backdrop-blur-sm animate-fade-in" onClick={() => setActiveDoc(null)} aria-label="Close preview" />
          <div className="relative w-full sm:max-w-2xl max-h-[92vh] sm:max-h-[86vh] rounded-t-3xl sm:rounded-[2rem] bg-white shadow-2xl animate-modal-pop flex flex-col overflow-hidden">
            <div className="flex items-center justify-between border-b border-slate-100 px-5 sm:px-7 py-4">
              <div className="min-w-0">
                <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-benin-bronze">
                  <ShieldCheck className="h-3.5 w-3.5" /> High-Resolution Preview
                </p>
                <h3 className="truncate font-display text-lg font-bold text-benin-green-dark">{activeDoc.title}</h3>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <div className="hidden sm:flex items-center rounded-full bg-slate-100 p-1">
                  <button onClick={() => setZoomLevel((z) => Math.max(50, z - 50))} aria-label="Zoom out" className="flex h-8 w-8 items-center justify-center rounded-full text-slate-600 hover:bg-white hover:text-benin-green transition-colors">
                    <ZoomOut className="h-4 w-4" />
                  </button>
                  <span className="w-12 text-center text-xs font-bold text-slate-700">{zoomLevel}%</span>
                  <button onClick={() => setZoomLevel((z) => Math.min(150, z + 50))} aria-label="Zoom in" className="flex h-8 w-8 items-center justify-center rounded-full text-slate-600 hover:bg-white hover:text-benin-green transition-colors">
                    <ZoomIn className="h-4 w-4" />
                  </button>
                </div>
                <button onClick={() => setActiveDoc(null)} className="flex h-9 w-9 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors" aria-label="Close">
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto bg-slate-200/70 p-4 sm:p-8 no-scrollbar">
              <div className="mx-auto bg-white rounded-lg shadow-xl ring-1 ring-slate-300/60 transition-transform duration-300"
                style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top center' }}>
                {activeDoc.image ? (
                  <div className="relative overflow-hidden bg-white p-2 sm:p-4">
                    <img src={activeDoc.image} alt={activeDoc.title} className="block h-auto w-full" />
                  </div>
                ) : (
                <div className="relative overflow-hidden bg-gradient-to-br from-amber-50 to-white p-6 sm:p-10">
                  <div className="absolute inset-3 border-2 border-benin-bronze/20 rounded pointer-events-none" />
                  <div className="absolute inset-4 border border-slate-300/50 rounded pointer-events-none" />
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white" style={{ backgroundColor: activeDoc.tone.badge === 'bg-benin-bronze' ? '#b45309' : '#047857' }}>
                      <BadgeCheck className="h-3.5 w-3.5" /> {activeDoc.status}
                    </span>
                    <Crown className="h-9 w-9 text-benin-bronze/60" />
                  </div>
                  <div className="mt-6 flex items-center justify-center gap-5">
                    <Landmark className="h-12 w-12 text-benin-bronze/50" />
                    <Scale className="h-12 w-12 text-benin-bronze/50" />
                  </div>
                  <p className="mt-6 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-benin-bronze">Republic of Nigeria</p>
                  <p className="mt-1 text-center text-xs font-semibold text-slate-500">{activeDoc.issuer}</p>
                  <h4 className="mt-6 text-center font-display text-xl sm:text-2xl font-black text-benin-green-dark leading-snug">
                    {activeDoc.title}
                  </h4>
                  <p className="mt-2 text-center text-[11px] uppercase tracking-[0.2em] text-slate-400">Reference · {activeDoc.ref}</p>
                  <div className="mt-7 flex items-center justify-between border-t border-dashed border-benin-bronze/30 pt-5">
                    <div>
                      <p className="text-[10px] font-semibold text-slate-400">Document Type</p>
                      <p className="text-xs font-bold text-slate-700">{activeDoc.type}</p>
                    </div>
                    <span className="inline-flex h-16 w-16 items-center justify-center rounded-full ring-2 ring-benin-bronze/40 rotate-12">
                      <Stamp className="h-7 w-7 text-benin-bronze" />
                    </span>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-[10px] font-semibold text-slate-500">Size · {activeDoc.size}</span>
                    <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-[10px] font-semibold text-slate-500">Stamp · {activeDoc.stamp}</span>
                    <span className="rounded-lg bg-emerald-100 px-3 py-1.5 text-[10px] font-bold text-emerald-700">Digitally Verified</span>
                  </div>
                </div>
                )}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 px-5 sm:px-7 py-4">
              <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-400">
                <Lock className="h-3.5 w-3.5" /> Official certified copy
              </span>
              <div className="flex items-center gap-3">
                <button onClick={() => setActiveDoc(null)} className="rounded-2xl px-5 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-colors">
                  Close
                </button>
                <button
                  onClick={() => notify(`Certified copy of "${activeDoc.title}" prepared for download.`)}
                  className="inline-flex items-center gap-2 rounded-2xl bg-benin-green px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-benin-green/25 hover:bg-benin-green-mid transition-all duration-300"
                >
                  <Download className="h-4 w-4" /> Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════ TOAST ═══════════════ */}
      {toast && (
        <div className="fixed bottom-24 sm:bottom-8 left-1/2 z-[90] -translate-x-1/2 animate-toast-in w-[92%] sm:w-auto max-w-md">
          <div className="flex items-start gap-3 rounded-2xl bg-benin-green-dark text-white px-5 py-4 shadow-2xl shadow-black/20 ring-1 ring-white/10">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-benin-gold text-benin-green-dark">
              <CheckCircle2 className="h-4.5 w-4.5" />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-bold">Ovonramwen Limited</p>
              <p className="mt-0.5 text-xs text-white/75 leading-relaxed">{toast}</p>
            </div>
            <button onClick={() => setToast(null)} className="ml-auto shrink-0 text-white/50 hover:text-white transition-colors" aria-label="Dismiss">
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* ═══════════════ PAGE BODY ═══════════════ */}
      <main className={`relative z-10 ${topbarDismissed ? 'pt-[72px]' : 'pt-[108px]'} transition-all duration-300`}>
        {currentPage === 'home' && <HomePage go={go} notify={notify} />}
        {currentPage === 'services' && <ServicesPage go={go} notify={notify} />}
        {currentPage === 'academy' && (
          <AcademyPage
            go={go}
            notify={notify}
            courses={COURSES}
            videos={AFRICA_VIDEOS}
            certificates={CERTIFICATES}
            affidavit={AFFIDAVIT}
            activeCourse={activeCourse}
            setActiveCourse={setActiveCourse}
            openDoc={openDoc}
            onSelect={selectForScholarship}
          />
        )}
        {currentPage === 'about' && <AboutPage go={go} notify={notify} />}
        {currentPage === 'register' && <RegisterPage go={go} notify={notify} preselected={scholarshipCourse} />}
      </main>

      <Footer go={go} notify={notify} />
    </div>
  );
}
/* ═══════════════════ HOME PAGE ═══════════════════ */
function HomePage({ go, notify }) {
  return (
    <div>
      {/* ═══════════════ HERO ═══════════════ */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-benin-green-dark via-benin-green to-benin-green-mid">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute inset-0 dot-pattern opacity-10" />
        <div className="absolute -top-40 -right-40 h-[480px] w-[480px] rounded-full bg-benin-gold/15 blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-emerald-300/10 blur-3xl" />
        <span className="absolute top-24 right-[8%] hidden lg:block font-display text-[180px] leading-none text-white/[0.04] font-black select-none">
          1897
        </span>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-10 items-center">
            {/* left copy */}
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-benin-gold/40 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-benin-gold-light">
                  <Crown className="h-4 w-4" /> Restoring the Royal Legacy of Welfare
                </span>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-black text-white leading-[1.08]">
                  Free Food, Education,{' '}
                  <span className="relative inline-block">
                    <span className="relative z-10 text-benin-gold-light">Shelter</span>
                    <span className="absolute inset-x-0 bottom-1 h-3 bg-benin-bronze/50 blur-sm rounded-full" />
                  </span>{' '}
                  & Dignity for Every African.
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 text-base sm:text-lg text-white/75 leading-relaxed max-w-xl">
                  Named after the great <strong className="text-white">Oba Ovonramwen Nogbaisi</strong>, we exist to
                  restore the welfare the Empire once guaranteed its people — turning the promise of 1897 into a
                  permanent 2026 reality through grants, training, shelter and care.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => go('register')}
                    className="group inline-flex items-center gap-2 rounded-2xl bg-benin-gold px-7 py-4 font-display text-base font-bold text-benin-green-dark shadow-xl shadow-black/20 hover:bg-benin-gold-light hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                  >
                    Apply for Benefits
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </button>
                  <button
                    onClick={() => go('academy')}
                    className="inline-flex items-center gap-2 rounded-2xl ring-1 ring-white/40 px-7 py-4 font-display text-base font-bold text-white hover:bg-white/10 transition-colors"
                  >
                    <Play className="h-4.5 w-4.5 fill-current" /> Watch the Documentary
                  </button>
                </div>
              </Reveal>
              <Reveal delay={400}>
                <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-[12px] font-semibold text-white/60">
                  <span className="inline-flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-benin-gold" /> Legally Sworn Mission
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Landmark className="h-4 w-4 text-benin-gold" /> Registered · RC 1234567
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-benin-gold" /> 100% Free Programmes
                  </span>
                </div>
              </Reveal>
            </div>

            {/* right card */}
            <Reveal delay={200} className="hidden lg:block">
              <div className="relative">
                <div className="rounded-[2rem] bg-white/10 backdrop-blur-xl ring-1 ring-white/20 p-8 shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
                  <div className="absolute inset-0 grid-pattern opacity-10 rounded-[2rem] pointer-events-none" />
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-benin-gold">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-benin-gold-light opacity-75" />
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-benin-gold-light" />
                      </span>
                      Live Welfare Watch
                    </span>
                    <span className="rounded-full bg-benin-gold px-3 py-1 text-[10px] font-black text-benin-green-dark">BENEFICIAL</span>
                  </div>

                  <div className="mt-6 rounded-2xl bg-white p-5 shadow-inner">
                    <div className="flex items-center gap-4">
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-benin-gold to-benin-bronze text-white shadow-lg">
                        <Wallet className="h-7 w-7" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-lg font-display font-black text-benin-green-dark leading-tight">Welfare Disbursement</p>
                        <p className="text-xs text-slate-400 mt-0.5">Next cycle · October 2026</p>
                      </div>
                    </div>
                    <div className="mt-5 space-y-2">
                      <div>
                        <div className="flex justify-between text-[11px] font-bold text-slate-500 mb-1">
                          <span>Food Baskets</span><span className="text-benin-green">92%</span>
                        </div>
                        <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                          <span className="block h-full w-[92%] rounded-full bg-gradient-to-r from-benin-green to-benin-gold shimmer-block" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[11px] font-bold text-slate-500 mb-1">
                          <span>Scholarships</span><span className="text-benin-green">74%</span>
                        </div>
                        <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                          <span className="block h-full w-[74%] rounded-full bg-gradient-to-r from-benin-green to-benin-gold shimmer-block" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[11px] font-bold text-slate-500 mb-1">
                          <span>Shelter Units</span><span className="text-benin-green">61%</span>
                        </div>
                        <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                          <span className="block h-full w-[61%] rounded-full bg-gradient-to-r from-benin-green to-benin-gold shimmer-block" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                    {[
                      ['50,000+', 'Beneficiaries'],
                      ['25', 'States'],
                      ['120+', 'Courses'],
                    ].map(([num, label]) => (
                      <div key={label} className="rounded-xl bg-white/10 py-3">
                        <p className="font-display text-lg font-black text-white">{num}</p>
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-white/50">{label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-center gap-2">
                    {['Esteemed Board', 'Verifiably Sworn', 'Nationwide Impact'].map((t) => (
                      <span key={t} className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold text-white/70">{t}</span>
                    ))}
                  </div>
                </div>
                <span className="absolute -bottom-4 -left-4 rounded-2xl bg-benin-bronze px-4 py-3 shadow-xl rotate-[-4deg]">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white">Oba Ovonramwen</p>
                  <p className="text-xs font-black text-benin-gold-light">Nogbaisi · 1897</p>
                </span>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ticker */}
        <div className="relative border-t border-white/10 bg-benin-green-dark/60 backdrop-blur">
          <div className="flex overflow-hidden py-3 ticker-track whitespace-nowrap">
            <div className="ticker-content flex shrink-0 animate-ticker">
              {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
                <span key={i} className="mx-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">
                  <Crown className="h-3.5 w-3.5 text-benin-gold" /> {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ STATS ═══════════════ */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 100} className="relative text-center lg:text-left">
                <span className="absolute left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 -top-6 h-10 w-10 rounded-xl bg-gradient-to-br from-benin-gold/20 to-benin-bronze/10 grid grid-cols-2 gap-0.5 p-2.5 animate-float" style={{ animationDelay: `${i * 400}ms` }}>
                  <i className="h-1.5 w-1.5 rounded-full bg-benin-bronze/70" />
                  <i className="h-1.5 w-1.5 rounded-full bg-benin-green-mid/70" />
                  <i className="h-1.5 w-1.5 rounded-full bg-benin-green/70" />
                  <i className="h-1.5 w-1.5 rounded-full bg-benin-gold/70" />
                </span>
                <p className="font-display text-4xl lg:text-[2.75rem] font-black text-benin-green-dark">
                  <CountUp end={s.end} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-500">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ SEVEN PILLARS ═══════════════ */}
      <section className="relative py-20 bg-slate-100/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Obligations"
            title="Seven Royal Pillars of"
            highlight="Welfare"
            subtitle="Sworn obligations, funded and delivered nationwide — because the Kingdom provided, and so shall we."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 100}>
                <article className="group relative h-full overflow-hidden rounded-2xl bg-white p-7 ring-1 ring-slate-200 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:ring-benin-bronze/30">
                  <span className="absolute -right-6 -top-6 font-display text-[90px] font-black text-slate-50 group-hover:text-benin-gold/10 transition-colors duration-500" style={{ zIndex: 0 }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className={`relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${p.accent} shadow-lg`}>
                    <p.icon className="h-7 w-7" />
                  </span>
                  <h3 className="relative mt-5 font-display text-xl font-bold text-benin-green-dark">{p.title}</h3>
                  <p className="relative mt-2 text-sm text-slate-500 leading-relaxed">{p.desc}</p>
                  <span className="relative mt-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-colors duration-300 group-hover:border-benin-bronze group-hover:bg-benin-bronze group-hover:text-white">
                    <ArrowUpRight className="h-4.5 w-4.5" />
                  </span>
                </article>
              </Reveal>
            ))}
            {/* hub card */}
            <Reveal delay={200}>
              <button
                onClick={() => go('register')}
                className="group relative flex h-full w-full flex-col items-start justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-benin-green to-benin-green-mid p-7 text-left shadow-xl shadow-benin-green/25 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
              >
                <span className="absolute inset-0 grid-pattern opacity-20" />
                <span className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-benin-gold/20 blur-2xl" />
                <div className="relative">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-benin-gold text-benin-green-dark shadow-lg">
                    <Sparkles className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-bold text-white">Ready to begin?</h3>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">
                    Join 50,000+ beneficiaries across 25 states — the application takes only 3 minutes.
                  </p>
                </div>
                <span className="relative mt-6 inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-display text-sm font-bold text-benin-green transition-all duration-300 group-hover:gap-3.5">
                  Apply free today <ArrowRight className="h-4 w-4" />
                </span>
              </button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════ MISSION CTA ═══════════════ */}
      <section className="relative overflow-hidden bg-benin-green-dark py-20">
        <div className="absolute inset-0 dot-pattern opacity-10" />
        <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-benin-bronze/20 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <span className="inline-flex items-center justify-center gap-2 rounded-full bg-benin-gold/15 ring-1 ring-benin-gold/40 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-benin-gold-light">
              <Quote className="h-4 w-4" /> The Founder's Pledge
            </span>
            <blockquote className="mt-8 font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug">
              "Ovonramwen lost his throne to defend the dignity of his people.{' '}
              <span className="text-benin-gold-light">We will not lose his legacy.</span>"
            </blockquote>
            <p className="mt-5 text-white/60 text-base sm:text-lg max-w-2xl mx-auto">
              Read how the founder turns a 129-year-old promise into meals, classrooms and homes — across every state in Nigeria.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button onClick={() => go('about')} className="inline-flex items-center gap-2 rounded-2xl bg-benin-gold px-7 py-4 font-display text-base font-bold text-benin-green-dark hover:bg-benin-gold-light hover:-translate-y-0.5 transition-all duration-300">
                Meet the Founder & History <ArrowRight className="h-5 w-5" />
              </button>
              <button onClick={() => go('services')} className="inline-flex items-center gap-2 rounded-2xl ring-1 ring-white/40 px-7 py-4 font-display text-base font-bold text-white hover:bg-white/10 transition-colors">
                Explore Alkebulan Businesses
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
/* ═══════════════════ SERVICES PAGE ═══════════════════ */
function ServicesPage({ go, notify }) {
  const openService = (s) => {
    notify(`You selected ${s.title}. A dedicated team at Ovonramwen will reach you shortly.`);
    go('register');
  };

  return (
    <div>
      {/* page header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-benin-green-dark via-benin-green to-benin-green-mid">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute inset-0 dot-pattern opacity-10" />
        <span className="absolute -bottom-10 right-[6%] hidden lg:block font-display text-[150px] leading-none text-white/[0.04] font-black select-none">ALKEBULAN</span>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-benin-gold/40 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-benin-gold-light">
              <Globe className="h-4 w-4" /> Alkebulan · The Mother Continent
            </span>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl font-black text-white">
              Our Business. <span className="text-benin-gold-light">Your Prosperity.</span>
            </h1>
            <p className="mt-5 text-white/70 text-base sm:text-lg max-w-2xl mx-auto">
              The Alkebulan commercial arm funds our welfare mission. Every profit is a future meal,
              classroom or roof — and every price is guaranteed the lowest.
            </p>
          </Reveal>
        </div>
      </section>

      {/* services grid */}
      <section className="bg-slate-100/70 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-7">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={(i % 2) * 120}>
                <article className="group relative h-full overflow-hidden rounded-3xl bg-white ring-1 ring-slate-200 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:ring-benin-bronze/40">
                  {/* image frame — full photo, uncropped */}
                  <div className="relative w-full overflow-hidden bg-gradient-to-br from-slate-100 via-white to-benin-green/5 border-b border-slate-100">
                    <img src={s.image} alt={s.title} className="block h-auto w-full" loading="lazy" />
                    <span className="absolute left-4 top-4 rounded-full bg-black/40 backdrop-blur px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-white z-10">
                      {s.tag}
                    </span>
                  </div>

                  <div className="p-6 sm:p-7">
                    <h3 className="font-display text-2xl font-black text-benin-green-dark">{s.title}</h3>
                    <span className="mt-3 inline-flex items-center gap-2 rounded-full bg-benin-gold/15 px-3.5 py-1 text-[11px] font-bold text-benin-bronze">
                      <BadgeCheck className="h-3.5 w-3.5" /> {s.subtitle}
                    </span>
                    <p className="mt-4 text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                    <ul className="mt-5 space-y-2.5">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
                          <span className="flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                            <Check className="h-3 w-3" strokeWidth={3.5} />
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex items-center gap-3">
                      <button
                        onClick={() => openService(s)}
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-benin-green px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-benin-green/25 transition-all duration-300 hover:bg-benin-green-mid hover:-translate-y-0.5"
                      >
                        Get a Quote <ArrowRight className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => notify(`More details on ${s.title} are on the way.`)}
                        aria-label="More details"
                        className="flex h-11 w-11 items-center justify-center rounded-2xl ring-1 ring-slate-200 text-slate-500 transition-all duration-300 hover:ring-benin-bronze hover:text-benin-bronze"
                      >
                        <Plus className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* price guarantee banner */}
      <section className="bg-white pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-benin-bronze-dark via-benin-bronze to-benin-gold p-8 sm:p-12 lg:p-14">
              <div className="absolute inset-0 grid-pattern opacity-20" />
              <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
              <div className="relative grid lg:grid-cols-[auto_1fr_auto] items-center gap-8">
                <span className="mx-auto lg:mx-0 flex h-20 w-20 items-center justify-center rounded-3xl bg-black/25 text-white shadow-2xl">
                  <Shield className="h-10 w-10" />
                </span>
                <div className="text-center lg:text-left">
                  <span className="inline-flex items-center gap-2 rounded-full bg-black/20 px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[0.22em] text-benin-gold-light">
                    <Flame className="h-3.5 w-3.5" /> The Alkebulan Written Promise
                  </span>
                  <h2 className="mt-4 font-display text-3xl sm:text-4xl font-black text-white">Lowest-Price Guarantee</h2>
                  <p className="mt-3 text-white/80 max-w-2xl leading-relaxed">
                    See it cheaper at any registered outlet on the same day, and we refund the difference
                    <strong className="text-white"> plus 10%</strong> — on the spot, in writing. Welfare funded by commerce, priced for the people.
                  </p>
                </div>
                <button
                  onClick={() => notify('Price-match claim form is being prepared for download.')}
                  className="mx-auto lg:mx-0 inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-4 font-display text-base font-black text-benin-bronze-dark shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  Claim Price-Match <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
/* ═══════════════════ ACADEMY PAGE · MEDIA SLOTS ═══════════════════ */
function AcademyPage({ go, notify, courses, videos, certificates, affidavit, activeCourse, setActiveCourse, openDoc, onSelect }) {
  return (
    <div>
      {/* page header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-benin-green-dark via-benin-green to-benin-green-mid">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute inset-0 dot-pattern opacity-10" />
        <span className="absolute -bottom-10 right-[6%] hidden lg:block font-display text-[160px] leading-none text-white/[0.04] font-black select-none">1897</span>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-benin-gold/40 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-benin-gold-light">
              <GraduationCap className="h-4 w-4" /> Ovonramwen Media & Academy Center
            </span>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl font-black text-white">
              Learn Free. <span className="text-benin-gold-light">Watch the Legacy.</span>
            </h1>
            <p className="mt-5 text-white/70 text-base sm:text-lg max-w-2xl mx-auto">
              Stream documentary episodes, preview courses, and verify the certifications and sworn
              affidavit that make every promise here legally binding.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              {[
                ['featured', 'Featured Film', Play],
                ['course-hub', 'Courses', GraduationCap],
                ['voices', 'Film Series', Globe],
                ['certificates', 'Certifications', Award],
                ['affidavit', 'The Affidavit', Scale],
              ].map(([id, label, Icon]) => (
                <button
                  key={id}
                  onClick={() => document.getElementById(id) && document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'start' })}
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/25 px-4 py-2 text-xs font-bold text-white hover:bg-white/20 transition-colors"
                >
                  <Icon className="h-3.5 w-3.5 text-benin-gold" /> {label}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 1 — FEATURED FILM (next to courses) */}
      <FeaturedVideo
        id="featured"
        video={FEATURED_VIDEO}
        onPlay={(t) => notify(`Now streaming — "${t}".`)}
        onShare={(t) => notify(`Share link for "${t}" copied to clipboard.`)}
      />

      {/* 2 — COURSES + HERO COURSE VIDEO HUB */}
      <CourseVideoHub courses={courses} active={activeCourse} setActive={setActiveCourse} onSelect={onSelect} onEnrol={(title) => { notify(`Application started for ${title}. Fill the 3-step wizard to secure your seat.`); go('register'); }} />

      {/* 3 — VOICES OF ALKEBULAN · AFRICAN SOVEREIGNTY VIDEO GRID */}
      <AlkebulanVideoGrid
        id="voices"
        videos={videos}
        onPlay={(i) => notify(`Now streaming "${videos[i].title}" — enjoy the full episode.`)}
        onShare={(title) => notify(`Share link for "${title}" copied to clipboard.`)}
      />

      {/* 4 — CERTIFICATION TRUST SLOTS */}
      <CertificateSlots id="certificates" certificates={certificates} onView={openDoc} />

      {/* 5 — LEGAL AFFIDAVIT SLOT */}
      <AffidavitSlot id="affidavit" affidavit={affidavit} onView={openDoc} />
    </div>
  );
}
/* ═══════════════════ ABOUT PAGE · OBA TRIBUTE ═══════════════════ */
function AboutPage({ go, notify }) {
  const TIMELINE = [
    { year: '1888', title: 'Ovonramwen ascends the throne', desc: 'Oba Ovonramwen Nogbaisi becomes the 34th Oba of the Benin Empire, inheriting a Kingdom renowned for art, commerce and the welfare of its people.', icon: Crown },
    { year: '1897', title: 'The Resistance of 1897', desc: 'When a British punitive expedition descended on Benin, the Oba resisted — before being exiled. His resistance became the symbol of African sovereignty.', icon: Flame },
    { year: '1914', title: 'Death in Exile, Legacy Endures', desc: 'Three months after the amalgamation of Nigeria, Oba Ovonramwen died in Calabar. His body lay in the land of his conquerors; his name never left the people.', icon: Heart },
    { year: '2020', title: 'Ojemen Jeffrey Aghatise Founds Ovonramwen Limited', desc: 'Moved by the Orhue, the royal ritual of communal giving, custodian Ojemen Jeffrey Aghatise establishes Ovonramwen Limited to restore what 1897 stole.', icon: Sparkles },
    { year: '2026', title: 'A Promise Kept Nationwide', desc: '50,000+ beneficiaries, free certificates, sworn obligations and four Alkebulan businesses funding a permanent welfare state for the people.', icon: Star },
  ];

  return (
    <div>
      {/* page header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-benin-green-dark via-benin-green to-benin-green-mid">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute inset-0 dot-pattern opacity-10" />
        <span className="absolute -bottom-10 right-[6%] hidden lg:block font-display text-[160px] leading-none text-white/[0.04] font-black select-none">1897</span>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-benin-gold/40 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-benin-gold-light">
              <Landmark className="h-4 w-4" /> About Us · The Ovonramwen Tribute
            </span>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl font-black text-white">
              A King Who Gave. <span className="text-benin-gold-light">A Founder Who Restores.</span>
            </h1>
            <p className="mt-5 text-white/70 text-base sm:text-lg max-w-2xl mx-auto">
              Two stories, one mission: the 1897 resistance of Oba Ovonramwen Nogbaisi, and the modern
              founder's vision of economic liberation for every African.
            </p>
          </Reveal>
        </div>
      </section>

      {/* tribute narrative cards */}
      <section className="bg-slate-100/70 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-7">
            {/* founder profile */}
            <Reveal>
              <article className="relative h-full overflow-hidden rounded-3xl bg-white p-8 sm:p-10 ring-1 ring-slate-200 shadow-card">
                <span className="absolute -right-8 -top-8 font-display text-[110px] leading-none text-benin-gold/10 font-black select-none">F</span>
                <div className="relative">
                  {/* FOUNDER OFFICIAL PHOTOGRAPH */}
                  <div className="flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 to-benin-green/10 ring-1 ring-slate-200 p-6">
                    <div className="relative w-44 h-56 sm:w-52 sm:h-64 overflow-hidden rounded-2xl border-2 border-amber-500/50 shadow-xl shadow-benin-bronze/25">
                      <img
                        src="/founder.jpg"
                        alt="Founder of Ovonramwen Limited"
                        loading="lazy"
                        className="block h-full w-full object-cover"
                      />
                      <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-black/45 backdrop-blur px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-white">
                        <Crown className="h-3.5 w-3.5 text-benin-gold" /> Official Portrait
                      </span>
                    </div>
                  </div>

                  <span className="mt-7 inline-flex rounded-full bg-benin-green/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-benin-green">
                    The Founder &amp; CEO
                  </span>
                  <h2 className="mt-5 font-display text-3xl sm:text-4xl font-black text-benin-green-dark leading-tight">
                    Ojemen Jeffrey <span className="text-benin-bronze">Aghatise</span>
                  </h2>
                  <p className="mt-2 text-sm font-semibold text-slate-400">
                    Custodian of the Cradle of Black Civilisation · Founder &amp; CEO, Ovonramwen Limited
                  </p>

                  <blockquote className="mt-6 space-y-4">
                    <p className="rounded-2xl bg-slate-50 ring-1 ring-slate-200 p-5 text-slate-600 leading-relaxed text-[15px]">
                      <Quote className="mr-1 inline h-4 w-4 text-benin-bronze" />
                      "Good day everyone on this platform. I am custodian <strong className="text-benin-green-dark">Ojemen Jeffrey Aghatise</strong> of the cradle of Black civilisation — now known as modern-day Edo State, Nigeria 🇳🇬. I am the Founder and CEO of this great company, <strong className="text-benin-green-dark">Ovonramwen Limited</strong>."
                    </p>
                    <p className="text-slate-600 leading-relaxed text-[15px]">
                      "I am a citizen of Nigeria 🇳🇬 and I understand the pain and hunger in the land. From the beginning of creation, God has always provided for men. Today, I am training and empowering apprentices in <strong className="text-benin-green-dark">vocational skills</strong> — and employing them into the company."
                    </p>
                    <p className="text-slate-600 leading-relaxed text-[15px]">
                      "Kindly pass this information to any relative who wishes to acquire <strong className="text-benin-green-dark">tech skills, vocational skills and teaching skills</strong> for their survival. God bless you as you help us save Nigerians from hunger."
                    </p>
                  </blockquote>

                  <div className="mt-7 flex flex-wrap gap-3">
                    {['Edo State, Nigeria', 'Training & Empowering', 'Tech · Vocational · Teaching'].map((t) => (
                      <span key={t} className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 ring-1 ring-slate-200 px-3 py-1.5 text-[11px] font-semibold text-slate-600">
                        <Sparkles className="h-3.5 w-3.5 text-benin-bronze" /> {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>

            {/* founder vision */}
            <Reveal delay={120}>
              <article className="relative h-full overflow-hidden rounded-3xl bg-white p-8 sm:p-10 ring-1 ring-slate-200 shadow-card">
                <span className="absolute -right-8 -top-8 font-display text-[110px] leading-none text-benin-gold/10 font-black select-none">O</span>
                <div className="relative">
                  <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-benin-gold to-benin-bronze text-white shadow-xl -rotate-3">
                    <Quote className="h-8 w-8" />
                  </span>
                  <span className="ml-3 inline-flex rounded-full bg-benin-green/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-benin-green">
                    The Founder's Vision
                  </span>
                  <h2 className="mt-6 font-display text-3xl sm:text-4xl font-black text-benin-green-dark leading-tight">
                    Economic Liberation <span className="text-benin-bronze">by Any Means Necessary.</span>
                  </h2>
                  <div className="mt-6 space-y-4 text-slate-600 leading-relaxed text-[15px]">
                    <p>"Charity ends after giving. I want to end what keeps Africans 'receiving'."</p>
                    <p>The Founder built Ovonramwen Limited on a radical model: <strong className="text-benin-green-dark">four profit-making Alkebulan businesses exist for one purpose — to permanently fund free food, education, shelter, clothing, vocational training and stipends.</strong></p>
                    <p>This is not aid. It is <strong className="text-benin-green-dark">restitution through enterprise</strong> — the descendants of a looted Empire quietly building a self-funding welfare state, one sworn obligation at a time.</p>
                  </div>

                  {/* accreditation chips */}
                  <div className="mt-7 rounded-2xl bg-slate-50 ring-1 ring-slate-200 p-5">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Independently Verified · 2026</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-benin-green/10 px-3 py-1.5 text-[11px] font-bold text-benin-green">
                        <ShieldCheck className="h-3.5 w-3.5" /> CAC Registered · RC 1234567
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-benin-bronze/10 px-3 py-1.5 text-[11px] font-bold text-benin-bronze">
                        <BadgeCheck className="h-3.5 w-3.5" /> Education Ministry Accredited
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1.5 text-[11px] font-bold text-emerald-700">
                        <Scale className="h-3.5 w-3.5" /> Sworn in the High Court of Benin
                      </span>
                    </div>
                    <button
                      onClick={() => go('academy')}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-benin-green hover:text-benin-bronze transition-colors"
                    >
                      View certifications & the affidavit on the Academy page <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* timeline */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Journey"
            title="From 1897 Resistance to"
            highlight="2026 Restoration"
          />
          <div className="relative mt-16">
            <span className="absolute left-[22px] lg:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-benin-gold via-benin-bronze to-benin-green opacity-25" />
            <div className="space-y-10">
              {TIMELINE.map((t, i) => (
                <Reveal key={t.year} delay={i * 100}>
                  <div className={`relative flex ${i % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'}`}>
                    <span className="absolute left-[22px] lg:left-1/2 top-1 -translate-x-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-benin-gold to-benin-bronze text-white shadow-xl ring-4 ring-white">
                      <t.icon className="h-5 w-5" />
                    </span>
                    <div className={`ml-16 lg:ml-0 lg:w-[calc(50%-3rem)] ${i % 2 === 0 ? '' : ''}`}>
                      <div className="rounded-2xl bg-slate-50 ring-1 ring-slate-200 p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                        <span className="font-display text-2xl font-black text-benin-bronze">{t.year}</span>
                        <h3 className="mt-1.5 font-display text-lg font-bold text-benin-green-dark">{t.title}</h3>
                        <p className="mt-2 text-sm text-slate-500 leading-relaxed">{t.desc}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-benin-green-dark py-20 overflow-hidden relative">
        <div className="absolute inset-0 dot-pattern opacity-10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <Crown className="mx-auto h-12 w-12 text-benin-gold" />
            <h2 className="mt-6 font-display text-3xl sm:text-4xl font-black text-white">Become Part of the Restoration</h2>
            <p className="mt-4 text-white/70 max-w-2xl mx-auto">Whether you enrol as a beneficiary or partner with Alkebulan, you join the first welfare mission legally sworn since 1897.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button onClick={() => go('register')} className="inline-flex items-center gap-2 rounded-2xl bg-benin-gold px-7 py-4 font-display text-base font-bold text-benin-green-dark hover:bg-benin-gold-light hover:-translate-y-0.5 transition-all duration-300">
                Apply for Benefits <ArrowRight className="h-5 w-5" />
              </button>
              <button onClick={() => go('services')} className="inline-flex items-center gap-2 rounded-2xl ring-1 ring-white/40 px-7 py-4 font-display text-base font-bold text-white hover:bg-white/10 transition-colors">
                Partner with Alkebulan
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
/* ═══════════════════ 3-STEP BENEFICIARY WIZARD ═══════════════════ */
function RegisterPage({ go, notify, preselected = '' }) {
  const [step, setStep] = useState(1);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [verifyState, setVerifyState] = useState('idle');
  const [form, setForm] = useState({
    fullName: '', email: '', password: '', dob: '',
    state: '', lga: '', status: '',
    occupation: '', qualification: '', skills: '', preferredCourse: preselected || '',
    bankName: '', accountNumber: '', accountName: '', problem: '',
  });
  const [errors, setErrors] = useState({});

  const STATUS_OPTIONS = ['Single', 'Married', 'Student', 'Unemployed'];
  const QUALIFICATIONS = ['No Formal Education', 'FSLC', 'SSCE / WAEC', 'OND / NCE', 'HND / B.Sc', 'M.Sc & above'];
  const COURSE_TRACKS = COURSES.map((c) => c.title);

  const setField = (key, value) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  /* simulated NUBAN auto-verification */
  useEffect(() => {
    const digits = (form.accountNumber || '').replace(/\D/g, '');
    if (form.bankName && digits.length === 10) {
      setVerifyState('checking');
      const t = window.setTimeout(() => setVerifyState('verified'), 1500);
      return () => window.clearTimeout(t);
    }
    setVerifyState('idle');
  }, [form.bankName, form.accountNumber]);

  const onPhoto = (file) => {
    if (!file || !file.type.startsWith('image/')) {
      notify('Please upload a valid image for your passport photo.');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setPhotoPreview(reader.result);
      setErrors((e) => ({ ...e, photo: undefined }));
    };
    reader.readAsDataURL(file);
  };

  const passwordScore = (pwd) => {
    let s = 0;
    if (pwd.length >= 8) s++;
    if (pwd.length >= 12) s++;
    if (/[A-Z]/.test(pwd) && /[a-z]/.test(pwd)) s++;
    if (/\d/.test(pwd)) s++;
    if (/[^A-Za-z0-9]/.test(pwd)) s++;
    return s;
  };

  const validateStep = (s) => {
    const e = {};
    if (s === 1) {
      if (form.fullName.trim().length < 3) e.fullName = 'Enter your full legal name (min 3 characters).';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email)) e.email = 'Enter a valid email address.';
      if (form.password.length < 8) e.password = 'Password must be at least 8 characters.';
      else if (passwordScore(form.password) < 3) e.password = 'Add a number and an uppercase letter for a stronger password.';
      if (!form.dob) e.dob = 'Select your date of birth.';
      if (!form.state) e.state = 'Choose your State of Origin.';
      if (!form.lga.trim()) e.lga = 'Enter your Local Government Area.';
      if (!form.status) e.status = 'Select your current status.';
      if (!photoPreview) e.photo = 'Upload a clear passport photograph.';
    }
    if (s === 2) {
      if (!form.occupation.trim()) e.occupation = 'Please state your current occupation.';
      if (!form.qualification) e.qualification = 'Select your highest qualification.';
      if (!form.preferredCourse) e.preferredCourse = 'Pick a preferred course track.';
    }
    if (s === 3) {
      if (!form.bankName) e.bankName = 'Select your bank.';
      if (form.accountNumber.replace(/\D/g, '').length !== 10) e.accountNumber = 'NUBAN account number must be exactly 10 digits.';
      if (form.accountName.trim().length < 3) e.accountName = 'Enter the name on the account.';
      if (form.problem.trim().length < 10) e.problem = `Please describe your problem in at least 10 characters (${form.problem.trim().length}/10).`;
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (!validateStep(step)) {
      notify('Please fix the highlighted fields before continuing.');
      return;
    }
    setStep((s) => s + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const back = () => {
    setStep((s) => Math.max(1, s - 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const submit = (ev) => {
    ev.preventDefault();
    if (!validateStep(3)) {
      notify('Please fix the highlighted fields before submitting.');
      return;
    }
    setSubmitted(true);
    notify('Application submitted! Reference OVL-2026-' + String(Date.now()).slice(-6));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const reset = () => {
    setForm({ fullName: '', email: '', password: '', dob: '', state: '', lga: '', status: '', occupation: '', qualification: '', skills: '', preferredCourse: '', bankName: '', accountNumber: '', accountName: '', problem: '' });
    setPhotoPreview(null);
    setStep(1);
    setSubmitted(false);
    setVerifyState('idle');
  };

  const STEPS = [
    { title: 'Personal Details', desc: 'Who you are' },
    { title: 'Education & Fit', desc: 'What you bring' },
    { title: 'Banking & Impact', desc: 'Where & why' },
  ];

  /* ═══════════════ SUCCESS SCREEN ═══════════════ */
  if (submitted) {
    return (
      <div className="relative overflow-hidden bg-gradient-to-br from-benin-green-dark via-benin-green to-benin-green-mid min-h-[78vh] flex items-center">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute inset-0 dot-pattern opacity-10" />
        <div className="relative w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Reveal>
            <div className="rounded-[2rem] bg-white p-8 sm:p-12 text-center shadow-2xl animate-modal-pop">
              <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-benin-green text-white shadow-2xl shadow-benin-green/30 animate-pop">
                <Check className="h-10 w-10" strokeWidth={3} />
              </span>
              <h1 className="mt-6 font-display text-3xl sm:text-4xl font-black text-benin-green-dark">Application Received!</h1>
              <p className="mt-3 text-slate-500 leading-relaxed">
                Welcome to the restoration, <strong className="text-benin-green-dark">{form.fullName}</strong>. Your details are
                being reviewed by our welfare desk. You will receive the next steps via{' '}
                <strong className="text-benin-green-dark">{form.email}</strong> within 72 hours.
              </p>
              <div className="mx-auto mt-7 grid max-w-sm gap-3 text-left">
                {[
                  ['Reference', 'OVL-2026-' + String(Date.now()).slice(-6)],
                  ['Preferred Track', form.preferredCourse],
                  ['Disbursement Bank', `${form.bankName} · ${form.accountNumber.slice(0, 3)}****${form.accountNumber.slice(-3)}`],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 ring-1 ring-slate-200">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">{k}</span>
                    <span className="text-sm font-bold text-benin-green-dark">{v}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <button onClick={reset} className="inline-flex items-center gap-2 rounded-2xl ring-1 ring-slate-300 px-6 py-3.5 text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors">
                  <RefreshCw className="h-4 w-4" /> New Application
                </button>
                <button onClick={() => go('home')} className="inline-flex items-center gap-2 rounded-2xl bg-benin-green px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-benin-green/25 hover:bg-benin-green-mid transition-all duration-300">
                  Return Home <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-slate-100/70">
      {/* header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-benin-green-dark via-benin-green to-benin-green-mid">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute inset-0 dot-pattern opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-benin-gold/40 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-benin-gold-light">
              <Users className="h-4 w-4" /> 3-Step Application · Free to Apply
            </span>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl font-black text-white">Claim Your<span className="text-benin-gold-light"> Seat.</span></h1>
            <p className="mt-4 text-white/70 max-w-xl mx-auto text-base sm:text-lg">
              Three short steps. Zero cost. A lifetime of free welfare benefits.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-0 py-14">
        {/* step indicator */}
        <Reveal>
          <div className="mx-auto max-w-2xl">
            <div className="flex items-center">
              {STEPS.map((s, i) => {
                const n = i + 1;
                const done = step > n;
                const current = step === n;
                return (
                  <div key={s.title} className="flex items-center flex-1 last:flex-none">
                    <div className="flex flex-col items-center gap-2">
                      <span
                        className={`relative flex h-12 w-12 items-center justify-center rounded-2xl font-display text-lg font-black transition-all duration-300 ${
                          done
                            ? 'bg-benin-green text-white shadow-lg shadow-benin-green/30 scale-105'
                            : current
                            ? 'bg-benin-gold text-benin-green-dark shadow-xl shadow-benin-gold/40 scale-110 ring-4 ring-benin-gold/25'
                            : 'bg-white text-slate-400 ring-1 ring-slate-200'
                        }`}
                      >
                        {done ? (
                          <Check className="h-6 w-6 animate-fade-in" strokeWidth={3} />
                        ) : (
                          <span className={current ? 'animate-bounce' : ''}>{n}</span>
                        )}
                        {current && <span className="absolute -inset-1 rounded-[1rem] ring-2 ring-benin-gold/40 animate-ping-soft" />}
                      </span>
                      <span className="hidden sm:block w-24 text-center">
                        <span className={`block text-[13px] font-bold ${current ? 'text-benin-green' : 'text-slate-400'}`}>{s.title}</span>
                        <span className="block text-[10px] text-slate-400">{s.desc}</span>
                      </span>
                    </div>
                    {n < STEPS.length && (
                      <div className="mx-2 sm:mx-4 flex-1 h-1 rounded-full bg-slate-200 overflow-hidden relative top-0">
                        <span
                          className={`block h-full rounded-full bg-gradient-to-r from-benin-green to-benin-gold transition-all duration-500 ${step > n ? 'w-full' : 'w-0'}`}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid lg:grid-cols-[1fr_320px] gap-8 items-start">
          {/* wizard card */}
          <Reveal>
            <div className="rounded-[2rem] bg-white ring-1 ring-slate-200 shadow-card overflow-hidden">
              {/* step header */}
              <div className="border-b border-slate-100 px-6 sm:px-9 py-5 flex items-center justify-between bg-gradient-to-r from-benin-green/5 to-transparent">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-benin-bronze">Step {step} of 3</p>
                  <h2 className="font-display text-xl sm:text-2xl font-black text-benin-green-dark">{STEPS[step - 1].title}</h2>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-benin-green/10 px-3.5 py-1.5 text-xs font-bold text-benin-green">
                  <Lock className="h-3.5 w-3.5" /> Encrypted & Secure
                </span>
              </div>

              <form onSubmit={submit} noValidate>
                <div className="px-6 sm:px-9 py-8">
                  {/* ═══════ STEP 1 ═══════ */}
                  {step === 1 && (
                    <div key="s1" className="space-y-6 animate-fade-in">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="sm:col-span-2">
                          <label className={labelClass} htmlFor="fullName">Full Name <span className="text-benin-bronze">*</span></label>
                          <input id="fullName" className={inputClass} placeholder="e.g. Osaro Eghosa Ovonramwen" value={form.fullName} onChange={(e) => setField('fullName', e.target.value)} />
                          <ErrorMsg msg={errors.fullName} />
                        </div>
                        <div>
                          <label className={labelClass} htmlFor="email">Email Address <span className="text-benin-bronze">*</span></label>
                          <input id="email" type="email" className={inputClass} placeholder="you@example.com" value={form.email} onChange={(e) => setField('email', e.target.value)} />
                          <ErrorMsg msg={errors.email} />
                        </div>
                        <div>
                          <label className={labelClass} htmlFor="password">Password <span className="text-benin-bronze">*</span></label>
                          <div className="relative">
                            <input id="password" type={showPassword ? 'text' : 'password'} className={`${inputClass} pr-12`} placeholder="Min 8 characters" value={form.password} onChange={(e) => setField('password', e.target.value)} />
                            <button type="button" onClick={() => setShowPassword(!showPassword)} aria-label="Toggle password" className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-benin-green transition-colors">
                              {showPassword ? <EyeOff className="h-4.5 w-4.5" /> : <Eye className="h-4.5 w-4.5" />}
                            </button>
                          </div>
                          {form.password && (
                            <div className="mt-2">
                              <div className="flex gap-1.5">
                                {[1, 2, 3, 4, 5].map((i) => (
                                  <span key={i} className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${passwordScore(form.password) >= i ? ((passwordScore(form.password) >= 4 ? 'bg-emerald-500' : passwordScore(form.password) >= 3 ? 'bg-benin-gold' : 'bg-benin-bronze')) : 'bg-slate-200'}`} />
                                ))}
                              </div>
                              <p className="mt-1 text-[11px] font-semibold text-slate-400">{passwordScore(form.password) >= 4 ? 'Strong' : passwordScore(form.password) >= 3 ? 'Good' : 'Weak'} · use numbers & symbols</p>
                            </div>
                          )}
                          <ErrorMsg msg={errors.password} />
                        </div>
                        <div>
                          <label className={labelClass} htmlFor="dob">Date of Birth <span className="text-benin-bronze">*</span></label>
                          <input id="dob" type="date" className={inputClass} value={form.dob} onChange={(e) => setField('dob', e.target.value)} />
                          <ErrorMsg msg={errors.dob} />
                        </div>
                        <div>
                          <label className={labelClass} htmlFor="state">State of Origin <span className="text-benin-bronze">*</span></label>
                          <select id="state" className={inputClass} value={form.state} onChange={(e) => setField('state', e.target.value)}>
                            <option value="">Select your state…</option>
                            {NIGERIA_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
                          </select>
                          <ErrorMsg msg={errors.state} />
                        </div>
                        <div className="sm:col-span-2">
                          <label className={labelClass} htmlFor="lga">LGA of Origin <span className="text-benin-bronze">*</span></label>
                          <input id="lga" className={inputClass} placeholder={form.state ? `e.g. ${form.state === 'Edo' ? 'Oredo, home of the Oba' : 'Your local government'}…` : 'Your local government…'} value={form.lga} onChange={(e) => setField('lga', e.target.value)} />
                          <ErrorMsg msg={errors.lga} />
                        </div>
                      </div>

                      {/* status */}
                      <div>
                        <span className={labelClass}>Status <span className="text-benin-bronze">*</span></span>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          {STATUS_OPTIONS.map((opt) => {
                            const selected = form.status === opt;
                            return (
                              <button
                                type="button"
                                key={opt}
                                onClick={() => setField('status', opt)}
                                className={`rounded-xl px-4 py-3 text-sm font-bold transition-all duration-200 ${selected ? 'bg-benin-green text-white shadow-lg shadow-benin-green/25 scale-[1.02] ring-2 ring-benin-green' : 'bg-slate-50 text-slate-600 ring-1 ring-slate-200 hover:ring-benin-bronze/40'}`}
                              >
                                {selected && <Check className="mr-1 inline h-4 w-4" strokeWidth={3} />}
                                {opt}
                              </button>
                            );
                          })}
                        </div>
                        <ErrorMsg msg={errors.status} />
                      </div>

                      {/* passport photo dropzone */}
                      <div>
                        <span className={labelClass}>Passport Photograph <span className="text-benin-bronze">*</span></span>
                        <label
                          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
                          onDragLeave={() => setDragging(false)}
                          onDrop={(e) => { e.preventDefault(); setDragging(false); onPhoto(e.dataTransfer.files[0]); }}
                          className={`flex flex-col sm:flex-row items-center gap-5 rounded-2xl border-2 border-dashed px-6 py-6 cursor-pointer transition-all duration-300 ${dragging ? 'border-benin-bronze bg-benin-bronze/5 scale-[1.01]' : photoPreview ? 'border-emerald-400 bg-emerald-50/50' : 'border-slate-300 hover:border-benin-bronze/50 hover:bg-slate-50'}`}
                        >
                          {photoPreview ? (
                            <>
                              <img src={photoPreview} alt="Passport preview" className="h-24 w-24 rounded-2xl object-cover shadow-lg ring-2 ring-emerald-300" />
                              <span className="text-left">
                                <span className="text-sm font-bold text-emerald-700 inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Photo ready</span>
                                <span className="mt-1 block text-xs text-slate-500">Drag a new image over this area to replace it, or tap to browse.</span>
                              </span>
                            </>
                          ) : (
                            <>
                              <span className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-white shadow-lg ${dragging ? 'bg-benin-bronze scale-110' : 'bg-benin-green'}`}>
                                <Upload className="h-7 w-7" />
                              </span>
                              <span className="text-center sm:text-left">
                                <span className="block text-sm font-bold text-slate-700">Drag & drop your passport photo here</span>
                                <span className="mt-1 block text-xs text-slate-400">or <span className="text-benin-bronze font-semibold underline">browse files</span> · JPG / PNG, recent &amp; clear</span>
                              </span>
                            </>
                          )}
                          <input type="file" accept="image/*" className="hidden" onChange={(e) => onPhoto(e.target.files[0])} />
                        </label>
                        <ErrorMsg msg={errors.photo} />
                      </div>
                    </div>
                  )}

                  {/* ═══════ STEP 2 ═══════ */}
                  {step === 2 && (
                    <div key="s2" className="space-y-6 animate-fade-in">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className={labelClass} htmlFor="occupation">Current Occupation <span className="text-benin-bronze">*</span></label>
                          <input id="occupation" className={inputClass} placeholder="e.g. Trader, Student, Unemployed…" value={form.occupation} onChange={(e) => setField('occupation', e.target.value)} />
                          <ErrorMsg msg={errors.occupation} />
                        </div>
                        <div>
                          <label className={labelClass} htmlFor="qualification">Highest Qualification <span className="text-benin-bronze">*</span></label>
                          <select id="qualification" className={inputClass} value={form.qualification} onChange={(e) => setField('qualification', e.target.value)}>
                            <option value="">Select qualification…</option>
                            {QUALIFICATIONS.map((q) => <option key={q} value={q}>{q}</option>)}
                          </select>
                          <ErrorMsg msg={errors.qualification} />
                        </div>
                        <div className="sm:col-span-2">
                          <label className={labelClass} htmlFor="skills">Existing Skills</label>
                          <input id="skills" className={inputClass} placeholder="e.g. Basic literacy, tailoring, phone repair, farming…" value={form.skills} onChange={(e) => setField('skills', e.target.value)} />
                        </div>
                      </div>

                      {/* preferred track */}
                      <div>
                        <span className={labelClass}>Preferred Course Track <span className="text-benin-bronze">*</span></span>
                        <div className="grid sm:grid-cols-3 gap-3">
                          {COURSE_TRACKS.map((t, i) => {
                            const selected = form.preferredCourse === t;
                            const c = COURSES[i];
                            return (
                              <button
                                type="button"
                                key={t}
                                onClick={() => setField('preferredCourse', t)}
                                className={`relative rounded-2xl p-4 text-left transition-all duration-200 ${selected ? 'ring-2 ring-benin-green bg-benin-green/5 shadow-lg' : 'bg-slate-50 ring-1 ring-slate-200 hover:ring-benin-bronze/40'}`}
                              >
                                <span className={`inline-flex h-10 w-10 items-center justify-center rounded-xl text-white bg-gradient-to-br ${c.gradient} shadow`}>
                                  <GraduationCap className="h-5 w-5" />
                                </span>
                                <span className="mt-3 block font-display text-sm font-bold text-benin-green-dark">{t}</span>
                                <span className="mt-1 block text-[11px] text-slate-400">{c.duration} · {c.certification}</span>
                                {selected && (
                                  <span className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-benin-gold text-white shadow animate-fade-in">
                                    <Check className="h-3.5 w-3.5" strokeWidth={3.5} />
                                  </span>
                                )}
                              </button>
                            );
                          })}
                        </div>
                        <ErrorMsg msg={errors.preferredCourse} />
                      </div>

                      {/* quick benefits note */}
                      <div className="rounded-2xl bg-gradient-to-r from-benin-green/10 to-benin-gold/10 ring-1 ring-benin-green/15 p-5 flex items-start gap-3">
                        <Sparkles className="h-5 w-5 text-benin-bronze shrink-0" />
                        <p className="text-sm text-slate-600 leading-relaxed">
                          <strong className="text-benin-green-dark">Every track is fully funded</strong> — free certification,
                          a starter toolkit, monthly stipends during training and job/apprenticeship placement at graduation.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* ═══════ STEP 3 ═══════ */}
                  {step === 3 && (
                    <div key="s3" className="space-y-6 animate-fade-in">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className={labelClass} htmlFor="bankName">Bank Name <span className="text-benin-bronze">*</span></label>
                          <select id="bankName" className={inputClass} value={form.bankName} onChange={(e) => setField('bankName', e.target.value)}>
                            <option value="">Select your bank…</option>
                            {BANKS.map((b) => <option key={b} value={b}>{b}</option>)}
                          </select>
                          <ErrorMsg msg={errors.bankName} />
                        </div>
                        <div>
                          <label className={labelClass} htmlFor="accountNumber">10-Digit NUBAN Account Number <span className="text-benin-bronze">*</span></label>
                          <div className="relative">
                            <input
                              id="accountNumber"
                              inputMode="numeric"
                              maxLength={10}
                              className={`${inputClass} pr-12 font-mono tracking-widest`}
                              placeholder="0000000000"
                              value={form.accountNumber}
                              onChange={(e) => setField('accountNumber', e.target.value.replace(/\D/g, '').slice(0, 10))}
                            />
                            {verifyState === 'checking' && <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 animate-spin text-benin-bronze" />}
                            {verifyState === 'verified' && <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-emerald-600" />}
                          </div>
                          {/* auto-verification indicator */}
                          <div className="mt-2">
                            {verifyState === 'checking' && (
                              <p className="flex items-center gap-1.5 text-[11px] font-semibold text-benin-bronze animate-fade-in">
                                <Loader2 className="h-3.5 w-3.5 animate-spin" /> Verifying NUBAN against {form.bankName}…
                              </p>
                            )}
                            {verifyState === 'verified' && (
                              <p className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 animate-fade-in">
                                <BadgeCheck className="h-3.5 w-3.5" /> NUBAN validated · belongs to a live account
                              </p>
                            )}
                          </div>
                          <ErrorMsg msg={errors.accountNumber} />
                        </div>
                        <div className="sm:col-span-2">
                          <label className={labelClass} htmlFor="accountName">Account Name (as it appears on the account) <span className="text-benin-bronze">*</span></label>
                          <input id="accountName" className={inputClass} placeholder="e.g. OSARO EGHOSA OVONRAMWEN" value={form.accountName} onChange={(e) => setField('accountName', e.target.value.toUpperCase())} />
                          <ErrorMsg msg={errors.accountName} />
                        </div>
                      </div>

                      {/* problem textarea */}
                      <div>
                        <label className={`${labelClass} flex items-center justify-between`} htmlFor="problem">
                          What problem do you want Ovonramwen Limited to solve for you? <span className="text-xs font-semibold text-slate-400">{form.problem.trim().length}/200</span>
                        </label>
                        <textarea id="problem" maxLength={200} rows={4} className={`${inputClass} resize-none`} placeholder="Tell us your story — housing, feeding, skill acquisition, business capital, education…" value={form.problem} onChange={(e) => setField('problem', e.target.value)} />
                        <ErrorMsg msg={errors.problem} />
                      </div>

                      {/* consent */}
                      <div className="rounded-2xl bg-slate-50 ring-1 ring-slate-200 p-5 flex items-start gap-3">
                        <ShieldCheck className="h-5 w-5 text-benin-green shrink-0 mt-0.5" />
                        <p className="text-xs text-slate-500 leading-relaxed">
                          By submitting, you confirm the details are true and consent to verification as required by the
                          <strong className="text-slate-700"> Official Sworn Affidavit of Universal Welfare &amp; Human Freedom</strong> (Ref {AFFIDAVIT.ref}).
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* nav buttons */}
                <div className="flex items-center justify-between gap-3 border-t border-slate-100 px-6 sm:px-9 py-5 bg-slate-50/60">
                  <button
                    type="button"
                    onClick={back}
                    disabled={step === 1}
                    className={`inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-bold transition-all duration-300 ${step === 1 ? 'cursor-not-allowed opacity-40' : 'text-slate-600 hover:bg-slate-100'}`}
                  >
                    <ChevronLeft className="h-4 w-4" /> Back
                  </button>
                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={next}
                      className="group inline-flex items-center gap-2 rounded-2xl bg-benin-green px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-benin-green/25 hover:bg-benin-green-mid hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                    >
                      Continue <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-benin-bronze to-benin-gold px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-benin-bronze/30 hover:from-benin-gold hover:to-benin-bronze hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                    >
                      Submit Application <CheckCircle2 className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </form>
            </div>
          </Reveal>

          {/* benefits sidebar */}
          <Reveal delay={150}>
            <aside className="lg:sticky lg:top-36 space-y-5">
              <div className="rounded-2xl bg-gradient-to-br from-benin-green-dark to-benin-green p-6 text-white shadow-xl overflow-hidden relative">
                <div className="absolute inset-0 grid-pattern opacity-20" />
                <Crown className="relative h-8 w-8 text-benin-gold" />
                <h3 className="relative mt-3 font-display text-lg font-bold">What happens next?</h3>
                <ul className="relative mt-4 space-y-3">
                  {[
                    ['Submit', 'Your 3-step application is lodged'],
                    ['Review (72h)', 'Our welfare desk verifies your details'],
                    ['Confirmation', 'You receive benefits & training slots'],
                  ].map(([t, d], i) => (
                    <li key={t} className="flex gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-benin-gold/20 ring-1 ring-benin-gold/40 text-[11px] font-black text-benin-gold">{i + 1}</span>
                      <span>
                        <span className="block text-sm font-bold text-white">{t}</span>
                        <span className="block text-[11px] text-white/60">{d}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-white ring-1 ring-slate-200 p-6 shadow-card">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Application checklist</p>
                <ul className="mt-4 space-y-3">
                  {[
                    ['Valid NIN or BVN', form.accountNumber.length === 10 ? 'Answered' : ''],
                    ['Passport photograph', photoPreview ? 'Uploaded' : ''],
                    ['Bank account (10 digits)', verifyState === 'verified' ? 'Verified' : ''],
                  ].map(([label, state]) => (
                    <li key={label} className="flex items-center justify-between gap-2 text-sm">
                      <span className="flex items-center gap-2 text-slate-600 font-semibold">
                        <span className={`h-2 w-2 rounded-full ${state ? 'bg-emerald-500' : 'bg-slate-300'}`} /> {label}
                      </span>
                      <span className="text-[11px] font-bold text-benin-green">{state}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-benin-gold/10 ring-1 ring-benin-gold/30 p-5">
                <p className="text-sm leading-relaxed text-benin-green-dark">
                  <Sparkles className="mr-1 inline h-4 w-4 text-benin-bronze" />
                  <strong>First 1,000 applicants this month</strong> receive an extra food-basket starter pack.
                </p>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
/* ═══════════════════ FOOTER ═══════════════════ */
function Footer({ go, notify }) {
  const [email, setEmail] = useState('');

  const subscribe = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      notify('Please enter a valid email to subscribe.');
      return;
    }
    setEmail('');
    notify('Subscribed! Welfare program updates will reach your inbox monthly.');
  };

  const FOOTER_LINKS = {
    Navigate: [
      ['Home', () => go('home')],
      ['Alkebulan Services', () => go('services')],
      ['Academy & Media', () => go('academy')],
      ['About the Founder', () => go('about')],
      ['Apply for Benefits', () => go('register')],
    ],
    Businesses: [
      ['Marketplace · Best Price', () => { go('services'); notify('Alkebulan Commercial Marketplace') }],
      ['Oil & Gas', () => { go('services'); notify('Alkebulan Oil & Gas') }],
      ['Real Estate', () => { go('services'); notify('Alkebulan Real Estate') }],
      ['Montessori Center', () => { go('services'); notify('Montessori Children Tutorial Center') }],
      ['Welfare Programmes', () => go('register')],
    ],
    Legal: [
      ['CAC Certificate', () => notify('View the CAC certificate on the Academy page.')],
      ['Welfare Accreditation', () => notify('View the accreditation on the Academy page.')],
      ['Sworn Affidavit', () => notify('Read the sworn affidavit on the Academy page.')],
      ['Disclaimer', () => notify('Programmes and prices are subject to the sworn terms of Ovonramwen Limited.')],
      ['Verification', () => notify('Verification desk: verify@ovonramwen.com')],
    ],
  };

  return (
    <footer className="relative overflow-hidden bg-benin-green-dark text-white">
      <div className="absolute inset-0 grid-pattern opacity-[0.07]" />
      <div className="absolute inset-0 dot-pattern opacity-[0.06]" />
      <span className="absolute -top-24 left-1/4 h-64 w-64 rounded-full bg-benin-bronze/15 blur-3xl" />

      {/* newsletter band */}
      <div className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 items-center gap-8">
            <div>
              <p className="font-display text-2xl sm:text-3xl font-bold text-white">
                Join the <span className="text-benin-gold-light">Welfare Movement</span>
              </p>
              <p className="mt-2 text-white/60 text-sm sm:text-base max-w-md">
                Monthly program updates, free-course windows and disbursement announcements — straight to your inbox.
              </p>
            </div>
            <form onSubmit={subscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 rounded-2xl bg-white/10 ring-1 ring-white/20 px-5 py-4 text-sm text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-benin-gold transition-all"
              />
              <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-benin-gold px-7 py-4 font-display text-sm font-bold text-benin-green-dark shadow-xl shadow-black/20 hover:bg-benin-gold-light hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300">
                Subscribe <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* main links */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-12 lg:gap-8 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          {/* brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-benin-gold to-benin-bronze shadow-lg shadow-benin-bronze/30">
                <Crown className="h-6 w-6 text-white" strokeWidth={2.2} />
              </span>
              <span className="leading-tight">
                <span className="block font-display text-base font-black tracking-wide">OVONRAMWEN</span>
                <span className="block text-[10px] font-semibold tracking-[0.3em] uppercase text-benin-gold">Limited · Est. Welfare</span>
              </span>
            </div>
            <p className="mt-5 text-sm text-white/60 leading-relaxed max-w-xs">
              Restoring the royal legacy of welfare — free food, education, shelter, clothing, training and stipends for every African. Chartered to serve since 2020.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {SOCIALS.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    onClick={(e) => e.preventDefault()}
                    title={s.handle}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 ring-1 ring-white/15 transition-all duration-300 hover:-translate-y-1 hover:text-white"
                    onMouseEnter={(e) => { e.currentTarget.style.background = 'linear-gradient(135deg,#d97706,#b45309)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = ''; }}
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-benin-gold">{group}</h4>
              <ul className="mt-5 space-y-3">
                {links.map(([label, action]) => (
                  <li key={label}>
                    <button onClick={action} className="group inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors">
                      <ChevronRight className="h-3.5 w-3.5 text-benin-bronze transition-transform group-hover:translate-x-1" />
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* contact strip */}
        <div className="mt-14 flex flex-wrap gap-4 border-t border-white/10 pt-8 text-sm">
          <span className="inline-flex items-center gap-2 text-white/60"><Mail className="h-4 w-4 text-benin-gold" /> hello@ovonramwen.com</span>
          <span className="inline-flex items-center gap-2 text-white/60"><Phone className="h-4 w-4 text-benin-gold" /> +234 800 OVONRAMWEN</span>
          <span className="inline-flex items-center gap-2 text-white/60"><MapPin className="h-4 w-4 text-benin-gold" /> Oredo, Benin City, Edo State</span>
          <span className="inline-flex items-center gap-2 text-white/60"><Globe className="h-4 w-4 text-benin-gold" /> Serving all 37 States + FCT</span>
        </div>
      </div>

      {/* bottom bar */}
      <div className="relative border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="text-center sm:text-left space-y-1.5">
              <p className="text-[11px] text-white/45 leading-relaxed">
                © {2026} Ovonramwen Limited. RC 1234567 · CAC. All rights reserved.
              </p>
              <p className="text-[10px] text-white/30 leading-relaxed max-w-xl">
                Programme eligibility, benefits and pricing are governed by the Official Sworn Affidavit of Universal Welfare & Human Freedom (Ref OVL/2026/AFF-0012-WHF). Prices apply in-store; price-match guarantee on verified same-day quotations from registered outlets.
              </p>
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group inline-flex shrink-0 items-center gap-2 rounded-2xl bg-white/10 ring-1 ring-white/20 px-6 py-3.5 font-display text-sm font-bold text-white transition-all duration-300 hover:bg-benin-gold hover:text-benin-green-dark hover:-translate-y-0.5"
            >
              <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-1" /> Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default App;