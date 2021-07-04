import CONFIG from '../../globals/config'

const createMenuItemTemplate = (restaurant) => `
        <div class="menu-container">
            <div class="menu-image">
                <picture>
                    <source media="(max-width: 499px)" data-srcset="${CONFIG.BASE_SMALL_IMAGE_URL + restaurant.pictureId}">
                    <source media="(max-width: 899px)" data-srcset="${CONFIG.BASE_MEDIUM_IMAGE_URL + restaurant.pictureId}">
                    <img data-src="${CONFIG.BASE_LARGE_IMAGE_URL + restaurant.pictureId}" class="menu-image lazyload" alt="${restaurant.name}">
                </picture>
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
            <picture class="menu__poster">
                <source media="(max-width: 499px)" data-srcset="${CONFIG.BASE_SMALL_IMAGE_URL + restaurant.pictureId}">
                <source media="(max-width: 899px)" data-srcset="${CONFIG.BASE_MEDIUM_IMAGE_URL + restaurant.pictureId}">
                <img data-src="${CONFIG.BASE_LARGE_IMAGE_URL + restaurant.pictureId}" class="menu-image lazyload" alt="${restaurant.name}">
            </picture>
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
            <div class="other_users_reviews">
                ${restaurant.customerReviews.map((review) => `
                    <div class="review">
                        <h4>${review.name}</h4>
                        <p class="date__review">${review.date}</p>
                        <p class="review__content">${review.review}</p>
                    </div>`).join('')}
            </div>
            <div class="form__review">
                <form>
                    <input name="reviewers_name" type="text" id="reviewers_name" placeholder="Nama">
                    <input name="input_review" type="text" id="input_review" placeholder="Masukkan Pendapat kamu..">
                    <button id="submit_review" type="submit">Kirim</button>
                </form>
            </div>
        </div>
    `

const createItemNotFoundTemplate = () => `
        <div class="item_not_found">
            Belum ada yang kamu jadiin Restoran Favorit nih.. :(
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

export { createMenuItemTemplate, createMenuDetailTemplate, createItemNotFoundTemplate, createLikeButtonTemplate, createLikedButtonTemplate }
