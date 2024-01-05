export interface MenuItem {
    name: string,
    desc: string,
    ingredients: Array<string>,
    price: number
}

export interface User {
    name: string,
    password: string
}