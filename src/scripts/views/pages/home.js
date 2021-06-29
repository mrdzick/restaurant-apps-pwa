import MenusDbSource from '../../data/menus-source'
import { createMenuItemTemplate } from '../templates/template-creator'

const Home = {
    async render() {
        return `<div id="menu-header">
                    Explore Restaurant
                </div>
                <div class="menu-grid">
                    <!--Daftar Menu ditampilkan disini-->
                </div>`
    },

    async afterRender() {
        const restaurants = await MenusDbSource.allRestaurants()
        const menuContainer = document.querySelector('.menu-grid')
        restaurants.forEach((restaurant) => {
            menuContainer.innerHTML += createMenuItemTemplate(restaurant)
        })
    }
}

export default Home
