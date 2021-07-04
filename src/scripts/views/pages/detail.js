import FavoriteRestaurantIdb from '../../data/database'
import MenusDbSource from '../../data/menus-source'
import UrlParser from '../../routes/url-parser'
import LikeButtonInitiator from '../../utils/like-button-initiator'
import { createMenuDetailTemplate } from '../templates/template-creator'
import PostReview from '../../utils/post-review'

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

        const menuDetailContainer = document.querySelector('#menu-detail')
        menuDetailContainer.innerHTML = createMenuDetailTemplate(restaurant)

        LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            favoriteRestaurants: FavoriteRestaurantIdb,
            restaurant
        })

        const submitReviewButton = document.querySelector('#submit_review')
        const reviewersName = document.querySelector('#reviewers_name')
        const inputReview = document.querySelector('#input_review')

        submitReviewButton.addEventListener('click', (event) => {
            event.preventDefault()
            if (reviewersName.value === '' || inputReview.value === '') {
                alert('Harap isi nama dan juga detail review')
                reviewersName.value = ''
                inputReview.value = ''
            } else {
                PostReview(url, reviewersName.value, inputReview.value)
                reviewersName.value = ''
                inputReview.value = ''
            }
        })
    }
}

export default Detail
