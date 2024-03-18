import { Product } from "../../../../common/models/Product"

export type CatalogData = {
    map(arg0: (product: any) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode
    products: Product[]
}
