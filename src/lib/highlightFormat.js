// @ts-nocheck
hljs.configure({ ignoreUnescapedHTML: true })

const sleep = delay => new Promise(resolve => setTimeout(resolve, delay))

let copying = false

const highlight = () => {
    let codes = document.getElementsByTagName('pre')
    for (let i of codes) {
        let code = i.textContent
        let language = [...i.classList, ...i.firstChild.classList][0]?.replace(/language-/g, '') || 'plaintext'
        let highlighted
        try {
            highlighted = hljs.highlight(code, { language }).value
        } catch {
            highlighted = code
        }
        i.innerHTML = `
                    <div class="code-content hljs">${highlighted}</div>
                    <div class="language">${language}</div>
                    <div class="copycode">
                        <i class="fa-solid fa-copy fa-fw"></i>
                        <i class="fa-solid fa-check fa-fw"></i>
                    </div>
                `
        let content = i.querySelector('.code-content')
        hljs.lineNumbersBlock(content, { singleLine: true })
        let copycode = i.querySelector('.copycode')
        copycode.addEventListener('click', async () => {
            if (copying) return
            copying = true
            copycode.classList.add('copied')
            await navigator.clipboard.writeText(code)
            await this.sleep(1000)
            copycode.classList.remove('copied')
            copying = false
        })
    }
}

highlight()
