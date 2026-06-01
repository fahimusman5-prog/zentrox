import React, { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import "./styles.css";
import logoUrl from "../assets/zentrox-logo.jpg";
import websiteDevelopmentIcon from "../assets/icons/website-development.svg";
import websiteDesignIcon from "../assets/icons/website-design.svg";
import brandingIcon from "../assets/icons/branding-content-design.svg";
import socialIcon from "../assets/icons/social-media-management.svg";
import ecommerceIcon from "../assets/icons/ecommerce.svg";
import marketingIcon from "../assets/icons/digital-marketing-support.svg";
import surprisewalaProjectIcon from "../assets/icons/surprisewala-project.svg";
import biobloomProjectIcon from "../assets/icons/biobloom-project.svg";
import studioPortfolioProjectIcon from "../assets/icons/studio-portfolio-project.svg";
import retailCommerceProjectIcon from "../assets/icons/retail-commerce-project.svg";
import socialLaunchProjectIcon from "../assets/icons/social-launch-project.svg";
import growthDashboardProjectIcon from "../assets/icons/growth-dashboard-project.svg";
import brandingShowcase from "./assets/showcase/branding.png";
import socialMediaGrowthShowcase from "./assets/showcase/social-media-growth.png";
import websiteDesignShowcase from "./assets/showcase/website-design.png";

const HeroScene = lazy(() => import("./scenes/HeroScene.jsx"));

const whatsappUrl = "https://wa.me/94720626224";

const services = [
  {
    title: "Website Development",
    icon: websiteDevelopmentIcon,
    description: "Fast, responsive, scalable websites with clean code and strong technical foundations."
  },
  {
    title: "Website Design",
    icon: websiteDesignIcon,
    description: "Premium interfaces, clear page flow, and polished layouts built around user trust."
  },
  {
    title: "Branding & Content Design",
    icon: brandingIcon,
    description: "Visual systems, content assets, and branded graphics that keep your business consistent."
  },
  {
    title: "Social Media Management",
    icon: socialIcon,
    description: "Content planning, creative posts, and profile support for a sharper online presence."
  },
  {
    title: "E-commerce Solutions",
    icon: ecommerceIcon,
    description: "Modern online stores with product structure, inquiry paths, and conversion-focused UX."
  },
  {
    title: "Digital Marketing Support",
    icon: marketingIcon,
    description: "Growth campaigns, analytics thinking, and practical support to improve inquiries."
  }
];

const projects = [
  ["Surprisewala Digital", "Event and gifting website experience", "Website", surprisewalaProjectIcon],
  ["BioBloom Online", "Clean brand site with soft conversion flow", "Web Design", biobloomProjectIcon],
  ["Studio Portfolio", "Premium personal brand portfolio", "Portfolio", studioPortfolioProjectIcon],
  ["Retail Commerce", "E-commerce storefront concept", "E-commerce", retailCommerceProjectIcon],
  ["Social Launch Kit", "Content design and campaign visuals", "Social", socialLaunchProjectIcon],
  ["Growth Dashboard", "Digital marketing analytics concept", "Marketing", growthDashboardProjectIcon]
];

const whyChoose = [
  "Premium modern designs",
  "Mobile-first websites",
  "Fast delivery",
  "Conversion-focused structure",
  "Social media support",
  "Brand growth strategy"
];

const process = [
  ["Discover", "We map the brand, audience, goals, and the digital outcome you need."],
  ["Design", "We shape the visual direction, user journey, and high-end interface system."],
  ["Develop", "We build a responsive, fast, production-ready experience with clean structure."],
  ["Launch", "We publish, test, and support the site so your brand can move confidently."]
];

const showcaseCards = [
  { image: brandingShowcase, alt: "Zentrox branding showcase", className: "showcase-card-one" },
  { image: socialMediaGrowthShowcase, alt: "Zentrox social media growth showcase", className: "showcase-card-two" },
  { image: websiteDesignShowcase, alt: "Zentrox website design showcase", className: "showcase-card-three" }
];

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-zentrox-dark text-white">
      <MouseGlow />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Showcase />
        <Portfolio />
        <WhyChoose />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const links = ["Services", "Showcase", "Portfolio", "Process", "Contact"];

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-zentrox-dark/70 backdrop-blur-2xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#home" className="flex items-center gap-3 font-extrabold tracking-wide">
          <img src={logoUrl} alt="Zentrox.lk logo" className="h-11 w-11 rounded-full border border-white/15 object-cover shadow-glow" />
          <span>Zentrox.lk</span>
        </a>

        <button
          className="grid h-11 w-11 place-items-center rounded-lg border border-white/15 bg-white/5 md:hidden"
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="block h-0.5 w-5 bg-white before:block before:h-0.5 before:w-5 before:-translate-y-2 before:bg-white before:content-[''] after:block after:h-0.5 after:w-5 after:translate-y-1.5 after:bg-white after:content-['']" />
        </button>

        <div
          className={`absolute left-4 right-4 top-24 grid gap-1 rounded-lg border border-white/10 bg-zentrox-dark/95 p-4 shadow-card md:static md:flex md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0 md:shadow-none ${
            open ? "opacity-100" : "pointer-events-none opacity-0 md:pointer-events-auto md:opacity-100"
          }`}
        >
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm font-semibold text-white/75 transition hover:text-white">
              {link}
            </a>
          ))}
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="rounded-lg bg-gradient-to-r from-zentrox-blue to-zentrox-cyan px-5 py-3 text-sm font-extrabold shadow-glow">
            Start a Project
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-28">
      <ParticleField />
      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.04fr_0.96fr] lg:px-8">
        <Reveal className="relative z-10">
          <p className="eyebrow">Premium digital agency for modern brands</p>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-normal text-white md:text-7xl lg:text-8xl">
            We Build Digital Experiences That Grow Brands
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Websites, branding, content design, social media and e-commerce solutions for modern businesses.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a className="button-primary" href="#portfolio">View Our Work</a>
            <a className="button-ghost" href={whatsappUrl} target="_blank" rel="noreferrer">Contact Us on WhatsApp</a>
          </div>
        </Reveal>

        <Reveal className="relative z-10 min-h-[420px] lg:min-h-[580px]">
          <Suspense fallback={<SceneFallback label="Loading 3D brand object" />}>
            <HeroScene logoUrl={logoUrl} />
          </Suspense>
        </Reveal>
      </div>
    </section>
  );
}

