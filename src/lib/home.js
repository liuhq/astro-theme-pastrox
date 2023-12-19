const menuClassList = document.getElementById('menu').classList
menuClassList.toggle('menu-color', document.documentElement.scrollTop <= window.innerHeight - 100)

document.getElementById('home-info').addEventListener('click', () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
})

const background = document.getElementById('home-background')
let images = background.dataset.images.split(',')
let random = Math.floor(Math.random() * images.length)
background.style.backgroundImage = `url('${images[random]}')`
