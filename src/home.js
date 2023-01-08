import RestaurantLogo from './assets/logo.png'

const homePage = () => {
    function _generateName() {
        const restaurantName = document.createElement('div')
        restaurantName.className = 'restaurant-name'
        restaurantName.innerHTML = `Zach's Burger Shack`

        return restaurantName
    }

    function _generateLogo() {
        const restaurantLogo = document.createElement('img')
        restaurantLogo.className = 'logo'
        restaurantLogo.src = RestaurantLogo;
        restaurantLogo.alt = 'restaurant logo'
        return restaurantLogo;
    }

    function _generateDescription() {
        const restaurantDescription = document.createElement('div')
        restaurantDescription.className = 'restaurant-description'
        const p1 = document.createElement('p')
        p1.className = 'best-burgers-sentence'
        p1.innerHTML = 'The <span id="best">best</span> burgers in town!'
        const p2 = document.createElement('p')
        p2.className = 'warning'
        p2.innerHTML = 'Warning: our burgers are highly addictive.'
        restaurantDescription.append(p1, p2)
        return restaurantDescription;
    }

    function _generateOpenHours() {
        const openHours = document.createElement('div')
        openHours.className = 'opening-hours'

        fetch('./assets/openingHours.html')
            .then(response => response.text())
            .then(html => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html')
                const templateElement = doc.querySelector('.template')
                const template = templateElement.innerHTML;
                openHours.innerHTML = template;
            })

        return openHours;
    }

    function generateHomePage() {
        const container = document.createElement('div')
        container.className = 'homepage-container'
        container.appendChild(_generateName())
        container.appendChild(_generateLogo())
        container.appendChild(_generateDescription())
        container.appendChild(_generateOpenHours())
        return container
    }

    return generateHomePage();
}

export default function loadHomePage() {
    //wipe out page content before injecting new content
    document.getElementById('content').innerHTML = ''
    document.querySelector('#content').appendChild(homePage())
}





