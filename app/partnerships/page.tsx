import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partnerships | Long-Term Alignment at Viro Holdings LLC",
  description:
    "Learn how Viro Holdings LLC approaches partnerships through long-term alignment, operational discipline, and compliance-driven collaboration across its platforms.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://viroholdingsllc.com/",
    title: "Partnerships | Long-Term Alignment at Viro Holdings LLC",
    description:
      "Learn how Viro Holdings LLC approaches partnerships through long-term alignment, operational discipline, and compliance-driven collaboration across its platforms.",
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
    title: "Partnerships | Long-Term Alignment at Viro Holdings LLC",
    description:
      "Learn how Viro Holdings LLC approaches partnerships through long-term alignment, operational discipline, and compliance-driven collaboration across its platforms.",
    images: ["/og-home.jpg"],
  },
};

export default function Partnerships() {
  return (
    <>
    <div className="bg-[#0D1323] px-2 py-30 bg-[url(/images/banner-partnership-01.png)] bg-center bg-cover bg-no-repeat relative text-white">
      {/* Overlay azul oscuro */}
      <div className="absolute inset-0 bg-[#0D1323]/70">
      </div>
      
      <div className="max-w-5xl mx-auto grid grid-cols-3 gap-x-20 py-4 gap-y-5 relative z-10">
        <div className="grid col-span-2 gap-y-5">
          <h1 className="text-5xl">Partnerships</h1>
          <h2 className="text-1xl">Built on alignment, discipline, and long-term collaboration.</h2>
          <div className="grid grid-cols-2 gap-5 max-w-sm">
          </div>
        </div>
        <div>
        </div>
          
      </div>
    </div>

    <div className="px-2 py-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-x-20 py-4">
        <h2 className="text-2xl">Our Partnership Philosophy</h2>
        <p>
          Viro Holdings approaches partnerships with a long-term perspective. We believe the strongest relationships are built on clarity, accountability, and aligned incentives—not short-term transactions.
        </p>
        <p>
          Our partnerships are designed to support durable platforms, operational excellence, and sustainable outcomes across the businesses and assets we operate.
        </p>
      </div>
    </div>

    <div className="px-2 py-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-x-20 py-4">
        <h2 className="text-2xl">Who We Partner With</h2>
        <p>
          We work with organizations and individuals who share a commitment to disciplined execution, compliance, and long-term value creation.
        </p>
        <p>
          Typical partners include:
        </p>
        <ul className="pl-5 text-black list-image-[url(/icons/check-icon.svg)]">
          <li>Operating businesses and platform operators</li>
          <li>Tenants and long-term occupants of industrial assets</li>
          <li>Service providers aligned with operational standards</li>
          <li>Strategic collaborators supporting infrastructure and growth</li>
        </ul>
        <p>Each partnership is evaluated based on strategic fit, operational alignment, and long-term objectives.</p>
      </div>
    </div>

    <div className="px-2 py-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-x-20 py-4">
        <h2 className="text-2xl">What We Look For in a Partnership</h2>
        <p>
          We work with organizations and individuals who share a commitment to disciplined execution, compliance, and long-term value creation.
        </p>
        <ul className="pl-5 text-black list-image-[url(/icons/check-icon.svg)]">
          <li>Long-term orientation and shared objectives</li>
          <li>Commitment to operational discipline and compliance</li>
          <li>Clear roles, responsibilities, and expectations</li>
          <li>Transparency in communication and reporting</li>
          <li>Respect for structured governance and processes</li>
        </ul>
        <p>These criteria help ensure that partnerships remain productive, resilient, and aligned over time.</p>
      </div>
    </div>

    <div className="px-2 py-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-x-20 py-4">
        <h2 className="text-2xl">How We Structure Partnerships</h2>
        <p>
          Viro Holdings structures partnerships with clarity and discipline from the outset. We emphasize clearly defined terms, documented processes, and governance frameworks that support accountability and execution.
        </p>
        <p>Our approach is designed to minimize ambiguity, manage risk, and enable effective collaboration across complex operational environments.</p>
      </div>
    </div>

    <div className="px-2 py-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-x-20 py-4">
        <h2 className="text-2xl">Long-Term Alignment Over Transactions</h2>
        <p>
          We prioritize partnerships that are built to endure. Rather than focusing on isolated transactions, we seek relationships that evolve alongside the platforms we operate.
        </p>
        <p>
          This long-term orientation allows us to support sustained performance, operational stability, and mutual success.
        </p>
      </div>
    </div>

    <div className="px-2 py-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-x-20 py-4">
        <h2 className="text-2xl">Important Notice</h2>
        <p>
          Viro Holdings LLC does not offer or solicit investments, securities, or financial products through this website. Any information provided is for general informational purposes only and does not constitute an offer, solicitation, or recommendation to engage in any investment activity.
        </p>
        <p>
          All partnerships are subject to formal evaluation, documentation, and applicable legal and regulatory requirements.
        </p>
      </div>
    </div>

    <div className="px-2 py-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-x-20 py-4">
        <h2 className="text-2xl">Built on Clarity and Trust</h2>
        <p>
          Viro Holdings believes that strong partnerships are built through structure, discipline, and shared commitment to long-term objectives. We work with partners who value clarity, accountability, and operational excellence.
        </p>
      </div>
    </div>

    </>
  );
}
