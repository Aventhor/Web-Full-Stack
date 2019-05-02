export class Book {
    id: number;
    name: string;
    author: string;
    img: string;
    description: string;
    price: number;
    constructor(name: string, author: string, img: string, desc: string, price: number) {
        this.name = name;
        this.author = author;
        this.img = img;
        this.description = desc;
        this.price = price;
    }
}