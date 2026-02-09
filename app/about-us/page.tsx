import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Viro Holdings LLC | Long-Term Operators & Platform Builders",
  description:
    "Learn about Viro Holdings LLC, a multi-sector holding company building and operating logistics, industrial real estate, and infrastructure platforms with discipline and compliance.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://viroholdingsllc.com/",
    title: "About Viro Holdings LLC | Long-Term Operators & Platform Builders",
    description:
      "Learn about Viro Holdings LLC, a multi-sector holding company building and operating logistics, industrial real estate, and infrastructure platforms with discipline and compliance.",
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
    title: "About Viro Holdings LLC | Long-Term Operators & Platform Builders",
    description:
      "Learn about Viro Holdings LLC, a multi-sector holding company building and operating logistics, industrial real estate, and infrastructure platforms with discipline and compliance.",
    images: ["/og-home.jpg"],
  },
};

export default function AboutUs() {
  return (
    <>
    <div className="bg-[#0D1323] px-2 py-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-x-20 py-4">
          <h1 className="text-5xl">About Viro Holdings LLC</h1>
          <h2 className="text-2xl">Building disciplined, scalable platforms across logistics, industrial real estate, and infrastructure.</h2>
      </div>
    </div>

    <div className="bg-[#0D1323] px-2 py-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-x-20 py-4">
        <h2 className="text-2xl">Who We Are</h2>
        <p>
          Our purpose is to create durable business platforms that solve real operational challenges and support long-term economic activity. We focus on systems that move goods, support industry, and enable businesses to operate efficiently within complex regulatory and operational environments.
        </p>
        <p>
          Rather than pursuing short-term gains, we prioritize long-term value creation through structure, process, and accountability.
        </p>
      </div>
    </div>

    <div className="bg-[#0D1323] px-2 py-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-x-20 py-4">
        <h2 className="text-2xl">Our Approach</h2>
        <p>
          Viro Holdings operates with a clear and disciplined framework that guides every decision.
        </p>
        <ul>
          <li>Long-term ownership and operational mindset</li>
          <li>Disciplined systems and repeatable processes</li>
          <li>Strong emphasis on compliance and risk management</li>
          <li>Active involvement in operations, not passive oversight</li>
          <li>Focus on scalability, durability, and execution</li>
        </ul>
        <p>
          This approach allows us to build platforms that are resilient, transparent, and capable of supporting sustained growth over time.
        </p>
      </div>
    </div>

    <div className="bg-[#0D1323] px-2 py-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-x-20 py-4">
        <h2 className="text-2xl">Core Sectors We Operate In</h2>
        
        <h3 className="text-1xl">Logistics & Freight Operations</h3>
        <p>
          We develop and operate logistics and freight platforms designed to support domestic and international trade. Our focus is on efficiency, clarity, and systems that enable the reliable movement of goods across markets.
        </p>

        <h3 className="text-1xl">Industrial Real Estate</h3>
        <p>
          We build and manage industrial real estate assets that support operational businesses. These assets are designed for long-term use, regulatory compliance, and adaptability to evolving operational needs.
        </p>

        <h3 className="text-1xl">Infrastructure & Operational Platforms</h3>
        <p>
          We support infrastructure-driven businesses by providing structured operational frameworks that emphasize reliability, compliance, and long-term performance.
        </p>

      </div>
    </div>

    <div className="bg-[#0D1323] px-2 py-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-x-20 py-4">
        <h2 className="text-2xl">Our Values & Operating Principles</h2>
        <p>
          Our values guide how we operate, partner, and build.
        </p>
        <ul>
          <li>Operational excellence is non-negotiable</li>
          <li>Accountability at every level</li>
          <li>Compliance as a strategic advantage</li>
          <li>Long-term thinking over short-term outcomes</li>
          <li>Partnerships built on clarity and alignment</li>
        </ul>
        <p>
            These principles shape our internal culture and our external relationships.
        </p>
      </div>
    </div>

    <div className="bg-[#0D1323] px-2 py-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-x-20 py-4">
        <h2 className="text-2xl">How We Work With Partners</h2>
        <p>
          Viro Holdings works with tenants, operators, and strategic partners who value structure, transparency, and long-term alignment. We believe strong partnerships are built through clear expectations, disciplined execution, and shared commitment to sustainable outcomes.
        </p>
        <p>
          Our focus is on building relationships that support long-term success rather than transactional engagement.
        </p>
      </div>
    </div>

    <div className="bg-[#0D1323] px-2 py-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-x-20 py-4">
        <h2 className="text-2xl">Built for the Long Term</h2>
        <p>
          Viro Holdings LLC exists to build platforms that last. Through disciplined execution, operational involvement, and long-term perspective, we support businesses and industries that depend on reliable systems and infrastructure.
        </p>
      </div>
    </div>

    <div className="bg-[#0D1323] px-2 py-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-x-20 py-4">
        <a href="">Contact Us</a>
        <a href="">Learn About Our Platforms</a>
      </div>
    </div>
    </>
  );
}
