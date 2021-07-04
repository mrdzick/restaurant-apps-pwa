import MenusDbSource from '../data/menus-source'

const PostReview = (url, name, review) => {
    const dataInput = {
        id: url.id,
        name,
        review
    }

    MenusDbSource.postRestaurant(dataInput)

    const reviewContainer = document.querySelector('.other_users_reviews')
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    const date = new Date().toLocaleDateString('id-ID', options)
    const newReview = `
    <div class="review">
        <h4>${name}</h4>
        <p class="date__review">${date}</p>
        <p class="review__content">${review}<p>
    </div>
    `
    reviewContainer.innerHTML += newReview
}

export default PostReview
