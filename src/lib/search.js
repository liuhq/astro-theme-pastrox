const searchBar = document.getElementById('search-bar')
const timelineWrap = document.getElementById('timeline-wrap')

searchBar.addEventListener('input', e => {
    // @ts-ignore
    const value = e.target.value.toLowerCase().replace(/\s+/g, '')
    // @ts-ignore
    let timeline = timelineWrap.childNodes
    for (const item of timeline) {
        if (item.nodeType !== 1) continue
        // @ts-ignore
        if (!value || item.dataset.title.includes(value)) {
            // @ts-ignore
            item.style.opacity = 1
            // @ts-ignore
            item.style.visibility = 'visible'
            // @ts-ignore
            item.style.marginTop = 0
        } else {
            // @ts-ignore
            item.style.opacity = 0
            // @ts-ignore
            item.style.visibility = 'hidden'
            // @ts-ignore
            item.style.marginTop = -item.offsetHeight - 30 + 'px'
        }
    }
})
