import { useState } from "react";

import {
  cabins,
  highlights,
  importantInfos,
  sharedSpacesImages,
  services,
} from "./data/boatStayData";

export function Icon({ name, className = "h-5 w-5" }) {
  const commonProps = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  const icons = {
    anchor: (
      <svg {...commonProps}>
        <circle cx="12" cy="5" r="2.5" />
        <path d="M12 8v12" />
        <path d="M5 12H3a9 9 0 0 0 18 0h-2" />
        <path d="M7 16l-3-3" />
        <path d="M17 16l3-3" />
      </svg>
    ),
    map: (
      <svg {...commonProps}>
        <path d="M12 21s7-5.1 7-12a7 7 0 1 0-14 0c0 6.9 7 12 7 12z" />
        <circle cx="12" cy="9" r="2.3" />
      </svg>
    ),
    ship: (
      <svg {...commonProps}>
        <path d="M4 16l2-8h12l2 8" />
        <path d="M2 16h20" />
        <path d="M5 19c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 5 0" />
        <path d="M9 8V5h6v3" />
      </svg>
    ),
    calendar: (
      <svg {...commonProps}>
        <rect x="4" y="5" width="16" height="15" rx="2" />
        <path d="M8 3v4" />
        <path d="M16 3v4" />
        <path d="M4 10h16" />
      </svg>
    ),
    users: (
      <svg {...commonProps}>
        <circle cx="12" cy="8" r="3" />
        <path d="M5.5 20a6.5 6.5 0 0 1 13 0" />
      </svg>
    ),
    heart: (
      <svg {...commonProps}>
        <path d="M20.8 5.6a5.2 5.2 0 0 0-7.4 0L12 7l-1.4-1.4a5.2 5.2 0 1 0-7.4 7.4L12 21l8.8-8a5.2 5.2 0 0 0 0-7.4z" />
      </svg>
    ),
    waves: (
      <svg {...commonProps}>
        <path d="M3 8c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2" />
        <path d="M3 14c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2" />
        <path d="M3 20c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2" />
      </svg>
    ),
    car: (
      <svg {...commonProps}>
        <path d="M5 16l1-5a2 2 0 0 1 2-1h8a2 2 0 0 1 2 1l1 5" />
        <path d="M3 16h18" />
        <circle cx="7" cy="18" r="1.5" />
        <circle cx="17" cy="18" r="1.5" />
      </svg>
    ),
    bath: (
      <svg {...commonProps}>
        <path d="M4 12h16" />
        <path d="M6 12V7a3 3 0 0 1 6 0v1" />
        <path d="M5 12v3a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-3" />
      </svg>
    ),
    washing: (
      <svg {...commonProps}>
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <circle cx="12" cy="13" r="4" />
        <path d="M8 7h.01" />
        <path d="M11 7h5" />
      </svg>
    ),
    store: (
      <svg {...commonProps}>
        <path d="M4 10h16l-1-5H5l-1 5z" />
        <path d="M6 10v10h12V10" />
        <path d="M9 20v-6h6v6" />
      </svg>
    ),
    smoke: (
      <svg {...commonProps}>
        <path d="M3 12h11" />
        <path d="M16 12h1" />
        <path d="M19 12h.01" />
        <path d="M7 8c0-1 1-1 1-2" />
        <path d="M11 8c0-1 1-1 1-2" />
        <path d="M4 4l16 16" />
      </svg>
    ),
  };

  return icons[name] || icons.anchor;
}

