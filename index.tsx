import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Star,
  MapPin,
  Phone,
  Instagram,
  Link2,
  Scissors,
  Sparkles,
  Heart,
  GraduationCap,
  Crown,
  Palette,
  Building2,
  ArrowRight,
} from "lucide-react";

import { Reveal } from "@/components/Reveal";
import heroSalon from "@/assets/hero-salon.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import pro1 from "@/assets/pro-1.jpg";
import pro2 from "@/assets/pro-2.jpg";

const WHATSAPP =
  "https://wa.me/5547991461290?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20na%20Exclusive%20Beauty%20BC.";
const MAPS = "https://maps.app.goo.gl/tQ3nTySWEFfzaLi96";
const INSTAGRAM = "https://www.instagram.com/exclusivebeautybc/";
const LINKTREE = "https://linktr.ee/exclusivebeautybc";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Exclusive Beauty BC — Hair, Beauty & Care em Balneário Camboriú" },
      {
        name: "description",
        content:
          "Salão de beleza premium em Balneário Camboriú. Hair, megahair, coloração, cílios, unhas e estética no Edifício Le Majestic. Agende pelo WhatsApp.",
      },
      { property: "og:title", content: "Exclusive Beauty BC — You Are Exclusive" },
      {
        property: "og:description",
        content:
          "Beleza, cuidado e excelência em cada detalhe. Salão premium na Av. Brasil, 3551 — Balneário Camboriú.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Profissionais", href: "#profissionais" },
  { label: "Galeria", href: "#galeria" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Contato", href: "#contato" },
];

const pillars = [
  { icon: Crown, title: "Atendimento Personalizado & VIP", text: "Cada cliente recebe um plano de beleza autoral, do diagnóstico ao acabamento." },
  { icon: Scissors, title: "Hair, Megahair & Coloristas", text: "Especialistas em loiros, mechas, alongamentos e tratamentos de alta performance." },
  { icon: Sparkles, title: "Estética, Cílios & Unhas", text: "Estética facial e corporal, lash design, sobrancelhas e manicure spá." },
  { icon: Building2, title: "Localização Nobre", text: "No Edifício Le Majestic, na Av. Brasil, coração de Balneário Camboriú." },
];

const services = [
  {
    icon: Scissors,
    title: "Hair & Megahair",
    text: "Cortes, mechas, coloração, alongamento e tratamentos de alta performance.",
    items: ["Corte & visagismo", "Mechas e loiros", "Megahair", "Tratamentos capilares"],
  },
  {
    icon: Heart,
    title: "Cílios & Unhas",
    text: "Extensão de cílios, lash lifting, design de sobrancelhas e manicure/pedicure spá.",
    items: ["Extensão de cílios", "Lash lifting", "Design de sobrancelhas", "Manicure & pedicure spá"],
  },
  {
    icon: Palette,
    title: "Estética Facial & Corporal",
    text: "Procedimentos focados em renovação, cuidado e bem-estar.",
    items: ["Limpeza de pele", "Protocolos faciais", "Estética corporal", "Rituais de relaxamento"],
  },
  {
    icon: GraduationCap,
    title: "Cursos & Aperfeiçoamento",
    text: "Formações exclusivas ministradas pelos especialistas da casa.",
    items: ["Coloração avançada", "Megahair", "Lash design", "Mentorias individuais"],
  },
];

const team = [
  { name: "Amanda", role: "Hair Stylist & Visagista", photo: pro1 },
  { name: "Phabinho", role: "Master Blonde & Colorista", photo: pro2 },
];

const gallery = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

const reviews = [
  {
    text: "Impecável, do início ao fim. Depois de 10 anos escolhi a Amanda para cuidar do meu cabelo. E foi surpreendente.",
  },
  {
    text: "Sou cliente há 10 anos, o melhor salão de BC profissionais incríveis e dedicados, além do ambiente ser lindo!",
  },
  {
    text: "Eu saio de São Paulo e venho até aqui pra fazer meu loiro, faço com o Phabinho a muitos anos. Ele é um profissional incrível.",
  },
];

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex flex-col leading-none">
      <span
        className={`brand-rule font-display tracking-[0.35em] text-foreground ${
          compact ? "text-base" : "text-lg sm:text-xl"
        }`}
      >
        EXCLUSIVE
      </span>
      <span className="mt-1 text-[0.55rem] tracking-[0.42em] text-muted-foreground sm:text-[0.6rem]">
        HAIR | BEAUTY | CARE
      </span>
    </div>
  );
}

