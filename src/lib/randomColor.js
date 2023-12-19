import { SITE } from '#config'

export function randomColorClosure() {
    let prev = undefined
    return () => {
        const colors = SITE.colors.filter(color => color !== prev)
        let id = Math.floor(Math.random() * colors.length)
        prev = colors[id]
        return colors[id]
    }
}
