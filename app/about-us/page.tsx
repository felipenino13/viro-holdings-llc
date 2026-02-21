import type { Metadata } from "next";
import Image from "next/image";

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
        url: "/images/home-03.png", // crea este archivo en /public
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
    images: ["/images/home-03.png"],
  },
};

export default function AboutUs() {
  return (
    <>

    <div className="bg-[#0D1323] px-2 -mt-30 bg-[url(/images/about-viro-v4.png)] bg-center bg-cover bg-no-repeat relative text-white">
      {/* Overlay azul oscuro */}
      {/*<div className="absolute inset-0 bg-[#0D1323]/70"></div>*/}
      
      <div className="max-w-6xl mx-auto pt-160 grid grid-cols-3 gap-x-20 py-4 gap-y-5 relative z-10">
        <div className="grid col-span-3 sm:col-span-2 gap-y-5 content-end">
          <h1 className="text-5xl font-bold">About Viro Holdings LLC</h1>
          <h2 className="text-1xl">Building disciplined, scalable platforms across logistics, industrial real estate, and infrastructure.</h2>
          <div className="grid grid-cols-2 gap-5 max-w-sm">
          </div>
        </div>
        <div>
        </div>
          
      </div>
    </div>

    <div className="px-2 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-20 py-4">
        <div className="content-center grid gap-3"> 
          <h2 className="text-2xl font-bold">Who We Are</h2>
          <p>
            Our purpose is to create durable business platforms that solve real operational challenges and support long-term economic activity. We focus on systems that move goods, support industry, and enable businesses to operate efficiently within complex regulatory and operational environments.
          </p>
          <p>
            Rather than pursuing short-term gains, we prioritize long-term value creation through structure, process, and accountability.
          </p>
        </div>
        <div>
            <Image
              src="/images/home-04.png"   // ruta relativa a /public
              alt="Viro Holdings image"
              width={600}            // ancho real de la imagen
              height={300}            // alto real de la imagen
            />  
        </div>
      </div>
    </div>

    <div className="px-2 py-10 bg-[#FFF8EC]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-20 py-4">
        <div>
          <Image
              src="/images/home-05.png"   // ruta relativa a /public
              alt="Viro Holdings image"
              width={600}            // ancho real de la imagen
              height={300}            // alto real de la imagen
            />  
        </div>
        <div className="content-center grid gap-3">
          <h2 className="text-2xl font-bold">Our Approach</h2>
          <p>
            Viro Holdings operates with a clear and disciplined framework that guides every decision.
          </p>
          <ul className="pl-5 text-black list-image-[url(/icons/check-icon.svg)]">
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
    </div>

    <div className="px-2 py-20 bg-[#1F1F1F]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-x-20 py-4 gap-10">
        <h2 className="text-2xl text-center font-bold text-[#E4D3B9]">Core Sectors We Operate In</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          <div  className="grid gap-2 bg-[#282828] text-white p-8">
            <h3 className="text-xl text-[#E4D3B9] font-bold">Logistics & Freight Operations</h3>
            <p>
              We develop and operate logistics and freight platforms designed to support domestic and international trade. Our focus is on efficiency, clarity, and systems that enable the reliable movement of goods across markets.
            </p>
          </div>
          <div className="grid gap-2 bg-[#282828] text-white p-8">
            <h3 className="text-xl text-[#E4D3B9] font-bold">Industrial Real Estate</h3>
            <p>
              We build and manage industrial real estate assets that support operational businesses. These assets are designed for long-term use, regulatory compliance, and adaptability to evolving operational needs.
            </p>
          </div>
          <div className="grid gap-2 bg-[#282828] text-white p-8">
            <h3 className="text-xl text-[#E4D3B9] font-bold">Infrastructure & Operational Platforms</h3>
            <p>
              We support infrastructure-driven businesses by providing structured operational frameworks that emphasize reliability, compliance, and long-term performance.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="px-2 py-10 bg-[#F1F1F1] text-black">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-20 py-4">
        <div className="content-center grid gap-3">
          <h2 className="text-2xl font-bold">Our Values & Operating Principles</h2>
          <p>
            Our values guide how we operate, partner, and build.
          </p>
          <ul className="pl-5 text-black list-image-[url(/icons/check-icon-white.svg)] text-black">
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
        <div>
          <Image
              src="/images/home-06.png"   // ruta relativa a /public
              alt="Viro Holdings image"
              width={600}            // ancho real de la imagen
              height={300}            // alto real de la imagen
            /> 
        </div>
      </div>
    </div>

    <div className="px-2 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-20 py-4">
        <div className="grid gap-2 p-8 border rounded-md">
          <h2 className="text-2xl font-bold">How We Work With Partners</h2>
          <p>
            Viro Holdings works with tenants, operators, and strategic partners who value structure, transparency, and long-term alignment. We believe strong partnerships are built through clear expectations, disciplined execution, and shared commitment to sustainable outcomes.
          </p>
          <p>
            Our focus is on building relationships that support long-term success rather than transactional engagement.
          </p>
        </div>
        <div className="grid gap-2 p-8 border rounded-md">
          <h2 className="text-2xl font-bold">Built for the Long Term</h2>
          <p>
            Viro Holdings LLC exists to build platforms that last. Through disciplined execution, operational involvement, and long-term perspective, we support businesses and industries that depend on reliable systems and infrastructure.
          </p>
        </div>
      </div>
    </div>
    
    </>
  );
}
