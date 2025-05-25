import React from 'react'
import './home.css'

const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home-container">
      {/* Navigation Buttons */}
      <div className="nav-buttons">
        <img src="/feedboxlogo.png" alt="Feedbox Logo" className="nav-logo" />
        <button onClick={() => scrollToSection('home')} className="nav-button">Home</button>
        <button onClick={() => scrollToSection('about')} className="nav-button">About</button>
        <button onClick={() => scrollToSection('features')} className="nav-button">Features</button>
        <button onClick={() => scrollToSection('benefits')} className="nav-button">Benefits</button>
        <button onClick={() => scrollToSection('blog')} className="nav-button">Blog</button>
        <button onClick={() => scrollToSection('pricing')} className="nav-button">Pricing</button>
      </div>

      {/* Hero Section */}
      <section id="home" className="section hero-section">
        <div className="hero-content">
          <h1>Transform Your Content Experience</h1>
          <p className="hero-text">Streamline your digital life with Feedbox - the ultimate platform for managing RSS feeds, newsletters, and social content in one place.</p>
          <button onClick={() => scrollToSection('about')} className="cta-button">Discover More</button>
          <div className="hero-features">
            <div className="hero-feature">
              <img src="/stars-200h.png" alt="Quality" className="hero-icon" />
              <span>Top Rated</span>
            </div>
            <div className="hero-feature">
              <img src="/hearth-200h.png" alt="Trusted" className="hero-icon" />
              <span>User Loved</span>
            </div>
            <div className="hero-feature">
              <img src="/paper-200h.png" alt="Secure" className="hero-icon" />
              <span>Fully Secure</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src="/hero image-1200w.png" alt="Feedbox Dashboard" className="main-hero-image" />
          <img src="/vector 2-700w.png" alt="Background Shape" className="hero-shape-1" />
          <img src="/vector 2 [2]-700w.png" alt="Background Shape" className="hero-shape-2" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <h2>Why Choose Feedbox?</h2>
        <p className="section-subtitle">Your all-in-one content management solution</p>
        <div className="about-content">
          <div className="about-card">
            <img src="/vector 3-200h.png" alt="Mission" className="about-icon" />
            <h3>Our Mission</h3>
            <p>Empowering users to take control of their digital content consumption through innovative organization tools and smart automation.</p>
          </div>
          <div className="about-card">
            <img src="/vector 3 [1]-200h.png" alt="Vision" className="about-icon" />
            <h3>Our Vision</h3>
            <p>Creating a world where staying informed is effortless, and content discovery is a delightful experience.</p>
          </div>
          <div className="about-card">
            <img src="/vector 3 [2]-200h.png" alt="Values" className="about-icon" />
            <h3>Our Values</h3>
            <p>Committed to simplicity, user privacy, and continuous innovation in content management solutions.</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section features-section">
        <h2>Powerful Features</h2>
        <p className="section-subtitle">Everything you need to stay organized and informed</p>
        <div className="features-grid">
          <div className="feature-card">
            <img src="/rss-icon.png" alt="RSS Integration" className="feature-icon" />
            <h3>Smart RSS Integration</h3>
            <p>Connect unlimited RSS feeds from your favorite websites and blogs. Our smart categorization system automatically organizes content.</p>
          </div>
          <div className="feature-card">
            <img src="/mail-200h.png" alt="Email Integration" className="feature-icon" />
            <h3>Email Provider Support</h3>
            <p>Seamlessly integrate with Gmail, Outlook, and other major email providers. Never miss an important newsletter again.</p>
          </div>
          <div className="feature-card">
            <img src="/notification-icon.png" alt="Notifications" className="feature-icon" />
            <h3>Smart Notifications</h3>
            <p>Customize alerts for important content. Our AI system learns your preferences and prioritizes notifications accordingly.</p>
          </div>
          <div className="feature-card">
            <img src="/organize-icon.png" alt="Organization" className="feature-icon" />
            <h3>Advanced Organization</h3>
            <p>Use tags, folders, and smart filters to organize your content. Search and filter through your feeds with powerful tools.</p>
          </div>
          <div className="feature-card">
            <img src="/sync-icon.png" alt="Cross-platform" className="feature-icon" />
            <h3>Cross-platform Sync</h3>
            <p>Access your content from any device. Our cloud sync ensures your feeds are always up to date everywhere.</p>
          </div>
          <div className="feature-card">
            <img src="/share-icon.png" alt="Sharing" className="feature-icon" />
            <h3>Easy Sharing</h3>
            <p>Share interesting content with friends and colleagues directly from the app. Integration with major social platforms.</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="section benefits-section">
        <h2>Key Benefits</h2>
        <p className="section-subtitle">Why users love Feedbox</p>
        <div className="benefits-grid">
          <div className="benefit-item">
            <img src="/frame 34-200h.png" alt="Time Saving" className="benefit-icon" />
            <div className="benefit-content">
              <h3>Save Time</h3>
              <p>Reduce content management time by up to 60% with our smart automation tools.</p>
            </div>
          </div>
          <div className="benefit-item">
            <img src="/union-200h.png" alt="Stay Organized" className="benefit-icon" />
            <div className="benefit-content">
              <h3>Stay Organized</h3>
              <p>Keep all your content neatly organized and easily accessible.</p>
            </div>
          </div>
          <div className="benefit-item">
            <img src="/vector 3 [3]-200h.png" alt="Work Smarter" className="benefit-icon" />
            <div className="benefit-content">
              <h3>Work Smarter</h3>
              <p>Let our AI help you discover and prioritize the most relevant content.</p>
            </div>
          </div>
        </div>
        <div className="benefits-image">
          <img src="/frame-1200w.png" alt="Feedbox Benefits" className="benefits-main-image" />
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="section blog-section">
        <h2>Latest Updates</h2>
        <p className="section-subtitle">News and insights from our team</p>
        <div className="blog-grid">
          <article className="blog-post">
            <img src="/section-image1-1200w.png" alt="Mobile App Launch" className="blog-image" />
            <div className="blog-content">
              <span className="date">June 1, 2024</span>
              <h3>Mobile App Launch</h3>
              <p>We're excited to announce the launch of our mobile app for iOS and Android. Take your feeds anywhere with our powerful mobile experience.</p>
              <a href="#" className="read-more">Read More →</a>
            </div>
          </article>
          <article className="blog-post">
            <img src="/section-image2-1200w.png" alt="AI Features" className="blog-image" />
            <div className="blog-content">
              <span className="date">May 28, 2024</span>
              <h3>AI-Powered Content Discovery</h3>
              <p>Introducing our new AI-powered content discovery system. Let our smart algorithms find the content that matters to you.</p>
              <a href="#" className="read-more">Read More →</a>
            </div>
          </article>
          <article className="blog-post">
            <img src="/group 32-1200w.png" alt="New Integrations" className="blog-image" />
            <div className="blog-content">
              <span className="date">May 15, 2024</span>
              <h3>New Platform Integrations</h3>
              <p>We've added support for more platforms and services. Connect with your favorite content sources easier than ever.</p>
              <a href="#" className="read-more">Read More →</a>
            </div>
          </article>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section pricing-section">
        <h2>Choose Your Perfect Plan</h2>
        <p className="section-subtitle">Flexible options for everyone</p>
        <div className="pricing-grid">
          <div className="pricing-card">
            <img src="/basic-plan.png" alt="Basic Plan" className="plan-icon" />
            <h3>Free</h3>
            <p className="price">$0<span>/month</span></p>
            <ul>
              <li>✓ Up to 10 RSS feeds</li>
              <li>✓ Basic email integration</li>
              <li>✓ Standard notifications</li>
              <li>✓ Mobile app access</li>
              <li>✓ 7-day content history</li>
            </ul>
            <button className="signup-button">Get Started</button>
          </div>
          <div className="pricing-card featured">
            <img src="/pro-plan.png" alt="Pro Plan" className="plan-icon" />
            <div className="featured-tag">Most Popular</div>
            <h3>Pro</h3>
            <p className="price">$9.99<span>/month</span></p>
            <ul>
              <li>✓ Unlimited RSS feeds</li>
              <li>✓ Advanced email integration</li>
              <li>✓ Priority notifications</li>
              <li>✓ AI-powered categorization</li>
              <li>✓ Unlimited content history</li>
              <li>✓ Priority support</li>
            </ul>
            <button className="signup-button">Start Free Trial</button>
          </div>
          <div className="pricing-card">
            <img src="/enterprise-plan.png" alt="Enterprise Plan" className="plan-icon" />
            <h3>Enterprise</h3>
            <p className="price">Custom</p>
            <ul>
              <li>✓ All Pro features</li>
              <li>✓ Custom API access</li>
              <li>✓ Dedicated support</li>
              <li>✓ Custom integrations</li>
              <li>✓ Team collaboration</li>
              <li>✓ SLA guarantee</li>
            </ul>
            <button className="signup-button">Contact Sales</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section">
        <div className="footer-content">
          <div className="footer-brand">
            <img src="/logo-200h.png" alt="Feedbox Logo" className="footer-logo" />
            <p>Simplifying content consumption and management</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Product</h4>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#benefits">Benefits</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#blog">Blog</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Connect</h4>
              <div className="social-links">
                <a href="#" className="social-link"><img src="/twitter.png" alt="Twitter" /></a>
                <a href="#" className="social-link"><img src="/linkedin.png" alt="LinkedIn" /></a>
                <a href="#" className="social-link"><img src="/github.png" alt="GitHub" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Feedbox. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Home
