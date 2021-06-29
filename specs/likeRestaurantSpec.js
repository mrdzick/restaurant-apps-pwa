/* eslint-disable no-undef */
import FavoriteRestaurantIdb from '../src/scripts/data/database'
import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator'

const addButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>'
}

describe('Liking a restaurant', () => {
    beforeEach(() => {
        addButtonContainer()
    })

    it('should show the like button when the restaurant has not been liked before', async() => {
        await LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            restaurant: {
                id: 1
            }
        })

        expect(document.querySelector('[aria-label="Add this restaurant to favorite"]'))
            .toBeTruthy()
    })

    it('should not show the unlike button when the restaurant has not been liked before', async() => {
        await LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            restaurant: {
                id: 1
            }
        })

        expect(document.querySelector('[aria-label="Remove this restaurant from favorite"]'))
            .toBeFalsy()
    })

    it('should be able to Like the restaurant', async() => {
        await LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            restaurant: {
                id: 1
            }
        })

        document.querySelector('#likeButton').dispatchEvent(new Event('click'))
        const restaurant = await FavoriteRestaurantIdb.getRestaurant(1)

        expect(restaurant).toEqual({ id: 1 })

        FavoriteRestaurantIdb.deleteRestaurant(1)
    })

    it('should not add a restaurant again when its already liked', async() => {
        await LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            restaurant: {
                id: 1
            }
        })

        await FavoriteRestaurantIdb.putRestaurant({ id: 1 })

        document.querySelector('#likeButton').dispatchEvent(new Event('click'))

        expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 1 }])

        FavoriteRestaurantIdb.deleteRestaurant(1)
    })

    xit('should not add a restaurant when it has no id', async() => {
        await LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            restaurant: {}
        })

        document.querySelector('#likeButton').dispatchEvent(new Event('click'))

        expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([])
    })
})
