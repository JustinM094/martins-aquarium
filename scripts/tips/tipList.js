import { getTips } from "../database.js"

export const TipList = () => {
    // Invoke the function that you imported from the database module
    const tips = getTips()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishTips">'

    // Create HTNL representations of each fish here
    for (const tip of tips) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="tips-card">
            <div class="cleaning__tip">${tip.clean}</div>
            <div class="temperature__tip">${tip.temperature}</div>
            <div class="salinity__tip">${tip.salinity}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}