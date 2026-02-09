import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Platforms & Businesses | Viro Holdings LLC",
  description:
    "Explore the logistics, industrial real estate, and infrastructure platforms operated by Viro Holdings LLC, built for disciplined execution and long-term performance.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://viroholdingsllc.com/",
    title: "Our Platforms & Businesses | Viro Holdings LLC",
    description:
      "Explore the logistics, industrial real estate, and infrastructure platforms operated by Viro Holdings LLC, built for disciplined execution and long-term performance.",
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
    title: "Our Platforms & Businesses | Viro Holdings LLC",
    description:
      "Explore the logistics, industrial real estate, and infrastructure platforms operated by Viro Holdings LLC, built for disciplined execution and long-term performance.",
    images: ["/og-home.jpg"],
  },
};

export default function Platforms() {
  return (
    <>
    <div className="bg-[#0D1323] px-2 py-30 bg-[url(/images/banner-platforms-01.png)] bg-center bg-cover bg-no-repeat relative text-white">
      {/* Overlay azul oscuro */}
      <div className="absolute inset-0 bg-[#0D1323]/70">
      </div>
      
      <div className="max-w-5xl mx-auto grid grid-cols-3 gap-x-20 py-4 gap-y-5 relative z-10">
        <div className="grid col-span-2 gap-y-5">
          <h1 className="text-5xl">Our Platforms & Businesses</h1>
          <h2 className="text-1xl">Building and operating essential platforms across logistics, industrial real estate, and infrastructure.</h2>
          <div className="grid grid-cols-2 gap-5 max-w-sm">
          </div>
        </div>
        <div>
        </div>
          
      </div>
    </div>

    <div className="px-2 py-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-x-20 py-4">
        <h2 className="text-2xl">How We Build and Operate Platforms</h2>
        <p>
          Viro Holdings LLC operates as a multi-sector holding company focused on the development and long-term operation of essential business platforms. Rather than passive ownership, we take an active role in shaping operational structure, compliance frameworks, and long-term execution across each platform.
        </p>
        <p>
          Our businesses are designed to support real economic activity, provide reliable infrastructure, and operate with discipline in complex operational environments.
        </p>
      </div>
    </div>

    <div className="px-2 py-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-x-20 py-4">
        <h2 className="text-2xl">Logistics & Freight Platforms</h2>
        <p>
          Our logistics and freight platforms are designed to support the efficient movement of goods across domestic and international markets. We focus on operational clarity, disciplined systems, and infrastructure that enables reliable execution across supply chains.
        </p>
        <p>
          These platforms support businesses that require dependable logistics operations, regulatory awareness, and scalable operational frameworks.
        </p>
        <p>
          Key focus areas include:
        </p>
        <ul className="pl-5 text-black list-image-[url(/icons/check-icon.svg)]">
          <li>Freight and logistics operations</li>
          <li>Supply chain coordination and support</li>
          <li>System-driven execution and performance oversight</li>
          <li>Regulatory and operational compliance</li>
        </ul>
      </div>
    </div>

    <div className="px-2 py-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-x-20 py-4">
        <h2 className="text-2xl">Industrial Real Estate Platforms</h2>
        <p>
          Viro Holdings develops and manages industrial real estate assets that serve as the physical backbone of operational businesses. Our real estate platforms are designed for durability, compliance, and long-term usability rather than short-term optimization.
        </p>
        <p>
          We prioritize assets that support operational efficiency, safety, and adaptability to evolving industrial needs.
        </p>
        <p>
          Key focus areas include:
        </p>
        <ul className="pl-5 text-black list-image-[url(/icons/check-icon.svg)]">
          <li>Industrial and logistics-oriented properties</li>
          <li>Long-term asset management and oversight</li>
          <li>Tenant-focused operational infrastructure</li>
          <li>Compliance-driven facility standards</li>
        </ul>
      </div>
    </div>

    <div className="px-2 py-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-x-20 py-4">
        <h2 className="text-2xl">Infrastructure & Operational Platforms</h2>
        <p>
          Our infrastructure and operational platforms support businesses that depend on reliable systems, structured processes, and disciplined execution. These platforms are built to manage complexity, mitigate risk, and enable consistent performance over time.
        </p>
        <p>
          We focus on providing the operational foundation required for sustainable growth across infrastructure-driven environments.
        </p>
        <p>
          Key focus areas include:
        </p>
        <ul className="pl-5 text-black list-image-[url(/icons/check-icon.svg)]">
          <li>Operational systems and process frameworks</li>
          <li>Infrastructure support for scaling businesses</li>
          <li>Risk-aware execution and oversight</li>
          <li>Long-term operational sustainability</li>
        </ul>
      </div>
    </div>

    <div className="px-2 py-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-x-20 py-4">
        <h2 className="text-2xl">A Consistent Framework Across All Platforms</h2>
        <p>
          While each platform serves a distinct function, all Viro Holdings businesses operate under a shared framework of operational discipline, compliance awareness, and long-term alignment.
        </p>
        <p>
          This consistency allows us to manage complexity across sectors while maintaining clarity, accountability, and control.
        </p>
      </div>
    </div>

    <div className="px-2 py-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-x-20 py-4">
        <h2 className="text-2xl">Built for Long-Term Performance</h2>
        <p>
          Viro Holdings does not pursue short-term opportunities disconnected from operational reality. Our platforms are built to perform over time, support long-term partnerships, and adapt to changing market and regulatory conditions.
        </p>
        <p>
          We focus on durability, execution, and sustainable value creation across every platform we operate.
        </p>
      </div>
    </div>
    
    </>
  );
}
