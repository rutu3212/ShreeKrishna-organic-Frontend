import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Leaf,
  Award,
  CheckCircle2,
  Star,
  Layers,
  ChevronLeft,
  ChevronRight,
  Play,
  X,
  Truck,
  Heart,
  FlaskConical,
  Sprout,
} from "lucide-react";

import { productService } from "../services/productService";
import { testimonials, brandStats } from "../data/testimonials";

import ProductCard from "../components/ProductCard";
import SectionHeader from "../components/SectionHeader";
import Button from "../components/Button";
import LoadingSpinner from "../components/LoadingSpinner";

/* ============================================================
   HERO SLIDES
   IMAGE URLs ARE UNCHANGED
============================================================ */

const HERO_SLIDES = [
  {
    id: 1,
    badge: "100% Traditional Vaagai Wood-Pressed",
    title: "Pure Oils.",
    titleAccent: "Honest Origins.",
    description:
      "Slow-crushed in authentic Vaagai wooden pestles under 40°C. Zero chemical refining, zero hexane solvents, and zero adulteration — just pure traditional wellness for your family.",
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=1200&q=80",
    featureTitle: "Vaagai Wooden Mortar Press",
    featureDesc: "Slow cold extraction below 40°C",
    ctaText: "Shop Pure Oils",
    ctaLink: "/shop?category=wood-pressed",
  },
  {
    id: 2,
    badge: "Handcrafted Palmyra Sweetener",
    title: "Organic Jaggery.",
    titleAccent: "Unrefined Nutrition.",
    description:
      "Natural Karupatti palm jaggery and Kolhapur sugarcane shakkar. Boiled in traditional brass vats without chemical bleaches or synthetic sulfur.",
    image:
      "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=1200&q=80",
    featureTitle: "Wild Palmyra Tapped",
    featureDesc: "100% Sulfur-free & mineral rich",
    ctaText: "Explore Jaggery",
    ctaLink: "/shop?category=jaggery",
  },
  {
    id: 3,
    badge: "Ancient Vedic Bilona Sanskar",
    title: "Vedic A2 Ghee.",
    titleAccent: "Golden Purity.",
    description:
      "Hand-churned from the whole curd of free-grazing indigenous Gir cows using two-way wooden bilonas. Fragrant, granular, and easily digestible.",
    image:
      "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=1200&q=80",
    featureTitle: "Gir Cow Curd Churned",
    featureDesc: "Traditional 5-step sanskar bilona",
    ctaText: "Discover A2 Ghee",
    ctaLink: "/shop?category=supplements",
  },
  {
    id: 4,
    badge: "Fair-Trade Agriculture",
    title: "Direct Sourcing.",
    titleAccent: "350+ Farmer Families.",
    description:
      "We bypass mandi middlemen to source native non-GMO seed varieties directly from organic grower collectives in Rajasthan, Gujarat, and Tamil Nadu.",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=80",
    featureTitle: "Fair Trade Certified",
    featureDesc: "Native non-GMO heirloom crops",
    ctaText: "Read Our Story",
    ctaLink: "/about",
  },
  {
    id: 5,
    badge: "100% Lab Tested Transparency",
    title: "Zero Solvents.",
    titleAccent: "Lab Verified.",
    description:
      "Every single batch is independently tested by NABL-accredited labs for iodine values, zero heavy metals, and complete freedom from adulteration.",
    image:
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=1200&q=80",
    featureTitle: "QR Verified Batches",
    featureDesc: "100% FSSAI & NABL compliant",
    ctaText: "View Products",
    ctaLink: "/shop",
  },
];

/* ============================================================
   CATEGORIES
   IMAGE URLs ARE UNCHANGED
============================================================ */

const CATEGORIES = [
  {
    id: "oils",
    name: "Oils",
    description: "Wood & Cold-Pressed",
    icon: "🪵",
    path: "/shop?category=wood-pressed",
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "jaggery",
    name: "Jaggery",
    description: "Palm & Sugarcane",
    icon: "🍯",
    path: "/shop?category=jaggery",
    image:
      "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "supplements",
    name: "Health Supplements",
    description: "A2 Ghee & Forest Honey",
    icon: "🌿",
    path: "/shop?category=supplements",
    image:
      "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "other",
    name: "Other Products",
    description: "Combos & Castor Oil",
    icon: "🌾",
    path: "/shop?category=other",
    image:
      "https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&w=400&q=80",
  },
];

