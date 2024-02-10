const navBar = document.querySelector('.nav-bar')
const harmburgerBtn = document.querySelector('.harmburger-btn')
const closeBtn = document.querySelector('.close-btn')
const leftBtns = document.querySelectorAll('.left-btn')
const rightBtns = document.querySelectorAll('.right-btn')
const mobileImages = document.querySelectorAll('.mobile-img')
const desktopImages = document.querySelectorAll('.desktop-img')
const textCards = document.querySelectorAll('.hero-text-card')

const toggleNavbar = () => {
    navBar.dataset.status = navBar.dataset.status === "collapsed" ? "expanded" : "collapsed";
}

navBar.addEventListener('click', (event) => {
    if (event.target.classList.contains('nav-bar')) toggleNavbar()
})
harmburgerBtn.addEventListener('click', toggleNavbar)
closeBtn.addEventListener('click', toggleNavbar)

leftBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        // Mobile Selection
        let activeImage = document.querySelector(".mobile-img[data-status='active']")
        let activeIndex = parseInt(activeImage.dataset.index)
        let newActiveIndex = mapToRange(--activeIndex, mobileImages.length)
        let newActiveImage = mobileImages[newActiveIndex]
        newActiveImage.dataset.status = "active"
        activeImage.dataset.status = "unknown"

        // Desktop Selection
        let activeDesktopImage = document.querySelector(".desktop-img[data-status='active']")
        let activeDesktopIndex = parseInt(activeImage.dataset.index)
        let newActiveDesktopIndex = mapToRange(--activeDesktopIndex, desktopImages.length)
        let newActiveDesktopImage = desktopImages[newActiveDesktopIndex]
        newActiveDesktopImage.dataset.status = "active"
        activeDesktopImage.dataset.status = "unknown"

        // Text Card Selection
        let activeCard = document.querySelector(".hero-text-card[data-status='active']")
        let activeCardIndex = parseInt(activeCard.dataset.index)
        let newActiveCardIndex = mapToRange(--activeCardIndex, textCards.length)
        let newActiveCard = textCards[newActiveCardIndex]
        newActiveCard.dataset.status = "active"
        activeCard.dataset.status = "unknown"
    })
})

rightBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        // Mobile Selection
        let activeImage = document.querySelector(".mobile-img[data-status='active']")
        let activeIndex = parseInt(activeImage.dataset.index)
        let newActiveIndex = mapToRange(++activeIndex, mobileImages.length)
        let newActiveImage = mobileImages[newActiveIndex]
        newActiveImage.dataset.status = "active"
        activeImage.dataset.status = "unknown"

        // Desktop Selection
        let activeDesktopImage = document.querySelector(".desktop-img[data-status='active']")
        let activeDesktopIndex = parseInt(activeImage.dataset.index)
        let newActiveDesktopIndex = mapToRange(++activeDesktopIndex, desktopImages.length)
        let newActiveDesktopImage = desktopImages[newActiveDesktopIndex]
        newActiveDesktopImage.dataset.status = "active"
        activeDesktopImage.dataset.status = "unknown"

        // Text Card Selection
        let activeCard = document.querySelector(".hero-text-card[data-status='active']")
        let activeCardIndex = parseInt(activeCard.dataset.index)
        let newActiveCardIndex = mapToRange(++activeCardIndex, textCards.length)
        let newActiveCard = textCards[newActiveCardIndex]
        newActiveCard.dataset.status = "active"
        activeCard.dataset.status = "unknown"
    })
})

function mapToRange(num, rangeSize) {
    return (num % rangeSize + rangeSize ) % rangeSize 
}