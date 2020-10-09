const fishCollection = [
    {
        image: "lionfish.jpg",
        name: "Bart",
        species: "lionfish",
        length: 10,
        location: "Bermuda",
        diet: "crustaceans"
    }
]
export const useFish = () => {
    return fishCollection.slice()
}