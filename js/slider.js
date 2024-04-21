export function initSlider(sliderImagesContainerId, leftButtonId, rightButtonId, thumbnailsId) {
    const sliderImagesContainer = document.getElementById(sliderImagesContainerId);
    const leftButton = document.getElementById(leftButtonId);
    const rightButton = document.getElementById(rightButtonId);
    const thumbnails = document.getElementById(thumbnailsId);

    leftButton.addEventListener('click', sliderNavigation);
    rightButton.addEventListener('click', sliderNavigation);

    let autoSliderInterval; // Variable to hold the interval ID for auto slider

    function initThumbnails() {
        const sliderImages = sliderImagesContainer.querySelectorAll('img');
        sliderImages.forEach((element, index) => {
            const thumbnail = document.createElement('span');
            thumbnail.setAttribute('data-position', index);
            thumbnail.addEventListener('click', sliderNavigation);
            thumbnails.appendChild(thumbnail);
            if (index !== 0) {
                element.classList.add('hidden');
            }
        });
    }

    function startAutoSlider() {
        autoSliderInterval = setInterval(() => {
            rightButton.click(); // Trigger right button click event
        }, 5000); // Switch slide every 5 seconds (5000 milliseconds)
    }

    function stopAutoSlider() {
        clearInterval(autoSliderInterval); // Clear the interval to stop auto sliding
    }

    function sliderNavigation(event) {
        stopAutoSlider(); // Stop auto sliding when manual navigation occurs

        let activeImageIndex;

        if (event.target.id === 'right') {
            activeImageIndex = Array.from(sliderImagesContainer.children).findIndex(img => !img.classList.contains('hidden'));
            sliderImagesContainer.children[activeImageIndex].classList.add('hidden');
            activeImageIndex = (activeImageIndex + 1) % sliderImagesContainer.children.length;
            sliderImagesContainer.children[activeImageIndex].classList.remove('hidden');
        } else if (event.target.id === 'left') {
            activeImageIndex = Array.from(sliderImagesContainer.children).findIndex(img => !img.classList.contains('hidden'));
            sliderImagesContainer.children[activeImageIndex].classList.add('hidden');
            activeImageIndex = (activeImageIndex - 1 + sliderImagesContainer.children.length) % sliderImagesContainer.children.length;
            sliderImagesContainer.children[activeImageIndex].classList.remove('hidden');
        } else {
            activeImageIndex = parseInt(event.target.getAttribute('data-position'));
            sliderImagesContainer.querySelectorAll('img').forEach((img, index) => {
                img.classList.add('hidden');
                if (index === activeImageIndex) {
                    img.classList.remove('hidden');
                }
            });
        }

        startAutoSlider(); // Restart auto sliding after manual navigation
    }

    // Initialize the thumbnails
    initThumbnails();

    // Start auto sliding initially
    startAutoSlider();
}