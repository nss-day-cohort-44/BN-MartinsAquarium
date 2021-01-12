const fishCollection = [
    {
        image: "lionfish.jpg",
        name: "Simba",
        species: "lionfish",
        length: 10,
        location: "Bermuda",
        diet: "crustaceans"
    },
    {
        image: "clownfish.jpg",
        name: "Bozo",
        species: "clownfish",
        length: 3,
        location: "Bahamas",
        diet: "coral"
    },
    {
        image: "dottyback.jpg",
        name: "Dotty",
        species: "dottyback",
        length: 4,
        location: "Gulf of Mexico",
        diet: "coral"
    },
    {
        image: "flame-angelfish.jpg",
        name: "Charlie",
        species: "flame angelfish",
        length: 12,
        location: "Bermuda",
        diet: "crustaceans"
    },
    {
        image: "angelfish.jpg",
        name: "Halo",
        species: "flame angelfish",
        length: 15,
        location: "Bahamas",
        diet: "crustaceans"
    },
    {
        image: "blue-tang.jpg",
        name: "Bloop",
        species: "blue tang",
        length: 11,
        location: "Bahamas",
        diet: "coral"
    }
]
export const useFish = () => {
    return fishCollection.slice()
}

export const mostHolyFish = () => {
    // fish divisible by 3 with no remainder
    const holyFish = []
    for (const fish of fishCollection) {
        if (fish.length % 3 === 0) {
            holyFish.push(fish)
        }
    }
    return holyFish
}

export const soldierFish = () => {
    // fish divisible by 5 with no remainder
    const soldiers = []
    for (const fish of fishCollection) {
        if (fish.length % 5 === 0 && fish.length % 3 !== 0) {
            soldiers.push(fish)
        }
    }
    return soldiers
}

export const nonHolyFish = () => {
    // any fish not a multiple of 3 or  5
    const soldiers = []
    for (const fish of fishCollection) {
        if (fish.length % 5 !== 0 && fish.length % 3 !== 0) {
            soldiers.push(fish)
        }
    }
    return soldiers
}