function CtaButton({
  children,
  variant = "primary",
  href = WHATSAPP,
  className = "",
}: {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "caramel";
  href?: string;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 hover:-translate-y-0.5";
  const styles = {
    primary: "bg-primary text-primary-foreground shadow-soft hover:shadow-lift",
    caramel: "bg-accent text-accent-foreground shadow-soft hover:shadow-lift",
    outline: "border border-primary/25 text-foreground hover:border-accent hover:text-accent",
  }[variant];

  return (
    <a
      href={href}
      target={href.startsWith("#") ? undefined : "_blank"}
      rel="noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </a>
  );
}

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="brand-rule text-[0.65rem] uppercase tracking-[0.35em] text-accent">
        {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl leading-tight text-foreground sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {text && <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{text}</p>}
    </div>
  );
}

function Index() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-shadow duration-300 ${
          scrolled ? "glass-bar shadow-soft" : "glass-bar"
        }`}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:px-8">
          <a href="#inicio" className="min-w-0">
            <Logo compact />
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[0.72rem] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-accent"
              >
                {l.label}
              </a>
            ))}
            <CtaButton className="px-5 py-2.5">Agendar horário</CtaButton>
          </nav>

          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-primary/15 text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <div
          className={`overflow-hidden border-t border-primary/10 bg-background/95 transition-[max-height,opacity] duration-500 lg:hidden ${
            open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-1 px-5 py-5">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <CtaButton className="mt-3 w-full">Agendar horário</CtaButton>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="inicio" className="relative overflow-hidden pt-28 sm:pt-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pb-24">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-[0.6rem] uppercase tracking-[0.22em] text-accent">
              <Sparkles className="h-3.5 w-3.5" /> You are exclusive • Le Majestic — BC
            </span>
            <h1 className="mt-6 text-4xl leading-[1.08] text-foreground sm:text-5xl lg:text-[3.6rem]">
              Beleza, cuidado e excelência em cada detalhe.
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Uma experiência de beleza autoral e personalizada no coração de Balneário Camboriú.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <CtaButton>Agendar pelo WhatsApp</CtaButton>
              <CtaButton variant="outline" href="#sobre">
                Conhecer a experiência
              </CtaButton>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="flex text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </span>
                4,9 no Google
              </span>
              <span>+231 avaliações</span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] shadow-soft">
                <img
                  src={heroSalon}
                  alt="Ambiente sofisticado do salão Exclusive Beauty BC"
                  width={1600}
                  height={1104}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 left-6 hidden rounded-2xl bg-card px-6 py-5 shadow-soft sm:block">
                <p className="font-display text-2xl text-accent">10+</p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                  anos de história
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="bg-secondary/60 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionTitle
              eyebrow="A experiência Exclusive"
              title="Há anos transformando beleza em experiência"
              text="A Exclusive Beauty BC reúne profissionais especializados, atendimento personalizado e um ambiente pensado para proporcionar conforto, cuidado e excelência em cada visita."
            />
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <div className="h-full rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-accent text-accent-foreground">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg leading-snug">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionTitle
              eyebrow="Serviços"
              title="Um catálogo pensado para cada detalhe de você"
              text="Consultoria individual antes de cada procedimento, com produtos e técnicas de alta performance."
            />
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <div className="flex min-w-0 items-center gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-secondary text-accent">
                      <s.icon className="h-5 w-5" />
                    </span>
                    <h3 className="truncate text-xl">{s.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  <ul className="mt-5 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        {it}
                      </li>
                    ))}
                  </ul>
                  <CtaButton variant="outline" className="mt-7 self-start">
                    Consultar / Agendar <ArrowRight className="h-3.5 w-3.5" />
                  </CtaButton>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROFISSIONAIS */}
      <section id="profissionais" className="bg-secondary/60 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionTitle
              eyebrow="Time Exclusive"
              title="Profissionais que cuidam de você"
              text="Especialistas dedicados a criar resultados naturais, autorais e duradouros."
            />
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 90}>
                <div className="group h-full overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <div className="overflow-hidden">
                    <img
                      src={m.photo}
                      alt={`${m.name} — ${m.role}`}
                      width={800}
                      height={1008}
                      loading="lazy"
                      className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl">{m.name}</h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.16em] text-accent">{m.role}</p>
                    <CtaButton variant="outline" className="mt-5 w-full">
                      Agendar
                    </CtaButton>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={180} className="sm:col-span-2">
              <div className="flex h-full flex-col justify-center rounded-3xl border border-dashed border-accent/40 bg-card/50 p-8 text-center">
                <h3 className="text-xl">Nosso time continua crescendo</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Especialistas em cabelo, estética, cílios e unhas prontos para cuidar de você.
                  Fale conosco e indicamos o profissional ideal para o seu objetivo.
                </p>
                <CtaButton variant="caramel" className="mx-auto mt-6">
                  Falar com a recepção
                </CtaButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionTitle
              eyebrow="Galeria"
              title="Um mural editorial de resultados"
              text="Cabelos, unhas, estética e os detalhes que fazem do nosso espaço um refúgio de beleza."
            />
          </Reveal>

          <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
            {gallery.map((src, i) => (
              <Reveal key={src} delay={(i % 3) * 80}>
                <div className="group overflow-hidden rounded-2xl">
                  <img
                    src={src}
                    alt="Trabalho realizado na Exclusive Beauty BC"
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AVALIAÇÕES */}
      <section id="avaliacoes" className="bg-primary py-20 text-primary-foreground lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="brand-rule text-[0.65rem] uppercase tracking-[0.35em] text-accent">
                Avaliações
              </span>
              <div className="mt-6 flex items-center justify-center gap-3">
                <span className="font-display text-5xl">4,9</span>
                <span className="flex text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </span>
              </div>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-primary-foreground/60">
                no Google • 231 avaliações
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {reviews.map((r, i) => (
              <Reveal key={r.text} delay={i * 90}>
                <blockquote className="h-full rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-7">
                  <span className="flex text-accent">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </span>
                  <p className="mt-4 text-sm leading-relaxed text-primary-foreground/85">
                    “{r.text}”
                  </p>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LOCALIZAÇÃO */}
      <section id="contato" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionTitle eyebrow="Onde estamos" title="Localização nobre em Balneário Camboriú" />
          </Reveal>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl border border-border bg-card p-8">
                <div className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-lg">Endereço</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Av. Brasil, 3551 – Sala 06 – Centro
                      <br />
                      Balneário Camboriú – SC, CEP 88330-063
                      <br />
                      Edifício Le Majestic
                    </p>
                  </div>
                </div>

                <div className="mt-7 flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-secondary text-accent">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-lg">Telefone / WhatsApp</h3>
                    <p className="mt-2 text-sm text-muted-foreground">(47) 99146-1290</p>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <CtaButton href={MAPS} variant="outline">
                    Como chegar
                  </CtaButton>
                  <CtaButton>Agendar horário</CtaButton>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="h-80 overflow-hidden rounded-3xl border border-border shadow-soft lg:h-full">
                <iframe
                  title="Mapa Exclusive Beauty BC"
                  src="https://www.google.com/maps?q=Av.+Brasil,+3551+-+Centro,+Balne%C3%A1rio+Cambori%C3%BA+-+SC,+88330-063&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CONVERSÃO FINAL */}
      <section className="bg-secondary/70 py-20 lg:py-24">
        <Reveal>
          <div className="mx-auto max-w-3xl px-5 text-center">
            <h2 className="text-3xl leading-tight sm:text-4xl">
              Seu próximo momento de beleza começa aqui.
            </h2>
            <p className="mt-4 text-sm text-muted-foreground sm:text-base">
              Agende com nossos especialistas e viva a experiência Exclusive.
            </p>
            <CtaButton variant="caramel" className="mt-8">
              Agendar pelo WhatsApp
            </CtaButton>
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary py-14 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <span className="brand-rule font-display text-lg tracking-[0.35em]">EXCLUSIVE</span>
              <p className="mt-2 text-[0.6rem] tracking-[0.42em] text-primary-foreground/60">
                HAIR | BEAUTY | CARE
              </p>
              <p className="mt-5 font-display text-xl text-accent">You are exclusive</p>
            </div>

            <div className="text-sm leading-relaxed text-primary-foreground/75">
              <p>Av. Brasil, 3551 – Sala 06 – Centro</p>
              <p>Balneário Camboriú – SC, 88330-063</p>
              <p className="mt-3">(47) 99146-1290</p>
            </div>

            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.25em] text-primary-foreground/60">
                Siga a Exclusive
              </p>
              <div className="mt-4 flex gap-3">
                {[
                  { href: INSTAGRAM, icon: Instagram, label: "Instagram" },
                  { href: LINKTREE, icon: Link2, label: "Linktree" },
                  { href: MAPS, icon: MapPin, label: "Google Maps" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="grid h-11 w-11 place-items-center rounded-full border border-primary-foreground/20 transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
                  >
                    <s.icon className="h-4.5 w-4.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-12 border-t border-primary-foreground/10 pt-6 text-center text-[0.7rem] text-primary-foreground/50">
            © {new Date().getFullYear()} Exclusive Beauty BC — Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* WHATSAPP FLUTUANTE */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="Agendar pelo WhatsApp"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-accent text-accent-foreground shadow-lift transition-transform duration-300 hover:scale-110"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
          <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35zM12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.27-1.38a9.87 9.87 0 0 0 4.77 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.13h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.05-.2-.31a8.17 8.17 0 0 1-1.25-4.35c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.21-8.25 8.21z" />
        </svg>
      </a>
    </div>
  );
}
