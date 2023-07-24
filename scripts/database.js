/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {   id: 1,
            image: "https://s7d1.scene7.com/is/image/isp/wafrainbowtrout-pc?qlt=100&wid=1200&ts=1689013711736&$ImageComponent$&fit=constrain",
            species: "Rainbow Trout",
            length: "12 inches",
            name: "Sparkle",
            location: "Crystal River",
            food: "Insects and small fish",
        },
        {   id: 2,
            image: "https://www.justfishkeeping.com/wp-content/uploads/2021/01/What-animal-eats-Angelfish.jpg",
            species: "Angelfish",
            length: "4.5 inches",
            name: "Seraphina",
            location: "Coral Reef",
            food: "Algae and small crustaceans",
        },
        {   id: 3,
            image: "https://www.wideopenspaces.com/wp-content/uploads/sites/3/2021/07/sailfishvsswordfish.jpg?fit=1200%2C800",
            species: "Swordfish",
            length: "8 feet",
            name: "Neptune",
            location: "Open Ocean",
            food: "Squid, mackerel, and other large fish",
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}