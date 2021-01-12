/**
 *  LocationList which renders individual location objects as HTML
 */

import { useLocation } from './LocationDataProvider.js'
import { Location } from './Location.js'


export const LocationList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".location__list")
    const locations = useLocation()


    // Generate all of the HTML for all of the locations
    let locationHTMLRepresentations = ""
    for (const location of locations) {
        locationHTMLRepresentations += Location(location)
    }
    // Add to the existing HTML in the content element
    contentElement.innerHTML += locationHTMLRepresentations
}