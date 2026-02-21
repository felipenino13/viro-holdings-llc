import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Operations & Compliance | Disciplined Execution at Viro Holdings LLC",
  description:
    "Discover how Viro Holdings LLC operates with disciplined systems, compliance-driven processes, and risk-aware execution across logistics, real estate, and infrastructure platforms.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://viroholdingsllc.com/",
    title: "Operations & Compliance | Disciplined Execution at Viro Holdings LLC",
    description:
      "Discover how Viro Holdings LLC operates with disciplined systems, compliance-driven processes, and risk-aware execution across logistics, real estate, and infrastructure platforms.",
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
    title: "Operations & Compliance | Disciplined Execution at Viro Holdings LLC",
    description:
      "Discover how Viro Holdings LLC operates with disciplined systems, compliance-driven processes, and risk-aware execution across logistics, real estate, and infrastructure platforms.",
    images: ["/images/home-03.png"],
  },
};

export default function Operations() {
  return (
    <>
    <div className="bg-[#0D1323] px-2 -mt-30 bg-[url(/images/banner-operations-01.png)] bg-center bg-cover bg-no-repeat relative text-white">
      {/* Overlay azul oscuro */}
      {/*<div className="absolute inset-0 bg-[#0D1323]/70"></div>*/}
      
      <div className="max-w-6xl mx-auto pt-160 pb-10 grid grid-cols-3 gap-x-20 py-4 gap-y-5 relative z-10">
        <div className="grid col-span-3 sm:col-span-2 gap-y-5 content-end">
          <div className="gap-4 grid">
            <h1 className="text-5xl font-bold">Operations & Compliance</h1>
            <h2 className="text-1xl">Disciplined execution, structured operations, and compliance-driven decision-making.</h2>
          </div>
        </div>
        <div>
        </div>
          
      </div>
    </div>

    <div className="px-2 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-20 py-4">
        <div className="grid gap-2 m-auto">
          <h2 className="text-2xl font-bold">Our Operational Philosophy</h2>
          <p>
            At Viro Holdings LLC, operations are not an afterthought—they are the foundation of everything we build. We believe that strong operational systems, clear processes, and disciplined execution are essential to creating platforms that can scale sustainably and operate reliably over time.
          </p>
          <p>
            Our operational philosophy is grounded in structure, accountability, and continuous oversight across all platforms we manage.
          </p>
        </div>
        <div className="grid gap-2 p-8 border rounded-md">
          <h2 className="text-2xl font-bold">System-Driven Execution</h2>
          <p>
            We design and operate our platforms using structured systems rather than ad-hoc decision-making. This allows us to reduce operational risk, maintain consistency, and support scalability across different markets and business environments.
          </p>
          <p>
            Key elements of our operational systems include:
          </p>
          <ul className="pl-5 text-black list-image-[url(/icons/check-icon.svg)]">
            <li>Defined workflows and documented processes</li>
            <li>Clear roles, responsibilities, and escalation paths</li>
            <li>Performance monitoring and reporting mechanisms</li>
            <li>Continuous evaluation and improvement</li>
          </ul>
        </div>
        
      </div>
    </div>


    <div className="px-2 py-10 bg-[#F4F4F4]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-20 py-4">
        <div className="m-auto">
          <h2 className="text-2xl font-bold">Compliance as a Core Principle</h2>
          <p>
            Compliance is not treated as a checkbox requirement—it is a strategic advantage. We integrate regulatory awareness and compliance considerations into our operational design from the beginning.
          </p>
          <p>
            By embedding compliance into our systems, we help ensure that our platforms can operate confidently within complex regulatory environments while minimizing exposure to operational and legal risk.
          </p>
        </div>
        <div>
          <Image
              src="/images/home-07.png"   // ruta relativa a /public
              alt="Viro Holdings image"
              width={600}            // ancho real de la imagen
              height={300}            // alto real de la imagen
            />  
        </div>
        
      </div>
    </div>

    <div className="px-2 py-10 bg-[#1F1F1F] text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-20 py-4">
        <div className="m-auto p-8 gap-4 grid bg-[#282828]">
          <h2 className="text-2xl text-[#E4D3B9] font-bold">Risk Management & Oversight</h2>
          <p>
            Effective risk management begins with visibility and control. Viro Holdings applies disciplined oversight to identify, assess, and mitigate operational risks across all platforms.
          </p>
          <p>
            Our approach includes:
          </p>
          <ul className="pl-5 text-black list-image-[url(/icons/check-icon-white.svg)] text-white">
            <li>Proactive identification of operational and regulatory risks</li>
            <li>Structured review and approval processes</li>
            <li>Internal controls and documentation standards</li>
            <li>Ongoing monitoring to adapt to evolving conditions</li>
          </ul>
          <p>
            This framework supports stability and informed decision-making at every level.
          </p>
        </div>

        <div className="m-auto p-8 gap-4 grid bg-[#282828]">
          <h2 className="text-2xl text-[#E4D3B9] font-bold">Operational Governance</h2>
          <p>
            Strong governance ensures that operational decisions align with long-term objectives. Viro Holdings maintains governance structures that promote accountability, transparency, and disciplined execution.
          </p>
          <p>
            Governance at Viro Holdings supports:
          </p>
          <ul className="pl-5 text-white list-image-[url(/icons/check-icon-white.svg)]">
            <li>Consistent operational standards</li>
            <li>Clear decision-making authority</li>
            <li>Alignment between strategy and execution</li>
            <li>Long-term platform sustainability</li>
          </ul>
          <p>
            This framework supports stability and informed decision-making at every level.
          </p>
        </div>
        
      </div>
    </div>

    <div className="px-2 py-10 bg-[#FFF8EC]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-20 py-4">
        <div className="m-auto gap-4 grid">
          <h2 className="text-2xl font-bold">Applied Across All Platforms</h2>
          <p>
            Our operations and compliance framework is applied consistently across all sectors in which we operate, including logistics, industrial real estate, and infrastructure-driven businesses.
          </p>
          <p>
            This consistency allows us to manage complexity, support scalability, and maintain operational integrity as our platforms grow.
          </p>
        </div>
        <div>
          <Image
              src="/images/home-08.png"   // ruta relativa a /public
              alt="Viro Holdings image"
              width={600}            // ancho real de la imagen
              height={300}            // alto real de la imagen
            />  
        </div>
      </div>
    </div>

    <div className="px-2 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-20 py-4">
        <div>
          <Image
              src="/images/home-09.png"   // ruta relativa a /public
              alt="Viro Holdings image"
              width={600}            // ancho real de la imagen
              height={300}            // alto real de la imagen
            />  
        </div>
        <div className="m-auto gap-4 grid">
          <h2 className="text-2xl font-bold">Committed to Operational Discipline</h2>
          <p>
            Viro Holdings LLC is committed to building platforms that operate with discipline, clarity, and accountability. Through structured operations and a compliance-first mindset, we support long-term performance and sustainable growth across every platform we manage.
          </p>
        </div>
      </div>
    </div>

    </>
  );
}
