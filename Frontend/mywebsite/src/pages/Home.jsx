import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      

      <main>
        
        <header className="hero-section">
          <div className="hero-text">
            <h1 className="fade-in">Welcome to LaptopStore</h1>
            <p className="fade-in delay">Choose from 20+ laptops for work, gaming, or study</p>
            <a href="/products" className="btn fade-in delay2">Shop Now</a>
          </div>
        </header>

        
        <section className="home-body">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-card zoom-effect">
              <h3>High Performance</h3>
              <p>All laptops are equipped with latest processors and powerful graphics.</p>
            </div>
            <div className="feature-card zoom-effect">
              <h3>Affordable Prices</h3>
              <p>We offer the best deals without compromising quality.</p>
            </div>
            <div className="feature-card zoom-effect">
              <h3>Wide Selection</h3>
              <p>Gaming, business, student laptops — we have it all.</p>
            </div>
            <div className="feature-card zoom-effect">
              <h3>Reliable Support</h3>
              <p>Our team is available to assist you 24/7 with any issues.</p>
            </div>
          </div>
        </section>

       
        <section className="featured-laptops">
          <h2 className="section-title">Featured Laptops</h2>
          <div className="product-grid">
            <div className="product-card zoom-effect">
              <img
                src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800"
                alt="Gaming Laptop"
              />
              <h3>Gaming Beast X1</h3>
              <p className="price">$1299</p>
              <a href="/products" className="btn small">View</a>
            </div>

            <div className="product-card zoom-effect">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800"
                alt="Ultrabook Laptop"
              />
              <h3>UltraSlim Air 14</h3>
              <p className="price">$899</p>
              <a href="/products" className="btn small">View</a>
            </div>

            <div className="product-card zoom-effect">
              <img
                src="https://images.unsplash.com/photo-1522199710521-72d69614c702?w=800"
                alt="Business Laptop"
              />
              <h3>Business Pro 15</h3>
              <p className="price">$1099</p>
              <a href="/products" className="btn small">View</a>
            </div>
          </div>
        </section>

       
        <section className="cta-section">
          <h2>Ready to get your laptop?</h2>
          <p>Browse our full collection and find your perfect match.</p>
          <a href="/products" className="btn">Browse All Products</a>
        </section>
      </main>

      <footer>
        <p>2025 LaptopStore.</p>
      </footer>
    </>
  );
}
