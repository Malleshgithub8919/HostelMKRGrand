import hotelFront from './assets/hotel-front.png'
import roomSuite from './assets/room-suite.png'
import roomLounge from './assets/room-lounge.png'
import roomBed from './assets/room-bed.png'
import roomWhiteBed from './assets/room-whitebed.png'
import receptionFrontdesk from './assets/reception-frontdesk.png'
import lobbyPanorama from './assets/lobby-panorama.png'
import brandSign from './assets/brand-sign.png'
import diningDetail from './assets/dining-detail.png'
import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
import { useState } from 'react'
import {
  ArrowRight,
  BedDouble,
  ChevronDown,
  Compass,
  ConciergeBell,
  Facebook,
  Flower2,
  Instagram,
  Menu,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  Trees,
  UtensilsCrossed,
  Waves,
  X,
} from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Dining', href: '#dining' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Wellness', href: '#wellness' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Location', href: '#location' },
]

const hotelDetails = {
  name: 'HOTEL MKR GRAND',
  address: 'Balaramareddy Hospital road, Mallidi.Kanikireddy Papavardhana complex, Vedireswaram Rd - Devarapalli Rd, Ravulapalem, Andhra Pradesh 533238, India',
  shortLocation: 'Ravulapalem, Andhra Pradesh',
  phone: '+91 85209 22222',
  mapEmbedUrl: 'https://www.google.com/maps?q=16.7563547,81.8409133&z=16&output=embed',
  directionsUrl:
    'https://www.google.com/maps/place/HOTEL+MKR+GRAND/@16.7563547,81.8369765,16z/data=!4m9!3m8!1s0x3a37bfe4ae872fbd:0x77cd5aa80c03e6bf!5m2!4m1!1i2!8m2!3d16.7563547!4d81.8409133!16s%2Fg%2F11vd7502l7',
  contactUrl: 'https://hotelmkrgrand.com/contact.php',
}

const stats = [
  { value: '18', label: 'Signature Suites' },
  { value: '24/7', label: 'Concierge Care' },
  { value: '4.8', label: 'Google Rating' },
  { value: '12 min', label: 'To the City' },
]

const reviewRatingBreakdown = [
  { stars: 5, count: 766 },
  { stars: 4, count: 82 },
  { stars: 3, count: 15 },
  { stars: 2, count: 3 },
  { stars: 1, count: 7 },
]

const rooms = [
  {
    name: 'The Horizon Suite',
    price: 'From $780 / night',
    description: 'Floor-to-ceiling views, warm oak finishes, and a private terrace for sunrise rituals.',
    image: roomSuite,
  },
  {
    name: 'The Courtyard Residence',
    price: 'From $1,120 / night',
    description: 'A secluded garden escape with a double-height lounge and bespoke in-room dining.',
    image: roomWhiteBed,
  },
  {
    name: 'The Grand Skyline',
    price: 'From $1,460 / night',
    description: 'Skyline panoramas, sculptural bath rituals, and a quiet private breakfast terrace.',
    image: roomBed,
  },
]

const amenities = [
  { icon: BedDouble, title: 'Curated suites', text: 'Thoughtful design and tailored comfort in every room.' },
  { icon: UtensilsCrossed, title: 'Chef-led dining', text: 'Seasonal menus shaped by local ingredients and quiet rituals.' },
  { icon: Waves, title: 'Spa sanctuary', text: 'Wellness experiences balancing calm, restoration, and renewal.' },
  { icon: ShieldCheck, title: 'Seamless service', text: 'Private transfers, tailored itineraries, and discreet assistance.' },
]

const experiences = [
  'Private rooftop dinners with skyline views',
  'Slow mornings in the courtyard lounge',
  'Signature spa journeys and wellness rituals',
  'Tailored city experiences curated by our concierge',
]

