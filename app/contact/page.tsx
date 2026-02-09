import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Viro Holdings LLC | Professional Inquiries & Partnerships",
  description:
    "Get in touch with Viro Holdings LLC for professional inquiries related to logistics, industrial real estate, infrastructure platforms, and long-term partnerships.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://viroholdingsllc.com/",
    title: "Contact Viro Holdings LLC | Professional Inquiries & Partnerships",
    description:
      "Get in touch with Viro Holdings LLC for professional inquiries related to logistics, industrial real estate, infrastructure platforms, and long-term partnerships.",
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
    title: "Contact Viro Holdings LLC | Professional Inquiries & Partnerships",
    description:
      "Get in touch with Viro Holdings LLC for professional inquiries related to logistics, industrial real estate, infrastructure platforms, and long-term partnerships.",
    images: ["/og-home.jpg"],
  },
};

export default function Contact() {
  return (
    <>
    <div className="bg-[#0D1323] px-2 py-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-x-20 py-4">
          <h1 className="text-5xl">Contact Viro Holdings LLC</h1>
          <h2 className="text-2xl">Professional inquiries, partnership discussions, and general information.</h2>
      </div>
    </div>

    <div className="bg-[#0D1323] px-2 py-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-x-20 py-4">
        <h2 className="text-2xl">How to Reach Us</h2>
        <p>
          Viro Holdings LLC welcomes professional inquiries related to our platforms, operations, and long-term partnerships. We value clear communication and structured engagement and will respond to inquiries that align with our operational focus.
        </p>
        <p>
          This contact channel is intended for business-related communications only.
        </p>
      </div>
    </div>

    <div className="bg-[#0D1323] px-2 py-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-x-20 py-4">
        <div>
          <ContactForm></ContactForm>
        </div>
      </div>
    </div>

    <div className="bg-[#0D1323] px-2 py-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-x-20 py-4">
        <h2 className="text-2xl">Contact Information</h2>
        <p>
          Viro Holdings LLC operates within the United States and engages with partners and operators across multiple regions.
        </p>
        <p>
          United States
        </p>
        <p>
          info@viroholdingsllc.com
        </p>
      </div>
    </div>

    <div className="bg-[#0D1323] px-2 py-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-x-20 py-4">
        <h2 className="text-2xl">Professional Communication, Built on Clarity</h2>
        <p>
          We value thoughtful, relevant communication aligned with our operational focus and long-term objectives.
        </p>
        <p>
          We look forward to connecting where there is strategic and operational alignment.
        </p>
      </div>
    </div>

    </>
  );
}
