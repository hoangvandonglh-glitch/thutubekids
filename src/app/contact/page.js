'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="info-page">
      {/* Background blobs */}
      <div className="bg-blob bg-blob-1" aria-hidden="true" />
      <div className="bg-blob bg-blob-2" aria-hidden="true" />

      {/* Header */}
      <header className="header">
        <div className="header-inner">
          <Link href="/" className="logo-area">
            <img src="/icon.png" alt="thetubekids.com Logo" className="logo-img" />
            <div className="logo-text">
              <span className="logo-title">🌈 thetubekids.com</span>
              <span className="logo-subtitle">Safe Videos for Kids</span>
            </div>
          </Link>
          <div className="header-actions">
            <Link href="/" className="back-home-btn">
              🏠 Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="info-container">
        <div className="info-card">
          <div className="info-hero">
            <span className="info-hero-badge" style={{ background: '#EDE9FE', color: '#5B21B6' }}>
              📬 We’d Love to Hear From You
            </span>
            <h1 className="info-title">Contact thetubekids.com</h1>
            <p className="info-subtitle">
              Whether you are a parent with feedback, a creator wanting to suggest wholesome content, or have a question about child safety, our team is always here to assist.
            </p>
          </div>

          <div className="contact-grid">
            {/* Contact details */}
            <div className="contact-info-col">
              <h2 className="info-section-heading">Get in Touch</h2>
              <div className="contact-item">
                <span className="contact-item-icon">📧</span>
                <div>
                  <div className="contact-item-label">Direct Email</div>
                  <div className="contact-item-val">support@thetubekids.com</div>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-item-icon">🛡️</span>
                <div>
                  <div className="contact-item-label">Content Review &amp; Safety</div>
                  <div className="contact-item-val">safety@thetubekids.com</div>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-item-icon">⏰</span>
                <div>
                  <div className="contact-item-label">Response Time</div>
                  <div className="contact-item-val">Within 24 business hours</div>
                </div>
              </div>

              <div className="faq-mini-box">
                <h3>💡 Frequently Asked Questions</h3>
                <p><strong>Are you open to creator suggestions?</strong><br />Yes! We review safe educational channels weekly.</p>
                <p style={{ marginTop: '10px' }}><strong>How do I report an issue?</strong><br />Select "Report a Video" in the message subject.</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-col">
              {submitted ? (
                <div className="form-success-box">
                  <div className="success-icon">🎉</div>
                  <h3>Thank You for Reaching Out!</h3>
                  <p>Your message has been received by the thetubekids.com team. We will get back to you shortly at {formData.email}.</p>
                  <button onClick={() => setSubmitted(false)} className="form-reset-btn">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      className="form-input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="parent@example.com"
                      className="form-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">Reason for Contact</label>
                    <select
                      id="subject"
                      className="form-select"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Suggest a Video">Suggest a Video or Channel</option>
                      <option value="Report a Video">Report an Inappropriate Video</option>
                      <option value="Partnership">Partnership / Creator Inquiry</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      placeholder="Tell us what's on your mind..."
                      className="form-textarea"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="form-submit-btn">
                    Send Message 🚀
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer" style={{ marginTop: '48px' }}>
        <div className="footer-inner">
          <div className="footer-bottom">
            <span className="footer-copy">
              © 2024 thetubekids.com. All rights reserved.
            </span>
            <div className="footer-safe-label">
              <span>🛡️</span>
              <span>100% Safe &amp; Curated Content</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
