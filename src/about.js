
const aboutUs = () => {
    function _generateTitle() {
        const titleContainer = document.createElement('div')
        titleContainer.className = 'title-container'
        const p = document.createElement('p')
        p.innerHTML = 'About Us'
        titleContainer.appendChild(p)
        return titleContainer;
    }

    function _generateDescription() {
        const descContainer = document.createElement('div')
        descContainer.className = 'desc-container'
        const p = document.createElement('p')
        p.innerHTML = `Welcome to Zach's Burger Shack where we make every burger with sheer care and absolute passion. 
       <br><br>
        We ensure you that every bite will be so delightful, that it makes you want to take another one.`
        descContainer.appendChild(p)
        return descContainer;
    }

    function generateAboutUs() {
        const container = document.createElement('div')
        container.appendChild(_generateTitle())
        container.appendChild(_generateDescription())
        container.className = 'about-us-container'
        return container;
    }

    return generateAboutUs();
}

export default function loadAboutUs() {
    //wipe out page content before injecting new content
    document.getElementById('content').innerHTML = ''
    document.getElementById('content').append(aboutUs())
}   
