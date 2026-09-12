import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Award,
  Heart,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  X,
  Truck,
  FileText,
  Leaf,
  Sparkles,
} from "lucide-react";

import { useToast } from "../context/ToastContext";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [helpModalOpen, setHelpModalOpen] = useState(false);

  const { addToast } = useToast();

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (email && email.includes("@")) {
      setSubscribed(true);
      addToast(
        "Thank you for subscribing to ShreeKrishna Organics newsletter!"
      );
      setEmail("");
    }
  };

  const services = [
    {
      icon: Truck,
      title: "Home Delivery",
      link: "/shop",
    },
    {
      icon: Heart,
      title: "Bulk Orders & Gifting",
      link: "/contact",
    },
    {
      icon: CheckCircle2,
      title: "Track Order Status",
      link: "/orders",
    },
    {
      icon: Leaf,
      title: "Custom Wood-Pressing",
      link: "/about#extraction",
    },
    {
      icon: Award,
      title: "Farmer Collective Program",
      link: "/about#farmers",
    },
  ];

  const policies = [
    {
      title: "Privacy Policy",
      link: "/contact",
    },
    {
      title: "Returns & Refunds",
      link: "/contact",
    },
    {
      title: "Terms of Use",
      link: "/contact",
    },
    {
      title: "Shipping & Delivery Terms",
      link: "/contact",
    },
    {
      title: "Lab Certification Standards",
      link: "/about",
    },
  ];

  return (
    <>
      {/* =========================
          FOOTER
      ========================== */}
      <footer className="bg-[#F4EFE4] text-[#2F3A2F] border-t border-[#DED8C8]">

        {/* =========================
            TRUST FEATURES
        ========================== */}
        <div className="border-b border-[#DED8C8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

              {/* Card 1 */}
              <div className="bg-[#FBF9F2] border border-[#DED8C8] rounded-2xl p-5 flex items-start gap-4 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-[#E7EBDD] flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-[#3F5F45]" />
                </div>

                <div>
                  <h3 className="font-bold text-[#2F4935]">
                    100% Authentic
                  </h3>

                  <p className="text-sm text-[#687064] mt-1 leading-5">
                    Pure ingredients with no adulteration.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#FBF9F2] border border-[#DED8C8] rounded-2xl p-5 flex items-start gap-4 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-[#E7EBDD] flex items-center justify-center">
                  <Award className="w-6 h-6 text-[#3F5F45]" />
                </div>

                <div>
                  <h3 className="font-bold text-[#2F4935]">
                    Lab Tested
                  </h3>

                  <p className="text-sm text-[#687064] mt-1 leading-5">
                    Independently tested for quality.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-[#FBF9F2] border border-[#DED8C8] rounded-2xl p-5 flex items-start gap-4 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-[#E7EBDD] flex items-center justify-center">
                  <Heart className="w-6 h-6 text-[#3F5F45]" />
                </div>

                <div>
                  <h3 className="font-bold text-[#2F4935]">
                    Made With Care
                  </h3>

                  <p className="text-sm text-[#687064] mt-1 leading-5">
                    Traditional methods, modern hygiene.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-[#FBF9F2] border border-[#DED8C8] rounded-2xl p-5 flex items-start gap-4 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-[#E7EBDD] flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-[#3F5F45]" />
                </div>

                <div>
                  <h3 className="font-bold text-[#2F4935]">
                    Natural Products
                  </h3>

                  <p className="text-sm text-[#687064] mt-1 leading-5">
                    Traditional and minimally processed.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* =========================
            MAIN FOOTER
        ========================== */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* =========================
                BRAND SECTION
            ========================== */}
            <div className="lg:col-span-4">

              <div className="flex items-center gap-3">

                <div className="w-12 h-12 rounded-2xl bg-[#3F5F45] flex items-center justify-center shadow-sm">
                  <Leaf className="w-6 h-6 text-white" />
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#2F4935]">
                    ShreeKrishna
                  </h2>

                  <p className="text-sm font-semibold text-[#718355]">
                    Organics Pvt Ltd
                  </p>
                </div>

              </div>

              <p className="mt-6 text-sm leading-7 text-[#687064] max-w-md">
                Reviving India's traditional cold & wood-pressing
                (Ghani / Marachekku) heritage. We deliver unrefined
                edible oils, organic palm jaggery, and Vedic A2 ghee
                to conscious kitchens.
              </p>

              {/* Tagline */}
              <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E7EBDD] text-[#3F5F45] text-sm font-semibold">
                <Sparkles className="w-4 h-4" />
                Pure Tradition, Naturally
              </div>

              {/* =========================
                  CONTACT INFO
              ========================== */}
              <div className="mt-7 space-y-4">

                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="mt-0.5">
                    <MapPin className="w-5 h-5 text-[#718355]" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#2F4935]">
                      ShreeKrishna Organics Pvt Ltd
                    </p>

                    <p className="text-sm text-[#687064] mt-1">
                      Karad, Maharashtra-415110
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">

                  <Phone className="w-5 h-5 text-[#718355] mt-0.5" />

                  <div>
                    <a
                      href="tel:+919876543210"
                      className="text-sm font-semibold text-[#2F4935] hover:text-[#718355] transition-colors"
                    >
                      +91 98765 43210
                    </a>

                    <p className="text-xs text-[#687064] mt-1">
                      Mon – Sat, 9am – 7pm
                    </p>
                  </div>

                </div>

                {/* Email */}
                <div className="flex items-start gap-3">

                  <Mail className="w-5 h-5 text-[#718355] mt-0.5" />

                  <div>
                    <a
                      href="mailto:care@shreekrishnaorganics.com"
                      className="text-sm font-semibold text-[#2F4935] hover:text-[#718355] transition-colors break-all"
                    >
                      care@shreekrishnaorganics.com
                    </a>

                    <p className="text-xs text-[#687064] mt-1">
                      Customer support
                    </p>
                  </div>

                </div>

              </div>

              {/* =========================
                  SOCIAL MEDIA
              ========================== */}
              <div className="flex items-center gap-2 mt-7">

                {/* Instagram */}
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-xl bg-[#FBF9F2] border border-[#DED8C8] flex items-center justify-center text-[#3F5F45] hover:bg-[#3F5F45] hover:text-white hover:border-[#3F5F45] transition-all"
                >
                  <span className="text-xs font-bold">
                    IG
                  </span>
                </a>

                {/* Facebook */}
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-xl bg-[#FBF9F2] border border-[#DED8C8] flex items-center justify-center text-[#3F5F45] hover:bg-[#3F5F45] hover:text-white hover:border-[#3F5F45] transition-all"
                >
                  <span className="text-xs font-bold">
                    FB
                  </span>
                </a>

                {/* YouTube */}
                <a
                  href="#"
                  aria-label="YouTube"
                  className="w-10 h-10 rounded-xl bg-[#FBF9F2] border border-[#DED8C8] flex items-center justify-center text-[#3F5F45] hover:bg-[#3F5F45] hover:text-white hover:border-[#3F5F45] transition-all"
                >
                  <span className="text-xs font-bold">
                    YT
                  </span>
                </a>

              </div>

            </div>

            {/* =========================
                SERVICES
            ========================== */}
            <div className="lg:col-span-2">

              <h3 className="text-base font-bold text-[#2F4935] mb-5">
                Services
              </h3>

              <div className="space-y-3.5">

                {services.map((service) => {
                  const Icon = service.icon;

                  return (
                    <Link
                      key={service.title}
                      to={service.link}
                      className="group flex items-start gap-2.5 text-sm text-[#687064] hover:text-[#3F5F45] transition-colors"
                    >
                      <Icon className="w-4 h-4 mt-0.5 shrink-0 group-hover:translate-x-0.5 transition-transform" />

                      <span>
                        {service.title}
                      </span>
                    </Link>
                  );
                })}

              </div>

            </div>

            {/* =========================
                POLICIES
            ========================== */}
            <div className="lg:col-span-2">

              <h3 className="text-base font-bold text-[#2F4935] mb-5">
                Policies
              </h3>

              <div className="space-y-3.5">

                {policies.map((policy) => (
                  <Link
                    key={policy.title}
                    to={policy.link}
                    className="group flex items-start gap-2 text-sm text-[#687064] hover:text-[#3F5F45] transition-colors"
                  >
                    <FileText className="w-4 h-4 mt-0.5 shrink-0 group-hover:translate-x-0.5 transition-transform" />

                    <span>
                      {policy.title}
                    </span>
                  </Link>
                ))}

              </div>

            </div>

            {/* =========================
                SUPPORT + NEWSLETTER
            ========================== */}
            <div className="lg:col-span-4">

              {/* Support Card */}
              <div className="bg-[#2F4935] rounded-2xl p-6 text-white shadow-sm">

                <div className="flex items-start gap-4">

                  <div className="w-11 h-11 shrink-0 rounded-xl bg-white/10 flex items-center justify-center">
                    <HelpCircle className="w-6 h-6 text-white" />
                  </div>

                  <div>
                    <h3 className="font-bold text-lg">
                      Need Help?
                    </h3>

                    <p className="text-sm text-white/75 mt-1 leading-6">
                      Questions about cold-pressing techniques,
                      batch reports, shipping or your order?
                    </p>
                  </div>

                </div>

                <button
                  type="button"
                  onClick={() => setHelpModalOpen(true)}
                  className="mt-5 w-full flex items-center justify-center gap-2 bg-white text-[#2F4935] hover:bg-[#F4EFE4] font-bold text-sm rounded-xl px-4 py-3 transition-all"
                >
                  Visit Help Desk
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>

              {/* Newsletter */}
              <div className="mt-7">

                <div className="flex items-center gap-2 mb-2">

                  <Sparkles className="w-5 h-5 text-[#B68A3A]" />

                  <h3 className="text-base font-bold text-[#2F4935]">
                    Join our Heritage Newsletter
                  </h3>

                </div>

                <p className="text-sm text-[#687064] leading-6">
                  Get traditional wellness tips, product stories,
                  farmer updates and exclusive offers.
                </p>

                {!subscribed ? (
                  <form
                    onSubmit={handleSubscribe}
                    className="mt-4"
                  >

                    <div className="flex flex-col sm:flex-row gap-2">

                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="w-full sm:flex-1 min-w-0 rounded-xl border border-[#DED8C8] bg-[#FBF9F2] px-4 py-3 text-sm text-[#2F3A2F] outline-none focus:border-[#718355] focus:ring-2 focus:ring-[#718355]/20"
                      />

                      <button
                        type="submit"
                        className="shrink-0 rounded-xl bg-[#3F5F45] text-white px-5 py-3 text-sm font-bold hover:bg-[#2F4935] transition-all flex items-center justify-center gap-2"
                      >
                        Subscribe
                        <ArrowRight className="w-4 h-4" />
                      </button>

                    </div>

                  </form>
                ) : (
                  <div className="mt-4 rounded-xl bg-[#E7EBDD] border border-[#D5DEC9] px-4 py-3 text-sm font-semibold text-[#3F5F45] flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    Thank you for joining our community!
                  </div>
                )}

              </div>

            </div>

          </div>

        </div>

        {/* =========================
            BOTTOM BAR
        ========================== */}
        <div className="border-t border-[#DED8C8]">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

            <div className="flex flex-col lg:flex-row items-center justify-between gap-5">

              {/* Copyright */}
              <div className="text-center lg:text-left">

                <p className="text-sm text-[#687064]">
                  © 2026 ShreeKrishna Organics Pvt Ltd.
                </p>

                <p className="text-xs text-[#8A9186] mt-1">
                  Pure Tradition, Naturally.
                </p>

              </div>

              {/* Certifications */}
              <div className="flex flex-wrap justify-center items-center gap-3">

                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#FBF9F2] border border-[#DED8C8] text-xs font-semibold text-[#3F5F45]">
                  <ShieldCheck className="w-4 h-4" />
                  FSSAI Lic. No: 10020042000123
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#FBF9F2] border border-[#DED8C8] text-xs font-semibold text-[#3F5F45]">
                  <CheckCircle2 className="w-4 h-4" />
                  100% Certified Organic
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#FBF9F2] border border-[#DED8C8] text-xs font-semibold text-[#3F5F45]">
                  <Heart className="w-4 h-4" />
                  Made in Bharat
                </div>

              </div>

            </div>

          </div>

        </div>

      </footer>

      {/* =========================
          HELP MODAL
      ========================== */}
      {helpModalOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setHelpModalOpen(false)}
        >

          <div
            className="w-full max-w-lg bg-[#FBF9F2] rounded-3xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Modal Header */}
            <div className="bg-[#2F4935] text-white px-6 py-5 flex items-center justify-between">

              <div>
                <h2 className="text-xl font-bold">
                  ShreeKrishna Help Desk
                </h2>

                <p className="text-sm text-white/70 mt-1">
                  Fast assistance for all your queries
                </p>
              </div>

              <button
                type="button"
                onClick={() => setHelpModalOpen(false)}
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
                aria-label="Close help desk"
              >
                <X className="w-5 h-5" />
              </button>

            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-4">

              {/* Phone */}
              <div className="rounded-2xl border border-[#DED8C8] bg-white/60 p-4 flex items-start gap-4">

                <div className="w-11 h-11 rounded-xl bg-[#E7EBDD] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#3F5F45]" />
                </div>

                <div>
                  <p className="font-bold text-[#2F4935]">
                    Call Us
                  </p>

                  <a
                    href="tel:+919876543210"
                    className="text-sm text-[#687064] hover:text-[#3F5F45] transition-colors"
                  >
                    +91 98765 43210
                  </a>

                  <p className="text-xs text-[#8A9186] mt-1">
                    Mon–Sat, 9am–7pm
                  </p>
                </div>

              </div>

              {/* Track Order */}
              <div className="rounded-2xl border border-[#DED8C8] bg-white/60 p-4 flex items-start gap-4">

                <div className="w-11 h-11 rounded-xl bg-[#E7EBDD] flex items-center justify-center shrink-0">
                  <Truck className="w-5 h-5 text-[#3F5F45]" />
                </div>

                <div className="flex-1">

                  <p className="font-bold text-[#2F4935]">
                    Track Your Order
                  </p>

                  <p className="text-sm text-[#687064] mt-1">
                    Check the latest status of your order.
                  </p>

                  <Link
                    to="/orders"
                    onClick={() => setHelpModalOpen(false)}
                    className="inline-flex items-center gap-1.5 mt-2 text-sm font-bold text-[#3F5F45] hover:text-[#718355]"
                  >
                    Track Order
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                </div>

              </div>

              {/* Email */}
              <div className="rounded-2xl border border-[#DED8C8] bg-white/60 p-4 flex items-start gap-4">

                <div className="w-11 h-11 rounded-xl bg-[#E7EBDD] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#3F5F45]" />
                </div>

                <div>

                  <p className="font-bold text-[#2F4935]">
                    Email Support
                  </p>

                  <a
                    href="mailto:care@shreekrishnaorganics.com"
                    className="text-sm text-[#687064] hover:text-[#3F5F45] transition-colors break-all"
                  >
                    care@shreekrishnaorganics.com
                  </a>

                  <p className="text-xs text-[#8A9186] mt-1">
                    We usually respond within one business day.
                  </p>

                </div>

              </div>

              {/* Contact */}
              <div className="pt-2">

                <Link
                  to="/contact"
                  onClick={() => setHelpModalOpen(false)}
                  className="w-full rounded-xl bg-[#3F5F45] hover:bg-[#2F4935] text-white font-bold py-3.5 px-5 flex items-center justify-center gap-2 transition-all"
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4" />
                </Link>

              </div>

            </div>

          </div>

        </div>
      )}
    </>
  );
};

export default Footer;