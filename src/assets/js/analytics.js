// ===============================================
// Google Analytics Integration for Sczi7.com
// Tracking & Event Management
// ===============================================

class AnalyticsManager {
    constructor(measurementId) {
        this.measurementId = measurementId;
        this.isEnabled = false;
        this.init();
    }

    init() {
        // Check if user has accepted cookies/analytics
        const analyticsConsent = localStorage.getItem('analytics-consent');

        if (analyticsConsent === 'accepted') {
            this.enableAnalytics();
        } else if (analyticsConsent === null) {
            this.showConsentBanner();
        }
    }

    // ===============================================
    // ENABLE GOOGLE ANALYTICS
    // ===============================================
    enableAnalytics() {
        if (this.isEnabled || !this.measurementId || this.measurementId === 'G-XXXXXXXXXX') {
            console.log('%c📊 Analytics: Disabled (no measurement ID)', 'color: #f59e0b');
            return;
        }

        // Load Google Analytics
        const script1 = document.createElement('script');
        script1.async = true;
        script1.src = `https://www.googletagmanager.com/gtag/js?id=${this.measurementId}`;
        document.head.appendChild(script1);

        // Initialize gtag
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        window.gtag = gtag;

        gtag('js', new Date());
        gtag('config', this.measurementId, {
            'anonymize_ip': true,
            'cookie_flags': 'SameSite=None;Secure'
        });

        this.isEnabled = true;
        this.setupEventTracking();

        console.log('%c📊 Google Analytics enabled!', 'color: #10b981; font-size: 14px; font-weight: bold;');
    }

    // ===============================================
    // CONSENT BANNER
    // ===============================================
    showConsentBanner() {
        const banner = document.createElement('div');
        banner.className = 'analytics-consent-banner';
        banner.innerHTML = `
            <div class="consent-content">
                <div class="consent-text">
                    <h3>🍪 Cookie Notice</h3>
                    <p>We use cookies and analytics to improve your experience. By clicking "Accept", you consent to our use of cookies and analytics.</p>
                </div>
                <div class="consent-buttons">
                    <button id="acceptAnalytics" class="btn-accept">Accept</button>
                    <button id="declineAnalytics" class="btn-decline">Decline</button>
                </div>
            </div>
        `;

        // Add styles
        const style = document.createElement('style');
        style.textContent = `
            .analytics-consent-banner {
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                background: rgba(15, 23, 42, 0.98);
                backdrop-filter: blur(10px);
                padding: 20px;
                box-shadow: 0 -5px 30px rgba(0, 0, 0, 0.3);
                z-index: 10000;
                animation: slideUp 0.5s ease;
            }

            @keyframes slideUp {
                from {
                    transform: translateY(100%);
                }
                to {
                    transform: translateY(0);
                }
            }

            .consent-content {
                max-width: 1200px;
                margin: 0 auto;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 30px;
            }

            .consent-text h3 {
                color: #f1f5f9;
                margin-bottom: 8px;
                font-size: 18px;
            }

            .consent-text p {
                color: #cbd5e1;
                font-size: 14px;
                margin: 0;
            }

            .consent-buttons {
                display: flex;
                gap: 15px;
                flex-shrink: 0;
            }

            .consent-buttons button {
                padding: 12px 30px;
                border: none;
                border-radius: 8px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s;
                font-size: 14px;
            }

            .btn-accept {
                background: linear-gradient(135deg, #10b981, #059669);
                color: white;
                box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);
            }

            .btn-accept:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 20px rgba(16, 185, 129, 0.6);
            }

            .btn-decline {
                background: transparent;
                color: #cbd5e1;
                border: 2px solid #475569;
            }

            .btn-decline:hover {
                background: #475569;
                color: white;
            }

            @media (max-width: 768px) {
                .consent-content {
                    flex-direction: column;
                    align-items: stretch;
                }

                .consent-buttons {
                    width: 100%;
                }

                .consent-buttons button {
                    flex: 1;
                }
            }
        `;
        document.head.appendChild(style);

        document.body.appendChild(banner);

        // Event listeners
        document.getElementById('acceptAnalytics').addEventListener('click', () => {
            localStorage.setItem('analytics-consent', 'accepted');
            banner.remove();
            this.enableAnalytics();
            this.trackEvent('consent', 'analytics_accepted');
        });

        document.getElementById('declineAnalytics').addEventListener('click', () => {
            localStorage.setItem('analytics-consent', 'declined');
            banner.remove();
            console.log('%c📊 Analytics declined by user', 'color: #f59e0b');
        });
    }

