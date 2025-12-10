// ===============================================
// Accessibility Enhancements for Sczi7.com
// WCAG 2.1 AA Compliance
// ===============================================

class AccessibilityManager {
    constructor() {
        this.init();
    }

    init() {
        this.addSkipLinks();
        this.enhanceKeyboardNavigation();
        this.addARIALabels();
        this.addFocusIndicators();
        this.enhanceFormAccessibility();
        this.addAnnouncements();
        this.addReducedMotionSupport();
        console.log('%c♿ Accessibility features enabled!', 'color: #10b981; font-size: 14px; font-weight: bold;');
    }

    // ===============================================
    // SKIP LINKS
    // ===============================================
    addSkipLinks() {
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.className = 'skip-link';
        skipLink.textContent = 'Skip to main content';
        skipLink.setAttribute('aria-label', 'Skip to main content');

        // Add styles
        const style = document.createElement('style');
        style.textContent = `
            .skip-link {
                position: absolute;
                top: -40px;
                left: 0;
                background: #6366f1;
                color: white;
                padding: 12px 20px;
                text-decoration: none;
                z-index: 10000;
                border-radius: 0 0 8px 0;
                font-weight: 600;
                transition: top 0.3s;
            }
            .skip-link:focus {
                top: 0;
                outline: 3px solid #f59e0b;
                outline-offset: 2px;
            }
        `;
        document.head.appendChild(style);
        document.body.insertBefore(skipLink, document.body.firstChild);

        // Add ID to main content
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.setAttribute('id', 'main-content');
            hero.setAttribute('tabindex', '-1');
        }
    }

    // ===============================================
    // KEYBOARD NAVIGATION
    // ===============================================
    enhanceKeyboardNavigation() {
        // Add keyboard support for all interactive elements
        const interactiveElements = document.querySelectorAll(
            'button, a, .btn, .social-icon, .nav-link, .skill-tag, .cert-item'
        );

        interactiveElements.forEach(el => {
            // Ensure tabindex is set
            if (!el.hasAttribute('tabindex')) {
                el.setAttribute('tabindex', '0');
            }

            // Add keyboard event listeners
            el.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    el.click();
                }
            });
        });

        // Trap focus in mobile menu when open
        const navMenu = document.querySelector('.nav-menu');
        const hamburger = document.querySelector('.hamburger');

        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                const isOpen = navMenu.classList.contains('active');
                hamburger.setAttribute('aria-expanded', isOpen);
                navMenu.setAttribute('aria-hidden', !isOpen);

                if (isOpen) {
                    // Focus first menu item
                    const firstLink = navMenu.querySelector('.nav-link');
                    if (firstLink) {
                        setTimeout(() => firstLink.focus(), 100);
                    }
                }
            });
        }

        // Add Escape key to close mobile menu
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                if (hamburger) {
                    hamburger.classList.remove('active');
                    hamburger.focus();
                }
            }
        });
    }

    // ===============================================
    // ARIA LABELS
    // ===============================================
    addARIALabels() {
        // Navigation
        const nav = document.querySelector('nav');
        if (nav) {
            nav.setAttribute('role', 'navigation');
            nav.setAttribute('aria-label', 'Main navigation');
        }

        // Sections
        const sections = [
            { selector: '.hero', label: 'Hero section' },
            { selector: '#about', label: 'About section' },
            { selector: '#experience', label: 'Professional experience' },
            { selector: '#skills', label: 'Skills and certifications' },
            { selector: '#education', label: 'Education' },
            { selector: '#contact', label: 'Contact information' }
        ];

        sections.forEach(({ selector, label }) => {
            const section = document.querySelector(selector);
            if (section) {
                section.setAttribute('role', 'region');
                section.setAttribute('aria-label', label);
            }
        });

        // Buttons
        const hamburger = document.querySelector('.hamburger');
        if (hamburger) {
            hamburger.setAttribute('role', 'button');
            hamburger.setAttribute('aria-label', 'Toggle navigation menu');
            hamburger.setAttribute('aria-expanded', 'false');
        }

        const scrollTop = document.getElementById('scrollTop');
        if (scrollTop) {
            scrollTop.setAttribute('aria-label', 'Scroll to top');
        }

        const langToggle = document.getElementById('langToggle');
        if (langToggle) {
            langToggle.setAttribute('aria-label', 'Toggle language');
        }

        // Social links
        const socialLinks = document.querySelectorAll('.social-icon, .footer-social a');
        socialLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href) {
                let label = 'Social link';
                if (href.includes('linkedin')) label = 'LinkedIn profile';
                else if (href.includes('github')) label = 'GitHub profile';
                else if (href.includes('mailto')) label = 'Send email';
                else if (href.includes('twitter')) label = 'Twitter profile';

                link.setAttribute('aria-label', label);
            }
        });

        // Timeline
        const timeline = document.querySelector('.timeline');
        if (timeline) {
            timeline.setAttribute('role', 'list');
            timeline.setAttribute('aria-label', 'Professional experience timeline');

            const timelineItems = timeline.querySelectorAll('.timeline-item');
            timelineItems.forEach((item, index) => {
                item.setAttribute('role', 'listitem');
                item.setAttribute('aria-label', `Experience ${index + 1}`);
            });
        }

        // Skills
        const skillTags = document.querySelectorAll('.skill-tag');
        skillTags.forEach(tag => {
            tag.setAttribute('role', 'listitem');
        });
    }

    // ===============================================
    // FOCUS INDICATORS
    // ===============================================
    addFocusIndicators() {
        const style = document.createElement('style');
        style.textContent = `
            /* Enhanced focus indicators */
            *:focus {
                outline: 3px solid #f59e0b !important;
                outline-offset: 2px !important;
            }

            /* Better focus for keyboard users */
            body.keyboard-nav *:focus {
                outline: 3px solid #f59e0b !important;
                outline-offset: 2px !important;
            }

            /* Hide focus for mouse users */
            body:not(.keyboard-nav) *:focus {
                outline: none;
            }

            /* Ensure visible focus on buttons */
            .btn:focus,
            button:focus,
            a:focus {
                outline: 3px solid #f59e0b !important;
                outline-offset: 3px !important;
            }

            /* Focus for form inputs */
            input:focus,
            textarea:focus,
            select:focus {
                outline: 3px solid #6366f1 !important;
                outline-offset: 2px !important;
                border-color: #6366f1 !important;
            }
        `;
        document.head.appendChild(style);

        // Track keyboard vs mouse usage
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-nav');
            }
        });

        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-nav');
        });
    }

    // ===============================================
    // FORM ACCESSIBILITY
    // ===============================================
    enhanceFormAccessibility() {
        const form = document.getElementById('contactForm');
        if (!form) return;

        // Add labels and aria-describedby
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach((input, index) => {
            const type = input.getAttribute('type') || input.tagName.toLowerCase();
            const placeholder = input.getAttribute('placeholder');

            // Create label if doesn't exist
            if (!input.previousElementSibling || input.previousElementSibling.tagName !== 'LABEL') {
                const label = document.createElement('label');
                label.setAttribute('for', `input-${index}`);
                label.textContent = placeholder || 'Input field';
                label.style.cssText = 'position: absolute; left: -10000px; width: 1px; height: 1px; overflow: hidden;';
                input.setAttribute('id', `input-${index}`);
                input.parentNode.insertBefore(label, input);
            }

            // Add required indicator
            if (input.hasAttribute('required')) {
                input.setAttribute('aria-required', 'true');
            }

            // Add error messages container
            const errorId = `error-${index}`;
            let errorDiv = document.getElementById(errorId);
            if (!errorDiv) {
                errorDiv = document.createElement('div');
                errorDiv.id = errorId;
                errorDiv.className = 'error-message';
                errorDiv.setAttribute('role', 'alert');
                errorDiv.setAttribute('aria-live', 'polite');
                errorDiv.style.cssText = 'color: #ef4444; font-size: 14px; margin-top: 5px; display: none;';
                input.parentNode.appendChild(errorDiv);
                input.setAttribute('aria-describedby', errorId);
            }
        });

        // Enhance submit button
        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.setAttribute('aria-label', 'Submit contact form');
        }
    }

    // ===============================================
    // LIVE ANNOUNCEMENTS
    // ===============================================
    addAnnouncements() {
        // Create announcement region
        const announcer = document.createElement('div');
        announcer.setAttribute('role', 'status');
        announcer.setAttribute('aria-live', 'polite');
        announcer.setAttribute('aria-atomic', 'true');
        announcer.className = 'sr-only';
        announcer.style.cssText = 'position: absolute; left: -10000px; width: 1px; height: 1px; overflow: hidden;';
        document.body.appendChild(announcer);

        // Announce page changes
        window.announce = (message) => {
            announcer.textContent = message;
            setTimeout(() => {
                announcer.textContent = '';
            }, 1000);
        };

        // Announce language changes
        const langToggle = document.getElementById('langToggle');
        if (langToggle) {
            langToggle.addEventListener('click', () => {
                setTimeout(() => {
                    const currentLang = document.documentElement.getAttribute('lang');
                    const message = currentLang === 'ar' ? 'تم التبديل إلى العربية' : 'Switched to English';
                    window.announce(message);
                }, 100);
            });
        }
    }

    // ===============================================
    // REDUCED MOTION SUPPORT
    // ===============================================
    addReducedMotionSupport() {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

        const disableAnimations = () => {
            const style = document.createElement('style');
            style.textContent = `
                *,
                *::before,
                *::after {
                    animation-duration: 0.01ms !important;
                    animation-iteration-count: 1 !important;
                    transition-duration: 0.01ms !important;
                    scroll-behavior: auto !important;
                }
            `;
            document.head.appendChild(style);
        };

        if (prefersReducedMotion.matches) {
            disableAnimations();
        }

        prefersReducedMotion.addEventListener('change', () => {
            if (prefersReducedMotion.matches) {
                disableAnimations();
            }
        });
    }
}

// ===============================================
// INITIALIZE
// ===============================================
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.accessibilityManager = new AccessibilityManager();
    });
} else {
    window.accessibilityManager = new AccessibilityManager();
}
