import Link from "next/link";
import Image from "next/image";

export default function FooterModule(){
    return(
    <footer className="bg-[#04090F] px-2 py-10 text-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-x-20 py-8">
            <div className="gap-4 grid">
            <Image
              src="/images/viro-holdings-white.svg"   // ruta relativa a /public
              alt="Viro Holdings image"
              width={160}            // ancho real de la imagen
              height={300}            // alto real de la imagen
            />
            <p className="text-sm">
                Building and operating disciplined logistics, industrial real estate,
                and infrastructure platforms designed for long-term performance and
                compliance.
            </p>
            </div>

            <div>
            <h5>Company</h5>
            <ul className="text-sm">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about-us">About</Link></li>
                <li><Link href="/our-platforms-businesses">Platforms</Link></li>
                <li><Link href="/operations-compliance">Operations</Link></li>
                <li><Link href="/partnerships">Partnerships</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
            </div>

            <div>
            <h5>Follow Us</h5>
            <ul className="text-sm">
                <li><Link href="https://www.tiktok.com/@viro.hoodings.llc?_r=1&_t=ZP-93qdKULmsNb">TikTok</Link></li>
                <li><Link href="https://www.instagram.com/p/DUo_QnBEUoe/?igsh=MWozaWRreTViNTE3ag==">Instagram</Link></li>
                <li><Link href="https://www.facebook.com/share/p/1Djknu51bT/?mibextid=wwXIfr">Facebook</Link></li>
            </ul>
            </div>

            <div>
            <h5>Contact</h5>
                <p className="text-sm">2323 NW 82nd Ave<br></br>Doral FL 33122</p>
                <p className="text-sm">info@viroholdingsllc.com</p>
                <p><a href="tel:+17862334973">(786) 233-4973</a></p>
            </div>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 gap-x-20 py-4">
            <p className="text-xs text-center">
            Disclaimer: Viro Holdings LLC does not offer investment advice, securities
            offerings, or financial products through this website. Information is
            provided for general informational purposes only.
            </p>
            <p className="text-xs text-center">© 2026 Viro Holdings LLC. All rights reserved.</p>
        </div>
    </footer>
    )
    

}