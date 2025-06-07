import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FirmamiziOl.css';
import Footer from './components/Footer.jsx';

// Import images
import heroBackground from '../assets/images/hero-background.jpg';
import stepImage1 from '../assets/images/step-image-1.jpg';
import stepImage2 from '../assets/images/step-image-2.jpg';
import stepImage3 from '../assets/images/step-image-3.jpg';

const FirmamiziOl = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    // Step 1 data
    firstName: 'Tunahan',
    lastName: 'Korkmaz',
    email: 'tunahan@gmail.com',
    phone: '+90 543 914 6761',
    termsAccepted: true,
    // Step 2 data
    username: 'cankiriturizm',
    password: '',
    confirmPassword: '',
    // Step 3 data
    companyName: 'cankiriturizm',
    companyAddress: '',
    companyPhone: '',
    taxNumber: '',
    foundingDate: '12.05.1992',
    operationLocation: 'Çankırı, TUR',
    taxDocument: null
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
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log('Form completed:', formData);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const checkPasswordStrength = (password) => {
    if (password.length < 6) return { isStrong: false, message: 'Şifre çok kısa' };
    if (password.length >= 8 && /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
      return { isStrong: true, message: 'Şifreniz Güçlü' };
    }
    return { isStrong: false, message: 'Şifre zayıf' };
  };

  const passwordsMatch = () => {
    return formData.password === formData.confirmPassword && formData.confirmPassword !== '';
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        taxDocument: file
      }));
    }
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
                <div className={`step-circle ${currentStep >= 1 ? 'active' : ''}`}></div>
                <div className={`progress-line ${currentStep >= 2 ? 'active' : ''}`}></div>
                <div className={`step-circle ${currentStep >= 2 ? 'active' : ''}`}></div>
                <div className={`progress-line ${currentStep >= 3 ? 'active' : ''}`}></div>
                <div className={`step-circle ${currentStep >= 3 ? 'active' : ''}`}></div>
              </div>

              {/* Form Content */}
              <div className="form-content">
                <form onSubmit={handleSubmit}>
                  {currentStep === 1 && (
                    <>
                      {/* Form Title */}
                      <div className="form-title">
                        <h3>Yetkili Kişi Bilgileri</h3>
                        <p>Lütfen firmanızın, üyelik sürecinde irtibatta kalabileceğimiz yetkili kişinin bilgilerini giriniz.</p>
                      </div>

                      {/* Terms Agreement */}
                      <div className="terms-agreement">
                        <input
                          type="checkbox"
                          id="terms"
                          name="termsAccepted"
                          checked={formData.termsAccepted}
                          onChange={handleInputChange}
                          className="terms-checkbox"
                        />
                        <label htmlFor="terms" className="terms-label">
                          <a href="#" className="link">Kullanım Şartlarını</a> Onaylıyorum
                        </label>
                      </div>

                      {/* Personal Information Section */}
                      <div className="personal-info-section">
                        <div className="section-header">
                          <h4 className="section-title">Kişisel Bilgiler</h4>
                        </div>
                        
                        <div className="form-row">
                          <div className="form-field">
                            <label>Adınız</label>
                            <input
                              type="text"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              placeholder="Tunahan"
                            />
                          </div>

                          <div className="form-field">
                            <label>Soyadınız</label>
                            <input
                              type="text"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              placeholder="Korkmaz"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Contact Information Section */}
                      <div className="contact-info-section">
                        <div className="section-header">
                          <h4 className="section-title">İletişim Bilgileri</h4>
                          <p className="section-description">Lütfen süreç içerisinde irtibata geçebileceğimiz mail adresi ve telefon numarası giriniz.</p>
                        </div>
                        
                        <div className="form-row">
                          <div className="form-field">
                            <label>E-posta Adresi</label>
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
                                placeholder="tunahan@gmail.com"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="form-row">
                          <div className="form-field">
                            <label>Telefon Numarası</label>
                            <div className="input-with-icon">
                              <svg className="input-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M22 16.92V19.92C22 20.52 21.52 21 20.92 21C9.4 21 0 11.6 0 0.08C0 -0.52 0.48 -1 1.08 -1H4.08C4.68 -1 5.16 -0.52 5.16 0.08C5.16 2.08 5.52 4.04 6.2 5.88C6.36 6.24 6.24 6.68 5.92 6.96L4.4 8.48C6.04 11.84 8.16 13.96 11.52 15.6L13.04 14.08C13.32 13.76 13.76 13.64 14.12 13.8C15.96 14.48 17.92 14.84 19.92 14.84C20.52 14.84 21 15.32 21 15.92V16.92Z" fill="#D4D4D4"/>
                              </svg>
                              <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="+90 543 914 6761"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <button type="submit" className="submit-btn">
                        Devam Et
                        <svg className="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </button>
                    </>
                  )}

                  {currentStep === 2 && (
                    <>
                      {/* Form Title */}
                      <div className="form-title">
                        <h3>Admin Panel Hesap Bilgileri</h3>
                        <p>Süreci takip edebilmeniz için sizlere admin paneli sağlayacağız! Lütfen paneliniz için kullanıcı adı ve şifre değerleri giriniz.</p>
                      </div>

                      {/* Admin Panel Section */}
                      <div className="admin-panel-section">
                        <div className="section-header">
                          <h4 className="section-title">Hesap Bilgileri</h4>
                        </div>
                        
                        <div className="form-row">
                          <div className="form-field">
                            <label>Kullanıcı Adı</label>
                            <input
                              type="text"
                              name="username"
                              value={formData.username}
                              onChange={handleInputChange}
                              placeholder="cankiriturizm"
                            />
                          </div>
                        </div>

                        <div className="form-row">
                          <div className="form-field password-field">
                            <label>Şifre Belirleyin</label>
                            <div className="input-with-icon">
                              <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                placeholder="Şifrenizi girin"
                                style={{ fontFamily: showPassword ? 'Roboto, sans-serif' : 'monospace' }}
                              />
                              <button 
                                type="button" 
                                className="password-toggle"
                                onClick={() => setShowPassword(!showPassword)}
                              >
                                {showPassword ? (
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" stroke="#D4D4D4" strokeWidth="2"/>
                                    <line x1="1" y1="1" x2="23" y2="23" stroke="#D4D4D4" strokeWidth="2"/>
                                  </svg>
                                ) : (
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M1 12S5 4 12 4s11 8 11 8-4 8-11 8S1 12 1 12z" stroke="#D4D4D4" strokeWidth="2"/>
                                    <circle cx="12" cy="12" r="3" stroke="#D4D4D4" strokeWidth="2"/>
                                  </svg>
                                )}
                              </button>
                            </div>
                            {formData.password && (
                              <div className="password-strength">
                                <svg className="strength-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                  <path d="M13.19 4.19L9 8.38L5.81 5.19C5.42 4.8 4.79 4.8 4.4 5.19C4.01 5.58 4.01 6.21 4.4 6.6L8.29 10.49C8.68 10.88 9.31 10.88 9.7 10.49L14.6 5.59C14.99 5.2 14.99 4.57 14.6 4.18C14.21 3.79 13.58 3.79 13.19 4.18V4.19Z" fill={checkPasswordStrength(formData.password).isStrong ? "#34C759" : "#FF3B30"}/>
                                </svg>
                                <span className={`strength-text ${checkPasswordStrength(formData.password).isStrong ? 'strong' : 'weak'}`}>
                                  {checkPasswordStrength(formData.password).message}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="form-row">
                          <div className="form-field password-field">
                            <label>Şifrenizi Yeniden Tuşlayın</label>
                            <div className="input-with-icon">
                              <input
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                placeholder="Şifrenizi tekrar girin"
                                style={{ fontFamily: showConfirmPassword ? 'Roboto, sans-serif' : 'monospace' }}
                              />
                              <button 
                                type="button" 
                                className="password-toggle"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                              >
                                {showConfirmPassword ? (
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" stroke="#D4D4D4" strokeWidth="2"/>
                                    <line x1="1" y1="1" x2="23" y2="23" stroke="#D4D4D4" strokeWidth="2"/>
                                  </svg>
                                ) : (
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M1 12S5 4 12 4s11 8 11 8-4 8-11 8S1 12 1 12z" stroke="#D4D4D4" strokeWidth="2"/>
                                    <circle cx="12" cy="12" r="3" stroke="#D4D4D4" strokeWidth="2"/>
                                  </svg>
                                )}
                              </button>
                            </div>
                            {formData.confirmPassword && (
                              <div className="password-strength">
                                <svg className="strength-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                  <path d="M13.19 4.19L9 8.38L5.81 5.19C5.42 4.8 4.79 4.8 4.4 5.19C4.01 5.58 4.01 6.21 4.4 6.6L8.29 10.49C8.68 10.88 9.31 10.88 9.7 10.49L14.6 5.59C14.99 5.2 14.99 4.57 14.6 4.18C14.21 3.79 13.58 3.79 13.19 4.18V4.19Z" fill={passwordsMatch() ? "#34C759" : "#FF3B30"}/>
                                </svg>
                                <span className={`strength-text ${passwordsMatch() ? 'strong' : 'weak'}`}>
                                  {passwordsMatch() ? 'Şifre Eşleşiyor' : 'Şifreler Eşleşmiyor'}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Button Group */}
                      <div className="button-group">
                        <button type="button" onClick={handlePrevious} className="btn-secondary">
                          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                            <path d="M6 8L0 4L6 0" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                          Geri Dön
                        </button>
                        <button type="submit" className="btn-secondary">
                          Devam Et
                          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                            <path d="M6 0L12 4L6 8" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                        </button>
                      </div>
                    </>
                  )}

                  {currentStep === 3 && (
                    <>
                      {/* Form Title */}
                      <div className="form-title">
                        <h3>Firma Bilgileri</h3>
                        <p>Firmanız hakkında bilgi sahibi olabilmemiz için aşağıdaki alanları doldurunuz.</p>
                      </div>

                      {/* Company Information Section */}
                      <div className="company-info-section">
                        <div className="section-header">
                          <h4 className="section-title">Firma Hakkında</h4>
                        </div>
                        
                        <div className="form-row">
                          <div className="form-field">
                            <label>Firma Adı</label>
                            <input
                              type="text"
                              name="companyName"
                              value={formData.companyName}
                              onChange={handleInputChange}
                              placeholder="cankiriturizm"
                            />
                          </div>
                        </div>

                        <div className="form-row">
                          <div className="form-field">
                            <label>Bağlı Olunan Açık Adres</label>
                            <input
                              type="text"
                              name="companyAddress"
                              value={formData.companyAddress}
                              onChange={handleInputChange}
                              placeholder=""
                            />
                          </div>
                        </div>

                        <div className="form-row">
                          <div className="form-field">
                            <label>Kurumsal İletişim Numarası</label>
                            <input
                              type="text"
                              name="companyPhone"
                              value={formData.companyPhone}
                              onChange={handleInputChange}
                              placeholder=""
                            />
                          </div>
                        </div>

                        <div className="form-row">
                          <div className="form-field">
                            <label>Vergi Levhası Tuşlayınız</label>
                            <input
                              type="text"
                              name="taxNumber"
                              value={formData.taxNumber}
                              onChange={handleInputChange}
                              placeholder=""
                            />
                          </div>
                        </div>

                        <div className="form-row form-row-split">
                          <div className="form-field">
                            <label>Kuruluş Tarihi</label>
                            <input
                              type="text"
                              name="foundingDate"
                              value={formData.foundingDate}
                              onChange={handleInputChange}
                              placeholder="12.05.1992"
                            />
                          </div>
                          <div className="form-field">
                            <label>Faaliyet Gösterdiği Yer</label>
                            <input
                              type="text"
                              name="operationLocation"
                              value={formData.operationLocation}
                              onChange={handleInputChange}
                              placeholder="Çankırı, TUR"
                            />
                          </div>
                        </div>
                      </div>

                      {/* File Upload Section */}
                      <div className="file-upload-section">
                        <div className="form-field">
                          <label>Vergi Levhanızı Gösteren Belge Yükleyiniz</label>
                          <div className="file-upload-area">
                            <input
                              type="file"
                              id="taxDocument"
                              name="taxDocument"
                              onChange={handleFileUpload}
                              accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                              style={{ display: 'none' }}
                            />
                            <label htmlFor="taxDocument" className="upload-content">
                              {formData.taxDocument ? (
                                <div className="file-selected">
                                  <svg className="file-icon" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                    <path d="M2 0H8L12 4V11C12 11.5523 11.5523 12 11 12H2C1.44772 12 1 11.5523 1 11V1C1 0.447715 1.44772 0 2 0Z" fill="#34C759"/>
                                    <path d="M8 0V4H12" stroke="#ffffff" strokeWidth="1"/>
                                  </svg>
                                  <span className="file-name">{formData.taxDocument.name}</span>
                                </div>
                              ) : (
                                <div className="upload-placeholder">
                                  <svg className="upload-icon" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                    <path d="M7 9L7 0" stroke="#878787" strokeWidth="2"/>
                                    <path d="M4 3L7 0L10 3" stroke="#878787" strokeWidth="2" fill="none"/>
                                    <path d="M1 9L1 11C1 11.5523 1.44772 12 2 12L12 12C12.5523 12 13 11.5523 13 11L13 9" stroke="#878787" strokeWidth="2"/>
                                  </svg>
                                  <span className="upload-text">Dosya Seçin</span>
                                </div>
                              )}
                            </label>
                          </div>
                        </div>
                      </div>

                      {/* Button Group */}
                      <div className="button-group">
                        <button type="button" onClick={handlePrevious} className="btn-secondary">
                          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                            <path d="M4 1L1 4L4 7" stroke="currentColor" strokeWidth="2" fill="none"/>
                            <path d="M1 4L11 4" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                          Geri Dön
                        </button>
                        <button type="submit" className="btn-primary">
                          Formu Gönder
                          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                            <path d="M8 1L11 4L8 7" stroke="currentColor" strokeWidth="2" fill="none"/>
                            <path d="M1 4L11 4" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                        </button>
                      </div>
                    </>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FirmamiziOl; 