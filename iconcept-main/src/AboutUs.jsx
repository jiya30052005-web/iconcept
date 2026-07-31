import React, { useState, useEffect, useRef } from 'react';
import footerBanner from './assets/footer_banner_new.jpg';
import aboutHeroPhoto from './assets/about_hero_user_photo.png';
import barLoungeHero from './assets/bar_lounge_hero.jpg';
import sameerAgrawalImg from './assets/sameer_agrawal.jpg';
import videoSlide1 from './assets/video_slide_1.jpg';
import videoSlide2 from './assets/video_slide_2.png';
import videoSlide3 from './assets/video_slide_3.jpg';
import videoSlide4 from './assets/video_slide_4.jpg';
import teamMember1 from './assets/team_member_1.png';
import teamMember2 from './assets/team_member_2.png';
import teamMember3 from './assets/team_member_3.png';
import teamMember4 from './assets/team_member_4.png';

import award2024 from './assets/award_2024.jpg';
import award2023_1 from './assets/award_2023_1.jpg';
import award2023_2 from './assets/award_2023_2.jpg';
import award2020 from './assets/award_2020.jpg';
import award2018 from './assets/award_2018.jpg';
import { 
  ChevronRight, 
  ChevronLeft,
  Play,
  Pause,
  X, 
  Menu, 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  Award, 
  Trophy, 
  UserCheck, 
  Compass, 
  Sparkles, 
  ArrowUp,
  MessageCircle
} from 'lucide-react';

const LOGO_IMG = 'https://iconceptinteriors.com/wp-content/uploads/2025/06/iConcept-Logo-300x133.png';

const SHOWCASE_SLIDES = [
  {
    image: videoSlide1,
    title: 'High-End Commercial Showroom & Luxury Retail',
    tag: 'COMMERCIAL ARCHITECTURE',
    location: 'Nagpur, India'
  },
  {
    image: videoSlide2,
    title: 'Contemporary Villa Lounge & Gold Accent Interiors',
    tag: 'LUXURY RESIDENTIAL',
    location: 'Pune, India'
  },
  {
    image: videoSlide3,
    title: 'Bespoke Living Architecture & Elegant Furnishings',
    tag: 'TURNKEY RESIDENCE',
    location: 'Nagpur, India'
  },
  {
    image: videoSlide4,
    title: 'Skyline Balcony Terrace & Outdoor Landscape Design',
    tag: 'OUTDOOR & LANDSCAPE',
    location: 'Mumbai, India'
  }
];

const TEAM_MEMBERS = [
  {
    image: teamMember1,
    name: 'Aarav Sharma',
    role: 'Senior Interior Architect',
    tag: 'Residential & Villa Design',
    exp: '6+ Years Exp'
  },
  {
    image: teamMember2,
    name: 'Priya Agrawal',
    role: 'Principal 3D Spatial Designer',
    tag: '3D Concepts & Renderings',
    exp: '5+ Years Exp'
  },
  {
    image: teamMember3,
    name: 'Rohan Mehta',
    role: 'Head of Project Execution',
    tag: 'Site Quality & Delivery',
    exp: '7+ Years Exp'
  },
  {
    image: teamMember4,
    name: 'Ananya Deshmukh',
    role: 'Lighting & Soft Furnishing Specialist',
    tag: 'Bespoke Lighting & Decor',
    exp: '4+ Years Exp'
  }
];

