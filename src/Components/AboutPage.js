
function AboutPage() {
    return (
        <div className="container">
            <div className="about-hero mt-4 mb-5 text-center bg-light p-5 rounded-3 shadow-sm">
                <h1>About BookMyHotel</h1>
                <p className="tagline ">Your trusted partner in finding the perfect stay</p>
            </div>

            <section className="about-content mb-5 p-5 bg-white rounded-3 shadow-sm">
                <div className="about-section bg-dark text-white text-center p-5 rounded-3 mb-4">
                    <h2>Who We Are</h2>
                    <p>
                        BookMyHotel is a leading online hotel booking platform dedicated to providing travelers 
                        with seamless access to the world's best accommodations. We believe in making travel 
                        planning simple, affordable, and accessible to everyone.
                    </p>
                </div>

                <div className="about-section bg-light text-center p-5 rounded-3 mb-4">
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is to connect travelers with their ideal accommodations worldwide, offering 
                        competitive prices, transparent reviews, and exceptional customer service. We strive to 
                        make every journey memorable and hassle-free.
                    </p>
                </div>

                <div className="about-section bg-dark text-white text-center p-5 rounded-3 mb-4">
                    <h2>Why Choose Us</h2>
                    <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                        <li>✓ Wide selection of hotels and accommodations</li>
                        <li>✓ Best price guarantee</li>
                        <li>✓ Verified guest reviews</li>
                        <li>✓ 24/7 customer support</li>
                        <li>✓ Secure and easy booking process</li>
                        <li>✓ Flexible cancellation policies</li>
                    </ul>
                </div>

                <div className="about-section bg-light text-center p-5 rounded-3 mb-4">
                    <h2>Contact Us</h2>
                    <p>Email: support@bookmyhotel.com</p>
                    <p>Phone: 1-800-BOOK-HOTEL</p>
                </div>
            </section>
        </div>
    );
}

export default AboutPage;