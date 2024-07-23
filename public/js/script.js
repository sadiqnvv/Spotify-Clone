/**
 * @license Apache-2.0
 * @copyright Sadikh Novruzov
 */

"use strict";

/**
 * custom modules
 */

import { addEventOnElement } from "./utils.js";

/**
 * Search clear functionality
 */

const /** {HTMLElement} */ $searchField = document.querySelector(
  "[data-search-field]"
);

const /** {HTMLElement} */ $searchClear = document.querySelector(
  "[data-search-clear]"
);

$searchClear?.addEventListener("click", function () {
  $searchField.value = "";
});

/**
 * Logo animation in mobile
 */

const $logo = document.querySelector("[data-logo]");

if (!sessionStorage.getItem("logoAnimated")) {
  $logo.classList.add("animate");
  sessionStorage.setItem("logoAnimated", true);
}

/**
 * Menu toggler
 */

const /** {HTMLElement} */ $menuWrapper = document.querySelector(
  "[data-menu-wrapper]"
);
const /** {HTMLElement} */ $menuToggler = document.querySelector(
  "[data-menu-toggler]"
);

$menuToggler?.addEventListener("click", function () {
  $menuWrapper.classList.toggle("active");
});


/**
 * Hide top bar on scroll down
 */

const /** {HTMLElement} */ $page = document.querySelector("[data-page]");
let /** {number} */ lastScrollPos = 0;

$page?.addEventListener("scroll", function () {
  if (lastScrollPos < this.scrollTop) {
    this.classList.add("header-hide");
  } else {
    this.classList.remove("header-hide");
  }
  lastScrollPos = this.scrollTop;
});


/**
 * Ripple effect
 */

const ripple = function ($rippleElem) {
  $rippleElem.addEventListener("pointerdown", function (e) {
    e.stopImmediatePropagation();

    const /** {HTMLElement} */ $ripple = document.createElement("div");
    $ripple.classList.add("ripple");

    this.appendChild($ripple);

    const removeRipple = () => {
      $ripple.animate(
        {
          opacity: 0,
        },
        {
          fil: "forwards",
          duration: 200,
        }
      );
      setTimeout(() => {
        $ripple.remove();
      }, 1000);
    };

    this.addEventListener("pointerup", removeRipple);
    this.addEventListener("pointerleave", removeRipple);

    const /** {number} */ rippleSize = Math.max(
      this.clientWidth,
      this.clientHeight
    );

    $ripple.style.top = `${e.layerY}px`;
    $ripple.style.left = `${e.layerX}px`;
    $ripple.style.width = `${rippleSize}px`;
    $ripple.style.height = `${rippleSize}px`;
  });
};

const /** {HTMLElement} */ $rippleElems =
  document.querySelectorAll("[data-ripple]");
$rippleElems?.forEach((el) => ripple(el));

/**
 * Image animation on loading
 */

window.addEventListener("DOMContentLoaded", function () {
  const /** {Array <HTMLElement>} */ $animatedImages =
    document.querySelectorAll("[data-image-load-anim]");

  const addAnimation = function () {
    this.animate(
      {
        opacity: 1,
      },
      { duration: 200, fill: "forwards" }
    );
  };

  $animatedImages.forEach(($image) => {
    $image.style.opacity = 0;
    if ($image.complete) {
      addAnimation.call($image);
    } else {
      $image.addEventListener("load", addAnimation);
    }
  });
});

/**
 * Bottom nav item active
 */

const /** {Array <HTMLElement>} */ $bottomNavItems = document.querySelectorAll(
  "[data-bottom-nav-item]"
);
const /** {HTMLElement} */ $activeBottomNavItem = document.querySelector(
  "[data-active-bottom-nav-item].active"
);

const activeNavItem = () => {
  $activeBottomNavItem?.classList.remove("active");
  this.classList.add("active");
};

$bottomNavItems &&
  addEventOnElement($bottomNavItems, "click", activeNavItem);


/**
 * Player modal toggle
 */

const /** {HTMLElement} */ $modalPlayer = document.querySelector("[data-modal-player]");

const /** {Array <HTMLElement>} */ $modalPlayerTogglers = document.querySelectorAll("[data-modal-player-toggler]")

const /** {HTMLElement} */ $modalPlayerOverlay = document.querySelector("[data-player-overlay]");


const toggleModalPlayer = () => {
  $modalPlayer.classList.toggle("active");
  $modalPlayerOverlay.classList.toggle("active")
};


$modalPlayerTogglers && addEventOnElement($modalPlayerTogglers, "click", toggleModalPlayer);



/**
 * PBack and forward functionality
 */


const backBtn = document.querySelector("[data-back-btn]")
const forwardBtn = document.querySelector("[data-forward-btn]")

backBtn?.addEventListener("click", function () {
  window.history.back()
})

forwardBtn?.addEventListener("click", function () {
  window.history.forward()
})





/**
 * add background color in list header when sticky on top
 */

const $listHeader = document.querySelector("[data-list-header]")


$page?.addEventListener("scroll", function () {

  if ($listHeader.offsetTop > 0) {
    $listHeader.classList.add('list-header-active');
  } else {
    $listHeader.classList.remove('list-header-active');
  }
});

/** 
 * Search filter item active
 */

const $searchFilterItems = document.querySelectorAll('[data-search-filter]')

const activeSearchFilterItem = function () {
  document.querySelector('[data-search-filter].active')?.classList.remove('active');
  this.classList.add('active');
}

$searchFilterItems && addEventOnElement($searchFilterItems, "click", activeSearchFilterItem)
