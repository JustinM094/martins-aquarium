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
            length: 12,
            name: "Sparkle",
            location: "Crystal River",
            food: "Insects and small fish",
        },
        {   id: 2,
            image: "https://www.justfishkeeping.com/wp-content/uploads/2021/01/What-animal-eats-Angelfish.jpg",
            species: "Angelfish",
            length: 5,
            name: "Seraphina",
            location: "Coral Reef",
            food: "Algae and small crustaceans",
        },
        {   id: 3,
            image: "https://www.wideopenspaces.com/wp-content/uploads/sites/3/2021/07/sailfishvsswordfish.jpg?fit=1200%2C800",
            species: "Swordfish",
            length: 15,
            name: "Neptune",
            location: "Open Ocean",
            food: "Squid, mackerel, and other large fish",
        },
        {
            id: 4,
            image: "https://roscofoto.files.wordpress.com/2020/06/3k2a5674-edit-1.jpg",
            species: "Flying Fish",
            length: 8,
            name: "Zephyr",
            location: "Tropical Waters",
            food: "Plankton and small insects",
        },
        {
            id: 5,
            image: "https://cals.cornell.edu/sites/default/files/styles/open_graph/public/2019-07/0716_anglerfish.jpg?h=958e3992&itok=toX6LbCO",
            species: "Anglerfish",
            length: 12,
            name: "Lumos",
            location: "Deep Sea",
            food: "Small fish and crustaceans",
        },
        {
            id: 6,
            image: "https://images.squarespace-cdn.com/content/v1/5914f3bc3e00be9632fe1a5a/15ebb3f8-5e11-4fa5-b926-367c07becee3/Hammerhead+Jim+Abernethy.jpg",
            species: "Hammerhead Shark",
            length: 136,
            name: "Thor",
            location: "Coastal Waters",
            food: "Rays, squid, and smaller sharks",
        },
        {
            id: 7,
            image: "https://images.theconversation.com/files/417460/original/file-20210823-22-1pz2luo.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C2618%2C1844&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
            species: "Lionfish",
            length: 4,
            name: "Simba",
            location: "Coral Reefs",
            food: "Crustaceans and small fish",
        }
    ],
    tips: [
        {
            id: 1,
            clean: "10 times daily",
            temperature: "200 degrees",
            salinity: "35 parts per thousand"
        }
    ],
    locations: [
        {
            id: 1,
            image: "https://traveladdicts.net/wp-content/uploads/2022/03/Three-Sisters-Spring-Crystal-River.jpg",
            name: "Crystal River"
        },
        {
            id: 2,
            image: "https://media.greenmatters.com/brand-img/_IvEQLQuV/0x0/fun-facts-about-coral-reefs-1686576170480.jpg",
            name: "Coral Reef"
        },
        {
            id: 3,
            image: "https://photos.demandstudios.com/getty/article/163/241/71042561.jpg",
            name: "Open Ocean"
        },
        {
            id: 4,
            image: "https://www.explore.com/img/gallery/the-prettiest-waters-around-the-world/intro-1667491463.jpg",
            name: "Tropical Waters"
        },
        {
            id: 5,
            image: "https://hips.hearstapps.com/hmg-prod/images/rays-of-sunlight-into-the-underwater-cave-royalty-free-image-1665512456.jpg",
            name: "Deep Sea"
        },
        {
            id: 6,
            image: "https://s.hdnux.com/photos/01/06/66/47/18573803/4/rawImage.jpg",
            name: "Coastal Waters"
        },
        {
            id: 7,
            image: "https://geographical.co.uk/wp-content/uploads/shutterstock_1894838764-1200x799.jpg",
            name: "Coral Reefs"
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

export const getTips = () => {
    return database.tips.map(tips => ({...tips}))
}

export const getPlaces = () => {
    return database.locations.map(location => ({...location}))
}

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const fish of database.fish) {
        if (fish.length % 3 === 0)
            holyFish.push(fish)
    }

    return holyFish
}

export const soldierFish = () => {
    const soldiers = []
    for (const fish of database.fish) {
        if (fish.length % 5 === 0)
            soldiers.push(fish)
    }
    // 5, 10, 15, 20, 25, etc... fish
    return soldiers
}

export const nonHolyFish = () => {
    const regularFish = []
    for (const fish of database.fish) {
        if (fish.length % 3 !== 0 && fish.length % 5 !== 0)
            regularFish.push(fish)
    }
    // Any fish not a multiple of 3 or 5
    return regularFish
}