export default function App() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f8fbff_0%,#eef6ff_45%,#ffffff_100%)] text-[#17242c]">
      <style>{`
        html { scroll-behavior: smooth; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp .8s ease both; }
      `}</style>
      <Header />
      <main className="[&>section]:scroll-mt-24">
        <Hero />
        <Intro />
        <Story />
        <Stays />
        <Cabins />
        <SharedSpaces />
        <Services />
        <Events />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/30 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a
          href="#top"
          onClick={closeMenu}
          className="flex items-center gap-2 font-serif text-2xl font-semibold tracking-wide text-[#0f3443]"
        >
          <Icon name="anchor" className="h-5 w-5 text-[#6f9bc5]" />
          Maison Flottante
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium text-[#41545d] md:flex">
          <a href="#bateau" className="transition hover:text-[#0f3443]">
            Le bateau
          </a>
          <a href="#histoire" className="transition hover:text-[#0f3443]">
            Le concept
          </a>
          <a href="#cabines" className="transition hover:text-[#0f3443]">
            Cabines
          </a>
          <a
            href="#reservation"
            className="rounded-full bg-[#163b63] px-5 py-2.5 text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#102936] hover:shadow-lg"
          >
            Réserver
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
          className="group relative z-[60] flex h-10 w-10 items-center justify-center text-[#163b63] transition hover:opacity-70 md:hidden"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
        >
          <span className="relative h-5 w-7">
            <span
              className={`absolute left-0 top-1.5 block h-px w-7 origin-center rounded-full bg-current transition duration-300 ease-out ${
                menuOpen ? "top-2.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute bottom-1.5 left-0 block h-px w-7 origin-center rounded-full bg-current transition duration-300 ease-out ${
                menuOpen ? "bottom-2.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-x-3 top-[76px] z-50 overflow-hidden rounded-[2rem] border border-white/60 bg-white/85 shadow-2xl shadow-[#163b63]/10 backdrop-blur-2xl md:hidden">
          <nav className="flex flex-col px-6 py-7 text-[#163b63]">
            <a
              onClick={closeMenu}
              href="#bateau"
              className="border-b border-[#dbe8f5] py-3 text-[1.2rem] font-medium tracking-tight text-[#163b63]"
            >
              Le bateau
            </a>
            <a
              onClick={closeMenu}
              href="#histoire"
              className="border-b border-[#dbe8f5] py-3 text-[1.2rem] font-medium tracking-tight text-[#163b63]"
            >
              Le concept
            </a>
            <a
              onClick={closeMenu}
              href="#cabines"
              className="border-b border-[#dbe8f5] py-3 text-[1.2rem] font-medium tracking-tight text-[#163b63]"
            >
              Cabines
            </a>
            <a
              onClick={closeMenu}
              href="#reservation"
              className="mt-5 rounded-full bg-[#163b63] px-5 py-3 text-center text-sm font-medium text-white shadow-lg"
            >
              Réserver
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pt-24"
    >
      <img
        src="/images/hero-yacht-sunset.webp"
        alt=""
        width={1823}
        height={863}
        loading="eager"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#071f2b]/80 via-[#071f2b]/45 to-[#071f2b]/10" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#f8fbff] to-transparent" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <div className="fade-up max-w-3xl text-white">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-2 text-sm backdrop-blur-md">
            <Icon name="map" className="h-4 w-4 text-[#b9d9ff]" />
            Séjour insolite sur l’eau
          </p>
          <h1 className="font-serif text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
            Séjournez à bord d’un yacht
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90 md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#reservation"
              className="rounded-full bg-[#dcecff] px-7 py-3 font-semibold text-[#102936] shadow-xl transition hover:-translate-y-1 hover:bg-[#edf5ff]"
            >
              Réserver votre séjour
            </a>
            <a
              href="#bateau"
              className="rounded-full border border-white/40 bg-white/10 px-7 py-3 font-semibold text-white backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/20"
            >
              Découvrir le bateau
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Intro() {
  return (
    <section id="bateau" className="mx-auto max-w-7xl px-5 py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#6f9bc5]">
            Maison flottante
          </p>
          <h2 className="font-serif text-4xl font-semibold leading-tight text-[#102936] md:text-6xl">
            Un yacht de caractère pour un séjour atypique sur l’eau
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#50616a]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante venenatis dapibus posuere velit aliquet.
          </p>
          <p className="mt-4 text-lg leading-8 text-[#50616a]">
            Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {highlights.map((item) => (
            <div
              key={item.text}
              className="group rounded-[2rem] bg-white/70 p-6 shadow-sm ring-1 ring-[#dfeaf5] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <Icon
                name={item.icon}
                className="mb-4 h-7 w-7 text-[#6f9bc5] transition group-hover:scale-110"
              />
              <p className="font-semibold text-[#102936]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Story() {
  return (
    <section id="histoire" className="bg-white/70 px-5 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#6f9bc5]">
            Le concept
          </p>
          <h2 className="font-serif text-4xl font-semibold leading-tight text-[#102936] md:text-6xl">
            Une expérience sur l’eau
          </h2>
        </div>

        <div className="mt-10 space-y-6 text-lg leading-8 text-[#50616a]">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            commodo cursus magna, vel scelerisque nisl consectetur et.
          </p>
          <p>
            Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed
            consectetur. Vestibulum id ligula porta felis euismod semper.
          </p>
          <p>
            Etiam porta sem malesuada magna mollis euismod. Curabitur blandit
            tempus porttitor, integer posuere erat a ante venenatis.
          </p>
        </div>
      </div>
    </section>
  );
}

export function Stays() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24">
      <div className="grid items-start gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#6f9bc5]">
            Les séjours
          </p>
          <h2 className="font-serif text-4xl font-semibold text-[#102936] md:text-6xl">
            Séjourner à bord
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#50616a]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </p>
          <p className="mt-4 text-lg leading-8 text-[#50616a]">
            Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            Maecenas sed diam eget risus varius blandit sit amet non magna.
          </p>
        </div>
        <div className="rounded-[2.5rem] bg-[#163b63] p-8 text-white shadow-2xl ring-1 ring-white/10">
          <h3 className="font-serif text-4xl font-semibold">
            Informations importantes
          </h3>
          <ul className="mt-7 space-y-5 text-white/85">
            {importantInfos.map((info) => (
              <li key={info.text} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#b9d9ff]">
                  <Icon name={info.icon} className="h-5 w-5" />
                </span>
                <span className="pt-2">{info.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Cabins() {
  return (
    <section
      id="cabines"
      className="bg-[linear-gradient(180deg,#eef6ff_0%,#f8fbff_100%)] px-5 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#6f9bc5]">
            Les cabines
          </p>
          <h2 className="font-serif text-4xl font-semibold text-[#102936] md:text-6xl">
            Des espaces pensés pour votre séjour
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#50616a]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
            odio dui, nulla vitae elit libero.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cabins.map((cabin, index) => (
            <article
              key={cabin.name}
              className="group overflow-hidden rounded-[2rem] bg-white/70 shadow-sm ring-1 ring-[#dfeaf5] transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={cabin.image}
                  alt={cabin.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071f2b]/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 right-4 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                  0{index + 1}
                </div>
              </div>

              <div className="p-6">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#163b63] text-[#b9d9ff] transition group-hover:rotate-6 group-hover:scale-110">
                    <Icon name="anchor" className="h-6 w-6" />
                  </div>
                </div>

                <h3 className="font-serif text-3xl font-semibold text-[#102936]">
                  {cabin.name}
                </h3>
                <p className="mt-2 font-semibold text-[#6f9bc5]">
                  {cabin.capacity}
                </p>
                <p className="mt-4 leading-7 text-[#50616a]">
                  {cabin.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SharedSpaces() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24">
      <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#6f9bc5]">
            À bord
          </p>
          <h2 className="font-serif text-4xl font-semibold text-[#102936] md:text-6xl">
            Espaces réservés à nos hôtes
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#50616a]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere
            consectetur est at lobortis.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4 md:grid-rows-2">
        {sharedSpacesImages.map((item, index) => (
          <div
            key={item.title}
            className={`group relative min-h-[320px] overflow-hidden rounded-[2rem] shadow-sm ${
              index === 0 ? "md:col-span-2 md:row-span-2 md:min-h-[650px]" : ""
            }`}
          >
            <div
              className={`absolute inset-0 bg-cover transition duration-700 group-hover:scale-105 ${
                item.position || "bg-center"
              }`}
              style={{ backgroundImage: `url(${item.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071f2b]/65 via-[#071f2b]/15 to-transparent opacity-80 transition group-hover:opacity-95" />
            <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-5 text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="font-serif text-2xl font-semibold">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section className="bg-white/70 px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#6f9bc5]">
            Services & proximité
          </p>

          <h2 className="font-serif text-4xl font-semibold text-[#102936] md:text-6xl">
            Confort autour du bateau
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#50616a]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
            elit libero, a pharetra augue.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.text}
              className="rounded-[2rem] bg-white/80 p-6 shadow-sm ring-1 ring-[#dfeaf5]"
            >
              <Icon
                name={service.icon}
                className="mb-4 h-7 w-7 text-[#6f9bc5]"
              />
              <p className="leading-7 text-[#50616a]">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export function Events() {
  return (
    <section className="bg-white/70 px-5 py-24">
      <div className="mx-auto max-w-7xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#6f9bc5]">
          Événements
        </p>
        <h2 className="font-serif text-4xl font-semibold text-[#102936] md:text-6xl">
          Pour quels séjours ?
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#50616a]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          posuere erat a ante venenatis dapibus posuere velit aliquet. Donec
          ullamcorper nulla non metus auctor fringilla.
        </p>
      </div>
    </section>
  );
}

export function Booking() {
  return (
    <section id="reservation" className="px-5 py-24">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-[#163b63] px-8 py-16 text-center text-white shadow-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#b9d9ff]">
          Réservation
        </p>
        <h2 className="font-serif text-4xl font-semibold md:text-6xl">
          Réserver votre séjour
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#"
            className="rounded-full bg-[#dcecff] px-7 py-3 font-semibold text-[#102936] transition hover:-translate-y-1 hover:bg-[#edf5ff]"
          >
            Voir sur Airbnb
          </a>
          <a
            href="#"
            className="rounded-full border border-white/40 px-7 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-white/10"
          >
            Voir sur Booking
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[#dbe8f5] px-5 py-8 text-sm text-[#50616a]">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 md:flex-row">
        <p>© 2026 Maison Flottante — Séjour à bord d’un yacht</p>
        <p>Site réalisé par Kahina — Développeuse Front-End</p>
      </div>
    </footer>
  );
}
