// dropdwon toggle
const overlayEl = document.querySelector('.nav-overlay');
const dropdownEl = document.querySelectorAll('nav .dropdown');

dropdownEl.forEach((dropdown) => {
  const anchor = dropdown.querySelector('a');
  anchor.addEventListener('click', (e) => {
    e.preventDefault();

    dropdown.classList.toggle('active');
    overlayEl.classList.add('active');

    const isDropdownActive = e.target.parentElement.classList.contains('active');
    !isDropdownActive && overlayEl.classList.remove('active');

    isDropdownActive && (
      e.target.style.opacity = ""
    )

    dropdownEl.forEach((siblingDropdown) => {
      const siblingAnchor = siblingDropdown.querySelector('a');
      siblingDropdown !== dropdown && (
        siblingDropdown.classList.remove('active'),

        isDropdownActive && (
          siblingAnchor.style.opacity = 0.5
        )
      )
    });
  });
});

// close dropdown
const closeDropdown = () => {
  overlayEl.classList.remove('active');

  dropdownEl.forEach((dropdown) => {
    dropdown.classList.remove('active');
    dropdown.querySelector('a').style.opacity = "";
  });
}

overlayEl.addEventListener('click', () => {
  closeDropdown();
});


// Mobile Menu Toggle
const menuToggleEl = document.querySelector('[data-target="mobile-menu"]');
const mobileMenuEl = document.querySelector('header nav');
const mobileMenuOverlayEl = document.querySelector('.mobile-menu-overlay');

// open mobile nav-menu
menuToggleEl.addEventListener('click', () => {
  mobileMenuEl.classList.toggle('active');
  mobileMenuOverlayEl.classList.toggle('active');
});

// close mobile nav-menu
mobileMenuOverlayEl.addEventListener('click', () => {
  mobileMenuEl.classList.remove('active');
  mobileMenuOverlayEl.classList.remove('active');
});


// Search Toggle
const openSearch = (el, input) => {
  closeDropdown();
  el.classList.add('active');
  setTimeout(() => {
    input.focus();
  }, 50);
}
// search desktop
const searchEl = document.querySelectorAll('.search-wrapper');
const searchElDesktop = document.querySelector('.search-wrapper-desktop');
const searchOpenElDesktop = document.querySelector('[data-target="search-open-desktop"]');
const searchInputElDesktop = searchElDesktop.querySelector('input');

// search open desktop
searchOpenElDesktop.addEventListener('click', () => {
  openSearch(searchElDesktop, searchInputElDesktop);
});

// search mobile
const searchElMobile = document.querySelector('.search-wrapper-mobile');
const searchOpenElMobile = document.querySelector('[data-target="search-open-mobile"]');
const searchInputElMobile = searchElMobile.querySelector('input');

// toggle header visibility
const toggleHeaderVisibility = (isSearchVisible) => {
  const headerBlockEl = document.querySelector('.header-block');
  isSearchVisible
    ? headerBlockEl.classList.add('invisible')
    : headerBlockEl.classList.remove('invisible');
}

// search open mobile
searchOpenElMobile.addEventListener('click', () => {
  openSearch(searchElMobile, searchInputElMobile);
  toggleHeaderVisibility(true);
});

// search close
const searchCloseEl = document.querySelectorAll('[data-target="search-close"]');
searchCloseEl.forEach((el) => {
  el.addEventListener('click', () => {
    searchEl.forEach((el) => { el.classList.remove('active'); });
    toggleHeaderVisibility(false);
  });
});