/**
 * Refrigerator Repair & Maintenance Services
 * TSCG Technologies Portfolio Demonstration
 * Pure Vanilla JavaScript (ES6+)
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileNav();
  initActiveNavLink();
  initBackToTop();
  initFaqAccordions();
  initProjectFiltering();
  initProjectModal();
  initFormsValidation();
});

/* ---------------------------------------------------------
   1. Sticky Header
--------------------------------------------------------- */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* ---------------------------------------------------------
   2. Mobile Navigation Drawer
--------------------------------------------------------- */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (!toggleBtn || !nav) return;

  const toggleNav = (open) => {
    const isOpen = open !== undefined ? open : !nav.classList.contains('is-open');
    nav.classList.toggle('is-open', isOpen);
    toggleBtn.classList.toggle('is-active', isOpen);
    toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  toggleBtn.addEventListener('click', () => toggleNav());

  // Close when clicking nav links
  nav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => toggleNav(false));
  });

  // Close on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      toggleNav(false);
      toggleBtn.focus();
    }
  });
}

/* ---------------------------------------------------------
   3. Active Navigation State
--------------------------------------------------------- */
function initActiveNavLink() {
  const navLinks = document.querySelectorAll('.nav-link');
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
    }
  });
}

/* ---------------------------------------------------------
   4. Back To Top
--------------------------------------------------------- */
function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      btn.classList.add('is-visible');
    } else {
      btn.classList.remove('is-visible');
    }
  }, { passive: true });

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ---------------------------------------------------------
   5. FAQ Accordions
--------------------------------------------------------- */
function initFaqAccordions() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (!questionBtn || !answer) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all others
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherBtn = otherItem.querySelector('.faq-question');
          const otherAnswer = otherItem.querySelector('.faq-answer');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          if (otherAnswer) otherAnswer.style.maxHeight = null;
        }
      });

      // Toggle current
      if (isActive) {
        item.classList.remove('active');
        questionBtn.setAttribute('aria-expanded', 'false');
        answer.style.maxHeight = null;
      } else {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}

