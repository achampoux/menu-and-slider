// dropdownMenu.js
export function initDropdownMenus(dropdownClass) {
    const dropdownContainers = document.querySelectorAll(`.${dropdownClass}`);

    dropdownContainers.forEach(container => {
        container.addEventListener('mouseover', () => {
            const dropdownContent = container.querySelector('.dropdown-content');
            dropdownContent.classList.remove('hidden');
            console.log(dropdownContent);
        });

        container.addEventListener('mouseout', () => {
            const dropdownContent = container.querySelector('.dropdown-content');
            dropdownContent.classList.add('hidden');
        });
    });
}