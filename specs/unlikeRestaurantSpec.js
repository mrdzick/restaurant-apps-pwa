/* eslint-disable no-undef */
import FavoriteRestaurantIdb from '../src/scripts/data/database'
import { createLikeButtonPresenterWithRestaurant } from './helpers/testFactories'

const addButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>'
}

describe('Unlike a restaurant', () => {
    beforeEach(async() => {
        addButtonContainer()
        await FavoriteRestaurantIdb.putRestaurant({ id: 1 })
    })

    afterEach(async() => {
        await FavoriteRestaurantIdb.deleteRestaurant(1)
    })

    it('should display unlike widget when the restaurant has been liked', async() => {
        await createLikeButtonPresenterWithRestaurant({ id: 1 })

        expect(document.querySelector('[aria-label="Remove this restaurant from favorite"]'))
            .toBeTruthy()
    })

    it('should not display like widget when the restaurant has been liked', async() => {
        await createLikeButtonPresenterWithRestaurant({ id: 1 })

        expect(document.querySelector('[aria-label="Add this restaurant to favorite"]'))
            .toBeFalsy()
    })

    it('should be able to remove a restaurant from the list', async() => {
        await createLikeButtonPresenterWithRestaurant({ id: 1 })

        document.querySelector('[aria-label="Remove this restaurant from favorite"').dispatchEvent(new Event('click'))

        expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([])
    })

    it('should not to throw Error if the unliked restaurant is not in the list', async() => {
        await createLikeButtonPresenterWithRestaurant({ id: 1 })

        await FavoriteRestaurantIdb.deleteRestaurant(1)

        document.querySelector('[aria-label="Remove this restaurant from favorite"').dispatchEvent(new Event('click'))

        expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([])
    })
})
