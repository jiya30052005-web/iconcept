import React, { useState } from 'react';
import sameerAgrawalImg from './assets/sameer_agrawal.jpg';
import heroBannerUserPhoto from './assets/hero_banner_user_photo.png';
import footerBanner from './assets/footer_banner_new.jpg';

import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  MessageCircle, 
  Sparkles, 
  ArrowUpRight, 
  ChevronRight, 
  Menu, 
  X,
  Star
} from 'lucide-react';

const LOGO_IMG = 'https://iconceptinteriors.com/wp-content/uploads/2025/06/iConcept-Logo-300x133.png';

export default function ContactUs({ onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activeService, setActiveService] = useState('Interior Design Consultation');
  const [formValues, setFormValues] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormValues({
        name: '',
        phone: '',
        email: '',
        message: ''
      });
    }, 4500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pro-contact-root">
      
      {/* HERO BANNER MATCHING IMAGE 2 EXACTLY */}
      <section 
        className="pro-hero-banner-new"
        style={{ backgroundImage: `url(${heroBannerUserPhoto})` }}
      >
        {/* Header embedded over background photo */}
        <header className="pro-hero-nav">
          <a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>
            <img src={LOGO_IMG} alt="iConcept Interiors Logo" className="pro-brand-logo-img" />
          </a>

          <ul className={`pro-nav-menu ${mobileMenuOpen ? 'mobile-active' : ''}`}>
            <li>
              <a href="#home" className="pro-nav-link" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>
                HOME
              </a>
            </li>
            <li>
              <a href="#about" className="pro-nav-link" onClick={(e) => { e.preventDefault(); onNavigate('about'); }}>
                ABOUT US
              </a>
            </li>
            <li>
              <a href="#services" className="pro-nav-link" onClick={(e) => { e.preventDefault(); onNavigate('home', 'services'); }}>
                OUR SERVICES
              </a>
            </li>
            <li>
              <a href="#portfolio" className="pro-nav-link" onClick={(e) => { e.preventDefault(); onNavigate('home', 'portfolio'); }}>
                PROJECT GALLERY
              </a>
            </li>
            <li>
              <a href="#contacts" className="pro-nav-link active" onClick={(e) => { e.preventDefault(); scrollToTop(); }}>
                CONTACT US
              </a>
            </li>
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button className="pro-cta-btn-pill" onClick={() => scrollToTop()}>
              <span>GET YOUR DESIGN</span>
              <ChevronRight size={14} />
            </button>
            <button className="hero-mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} color="#FFFFFF" /> : <Menu size={24} color="#FFFFFF" />}
            </button>
          </div>
        </header>

        <div className="pro-hero-overlay-clean"></div>

        <div className="pro-hero-center-content">
          <h1 className="pro-hero-main-heading">CONTACT US</h1>
          <p className="pro-hero-sub-location">ICONCEPT INTERIORS • NAGPUR HQ</p>
        </div>
      </section>

      {/* 3. STRUCTURED 2-COLUMN LAYOUT */}
      <main className="pro-main-wrapper">
        <div className="pro-main-grid">

          {/* LEFT COLUMN: STRUCTURED DARK STUDIO HQ CARD */}
          <div className="pro-studio-card">
            <div>
              <div className="pro-card-tag">
                <span className="gold-diamond">◆</span>
                <span>FLAGSHIP STUDIO</span>
              </div>
              <h2 className="pro-card-title">Nagpur Studio HQ</h2>
              <p className="pro-card-sub">Private consultations by appointment.</p>
            </div>

            <div className="pro-divider"></div>

            {/* QUICK CONTACT MATRIX */}
            <div className="pro-contact-matrix">
              
              {/* Address */}
              <div className="pro-matrix-row">
                <div className="pro-icon-box"><MapPin size={18} /></div>
                <div>
                  <span className="pro-matrix-label">STUDIO ADDRESS</span>
                  <p className="pro-matrix-val">
                    165, Dronacharya Nagar, Trimurti Nagar, <br />
                    Nagpur, MH — 440022
                  </p>
                  <a 
                    href="https://maps.google.com/?q=165+Dronacharya+Nagar+Trimurti+Nagar+Nagpur+440022" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="pro-maps-link"
                  >
                    <span>Google Maps Directions</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="pro-matrix-row">
                <div className="pro-icon-box"><Phone size={18} /></div>
                <div>
                  <span className="pro-matrix-label">DIRECT PHONE</span>
                  <a href="tel:+919021703030" className="pro-phone-num">+91 90217 03030</a>
                  <a 
                    href="https://wa.me/919021703030?text=Hello%20iConcept%20Interiors,%20I%20want%20to%20discuss%20a%20new%20interior%20project." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="pro-wa-link"
                  >
                    <MessageCircle size={13} />
                    <span>WhatsApp Direct</span>
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="pro-matrix-row">
                <div className="pro-icon-box"><Mail size={18} /></div>
                <div>
                  <span className="pro-matrix-label">OFFICIAL EMAIL</span>
                  <a href="mailto:sa@iconceptinteriors.com" className="pro-email-address">sa@iconceptinteriors.com</a>
                </div>
              </div>

              {/* Hours */}
              <div className="pro-matrix-row">
                <div className="pro-icon-box"><Clock size={18} /></div>
                <div>
                  <span className="pro-matrix-label">STUDIO HOURS</span>
                  <p className="pro-matrix-val">Mon — Sat: 10:00 AM – 8:00 PM IST</p>
                </div>
              </div>

            </div>

            <div className="pro-divider"></div>

            {/* ARCHITECT FOOTER BADGE */}
            <div className="pro-architect-bar">
              <img 
                src={sameerAgrawalImg} 
                alt="Sameer Agrawal — Principal Architect" 
                className="pro-avatar" 
              />
              <div>
                <span className="pro-arch-name">Sameer Agrawal</span>
                <span className="pro-arch-role">Founder & Principal Architect</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: STRUCTURED LIGHT CONSULTATION FORM */}
          <div className="pro-form-card">
            
            <div className="pro-form-head">
              <span className="pro-form-tag">PRIVATE CONSULTATION</span>
              <h3 className="pro-form-h3">Request A Consultation</h3>
              <p className="pro-form-p">Fill in your requirements below for a custom design estimate.</p>
            </div>

            {submitted ? (
              <div className="pro-success-card">
                <CheckCircle2 size={50} className="gold-sparkle" />
                <h4 className="pro-success-h4">Inquiry Received</h4>
                <p className="pro-success-p">
                  Thank you, <strong>{formValues.name}</strong>. Sameer Agrawal and team will get back to you within 24 hours regarding <strong>{activeService}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="pro-form-fields">
                
                {/* SERVICE TYPE (COMPACT DROPDOWN SELECT MENU) */}
                <div className="pro-field-group">
                  <label className="pro-label" htmlFor="serviceSelect">SELECT SERVICE TYPE *</label>
                  <select 
                    id="serviceSelect"
                    className="pro-select-input"
                    value={activeService}
                    onChange={e => setActiveService(e.target.value)}
                  >
                    <option value="Interior Design Consultation">Interior Design Consultation</option>
                    <option value="Commercial Interior Design">Commercial Interior Design</option>
                    <option value="Residential Interior Design">Residential Interior Design</option>
                    <option value="Interior 2D/3D Layouts">Interior 2D/3D Layouts</option>
                    <option value="Outdoor and Landscape Design">Outdoor and Landscape Design</option>
                    <option value="Renovation and Remodeling">Renovation and Remodeling</option>
                  </select>
                </div>

                {/* YOUR NAME */}
                <div className="pro-field-group">
                  <label className="pro-label">YOUR NAME *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Full Name" 
                    className="pro-input"
                    value={formValues.name}
                    onChange={e => setFormValues({ ...formValues, name: e.target.value })}
                  />
                </div>

                {/* PHONE NO. & EMAIL ADDRESS */}
                <div className="pro-field-row">
                  <div className="pro-field-group">
                    <label className="pro-label">PHONE NO. *</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="+91 Phone Number" 
                      className="pro-input"
                      value={formValues.phone}
                      onChange={e => setFormValues({ ...formValues, phone: e.target.value })}
                    />
                  </div>

                  <div className="pro-field-group">
                    <label className="pro-label">EMAIL ADDRESS *</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="Email Address" 
                      className="pro-input"
                      value={formValues.email}
                      onChange={e => setFormValues({ ...formValues, email: e.target.value })}
                    />
                  </div>
                </div>

                {/* YOUR MESSAGE */}
                <div className="pro-field-group">
                  <label className="pro-label">YOUR MESSAGE</label>
                  <textarea 
                    rows={4}
                    placeholder="Project location, area (sq.ft), timeline or key preferences..." 
                    className="pro-textarea"
                    value={formValues.message}
                    onChange={e => setFormValues({ ...formValues, message: e.target.value })}
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <button type="submit" className="pro-submit-btn">
                  <span>SUBMIT CONSULTATION INQUIRY</span>
                  <ArrowUpRight size={16} />
                </button>

                <p className="pro-confidential-tag">
                  <Sparkles size={12} className="gold-sparkle" />
                  <span>Strict professional confidentiality guaranteed.</span>
                </p>

              </form>
            )}

          </div>

        </div>
      </main>

      {/* 4. GOOGLE MAP SECTION */}
      <section className="pro-map-section">
        <div className="pro-map-container">
          
          <div className="pro-map-header">
            <div className="pro-card-tag" style={{ margin: 0 }}>
              <span className="gold-diamond">◆</span>
              <span>STUDIO LOCATION</span>
            </div>
            <h3 className="pro-map-title">Visit Our Flagship Nagpur Studio</h3>
          </div>

          <div className="pro-map-frame">
            <iframe 
              title="iConcept Interiors Studio Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.493863481234!2d79.0435!3d21.1324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34150f%3A0x0!2siConcept+Interiors+by+Sameer+Agrawal!5e0!3m2!1sen!2sin!4v1700000000000" 
              width="100%" 
              height="420" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="pro-map-overlay-card">
              <span className="pro-card-tag">FLAGSHIP STUDIO</span>
              <h4 className="pro-map-name">iConcept Interiors</h4>
              <p className="pro-map-addr">
                165, Dronacharya Nagar, Trimurti Nagar, Nagpur, MH 440022
              </p>
              <a 
                href="https://maps.google.com/?q=165+Dronacharya+Nagar+Trimurti+Nagar+Nagpur+440022" 
                target="_blank" 
                rel="noopener noreferrer"
                className="pro-map-btn"
              >
                <span>GET DIRECTIONS</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* PRE-FOOTER BANNER WITH GRADIENT MASK & CENTERED LOGO OVERLAY */}
      <div className="footer-banner-section" onClick={() => scrollToTop()}>
        <img src={footerBanner} alt="iConcept Interiors" className="footer-banner-img" />
        <div className="footer-banner-mask"></div>
        <div className="footer-banner-center-content">
          <img src="https://iconceptinteriors.com/wp-content/uploads/2025/06/iConcept-Logo-300x133.png" alt="iConcept Interiors Logo" className="footer-banner-logo" />
        </div>
      </div>

      {/* ══ MAIN FOOTER ══ */}
      <footer id="contacts" className="site-footer">

        <div className="site-footer__inner">

          {/* â”€â”€ BRAND COLUMN â”€â”€ */}
          <div className="footer-brand-col">
            <p className="footer-brand-tagline">
              We transform your vision into beautifully crafted spaces — Interior design that inspires, functions beautifully, and reflects your personality.
            </p>

            {/* Clean Minimal Contact List (No Bulky Cards) */}
            <div className="footer-contact-clean-list">
              <a href="tel:+919021703030" className="footer-contact-clean-item">
                <Phone size={14} className="footer-contact-clean-icon" />
                <span>+91 90217 03030</span>
              </a>
              <a href="mailto:sa@iconceptinteriors.com" className="footer-contact-clean-item">
                <Mail size={14} className="footer-contact-clean-icon" />
                <span>sa@iconceptinteriors.com</span>
              </a>
              <div className="footer-contact-clean-item">
                <MapPin size={14} className="footer-contact-clean-icon" />
                <span>165, Dronacharya Nagar, Trimurti Nagar, Nagpur – 440022</span>
              </div>
            </div>
          </div>

          {/* ── NAV COLUMNS ── */}
          <div className="footer-nav-section">

            <div className="footer-nav-col">
              <h5 className="footer-col-heading">The Studio</h5>
              <ul className="footer-nav-list">
                <li><a href="#about" onClick={(e) => { e.preventDefault(); onNavigate('about'); }}><span className="fn-arrow">→</span> About Us</a></li>
                <li><a href="#portfolio" onClick={(e) => { e.preventDefault(); onNavigate('home', 'portfolio'); }}><span className="fn-arrow">→</span> Our Projects</a></li>
                <li><a href="#services" onClick={(e) => { e.preventDefault(); onNavigate('home', 'services'); }}><span className="fn-arrow">→</span> Services</a></li>
                <li><a href="#services" onClick={(e) => { e.preventDefault(); onNavigate('home', 'services'); }}><span className="fn-arrow">→</span> Our Process</a></li>
                <li><a href="#services" onClick={(e) => { e.preventDefault(); onNavigate('home', 'services'); }}><span className="fn-arrow">→</span> FAQ</a></li>
              </ul>
            </div>

            <div className="footer-nav-col">
              <h5 className="footer-col-heading">Client Services</h5>
              <ul className="footer-nav-list">
                <li><a href="#contacts" onClick={(e) => { e.preventDefault(); onNavigate('contacts'); }}><span className="fn-arrow">→</span> Design Consult</a></li>
                <li><a href="#contacts" onClick={(e) => { e.preventDefault(); onNavigate('contacts'); }}><span className="fn-arrow">→</span> Contact Us</a></li>
                <li><a href="#contacts" onClick={(e) => { e.preventDefault(); onNavigate('contacts'); }}><span className="fn-arrow">→</span> Get a Quote</a></li>
                <li><a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}><span className="fn-arrow">→</span> Privacy Policy</a></li>
                <li><a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}><span className="fn-arrow">→</span> Terms &amp; Conditions</a></li>
              </ul>
            </div>

            <div className="footer-nav-col">
              <h5 className="footer-col-heading">Follow Our Work</h5>
              <div className="footer-social-icons-row">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon-circle" title="Instagram">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon-circle" title="Pinterest">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.16 9.42 7.63 11.17-.11-.95-.2-2.41.04-3.45.22-.94 1.42-6.02 1.42-6.02s-.36-.72-.36-1.78c0-1.67.97-2.92 2.17-2.92 1.02 0 1.52.77 1.52 1.69 0 1.03-.66 2.57-1 3.99-.28 1.19.6 2.16 1.77 2.16 2.13 0 3.77-2.25 3.77-5.49 0-2.87-2.06-4.88-5.01-4.88-3.41 0-5.42 2.56-5.42 5.2 0 1.03.4 2.13.9 2.74.1.12.11.23.08.35-.09.38-.3.1.22-.34 1.39-.06.23-.2.31-.44.22-1.66-.77-2.7-3.21-2.7-5.17 0-4.2 3.06-8.07 8.81-8.07 4.63 0 8.23 3.3 8.23 7.71 0 4.6-2.9 8.3-6.93 8.3-1.35 0-2.62-.7-3.06-1.54l-.83 3.17c-.3 1.16-1.12 2.61-1.67 3.49C9.7 23.82 10.83 24 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon-circle" title="LinkedIn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>

              <div className="footer-review-box">
                <div className="footer-review-top">
                  <div className="footer-review-stars">
                    {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="#D39858" color="#D39858" />)}
                  </div>
                  <span className="footer-review-score">4.9</span>
                </div>
                <p className="footer-review-count">43 Google Reviews</p>
              </div>
            </div>

          </div>
        </div>

        <div className="footer-rule">
          <div className="footer-rule-line"></div>
          <div className="footer-rule-diamond">◆</div>
          <div className="footer-rule-line"></div>
        </div>

        <div className="footer-bottom">
          <p className="footer-bottom-copy">© {new Date().getFullYear()} iConcept Interiors — All Rights Reserved</p>
          <p className="footer-bottom-craft">Crafted with precision · Nagpur, India</p>
        </div>

      </footer>

    </div>
  );
}
