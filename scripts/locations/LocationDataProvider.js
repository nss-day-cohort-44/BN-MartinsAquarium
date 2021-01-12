const locationCollection = [
    {
        image: "bahamas.jpg",
        name: "Bahamas"
    },
    {
        image: "bermuda.jpg",
        name: "Bermuda"
    },
    {
        image: "gulfofmexico.jpg",
        name: "Gulf of Mexico"
    }
]
export const useLocation = () => {
    return locationCollection.slice()
}