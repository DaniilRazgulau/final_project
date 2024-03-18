export type Product = {
    id: number
    description: string
    images: string[]
    price: number
    rating: number
    title: string
    category: {
        id: string,
        name: string,
        image: string
    }
}