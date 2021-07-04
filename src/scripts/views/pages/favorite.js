import FavoriteRestaurantIdb from '../../data/database'
import { createMenuItemTemplate, createItemNotFoundTemplate } from '../templates/template-creator'

const Favorite = {
    async render() {
        return `
            <div id="menu-header">
                
            </div>
            <div class="menu-grid">
                <!--Daftar Menu ditampilkan disini-->
            </div>`
    },

    async afterRender() {
        const restaurants = await FavoriteRestaurantIdb.getAllRestaurants()
        const menuHeader = document.querySelector('#menu-header')
        const menuContainer = document.querySelector('.menu-grid')

        if (restaurants.length === 0) {
            menuHeader.innerHTML = createItemNotFoundTemplate()
        }

        restaurants.forEach((restaurant) => {
            menuHeader.innerHTML = 'Restoran Favorit'
            menuContainer.innerHTML += createMenuItemTemplate(restaurant)
        })
    }
}

export default Favorite
