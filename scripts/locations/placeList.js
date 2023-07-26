import { getPlaces } from "../database.js"

export const PlaceList = () => {
    // Invoke the function that you imported from the database module
    const location = getPlaces()
    
    // Start building a string filled with HTML syntax
    let htmlString = '<article class="placeList">'

    // Create HTNL representations of each fish here
    for (const area of location) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="location-card">
            <div><img  class="location__image image--card" src="${area.image}" /></div>
            <div class="location__name">${area.name}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}