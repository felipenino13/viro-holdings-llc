import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Viro Holdings LLC | Logistics, Industrial Real Estate & Infrastructure",
  description:
    "Multi-sector holding company operating logistics, industrial real estate, and infrastructure platforms focused on disciplined growth and compliance.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://viroholdingsllc.com/",
    title: "Viro Holdings LLC | Logistics, Industrial Real Estate & Infrastructure",
    description:
      "Multi-sector holding company operating logistics, industrial real estate, and infrastructure platforms focused on disciplined growth and compliance.",
    siteName: "Viro Holdings LLC",
    images: [
      {
        url: "/og-home.jpg", // crea este archivo en /public
        width: 1200,
        height: 630,
        alt: "Viro Holdings LLC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Viro Holdings LLC | Logistics, Industrial Real Estate & Infrastructure",
    description:
      "Multi-sector holding company operating logistics, industrial real estate, and infrastructure platforms focused on disciplined growth and compliance.",
    images: ["/og-home.jpg"],
  },
};

export default function Home() {
  return (
    <>
    <div className="bg-[#0D1323] px-2 py-30 bg-[url(/images/banner-home-01.png)] bg-center bg-cover bg-no-repeat relative text-white">
      {/* Overlay azul oscuro */}
      <div className="absolute inset-0 bg-[#0D1323]/70">
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-3 gap-x-20 py-4 gap-y-5 relative z-10">
        <div className="grid col-span-2 gap-y-5">
          <h1 className="text-5xl">Building High-Performance Platforms for Logistics, Real Estate, and Infrastructure</h1>
          <h2 className="text-1xl">We build and operate disciplined, compliant, and scalable platforms that empower businesses to grow sustainably and operate with confidence.</h2>
          <div className="grid grid-cols-2 gap-5 max-w-sm">
            <Button className="bg-[#BC9A7B] text-black">
              <Link href="#">Schedule a Consultation</Link>
            </Button>
            <Button className="border-white border-solid border">
              <Link href="#">Learn More</Link>
            </Button>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>

    <div className="px-2 py-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-x-20 py-4">
        <h2 className="text-2xl">A Multi-Sector Holding Company Built for Long-Term Execution</h2>
        <p>
          Viro Holdings LLC is a multi-sector holding company focused on building and operating logistics, industrial real estate, and infrastructure platforms.
        </p>
        <p>
          We exist to solve real operational problems, streamline complex systems, and provide the physical and strategic foundation businesses need to scale efficiently and operate compliantly.
        </p>
      </div>
    </div>

    <div className="px-2 py-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-x-20 py-4">
        <h2 className="text-2xl">Our Core Platforms</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3">
          <div>
            <h3 className="text-1xl">Logistics & Freight</h3>
            <p>
              We operate logistics and freight platforms designed to support domestic and international trade, enabling efficient movement of goods through disciplined systems and operational clarity.
            </p>
          </div>
          <div>
            <h3 className="text-1xl">Industrial Real Estate</h3>
            <p>
              We develop and manage industrial real estate assets built for long-term performance, supporting tenants with reliable infrastructure, compliance, and scalable facilities.
            </p>
          </div>
          <div>
            <h3 className="text-1xl">Infrastructure & Operations</h3>
            <p>
              We provide operational and infrastructure solutions that support growth, risk management, and regulatory discipline across complex business environments.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="px-2 py-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-x-20 py-4">
        <h2 className="text-2xl">Why Viro Holdings</h2>
        <ul>
          <li>Disciplined, system-driven operations</li>
          <li>Long-term ownership mindset</li>
          <li>Institutional-grade compliance and risk management</li>
          <li>Clear structures, documentation, and accountability</li>
          <li>Built to scale across markets and industries</li>
        </ul>
      </div>
    </div>

    <div className="px-2 py-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-x-20 py-4">
        <h2 className="text-2xl">Our Operating Principles</h2>
        <ul>
          <li>Operational Excellence Is Non-Negotiable</li>
          <li>Long-Term Thinking Over Short-Term Wins</li>
          <li>Accountability at Every Level</li>
          <li>Compliance Is a Competitive Advantage</li>
          <li>Partnerships, Not Just Transactions</li>
        </ul>
      </div>
    </div>

    <div className="px-2 py-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-x-20 py-4">
        <h2 className="text-2xl">Built for Long-Term Partnerships</h2>
        <p>
          We work with tenants, operators, and partners who value clarity, discipline, and long-term alignment.
        </p>
        <p>
          Viro Holdings is a long-term operator focused on building durable platforms—not short-term transactions.
        </p>
      </div>
    </div>
    
    <div className="px-2 py-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-x-20 py-4">
        <h2 className="text-2xl">Built for Long-Term Partnerships</h2>
        <a href="">Contact Us</a>
        <a href="">Schedule a Consultation</a>
      </div>
    </div>
    </>
  );
}