/* ============================================================
   MEDIA
   IMAGE URLs ARE UNCHANGED
============================================================ */

const MEDIA_ITEMS = [
  {
    id: 1,
    title: "Mustard Harvesting in Rajasthan",
    subtitle: "Organic Farm Field Tour",
    type: "Video Tour",
    duration: "2:45 min",
    thumbnail:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    description:
      "Witness our farmer partners harvesting first-grade non-GMO yellow mustard seeds in the arid plains of Rajasthan, sun-dried without chemical sulfur fumigation.",
  },
  {
    id: 2,
    title: "Vaagai Wood Mortar Churning",
    subtitle: "Low RPM Cold Extraction",
    type: "Process Video",
    duration: "3:10 min",
    thumbnail:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80",
    description:
      "See authentic Albizia lebbeck (Vaagai) wood pestles slowly rotating under 14 RPM to extract unrefined golden oil below 40°C.",
  },
  {
    id: 3,
    title: "Traditional Palm Jaggery Boiling",
    subtitle: "Artisan Karupatti Craft",
    type: "Artisan Story",
    duration: "4:05 min",
    thumbnail:
      "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=600&q=80",
    description:
      "Step inside our Tuticorin palmyra grove where master tappers simmer fresh palm neera in iron cauldrons to form mineral-dense solid jaggery blocks.",
  },
  {
    id: 4,
    title: "Sun Resting & Cloth Filtration",
    subtitle: "Zero Chemical Refining",
    type: "Quality Check",
    duration: "1:55 min",
    thumbnail:
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=600&q=80",
    description:
      "How our pure oils naturally rest for 48 hours for sedimentation before passing through a single cotton cloth filter without synthetic bleaching clays.",
  },
];

