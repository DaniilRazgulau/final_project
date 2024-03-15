export type Product = {
    id: number
    description: string
    image: string
    price: number
    rating: number
    title: string
    category: {
        id: string,
        name: string
    }
}