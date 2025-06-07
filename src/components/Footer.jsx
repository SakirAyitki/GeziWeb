import googlePlayIcon from '../assets/google-play-icon.svg'
import googlePlayText from '../assets/google-play-text.svg'
import appleIcon from '../assets/apple-icon.svg'
import appleText from '../assets/apple-text.svg'
import facebookIcon from '../assets/facebook-icon.svg'
import instagramIcon from '../assets/instagram-icon.svg'
import twitterIcon from '../assets/twitter-icon.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-divider"></div>
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
  )
}

export default Footer 