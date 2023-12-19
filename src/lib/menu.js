// @ts-ignore
const menuClassList = document.getElementById('menu').classList
const wrap = document.getElementById('home-posts-wrap')
const showMenuItems = document.getElementById('show-menu-items')
let scrollTop = 0

window.addEventListener(
    'scroll',
    () => {
        let newScrollTop = document.documentElement.scrollTop

        // @ts-ignore
        scrollTop < newScrollTop && (showMenuItems.checked = false)
        menuClassList.toggle('hidden', scrollTop < newScrollTop)

        if (wrap) {
            menuClassList.toggle('menu-color', newScrollTop <= window.innerHeight - 100)

            if (newScrollTop <= 400) wrap.style.top = '-' + newScrollTop / 5 + 'px'
            else wrap.style.top = '-80px'
        }

        scrollTop = newScrollTop
    },
    true
)
