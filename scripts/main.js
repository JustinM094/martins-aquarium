import { getFish, getTips, getPlaces } from './database.js'


const allFish = getFish()
const allTips = getTips()
const allPlaces = getPlaces()

for (const fish of allFish) {
    console.log(fish)
}

for (const tip of allTips) {
    console.log(tip)
}

for (const place of allPlaces) {
    console.log(place)
}


// Import the FishList function from the correct module
import { FishList } from './fish/fishList.js'
import { TipList } from './tips/tipList.js'
import { PlaceList } from './locations/placeList.js'
/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentHTMLElement = document.querySelector(".content-wrapper > div")
const parentTipHTMLElement = document.querySelector(".careTips")
const parentLocationHTMLElement = document.querySelector(".harvestLocations")

parentHTMLElement.innerHTML = FishList()
parentTipHTMLElement.innerHTML = TipList()
parentLocationHTMLElement.innerHTML = PlaceList()
