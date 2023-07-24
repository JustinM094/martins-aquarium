/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {   id: 1,
            species: "Rainbow Trout",
            length: "12 inches",
            name: "Sparkle",
            location: "Crystal River",
            food: "Insects and small fish",
        },
        {   id: 2,
            species: "Angelfish",
            length: "4.5 inches",
            name: "Seraphina",
            location: "Coral Reef",
            food: "Algae and small crustaceans",
        },
        {   id: 3,
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