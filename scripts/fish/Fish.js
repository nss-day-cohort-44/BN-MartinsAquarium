/**
 * Fish which renders individual fish objects as HTML
 */

export const Fish = (fish) => {
    return `
        <section class="fish card">
            <div><img  class="fish__image image--card" src="./images/fish/${fish.image}" /></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">species: ${fish.species}</div>
            <div class="fish__length">length: ${fish.length}</div>
            <div class="fish__location">location: ${fish.location}</div>
            <div class="fish__diet">diet: ${fish.diet}</div>
        </section>
    `
}