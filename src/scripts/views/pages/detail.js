import MenusDbSource from '../../data/menus-source'
import UrlParser from '../../routes/url-parser'
import LikeButtonInitiator from '../../utils/like-button-initiator'
import { createMenuDetailTemplate } from '../templates/template-creator'

const Detail = {
    async render() {
        return `
                <div id="menu-detail" class="menu-detail"></div>
                <div id="likeButtonContainer"></div>
                `
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner()
        const restaurant = await MenusDbSource.detailRestaurant(url.id)

        const skipToContentButton = await document.querySelector('.skip-to-content')
        skipToContentButton.remove()

        const menuDetailContainer = document.querySelector('#menu-detail')
        menuDetailContainer.innerHTML = createMenuDetailTemplate(restaurant)

        LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            restaurant
        })
    }
}

export default Detail
