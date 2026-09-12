import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  ShoppingBag,
  User,
  Menu,
  X,
  Search,
  ChevronDown,
  Package,
  LogOut,
  Phone,
  Leaf,
  ArrowRight,
} from "lucide-react";

import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { totalItems, subtotal } = useCart();
  const { user, isAuthenticated, logout } = useAuth();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  const navigate = useNavigate();

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Products",
      path: "/shop",
    },
    {
      name: "About Us",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  // =====================================================
  // SEARCH
  // =====================================================

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    const searchText = searchQuery.trim();

    if (searchText) {
      const params = new URLSearchParams();
      params.set("search", searchText);

      navigate("/shop?" + params.toString());

      setSearchQuery("");
      setSearchOpen(false);
      setMobileMenuOpen(false);
    }
  };

  // =====================================================
  // LOGOUT
  // =====================================================

  const handleLogout = () => {
    logout();

    setUserDropdownOpen(false);
    setMobileMenuOpen(false);

    navigate("/");
  };

  // =====================================================
  // CLOSE MOBILE MENU
  // =====================================================

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* =====================================================
          TOP ANNOUNCEMENT BAR
      ====================================================== */}

      <div className="bg-[#173b2a] text-white">
        <div className="mx-auto flex min-h-[34px] max-w-7xl items-center justify-center px-4 text-center">
          <p className="text-[11px] font-medium tracking-wide sm:text-xs">
            🌿 Pure. Natural. Organic. &nbsp; | &nbsp; Free delivery on orders
            above ₹999
          </p>
        </div>
      </div>

      {/* =====================================================
          MAIN NAVBAR
          
      ====================================================== */}

      <header className="sticky top-0 z-40 border-b border-[#d8e5d7] bg-[#edf4ed]/95 shadow-sm backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-3 sm:px-5 lg:px-8">
          <div className="flex h-[72px] items-center justify-between gap-2 sm:h-20">

            {/* =================================================
                MOBILE MENU BUTTON
            ================================================= */}

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[#173b2a] transition hover:bg-[#dcebdc] lg:hidden"
              aria-label="Open menu"
            >
              <Menu size={23} />
            </button>

            {/* =================================================
                LOGO
            ================================================= */}

            <Link
              to="/"
              onClick={closeMobileMenu}
              className="group flex min-w-0 items-center gap-2 sm:gap-3"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#173b2a] shadow-sm sm:h-12 sm:w-12">
                <Leaf
                  size={21}
                  className="text-[#d8b76a] sm:h-6 sm:w-6"
                  strokeWidth={1.8}
                />
              </div>

              <div className="min-w-0">
                <h1 className="truncate text-[15px] font-bold leading-tight tracking-wide text-[#173b2a] sm:text-lg">
                  ShreeKrishna
                </h1>

                <p className="hidden text-[9px] font-medium uppercase tracking-[0.22em] text-[#a47b30] sm:block sm:text-[10px]">
                  Organics
                </p>
              </div>
            </Link>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================= */}

            <nav className="hidden items-center gap-7 lg:flex xl:gap-9">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) =>
                    [
                      "relative rounded-full px-3 py-2 text-sm font-medium transition-all",
                      isActive
                        ? "bg-[#dcebdc] text-[#173b2a]"
                        : "text-[#4f5c51] hover:bg-[#dcebdc] hover:text-[#173b2a]",
                    ].join(" ")
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}

                      {isActive && (
                        <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#b88a3b]" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* =================================================
                RIGHT ACTIONS
            ================================================= */}

            <div className="flex shrink-0 items-center gap-1 sm:gap-2">

              {/* SEARCH */}

              <div className="relative">
                <button
                  type="button"
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-[#173b2a] transition hover:bg-[#dcebdc]"
                  aria-label="Search"
                >
                  <Search size={20} />
                </button>

                {/* Desktop Search */}

                {searchOpen && (
                  <div className="absolute right-0 top-12 z-50 hidden w-[320px] rounded-2xl border border-[#d8e5d7] bg-white p-3 shadow-xl sm:block">
                    <form
                      onSubmit={handleSearchSubmit}
                      className="flex items-center gap-2"
                    >
                      <div className="relative flex-1">
                        <Search
                          size={17}
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        />

                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search products..."
                          autoFocus
                          className="h-11 w-full rounded-xl border border-[#d8e5d7] bg-[#f8fbf7] pl-10 pr-3 text-sm outline-none transition focus:border-[#6f936f] focus:ring-2 focus:ring-[#dce9dc]"
                        />
                      </div>

                      <button
                        type="submit"
                        className="flex h-11 shrink-0 items-center justify-center rounded-xl bg-[#173b2a] px-4 text-sm font-semibold text-white transition hover:bg-[#24573e]"
                      >
                        Search
                      </button>
                    </form>
                  </div>
                )}
              </div>

              {/* DESKTOP USER */}

              {isAuthenticated ? (
                <div className="relative hidden lg:block">
                  <button
                    type="button"
                    onClick={() =>
                      setUserDropdownOpen(!userDropdownOpen)
                    }
                    className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-[#173b2a] transition hover:bg-[#dcebdc]"
                  >
                    <User size={19} />

                    <span className="max-w-[90px] truncate">
                      {user?.name || "Account"}
                    </span>

                    <ChevronDown
                      size={15}
                      className={`transition-transform ${
                        userDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* USER DROPDOWN */}

                  {userDropdownOpen && (
                    <div className="absolute right-0 top-12 z-50 w-56 overflow-hidden rounded-2xl border border-[#d8e5d7] bg-white shadow-xl">

                      <div className="border-b border-[#e1e9df] bg-[#edf4ed] px-4 py-3">
                        <p className="text-xs text-gray-500">
                          Signed in as
                        </p>

                        <p className="mt-1 truncate text-sm font-semibold text-[#173b2a]">
                          {user?.name || "User"}
                        </p>

                        {user?.email && (
                          <p className="mt-0.5 truncate text-xs text-gray-500">
                            {user.email}
                          </p>
                        )}
                      </div>

                      <Link
                        to="/orders"
                        onClick={() => setUserDropdownOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 transition hover:bg-[#f1f7ef]"
                      >
                        <Package
                          size={18}
                          className="text-[#4f795b]"
                        />
                        My Orders
                      </Link>

                      <Link
                        to="/account"
                        onClick={() => setUserDropdownOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 transition hover:bg-[#f1f7ef]"
                      >
                        <User
                          size={18}
                          className="text-[#4f795b]"
                        />
                        My Account
                      </Link>

                      <button
                        type="button"
                        onClick={handleLogout}
                        className="flex w-full items-center gap-3 border-t border-[#e1e9df] px-4 py-3 text-left text-sm text-red-600 transition hover:bg-red-50"
                      >
                        <LogOut size={18} />
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to="/login"
                  className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-[#173b2a] transition hover:bg-[#dcebdc] sm:flex"
                >
                  <User size={19} />
                  <span>Sign In</span>
                </Link>
              )}

              {/* MOBILE USER */}

              <Link
                to={isAuthenticated ? "/account" : "/login"}
                className="flex h-10 w-10 items-center justify-center rounded-full text-[#173b2a] transition hover:bg-[#dcebdc] sm:hidden"
                aria-label={
                  isAuthenticated ? "Account" : "Sign in"
                }
              >
                <User size={20} />
              </Link>

              {/* CART */}

              <Link
                to="/cart"
                className="group relative flex h-10 w-10 items-center justify-center rounded-full text-[#173b2a] transition hover:bg-[#dcebdc]"
                aria-label="Shopping cart"
              >
                <ShoppingBag
                  size={21}
                  className="transition group-hover:scale-105"
                />

                {totalItems > 0 && (
                  <span className="absolute -right-0.5 -top-0.5 flex h-[19px] min-w-[19px] items-center justify-center rounded-full bg-[#b88a3b] px-1 text-[10px] font-bold text-white ring-2 ring-[#edf4ed]">
                    {totalItems > 99 ? "99+" : totalItems}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* =====================================================
          MOBILE SEARCH
      ====================================================== */}

      {searchOpen && (
        <div className="fixed inset-x-0 top-[106px] z-30 border-b border-[#d8e5d7] bg-[#edf4ed] p-3 shadow-md sm:hidden">
          <form
            onSubmit={handleSearchSubmit}
            className="mx-auto flex max-w-xl items-center gap-2"
          >
            <div className="relative flex-1">
              <Search
                size={17}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                autoFocus
                className="h-11 w-full rounded-xl border border-[#d8e5d7] bg-white pl-10 pr-3 text-sm outline-none focus:border-[#6f936f] focus:ring-2 focus:ring-[#dce9dc]"
              />
            </div>

            <button
              type="submit"
              className="h-11 rounded-xl bg-[#173b2a] px-4 text-sm font-semibold text-white"
            >
              Search
            </button>
          </form>
        </div>
      )}

      {/* =====================================================
          MOBILE DRAWER
          
      ====================================================== */}

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">

          {/* OVERLAY */}

          <button
            type="button"
            aria-label="Close menu"
            onClick={closeMobileMenu}
            className="absolute inset-0 h-full w-full cursor-default bg-black/40 backdrop-blur-[2px]"
          />

          {/* DRAWER */}

          <aside className="absolute left-0 top-0 flex h-full w-[88%] max-w-[390px] flex-col bg-[#f1f7ef] shadow-2xl">

            {/* =================================================
                DRAWER HEADER
            ================================================= */}

            <div className="flex h-[76px] shrink-0 items-center justify-between border-b border-[#d8e5d7] bg-[#edf4ed] px-5">

              <Link
                to="/"
                onClick={closeMobileMenu}
                className="flex items-center gap-3"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#173b2a]">
                  <Leaf
                    size={23}
                    className="text-[#d8b76a]"
                    strokeWidth={1.8}
                  />
                </div>

                <div>
                  <p className="text-base font-bold leading-none text-[#173b2a]">
                    ShreeKrishna
                  </p>

                  <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#a47b30]">
                    Organics
                  </p>
                </div>
              </Link>

              <button
                type="button"
                onClick={closeMobileMenu}
                className="flex h-10 w-10 items-center justify-center rounded-full text-[#173b2a] transition hover:bg-[#dcebdc]"
                aria-label="Close menu"
              >
                <X size={23} />
              </button>
            </div>

            {/* =================================================
                DRAWER CONTENT
            ================================================= */}

            <div className="flex-1 overflow-y-auto px-5 py-5">

              {/* MOBILE SEARCH */}

              <form
                onSubmit={handleSearchSubmit}
                className="mb-6 flex items-center gap-2"
              >
                <div className="relative flex-1">
                  <Search
                    size={17}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) =>
                      setSearchQuery(e.target.value)
                    }
                    placeholder="Search products..."
                    className="h-11 w-full rounded-xl border border-[#d8e5d7] bg-white pl-10 pr-3 text-sm outline-none focus:border-[#6f936f] focus:ring-2 focus:ring-[#dce9dc]"
                  />
                </div>

                <button
                  type="submit"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#173b2a] text-white"
                  aria-label="Search"
                >
                  <Search size={18} />
                </button>
              </form>

              {/* MENU TITLE */}

              <p className="mb-2 px-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#a47b30]">
                Menu
              </p>

              {/* NAVIGATION */}

              <nav className="space-y-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.path === "/"}
                    onClick={closeMobileMenu}
                    className={({ isActive }) =>
                      [
                        "flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-medium transition",
                        isActive
                          ? "bg-[#dcebdc] text-[#173b2a] shadow-sm"
                          : "text-[#454c45] hover:bg-[#e5efe3]",
                      ].join(" ")
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span>{link.name}</span>

                        {isActive && (
                          <span className="h-2 w-2 rounded-full bg-[#b88a3b]" />
                        )}
                      </>
                    )}
                  </NavLink>
                ))}
              </nav>

              {/* =================================================
                  QUICK LINKS
              ================================================= */}

              <div className="mt-6 border-t border-[#d8e5d7] pt-5">

                <p className="mb-2 px-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#a47b30]">
                  Quick Links
                </p>

                {isAuthenticated && (
                  <Link
                    to="/orders"
                    onClick={closeMobileMenu}
                    className="flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-medium text-[#454c45] transition hover:bg-[#e5efe3]"
                  >
                    <span className="flex items-center gap-3">
                      <Package
                        size={19}
                        className="text-[#4f795b]"
                      />
                      My Orders
                    </span>

                    <ArrowRight
                      size={17}
                      className="text-gray-400"
                    />
                  </Link>
                )}

                <Link
                  to="/cart"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-medium text-[#454c45] transition hover:bg-[#e5efe3]"
                >
                  <span className="flex items-center gap-3">
                    <ShoppingBag
                      size={19}
                      className="text-[#4f795b]"
                    />
                    Shopping Cart
                  </span>

                  <span className="flex items-center gap-2">
                    {totalItems > 0 && (
                      <span className="rounded-full bg-[#b88a3b] px-2 py-0.5 text-[10px] font-bold text-white">
                        {totalItems}
                      </span>
                    )}

                    <ArrowRight
                      size={17}
                      className="text-gray-400"
                    />
                  </span>
                </Link>

                <Link
                  to="/contact"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-medium text-[#454c45] transition hover:bg-[#e5efe3]"
                >
                  <span className="flex items-center gap-3">
                    <Phone
                      size={19}
                      className="text-[#4f795b]"
                    />
                    Contact Us
                  </span>

                  <ArrowRight
                    size={17}
                    className="text-gray-400"
                  />
                </Link>
              </div>

              {/* =================================================
                  ORGANIC CARD
              ================================================= */}

              <div className="mt-6 overflow-hidden rounded-2xl bg-[#173b2a] p-5 text-white">

                <div className="flex items-start gap-3">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Leaf
                      size={20}
                      className="text-[#d8b76a]"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      Naturally better
                    </p>

                    <p className="mt-1 text-xs leading-5 text-white/70">
                      Organic products carefully selected for
                      your everyday wellness.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                DRAWER FOOTER
            ================================================= */}

            <div className="shrink-0 border-t border-[#d8e5d7] bg-[#e8f1e6] p-5">

              {isAuthenticated ? (
                <div>

                  <div className="mb-3 flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d1e3d0] text-[#173b2a]">
                      <User size={19} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-[#173b2a]">
                        {user?.name || "My Account"}
                      </p>

                      {user?.email && (
                        <p className="truncate text-xs text-gray-500">
                          {user.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleLogout}
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-red-200 bg-white py-3 text-sm font-semibold text-red-600 transition hover:bg-red-50"
                  >
                    <LogOut size={17} />
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  onClick={closeMobileMenu}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#173b2a] py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#24573e]"
                >
                  <User size={18} />
                  Sign In / Register
                </Link>
              )}

              {/* CART SUMMARY */}

              {totalItems > 0 && (
                <div className="mt-3 flex items-center justify-between rounded-xl bg-white px-4 py-3">

                  <div>
                    <p className="text-xs text-gray-500">
                      Cart total
                    </p>

                    <p className="text-sm font-bold text-[#173b2a]">
                      ₹
                      {Number(subtotal || 0).toLocaleString(
                        "en-IN"
                      )}
                    </p>
                  </div>

                  <Link
                    to="/cart"
                    onClick={closeMobileMenu}
                    className="text-xs font-semibold text-[#a47b30]"
                  >
                    View cart →
                  </Link>
                </div>
              )}
            </div>
          </aside>
        </div>
      )}
    </>
  );
}

export default Navbar;