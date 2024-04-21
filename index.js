// main.js
import { toggleMobileMenu } from '/js/mobileMenu.js';
import { initDropdownMenus } from '/js/dropdownMenu.js';
import { initSlider } from '/js/slider.js';

document.addEventListener('DOMContentLoaded', function() {
    toggleMobileMenu('mobile-menu', 'hamburger', 'close-mobile-menu');
    initDropdownMenus('dropdown');
    initSlider('slider-images-container', 'left', 'right', 'thumbnails');
});