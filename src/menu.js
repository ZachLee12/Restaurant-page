import Burger from './assets/burger.jpg'
import DeluxeBurder from './assets/deluxe_burger.jpg'
import CheeseMania from './assets/cheese_mania.jpg'

const makeMenuContainer = () => {
    const menuContainer = document.createElement('div')
    menuContainer.className = 'menu-container'
    return menuContainer;
}

const makeMenuItem = (image, description) => {
    function _generateItemContainer() {
        const itemContainer = document.createElement('div')
        itemContainer.className = 'item-container'
        return itemContainer;
    }

    function _generateDishDesc() {
        const dishDescription = document.createElement('div')
        dishDescription.className = 'dish-description'
        const p = document.createElement('p')
        p.innerHTML = description;
        dishDescription.appendChild(p)
        return dishDescription;
    }

    function _generateDishImg() {
        const dishImage = document.createElement('img')
        dishImage.src = image;
        return dishImage;
    }

    function generateMenuItem() {
        const menuItem = _generateItemContainer();
        menuItem.appendChild(_generateDishDesc())
        menuItem.appendChild(_generateDishImg())
        return menuItem;
    }
    return generateMenuItem();
}

export default function loadMenu() {
    const normalBurger = makeMenuItem(Burger, 'Classic burger and fries. <br> <br> It can never go wrong with this one. <br> <br> CHF 18.00');
    const deluxeBurger = makeMenuItem(DeluxeBurder, 'Burger deluxe with our finest Wagyu beef. <br> <br> Burger patty topped with cheddar cheese and truffles. <br> <br> CHF 28.00')
    const cheeseMania = makeMenuItem(CheeseMania, 'A cheese mania! Perfect for cheese lovers (like me). <br> <br> CHF 22.00')

    const menuContainer = makeMenuContainer();
    menuContainer.append(normalBurger, deluxeBurger, cheeseMania)

    //wipe out page content before injecting new content
    document.getElementById('content').innerHTML = ''
    document.getElementById('content').append(menuContainer)
}