/* ---------------------------------------------------------
   6. Project Gallery Filtering
--------------------------------------------------------- */
function initProjectFiltering() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card[data-category]');
  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetCategory = btn.getAttribute('data-filter');

      // Update button active state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter cards
      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category').split(' ');
        if (targetCategory === 'all' || categories.includes(targetCategory)) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          card.style.transform = 'translateY(12px)';
          setTimeout(() => {
            card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ---------------------------------------------------------
   7. Project Detail Modal & Lightbox
--------------------------------------------------------- */
const projectDetailsData = {
  'double-door': {
    title: 'Double Door Refrigerator Inspection',
    category: 'Refrigerator Repair',
    image: 'images/refrigerator-project-double-door.jpg',
    desc: 'An illustrative technical assessment of an air-flow blockage and frost build-up concern in a frost-free double door household refrigerator.',
    scope: [
      'Comprehensive evaporator compartment inspection',
      'Defrost timer and heater electrical continuity test',
      'Air damper passage obstruction assessment',
      'Door gasket magnetic seal verification'
    ]
  },
  'kitchen-setup': {
    title: 'Modern Kitchen Refrigerator Setup',
    category: 'Installation',
    image: 'images/refrigerator-project-kitchen.jpg',
    desc: 'Illustrative demonstration of a precision residential refrigerator placement with ventilation clearance checks and levelling calibration.',
    scope: [
      'Accurate perimeter clearance measurement for optimal airflow',
      'Floor levelling calibration using front leveling feet',
      'Door swing clearance and drawer glide inspection',
      'Initial baseline cooling temperature check'
    ]
  },
  'side-by-side': {
    title: 'Side-by-Side Refrigerator Assessment',
    category: 'Refrigerator Repair',
    image: 'images/refrigerator-project-side-by-side.jpg',
    desc: 'Demonstration diagnostic assessment of multi-zone cooling inconsistency and ice dispenser mechanism operational check.',
    scope: [
      'Dual zone digital thermistor sensor readings',
      'Condenser coil heat dissipation inspection',
      'Water supply line and dual inlet valve check',
      'Internal airflow circulation fan check'
    ]
  },
  'freezer-maintenance': {
    title: 'Freezer Maintenance Concept',
    category: 'Maintenance / Freezer Service',
    image: 'images/refrigerator-project-freezer.jpg',
    desc: 'Illustrative preventive maintenance workflow focusing on deep frost regulation, drainage line hygiene, and thermal efficiency.',
    scope: [
      'Defrost drain trough clearing and flushing demonstration',
      'Evaporator coil cleanliness assessment',
      'Low-temperature gasket elasticity inspection',
      'Thermostat cut-off cycle timing review'
    ]
  },
  'door-seal': {
    title: 'Refrigerator Door Seal Inspection',
    category: 'Maintenance',
    image: 'images/refrigerator-project-door-seal.jpg',
    desc: 'Illustrative examination of perimeter gasket compression, magnetic adhesion, and thermal leakage prevention in a residential unit.',
    scope: [
      'Paper slip resistance test around 360° perimeter',
      'Heat warping inspection on magnetic bellows',
      'Hinge pin alignment and door leveling adjustment',
      'Thermal perimeter surface temperature inspection'
    ]
  },
  'commercial-display': {
    title: 'Commercial Display Refrigerator',
    category: 'Commercial Refrigeration',
    image: 'images/refrigerator-project-commercial.jpg',
    desc: 'Illustrative inspection routine for commercial glass-door beverage and display chillers in retail and cafe environments.',
    scope: [
      'Forced-air evaporator fan airflow efficiency review',
      'High-traffic door hinge tension and closer verification',
      'Heavy-duty bottom condenser coil dust clearing check',
      'Digital LED temperature controller calibration check'
    ]
  },
  'cleaning-maintenance': {
    title: 'Refrigerator Cleaning and Maintenance',
    category: 'Maintenance',
    image: 'images/refrigerator-project-maintenance.jpg',
    desc: 'Illustrative comprehensive maintenance procedure including exterior condenser dusting, drip pan sanitation, and airflow optimization.',
    scope: [
      'Rear and underside condenser coil vacuuming check',
      'Evaporative condensate drain pan inspection',
      'Internal air intake vent clearing and sanitation',
      'Overall mechanical sound and vibration baseline check'
    ]
  },
  'residential-installation': {
    title: 'Residential Refrigerator Installation',
    category: 'Installation',
    image: 'images/refrigerator-project-installation.jpg',
    desc: 'Illustrative end-to-end installation demonstration for built-in and free-standing residential cooling units.',
    scope: [
      'Pre-installation entryway and cabinetry clearance verification',
      'Anti-tip bracket and safety anchoring check',
      'Compressor transit lock removal and settlement period check',
      'Customer operational usage and control panel walkthrough'
    ]
  }
};

function initProjectModal() {
  const modal = document.getElementById('projectModal');
  if (!modal) return;

  const modalImg = modal.querySelector('.modal-media img');
  const modalCategory = modal.querySelector('.modal-badge');
  const modalTitle = modal.querySelector('.modal-title');
  const modalDesc = modal.querySelector('.modal-desc');
  const modalScopeList = modal.querySelector('.modal-scope-list');
  const closeBtn = modal.querySelector('.modal-close-btn');

  let lastActiveElement = null;

  const openModal = (id) => {
    const data = projectDetailsData[id];
    if (!data) return;

    lastActiveElement = document.activeElement;

    if (modalImg) {
      modalImg.src = data.image;
      modalImg.alt = data.title;
    }
    if (modalCategory) modalCategory.textContent = data.category;
    if (modalTitle) modalTitle.textContent = data.title;
    if (modalDesc) modalDesc.textContent = data.desc;

    if (modalScopeList) {
      modalScopeList.innerHTML = '';
      data.scope.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>${item}</span>
        `;
        modalScopeList.appendChild(li);
      });
    }

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (closeBtn) closeBtn.focus();
  };

  const closeModal = () => {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastActiveElement) lastActiveElement.focus();
  };

  // Attach click to "View Project" buttons or cards
  document.querySelectorAll('[data-project-id]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const id = trigger.getAttribute('data-project-id');
      openModal(id);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });
}

/* ---------------------------------------------------------
   8. Form Validation & Demo Submission
--------------------------------------------------------- */
function initFormsValidation() {
  // Contact Form
  const contactForm = document.getElementById('repairContactForm');
  if (contactForm) {
    setupFormValidation(contactForm);
  }

  // Problems Page Quick Enquiry Form
  const problemForm = document.getElementById('problemEnquiryForm');
  if (problemForm) {
    setupFormValidation(problemForm);
  }

  // File Dropzone Dummy Preview
  const fileInputs = document.querySelectorAll('.file-input-hidden');
  fileInputs.forEach(input => {
    const parent = input.closest('.file-dropzone');
    const preview = parent ? parent.querySelector('.file-preview') : null;

    if (parent && preview) {
      parent.addEventListener('click', () => input.click());

      input.addEventListener('change', () => {
        if (input.files && input.files.length > 0) {
          const file = input.files[0];
          preview.textContent = `Selected photo for demo: ${file.name} (${Math.round(file.size / 1024)} KB) — Not uploaded`;
          preview.style.display = 'block';
        } else {
          preview.style.display = 'none';
        }
      });
    }
  });
}

function setupFormValidation(form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Validate Name
    const nameInput = form.querySelector('[name="fullName"], [name="name"]');
    if (nameInput) {
      if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
        showError(nameInput, 'Please enter your full name (minimum 2 characters).');
        isValid = false;
      } else {
        clearError(nameInput);
      }
    }

    // Validate Phone
    const phoneInput = form.querySelector('[name="phone"]');
    if (phoneInput) {
      const phoneVal = phoneInput.value.trim();
      const phoneDigits = phoneVal.replace(/\D/g, '');
      if (!phoneVal || phoneDigits.length < 7) {
        showError(phoneInput, 'Please enter a valid contact phone number.');
        isValid = false;
      } else {
        clearError(phoneInput);
      }
    }

    // Validate Email if present & required
    const emailInput = form.querySelector('[name="email"]');
    if (emailInput && (emailInput.hasAttribute('required') || emailInput.value.trim().length > 0)) {
      const emailVal = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailVal)) {
        showError(emailInput, 'Please provide a valid email address.');
        isValid = false;
      } else {
        clearError(emailInput);
      }
    }

    // Validate Refrigerator Type select
    const fridgeType = form.querySelector('[name="refrigeratorType"]');
    if (fridgeType && fridgeType.hasAttribute('required')) {
      if (!fridgeType.value || fridgeType.value === '') {
        showError(fridgeType, 'Please select your refrigerator type.');
        isValid = false;
      } else {
        clearError(fridgeType);
      }
    }

    // Validate Problem Description / Category
    const descInput = form.querySelector('[name="problemDescription"], [name="description"]');
    if (descInput && descInput.hasAttribute('required')) {
      if (!descInput.value.trim() || descInput.value.trim().length < 8) {
        showError(descInput, 'Please provide a short description of the problem (at least 8 characters).');
        isValid = false;
      } else {
        clearError(descInput);
      }
    }

    if (!isValid) {
      const firstInvalid = form.querySelector('.is-invalid');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // Simulate submission state (frontend only)
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn ? submitBtn.innerHTML : 'Submit';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
          <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
        </svg>
        <span>Processing Enquiry...</span>
      `;
    }

    setTimeout(() => {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }

      const alertBox = form.querySelector('.form-alert-success') || document.querySelector('.form-alert-success');
      if (alertBox) {
        alertBox.classList.add('show');
        alertBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      form.reset();
      const preview = form.querySelector('.file-preview');
      if (preview) preview.style.display = 'none';

      // Hide alert after 8 seconds
      setTimeout(() => {
        if (alertBox) alertBox.classList.remove('show');
      }, 8000);
    }, 1200);
  });
}

function showError(input, message) {
  input.classList.add('is-invalid');
  let errorEl = input.nextElementSibling;
  if (!errorEl || !errorEl.classList.contains('form-error')) {
    errorEl = document.createElement('div');
    errorEl.className = 'form-error';
    input.parentNode.appendChild(errorEl);
  }
  errorEl.textContent = message;
}

function clearError(input) {
  input.classList.remove('is-invalid');
  const errorEl = input.nextElementSibling;
  if (errorEl && errorEl.classList.contains('form-error')) {
    errorEl.textContent = '';
  }
}
