
function AboutPage() {
    return (
        <div className="container">
            <div className="about-hero">
                <h1>About BookMyHotel</h1>
                <p className="tagline">Your trusted partner in finding the perfect stay</p>
            </div>

            <section className="about-content">
                <div className="about-section">
                    <h2>Who We Are</h2>
                    <p>
                        BookMyHotel is a leading online hotel booking platform dedicated to providing travelers 
                        with seamless access to the world's best accommodations. We believe in making travel 
                        planning simple, affordable, and accessible to everyone.
                    </p>
                </div>

                <div className="about-section">
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is to connect travelers with their ideal accommodations worldwide, offering 
                        competitive prices, transparent reviews, and exceptional customer service. We strive to 
                        make every journey memorable and hassle-free.
                    </p>
                </div>

                <div className="about-section">
                    <h2>Why Choose Us</h2>
                    <ul>
                        <li>✓ Wide selection of hotels and accommodations</li>
                        <li>✓ Best price guarantee</li>
                        <li>✓ Verified guest reviews</li>
                        <li>✓ 24/7 customer support</li>
                        <li>✓ Secure and easy booking process</li>
                        <li>✓ Flexible cancellation policies</li>
                    </ul>
                </div>

                <div className="about-section">
                    <h2>Contact Us</h2>
                    <p>Email: support@bookmyhotel.com</p>
                    <p>Phone: 1-800-BOOK-HOTEL</p>
                </div>
            </section>
        </div>
    );
}

export default AboutPage;