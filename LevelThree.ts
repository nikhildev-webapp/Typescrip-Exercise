//*Level3:Type Aliases
console.log("Level 3:Type Aliases");
//*Exercise1:create a type alias for two user
console.log('Exercise1:type alias for two user');
type User = {
    id: string,
    name: string,
    email: string;
    isActive:boolean
}

let user1: User = {
    id: 'User101',
    name: 'Nikhil',
    email: 'nikhilkholiya@gmail.com',
    isActive:true  
}
console.log('User-1:', user1);

let user2: User = {
    id: 'User102',
    name: 'Harsh',
    email: 'harsh@gmail.com',
    isActive:false
}
console.log('User-2:', user2)

//*Exercise2:create a Interface for product
console.log('Exercise2:Interface for product');
interface Product{
    id: string,
    name: string,
    price: number,
    inStock:boolean
}

let product1: Product = {
    id: 'Ax101',
    name: 'Monitor',
    price: 10000,
    inStock:true,
}
console.log('Product-1:', product1)

//*Exercise3:Write a function that accepts a Product returns a formatted string
console.log('Exercise3:function that accepts a Product returns a formatted string');
function formatProduct(product: Product): string {
    return `Product [ID: ${product.id}, Name: ${product.name}, Price: $${product.price}, In Stock: ${product.inStock}]`;
}
formatProduct(product1);
console.log('Formatted Product-1:', formatProduct(product1));