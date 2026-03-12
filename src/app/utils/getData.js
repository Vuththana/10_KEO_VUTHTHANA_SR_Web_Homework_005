import { items } from "../lib/items"

export function getData(reversed) {
    const sorted = [...items].sort((a,b) => {
        a.item_name.localeCompare(b.item_name)
    })
    return reversed ? sorted.reverse() : sorted;
}