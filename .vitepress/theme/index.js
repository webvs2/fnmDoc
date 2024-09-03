// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
const modules = import.meta.glob("./components/*.vue");
    
console.log('modules',modules)


/** @type {import('vitepress').Theme} */
export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        for (const path in modules) {
            const fileName=path .split('/').pop().replace(/\.\w+$/, '')
            modules[path]().then((mod) => {
                console.log(fileName)
                app.component(fileName, mod.default||mod)
            })
        }
    }
}