const FEATURED_SPLIT_PROJECTS = [
  {
    num: '01',
    category: 'RESIDENTIAL ARCHITECTURE',
    title: 'The Pavilion Private Estate',
    year: '2024',
    location: 'Nagpur, MH',
    desc: 'A 20,000 sq.ft. private estate blending natural stone monoliths, double-glazed panoramic glass, and custom teak joinery immersed in organic landscape design.',
    image: videoSlide3,
    specs: ['20,000 Sq.Ft.', 'Bespoke Joinery', 'Full Turnkey']
  },
  {
    num: '02',
    category: 'CORPORATE ARCHITECTURE',
    title: 'Samsung Corporate Headquarters',
    year: '2024',
    location: 'Nagpur, MH',
    desc: 'A modern 2,600 sq.ft. executive headquarters engineered and completed in just 45 days, featuring acoustic timber paneling, precision LED coves, and integrated smart automation.',
    image: barLoungeHero,
    specs: ['45-Day Delivery', '2,600 Sq.Ft.', 'Smart HQ']
  },
  {
    num: '03',
    category: 'COMMERCIAL RETAIL',
    title: 'Haldirams Flagship Store',
    year: '2023',
    location: 'Nagpur, MH',
    desc: 'A grand two-level flagship commercial destination defined by brushed brass architectural screens, custom Italian terrazzo marble flooring, and high-capacity luxury seating.',
    image: videoSlide1,
    specs: ['2-Level Flagship', 'Brushed Brass', 'Commercial']
  },
  {
    num: '04',
    category: 'HOSPITALITY & RESORT',
    title: 'Zenith Luxury Eco-Resort',
    year: '2023',
    location: 'Maharashtra',
    desc: 'Spanning 15 acres, this mega hospitality masterplan includes 26 luxury villas, a 6,000 sq.ft. fine dining pavilion, and tranquil infinity water features delivered in record time.',
    image: videoSlide4,
    specs: ['15-Acre Masterplan', '26 Luxury Villas', 'Fine Dining']
  },
  {
    num: '05',
    category: 'LUXURY PENTHOUSE',
    title: 'The Gold Accent Villa Lounge',
    year: '2022',
    location: 'Pune, MH',
    desc: 'A sprawling penthouse lounge showcasing hand-stitched velvet seating, gold leaf architectural ceiling trim, and custom ambient lighting designed for high-society entertaining.',
    image: videoSlide2,
    specs: ['Custom Gold Leaf', 'Velvet Joinery', 'Bespoke Lighting']
  }
];

const ROADMAP_MILESTONES = [
  {
    year: '2016',
    tag: 'Foundation',
    title: 'The Genesis of iConcept Interiors',
    desc: 'Founded by Sameer Agrawal with a vision to redefine interior architecture, delivering bespoke luxury residential projects across Central India.',
    metric: 'Est. 2016'
  },
  {
    year: '2018',
    tag: 'Commercial Landmark',
    title: 'FOAID Award & High-Profile Retail',
    desc: 'Expanded into high-profile commercial interior projects, winning runner-up honors at the Prestigious FOAID Design Awards in Mumbai.',
    metric: 'FOAID Winner'
  },
  {
    year: '2019',
    tag: 'Rapid Execution',
    title: 'Fine Dining Restaurant (35-Day Delivery)',
    desc: 'Transformed a 2,500 sq.ft. space into a premier fine dining establishment from concept design to inauguration in just 35 days.',
    metric: '35 Days'
  },
  {
    year: '2020',
    tag: 'Multi-City Expansion',
    title: 'IDEA Award & Pune Expansion',
    desc: 'Scaled operations to Pune & Mumbai, earning the IDEA Design Award for luxury villa interiors and architectural excellence.',
    metric: 'IDEA Award'
  },
  {
    year: '2022',
    tag: 'Iconic Retail',
    title: 'Haldiram’s 2-Floor Flagship Store',
    desc: 'Executed Haldiram’s landmark 2-floor commercial experience center within 1.5 months alongside 10+ turnkey luxury interior projects.',
    metric: '1.5 Months'
  },
  {
    year: '2023',
    tag: 'Record Delivery',
    title: '15+ Luxury Villas & Dual Design Awards',
    desc: 'Delivered over 15 luxury residential villas & penthouses in a single year, capturing dual IDEA Design Awards for residential and commercial excellence.',
    metric: '15+ Projects'
  },
  {
    year: '2024',
    tag: 'Mega Turnkey',
    title: '15-Acre Resort & Samsung Corporate HQ',
    desc: 'Planned & executed a 15-acre resort & 20,000 sq.ft. farmhouse in 40 days; delivered Samsung’s 2,600 sq.ft. Corporate Headquarters in Nagpur in 1.5 months.',
    metric: '15-Acre Site'
  },
  {
    year: '2025',
    tag: 'Innovation Era',
    title: '3D Spatial VR & Sustainable Material Integration',
    desc: 'Pioneered 3D spatial pre-visualization & eco-sustainable material sourcing across 25+ premium residential and commercial developments.',
    metric: '25+ Sites'
  },
  {
    year: '2026',
    tag: 'Decade Landmark',
    title: '10 Years of Excellence (100+ Turnkey Projects)',
    desc: 'Celebrating a decade of architectural mastery with over 100+ completed turnkey luxury projects across India.',
    metric: '100+ Delivered'
  }
];