    // ===============================================
    // EVENT TRACKING
    // ===============================================
    setupEventTracking() {
        // Track downloads
        document.querySelectorAll('a[download], a[href$=".pdf"]').forEach(link => {
            link.addEventListener('click', () => {
                const fileName = link.getAttribute('download') || link.getAttribute('href');
                this.trackEvent('download', 'cv_download', fileName);
            });
        });

        // Track social links
        document.querySelectorAll('.social-icon, .footer-social a').forEach(link => {
            link.addEventListener('click', () => {
                const href = link.getAttribute('href');
                let platform = 'unknown';

                if (href.includes('linkedin')) platform = 'linkedin';
                else if (href.includes('github')) platform = 'github';
                else if (href.includes('twitter')) platform = 'twitter';
                else if (href.includes('mailto')) platform = 'email';

                this.trackEvent('social_click', platform, href);
            });
        });

        // Track contact form submission
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', () => {
                this.trackEvent('form_submission', 'contact_form', 'submitted');
            });
        }

        // Track language switch
        const langToggle = document.getElementById('langToggle');
        if (langToggle) {
            langToggle.addEventListener('click', () => {
                setTimeout(() => {
                    const currentLang = document.documentElement.getAttribute('lang');
                    this.trackEvent('language_change', 'switch_language', currentLang);
                }, 100);
            });
        }

        // Track section views (scroll tracking)
        this.setupScrollTracking();

        // Track outbound links
        document.querySelectorAll('a[href^="http"]').forEach(link => {
            if (!link.href.includes(window.location.hostname)) {
                link.addEventListener('click', () => {
                    this.trackEvent('outbound_link', 'click', link.href);
                });
            }
        });

        // Track button clicks
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const btnText = btn.textContent.trim();
                this.trackEvent('button_click', 'cta', btnText);
            });
        });

        // Track errors
        window.addEventListener('error', (e) => {
            this.trackEvent('error', 'javascript_error', e.message);
        });
    }

    // ===============================================
    // SCROLL TRACKING
    // ===============================================
    setupScrollTracking() {
        const sections = document.querySelectorAll('.section, .hero');
        const viewedSections = new Set();

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !viewedSections.has(entry.target.id)) {
                    const sectionId = entry.target.id || 'hero';
                    viewedSections.add(sectionId);
                    this.trackEvent('section_view', 'scroll', sectionId);
                }
            });
        }, {
            threshold: 0.5
        });

        sections.forEach(section => observer.observe(section));

        // Track scroll depth
        let maxScroll = 0;
        let scrollTracked = false;

        window.addEventListener('scroll', () => {
            const scrollPercent = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);

            if (scrollPercent > maxScroll) {
                maxScroll = scrollPercent;

                // Track at 25%, 50%, 75%, 100%
                if (!scrollTracked) {
                    if (maxScroll >= 25 && maxScroll < 50) {
                        this.trackEvent('scroll_depth', '25_percent', '25%');
                        scrollTracked = true;
                    } else if (maxScroll >= 50 && maxScroll < 75) {
                        this.trackEvent('scroll_depth', '50_percent', '50%');
                        scrollTracked = true;
                    } else if (maxScroll >= 75 && maxScroll < 100) {
                        this.trackEvent('scroll_depth', '75_percent', '75%');
                        scrollTracked = true;
                    } else if (maxScroll >= 100) {
                        this.trackEvent('scroll_depth', '100_percent', '100%');
                        scrollTracked = true;
                    }

                    // Reset for next milestone
                    if (scrollTracked) {
                        setTimeout(() => { scrollTracked = false; }, 1000);
                    }
                }
            }
        });
    }

    // ===============================================
    // TRACK EVENT
    // ===============================================
    trackEvent(eventName, eventCategory, eventLabel) {
        if (!this.isEnabled || typeof gtag === 'undefined') {
            console.log(`📊 Event (not tracked): ${eventName} - ${eventCategory} - ${eventLabel}`);
            return;
        }

        gtag('event', eventName, {
            'event_category': eventCategory,
            'event_label': eventLabel
        });

        console.log(`📊 Event tracked: ${eventName} - ${eventCategory} - ${eventLabel}`);
    }

    // ===============================================
    // TRACK PAGE VIEW
    // ===============================================
    trackPageView(pagePath) {
        if (!this.isEnabled || typeof gtag === 'undefined') return;

        gtag('config', this.measurementId, {
            'page_path': pagePath
        });
    }
}

// ===============================================
// INITIALIZE
// ===============================================
// Replace 'G-XXXXXXXXXX' with your actual Google Analytics Measurement ID
const MEASUREMENT_ID = 'G-XXXXXXXXXX'; // 👈 Update this!

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.analyticsManager = new AnalyticsManager(MEASUREMENT_ID);
    });
} else {
    window.analyticsManager = new AnalyticsManager(MEASUREMENT_ID);
}
