import { useState } from 'react'
import './FirmamiziOl.css'

function FirmamiziOl() {
  const [formData, setFormData] = useState({
    firstName: 'Tunahan',
    lastName: 'Korkmaz',
    email: 'tunahan@gmail.com',
    phone: '+90 543 914 6761',
    termsAccepted: true
  });

  const [searchTerm, setSearchTerm] = useState('');

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
      <header className="firmamizi-ol-header">
        <div className="hero-background">
          <div className="container">
            <nav className="navbar">
              <div className="brand">
                <div className="logo">
                  <span className="logo-text">Travel-io</span>
                </div>
              </div>
              
              <div className="language-selector">
                <div className="flag-group">
                  <img src="/images/flag-red.svg" alt="TR Flag Red" className="flag-red" />
                  <img src="/images/flag-white.svg" alt="TR Flag White" className="flag-white" />
                </div>
                <span className="language-text">TR</span>
                <img src="/images/arrow-down.svg" alt="Arrow Down" className="arrow-down" />
              </div>
            </nav>
            
            <div className="hero-content">
              <div className="hero-title">
                <h1>Hemen Firmanızı Sisteme Ekleyin<br />Fırsatları Kaçırmayın!</h1>
                <p>Firmanızı sisteme ekleme sürecinize yardımcı olmak adına rehberden yardım alabilir, sık sorulan soruları inceleyebilirsiniz.</p>
              </div>
              
              <div className="scroll-indicator">
                <span>Detaylar İçin Kaydırın</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="content">
        <div className="container">
          <div className="content-layout">
            {/* Sidebar */}
            <div className="sidebar">
              <div className="search-box">
                <img src="/images/search-icon.svg" alt="Search" className="search-icon" />
                <input 
                  type="text" 
                  placeholder="Formda Ara"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="sidebar-content">
                <div className="section-title">BAŞLARKEN</div>
                
                <div className="menu-section">
                  <div className="menu-item">
                    <span>İçindekiler</span>
                  </div>
                  
                  <div className="menu-item expandable">
                    <span>Hızlı Başlangıç</span>
                    <div className="expand-icon"></div>
                  </div>
                  
                  <div className="progress-section">
                    <div className="progress-dots">
                      <div className="dot active"></div>
                      <div className="line"></div>
                      <div className="dot"></div>
                      <div className="dot"></div>
                      <div className="dot"></div>
                      <div className="dot"></div>
                    </div>
                    <div className="progress-labels">
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
                    <div className="expand-icon"></div>
                  </div>
                  
                  <div className="menu-item">
                    <span>Sık Sorulan Sorular</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="main-content">
              <div className="content-header">
                <h2>İçindekiler</h2>
                <p>Sırasıyla diğer bölümlere geçebilirsiniz...</p>
              </div>
              
              <div className="content-tabs">
                <div className="tab active">İçindekiler</div>
                <div className="tab">Veri Güvenliği</div>
                <div className="tab">Hızlı Başlangıç</div>
                <div className="tab">Uygulama Hakkında</div>
                <div className="tab">Sık Sorulan Sorular</div>
              </div>
              
              <div className="content-divider"></div>
              
              <div className="content-area">
                {/* Content will be rendered here based on selected tab */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Membership Section */}
      <div className="membership-section">
        <div className="container">
          <h2 className="membership-title">ÜYELİĞİNİZİ TAMAMLAYIN</h2>
          
          <div className="step-container">
            <div className="step-images">
              <div className="step-image-group">
                <div className="step-image step-1">
                  <img src="/images/step-bg-1.png" alt="Step 1" />
                </div>
                <div className="step-image step-2">
                  <img src="/images/step-bg-2.png" alt="Step 2" />
                </div>
                <div className="step-image step-3">
                  <img src="/images/step-bg-3.png" alt="Step 3" />
                </div>
              </div>
            </div>
            
            <div className="step-form">
              <div className="form-container">
                <div className="progress-bar">
                  <div className="progress-step active">
                    <div className="step-indicator"></div>
                  </div>
                  <div className="progress-line"></div>
                  <div className="progress-step">
                    <div className="step-indicator"></div>
                  </div>
                  <div className="progress-line"></div>
                  <div className="progress-step">
                    <div className="step-indicator"></div>
                  </div>
                </div>
                
                <div className="step-content">
                  <div className="step-header">
                    <h3>Yetkili Kişi Bilgileri</h3>
                    <p>Lütfen firmanızın, üyelik sürecinde irtibatta kalabileceğimiz yetkili kişinin bilgilerini giriniz.</p>
                  </div>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="agreement-section">
                      <div className="checkbox-container">
                        <div className="custom-checkbox">
                          <img src="/images/checkbox-bg.svg" alt="Checkbox" className="checkbox-bg" />
                          <img src="/images/checkbox-check.svg" alt="Check" className="checkbox-check" />
                        </div>
                        <span className="agreement-text">
                          <span className="link">Kullanım Şartlarını</span> Onaylıyorum
                        </span>
                      </div>
                    </div>
                    
                    <div className="form-section">
                      <h4>Kişisel Bilgiler</h4>
                      
                      <div className="form-field">
                        <label>Adınız</label>
                        <div className="input-container">
                          <input 
                            type="text" 
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      
                      <div className="form-field">
                        <label>Soyadınız</label>
                        <div className="input-container">
                          <input 
                            type="text" 
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="contact-section">
                      <div className="section-header">
                        <h4>İletişim Bilgileri</h4>
                        <p>Lütfen süreç içerisinde irtibata geçebileceğimiz mail adresi ve telefon numarası giriniz.</p>
                      </div>
                      
                      <div className="form-field">
                        <div className="input-container">
                          <img src="/images/email-icon.svg" alt="Email" className="input-icon" />
                          <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      
                      <div className="form-field">
                        <div className="input-container">
                          <img src="/images/phone-icon.svg" alt="Phone" className="input-icon" />
                          <input 
                            type="tel" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <button type="submit" className="continue-btn">
                      <span>Devam Et</span>
                      <img src="/images/arrow-right.svg" alt="Arrow Right" className="btn-icon" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="logo-bg"></div>
                <div className="logo-accent-1"></div>
                <div className="logo-accent-2"></div>
                <span className="logo-text">Travel-io</span>
              </div>
            </div>
            
            <div className="footer-sections">
              <div className="footer-social">
                <div className="social-icons">
                  <div className="social-icon">
                    <img src="/images/twitter-bg.svg" alt="Twitter BG" className="social-bg" />
                    <img src="/images/twitter-icon.svg" alt="Twitter" className="social-icon-img" />
                  </div>
                  <div className="social-icon">
                    <img src="/images/facebook-bg.svg" alt="Facebook BG" className="social-bg" />
                    <img src="/images/facebook-icon.svg" alt="Facebook" className="social-icon-img" />
                  </div>
                  <div className="social-icon instagram">
                    <img src="/images/instagram-bg.svg" alt="Instagram BG" className="social-bg" />
                    <img src="/images/instagram-icon.svg" alt="Instagram" className="social-icon-img" />
                  </div>
                </div>
                
                <div className="app-download">
                  <h4>Uygulamamızı Keşfet!</h4>
                  <div className="download-buttons">
                    <div className="download-btn google-play">
                      <div className="download-bg"></div>
                      <div className="download-content">
                        <div className="google-play-icons">
                          <img src="/images/google-play-1.svg" alt="Google Play 1" />
                          <img src="/images/google-play-2.svg" alt="Google Play 2" />
                          <img src="/images/google-play-3.svg" alt="Google Play 3" />
                          <img src="/images/google-play-4.svg" alt="Google Play 4" />
                        </div>
                        <img src="/images/google-play-text.svg" alt="Google Play Text" className="download-text" />
                      </div>
                    </div>
                    
                    <div className="download-btn app-store">
                      <div className="download-bg"></div>
                      <div className="download-content">
                        <div className="apple-icons">
                          <img src="/images/apple-icon-1.svg" alt="Apple Icon 1" />
                          <img src="/images/apple-icon-2.svg" alt="Apple Icon 2" />
                        </div>
                        <img src="/images/apple-text.svg" alt="Apple Text" className="download-text" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="footer-nav">
                <div className="nav-column">
                  <h4>Kurumsal</h4>
                  <div className="nav-links">
                    <a href="#">Kariyer</a>
                    <a href="#">İletişim</a>
                  </div>
                </div>
                
                <div className="nav-column">
                  <h4>Müşteriler</h4>
                  <div className="nav-links">
                    <a href="#">Kurumsal Hesap Talep Edin</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>Tüm Haklar Saklıdır, info@travel-io.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FirmamiziOl; 