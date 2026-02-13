import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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
        url: "/images/home-03.png", // crea este archivo en /public
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
    images: ["/images/home-03.png"],
  },
};

export default function Home() {
  return (
    <>
    <div className="bg-[#0D1323] px-2 pb-30 bg-[url(/images/viroholdings-background-02.jpg)] bg-center bg-cover bg-no-repeat relative text-white">
      {/* Overlay azul oscuro */}
      

      <div className="max-w-5xl mx-auto grid grid-col-1 sm:grid-cols-8 gap-x-20 py-4 gap-y-5 relative z-10">
        <div className="grid col-span-4 col-start-1 sm:col-start-3 gap-y-5 py-30">
          <h1 className="text-4xl text-center">Viro Holdings LLC</h1>
          <h2 className="text-1xl text-center">Strategic investment and advisory for sustainable business growth</h2>
          <div className="grid grid-cols-2 gap-5 max-w-sm m-auto">
            <Button className="bg-[#BC9A7B] text-black hover:bg-[#BC9A7B]">
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
            <Button className="border-white border-solid border">
              <Link href="/about-us">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>

    <div className="px-2 py-10">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-20 py-4">
        <div className="content-center grid gap-3">
          <h2 className="text-2xl">Building High-Performance Platforms for Logistics, Real Estate, and Infrastructure</h2>
          <p>
            We build and operate disciplined, compliant, and scalable platforms that empower businesses to grow sustainably and operate with confidence.
          </p>
        </div>
        <div>
            <Image
              src="/images/home-01.png"   // ruta relativa a /public
              alt="Viro Holdings image"
              width={600}            // ancho real de la imagen
              height={300}            // alto real de la imagen
            />  
        </div>
        
      </div>
    </div>

    <div className="px-2 py-10 bg-[#F4F4F4]">
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-x-20 py-4 gap-10">
        <h2 className="text-2xl text-center">Our Core Platforms</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          <div className="grid gap-2 bg-[#0a132d] text-white p-8">
            <h3 className="text-xl text-[#E4D3B9]">Logistics & Freight</h3>
            <p>
              We operate logistics and freight platforms designed to support domestic and international trade, enabling efficient movement of goods through disciplined systems and operational clarity.
            </p>
          </div>
          <div className="grid gap-2 bg-[#0a132d] text-white p-8">
            <h3 className="text-xl text-[#E4D3B9]">Industrial Real Estate</h3>
            <p>
              We develop and manage industrial real estate assets built for long-term performance, supporting tenants with reliable infrastructure, compliance, and scalable facilities.
            </p>
          </div>
          <div className="grid gap-2 bg-[#0a132d] text-white p-8">
            <h3 className="text-xl text-[#E4D3B9]">Infrastructure & Operations</h3>
            <p>
              We provide operational and infrastructure solutions that support growth, risk management, and regulatory discipline across complex business environments.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="px-2 py-20 bg-[#111F42]">
      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 grid-cols-1 gap-x-20 py-4">
        <div>
            <Image
              src="/images/home-02.png"   // ruta relativa a /public
              alt="Viro Holdings image"
              width={600}            // ancho real de la imagen
              height={300}            // alto real de la imagen
            />  
        </div>
        <div className="content-center grid gap-3 text-white">
          <h2 className="text-2xl text-[#E4D3B9]">A Multi-Sector Holding Company Built for Long-Term Execution</h2>
          <p>
            Viro Holdings LLC is a multi-sector holding company focused on building and operating logistics, industrial real estate, and infrastructure platforms.
          </p>
          <p>
            We exist to solve real operational problems, streamline complex systems, and provide the physical and strategic foundation businesses need to scale efficiently and operate compliantly.
          </p>
        </div>
      </div>
    </div>

    <div className="px-2 py-10">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-20 py-4">
        <div className="grid gap-2 p-8 border rounded-md">
          <h2 className="text-2xl">Why Viro Holdings</h2>
          <ul className="pl-5 text-black list-image-[url(/icons/check-icon.svg)]">
            <li>Disciplined, system-driven operations</li>
            <li>Long-term ownership mindset</li>
            <li>Institutional-grade compliance and risk management</li>
            <li>Clear structures, documentation, and accountability</li>
            <li>Built to scale across markets and industries</li>
          </ul>
        </div>
        <div className="grid gap-2 p-8 border rounded-md">
          <h2 className="text-2xl">Our Operating Principles</h2>
          <ul className="pl-5 text-black list-image-[url(/icons/check-icon.svg)]">
            <li>Operational Excellence Is Non-Negotiable</li>
            <li>Long-Term Thinking Over Short-Term Wins</li>
            <li>Accountability at Every Level</li>
            <li>Compliance Is a Competitive Advantage</li>
            <li>Partnerships, Not Just Transactions</li>
          </ul>
        </div>
        
      </div>
    </div>

    <div className="px-2 py-10 bg-[#FFF8EC]">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-20 py-4">
        <div className="content-center grid gap-3">
          <h2 className="text-2xl">Built for Long-Term Partnerships</h2>
          <p>
            We work with tenants, operators, and partners who value clarity, discipline, and long-term alignment.
          </p>
          <p>
            Viro Holdings is a long-term operator focused on building durable platforms—not short-term transactions.
          </p>
        </div>
        <div>
            <Image
              src="/images/home-03.png"   // ruta relativa a /public
              alt="Viro Holdings image"
              width={600}            // ancho real de la imagen
              height={300}            // alto real de la imagen
            />  
        </div>
      </div>
    </div>
    
    </>
  );
}
