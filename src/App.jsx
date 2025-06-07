import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './index.css'
import FirmamiziOl from './FirmamiziOl.jsx'
import heroIllustration from './assets/illus.svg'
import decorativeShape from './assets/Decore.svg'
import aboutImage1 from './assets/about-image-1.png'
import aboutImage2 from './assets/about-image-2.png'
import aboutImage3 from './assets/about-image-3.png'
import corporateWoman from './assets/corporate-woman.png'
import romeDestination from './assets/rome-destination.jpg'
import londonDestination from './assets/london-destination.jpg'
import europeDestination from './assets/europe-destination.jpg'
import decorationLeft from './assets/decoration-left.svg'
import decorationRight from './assets/decoration-right.svg'
import whyChooseUsCard from './assets/why-choose-us-card.png'
import chooseDestinationIcon from './assets/choose-destination-icon.svg'
import makePaymentIcon from './assets/make-payment-icon.svg'
import reachAirportIcon from './assets/reach-airport-icon.svg'
import axonAirlinesLogo from './assets/axon-airlines-logo.png'
import jetstarLogo from './assets/jetstar-logo.png'
import expediaLogo from './assets/expedia-logo.png'
import qantasLogo from './assets/qantas-logo.png'
import alitaliaLogo from './assets/alitalia-logo.png'
import userAvatar from './assets/user-avatar.png'
import arrowDown from './assets/arrow-down.svg'
import planeIcon from './assets/plane-icon.svg'
import emailIcon from './assets/newsletter-email-icon.svg'
import googlePlayIcon from './assets/google-play-icon.svg'
import googlePlayText from './assets/google-play-text.svg'
import appleIcon from './assets/apple-icon.svg'
import appleText from './assets/apple-text.svg'
import emailIconFooter from './assets/email-icon.svg'
import facebookIcon from './assets/facebook-icon.svg'
import instagramIcon from './assets/instagram-icon.svg'
import twitterIcon from './assets/twitter-icon.svg'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const testimonials = [
    {
      text: "\"On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.\"",
      name: "Tunahan KORKMAZ",
      trip: "Kastamonu Gezisi",
      avatar: userAvatar
    },
    {
      text: "\"Seyahat deneyimim gerçekten muhteşemdi. Organizasyon mükemmeldi ve her detay düşünülmüştü. Kesinlikle tekrar tercih edeceğim.\"",
      name: "Ayşe YILMAZ",
      trip: "Antalya Gezisi",
      avatar: userAvatar
    },
    {
      text: "\"Profesyonel ekip, kaliteli hizmet ve unutulmaz anılar. Bu kadar keyifli bir tatil geçireceğimi hiç düşünmemiştim.\"",
      name: "Mehmet ÖZKAN",
      trip: "Kapadokya Gezisi",
      avatar: userAvatar
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  return (
    <Routes>
      <Route path="/firmamizi-ol" element={<FirmamiziOl />} />
      <Route path="/" element={
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container">
          <nav className="navbar">
            <div className="logo-group">
              <div className="logo-bg"></div>
              <div className="logo-accent-1"></div>
              <div className="logo-accent-2"></div>
              <h1 className="logo-text">Travel-io</h1>
            </div>
            
            <button className="hamburger-menu" onClick={toggleMenu}>
              <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
              <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
              <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
            </button>

            <div className={`nav-content ${isMenuOpen ? 'mobile-open' : ''}`}>
              <div className="nav-menu">
                <a href="#about" className="nav-item" onClick={handleNavClick}>Hakkımızda</a>
                <a href="#corporate" className="nav-item" onClick={handleNavClick}>Kurumsal Özel</a>
                <a href="#destinations" className="nav-item" onClick={handleNavClick}>Gezilerimiz</a>
                <a href="#why-us" className="nav-item" onClick={handleNavClick}>Neden Biz?</a>
                <a href="#references" className="nav-item" onClick={handleNavClick}>Referanslarımız</a>
              </div>
              
              <div className="nav-buttons">
                <a href="/firmamizi-ol" className="btn-primary">Firmamız Ol!</a>
                <div className="language-selector">
                  <span className="language-text">TR</span>
                  <div className="dropdown-icon"></div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Decorative Elements */}
      <div className="blue-gradient-top-left"></div>
      <img src={decorativeShape} alt="Decorative Shape" className="decorative-shape-top-right" />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-container">
            <div className="hero-content">
              <div className="hero-text">
                <h2 className="hero-title">
                  Yolculuğunuza başlayın<br />
                  tek bir tıklamayla, güzel <span className="highlight">Dünyayı Keşfedin!</span>
                </h2>
                <p className="hero-description">
                  Uzman tavsiyeleri, seyahat ipuçları, destinasyon bilgileri ve bizden aldığınız ilhamla mükemmel seyahatinizi planlayın ve rezervasyonunuzu yapın!
                </p>
              </div>
              
                            <div className="download-buttons">
                <a href="#" className="download-btn google">
                  <svg className="download-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3.609 1.814L13.792 12L3.609 22.186C3.538 22.257 3.5 22.353 3.5 22.453V1.547C3.5 1.647 3.538 1.743 3.609 1.814Z" fill="#32BBFF"/>
                    <path d="M20.683 10.747L16.208 8.168L13.792 12L16.208 15.832L20.683 13.253C21.439 12.831 21.439 11.169 20.683 10.747Z" fill="#32BBFF"/>
                    <path d="M13.792 12L3.609 1.814C4.362 1.061 5.638 1.061 6.391 1.814L16.208 8.168L13.792 12Z" fill="#00D277"/>
                    <path d="M13.792 12L16.208 15.832L6.391 22.186C5.638 22.939 4.362 22.939 3.609 22.186L13.792 12Z" fill="#FFB900"/>
                  </svg>
                  <div className="download-text">
                    <div className="download-small">GET IT ON</div>
                    <div className="download-large">Google Play</div>
                  </div>
                </a>
                <a href="#" className="download-btn apple">
                  <svg className="download-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 21.99C7.78997 22.03 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.85 11.31 7.72 12.11 7.72C12.9 7.72 14.37 6.68 15.92 6.84C16.54 6.87 18.28 7.15 19.44 8.93C19.36 8.99 17.81 10.05 17.82 12.05C17.84 14.54 19.84 15.34 19.87 15.35C19.84 15.43 19.51 16.83 18.71 19.5ZM15.83 4.5C16.48 3.75 16.93 2.71 16.84 1.5C15.95 1.58 14.86 2.13 14.17 2.86C13.53 3.52 13 4.54 13.11 5.55C14.1 5.63 15.17 5.11 15.83 4.5Z" fill="white"/>
                  </svg>
                  <div className="download-text">
                    <div className="download-small">Download on the</div>
                    <div className="download-large">App Store</div>
                  </div>
        </a>
      </div>
            </div>
            
            <div className="hero-illustration">
              <img src={heroIllustration} alt="Travel Illustration" className="hero-image" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-container">
            <h2 className="about-title">HAKKIMIZDA</h2>
            <div className="about-content">
              <div className="about-illustration">
                <div className="travelers-point">
                  <div className="travel-image-group">
                    <img src={aboutImage3} alt="Mountain Traveler" className="travel-image-main" />
                    <img src={aboutImage2} alt="Venice Canal" className="travel-image-overlay-1" />
                    <img src={aboutImage1} alt="Bridge Walk" className="travel-image-overlay-2" />
                  </div>
                </div>
              </div>
              
              <div className="about-text">
                <p className="about-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi, Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.
                </p>
                
                <div className="stats-grid">
                  <div className="stats-row">
                    <div className="stat-card">
                      <div className="stat-content">
                        <div className="stat-label">Gerçekleşen Gezi</div>
                        <div className="stat-number">100+</div>
                      </div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-content">
                        <div className="stat-label">Gezi Çeşidi</div>
                        <div className="stat-number">172</div>
                      </div>
                    </div>
                  </div>
                  <div className="stats-row">
                    <div className="stat-card">
                      <div className="stat-content">
                        <div className="stat-label">Tur Firması</div>
                        <div className="stat-number">68</div>
                      </div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-content">
                        <div className="stat-label">Katılımcı</div>
                        <div className="stat-number">5M+</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Special Section */}
      <section id="corporate" className="corporate-section">
        <div className="container">
          <div className="corporate-container">
            <div className="corporate-visual">
              <div className="corporate-bg-shape"></div>
              <img src={corporateWoman} alt="Corporate Woman" className="corporate-woman-image" />
              <div className="floating-circles">
                <div className="circle green-circle"></div>
                <div className="circle blue-circle"></div>
                <div className="circle red-circle-1"></div>
                <div className="circle red-circle-2"></div>
              </div>
            </div>
            
            <div className="corporate-content">
              <div className="corporate-text">
                <div className="corporate-header">
                  <span className="corporate-badge">KURUMSAL ÖZEL!</span>
                  <h2 className="corporate-title">
                    ÇALIŞANLARINIZA GEZİ<br />
                    <span className="title-highlight">HEDİYE EDİN!</span>
                  </h2>
                </div>
                <p className="corporate-description">
                  Çalışanlarınıza diledikleri gezi turu için kupon hazırlayıp<br />
                  hediye edebilirsiniz!
                </p>
              </div>
              
              <div className="corporate-stats">
                <div className="corporate-stats-grid">
                  <div className="corporate-stat-card">
                    <div className="stat-number">200+</div>
                    <div className="stat-label">Kurum Sayısı</div>
                  </div>
                  <div className="corporate-stat-card coupon-highlight">
                    <div className="stat-number">500+</div>
                    <div className="stat-label">Hediye Kupon</div>
                  </div>
                </div>
                <div className="corporate-stats-grid">
                  <div className="corporate-stat-card">
                    <div className="stat-number">10</div>
                    <div className="stat-label">Farklı Sektör Sayısı</div>
                  </div>
                  <div className="corporate-stat-card">
                    <div className="stat-number">350+</div>
                    <div className="stat-label">Geziye Dahil Olan<br />Çalışan</div>
                  </div>
                </div>
              </div>
              
              <button className="corporate-btn">Detaylı Bilgi Alın!</button>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="destinations">
        <div className="container">
          <div className="destinations-container">
            <div className="destinations-decorations">
              <img src={decorationLeft} alt="Decoration Left" className="decoration-left" />
              <img src={decorationRight} alt="Decoration Right" className="decoration-right" />
            </div>

            <div className="destinations-header">
              <h2 className="destinations-title">GEZİLERİMİZ</h2>
            </div>
            
            <div className="destinations-grid">
              <div className="destination-card">
                <div className="destination-image-container">
                  <img src={romeDestination} alt="Rome, Italy" className="destination-image" />
                  <div className="rating-badge">
                    <div className="star-icon">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 0.5L9.8 6.1L15.5 6.1L10.9 9.8L12.7 15.4L8 11.7L3.3 15.4L5.1 9.8L0.5 6.1L6.2 6.1L8 0.5Z" fill="#FFEA00"/>
                        <path d="M8 0.5L6.2 6.1L0.5 6.1L5.1 9.8L3.3 15.4L8 11.7V0.5Z" fill="#FFEA00" opacity="0.5"/>
                      </svg>
                    </div>
                    <span className="rating-number">9.2</span>
                  </div>
                </div>
                <div className="destination-info">
                  <div className="destination-info-top">
                    <h3 className="destination-name">Rome, Italy</h3>
                    <div className="destination-price">2500$ / Kişi</div>
                  </div>
                  <div className="destination-info-bottom">
                    <svg className="location-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 0C5.2 0 3 2.2 3 5C3 8.5 8 16 8 16S13 8.5 13 5C13 2.2 10.8 0 8 0ZM8 7C6.9 7 6 6.1 6 5C6 3.9 6.9 3 8 3C9.1 3 10 3.9 10 5C10 6.1 9.1 7 8 7Z" fill="#24BAEC"/>
                    </svg>
                    <span className="destination-duration">2 Gün Konaklama</span>
                  </div>
                </div>
              </div>
              
              <div className="destination-card">
                <div className="destination-image-container">
                  <img src={londonDestination} alt="London, UK" className="destination-image" />
                  <div className="rating-badge">
                    <div className="star-icon">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 0.5L9.8 6.1L15.5 6.1L10.9 9.8L12.7 15.4L8 11.7L3.3 15.4L5.1 9.8L0.5 6.1L6.2 6.1L8 0.5Z" fill="#FFEA00"/>
                        <path d="M8 0.5L6.2 6.1L0.5 6.1L5.1 9.8L3.3 15.4L8 11.7V0.5Z" fill="#FFEA00" opacity="0.5"/>
                      </svg>
                    </div>
                    <span className="rating-number">8.9</span>
                  </div>
                </div>
                <div className="destination-info">
                  <div className="destination-info-top">
                    <h3 className="destination-name">London, UK</h3>
                    <div className="destination-price">1500$ / Kişi</div>
                  </div>
                  <div className="destination-info-bottom">
                    <svg className="location-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 0C5.2 0 3 2.2 3 5C3 8.5 8 16 8 16S13 8.5 13 5C13 2.2 10.8 0 8 0ZM8 7C6.9 7 6 6.1 6 5C6 3.9 6.9 3 8 3C9.1 3 10 3.9 10 5C10 6.1 9.1 7 8 7Z" fill="#24BAEC"/>
                    </svg>
                    <span className="destination-duration">4 Gün Konaklama</span>
                  </div>
                </div>
              </div>
              
              <div className="destination-card">
                <div className="destination-image-container">
                  <img src={europeDestination} alt="Full Europe" className="destination-image" />
                  <div className="rating-badge">
                    <div className="star-icon">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 0.5L9.8 6.1L15.5 6.1L10.9 9.8L12.7 15.4L8 11.7L3.3 15.4L5.1 9.8L0.5 6.1L6.2 6.1L8 0.5Z" fill="#FFEA00"/>
                        <path d="M8 0.5L6.2 6.1L0.5 6.1L5.1 9.8L3.3 15.4L8 11.7V0.5Z" fill="#FFEA00" opacity="0.5"/>
                      </svg>
                    </div>
                    <span className="rating-number">8.6</span>
                  </div>
                </div>
                <div className="destination-info">
                  <div className="destination-info-top">
                    <h3 className="destination-name">Full Europe</h3>
                    <div className="destination-price">500$ / Kişi</div>
                  </div>
                  <div className="destination-info-bottom">
                    <svg className="location-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 0C5.2 0 3 2.2 3 5C3 8.5 8 16 8 16S13 8.5 13 5C13 2.2 10.8 0 8 0ZM8 7C6.9 7 6 6.1 6 5C6 3.9 6.9 3 8 3C9.1 3 10 3.9 10 5C10 6.1 9.1 7 8 7Z" fill="#24BAEC"/>
                    </svg>
                    <span className="destination-duration">1 Gün Konaklama</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="destinations-footer">
              <p className="destinations-subtitle">Daha Fazlası için Hemen Uygulamamızı İndirin!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="why-section">
        <div className="container">
          <div className="why-container">
            <div className="why-image">
              <img src={whyChooseUsCard} alt="Book a trip" className="why-card-image" />
            </div>
            
            <div className="why-content">
              <div className="why-header">
                <h2 className="why-title">NEDEN BİZİ SEÇMELİSİN?</h2>
              </div>
              
              <div className="why-steps">
                <div className="steps-grid">
                  <div className="step-column">
                    <div className="step-item">
                      <div className="step-icon-container">
                        <img src={chooseDestinationIcon} alt="Choose Destination" className="step-icon" />
                      </div>
                      <div className="step-content">
                        <h3 className="step-title">Choose Destination</h3>
                        <p className="step-description">
                          Lorem ipsum dolor sit amet, consectetur<br />
                          adipiscing elit. Urna, tortor tempus.
                        </p>
                      </div>
                    </div>
                    
                    <div className="step-item">
                      <div className="step-icon-container orange">
                        <img src={makePaymentIcon} alt="Make Payment" className="step-icon" />
                      </div>
                      <div className="step-content">
                        <h3 className="step-title">Make Payment</h3>
                        <p className="step-description">
                          Lorem ipsum dolor sit amet, consectetur<br />
                          adipiscing elit. Urna, tortor tempus.
                        </p>
                      </div>
                    </div>
                    
                    <div className="step-item">
                      <div className="step-icon-container blue">
                        <img src={reachAirportIcon} alt="Reach Airport" className="step-icon" />
                      </div>
                      <div className="step-content">
                        <h3 className="step-title">Reach Airport on Selected Date</h3>
                        <p className="step-description">
                          Lorem ipsum dolor sit amet, consectetur<br />
                          adipiscing elit. Urna, tortor tempus.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="step-column">
                    <div className="step-item">
                      <div className="step-icon-container">
                        <img src={chooseDestinationIcon} alt="Choose Destination" className="step-icon" />
                      </div>
                      <div className="step-content">
                        <h3 className="step-title">Choose Destination</h3>
                        <p className="step-description">
                          Lorem ipsum dolor sit amet, consectetur<br />
                          adipiscing elit. Urna, tortor tempus.
                        </p>
                      </div>
                    </div>
                    
                    <div className="step-item">
                      <div className="step-icon-container orange">
                        <img src={makePaymentIcon} alt="Make Payment" className="step-icon" />
                      </div>
                      <div className="step-content">
                        <h3 className="step-title">Make Payment</h3>
                        <p className="step-description">
                          Lorem ipsum dolor sit amet, consectetur<br />
                          adipiscing elit. Urna, tortor tempus.
                        </p>
                      </div>
                    </div>
                    
                    <div className="step-item">
                      <div className="step-icon-container blue">
                        <img src={reachAirportIcon} alt="Reach Airport" className="step-icon" />
                      </div>
                      <div className="step-content">
                        <h3 className="step-title">Reach Airport on Selected Date</h3>
                        <p className="step-description">
                          Lorem ipsum dolor sit amet, consectetur<br />
                          adipiscing elit. Urna, tortor tempus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* References Section */}
      <section id="references" className="references">
        <div className="container">
          <h2 className="references-title">REFERANSLARIMIZ</h2>
          <div className="references-logos">
            <div className="logo-carousel">
              <div className="logo-item axon">
                <img src={axonAirlinesLogo} alt="Axon Airlines" className="logo-image" />
              </div>
              <div className="logo-item jetstar">
                <img src={jetstarLogo} alt="Jetstar" className="logo-image" />
              </div>
              <div className="logo-item expedia">
                <img src={expediaLogo} alt="Expedia" className="logo-image" />
              </div>
              <div className="logo-item qantas">
                <img src={qantasLogo} alt="Qantas" className="logo-image" />
              </div>
              <div className="logo-item alitalia">
                <img src={alitaliaLogo} alt="Alitalia" className="logo-image" />
              </div>
              {/* Duplicate logos for seamless loop */}
              <div className="logo-item axon">
                <img src={axonAirlinesLogo} alt="Axon Airlines" className="logo-image" />
              </div>
              <div className="logo-item jetstar">
                <img src={jetstarLogo} alt="Jetstar" className="logo-image" />
              </div>
              <div className="logo-item expedia">
                <img src={expediaLogo} alt="Expedia" className="logo-image" />
              </div>
              <div className="logo-item qantas">
                <img src={qantasLogo} alt="Qantas" className="logo-image" />
              </div>
              <div className="logo-item alitalia">
                <img src={alitaliaLogo} alt="Alitalia" className="logo-image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <div className="testimonials-container">
            <div className="testimonials-left">
              <h2 className="testimonials-title">KATILIMCILAR<br />NE DÜŞÜNÜYOR?</h2>
              <div className="testimonials-dots">
                {testimonials.map((_, index) => (
                  <div 
                    key={index} 
                    className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                    onClick={() => setCurrentTestimonial(index)}
                  ></div>
                ))}
              </div>
            </div>
            
            <div className="testimonials-right">
              <div className="testimonial-cards-container">
                <div className="testimonial-card active" key={currentTestimonial}>
                  <p className="testimonial-text">
                    {testimonials[currentTestimonial].text}
                  </p>
                  <div className="testimonial-author">
                    <img src={testimonials[currentTestimonial].avatar} alt="User Avatar" className="author-avatar" />
                    <div className="author-info">
                      <h4 className="author-name">{testimonials[currentTestimonial].name}</h4>
                      <p className="author-trip">{testimonials[currentTestimonial].trip}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="testimonial-nav">
                <button className="nav-arrow down" onClick={nextTestimonial}>
                  <img src={arrowDown} alt="Next" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="newsletter-content">
          <h2 className="newsletter-title">
            Travel-io hakkında bilgi, son haberler ve diğer ilginç teklifleri almak için abone olun
          </h2>
          <div className="newsletter-form">
            <div className="email-input-container">
              <img src={emailIcon} alt="Email Icon" className="email-icon" />
              <input 
                type="email" 
                placeholder="Mail Adresiniz..." 
                className="email-input"
              />
            </div>
            <button className="subscribe-btn">Abone Ol!</button>
          </div>
          <div className="newsletter-icon">
            <img src={planeIcon} alt="Plane Icon" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            {/* Logo */}
            <div className="footer-logo">
              <div className="logo-group">
                <div className="logo-bg"></div>
                <div className="logo-accent-1"></div>
                <div className="logo-accent-2"></div>
                <h1 className="logo-text">Travel-io</h1>
              </div>
            </div>
            
            {/* Right Section */}
            <div className="footer-right">
              {/* Navigation Columns */}
              <div className="footer-nav">
                <div className="nav-column">
                  <h4 className="nav-column-title">Kurumsal</h4>
                  <div className="nav-column-items">
                    <a href="#" className="nav-column-item">Kariyer</a>
                    <a href="#" className="nav-column-item">İletişim</a>
                  </div>
                </div>
                
                <div className="nav-column">
                  <h4 className="nav-column-title">Müşteriler</h4>
                  <div className="nav-column-items">
                    <a href="#" className="nav-column-item">Kurumsal Hesap<br />Talep Edin</a>
                  </div>
                </div>
              </div>
              
              {/* Discover Section */}
              <div className="footer-discover">
                <h3 className="footer-discover-title">Uygulamamızı Keşfet!</h3>
                <div className="footer-apps">
                  <div className="footer-app app-google">
                    <img src={googlePlayIcon} alt="Google Play" className="app-icon" />
                    <img src={googlePlayText} alt="GET IT ON" className="app-text" />
                  </div>
                  <div className="footer-app app-apple">
                    <img src={appleIcon} alt="Apple" className="app-icon" />
                    <img src={appleText} alt="Download on the" className="app-text" />
                  </div>
                </div>
                
                {/* Social Icons */}
                <div className="footer-social">
                  <div className="social-icon twitter-icon">
                    <img src={twitterIcon} alt="Twitter" />
                  </div>
                  <div className="social-icon instagram-icon">
                    <img src={instagramIcon} alt="Instagram" />
                  </div>
                  <div className="social-icon facebook-icon">
                    <img src={facebookIcon} alt="Facebook" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="footer-copyright">
            Tüm Haklar Saklıdır, info@travel-io.com
          </div>
        </div>
      </footer>
    </div>
      } />
    </Routes>
  )
}

export default App
