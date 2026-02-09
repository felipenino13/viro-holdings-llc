export default function FooterModule(){
    return(
    <footer className="bg-[#04090F] px-2 py-10 text-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-x-20 py-4">
            <div>
            <h4>Viro Holdings LLC</h4>
            <p className="text-sm">
                Building and operating disciplined logistics, industrial real estate,
                and infrastructure platforms designed for long-term performance and
                compliance.
            </p>
            </div>

            <div>
            <h5>Company</h5>
            <ul className="text-sm">
                <li>Home</li>
                <li>About</li>
                <li>Platforms</li>
                <li>Operations</li>
                <li>Partnerships</li>
                <li>Contact</li>
            </ul>
            </div>

            <div>
            <h5>Our Focus</h5>
            <ul className="text-sm">
                <li>Logistics & Freight Operations</li>
                <li>Industrial Real Estate</li>
                <li>Infrastructure Platforms</li>
                <li>Risk & Compliance Execution</li>
            </ul>
            </div>

            <div>
            <h5>Contact</h5>
                <p className="text-sm">United States</p>
                <p className="text-sm">info@viroholdingsllc.com</p>
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