/**
 *  TipList which renders individual tip objects as HTML
 */

import { useTips } from './TipDataProvider.js'
import { Tip } from './Tip.js'


export const TipList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".tip__list")
    const tips = useTips()


    // Generate all of the HTML for all of the fish
    let tipHTMLRepresentations = ""
    for (const tip of tips) {
        tipHTMLRepresentations += Tip(tip)
    }
    // Add to the existing HTML in the content element
    contentElement.innerHTML += tipHTMLRepresentations
}