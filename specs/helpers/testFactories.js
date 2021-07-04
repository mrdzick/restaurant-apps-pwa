import FavoriteRestaurantIdb from '../../src/scripts/data/database'
import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator'

export const createLikeButtonPresenterWithRestaurant = async(restaurant) => {
    await LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurants: FavoriteRestaurantIdb,
        restaurant
    })
}