/* ============================================================
   HOME COMPONENT
============================================================ */

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const [selectedMedia, setSelectedMedia] = useState(null);

  /* ============================================================
     AUTO SLIDER
  ============================================================ */

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [isPaused]);

  /* ============================================================
     LOAD FEATURED PRODUCTS
  ============================================================ */

  useEffect(() => {
    async function loadFeatured() {
      try {
        const data = await productService.getFeaturedProducts();

        setFeaturedProducts(data.slice(0, 5));
      } catch (err) {
        console.error("Error loading featured products", err);
      } finally {
        setLoading(false);
      }
    }

    loadFeatured();
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  const handleNextSlide = () => {
    setCurrentSlide(
      (prev) => (prev + 1) % HERO_SLIDES.length
    );
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + HERO_SLIDES.length) %
        HERO_SLIDES.length
    );
  };

  return (
    <div className="min-h-screen bg-[#F6F8F1] text-[#173B2A]">

      {/* =====================================================
          1. HERO
      ====================================================== */}

      <section
        className="relative overflow-hidden bg-[#E7F0E4] py-8 sm:py-12 lg:py-16"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >

        {/* Decorative circles */}

        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#C69A4B]/10 blur-3xl" />

        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#5D8066]/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* LEFT */}

            <div className="lg:col-span-7">

              <div
                key={slide.id}
                className="space-y-6 transition-opacity duration-500"
              >

                {/* Badge */}

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#DCE6D8] shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#C69A4B]" />

                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#173B2A]">
                    {slide.badge}
                  </span>
                </div>

                {/* Heading */}

                <div>
                  <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold leading-[1.05] tracking-tight text-[#173B2A]">
                    {slide.title}
                  </h1>

                  <h2 className="mt-2 text-3xl sm:text-4xl lg:text-6xl font-serif italic font-normal text-[#B48432]">
                    {slide.titleAccent}
                  </h2>
                </div>

                {/* Description */}

                <p className="max-w-2xl text-sm sm:text-base lg:text-lg leading-7 text-[#496051]">
                  {slide.description}
                </p>

                {/* Trust points */}

                <div className="flex flex-wrap gap-3">

                  <div className="flex items-center gap-2 rounded-full bg-white px-3 py-2 border border-[#DCE6D8] text-xs font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#5D8066]" />
                    Raw & Unrefined
                  </div>

                  <div className="flex items-center gap-2 rounded-full bg-white px-3 py-2 border border-[#DCE6D8] text-xs font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#5D8066]" />
                    Traditional Process
                  </div>

                  <div className="flex items-center gap-2 rounded-full bg-white px-3 py-2 border border-[#DCE6D8] text-xs font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#5D8066]" />
                    Lab Tested
                  </div>

                </div>

                {/* Buttons */}

                <div className="flex flex-col sm:flex-row gap-3 pt-2">

                  <Button
                    to={slide.ctaLink}
                    variant="primary"
                    size="lg"
                    icon={ArrowRight}
                    iconPosition="right"
                    className="w-full sm:w-auto bg-[#173B2A] hover:bg-[#28563E] border-none"
                  >
                    {slide.ctaText}
                  </Button>

                  <Link
                    to="/about"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-[#173B2A]/20 bg-white text-[#173B2A] font-semibold text-sm hover:bg-[#173B2A] hover:text-white transition-all"
                  >
                    Our Extraction Story
                  </Link>

                </div>

                {/* Social proof */}

                <div className="flex items-center gap-4 pt-3">

                  <div className="flex -space-x-2">

                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                      alt="Customer"
                      className="w-9 h-9 rounded-full object-cover border-2 border-[#E7F0E4]"
                    />

                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                      alt="Customer"
                      className="w-9 h-9 rounded-full object-cover border-2 border-[#E7F0E4]"
                    />

                    <img
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80"
                      alt="Customer"
                      className="w-9 h-9 rounded-full object-cover border-2 border-[#E7F0E4]"
                    />

                  </div>

                  <div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3.5 h-3.5 fill-[#C69A4B] text-[#C69A4B]"
                        />
                      ))}
                    </div>

                    <p className="text-xs text-[#496051] mt-1">
                      Loved by 25,000+ Indian households
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* RIGHT IMAGE */}

            <div className="lg:col-span-5">

              <div
                key={slide.id}
                className="relative group"
              >

                {/* Green frame */}

                <div className="absolute inset-3 rounded-[2rem] bg-[#173B2A] rotate-2" />

                <div className="relative overflow-hidden rounded-[2rem] border-8 border-white bg-white shadow-2xl">

                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-[340px] sm:h-[440px] lg:h-[540px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient */}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#173B2A]/80 via-transparent to-transparent" />

                  {/* Navigation */}

                  <button
                    type="button"
                    onClick={handlePrevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 text-[#173B2A] flex items-center justify-center shadow-lg hover:bg-[#173B2A] hover:text-white transition-all"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    type="button"
                    onClick={handleNextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 text-[#173B2A] flex items-center justify-center shadow-lg hover:bg-[#173B2A] hover:text-white transition-all"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Bottom feature */}

                  <div className="absolute bottom-4 left-4 right-4">

                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">

                      <div className="flex items-center justify-between gap-4">

                        <div>
                          <span className="text-[10px] uppercase tracking-widest font-bold text-[#B48432]">
                            Heritage Spotlight
                          </span>

                          <h3 className="font-serif font-bold text-lg text-[#173B2A]">
                            {slide.featureTitle}
                          </h3>

                          <p className="text-xs text-[#496051] mt-1">
                            {slide.featureDesc}
                          </p>
                        </div>

                        <div className="hidden sm:flex w-11 h-11 rounded-xl bg-[#E7F0E4] items-center justify-center text-xl">
                          🌿
                        </div>

                      </div>

                    </div>

                  </div>

                  {/* Counter */}

                  <div className="absolute top-4 right-4 bg-[#173B2A]/90 text-white px-3 py-1.5 rounded-full text-xs font-semibold">
                    {currentSlide + 1} / {HERO_SLIDES.length}
                  </div>

                </div>

                {/* Dots */}

                <div className="flex justify-center gap-2 mt-6">

                  {HERO_SLIDES.map((item, index) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2 rounded-full transition-all ${
                        currentSlide === index
                          ? "w-8 bg-[#173B2A]"
                          : "w-2 bg-[#9CAF9D] hover:bg-[#5D8066]"
                      }`}
                    />
                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          2. CATEGORIES
      ====================================================== */}

      <section className="py-16 bg-[#FFFDF7]">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-10">

            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#B48432]">
              Explore Our Range
            </span>

            <h2 className="mt-2 text-3xl sm:text-4xl font-serif font-bold text-[#173B2A]">
              Shop by Heritage Category
            </h2>

            <p className="mt-3 text-sm text-[#617064] max-w-xl mx-auto">
              Discover traditional Indian ingredients made with honest
              sourcing and time-tested methods.
            </p>

          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">

            {CATEGORIES.map((cat) => (

              <Link
                key={cat.id}
                to={cat.path}
                className="group relative overflow-hidden rounded-3xl bg-[#E7F0E4] border border-[#DCE6D8] p-3 hover:-translate-y-2 transition-all duration-300"
              >

                <div className="relative h-44 sm:h-52 overflow-hidden rounded-2xl">

                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#173B2A]/80 via-transparent to-transparent" />

                  <span className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-lg">
                    {cat.icon}
                  </span>

                  <div className="absolute bottom-4 left-4 right-4">

                    <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                      {cat.name}
                    </h3>

                    <p className="text-xs text-white/80 mt-1">
                      {cat.description}
                    </p>

                  </div>

                </div>

                <div className="flex items-center justify-between px-2 py-3">

                  <span className="text-xs font-bold text-[#173B2A]">
                    Explore Collection
                  </span>

                  <ArrowRight className="w-4 h-4 text-[#B48432] group-hover:translate-x-1 transition-transform" />

                </div>

              </Link>

            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          3. FEATURED PRODUCTS
      ====================================================== */}

      <section className="py-20 bg-[#F0F5EB]">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10">

            <div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#DCE6D8] text-xs font-bold text-[#173B2A]">
                <Sparkles className="w-3.5 h-3.5 text-[#B48432]" />
                Fresh Batches
              </div>

              <h2 className="mt-3 text-3xl sm:text-4xl font-serif font-bold text-[#173B2A]">
                Featured Products
              </h2>

              <p className="mt-2 text-sm text-[#617064] max-w-lg">
                Handcrafted pure oils, organic jaggery, and Vedic A2 ghee.
                Unrefined, honest, and thoughtfully made.
              </p>

            </div>

            <Button
              to="/shop"
              variant="secondary"
              icon={ArrowRight}
              iconPosition="right"
              size="md"
              className="border-[#173B2A]/20 text-[#173B2A]"
            >
              View All Products
            </Button>

          </div>

          {loading ? (
            <LoadingSpinner />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
              {featuredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          )}

        </div>
      </section>

      {/* =====================================================
          4. WHY CHOOSE US
      ====================================================== */}

      <section className="py-20 bg-[#173B2A] text-white relative overflow-hidden">

        <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[#5D8066]/30 blur-3xl" />

        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-[#C69A4B]/20 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-12">

            <span className="text-xs uppercase tracking-[0.2em] text-[#D9B76A] font-bold">
              Our Promise
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl font-serif font-bold">
              Why Choose ShreeKrishna?
            </h2>

            <p className="mt-4 text-sm text-white/70">
              Traditional methods, transparent sourcing and uncompromising
              quality in every bottle.
            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {[
              {
                icon: Layers,
                title: "Vaagai Wood Press",
                text: "Slow extraction below 40°C using traditional wooden pressing.",
              },
              {
                icon: Leaf,
                title: "Single-Origin Seeds",
                text: "Directly sourced from organic farming families.",
              },
              {
                icon: ShieldCheck,
                title: "Zero Chemical Solvents",
                text: "No hexane extraction or synthetic refining.",
              },
              {
                icon: Award,
                title: "Lab-Tested Batches",
                text: "Independent testing for quality and purity.",
              },
            ].map((item) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group bg-white/10 border border-white/10 rounded-3xl p-7 hover:bg-white hover:text-[#173B2A] transition-all duration-300"
                >

                  <div className="w-14 h-14 rounded-2xl bg-[#DCEBD8] text-[#173B2A] flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="font-serif font-bold text-lg">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-white/65 group-hover:text-[#617064]">
                    {item.text}
                  </p>

                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* =====================================================
          5. MEDIA
      ====================================================== */}

      <section className="py-20 bg-[#FFFDF7]">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-10">

            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#B48432]">
              Farm to Table
            </span>

            <h2 className="mt-2 text-3xl sm:text-4xl font-serif font-bold text-[#173B2A]">
              See Where It Begins
            </h2>

            <p className="mt-3 max-w-2xl mx-auto text-sm text-[#617064]">
              Go behind the scenes and discover the farms, people and
              traditional processes behind our products.
            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {MEDIA_ITEMS.map((item) => (

              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedMedia(item)}
                className="text-left group bg-white rounded-3xl overflow-hidden border border-[#DCE6D8] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >

                <div className="relative aspect-[4/3] overflow-hidden">

                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#173B2A]/80 to-transparent" />

                  <span className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-white/95 text-[10px] font-bold uppercase tracking-wider text-[#173B2A]">
                    {item.type}
                  </span>

                  <span className="absolute top-3 right-3 px-2 py-1 rounded-lg bg-black/50 text-white text-[10px]">
                    {item.duration}
                  </span>

                  <div className="absolute inset-0 flex items-center justify-center">

                    <span className="w-14 h-14 rounded-full bg-white text-[#173B2A] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-[#173B2A] ml-1" />
                    </span>

                  </div>

                </div>

                <div className="p-5">

                  <span className="text-[10px] uppercase tracking-wider font-bold text-[#B48432]">
                    {item.subtitle}
                  </span>

                  <h3 className="mt-1 font-serif font-bold text-lg text-[#173B2A]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs text-[#617064] line-clamp-2 leading-5">
                    {item.description}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-xs font-bold text-[#173B2A]">
                    Watch Preview
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>

                </div>

              </button>

            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          6. PRODUCTS IN FOCUS
      ====================================================== */}

      <section className="py-20 bg-[#F0F5EB]">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-10">

            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#B48432]">
              Curated Spotlight
            </span>

            <h2 className="mt-2 text-3xl sm:text-4xl font-serif font-bold text-[#173B2A]">
              Products in Focus
            </h2>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

            {/* LARGE CARD */}

            <div className="lg:col-span-7 relative overflow-hidden rounded-[2rem] bg-[#173B2A] text-white p-7 sm:p-10">

              <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-[#5D8066] opacity-40 blur-3xl" />

              <div className="relative">

                <div className="flex flex-wrap gap-2">

                  <span className="px-3 py-1.5 rounded-full bg-[#C69A4B] text-white text-[10px] font-bold uppercase tracking-wider">
                    ⭐ Best Value Pantry Pack
                  </span>

                  <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold">
                    Save 18%
                  </span>

                </div>

                <h3 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-serif font-bold leading-tight">
                  ShreeKrishna Heritage Trio Oil Combo
                </h3>

                <p className="mt-4 text-sm text-white/70 leading-6">
                  Upgrade your daily kitchen with our 3-in-1 pantry
                  collection: 1L Yellow Mustard Oil, 1L Raw Cold-Pressed
                  Coconut Oil, and 1L Wood-Pressed Groundnut Oil.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-7">

                  {[
                    ["1L Yellow Mustard", "Rajasthan Ghani"],
                    ["1L Virgin Coconut", "Kerala Cold Expeller"],
                    ["1L Native Groundnut", "Saurashtra Kolhu"],
                  ].map(([title, subtitle]) => (

                    <div
                      key={title}
                      className="bg-white/10 border border-white/10 rounded-2xl p-4"
                    >
                      <p className="text-xs font-bold">
                        {title}
                      </p>

                      <p className="text-[10px] text-white/60 mt-1">
                        {subtitle}
                      </p>
                    </div>

                  ))}

                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-5">

                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold">
                        ₹1,149
                      </span>

                      <span className="text-sm text-white/40 line-through">
                        ₹1,400
                      </span>
                    </div>

                    <span className="text-xs text-white/60">
                      Free Express Delivery Included
                    </span>
                  </div>

                  <Link
                    to="/product/shreekrishna-heritage-trio-oil-combo"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-[#173B2A] font-bold text-sm hover:bg-[#E7F0E4] transition-all"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                </div>

              </div>

            </div>

            {/* SMALL CARDS */}

            <div className="lg:col-span-5 grid grid-cols-1 gap-6">

              <div className="rounded-[2rem] bg-white border border-[#DCE6D8] p-6 shadow-sm hover:shadow-xl transition-all">

                <div className="flex gap-5">

                  <div className="flex-1">

                    <span className="text-[10px] uppercase tracking-wider font-bold text-[#B48432]">
                      Pure Mineral Sweetener
                    </span>

                    <h3 className="mt-2 font-serif font-bold text-lg text-[#173B2A]">
                      Organic Palm Jaggery (Karupatti)
                    </h3>

                    <p className="mt-2 text-xs text-[#617064] leading-5">
                      Handcrafted from fresh wild palmyra palm sap.
                    </p>

                  </div>

                  <img
                    src="https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=200&q=80"
                    alt="Palm Jaggery"
                    className="w-20 h-20 rounded-2xl object-cover"
                  />

                </div>

                <div className="mt-5 pt-4 border-t border-[#DCE6D8] flex items-center justify-between">

                  <span className="text-xl font-bold text-[#173B2A]">
                    ₹260
                  </span>

                  <Link
                    to="/product/organic-palm-jaggery-karupatti"
                    className="text-xs font-bold text-[#B48432] flex items-center gap-1"
                  >
                    Shop Jaggery
                    <ArrowRight className="w-3 h-3" />
                  </Link>

                </div>

              </div>

              <div className="rounded-[2rem] bg-white border border-[#DCE6D8] p-6 shadow-sm hover:shadow-xl transition-all">

                <div className="flex gap-5">

                  <div className="flex-1">

                    <span className="text-[10px] uppercase tracking-wider font-bold text-[#B48432]">
                      Ancient Bilona Sanskar
                    </span>

                    <h3 className="mt-2 font-serif font-bold text-lg text-[#173B2A]">
                      Vedic A2 Cultured Gir Cow Ghee
                    </h3>

                    <p className="mt-2 text-xs text-[#617064] leading-5">
                      Hand-churned from curd using traditional wooden bilonas.
                    </p>

                  </div>

                  <img
                    src="https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=200&q=80"
                    alt="Vedic A2 Ghee"
                    className="w-20 h-20 rounded-2xl object-cover"
                  />

                </div>

                <div className="mt-5 pt-4 border-t border-[#DCE6D8] flex items-center justify-between">

                  <span className="text-xl font-bold text-[#173B2A]">
                    ₹980
                  </span>

                  <Link
                    to="/product/vedic-a2-bilona-cow-ghee"
                    className="text-xs font-bold text-[#B48432] flex items-center gap-1"
                  >
                    Shop A2 Ghee
                    <ArrowRight className="w-3 h-3" />
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          7. TESTIMONIALS
      ====================================================== */}

      <section className="py-20 bg-[#FFFDF7]">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-10">

            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#B48432]">
              Verified Customers
            </span>

            <h2 className="mt-2 text-3xl sm:text-4xl font-serif font-bold text-[#173B2A]">
              Loved by Families
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {testimonials.map((t) => (

              <div
                key={t.id}
                className="bg-[#F0F5EB] border border-[#DCE6D8] rounded-3xl p-7 hover:shadow-xl transition-all"
              >

                <div className="flex gap-1 mb-5">

                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#C69A4B] text-[#C69A4B]"
                    />
                  ))}

                </div>

                <p className="text-sm text-[#496051] italic leading-6">
                  "{t.comment}"
                </p>

                <div className="mt-6 pt-5 border-t border-[#DCE6D8] flex items-center gap-3">

                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover"
                  />

                  <div>

                    <h4 className="text-sm font-bold text-[#173B2A]">
                      {t.name}
                    </h4>

                    <p className="text-[11px] text-[#617064]">
                      {t.role}
                    </p>

                    <span className="text-[10px] font-semibold text-[#5D8066]">
                      ✓ Verified Buyer • {t.product}
                    </span>

                  </div>

                </div>

              </div>

            ))}

          </div>

          {/* Stats */}

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">

            {brandStats.map((stat, index) => (

              <div
                key={index}
                className="rounded-2xl bg-[#E7F0E4] border border-[#DCE6D8] p-6 text-center"
              >

                <span className="block text-3xl sm:text-4xl font-serif font-bold text-[#173B2A]">
                  {stat.value}
                </span>

                <span className="text-xs text-[#617064]">
                  {stat.label}
                </span>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          8. FINAL CTA
      ====================================================== */}

      <section className="py-16 sm:py-20 bg-[#F0F5EB]">

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="relative overflow-hidden rounded-[2rem] bg-[#173B2A] px-6 py-12 sm:px-12 lg:px-16 text-center text-white">

            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#5D8066]/40 blur-3xl" />

            <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[#C69A4B]/20 blur-3xl" />

            <div className="relative max-w-3xl mx-auto">

              <span className="text-xs uppercase tracking-[0.2em] text-[#D9B76A] font-bold">
                Experience The Organic Difference
              </span>

              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight">
                Bring pure tradition into your family kitchen.
              </h2>

              <p className="mt-5 text-sm sm:text-base text-white/70 leading-7">
                Switch to authentic wood-pressed oils, pure palm jaggery,
                and Vedic A2 ghee.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">

                <Link
                  to="/shop"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-[#173B2A] font-bold text-sm hover:bg-[#E7F0E4] transition-all"
                >
                  Explore All Products
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl border border-white/30 text-white font-bold text-sm hover:bg-white/10 transition-all"
                >
                  Have Questions? Talk to Us
                </Link>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          9. MEDIA MODAL
      ====================================================== */}

      {selectedMedia && (

        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#07140D]/80 backdrop-blur-sm"
          onClick={() => setSelectedMedia(null)}
        >

          <div
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-[#FFFDF7] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close */}

            <button
              type="button"
              onClick={() => setSelectedMedia(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-[#173B2A] transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image */}

            <div className="relative aspect-video">

              <img
                src={selectedMedia.thumbnail}
                alt={selectedMedia.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-[#173B2A]/50 flex items-center justify-center">

                <div className="w-16 h-16 rounded-full bg-white text-[#173B2A] flex items-center justify-center shadow-2xl">
                  <Play className="w-7 h-7 fill-[#173B2A] ml-1" />
                </div>

              </div>

            </div>

            {/* Content */}

            <div className="p-6 sm:p-8">

              <span className="text-xs uppercase tracking-wider font-bold text-[#B48432]">
                {selectedMedia.subtitle}
              </span>

              <h3 className="mt-2 text-2xl font-serif font-bold text-[#173B2A]">
                {selectedMedia.title}
              </h3>

              <p className="mt-3 text-sm text-[#617064] leading-6">
                {selectedMedia.description}
              </p>

              <div className="mt-6 pt-5 border-t border-[#DCE6D8] flex flex-col sm:flex-row items-center justify-between gap-4">

                <span className="text-xs text-[#617064]">
                  {selectedMedia.type} • {selectedMedia.duration}
                </span>

                <Button
                  to="/about"
                  onClick={() => setSelectedMedia(null)}
                  variant="primary"
                  size="sm"
                  icon={ArrowRight}
                  iconPosition="right"
                  className="bg-[#173B2A]"
                >
                  Our Process
                </Button>

              </div>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}