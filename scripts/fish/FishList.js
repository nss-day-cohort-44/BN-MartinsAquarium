/**
 *  FishList which renders individual fish objects as HTML
 */

import { useFish, mostHolyFish, soldierFish, nonHolyFish } from './FishDataProvider.js'
import { Fish } from './Fish.js'


export const FishList = () => {
    console.log("Most Holy", mostHolyFish())
    console.log("Soldiers", soldierFish())
    console.log("The rest", nonHolyFish())

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".content")
    const fishes = useFish()


    // Generate all of the HTML for all of the fish
    let fishHTMLRepresentations = ""
    for (const fish of fishes) {
        fishHTMLRepresentations += Fish(fish)
    }
    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <article class="fish__list">
            ${fishHTMLRepresentations}
        </article>
    `
}