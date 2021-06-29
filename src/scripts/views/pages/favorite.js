import FavoriteRestaurantIdb from '../../data/database'
import { createMenuItemTemplate } from '../templates/template-creator'

const Favorite = {
    async render() {
        return `
            <div id="menu-header">
                Restoran Favorit
            </div>
            <div class="menu-grid">
                <!--Daftar Menu ditampilkan disini-->
            </div>`
    },

    async afterRender() {
        const restaurants = await FavoriteRestaurantIdb.getAllRestaurants()
        const menuContainer = document.querySelector('.menu-grid')

        restaurants.forEach((restaurant) => {
            menuContainer.innerHTML += createMenuItemTemplate(restaurant)
        })
    }
}

export default Favorite
