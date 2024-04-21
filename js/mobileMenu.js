// mobileMenu.js
export function toggleMobileMenu(mobileMenuId, hamburgerId, closeMenuId) {
    const mobileMenu = document.getElementById(mobileMenuId);
    const hamburger = document.getElementById(hamburgerId);
    const closeMobileMenu = document.getElementById(closeMenuId);

    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    closeMobileMenu.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
}