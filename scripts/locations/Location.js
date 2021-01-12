/**
 * Location which renders individual location objects as HTML
 */

export const Location = (location) => {
    return `
        <section class="location card">
            <div><img  class="location__image image--card" src="./images/locations/${location.image}" /></div>
            <div class="location__name">${location.name}</div>
        </section>
    `
}