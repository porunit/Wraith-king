const itemButton = document.querySelector('#arrow-to-items');
const itemsContainer = document.querySelector('.next-page-items');
console.log(itemsContainer);
console.log(itemButton);

let itemClickEvent = () => {
    itemsContainer.style.display = 'block';
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: itemsContainer.offsetTop
    });
};

itemButton.addEventListener('click', itemClickEvent);

