import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Hair Hendrix Co",
  tagline: "Home based braider in Scarborough. Knotless, Fulani, and boho styles.",
  category: "Braids and protective styles",
  schemaType: "BeautySalon",
  area: "Scarborough, ON",
  siteUrl: "https://hairhendrixco.vercel.app",

  theme: {
    preset: "salon-chic",
    colors: { accent: "#6B4C7A" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Scarborough braider",
    headline: "Knotless, Fulani, and boho braids",
    subhead:
      "Home based stylist with appointments available. Book on Booksy or DM to lock in your look.",
    images: [
      { src: "/images/post-5.jpg", alt: "Knotless braids with beads", width: 1080, height: 1440 },
      { src: "/images/post-7.jpg", alt: "Small boho knotless braids", width: 1080, height: 1440 },
      { src: "/images/post-8.jpg", alt: "Fulani knotless with boho", width: 1080, height: 1440 },
    ],
    primaryCta: { label: "Book now", href: "http://hairhendrix.booksy.com/a/" },
    secondaryCta: { label: "See the styles", href: "#gallery" },
  },

  highlights: [
    "Home based Scarborough stylist",
    "Knotless, Fulani, and boho braids",
    "Appointments available",
    "Book on Booksy or by DM",
  ],

  about: {
    title: "Creative braids in Scarborough",
    body: [
      "Hair Hendrix Co is a home based stylist in Scarborough offering knotless braids, Fulani styles, boho installs, and freestyle looks. Appointments are available now.",
      "Book through Booksy, or send an Instagram DM with the style you want and your preferred date.",
    ],
    image: { src: "/images/post-7.jpg", alt: "Small boho knotless", width: 1080, height: 1440 },
  },

  menu: {
    label: "Services",
    title: "Services",
    intro: "Popular braid styles. Pricing is shared when you book.",
    variant: "list",
    showPrices: false,
    priceNote: "Message or book online for current pricing.",
    groups: [
      {
        title: "Braids",
        items: [
          { name: "Knotless braids", description: "Including small and boho knotless." },
          { name: "Fulani braids", description: "Freestyle and vacay Fulani looks." },
          { name: "Boho styles", description: "Boho knotless and French curl bob with layers." },
          { name: "Kids styles", description: "Protective styles for kids, including beaded looks." },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent installs",
    items: [
      { src: "/images/post-1.jpg", width: 720, height: 960, alt: "Alt scene braids", caption: "Alt scene braids", href: "https://www.instagram.com/p/DefxSrtFMgY/" },
      { src: "/images/post-5.jpg", width: 1080, height: 1440, alt: "Knotless with beads one pack", caption: "Knotless with beads", href: "https://www.instagram.com/p/DeFSccSFIBF/" },
      { src: "/images/post-7.jpg", width: 1080, height: 1440, alt: "Small boho knotless", caption: "Small boho knotless", href: "https://www.instagram.com/p/DaZPgbYRvSZ/" },
      { src: "/images/post-8.jpg", width: 1080, height: 1440, alt: "Small Fulani knotless with boho", caption: "Fulani knotless with boho", href: "https://www.instagram.com/p/DaPiT6glr6c/" },
      { src: "/images/post-3.jpg", width: 720, height: 960, alt: "Vacay Fulani braids", caption: "Vacay Fulani", href: "https://www.instagram.com/p/DeON1tekaxF/" },
      { src: "/images/post-4.jpg", width: 720, height: 960, alt: "Boho knotless braids", caption: "Boho knotless", href: "https://www.instagram.com/p/DeNGtB3D_2s/" },
      { src: "/images/post-2.jpg", width: 720, height: 1280, alt: "Freestyle Fulani braids", caption: "Freestyle Fulani", href: "https://www.instagram.com/p/DeQXTp2RDYL/" },
      { src: "/images/post-6.jpg", width: 720, height: 1280, alt: "Boho French curl bob", caption: "Boho French curl bob", href: "https://www.instagram.com/p/DeFQ6_-PYzM/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "hairhendrixco",
    embeds: [
      "https://www.instagram.com/p/DefxSrtFMgY/",
      "https://www.instagram.com/p/DeFSccSFIBF/",
      "https://www.instagram.com/p/DaZPgbYRvSZ/",
    ],
    embedsTitle: "Fresh from Instagram",
  },

  order: {
    label: "How to book",
    title: "Book your appointment",
    intro:
      "Appointments are available. Book on Booksy, or send a DM with your style and preferred date.",
    dmMessage:
      "Hi Hair Hendrix! I would love to book.\nPreferred date:\nStyle (knotless, Fulani, boho, other):\nLength and colour idea:",
    links: [
      { label: "Book on Booksy", href: "http://hairhendrix.booksy.com/a/" },
    ],
    note: "Home based stylist in Scarborough. Details shared when you book.",
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I book?", a: "Use the Booksy link, or send an Instagram DM with your preferred date and style." },
    { q: "Where are you located?", a: "Home based in Scarborough. Exact details are shared when you book." },
    { q: "What styles do you offer?", a: "Knotless braids, Fulani braids, boho styles, freestyle looks, and kids protective styles." },
    { q: "Are appointments available?", a: "Yes. Appointments are available now. Book online or DM to lock in your spot." },
  ],

  contact: {
    title: "Contact and booking",
    area: "Scarborough, Ontario",
    socials: [],
  },

  seo: {
    title: "Hair Hendrix Co | Scarborough braider knotless and Fulani",
    description:
      "Home based Scarborough braider for knotless, Fulani, and boho styles. Appointments available. Book on Booksy or by Instagram DM.",
    keywords: [
      "Scarborough braider",
      "knotless braids Scarborough",
      "Fulani braids Toronto",
      "boho knotless Scarborough",
    ],
    ogPhoto: "/images/og-photo.jpg",
  },
};
