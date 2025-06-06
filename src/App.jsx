import { useState } from 'react'
import './index.css'
import heroIllustration from './assets/illus.svg'
import decorativeShape from './assets/Decore.svg'
import aboutImage1 from './assets/about-image-1.png'
import aboutImage2 from './assets/about-image-2.png'
import aboutImage3 from './assets/about-image-3.png'
import corporateWoman from './assets/corporate-woman.png'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
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
                <a href="#" className="nav-item">Hakkımızda</a>
                <a href="#" className="nav-item">Gezilerimiz</a>
                <a href="#" className="nav-item">Neden Biz?</a>
                <a href="#" className="nav-item">Referanslarımız</a>
              </div>
              
              <div className="nav-buttons">
                <a href="#" className="btn-primary">Firmamız Ol!</a>
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
      <section className="about-section">
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
      <section className="corporate-section">
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
      <section className="destinations">
        <div className="container">
          <div className="destinations-header">
            <h2 className="destinations-title">GEZİLERİMİZ</h2>
            <p className="destinations-subtitle">Daha Fazlası için Hemen Uygulamamızı İndirin!</p>
          </div>
          
          <div className="destinations-grid">
            <div className="destination-item">
              <img 
                src="https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=400&h=500&fit=crop" 
                alt="Rome, Italy" 
                className="destination-image"
              />
              <div className="destination-info">
                <h3 className="destination-name">Rome, Italy</h3>
                <div className="destination-details">
                  <div className="destination-location">
                    <div className="location-icon">📍</div>
                    <span className="destination-duration">2 Gün Konaklama</span>
                  </div>
                </div>
                <div className="destination-price">2500$ / Kişi</div>
              </div>
              <div className="rating-badge">
                <span className="rating-text">⭐ 9.2</span>
              </div>
            </div>
            
            <div className="destination-item">
              <img 
                src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=500&fit=crop" 
                alt="London, UK" 
                className="destination-image"
              />
              <div className="destination-info">
                <h3 className="destination-name">London, UK</h3>
                <div className="destination-details">
                  <div className="destination-location">
                    <div className="location-icon">📍</div>
                    <span className="destination-duration">4 Gün Konaklama</span>
                  </div>
                </div>
                <div className="destination-price">1500$ / Kişi</div>
              </div>
              <div className="rating-badge">
                <span className="rating-text">⭐ 8.9</span>
              </div>
            </div>
            
            <div className="destination-item">
              <img 
                src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=500&fit=crop" 
                alt="Full Europe" 
                className="destination-image"
              />
              <div className="destination-info">
                <h3 className="destination-name">Full Europe</h3>
                <div className="destination-details">
                  <div className="destination-location">
                    <div className="location-icon">📍</div>
                    <span className="destination-duration">1 Gün Konaklama</span>
                  </div>
                </div>
                <div className="destination-price">500$ / Kişi</div>
              </div>
              <div className="rating-badge">
                <span className="rating-text">⭐ 8.6</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-section">
        <div className="container">
          <div className="why-header">
            <h2 className="why-title">NEDEN BİZİ SEÇMELİSİN?</h2>
          </div>
          
          <div className="why-content">
            <div className="why-image">
              <div style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #24BAEC, #FF7029)',
                borderRadius: '26px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '28px',
                fontWeight: 'bold'
              }}>
                🗺️ Seyahat Planı
              </div>
            </div>
            
            <div className="why-steps">
              <div className="steps-grid">
                <div className="step-column">
                  <div className="step-item">
                    <div className="step-icon yellow">
                      ✈️
                    </div>
                    <div className="step-content">
                      <h3 className="step-title">Choose Destination</h3>
                      <p className="step-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
                      </p>
                    </div>
                  </div>
                  
                  <div className="step-item">
                    <div className="step-icon orange">
                      💳
                    </div>
                    <div className="step-content">
                      <h3 className="step-title">Make Payment</h3>
                      <p className="step-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
                      </p>
                    </div>
                  </div>
                  
                  <div className="step-item">
                    <div className="step-icon blue">
                      🚗
                    </div>
                    <div className="step-content">
                      <h3 className="step-title">Reach Airport on Selected Date</h3>
                      <p className="step-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="step-column">
                  <div className="step-item">
                    <div className="step-icon yellow">
                      ✈️
                    </div>
                    <div className="step-content">
                      <h3 className="step-title">Choose Destination</h3>
                      <p className="step-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
                      </p>
                    </div>
                  </div>
                  
                  <div className="step-item">
                    <div className="step-icon orange">
                      💳
                    </div>
                    <div className="step-content">
                      <h3 className="step-title">Make Payment</h3>
                      <p className="step-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
                      </p>
                    </div>
                  </div>
                  
                  <div className="step-item">
                    <div className="step-icon blue">
                      🚗
                    </div>
                    <div className="step-content">
                      <h3 className="step-title">Reach Airport on Selected Date</h3>
                      <p className="step-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
        </p>
      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* References Section */}
      <section className="references">
        <div className="container">
          <h2 className="references-title">REFERANSLARIMIZ</h2>
          <div className="references-logos">
            <div className="logo-item">
              <div style={{width: '130px', height: '130px', background: '#ddd', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px'}}>Logo 1</div>
            </div>
            <div className="logo-item">
              <div style={{width: '172px', height: '110px', background: '#ddd', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px'}}>Logo 2</div>
            </div>
            <div className="logo-item with-bg">
              <div style={{width: '162px', height: '162px', background: '#ddd', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px'}}>Logo 3</div>
            </div>
            <div className="logo-item">
              <div style={{width: '162px', height: '32px', background: '#ddd', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px'}}>Logo 4</div>
            </div>
            <div className="logo-item">
              <div style={{width: '94px', height: '21px', background: '#ddd', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px'}}>Logo 5</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <div className="testimonials-header">
            <h2 className="testimonials-title">{`kATILIMCILAR\nNE DÜŞÜNÜYOR?`}</h2>
            <div className="testimonials-dots">
              <div className="dot active"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
          
          <div className="testimonial-card">
            <p className="testimonial-text">
              "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."
            </p>
            <div className="testimonial-author">
              <div className="author-avatar" style={{background: 'linear-gradient(45deg, #42A7C3, #8ADBF0)'}}></div>
              <div className="author-info">
                <h4 className="author-name">Tunahan KORKMAZ</h4>
                <p className="author-trip">Kastamonu Gezisi</p>
              </div>
            </div>
            <div className="testimonial-nav">
              <div className="nav-arrow up"></div>
              <div className="nav-arrow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="container">
          <div className="newsletter-bg"></div>
          <div className="newsletter-content">
            <h2 className="newsletter-title">
              Travel-io hakkında bilgi, son haberler ve diğer ilginç teklifleri almak için abone olun
            </h2>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Mail Adresiniz..." 
                className="email-input"
              />
              <button className="subscribe-btn">Abone Ol!</button>
            </div>
            <div className="newsletter-icon">
              ✈️
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <div className="logo-group">
                <div className="logo-bg"></div>
                <div className="logo-accent-1"></div>
                <div className="logo-accent-2"></div>
                <h1 className="logo-text">Travel-io</h1>
              </div>
            </div>
            
            <div className="footer-main">
              <div className="footer-discover">
                <h3 className="footer-discover-title">Uygulamamızı Keşfet!</h3>
                <div className="footer-apps">
                  <div className="footer-app app-google">
                    <span style={{color: 'white', fontSize: '20px'}}>📱</span>
                    <span style={{color: 'white', fontSize: '12px'}}>Google Play</span>
                  </div>
                  <div className="footer-app app-apple">
                    <span style={{color: 'white', fontSize: '20px'}}>🍎</span>
                    <span style={{color: 'white', fontSize: '12px'}}>App Store</span>
                  </div>
                </div>
                <div className="footer-social">
                  <div className="social-icon">📧</div>
                  <div className="social-icon">📘</div>
                  <div className="social-icon instagram">📷</div>
                </div>
              </div>
              
              <div className="footer-nav">
                <div className="nav-column">
                  <h4 className="nav-column-title">Kurumsal</h4>
                  <a href="#" className="nav-column-item">Hakkımızda</a>
                  <a href="#" className="nav-column-item">Kariyer</a>
                  <a href="#" className="nav-column-item">İletişim</a>
                </div>
                
                <div className="nav-column">
                  <h4 className="nav-column-title">Müşteriler</h4>
                  <a href="#" className="nav-column-item">Kurumsal Hesap</a>
                  <a href="#" className="nav-column-item">Ayrıcalıklar</a>
                </div>
                
                <div className="nav-column">
                  <h4 className="nav-column-title">Hizmetler</h4>
                  <a href="#" className="nav-column-item">Popüler Geziler</a>
                  <a href="#" className="nav-column-item">Seyahat Rehberi</a>
                  <a href="#" className="nav-column-item">Rezervasyon ve SSS</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-copyright">
            Tüm Haklar Saklıdır, info@travel-io.com
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
