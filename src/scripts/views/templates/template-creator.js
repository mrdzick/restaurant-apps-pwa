import CONFIG from '../../globals/config'

const createMenuItemTemplate = (restaurant) => `
        <div class="menu-container">
            <div class="menu-image">
                <img src="${CONFIG.BASE_SMALL_IMAGE_URL + restaurant.pictureId}" class="menu-image" alt="${restaurant.name}">
            </div>
            <div class="content" tabindex="0">
                <p class="rating">Rating: ${restaurant.rating}</p>
                <h1 class="menu-title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h1>
                <p class="description">${restaurant.description}</p>
                <p class="city">Kota. ${restaurant.city}</p>
            </div>
        </div>
    `

const createMenuDetailTemplate = (restaurant) => `
        <div class="menu__main__info" tabindex="0">
            <h2 class="menu__title">${restaurant.name}</h2>
            <img class="menu__poster" src="${CONFIG.BASE_MEDIUM_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
            <div class="menu__info">
                <h3>Information</h3>
                <h4>Alamat Lengkap</h4>
                <p>${restaurant.address}, ${restaurant.city}</p>
                <h4>Kategori Menu</h4>
                <p>${restaurant.categories.map((category) => ` ${category.name}`)}</p>
                <h4>Menu Makanan</h4>
                <p>${restaurant.menus.foods.map((food) => ` ${food.name}`)}</p>
                <h4>Menu Minuman</h4>
                <p>${restaurant.menus.drinks.map((drink) => ` ${drink.name}`)}</p>
                <h4>Rating</h4>
                <p>${restaurant.rating}</p>
            </div>
            <div class="menu__description">
                <h3>Deskripsi</h3>
                <p>${restaurant.description}</p>
            </div>
        </div>
        <div class="reviews__container" tabindex="0">
            ${restaurant.customerReviews.map((review) => `
                <div class="review">
                    <h4>${review.name}</h4>
                    <p class="date__review">${review.date}</p>
                    <p class="review__content">${review.review}</p>
                </div>`).join('')}
        </div>
    `

const createLikeButtonTemplate = () => `
    <button aria-label="Add this restaurant to favorite" id="likeButton" class="like">
       <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
  `

const createLikedButtonTemplate = () => `
    <button aria-label="Remove this restaurant from favorite" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`

export { createMenuItemTemplate, createMenuDetailTemplate, createLikeButtonTemplate, createLikedButtonTemplate }