function Services() {
  return (
    <Section id="services" eyebrow="Services" title="Digital services with a premium execution standard">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <Reveal key={service.title}>
            <article className="tilt-card group min-h-72 rounded-lg border border-white/10 bg-white/[0.055] p-7 text-center shadow-card backdrop-blur-xl transition duration-300 hover:border-zentrox-blue/50 hover:bg-white/[0.075] hover:shadow-glow">
              <div className="mx-auto mb-7 grid h-20 w-20 place-items-center rounded-lg border border-zentrox-blue/25 bg-gradient-to-br from-zentrox-blue/15 to-zentrox-orange/15 transition duration-300 group-hover:-translate-y-2 group-hover:border-zentrox-orange/40">
                <img src={service.icon} alt="" className="h-12 w-12 brightness-110 saturate-125" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-extrabold">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/60">{service.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Showcase() {
  return (
    <section id="showcase" className="relative overflow-hidden border-y border-white/10 bg-gradient-to-b from-zentrox-dark via-zentrox-navy to-zentrox-dark py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
        <Reveal>
          <p className="eyebrow">3D Showcase</p>
          <h2 className="text-4xl font-black leading-tight md:text-6xl">Floating digital systems, built to feel alive.</h2>
          <p className="mt-6 text-lg leading-8 text-white/60">
            A premium agency site should feel engineered, not decorated. This scene uses light 3D panels, subtle movement, and responsive fallbacks to keep the experience smooth.
          </p>
        </Reveal>
        <Reveal className="showcase-image-stage h-[520px] rounded-lg border border-white/10 bg-white/[0.035] shadow-card">
          {showcaseCards.map((card) => (
            <ShowcaseImageCard key={card.alt} {...card} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function ShowcaseImageCard({ image, alt, className }) {
  const [active, setActive] = React.useState(false);

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    event.currentTarget.style.setProperty("--rx", `${(((0.5 - y / rect.height) * 9)).toFixed(2)}deg`);
    event.currentTarget.style.setProperty("--ry", `${(((x / rect.width - 0.5) * 9)).toFixed(2)}deg`);
  };

  const resetTilt = (event) => {
    event.currentTarget.style.setProperty("--rx", "0deg");
    event.currentTarget.style.setProperty("--ry", "0deg");
    setActive(false);
  };

  return (
    <button
      className={`showcase-image-card ${className} ${active ? "is-active" : ""}`}
      type="button"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      onPointerDown={() => setActive((value) => !value)}
      aria-label={alt}
    >
      <img src={image} alt="" loading="lazy" />
    </button>
  );
}

function Portfolio() {
  return (
    <Section id="portfolio" eyebrow="Portfolio" title="Selected project directions for ambitious brands">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map(([title, description, tag, icon], index) => (
          <Reveal key={title}>
            <article className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] shadow-card transition duration-300 hover:-translate-y-2 hover:border-zentrox-blue/45">
              <div className={`h-52 bg-project-${(index % 6) + 1} relative overflow-hidden`}>
                <div className="absolute inset-6 rounded-lg border border-white/20 bg-black/20 backdrop-blur-sm transition duration-300 group-hover:scale-105" />
                <div className="absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-lg border border-white/15 bg-zentrox-dark/70 backdrop-blur-xl">
                  <img src={icon} alt="" className="h-14 w-14" aria-hidden="true" />
                </div>
              </div>
              <div className="p-6">
                <span className="rounded-lg border border-zentrox-blue/25 bg-zentrox-blue/10 px-3 py-1 text-xs font-extrabold text-zentrox-cyan">{tag}</span>
                <h3 className="mt-4 text-xl font-extrabold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/60">{description}</p>
                <a href="#contact" className="mt-5 inline-flex font-extrabold text-zentrox-cyan transition hover:text-white">View Case Study</a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function WhyChoose() {
  return (
    <section className="relative bg-white py-24 text-zentrox-dark lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <Reveal>
          <p className="eyebrow text-zentrox-blue">Why Choose Zentrox</p>
          <h2 className="text-4xl font-black leading-tight md:text-6xl">Built for trust, speed, and measurable growth.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            We keep the experience premium and practical: strong visuals, clear structure, and customer actions that are easy to find.
          </p>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2">
          {whyChoose.map((item) => (
            <Reveal key={item}>
              <div className="flex min-h-20 items-center gap-4 rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm">
                <span className="h-3 w-3 rounded-full bg-zentrox-blue shadow-[0_0_0_7px_rgba(5,124,255,0.12)]" />
                <span className="font-extrabold">{item}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <Section id="process" eyebrow="Process" title="A clean path from idea to launch">
      <div className="relative grid gap-5 lg:grid-cols-4">
        {process.map(([title, description], index) => (
          <Reveal key={title}>
            <article className="relative rounded-lg border border-white/10 bg-white/[0.055] p-7 shadow-card backdrop-blur-xl">
              <span className="mb-8 grid h-12 w-12 place-items-center rounded-lg bg-gradient-to-br from-zentrox-blue to-zentrox-cyan text-lg font-black">{index + 1}</span>
              <h3 className="text-xl font-extrabold">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/60">{description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const body = [
      `Name: ${formData.get("name")}`,
      `Email: ${formData.get("email")}`,
      `Phone: ${formData.get("phone")}`,
      "",
      formData.get("message")
    ].join("\n");

    window.location.href = `mailto:hello@zentrox.lk?subject=${encodeURIComponent("New Zentrox project inquiry")}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="relative overflow-hidden border-t border-white/10 py-24 lg:py-32">
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-zentrox-blue/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="text-4xl font-black leading-tight md:text-6xl">Let's build your next digital presence.</h2>
          <p className="mt-6 text-lg leading-8 text-white/60">
            Tell us what you need, or start directly through WhatsApp. We'll help you shape the right path.
          </p>
          <div className="mt-8 grid gap-3">
            <a className="contact-chip" href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp: +94 720626224</a>
            <a className="contact-chip" href="mailto:hello@zentrox.lk">Email: hello@zentrox.lk</a>
          </div>
        </Reveal>
        <Reveal>
          <form className="rounded-lg border border-white/10 bg-zentrox-dark/70 p-6 shadow-card backdrop-blur-xl" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <input className="input" name="name" aria-label="Name" placeholder="Name" required />
              <input className="input" name="email" aria-label="Email" type="email" placeholder="Email" required />
              <input className="input sm:col-span-2" name="phone" aria-label="Phone" placeholder="Phone" required />
              <textarea className="input min-h-36 sm:col-span-2" name="message" aria-label="Project message" placeholder="Tell us about your project" required />
            </div>
            <button className="button-primary mt-5 w-full" type="submit">Send Inquiry</button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3 font-extrabold">
            <img src={logoUrl} alt="Zentrox.lk logo" className="h-10 w-10 rounded-full object-cover" />
            <span>Zentrox.lk</span>
          </div>
          <p className="mt-4 text-sm leading-7 text-white/60">Premium web, branding, social media, and growth support for modern businesses.</p>
        </div>
        <FooterLinks title="Quick Links" items={["Services", "Showcase", "Portfolio", "Contact"]} />
        <FooterLinks title="Services" items={["Website Development", "Branding", "Social Media", "E-commerce"]} />
        <div>
          <h3 className="font-extrabold">Social Links</h3>
          <div className="mt-4 grid gap-2 text-sm text-white/60">
            <a href="#contact">Facebook</a>
            <a href="#contact">Instagram</a>
            <a href="#contact">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-5 text-sm text-white/50 lg:px-8">(c) 2026 Zentrox.lk. All rights reserved.</div>
    </footer>
  );
}

function FooterLinks({ title, items }) {
  return (
    <div>
      <h3 className="font-extrabold">{title}</h3>
      <div className="mt-4 grid gap-2 text-sm text-white/60">
        {items.map((item) => (
          <a key={item} href={title === "Services" ? "#services" : `#${item.toLowerCase().split(" ")[0]}`}>{item}</a>
        ))}
      </div>
    </div>
  );
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mb-12 max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="text-4xl font-black leading-tight md:text-6xl">{title}</h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

function Reveal({ children, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function MouseGlow() {
  React.useEffect(() => {
    const handleMove = (event) => {
      document.documentElement.style.setProperty("--mouse-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(520px_circle_at_var(--mouse-x,50%)_var(--mouse-y,30%),rgba(5,124,255,0.14),transparent_44%)]" />;
}

function ParticleField() {
  return (
    <div className="absolute inset-0 opacity-70">
      {Array.from({ length: 24 }).map((_, index) => (
        <span
          key={index}
          className="particle"
          style={{
            left: `${(index * 37) % 100}%`,
            top: `${(index * 19) % 100}%`,
            animationDelay: `${index * 0.23}s`
          }}
        />
      ))}
    </div>
  );
}

function SceneFallback({ label }) {
  return (
    <div className="grid h-full min-h-[360px] place-items-center rounded-lg border border-white/10 bg-white/[0.035]">
      <div className="text-center">
        <div className="mx-auto mb-4 h-20 w-20 rounded-lg border border-zentrox-blue/30 bg-gradient-to-br from-zentrox-blue/20 to-zentrox-cyan/10 shadow-glow" />
        <p className="text-sm font-semibold text-white/60">{label}</p>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
