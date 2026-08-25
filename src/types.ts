export type User = {
    id: number
    name: string
    role: 'Admin' | 'Editor' | 'Viewer'
}

export type Product = {
    id: string
    title: string
    price: number
    inStock: boolean
}
