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
        url: "/images/home-03.png", // crea este archivo en /public
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
    images: ["/images/home-03.png"],
  },
};

export default function Contact() {
  return (
    <>
    <div className="bg-[#0D1323] px-2 -mt-30 bg-[url(/images/banner-contact-01.png)] bg-center bg-cover bg-no-repeat relative text-white">
      {/* Overlay azul oscuro */}
      {/*<div className="absolute inset-0 bg-[#0D1323]/70"> </div>*/}
      
      
      <div className="max-w-6xl mx-auto py-60 grid grid-cols-1 sm:grid-cols-2 gap-x-20 py-4 gap-y-5 relative z-10">
        <div className="grid gap-y-5 content-center">
          <h1 className="text-5xl font-bold">Contact Viro Holdings LLC</h1>
          <p>
          Viro Holdings LLC operates within the United States and engages with partners and operators across multiple regions.
          </p>
          <div>
            <p className="text-sm">2323 NW 82nd Ave Doral FL 33122</p>
            <p><a href="tel:+17862334973">(786) 233-4973</a></p>
            <p className="text-sm">info@viroholdingsllc.com</p>
          </div>
        </div>
        <div>
          <ContactForm></ContactForm>
        </div>
          
      </div>
    </div>

    <div className="px-2 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-20 py-4">
        <div className="p-10 gap-4 grid content-start">
          <h2 className="text-2xl font-bold">How to Reach Us</h2>
          <p>
            Viro Holdings LLC welcomes professional inquiries related to our platforms, operations, and long-term partnerships. We value clear communication and structured engagement and will respond to inquiries that align with our operational focus.
          </p>
          <p>
            This contact channel is intended for business-related communications only.
          </p>
        </div>
        <div className="p-10 gap-4 grid content-start border rounded-md">
          <h2 className="text-2xl font-bold">Professional Communication, Built on Clarity</h2>
          <p>
            We value thoughtful, relevant communication aligned with our operational focus and long-term objectives.
          </p>
          <p>
            We look forward to connecting where there is strategic and operational alignment.
          </p>
        </div>
      </div>
    </div>

    </>
  );
}
