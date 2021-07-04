/* eslint-disable no-undef */
import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract'
import FavoriteRestaurantIdb from '../src/scripts/data/database'

describe('Favorite Restaurant Idb Contract test implementation ', () => {
    afterEach(async() => {
        (await FavoriteRestaurantIdb.getAllRestaurants()).forEach(async(restaurant) => {
            await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id)
        })
    })

    itActsAsFavoriteRestaurantModel(FavoriteRestaurantIdb)
})
