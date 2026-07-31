import React, { useState, useEffect, useRef } from 'react';
import footerBanner from './assets/footer_banner_new.jpg';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import { 
  ChevronRight, 
  ChevronLeft,
  X, 
  Menu, 
  Phone, 
  Mail, 
  MapPin, 
  Star,
  ArrowUp,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  Sparkles,
  Palette,
  Building2,
  Home,
  Layers,
  Trees,
  Hammer,
  ArrowUpRight
} from 'lucide-react';

const IMAGES = {
  logo: 'https://iconceptinteriors.com/wp-content/uploads/2025/06/iConcept-Logo-300x133.png',
  heroSlideshow: [
    {
      img: '/hero_user_1.jpg',
      tag: 'Commercial & Luxury Showroom',
      title: 'WORKSPACES THAT DRIVE SUCCESS',
      paragraph: 'Bespoke retail and commercial environments designed to elevate brand identity and guest status.'
    },
    {
      img: '/hero_user_2.jpg',
      tag: 'Bespoke Residential Living',
      title: 'WE DESIGN THE FEELING OF YOU',
      paragraph: 'Custom living spaces crafted with warmth, luxury furnishings, and timeless architectural elegance.'
    },
    {
      img: '/hero_user_3.jpg',
      tag: 'Outdoor & Landscape Architecture',
      title: 'VERDANT SKY TERRACE DESIGNS',
      paragraph: 'Functional outdoor living areas, green terraces, balconies, and garden landscapes blending nature with luxury.'
    }
  ],
  aboutDecor: 'https://iconceptinteriors.com/wp-content/uploads/2025/08/Untitled-design-4.jpg',
  portfolio: [
    {
      id: 1,
      title: 'Ajmera Luxury Showroom',
      category: 'Commercial',
      year: '2025',
      img: 'https://iconceptinteriors.com/wp-content/uploads/2025/08/2-1.jpg',
      location: 'Nagpur'
    },
    {
      id: 2,
      title: 'Italy Via Punjab Fine Dining',
      category: 'Hospitality',
      year: '2025',
      img: 'https://iconceptinteriors.com/wp-content/uploads/2025/08/1-1.jpg',
      location: 'Nagpur'
    },
    {
      id: 3,
      title: 'Londe Fine Jewellery',
      category: 'Commercial',
      year: '2025',
      img: 'https://iconceptinteriors.com/wp-content/uploads/2025/08/3-1.jpg',
      location: 'Nagpur'
    },
    {
      id: 4,
      title: 'Natural Luxury Salon & Spa',
      category: 'Hospitality',
      year: '2024',
      img: 'https://iconceptinteriors.com/wp-content/uploads/2025/08/4.jpg',
      location: 'Nagpur'
    },
    {
      id: 5,
      title: 'Shabana Artisan Bakery',
      category: 'Hospitality',
      year: '2025',
      img: 'https://iconceptinteriors.com/wp-content/uploads/2025/06/1.jpg',
      location: 'Nagpur'
    },
    {
      id: 6,
      title: 'Sana Sheikh Villa',
      category: 'Residential',
      year: '2025',
      img: 'https://iconceptinteriors.com/wp-content/uploads/2025/06/2.jpg',
      location: 'Nagpur'
    },
    {
      id: 7,
      title: 'Ved Satpute Penthouse Suite',
      category: 'Residential',
      year: '2024',
      img: 'https://iconceptinteriors.com/wp-content/uploads/2025/06/3.jpg',
      location: 'Nagpur'
    },
    {
      id: 8,
      title: 'Dronacharya Corporate HQ',
      category: 'Office',
      year: '2025',
      img: 'https://iconceptinteriors.com/wp-content/uploads/2025/08/3.jpg',
      location: 'Nagpur'
    }
  ]
};