const AWARDS_LIST = [
  { 
    year: '2024', 
    title: 'WINNER AT IDEA DESIGN AWARD - NAGPUR', 
    category: 'Interior Design - Residential',
    image: award2024
  },
  { 
    year: '2023', 
    title: 'WINNER AT IDEA DESIGN AWARD - NAGPUR', 
    category: 'Interior Design - Residential',
    image: award2023_1
  },
  { 
    year: '2023', 
    title: 'WINNER AT IDEA DESIGN AWARD - NAGPUR', 
    category: 'Interior Design - Commercial',
    image: award2023_2
  },
  { 
    year: '2020', 
    title: 'WINNER AT IDEA DESIGN AWARD - NAGPUR', 
    category: 'Interior Design - Residential Pune',
    image: award2020
  },
  { 
    year: '2018', 
    title: 'RUNNER UP AT FOAID DESIGN AWARD - MUMBAI', 
    category: 'Interior Design - Commercial',
    image: award2018
  }
];

export default function AboutUs({ onNavigate, onOpenModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const [activeRoadmapYearIndex, setActiveRoadmapYearIndex] = useState(0);
  const [isRoadmapAutoPlaying, setIsRoadmapAutoPlaying] = useState(true);
  const [activeAwardIndex, setActiveAwardIndex] = useState(0);

  // Smooth 6-second auto-cycle for effortless, comfortable reading
  useEffect(() => {
    if (!isRoadmapAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveRoadmapYearIndex((prev) => (prev + 1) % ROADMAP_MILESTONES.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isRoadmapAutoPlaying]);

  const handleYearChange = (idx) => {
    setActiveRoadmapYearIndex(idx);
  };

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % SHOWCASE_SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const handleNextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % SHOWCASE_SLIDES.length);
  };

  const handlePrevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + SHOWCASE_SLIDES.length) % SHOWCASE_SLIDES.length);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="about-page-view light-theme-page">
      {/* HERO BANNER MATCHING CONTACT US DESIGN & USER PHOTO EXACTLY */}
      <section 
        className="pro-hero-banner-new"
        style={{ backgroundImage: `url(${aboutHeroPhoto})` }}
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
              <a href="#about" className="pro-nav-link active" onClick={(e) => { e.preventDefault(); scrollToTop(); }}>
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
              <a href="#contacts" className="pro-nav-link" onClick={(e) => { e.preventDefault(); onNavigate('contacts'); }}>
                CONTACT US
              </a>
            </li>
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button className="pro-cta-btn-pill" onClick={onOpenModal}>
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
          <h1 className="pro-hero-main-heading">ABOUT US</h1>
          <p className="pro-hero-sub-location">ICONCEPT INTERIORS • OUR LEGACY & VISION</p>
        </div>
      </section>

      {/* ══ SAMEER AGRAWAL FOUNDER SPOTLIGHT (RIGHT SIDE PHOTO, LEFT SIDE TEXT) ══ */}
      <section className="about-section light-about-section">
        <div className="founder-spotlight-matched-grid">
          
          {/* Left Side: Information, Bio, Details, Social Links, and Professional Skills */}
          <div className="founder-info-left-col">
            <div className="founder-header-block">
              <div className="about-badge-pill-light" style={{ marginBottom: '0.75rem', width: 'fit-content' }}>
                <span className="gold-dot"></span>
                <span>STARTED IN 2016</span>
              </div>
              <h2 className="founder-matched-name">Sameer Agrawal</h2>
              <span className="founder-matched-role-badge">FOUNDER</span>
            </div>

            <p className="founder-matched-bio-p">
              As the visionary behind <strong>iConcept Interiors</strong>, Sameer Agrawal brings a passion for creating comfortable and ravishing spaces. With a focus on enhancing the standard of living, he founded the firm in 2016 to specialize in end-to-end interior design solutions for residential and commercial projects. Known for his professionalism, creative vision, and exceptional communication skills, Sameer is dedicated to understanding and blending each client's unique requirements with his design aesthetics.
            </p>

            <div className="founder-details-list">
              <div className="founder-detail-row">
                <span className="detail-label">Responsibility:</span>
                <span className="detail-value font-semibold">Principal Designer</span>
              </div>
              <div className="founder-detail-row">
                <span className="detail-label">Address:</span>
                <span className="detail-value">165, Dronacharya Nagar, Trimurti Nagar, Nagpur - 440022</span>
              </div>
              <div className="founder-detail-row">
                <span className="detail-label">Experience:</span>
                <span className="detail-value font-semibold">8 Years</span>
              </div>
              <div className="founder-detail-row">
                <span className="detail-label">Email:</span>
                <a href="mailto:Sa@iConceptInteriors.Com" className="detail-value link-gold">Sa@iConceptInteriors.Com</a>
              </div>
              <div className="founder-detail-row">
                <span className="detail-label">Phone:</span>
                <a href="tel:+919021703030" className="detail-value link-gold">+91 90217 03030</a>
              </div>
            </div>

            {/* Social Links */}
            <div className="founder-social-pills-row">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="founder-social-pill" title="Facebook">f</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="founder-social-pill" title="X (Twitter)">𝕏</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="founder-social-pill" title="Instagram">📷</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="founder-social-pill" title="LinkedIn">in</a>
            </div>

            {/* Professional Skills */}
            <div className="founder-skills-block">
              <h3 className="skills-block-title">Professional Skills</h3>
              <p className="skills-block-sub">
                His commitment to quality and transparency ensures a personalized and satisfying experience, resulting in stunning interiors that truly reflect the client's personality.
              </p>

              <div className="skills-progress-list">
                <div className="skill-progress-item">
                  <div className="skill-progress-header">
                    <span className="skill-name">Specialized Design Areas</span>
                    <span className="skill-percent">85%</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill" style={{ width: '85%' }}></div>
                  </div>
                </div>

                <div className="skill-progress-item">
                  <div className="skill-progress-header">
                    <span className="skill-name">Styles And Trends</span>
                    <span className="skill-percent">95%</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill" style={{ width: '95%' }}></div>
                  </div>
                </div>

                <div className="skill-progress-item">
                  <div className="skill-progress-header">
                    <span className="skill-name">Design Principles</span>
                    <span className="skill-percent">65%</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill" style={{ width: '65%' }}></div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Side: Sameer Agrawal Sir's Portrait Photo */}
          <div className="founder-photo-right-col">
            <div className="founder-portrait-frame">
              <img 
                src={sameerAgrawalImg} 
                alt="Sameer Agrawal - Founder & Principal Designer" 
                className="founder-portrait-img" 
              />
            </div>
          </div>

        </div>
      </section>

      {/* ══ TEAM SECTION (MEET OUR CREATIVE DESIGN TEAM) ══ */}
      <section className="about-team-section">
        <div className="about-team-container">
          <div className="team-header-center">
            <div className="section-pill-tag-badge">
              <span className="gold-dot"></span>
              <span>OUR EXPERT CREATIVES</span>
            </div>
            <h2 className="team-section-title">
              The Masterminds Behind <span className="highlight-gold-text">Exceptional Spaces</span>
            </h2>
            <p className="team-section-subtitle">
              A collective of passionate spatial architects, senior 3D visualizers, project engineers, and interior craftsmen dedicated to executing your vision with white-glove precision.
            </p>
          </div>

          <div className="team-cards-grid">
            {TEAM_MEMBERS.map((member, idx) => (
              <div key={idx} className="team-member-card">
                <div className="team-photo-wrapper">
                  <img src={member.image} alt={member.name} className="team-photo-img" />
                  <span className="team-exp-badge">{member.exp}</span>
                </div>

                <div className="team-content-box">
                  <span className="team-tag-pill">{member.tag}</span>
                  <h3 className="team-member-name">{member.name}</h3>
                  <p className="team-member-role">{member.role}</p>

                  <div className="team-social-mini">
                    <button className="team-contact-btn" onClick={onOpenModal}>
                      Get Design Consult <ChevronRight size={13} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CINEMATIC VIDEO REEL SHOWCASE (SEAMLESS FULL-FRAME SLIDESHOW) ══ */}
      <div className="video-showcase-section">
        <div className="video-showcase-container">
          <div className="video-reel-frame">
            {/* Video Slides with Ken Burns motion effect */}
            {SHOWCASE_SLIDES.map((slide, idx) => (
              <div 
                key={idx} 
                className={`video-slide-item ${idx === currentVideoIndex ? 'active-video' : ''}`}
              >
                <img 
                  src={slide.image} 
                  alt={slide.title} 
                  className="video-slide-img ken-burns-anim" 
                />
                <div className="video-slide-overlay"></div>
              </div>
            ))}

            {/* Center Play/Pause Indicator (Matching Reference Image) */}
            <button 
              className="video-center-play-overlay"
              onClick={() => setIsPlaying(!isPlaying)}
              title={isPlaying ? "Pause Reel" : "Play Reel"}
            >
              {isPlaying ? <Pause size={28} /> : <Play size={28} style={{ marginLeft: '4px' }} />}
            </button>

            {/* Bottom Info Overlay */}
            <div className="video-bottom-info-block">
              <div className="video-text-left">
                <span className="video-tag-pill">{SHOWCASE_SLIDES[currentVideoIndex].tag}</span>
                <h3 className="video-slide-title">{SHOWCASE_SLIDES[currentVideoIndex].title}</h3>
                <span className="video-location-sub">{SHOWCASE_SLIDES[currentVideoIndex].location}</span>
              </div>

              {/* Video Playback Controls */}
              <div className="video-controls-right">
                <div className="video-counter-text">
                  0{currentVideoIndex + 1} / 0{SHOWCASE_SLIDES.length}
                </div>

                <div className="video-nav-btn-group">
                  <button className="video-ctrl-btn" onClick={handlePrevVideo} title="Previous Slide">
                    <ChevronLeft size={18} />
                  </button>
                  <button 
                    className="video-ctrl-btn play-pause-btn" 
                    onClick={() => setIsPlaying(!isPlaying)}
                    title={isPlaying ? "Pause Reel" : "Play Reel"}
                  >
                    {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                  </button>
                  <button className="video-ctrl-btn" onClick={handleNextVideo} title="Next Slide">
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Animated Video Progress Line */}
            <div className="video-timeline-bar">
              <div 
                key={currentVideoIndex}
                className={`video-timeline-fill ${isPlaying ? 'animating' : ''}`}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* ══ INTERACTIVE COMPACT HORIZONTAL ROADMAP DIAL (ZERO PAGE BLOAT & NO CARDS) ══ */}
      <section className="about-roadmap-section compact-roadmap-section">
        <div className="roadmap-container">
          <div className="roadmap-header-center">
            <div className="section-pill-tag-badge">
              <span className="gold-dot"></span>
              <span>OUR JOURNEY</span>
            </div>
            <h2 className="roadmap-main-title">
              Our Past is Filled with <span className="highlight-gold-text">Compelling Stories and Milestones</span>
            </h2>
          </div>

          {/* Horizontal Year Timeline Selector Bar */}
          <div className="horizontal-year-bar-wrapper">
            <div className="horizontal-year-track-line"></div>
            <div className="horizontal-year-buttons-flex">
              {ROADMAP_MILESTONES.map((item, idx) => (
                <button
                  key={idx}
                  className={`year-track-btn ${idx === activeRoadmapYearIndex ? 'active-year-btn' : ''}`}
                  onClick={() => handleYearChange(idx)}
                >
                  <span className="year-btn-dot"></span>
                  <span className="year-btn-text">{item.year}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Single Sleek Active Milestone Panel with 100% Silky Smooth Crossfade */}
          <div 
            className="roadmap-active-panel-box" 
            key={activeRoadmapYearIndex}
          >
            <div className="roadmap-panel-left">
              <span className="roadmap-giant-watermark-year">{ROADMAP_MILESTONES[activeRoadmapYearIndex].year}</span>
              <div className="roadmap-panel-meta">
                <span className="roadmap-tag-pill">{ROADMAP_MILESTONES[activeRoadmapYearIndex].tag}</span>
                <span className="roadmap-metric-badge">{ROADMAP_MILESTONES[activeRoadmapYearIndex].metric}</span>
              </div>
              <h3 className="roadmap-panel-title">{ROADMAP_MILESTONES[activeRoadmapYearIndex].title}</h3>
              <p className="roadmap-panel-desc">{ROADMAP_MILESTONES[activeRoadmapYearIndex].desc}</p>
            </div>

            <div className="roadmap-panel-right">
              <div className="roadmap-year-nav-controls">
                <span className="roadmap-year-counter">
                  0{activeRoadmapYearIndex + 1} / 0{ROADMAP_MILESTONES.length}
                </span>
                <div className="roadmap-nav-arrows">
                  <button 
                    className="roadmap-arrow-btn"
                    onClick={() => handleYearChange((activeRoadmapYearIndex - 1 + ROADMAP_MILESTONES.length) % ROADMAP_MILESTONES.length)}
                    title="Previous Milestone"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button 
                    className="roadmap-arrow-btn play-pause-btn"
                    onClick={() => setIsRoadmapAutoPlaying(!isRoadmapAutoPlaying)}
                    title={isRoadmapAutoPlaying ? "Pause Auto Playback" : "Play Auto Playback"}
                  >
                    {isRoadmapAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
                  </button>
                  <button 
                    className="roadmap-arrow-btn"
                    onClick={() => handleYearChange((activeRoadmapYearIndex + 1) % ROADMAP_MILESTONES.length)}
                    title="Next Milestone"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>

              <div className="roadmap-quick-stat-card">
                <span className="stat-card-gold-val">10+ Years</span>
                <span className="stat-card-label">Architectural Mastery & Bespoke Excellence</span>
              </div>
            </div>
          </div>

        </div>
      </section>

        {/* PHOTO-MATCHED AWARD & ACHIEVEMENT SECTION */}
        <section className="about-awards-matched-section">
          <div className="awards-matched-container">
            
            {/* Header: Badge Pill + Title */}
            <div className="awards-matched-header">
              <div className="about-badge-pill-light" style={{ width: 'fit-content', marginBottom: '0.75rem' }}>
                <span className="gold-dot"></span>
                <span>AWARD & ACHIEVEMENT</span>
              </div>
              <h2 className="awards-matched-title">
                Building Trust <span className="highlight-gold-text">Creating Perfection</span>
              </h2>
            </div>

            {/* Split Grid: Left Photo Box, Right Award List */}
            <div className="awards-matched-grid">
              
              {/* Left Side: Single Clean High-Res Photo Container */}
              <div className="award-left-photo-column">
                <div className="award-single-clean-box">
                  <img 
                    key={activeAwardIndex}
                    src={AWARDS_LIST[activeAwardIndex].image} 
                    alt={AWARDS_LIST[activeAwardIndex].title} 
                    className="award-clean-photo-img"
                  />
                  <div className="award-photo-badge-overlay">
                    <span className="award-badge-year">{AWARDS_LIST[activeAwardIndex].year}</span>
                    <span className="award-badge-cat">{AWARDS_LIST[activeAwardIndex].category}</span>
                  </div>
                </div>
              </div>

              {/* Right Side: 5 Awards Interactive List */}
              <div className="award-right-list-column">
                {AWARDS_LIST.map((award, idx) => (
                  <div 
                    key={idx}
                    className={`award-list-row ${idx === activeAwardIndex ? 'active-award-row' : ''}`}
                    onMouseEnter={() => setActiveAwardIndex(idx)}
                    onClick={() => setActiveAwardIndex(idx)}
                  >
                    <span className="award-row-year">{award.year}</span>
                    <div className="award-row-content">
                      <h4 className="award-row-title">{award.title}</h4>
                      <span className="award-row-category">{award.category}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      {/* PRE-FOOTER BANNER WITH GRADIENT MASK & CENTERED LOGO OVERLAY */}
      <div className="footer-banner-section" onClick={onOpenModal}>
        <img src={footerBanner} alt="iConcept Interiors" className="footer-banner-img" />
        <div className="footer-banner-mask"></div>
        <div className="footer-banner-center-content">
          <img src="https://iconceptinteriors.com/wp-content/uploads/2025/06/iConcept-Logo-300x133.png" alt="iConcept Interiors Logo" className="footer-banner-logo" />
        </div>
      </div>

      {/* ══ MAIN FOOTER ══ */}
      <footer id="contacts" className="site-footer">

        <div className="site-footer__inner">

          {/* BRAND COLUMN */}
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

          {/* NAV COLUMNS */}
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

      {/* Floating Action Buttons */}
      <div className="floating-actions-stack-right">
        <a href="https://wa.me/919021703030" target="_blank" rel="noopener noreferrer" className="whatsapp-float-btn" title="Chat on WhatsApp">
          <MessageCircle size={24} />
        </a>
        <button className="scroll-top-float-btn" onClick={scrollToTop} title="Scroll to Top">
          <ArrowUp size={20} />
        </button>
      </div>
    </div>
  );
}
