import 'regenerator-runtime'
import '../styles/style.css'
import '../styles/responsive.css'
import App from './views/app'
import swRegister from './utils/sw-register'

// eslint-disable-next-line no-unused-vars
const app = new App({
    button: document.querySelector('.hamburger'),
    drawer: document.querySelector('.navbar-list'),
    content: document.querySelector('main')
})

window.addEventListener('hashchange', () => {
    app.renderPage()
})

window.addEventListener('load', () => {
    app.renderPage()
    swRegister()
})