const gallery = [hotelFront, receptionFrontdesk, roomWhiteBed]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <MotionConfig reducedMotion="user">
    <motion.div
      id="top"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="min-h-screen bg-[#f8f5ee] text-[#252820]"
    >
      <header className="relative isolate overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(21,29,23,0.78), rgba(35,42,31,0.2)), url(${hotelFront})`,
          }}
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(198,207,174,0.24),_transparent_40%)]" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 pb-20 pt-6 sm:px-6 lg:px-8">
          <motion.nav
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="relative flex items-center justify-between rounded-full border border-white/70 bg-[#f8f5ee]/95 px-3 py-3 shadow-[0_18px_50px_rgba(23,31,23,0.2)] backdrop-blur-xl sm:px-6"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#65765b]/40 bg-[#65765b]/10 text-xs font-semibold tracking-[0.28em] text-[#53644a]">
                MK
              </div>
              <div>
                <p className="text-[0.58rem] uppercase tracking-[0.42em] text-[#65765b]">Hotel</p>
                <p className="font-display text-2xl leading-none text-[#252820]">MKR GRAND</p>
              </div>
            </div>

            <div className="hidden items-center gap-2 text-xs font-medium text-[#45483f] lg:flex xl:gap-4">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="whitespace-nowrap transition hover:text-[#65765b]">
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <a href={`tel:${hotelDetails.phone.replace(/\s+/g, '')}`} className="hidden rounded-full bg-[#65765b] px-3 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#53644a] sm:inline-flex sm:px-4 sm:text-sm">
                Book Your Stay
              </a>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#65765b]/30 text-[#485541] transition hover:bg-[#65765b]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#65765b] lg:hidden"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
                onClick={() => setMobileMenuOpen((open) => !open)}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  id="mobile-navigation"
                  initial={{ opacity: 0, y: -8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                  className="absolute left-0 right-0 top-[calc(100%+0.65rem)] z-50 rounded-2xl border border-[#d7d1c4] bg-[#f8f5ee] p-3 shadow-[0_18px_50px_rgba(23,31,23,0.2)] lg:hidden"
                >
                  <div className="grid grid-cols-2 gap-1">
                    {navItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="rounded-xl px-3 py-3 text-sm font-medium text-[#45483f] transition hover:bg-[#65765b]/10 hover:text-[#53644a] focus-visible:outline-2 focus-visible:outline-[#65765b]"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                  <a
                    href={`tel:${hotelDetails.phone.replace(/\s+/g, '')}`}
                    className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#65765b] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#53644a]"
                  >
                    <ConciergeBell size={16} /> Book Your Stay
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.nav>

          <motion.section
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.14 } },
            }}
            className="grid min-h-[calc(100svh-6rem)] items-end pb-10 pt-20 md:min-h-[calc(100vh-8rem)] md:pt-24"
          >
            <div className="max-w-3xl">
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[0.68rem] font-medium uppercase tracking-[0.34em] text-[#e7d1a2]"
              >
                <Sparkles size={12} /> {hotelDetails.name}
              </motion.p>

              <motion.h1
                variants={fadeUp}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="font-display max-w-2xl text-5xl leading-[0.9] text-[#f9f4ee] sm:text-6xl lg:text-[7rem]"
              >
                A grand arrival.
                <span className="mt-2 block text-[#dce5cc]">A calmer rhythm.</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
                className="mt-6 max-w-xl text-base leading-7 text-[#e2dbd0]/80 sm:text-lg"
              >
                Experience architectural elegance, warm hospitality, and deeply restorative stays designed for modern indulgence.
              </motion.p>

              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.25 }}
                className="mt-9 flex flex-wrap items-center gap-4"
              >
                <a
                  href={`tel:${hotelDetails.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-2 rounded-full bg-[#dce5cc] px-6 py-3 text-sm font-semibold text-[#33412f] shadow-[0_18px_35px_rgba(29,47,31,0.22)] transition hover:-translate-y-0.5 hover:bg-white"
                >
                  Book Your Stay <ArrowRight size={16} />
                </a>
                <a
                  href="#rooms"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-[#f5efe9] transition hover:-translate-y-0.5 hover:border-[#d7b77a]/60 hover:bg-white/10"
                >
                  Explore Hotel
                </a>
              </motion.div>
            </div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.45 }}
              className="mt-12 flex items-center gap-3 text-[0.66rem] uppercase tracking-[0.38em] text-[#efe7da]/75"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <ChevronDown size={15} className="animate-bounce" />
              </span>
              Scroll to explore
            </motion.div>
          </motion.section>
        </div>
      </header>

      <main>
        <section id="about" className="bg-[#eee9df] py-24 text-[#252820]">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end"
          >
            <div>
              <p className="mb-4 text-[0.7rem] uppercase tracking-[0.42em] text-[#708064]">About Hotel MKR Grand</p>
              <h2 className="font-display max-w-xl text-4xl leading-none text-[#252820] sm:text-5xl md:text-6xl">
                Where Every Stay Feels Effortless.
              </h2>
            </div>
            <div className="max-w-xl space-y-4 text-base leading-8 text-[#55584f]">
              <p>
                At <strong className="font-semibold text-[#252820]">Hotel MKR Grand</strong>, we bring together comfort, convenience, and warm hospitality to create a stay that feels easy from the moment you arrive.
              </p>
              <p>
                Located in <strong className="font-semibold text-[#252820]">Ravulapalem</strong>, our hotel is thoughtfully positioned for travellers looking for a comfortable place to stay while exploring the town and surrounding destinations.
              </p>
              <p>
                Whether you're stopping by for a short visit or staying a little longer, <strong className="font-semibold text-[#252820]">MKR Grand is a place to arrive, unwind, and feel at ease.</strong>
              </p>
              <p className="pt-1 font-semibold text-[#65765b]">Come in. Settle down. Make yourself at home.</p>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#77796f]">Ravulapalem · Andhra Pradesh</p>
            </div>
          </motion.div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="section-shell border border-[#d7d1c4] bg-[#f8f5ee] p-6"
              >
                <div className="font-display text-5xl leading-none text-[#252820]">{stat.value}</div>
                <div className="mt-3 text-xs uppercase tracking-[0.3em] text-[#708064]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          </div>
        </section>

        <section id="rooms" className="bg-[#f8f5ee] px-5 py-20 text-[#252820] sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-[0.7rem] uppercase tracking-[0.42em] text-[#708064]">Rooms & suites</p>
              <h3 className="font-display text-4xl leading-none text-[#252820] sm:text-5xl">Stay in a mood of quiet grandeur.</h3>
            </div>
            <a href="#booking" className="hidden items-center gap-2 text-sm uppercase tracking-[0.24em] text-[#65765b] md:inline-flex">
              Reserve your suite <ArrowRight size={14} />
            </a>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {rooms.map((room, index) => (
              <motion.article
                key={room.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="group overflow-hidden border border-[#d7d1c4] bg-white"
              >
                <div className="relative h-[23rem] overflow-hidden sm:h-[28rem]">
                  <img src={room.image} alt={room.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1115] via-[#0d1115]/15 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#d7b77a]/40 bg-[#11171c]/70 px-3 py-1 text-[0.6rem] uppercase tracking-[0.28em] text-[#eed7a4]">
                      <Star size={10} className="fill-[#eed7a4]" /> Signature suite
                    </div>
                    <h4 className="font-display text-3xl leading-none text-[#f7f1e9]">{room.name}</h4>
                  </div>
                </div>

                <div className="space-y-4 p-6">
                  <p className="leading-7 text-[#55584f]">{room.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
          </div>
        </section>

        <section id="experiences" className="bg-[#eee9df] px-5 py-24 text-[#252820] sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
            <div className="relative overflow-hidden border border-[#d7d1c4] bg-[#e4e0d6]">
              <img
                src={roomLounge}
                alt="Hotel lounge"
                className="h-full min-h-[22rem] w-full object-cover sm:min-h-[30rem]"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center border border-[#d7d1c4] bg-[#f8f5ee] p-8 sm:p-10"
            >
              <p className="mb-4 text-[0.7rem] uppercase tracking-[0.42em] text-[#708064]">The MKR experience</p>
              <h3 className="font-display text-4xl leading-none text-[#252820] sm:text-5xl">
                Thoughtful hospitality, elevated to an art form.
              </h3>
              <p className="mt-6 max-w-lg text-base leading-8 text-[#55584f]">
                From discreet check-in to intimate dining and bespoke city planning, every touchpoint is tailored to make your time feel unhurried, cared for, and beautifully memorable.
              </p>

              <div className="mt-8 space-y-5">
                {experiences.map((item) => (
                  <div key={item} className="flex items-start gap-4 border-t border-[#d7d1c4] pt-4 first:border-t-0 first:pt-0">
                    <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#8a9a7c]/20 text-[#65765b]">
                      <Sparkles size={14} />
                    </span>
                    <p className="text-base leading-7 text-[#3f423a]">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          </div>
        </section>

        <section id="dining" className="bg-[#f8f5ee] py-24 text-[#252820]">
          <div id="wellness" className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="mb-12 max-w-2xl">
              <p className="mb-4 text-[0.7rem] uppercase tracking-[0.42em] text-[#708064]">Careful comforts</p>
              <h3 className="font-display text-4xl leading-none text-[#252820] sm:text-5xl">A lifestyle of comfort, restoration, and memorable rituals.</h3>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {amenities.map(({ icon: Icon, title, text }) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45 }}
                  className="section-shell border border-[#d7d1c4] bg-white p-6"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#8a9a7c]/50 bg-[#8a9a7c]/15 text-[#65765b]">
                    <Icon size={20} />
                  </div>
                  <h4 className="font-display text-3xl leading-none text-[#252820]">{title}</h4>
                  <p className="mt-4 text-sm leading-7 text-[#55584f]">{text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="bg-[#eee9df] px-5 py-24 text-[#252820] sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="mb-3 text-[0.7rem] uppercase tracking-[0.42em] text-[#708064]">A visual story</p>
              <h3 className="font-display text-4xl leading-none text-[#252820] sm:text-5xl">Capture the atmosphere of a stay meant to linger.</h3>
            </div>
            <div className="hidden items-center gap-3 rounded-full border border-[#d7d1c4] bg-[#f8f5ee] px-3 py-2 text-xs uppercase tracking-[0.28em] text-[#55584f] md:flex">
              <MapPin size={14} /> Ravulapalem • Andhra Pradesh
            </div>
          </div>

          <motion.figure
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55 }}
            className="mb-8 overflow-hidden border border-[#d7d1c4] bg-[#f8f5ee]"
          >
            <img
              src={lobbyPanorama}
              alt="Panoramic view of the Hotel MKR Grand lobby and reception"
              className="mx-auto max-h-[34rem] w-full object-contain"
              loading="lazy"
            />
            <figcaption className="border-t border-[#d7d1c4] px-5 py-3 text-xs uppercase tracking-[0.28em] text-[#65765b]">
              The MKR Grand lobby
            </figcaption>
          </motion.figure>

          <div className="grid gap-5 md:grid-cols-3">
            {gallery.map((image, index) => (
              <motion.div
                key={`${image}-${index}`}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className={`overflow-hidden border border-[#d7d1c4] ${index === 1 ? 'md:translate-y-10' : ''}`}
              >
                <img src={image} alt="MKR Grand atmosphere" className="h-[19rem] w-full object-cover transition duration-700 hover:scale-105 sm:h-[24rem]" />
              </motion.div>
            ))}
          </div>
          </div>
        </section>

        <section id="reviews" className="bg-[#eee9df] py-24 text-[#252820]">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-2xl">
              <p className="mb-3 text-[0.7rem] uppercase tracking-[0.42em] text-[#708064]">Guest reviews</p>
              <h3 className="font-display text-4xl leading-none text-[#252820] sm:text-5xl">
                Rated by guests on Google.
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#55584f]">
                See guest feedback and the latest reviews on our Google Maps listing.
              </p>
            </div>

            <div className="grid gap-8 border border-[#d7d1c4] bg-[#f8f5ee] p-6 shadow-[0_20px_60px_rgba(53,55,45,0.08)] sm:p-8 md:grid-cols-[0.75fr_1.25fr] md:items-center">
              <div className="flex flex-col items-center justify-center border-b border-[#d7d1c4] pb-7 text-center md:border-b-0 md:border-r md:pb-0 md:pr-8">
                <span className="font-display text-7xl leading-none text-[#252820]">4.8</span>
                <div className="mt-3 flex gap-1" aria-label="Rated 4.8 out of 5 stars">
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star key={index} size={17} className="fill-[#b59657] text-[#b59657]" />
                  ))}
                </div>
                <p className="mt-3 text-sm text-[#62645c]">Based on 873 Google reviews</p>
              </div>

              <div className="space-y-3">
                {reviewRatingBreakdown.map(({ stars, count }) => (
                  <div key={stars} className="flex items-center gap-3 text-sm">
                    <span className="w-12 shrink-0 text-right text-[#45483f]">{stars} star</span>
                    <div
                      className="h-2.5 flex-1 overflow-hidden rounded-full bg-[#e4e0d6]"
                      role="img"
                      aria-label={`${stars} stars: ${count} reviews`}
                    >
                      <div
                        className="h-full rounded-full bg-[#8a9a7c]"
                        style={{ width: `${(count / 873) * 100}%` }}
                      />
                    </div>
                    <span className="w-10 shrink-0 text-right text-[#686b61]">{count}</span>
                  </div>
                ))}
                <div className="pt-3">
                  <a
                    href={hotelDetails.directionsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#65765b] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#53644a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#65765b]"
                  >
                    Read all reviews on Google <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="booking" className="bg-[#f8f5ee] px-5 py-24 text-[#252820] sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="relative overflow-hidden border border-[#d7d1c4] bg-[radial-gradient(circle_at_top,_rgba(138,154,124,0.14),_transparent_42%),linear-gradient(135deg,#eee9df,#f8f5ee)] px-6 py-10 sm:px-8 lg:px-10"
          >
            <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="mb-4 text-[0.7rem] uppercase tracking-[0.42em] text-[#708064]">Reserve your escape</p>
                <h3 className="font-display text-4xl leading-none text-[#252820] sm:text-5xl">Begin your next unforgettable stay at MKR Grand.</h3>
              </div>

              <div className="flex flex-wrap gap-4">
                <a href={`tel:${hotelDetails.phone.replace(/\s+/g, '')}`} className="inline-flex items-center gap-2 rounded-full border border-[#65765b]/40 bg-white/50 px-5 py-3 text-sm font-medium uppercase tracking-[0.18em] text-[#485541]">
                  <ConciergeBell size={16} /> Call Now
                </a>
                <a href={hotelDetails.directionsUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#65765b] px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white">
                  Directions <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>

          <div className="mt-8 grid gap-6 border border-[#d7d1c4] bg-[#eee9df] p-6 md:grid-cols-3">
            <div>
              <p className="mb-2 text-[0.65rem] uppercase tracking-[0.38em] text-[#708064]">Address</p>
              <p className="text-sm leading-7 text-[#45483f]">{hotelDetails.address}</p>
            </div>
            <div>
              <p className="mb-2 text-[0.65rem] uppercase tracking-[0.38em] text-[#708064]">Phone</p>
              <a href={`tel:${hotelDetails.phone.replace(/\s+/g, '')}`} className="text-sm leading-7 text-[#45483f] hover:text-[#65765b]">
                {hotelDetails.phone}
              </a>
            </div>
            <div>
              <p className="mb-2 text-[0.65rem] uppercase tracking-[0.38em] text-[#708064]">Contact</p>
              <a href={hotelDetails.contactUrl} target="_blank" rel="noreferrer" className="text-sm leading-7 text-[#45483f] hover:text-[#65765b]">
                Contact Us
              </a>
            </div>
          </div>

          <div id="location" className="mt-8 overflow-hidden border border-[#d7d1c4] bg-[#eee9df]">
            <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-2 text-[0.65rem] uppercase tracking-[0.38em] text-[#708064]">Find us</p>
                <h3 className="font-display text-3xl leading-none text-[#252820]">MKR Grand, Ravulapalem</h3>
                <p className="mt-2 text-sm leading-7 text-[#55584f]">{hotelDetails.shortLocation}</p>
              </div>
              <a
                href={hotelDetails.directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-[#65765b]/50 bg-[#65765b]/10 px-5 py-2.5 text-sm font-medium text-[#485541] transition hover:bg-[#65765b]/20"
              >
                Open in Google Maps <ArrowRight size={16} />
              </a>
            </div>
            <iframe
              title="Map showing the location of Hotel MKR Grand in Ravulapalem"
              src={hotelDetails.mapEmbedUrl}
              className="h-[22rem] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          </div>
        </section>
      </main>

      <footer className="relative overflow-hidden border-t border-[#d7d1c4] bg-[radial-gradient(ellipse_at_top_left,_rgba(138,154,124,0.12),_transparent_38%),#eee9df]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_1fr] lg:gap-16 lg:px-8 lg:py-16">
          <div>
            <a href="#top" className="inline-flex items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#65765b]">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#65765b]/55 bg-[#65765b]/10 text-xs font-semibold tracking-[0.3em] text-[#53644a]">
                MK
              </span>
              <span>
                <span className="block text-[0.58rem] uppercase tracking-[0.42em] text-[#65765b]">Hotel</span>
                <span className="font-display text-3xl leading-none text-[#252820]">MKR GRAND</span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-7 text-[#55584f]">
              A warm welcome and a comfortable stay in the heart of Ravulapalem.
            </p>
          </div>

          <div>
            <p className="mb-5 text-[0.65rem] uppercase tracking-[0.38em] text-[#65765b]">Explore</p>
            <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-5 gap-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="w-fit text-sm text-[#45483f] transition hover:text-[#65765b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#65765b]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="mb-5 text-[0.65rem] uppercase tracking-[0.38em] text-[#65765b]">Visit & contact</p>
            <a
              href={hotelDetails.directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="group flex items-start gap-3 text-sm leading-6 text-[#45483f] transition hover:text-[#65765b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#65765b]"
            >
              <MapPin size={17} className="mt-1 shrink-0 text-[#65765b]" />
              <span>{hotelDetails.shortLocation}<span className="mt-1 block text-xs text-[#65765b]">Get directions <ArrowRight size={12} className="ml-1 inline transition group-hover:translate-x-1" /></span></span>
            </a>
            <a
              href={`tel:${hotelDetails.phone.replace(/\s+/g, '')}`}
              className="mt-4 inline-flex items-center gap-3 text-sm text-[#45483f] transition hover:text-[#65765b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#65765b]"
            >
              <ConciergeBell size={17} className="text-[#65765b]" />
              {hotelDetails.phone}
            </a>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={hotelDetails.contactUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#65765b]/35 px-4 py-2 text-xs font-medium text-[#3f423a] transition hover:border-[#65765b]/70 hover:text-[#53644a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#65765b]"
              >
                <ConciergeBell size={14} /> Contact Us
              </a>
              <a
                href={`https://wa.me/91${hotelDetails.phone.replace(/\D/g, '').replace(/^91/, '')}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#65765b]/40 bg-[#65765b]/10 px-4 py-2 text-xs font-medium text-[#53644a] transition hover:bg-[#65765b]/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#65765b]"
              >
                <MessageCircle size={14} /> WhatsApp
              </a>
            </div>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.instagram.com/explore/search/keyword/?q=HOTEL%20MKR%20GRAND%20Ravulapalem"
                target="_blank"
                rel="noreferrer"
                aria-label="Search Instagram for Hotel MKR Grand"
                title="Search Instagram for Hotel MKR Grand"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#65765b]/35 text-[#45483f] transition hover:border-[#65765b]/70 hover:text-[#53644a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#65765b]"
              >
                <Instagram size={17} />
              </a>
              <a
                href="https://www.facebook.com/search/top?q=HOTEL%20MKR%20GRAND%20Ravulapalem"
                target="_blank"
                rel="noreferrer"
                aria-label="Search Facebook for Hotel MKR Grand"
                title="Search Facebook for Hotel MKR Grand"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#65765b]/35 text-[#45483f] transition hover:border-[#65765b]/70 hover:text-[#53644a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#65765b]"
              >
                <Facebook size={17} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#d7d1c4]">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-[#686b61] sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
            <span>© {new Date().getFullYear()} {hotelDetails.name}. All rights reserved.</span>
            <span className="uppercase tracking-[0.22em]">{hotelDetails.shortLocation}</span>
          </div>
        </div>
      </footer>
    </motion.div>
    </MotionConfig>
  )
}

export default App