const SERVICES_DATA = [
  {
    icon: Palette,
    num: '01',
    title: 'Interior Design Consultation',
    desc: 'Personalized expert consultation to conceptualize your vision, moodboards, color palettes, and material selections tailored to your space.',
    img: 'https://iconceptinteriors.com/wp-content/uploads/2025/08/1.jpg',
    tag: 'Concept & Styling'
  },
  {
    icon: Building2,
    num: '02',
    title: 'Commercial Interior Design',
    desc: 'From corporate offices to boutique retail spaces and fine dining restaurants, we craft inspiring commercial environments that elevate your brand.',
    img: 'https://iconceptinteriors.com/wp-content/uploads/2025/08/2-1.jpg',
    tag: 'Corporate & Retail'
  },
  {
    icon: Home,
    num: '03',
    title: 'Residential Interior Design',
    desc: 'Bespoke home interiors for apartments, villas, and luxury residences crafted for warmth, comfort, elegance, and modern functional living.',
    img: 'https://iconceptinteriors.com/wp-content/uploads/2025/08/2.jpg',
    tag: 'Luxury Living'
  },
  {
    icon: Layers,
    num: '04',
    title: 'Interior 2D/3D Layouts',
    desc: 'Detailed architectural 2D floor plans and photorealistic 3D virtual renderings to walk through your space before construction starts.',
    img: 'https://iconceptinteriors.com/wp-content/uploads/2025/08/3-1.jpg',
    tag: 'Photorealistic Visuals'
  },
  {
    icon: Trees,
    num: '05',
    title: 'Outdoor & Landscape Design',
    desc: 'Functional outdoor living areas, green terraces, balconies, and garden landscapes that blend nature seamlessly with interior architecture.',
    img: 'https://iconceptinteriors.com/wp-content/uploads/2025/08/4.jpg',
    tag: 'Verdant Architecture'
  },
  {
    icon: Hammer,
    num: '06',
    title: 'Renovation and Remodeling',
    desc: 'Complete space transformations, structural redesigns, and luxury remodeling to give existing properties a brand-new elevated identity.',
    img: 'https://iconceptinteriors.com/wp-content/uploads/2025/08/3.jpg',
    tag: 'Full Transformation'
  }
];

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', spaceType: 'Residential', message: '' });

  const portfolioSliderRef = useRef(null);

  const handleNavigate = (page, sectionId = null) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (sectionId && page === 'home') {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  // Auto-sliding 3-Image Cover Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex(prev => (prev + 1) % IMAGES.heroSlideshow.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const filterCategories = ['all', 'residential', 'commercial', 'hospitality', 'office'];

  const filteredPortfolio = activeFilter === 'all'
    ? IMAGES.portfolio
    : IMAGES.portfolio.filter(item => item.category.toLowerCase() === activeFilter);

  const scrollPortfolio = (direction) => {
    if (portfolioSliderRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      portfolioSliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setIsModalOpen(false);
      setFormData({ name: '', phone: '', spaceType: 'Residential', message: '' });
    }, 2500);
  };

  const currentSlide = IMAGES.heroSlideshow[currentSlideIndex];
  const activeService = SERVICES_DATA[activeServiceIndex];
  const ActiveServiceIcon = activeService.icon;

  if (currentPage === 'about') {
    return <AboutUs onNavigate={handleNavigate} onOpenModal={() => setIsModalOpen(true)} />;
  }

  if (currentPage === 'contacts') {
    return <ContactUs onNavigate={handleNavigate} />;
  }

  return (
    <div className="landing-app">
      {/* Full-Width 16:9 Aspect Ratio Hero Cover Section */}
      <section id="home" className="hero-full-container">
        {/* Header embedded inside Hero section */}
        <header className="hero-navbar">
          <a href="#home" onClick={(e) => { e.preventDefault(); handleNavigate('home'); }}>
            <img src={IMAGES.logo} alt="iConcept Interiors Logo" className="hero-brand-logo-img" />
          </a>

          <ul className={`hero-nav-menu ${mobileMenuOpen ? 'mobile-active' : ''}`}>
            <li><a href="#home" className={`hero-nav-link ${currentPage === 'home' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavigate('home'); }}>Home</a></li>
            <li><a href="#about" className="hero-nav-link" onClick={(e) => { e.preventDefault(); handleNavigate('about'); }}>About us</a></li>
            <li><a href="#services" className="hero-nav-link" onClick={(e) => { e.preventDefault(); handleNavigate('home', 'services'); }}>Our Services</a></li>
            <li><a href="#portfolio" className="hero-nav-link" onClick={(e) => { e.preventDefault(); handleNavigate('home', 'portfolio'); }}>Project Gallery</a></li>
            <li><a href="#contacts" className="hero-nav-link" onClick={(e) => { e.preventDefault(); handleNavigate('contacts'); }}>Contact us</a></li>
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button className="hero-cta-btn" onClick={() => setIsModalOpen(true)}>
              Get Your Design <ChevronRight size={14} />
            </button>
            <button className="hero-mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </header>

        {/* Ultra HD 2560x1440 16:9 Background Images */}
        {IMAGES.heroSlideshow.map((slide, idx) => (
          <div 
            key={idx}
            className="hero-single-cover-bg"
            style={{
              backgroundImage: `url(${slide.img})`,
              opacity: idx === currentSlideIndex ? 1 : 0
            }}
          ></div>
        ))}
        <div className="hero-full-overlay"></div>

        {/* Hero Content Overlay */}
        <div className="hero-full-content">
          <div className="hero-left-text-box">
            <p className="hero-tag-subtitle">{currentSlide.tag}</p>
            <h1 className="hero-huge-title">{currentSlide.title}</h1>
          </div>

          <div className="hero-right-action-box">
            <p className="hero-right-paragraph">{currentSlide.paragraph}</p>
            <button className="btn-pill-white" onClick={() => setIsModalOpen(true)}>
              Get My Feeling <ChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* Dots Controls */}
        <div className="hero-slideshow-dots">
          {IMAGES.heroSlideshow.map((_, idx) => (
            <button 
              key={idx} 
              className={`hero-dot-btn ${idx === currentSlideIndex ? 'active' : ''}`}
              onClick={() => setCurrentSlideIndex(idx)}
              title={`Slide ${idx + 1}`}
            ></button>
          ))}
        </div>
      </section>

      {/* Section 2: INNOVATED THEME-MATCHED ABOUT SECTION */}
      <section id="about" className="about-section">
        <div className="about-innovative-header">
          <div className="section-pill-tag-badge">
            <span className="gold-dot"></span>
            <span>STUDIO PHILOSOPHY</span>
          </div>
          <div className="about-title-wrapper">
            <span className="about-prefix-gold">AT</span>
            <h2 className="about-title-theme">iCONCEPT INTERIORS,</h2>
          </div>
        </div>

        <div className="about-philosophy-quote-box">
          <p className="about-lead-text-theme">
            We believe interior design is <span className="highlight-gold">more than just aesthetics</span> — it's about creating bespoke spaces that <span className="highlight-espresso">inspire</span>, function beautifully, and reflect the true essence of the people who inhabit them.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-image-card-theme">
            <img src={IMAGES.aboutDecor} alt="iConcept Interiors craftsmanship" />
            <div className="about-img-floating-badge">
              <span>EST. 2016 • CRAFTSMANSHIP & ELEGANCE</span>
            </div>
          </div>

          {/* UNIQUE LUXURY ARCHITECTURAL STATS SHOWCASE (NON-GENERIC GRID) */}
          <div className="unique-stats-showcase">
            <div className="stats-pillars-row">
              {/* Pillar 1: YEARS OF EXCELLENCE */}
              <div className="stat-pillar-card">
                <div className="stat-pillar-top">
                  <span className="stat-highlight-badge">YEARS OF EXCELLENCE</span>
                  <span className="stat-huge-num">8+</span>
                </div>
                <p className="stat-pillar-desc">
                  Years into reimagining spaces & rewriting the rules of interior architecture.
                </p>
              </div>

              {/* Pillar 2: MASTER CRAFTSMEN */}
              <div className="stat-pillar-card">
                <div className="stat-pillar-top">
                  <span className="stat-highlight-badge">MASTER CRAFTSMEN</span>
                  <span className="stat-huge-num">20+</span>
                </div>
                <p className="stat-pillar-desc">
                  Expert designers & master artisans who know their craft inside out.
                </p>
              </div>

              {/* Pillar 3: COMPLETED PROJECTS */}
              <div className="stat-pillar-card">
                <div className="stat-pillar-top">
                  <span className="stat-highlight-badge">COMPLETED PROJECTS</span>
                  <span className="stat-huge-num">250+</span>
                </div>
                <p className="stat-pillar-desc">
                  Completed luxury residences, villas & commercial projects across India.
                </p>
              </div>
            </div>

            {/* Featured Quote Banner Below Pillars */}
            <div className="stats-quote-banner">
              <div className="quote-banner-left">
                <span className="quote-icon-gold">“</span>
                <p className="quote-banner-text">
                  Design isn't just what you see — it's how a space lives with you.
                </p>
              </div>
              <a href="#services" className="btn-quote-banner-cta">
                <span>Explore Methodology</span>
                <ChevronRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ EXACT MATCH SERVICES SECTION ══ */}
      <section id="services" className="services-section premium-services-layout">
        <div className="section-header-flex">
          <div>
            <div className="services-pill-tag-badge">
              <span className="gold-dot"></span>
              <span>OUR SERVICES</span>
            </div>
            <h2 className="section-title">
              Transforming <span className="highlight-gold-text">Ideas Into</span> Exceptional Spaces
            </h2>
          </div>
          <p className="services-header-desc">
            Step into our world of innovative design, where architectural and interior projects come to life with precision and creativity.
          </p>
        </div>

        <div className="services-interactive-wrapper">
          {/* Left Column: Clean High-Def Photo Showcase */}
          <div className="clean-photo-showcase">
            <div className="clean-photo-frame">
              <img 
                key={activeServiceIndex}
                src={activeService.img} 
                alt={activeService.title} 
                className="clean-service-img"
              />
              <div className="clean-photo-badge">
                <span className="gold-dot"></span>
                <span>{activeService.tag ? activeService.tag.toUpperCase() : 'ARCHITECTURE'}</span>
              </div>
            </div>

            {/* Clean Minimal Text Below Photo */}
            <div className="clean-photo-info">
              <div className="clean-info-top">
                <span className="clean-service-num">0{activeServiceIndex + 1} / 06</span>
                <h3 className="clean-service-title">{activeService.title}</h3>
              </div>
              <p className="clean-service-desc">{activeService.desc}</p>
            </div>
          </div>

          {/* Middle Column: Vertical Divider Line */}
          <div className="services-vertical-divider" aria-hidden="true"></div>

          {/* Right Column: Symmetrical Vertical List of 6 Services */}
          <div className="services-symmetrical-list">
            {SERVICES_DATA.map((service, index) => {
              const ServiceIcon = service.icon;
              const isActive = activeServiceIndex === index;
              return (
                <div 
                  key={index} 
                  className={`services-sym-item ${isActive ? 'active' : ''}`}
                  onMouseEnter={() => setActiveServiceIndex(index)}
                  onClick={() => {
                    setActiveServiceIndex(index);
                    setIsModalOpen(true);
                  }}
                >
                  <div className="services-sym-left">
                    <div className="services-sym-icon">
                      <ServiceIcon size={20} />
                    </div>
                    <h3 className="services-sym-title">{service.title}</h3>
                  </div>
                  
                  <div className="services-sym-arrow-box">
                    {isActive ? (
                      <div className="sym-active-btn">
                        <ArrowRight size={16} />
                      </div>
                    ) : (
                      <ArrowUpRight size={18} className="sym-inactive-arrow" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ iCONCEPT METHODOLOGY ══ */}
      <section className="work-section blended-work-section methodology-theme-section">
        <div className="section-header-flex">
          <div>
            <div className="section-pill-tag-badge">
              <span className="gold-dot"></span>
              <span>iCONCEPT METHODOLOGY</span>
            </div>
            <h2 className="section-title">
              Crafting Spaces That Inspire. <span className="highlight-gold-text">How We Work</span>
            </h2>
          </div>
          <p className="methodology-header-desc">
            Our 4-step architectural design methodology ensures precision, elegance, and seamless execution from initial concept to final delivery.
          </p>
        </div>

        <div className="methodology-cards-grid">
          {/* STEP 01 */}
          <div className="methodology-card image-card">
            <div className="method-card-bg-img" style={{ backgroundImage: `url('/hero_luxury_1.jpg')` }}></div>
            <div className="method-card-overlay"></div>
            <div className="method-card-content">
              <div className="method-card-top-row">
                <span className="method-step-num">01</span>
                <span className="method-step-label">PHASE 01</span>
              </div>
              <div className="method-card-body">
                <h3 className="method-card-title">Understand</h3>
                <p className="method-card-text">Deep dive into your lifestyle, aesthetic vision, space requirements, and functional preferences.</p>
              </div>
            </div>
          </div>

          {/* STEP 02 */}
          <div className="methodology-card image-card">
            <div className="method-card-bg-img" style={{ backgroundImage: `url('/hero_luxury_2.jpg')` }}></div>
            <div className="method-card-overlay"></div>
            <div className="method-card-content">
              <div className="method-card-top-row">
                <span className="method-step-num">02</span>
                <span className="method-step-label">PHASE 02</span>
              </div>
              <div className="method-card-body">
                <h3 className="method-card-title">Design</h3>
                <p className="method-card-text">Crafting spatial layouts, lighting schemes, and photorealistic 3D architectural renders.</p>
              </div>
            </div>
          </div>

          {/* STEP 03 */}
          <div className="methodology-card image-card">
            <div className="method-card-bg-img" style={{ backgroundImage: `url('/hero_luxury_3.jpg')` }}></div>
            <div className="method-card-overlay"></div>
            <div className="method-card-content">
              <div className="method-card-top-row">
                <span className="method-step-num">03</span>
                <span className="method-step-label">PHASE 03</span>
              </div>
              <div className="method-card-body">
                <h3 className="method-card-title">Materialization</h3>
                <p className="method-card-text">Hand-selecting premium marbles, bespoke joinery, artisan fabrics, and designer fixtures.</p>
              </div>
            </div>
          </div>

          {/* STEP 04 */}
          <div className="methodology-card image-card">
            <div className="method-card-bg-img" style={{ backgroundImage: `url('/hero_custom_1.jpg')` }}></div>
            <div className="method-card-overlay"></div>
            <div className="method-card-content">
              <div className="method-card-top-row">
                <span className="method-step-num">04</span>
                <span className="method-step-label">PHASE 04</span>
              </div>
              <div className="method-card-body">
                <h3 className="method-card-title">Deliver</h3>
                <p className="method-card-text">Flawless on-site supervision, turnkey construction management, and white-glove handover.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          AWWWARDS-INSPIRED LUXURY MASONRY PROJECT GALLERY
          ========================================================================== */}
      <section id="portfolio" className="awwwards-portfolio-section">
        <div className="awwwards-portfolio-container">
          {/* CURVED COMPACT SINGLE-LINE HEADER BLOCK */}
          <div className="awwwards-header-block">
            <div className="awwwards-curved-header-pill">
              <div className="section-pill-tag-badge" style={{ margin: 0 }}>
                <span className="gold-dot"></span>
                <span>SELECTED PROJECTS</span>
              </div>
              <span className="curved-pill-divider"></span>
              <h2 className="curved-pill-title">Selected Projects</h2>
              <span className="curved-pill-counter">[ 08 WORKS ]</span>
            </div>

            {/* Filter Pills */}
            <div className="awwwards-filter-wrapper">
              <div className="awwwards-filter-pills">
                {filterCategories.map(cat => (
                  <button 
                    key={cat} 
                    className={`awwwards-filter-pill ${activeFilter === cat ? 'active' : ''}`}
                    onClick={() => setActiveFilter(cat)}
                  >
                    {cat.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* Mobile Arrows */}
              <div className="awwwards-mobile-arrows">
                <button className="awwwards-arrow-btn" onClick={() => scrollPortfolio('left')}>
                  <ChevronLeft size={20} />
                </button>
                <button className="awwwards-arrow-btn" onClick={() => scrollPortfolio('right')}>
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Symmetrical Project Cards Grid */}
          <div className="awwwards-masonry-grid" ref={portfolioSliderRef}>
            {filteredPortfolio.map(item => (
              <div 
                key={item.id} 
                className="awwwards-project-card"
                onClick={() => setIsModalOpen(true)}
              >
                <div className="awwwards-card-img-wrapper">
                  <img src={item.img} alt={item.title} />
                  
                  {/* Floating Category Badge Top-Left */}
                  <span className="awwwards-card-badge">
                    {item.category.toUpperCase()} • {item.location.toUpperCase()}
                  </span>

                  {/* Dark Gradient Overlay */}
                  <div className="awwwards-card-overlay"></div>

                  {/* Hover Floating Action Button */}
                  <div className="awwwards-hover-action-btn">
                    <span>VIEW PROJECT</span>
                    <ArrowUpRight size={18} />
                  </div>

                  {/* Card Content Overlay */}
                  <div className="awwwards-card-info-content">
                    <span className="awwwards-year-tag">{item.year}</span>
                    <h3 className="awwwards-project-title">{item.title}</h3>
                    <p className="awwwards-project-meta">{item.category} Architectural Design — {item.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Projects CTA Button */}
          <div className="awwwards-cta-row">
            <button className="awwwards-view-all-btn" onClick={() => setIsModalOpen(true)}>
              <span>VIEW ALL PROJECTS</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="testimonials-section">
        <div className="section-header-flex">
          <div>
            <div className="section-pill-tag-badge">
              <span className="gold-dot"></span>
              <span>CLIENT REVIEWS</span>
            </div>
            <h2 className="section-title">What Our Clients Say</h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ display: 'flex', color: 'var(--primary-gold)' }}>
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="var(--primary-gold)" />)}
            </div>
            <span style={{ fontWeight: 500, fontSize: '0.9rem' }}>4.9 ★ (43 Reviews)</span>
          </div>
        </div>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p className="testimonial-text">
              "We wanted a minimalistic yet appealing decor for our new 3BHK apartment. We approached iConcept because they had a versatile portfolio. Sameer ji and the team were super flexible when blending requirements with design aesthetics."
            </p>
            <h4 className="testimonial-author">Shreya Bhoyar</h4>
            <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: 300 }}>Homeowner, Nagpur</p>
          </div>

          <div className="testimonial-card">
            <p className="testimonial-text">
              "It was my first work with them and it was really great! The design, the work finishing, and creativity are best in price. They have a good backend team to work on the model and design you choose."
            </p>
            <h4 className="testimonial-author">Rodney John</h4>
            <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: 300 }}>Commercial Client</p>
          </div>
        </div>
      </section>



      {/* ══ PRE-FOOTER BANNER WITH GRADIENT MASK & CENTERED LOGO OVERLAY ══ */}
      <div className="footer-banner-section" onClick={() => setIsModalOpen(true)}>
        <img 
          src={footerBanner} 
          alt="iConcept Interiors" 
          className="footer-banner-img" 
        />
        <div className="footer-banner-mask"></div>
        <div className="footer-banner-center-content">
          <img src={IMAGES.logo} alt="iConcept Interiors Logo" className="footer-banner-logo" />
        </div>
      </div>

      {/* ══ MAIN FOOTER ══ */}
      <footer id="contacts" className="site-footer">

        <div className="site-footer__inner">

          {/* ── BRAND COLUMN ── */}
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
                <li><a href="#about" onClick={(e) => { e.preventDefault(); handleNavigate('about'); }}><span className="fn-arrow">→</span> About Us</a></li>
                <li><a href="#portfolio" onClick={(e) => { e.preventDefault(); handleNavigate('home', 'portfolio'); }}><span className="fn-arrow">→</span> Our Projects</a></li>
                <li><a href="#services" onClick={(e) => { e.preventDefault(); handleNavigate('home', 'services'); }}><span className="fn-arrow">→</span> Services</a></li>
                <li><a href="#services" onClick={(e) => { e.preventDefault(); handleNavigate('home', 'services'); }}><span className="fn-arrow">→</span> Our Process</a></li>
                <li><a href="#services" onClick={(e) => { e.preventDefault(); handleNavigate('home', 'services'); }}><span className="fn-arrow">→</span> FAQ</a></li>
              </ul>
            </div>

            <div className="footer-nav-col">
              <h5 className="footer-col-heading">Client Services</h5>
              <ul className="footer-nav-list">
                <li><a href="#contacts" onClick={(e) => { e.preventDefault(); handleNavigate('contacts'); }}><span className="fn-arrow">→</span> Design Consult</a></li>
                <li><a href="#contacts" onClick={(e) => { e.preventDefault(); handleNavigate('contacts'); }}><span className="fn-arrow">→</span> Contact Us</a></li>
                <li><a href="#contacts" onClick={(e) => { e.preventDefault(); handleNavigate('contacts'); }}><span className="fn-arrow">→</span> Get a Quote</a></li>
                <li><a href="#home" onClick={(e) => { e.preventDefault(); handleNavigate('home'); }}><span className="fn-arrow">→</span> Privacy Policy</a></li>
                <li><a href="#home" onClick={(e) => { e.preventDefault(); handleNavigate('home'); }}><span className="fn-arrow">→</span> Terms &amp; Conditions</a></li>
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

        {/* ── DIVIDER ── */}
        <div className="footer-rule">
          <div className="footer-rule-line"></div>
          <div className="footer-rule-diamond">◆</div>
          <div className="footer-rule-line"></div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="footer-bottom">
          <p className="footer-bottom-copy">
            © {new Date().getFullYear()} iConcept Interiors — All Rights Reserved
          </p>
          <p className="footer-bottom-craft">
            Crafted with precision · Nagpur, India
          </p>
        </div>

      </footer>

      {/* Floating Action Buttons (Right Side Stack) */}
      <div className="floating-actions-stack-right">
        <a 
          href="https://wa.me/919021703030" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="whatsapp-float-btn"
          title="Chat on WhatsApp"
        >
          <MessageCircle size={24} />
        </a>

        <button 
          className="scroll-top-float-btn"
          onClick={scrollToTop}
          title="Scroll to Top"
        >
          <ArrowUp size={20} />
        </button>
      </div>

      {/* Inquiry Modal */}
      {isModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setIsModalOpen(false)}>
              <X size={24} />
            </button>

            {!formSubmitted ? (
              <>
                <p className="section-tag">Consultation Request</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--color-espresso)', marginBottom: '1rem', fontWeight: 400 }}>
                  Get Your Design
                </h2>
                <form onSubmit={handleFormSubmit}>
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      required 
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input 
                      type="tel" 
                      className="form-input" 
                      required 
                      placeholder="+91 9021703030"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Project Scope</label>
                    <select 
                      className="form-select"
                      value={formData.spaceType}
                      onChange={e => setFormData({ ...formData, spaceType: e.target.value })}
                    >
                      <option value="Residential">Residential Interior</option>
                      <option value="Commercial">Commercial Interior</option>
                      <option value="Layouts">2D/3D Layouts</option>
                      <option value="Renovation">Renovation & Remodeling</option>
                    </select>
                  </div>

                  <button type="submit" className="btn-submit-full">
                    Submit Request
                  </button>
                </form>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <CheckCircle2 size={54} style={{ color: 'var(--color-espresso)', margin: '0 auto 1rem auto' }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--color-espresso)' }}>
                  Inquiry Received
                </h3>
                <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem', fontWeight: 300 }}>
                  Thank you, {formData.name}. The iConcept team will contact you shortly!
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// Helpers
function indexToNum(index) {
  return index + 1;
}

function serviceNumFormat(num) {
  return num < 10 ? `0${num}` : `${num}`;
}
