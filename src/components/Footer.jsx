
import { Wallet } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo">
            <Wallet size={18} strokeWidth={2} />
          </div>

          <div className="footer-brand-text">
            <span className="footer-title">Finance Dashboard</span>
            <span className="footer-tagline">
              A clearer view of your money.
            </span>
          </div>
        </div>

        <p className="footer-copyright">
          © {currentYear} Finance Dashboard. All rights reserved.
        </p>
      </div>

      <div className="footer-bottom">
        <span>Built with React & Vite</span>
        <span className="footer-status">
          <span className="status-dot" />
          Personal finance, made simpler.
        </span>
      </div>
    </footer>
  )
}

export default Footer
