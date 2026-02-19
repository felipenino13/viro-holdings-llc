"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

const NAV_LINKS = [
  //{ label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Operations & Compliance", href: "/operations-compliance" },
  { label: "Our Platforms & Businesses", href: "/our-platforms-businesses" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "News & Insights", href: "/news-insights" },
  { label: "Contact", href: "/contact" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Cierra el menú al navegar
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Cierra con ESC
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
    <header className="sticky top-0 z-50 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-2 py-3">
        {/* Brand */}
        <Link href="/" className="text-base font-semibold tracking-tight">
          <Image
            src="/images/viro-holdings-white.svg"   // ruta relativa a /public
            alt="Viro Holdings Logo"
            width={180}            // ancho real de la imagen
            height={300}            // alto real de la imagen
          />  
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((item) => {
            const active = isActivePath(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "text-sm transition-colors",
                  active ? "font-semibold text-white" : "text-white hover:text-[#bc9a7b]",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile button */}
        <button
          type="button"
          className="text-white inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm md:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Mobile panel */}
      {open && (
        <div className="border-t bg-white md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-3">
            {NAV_LINKS.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "rounded-md px-3 py-2 text-sm transition-colors",
                    active ? "bg-neutral-100 font-semibold text-black" : "text-neutral-700 hover:bg-neutral-50",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
    </>
    
  );
}
