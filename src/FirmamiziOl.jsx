import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FirmamiziOl.css';

// Import images
import heroBackground from '../assets/images/hero-background.jpg';
import stepImage1 from '../assets/images/step-image-1.jpg';
import stepImage2 from '../assets/images/step-image-2.jpg';
import stepImage3 from '../assets/images/step-image-3.jpg';

const FirmamiziOl = () => {
  const [formData, setFormData] = useState({
    firstName: 'Tunahan',
    lastName: 'Korkmaz',
    email: 'tunahan@gmail.com',
    phone: '+90 543 914 6761',
    termsAccepted: true
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="firmamizi-ol">
      {/* Header */}
      <header className="header">
        <div className="header-background">
          <img src={heroBackground} alt="Background" className="background-image" />
          <div className="header-overlay"></div>
        </div>
        
        <nav className="navbar">
          <div className="brand">
            <Link to="/" className="logo">
              <span className="logo-text">Travel-io</span>
            </Link>
          </div>
          
          <div className="language">
            <div className="flag-container">
              <div className="flag-tr"></div>
            </div>
            <span className="language-text">TR</span>
            <div className="dropdown-arrow">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 6L8 10L12 6" stroke="white" strokeWidth="2"/>
              </svg>
            </div>
          </div>
        </nav>

        <div className="hero-content">
          <div className="hero-title">
            <h1>Hemen Firmanızı Sisteme Ekleyin<br />Fırsatları <span className="highlight">Kaçırmayın!</span></h1>
            <p>Firmanızı sisteme ekleme sürecinize yardımcı olmak adına rehberden yardım alabilir, sık sorulan soruları inceleyebilirsiniz.</p>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <span>Detaylar İçin Kaydırın</span>
          <div className="mouse-icon">
            <svg width="29" height="29" viewBox="0 0 29 29" fill="none">
              <rect x="8" y="6" width="13" height="20" rx="6.5" stroke="#D9D9D9" strokeWidth="2"/>
              <circle cx="14.5" cy="10" r="1" fill="#D9D9D9"/>
            </svg>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="content">
        {/* Sidebar */}
        <div className="sidebar">
          <div className="search-box">
            <svg className="search-icon" width="12" height="12" viewBox="0 0 12 12" fill="none">
              <circle cx="5" cy="5" r="4" stroke="#C4C4C4" strokeWidth="2"/>
              <path d="m9 9 2 2" stroke="#C4C4C4" strokeWidth="2"/>
            </svg>
            <span>Formda Ara</span>
          </div>

          <div className="sidebar-section">
            <h3 className="section-title">BAŞLARKEN</h3>
            
            <div className="menu-item">
              <span>İçindekiler</span>
            </div>

            <div className="menu-item expandable">
              <span>Hızlı Başlangıç</span>
              <svg className="expand-icon" width="14" height="20" viewBox="0 0 14 20" fill="none">
                <path d="M5 9L7 11L5 13" stroke="#C4C4C4" strokeWidth="2"/>
              </svg>
            </div>

            <div className="progress-steps">
              <div className="step-indicator">
                <div className="step-dot active"></div>
                <div className="step-line"></div>
                <div className="step-dot"></div>
                <div className="step-line"></div>
                <div className="step-dot"></div>
                <div className="step-line"></div>
                <div className="step-dot"></div>
                <div className="step-line"></div>
                <div className="step-dot"></div>
              </div>
              <div className="step-labels">
                <div>Üyelik Süreci</div>
                <div>Gerekli Belgeler</div>
                <div>İşlemler</div>
                <div>İşlem Süreci</div>
                <div>Admin Paneli</div>
              </div>
            </div>

            <div className="menu-item">
              <span>Veri Güvenliği</span>
            </div>

            <div className="menu-item expandable">
              <span>Uygulama Hakkında</span>
              <svg className="expand-icon" width="14" height="20" viewBox="0 0 14 20" fill="none">
                <path d="M5 9L7 11L5 13" stroke="#C4C4C4" strokeWidth="2"/>
              </svg>
            </div>

            <div className="menu-item">
              <span>Sık Sorulan Sorular</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <div className="content-header">
            <h2>İçindekiler</h2>
            <p>Sırasıyla diğer bölümlere geçebilirsiniz...</p>
          </div>

          <div className="content-navigation">
            <div className="nav-tabs">
              <div className="nav-tab active">
                İçindekiler
                <div className="tab-connector"></div>
              </div>
              <div className="nav-tab">
                Veri Güvenliği
                <div className="tab-connector"></div>
              </div>
              <div className="nav-tab">
                Hızlı Başlangıç
                <div className="tab-connector"></div>
              </div>
              <div className="nav-tab">
                Uygulama Hakkında
                <div className="tab-connector"></div>
              </div>
              <div className="nav-tab">
                Sık Sorulan Sorular
                <div className="tab-connector"></div>
              </div>
            </div>
            <div className="nav-separator"></div>
            <div className="content-area"></div>
          </div>
        </div>
      </div>

      {/* Membership Section */}
      <div className="membership-section">
        <h2 className="membership-title">ÜYELİĞİNİZİ TAMAMLAYIN</h2>
        
        <div className="step-container">
          {/* Step Images */}
          <div className="step-images">
            <div className="image-stack">
              <img src={stepImage1} alt="Step 1" className="step-image step-1" />
              <img src={stepImage2} alt="Step 2" className="step-image step-2" />
              <img src={stepImage3} alt="Step 3" className="step-image step-3" />
            </div>
          </div>

          {/* Step Form */}
          <div className="step-form">
            <div className="form-container">
              {/* Progress Bar */}
              <div className="progress-bar">
                <div className="progress-step active">
                  <div className="step-circle active"></div>
                </div>
                <div className="progress-line"></div>
                <div className="progress-step">
                  <div className="step-circle"></div>
                </div>
                <div className="progress-line"></div>
                <div className="progress-step">
                  <div className="step-circle"></div>
                </div>
              </div>

              {/* Form Content */}
              <div className="form-content">
                <div className="form-header">
                  <h3>Yetkili Kişi Bilgileri</h3>
                  <p>Lütfen firmanızın, üyelik sürecinde irtibatta kalabileceğimiz yetkili kişinin bilgilerini giriniz.</p>
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Terms Agreement */}
                  <div className="agreement">
                    <div className="checkbox-container">
                      <input
                        type="checkbox"
                        id="terms"
                        name="termsAccepted"
                        checked={formData.termsAccepted}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="terms" className="checkbox-label">
                        <span className="link">Kullanım Şartlarını</span> Onaylıyorum
                      </label>
                    </div>
                  </div>

                  {/* Personal Information */}
                  <div className="form-section">
                    <h4>Kişisel Bilgiler</h4>
                    
                    <div className="form-field">
                      <label>Adınız</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="form-field">
                      <label>Soyadınız</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="form-section contact-section">
                    <h4>İletişim Bilgileri</h4>
                    <p>Lütfen süreç içerisinde irtibata geçebileceğimiz mail adresi ve telefon numarası giriniz.</p>
                    
                    <div className="form-field">
                      <div className="input-with-icon">
                        <svg className="input-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#D4D4D4" strokeWidth="2"/>
                          <polyline points="22,6 12,13 2,6" stroke="#D4D4D4" strokeWidth="2"/>
                        </svg>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="form-field">
                      <div className="input-with-icon">
                        <svg className="input-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M22 16.92V19.92C22 20.52 21.52 21 20.92 21C9.4 21 0 11.6 0 0.08C0 -0.52 0.48 -1 1.08 -1H4.08C4.68 -1 5.16 -0.52 5.16 0.08C5.16 2.08 5.52 4.04 6.2 5.88C6.36 6.24 6.24 6.68 5.92 6.96L4.4 8.48C6.04 11.84 8.16 13.96 11.52 15.6L13.04 14.08C13.32 13.76 13.76 13.64 14.12 13.8C15.96 14.48 17.92 14.84 19.92 14.84C20.52 14.84 21 15.32 21 15.92V16.92Z" fill="#D4D4D4"/>
                        </svg>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="submit-btn">
                    Devam Et
                    <svg className="btn-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="firmamizi-footer">
        <div className="firmamizi-footer-container">
          <div className="firmamizi-footer-brand">
            <div className="firmamizi-footer-logo">
              <span className="firmamizi-footer-logo-text">Travel-io</span>
            </div>
          </div>

          <div className="firmamizi-footer-content">
            <div className="firmamizi-footer-social">
              <div className="firmamizi-social-icons">
                <div className="firmamizi-social-icon twitter">
                  <svg width="16" height="13" viewBox="0 0 16 13" fill="none">
                    <path d="M16 1.54C15.4 1.8 14.8 1.97 14.1 2.05C14.8 1.64 15.3 1 15.5 0.24C14.9 0.62 14.2 0.89 13.4 1.04C12.8 0.39 11.9 0 10.9 0C9.1 0 7.7 1.4 7.7 3.18C7.7 3.43 7.7 3.67 7.8 3.9C5.1 3.76 2.7 2.5 1.1 0.58C0.8 1.09 0.7 1.64 0.7 2.28C0.7 3.5 1.3 4.59 2.3 5.21C1.8 5.21 1.3 5.06 0.9 4.83V4.87C0.9 6.42 2 7.71 3.5 8C3.2 8.08 2.9 8.12 2.6 8.12C2.4 8.12 2.2 8.1 2 8.06C2.4 9.33 3.6 10.27 5 10.29C4 11.15 2.7 11.66 1.3 11.66C1 11.66 0.8 11.65 0.5 11.62C1.9 12.53 3.6 13.05 5.5 13.05C10.9 13.05 13.8 8.17 13.8 3.55V3.28C14.5 2.81 15.1 2.22 15.5 1.54H16Z" fill="#080809"/>
                  </svg>
                </div>
                <div className="firmamizi-social-icon facebook">
                  <svg width="6" height="13" viewBox="0 0 6 13" fill="none">
                    <path d="M5.86 7.31L6.14 4.98H3.89V3.43C3.89 2.78 4.21 2.15 5.2 2.15H6.23V0.18C6.23 0.18 5.31 0 4.43 0C2.6 0 1.44 1.08 1.44 3.04V4.98H-0.57V7.31H1.44V13H3.89V7.31H5.86Z" fill="#080809"/>
                  </svg>
                </div>
                <div className="firmamizi-social-icon instagram">
                  <div className="firmamizi-instagram-gradient">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 1.44C10.14 1.44 10.4 1.45 11.26 1.49C12.05 1.52 12.48 1.65 12.77 1.76C13.16 1.91 13.44 2.09 13.73 2.38C14.02 2.67 14.2 2.95 14.35 3.34C14.46 3.63 14.59 4.06 14.62 4.85C14.66 5.71 14.67 5.97 14.67 8.11C14.67 10.25 14.66 10.51 14.62 11.37C14.59 12.16 14.46 12.59 14.35 12.88C14.2 13.27 14.02 13.55 13.73 13.84C13.44 14.13 13.16 14.31 12.77 14.46C12.48 14.57 12.05 14.7 11.26 14.73C10.4 14.77 10.14 14.78 8 14.78C5.86 14.78 5.6 14.77 4.74 14.73C3.95 14.7 3.52 14.57 3.23 14.46C2.84 14.31 2.56 14.13 2.27 13.84C1.98 13.55 1.8 13.27 1.65 12.88C1.54 12.59 1.41 12.16 1.38 11.37C1.34 10.51 1.33 10.25 1.33 8.11C1.33 5.97 1.34 5.71 1.38 4.85C1.41 4.06 1.54 3.63 1.65 3.34C1.8 2.95 1.98 2.67 2.27 2.38C2.56 2.09 2.84 1.91 3.23 1.76C3.52 1.65 3.95 1.52 4.74 1.49C5.6 1.45 5.86 1.44 8 1.44ZM8 0C5.83 0 5.55 0.01 4.68 0.05C3.81 0.09 3.22 0.23 2.71 0.43C2.18 0.64 1.73 0.92 1.28 1.37C0.83 1.82 0.55 2.27 0.34 2.8C0.14 3.31 0 3.9 -0.04 4.77C-0.08 5.64 -0.09 5.92 -0.09 8.09C-0.09 10.26 -0.08 10.54 -0.04 11.41C0 12.28 0.14 12.87 0.34 13.38C0.55 13.91 0.83 14.36 1.28 14.81C1.73 15.26 2.18 15.54 2.71 15.75C3.22 15.95 3.81 16.09 4.68 16.13C5.55 16.17 5.83 16.18 8 16.18C10.17 16.18 10.45 16.17 11.32 16.13C12.19 16.09 12.78 15.95 13.29 15.75C13.82 15.54 14.27 15.26 14.72 14.81C15.17 14.36 15.45 13.91 15.66 13.38C15.86 12.87 16 12.28 16.04 11.41C16.08 10.54 16.09 10.26 16.09 8.09C16.09 5.92 16.08 5.64 16.04 4.77C16 3.9 15.86 3.31 15.66 2.8C15.45 2.27 15.17 1.82 14.72 1.37C14.27 0.92 13.82 0.64 13.29 0.43C12.78 0.23 12.19 0.09 11.32 0.05C10.45 0.01 10.17 0 8 0Z" fill="white"/>
                      <path d="M8 3.89C5.73 3.89 3.89 5.73 3.89 8C3.89 10.27 5.73 12.11 8 12.11C10.27 12.11 12.11 10.27 12.11 8C12.11 5.73 10.27 3.89 8 3.89ZM8 10.67C6.52 10.67 5.33 9.48 5.33 8C5.33 6.52 6.52 5.33 8 5.33C9.48 5.33 10.67 6.52 10.67 8C10.67 9.48 9.48 10.67 8 10.67Z" fill="white"/>
                      <circle cx="12.27" cy="3.73" r="0.84" fill="white"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="firmamizi-footer-download">
              <h4>Uygulamamızı Keşfet!</h4>
              <div className="firmamizi-download-buttons">
                <div className="firmamizi-download-btn google-play">
                  <div className="firmamizi-download-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M0.72 0.33L10.79 19.67" fill="#2196F3"/>
                      <path d="M1.46 0L15.02 10" fill="#4CAF50"/>
                      <path d="M11.51 6.62L19.28 13.38" fill="#F0BB1F"/>
                      <path d="M1.46 10L15.02 20" fill="#F15A2B"/>
                    </svg>
                  </div>
                </div>
                <div className="firmamizi-download-btn app-store">
                  <div className="firmamizi-download-icon">
                    <svg width="13" height="16" viewBox="0 0 13 16" fill="none">
                      <path d="M0 3.69L13.12 16M6.54 0L9.55 3.51" stroke="white" strokeWidth="2"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="firmamizi-footer-nav">
              <div className="firmamizi-nav-column">
                <h5>Kurumsal</h5>
                <ul>
                  <li><a href="#">Kariyer</a></li>
                  <li><a href="#">İletişim</a></li>
                </ul>
              </div>
              <div className="firmamizi-nav-column">
                <h5>Müşteriler</h5>
                <ul>
                  <li><a href="#">Kurumsal Hesap Talep Edin</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="firmamizi-footer-bottom">
            <p>Tüm Haklar Saklıdır, info@travel-io.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FirmamiziOl; 