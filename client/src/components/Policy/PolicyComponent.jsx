import Texture from "../../assets/texture.jpeg"

const PolicyComponent = () => {
    return (
            <section className="bg-repeat mt-8" style={{ backgroundImage: `url(${Texture})`, backgroundSize: "25%" }}>
                {/* <div className="container mx-auto max-w-[900px] px-4 sm:px-8 md:px-16"> */}
                <h1 className="mt-8 text-center lg:text-3xl py-4"><b>Pizza Paradise Policies</b></h1>
                <p className="p-8 lg:px-32 text-justify text-base lg:text-2xl tracking-wide leading-relaxed mx-auto max-w-[1200px]">
                    <b>Dietary & Allergy Policy</b>
                    <ui className="list-inside">
                        <li>Ingredients listed online—check for allergens</li>
                        <li>Cross-contamination possible in shared kitchens</li>
                        <li>Consult doctor for severe allergies</li>
                    </ui>
                    <br />
                    <b>Cancellation Policy</b>
                    <ui className="list-inside">
                        <li><i>Before Prep (5 mins)</i>: <b> Full refund</b></li>
                        <li><i>Prep Started</i>: <b>50% refund or credit</b></li>
                        <li><i>Out for Delivery</i>: <b>No refund</b></li>
                    </ui>
                    <br />
                    <b>Franchisee Operations</b>
                    <br />
                    Independent franchisees operate 95% of locations. Local policies may vary slightly.
                    <br />
                    <br />
                    <b>Acceptable Use</b>
                    <ui className="list-inside">
                        <li>No spam, harassment, or illegal activity</li>
                        <li>Respect delivery personnel</li>
                        <li>No tampering with packaging</li>
                    </ui>
                    <br />
                    <b>Changes to Policies</b>
                    <br />
                    We may update policies. Continued use = acceptance of changes.
                    <br />
                    India-Specific: Complies with FSSAI regulations. License #MH-FSSAI-2025-XXXXX
                </p>

                {/* </div> */}
                {/* <div className="container mt-8 mx-auto max-w-[900px] px-4 sm:px-8 md:px-16"> */}
                <h1 className="text-center lg:text-3xl"><b>Terms of Service - Pizza Paradise</b></h1>
                <p className="p-8 lg:px-32 text-justify text-base lg:text-2xl tracking-wide leading-relaxed mx-auto max-w-[1200px]">
                    <br />
                    Effective Date: December 25, 2025
                    <br />
                    Welcome to Pizza Paradise! These Terms govern your use of our website, mobile app, and services.
                    <br />
                    <br />
                    <ui className="list-decimal list-outside">
                        <li><b>Acceptance of Terms</b>
                            <br />
                            By accessing Pizza Paradise services, you agree to these Terms, our Privacy Policy, and all applicable laws.</li>
                        <li>
                            <b>Orders & Payments</b>
                            <ui className="list-inside list-disc">
                                <li>Orders are binding upon confirmation</li>
                                <li>Prices exclude taxes/delivery fees (displayed at checkout)</li>
                                <li>We reserve the right to cancel orders due to pricing errors or unavailability</li>
                                <li>Payment via accepted methods (UPI, cards, wallets)</li>
                            </ui>
                        </li>
                        <li>
                            <b>Delivery</b>
                            <ui className="list-inside list-disc">
                                <li>Estimated delivery times are approximate</li>
                                <li>We cannot guarantee exact delivery times</li>
                                <li>Leave orders at door for contactless delivery when requested</li>
                            </ui>
                            <br />
                        </li>
                        <li>
                            <b>User Accounts</b>
                            <ui className="list-inside list-disc">
                                <li>You must be 18+ or have parental consent</li>
                                <li>Keep login credentials secure</li>
                                <li>Notify us of unauthorized access immediately</li>
                            </ui>
                            <br />
                        </li>
                        <li>
                            <b>Limitation of Liability</b>
                            <br />
                            Pizza Paradise not liable for indirect damages. Total liability capped at order value.
                            <br />
                            <b>Contact:</b> support@pizzaparadise.in
                        </li>
                    </ui>
                </p>

                {/* </div> */}
                {/* <div className="container mt-8 mx-auto max-w-[900px] px-4 sm:px-8 md:px-16"> */}
                <h1 className="text-center lg:text-3xl"><b>Refund Policy - Pizza Paradise</b></h1>
                <p className="p-8 lg:px-32 text-justify text-base lg:text-2xl tracking-wide leading-relaxed mx-auto max-w-[1200px]">
                    <br></br>
                    Last Updated: December 25, 2025
                    <br />
                    We strive for pizza perfection. Refunds handled case-by-case.
                    <br />
                    <br />
                    <h4 className="text-green-500">Eligible Refunds (Within 30 minutes of order)</h4>
                    <ui className="list-inside">
                        <li><b>Wrong/ Missing Items</b>: Full refund + delivery fee</li>

                        <li><b>Quality Issues</b>: Poor taste, cold pizza, damaged packaging</li>

                        <li><b>Late Delivery</b>: 45 minutes past promised time</li>
                    </ui>
                    <br />
                    <h4 className="text-red-700">Non-Refundable</h4>
                    <ui className="list-inside">
                        <li>Orders marked "delivered" by rider/GPS</li>

                        <li>Change of mind after preparation</li>

                        <li>Incorrect delivery address provided</li>
                    </ui>
                    <br />
                    <b>Process</b>
                    <ui className="list-decimal list-inside">
                        <li>Contact support within 30 mins: 1800-PIZZA-99</li>

                        <li>Share order ID + photos (if applicable)</li>

                        <li>Refund processed within 5-7 business days to original payment method</li>
                    </ui>
                </p>
                {/* </div> */}
            </section>
    );
};

export default PolicyComponent;