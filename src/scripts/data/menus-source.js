import API_ENDPOINT from '../globals/api-endpoint'
import CONFIG from '../globals/config'

class MenusDbSource {
    static async allRestaurants() {
        const response = await fetch(API_ENDPOINT.ALL_RESTAURANTS)
        const responseJson = await response.json()
        return responseJson.restaurants
    }

    static async detailRestaurant(id) {
        const response = await fetch(API_ENDPOINT.DETAIL_RESTAURANT(id))
        const responseJson = await response.json()
        return responseJson.restaurant
    }

    static async postRestaurant(data) {
        const rawResponse = await fetch(API_ENDPOINT.POST_REVIEW, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Auth-Token': CONFIG.KEY
            },
            body: JSON.stringify(data)
        })
        return rawResponse
    }
}

export default MenusDbSource
