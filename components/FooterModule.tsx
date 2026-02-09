export default function FooterModule(){
    return(
    <footer className="bg-[#04090F] px-2 py-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-x-20 py-4">
            <div>
            <h4>Viro Holdings LLC</h4>
            <p>
                Building and operating disciplined logistics, industrial real estate,
                and infrastructure platforms designed for long-term performance and
                compliance.
            </p>
            </div>

            <div>
            <h5>Company</h5>
            <ul>
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
            <ul>
                <li>Logistics & Freight Operations</li>
                <li>Industrial Real Estate</li>
                <li>Infrastructure Platforms</li>
                <li>Risk & Compliance Execution</li>
            </ul>
            </div>

            <div>
            <h5>Contact</h5>
            <p>United States</p>
            <p>info@viroholdingsllc.com</p>
            <p>Mon–Fri · 9:00 AM – 5:00 PM (EST)</p>
            </div>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 gap-x-20 py-4">
            <p>
            Disclaimer: Viro Holdings LLC does not offer investment advice, securities
            offerings, or financial products through this website. Information is
            provided for general informational purposes only.
            </p>
            <p>© 2026 Viro Holdings LLC. All rights reserved.</p>
        </div>
    </footer>
    )
    

}