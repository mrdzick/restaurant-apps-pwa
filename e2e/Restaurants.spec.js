/* eslint-disable no-undef */
const assert = require('assert')

Feature('Favorite Restaurant')

Before(({ I }) => {
    I.amOnPage('/#/favorite')
})

const firstCondition = 'Belum ada yang kamu jadiin Restoran Favorit nih.. :('

Scenario('showing empty favorite restaurant', ({ I }) => {
    I.seeElement('.item_not_found')
    I.see(firstCondition, '.item_not_found')
})

Scenario('Adding one restaurant to Favorites', async({ I }) => {
    I.see(firstCondition, '.item_not_found')

    I.amOnPage('/')

    I.seeElement('.menu-container')
    const firstCard = locate('.menu-title a').first()
    const firstCardTitle = await I.grabTextFrom(firstCard)
    I.click(firstCard)

    I.seeElement('#likeButton')
    I.click('#likeButton')

    I.amOnPage('/#/favorite')
    I.seeElement('.menu-container')
    const likedCardTitle = await I.grabTextFrom('.menu-title')

    assert.strictEqual(firstCardTitle, likedCardTitle)
})

Scenario('Removing one restaurant from Favorites', async({ I }) => {
    I.see(firstCondition, '.item_not_found')

    I.amOnPage('/')

    // melihat card restaurant pertama dan mengkliknya
    I.seeElement('.menu-container')
    const firstCard = locate('.menu-title a').first()
    const firstCardTitle = await I.grabTextFrom(firstCard)
    I.click(firstCard)

    // menambahkan restoran ke Favorit
    I.seeElement('#likeButton')
    I.click('#likeButton')

    // kembali ke halaman favorit dan membandingkan dgn restoran yg diklik
    I.amOnPage('/#/favorite')
    I.seeElement('.menu-container')
    const likedCardTitle = await I.grabTextFrom('.menu-title')
    assert.strictEqual(firstCardTitle, likedCardTitle)

    // mengklik restoran yang ada di favorit
    I.click(likedCardTitle)

    // mengunlike restaurant yang ada di favorit
    I.seeElement('#likeButton')
    I.click('#likeButton')

    // kembali ke halaman favorit
    I.amOnPage('/#/favorite')
    I.seeElement('.item_not_found')
    const noFavoriteRestaurant = await I.grabTextFrom('.item_not_found')

    // Memastikan pada Halaman favorit bahwa restoran yang sudah di unlike tidak ditampilkan
    assert.strictEqual(noFavoriteRestaurant, firstCondition)
})

Scenario('Adding customer review', async({ I }) => {
    I.see(firstCondition, '.item_not_found')

    I.amOnPage('/')

    I.seeElement('.menu-container')
    I.click(locate('.menu-title a').first())

    I.seeElement('.form__review form')

    const textReview = 'Tempatnya asik buat nganggur'
    I.fillField('reviewers_name', 'Dzikri Nursyaban')
    I.fillField('input_review', textReview)

    I.click('#submit_review')

    const lastReview = locate('.review__content').last()
    const textLastReview = await I.grabTextFrom(lastReview)

    assert.strictEqual(textReview, textLastReview)
})
