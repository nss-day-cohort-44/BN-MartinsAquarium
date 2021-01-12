const tipCollection = [
    {
        tip: "remove fish from tank before cleaning"
    },
    {
        tip: "make sure water temp is between 75-80 degrees before returning fish to tank"
    },
]
export const useTips = () => {
    return tipCollection.slice()
}