import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Insights | Updates & Perspectives from Viro Holdings LLC",
  description:
    "Read the latest news, updates, and insights from Viro Holdings LLC on logistics, industrial real estate, infrastructure, and operational best practices.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://viroholdingsllc.com/",
    title: "News & Insights | Updates & Perspectives from Viro Holdings LLC",
    description:
      "Read the latest news, updates, and insights from Viro Holdings LLC on logistics, industrial real estate, infrastructure, and operational best practices.",
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
    title: "News & Insights | Updates & Perspectives from Viro Holdings LLC",
    description:
      "Read the latest news, updates, and insights from Viro Holdings LLC on logistics, industrial real estate, infrastructure, and operational best practices.",
    images: ["/og-home.jpg"],
  },
};


export default function News() {
  return (
    <>
    <div className="bg-[#0D1323] px-2 py-30 bg-[url(/images/banner-news-01.png)] bg-center bg-cover bg-no-repeat relative text-white">
      {/* Overlay azul oscuro */}
      <div className="absolute inset-0 bg-[#0D1323]/70">
      </div>
      
      <div className="max-w-5xl mx-auto grid grid-cols-3 gap-x-20 py-4 gap-y-5 relative z-10">
        <div className="grid col-span-2 gap-y-5">
          <h1 className="text-5xl">News & Insights</h1>
          <h2 className="text-1xl">Updates, perspectives, and operational insights from across our platforms.</h2>
          <div className="grid grid-cols-2 gap-5 max-w-sm">
          </div>
        </div>
        <div>
        </div>
          
      </div>
    </div>

    <div className="px-2 py-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-x-20 py-4">
        <h2 className="text-2xl">Purpose of This Section</h2>
        <p>
          The News & Insights section provides updates, perspectives, and commentary related to the platforms and industries in which Viro Holdings operates.
        </p>
        <p>
          Content shared here reflects operational observations, company updates, and high-level market perspectives intended for informational purposes only.
        </p>
      </div>
    </div>

    <div className="px-2 py-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-x-20 py-4">
        <h2 className="text-2xl">What We Share</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div>
            <h3 className="text-1xl">Operational Insights</h3>
            <p>
              Perspectives on operational discipline, compliance-driven execution, and system-based management across logistics, real estate, and infrastructure environments.
            </p>
          </div>
          <div>
            <h3 className="text-1xl">Industry Perspectives</h3>
            <p>
              High-level observations on trends affecting logistics, industrial real estate, and infrastructure-focused businesses—shared from an operator’s point of view.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="px-2 py-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-x-20 py-4">
        <h2 className="text-2xl">Updates Coming Soon</h2>
        <p>
          This section will be updated periodically as new insights, updates, and announcements become available.
        </p>
        <p>
          Viro Holdings prioritizes relevance and substance over volume. Content is published selectively and intentionally.
        </p>
      </div>
    </div>
    
    </>
  );
}
