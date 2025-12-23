//*Level3:Type Aliases
console.log("Level 3:Type Aliases");
//*Exercise1:create a type alias for two user
console.log('Exercise1:type alias for two user');
var user1 = {
    id: 'User101',
    name: 'Nikhil',
    email: 'nikhilkholiya@gmail.com',
    isActive: true
};
console.log('User-1:', user1);
var user2 = {
    id: 'User102',
    name: 'Harsh',
    email: 'harsh@gmail.com',
    isActive: false
};
console.log('User-2:', user2);
//*Exercise2:create a Interface for product
console.log('Exercise2:Interface for product');
var product1 = {
    id: 'Ax101',
    name: 'Monitor',
    price: 10000,
    inStock: true,
};
console.log('Product-1:', product1);
//*Exercise3:Write a function that accepts a Product returns a formatted string
console.log('Exercise3:function that accepts a Product returns a formatted string');
function formatProduct(product) {
    return "Product [ID: ".concat(product.id, ", Name: ").concat(product.name, ", Price: $").concat(product.price, ", In Stock: ").concat(product.inStock, "]");
}
formatProduct(product1);
console.log('Formatted Product-1:', formatProduct(product1));
//*Exercise4:Create an array of products and print only products that are in stock
console.log('Exercise4:array of products and print only products that are in stock');
var products = [
    { id: 'Ax101', name: 'Monitor', price: 10000, inStock: true },
    { id: 'Ax102', name: 'Keyboard', price: 2000, inStock: false },
    { id: 'Ax103', name: 'Mouse', price: 1500, inStock: true },
    { id: 'Ax104', name: 'Printer', price: 8000, inStock: false },
    { id: 'Ax105', name: 'Webcam', price: 3000, inStock: true }
];
console.log('All Products:', products);
var inStockProducts = products.filter(function (product) { return product.inStock === true; });
console.log('Products in Stock:', inStockProducts);
//*Exercise5:Extend an interface Create Admin that extends User, Add role and permissions
console.log('Exercise5:Extend an interface Create Admin that extends User, Add role and permissions');
var admin1 = {
    id: 'Admin201',
    name: 'Alice',
    email: 'alice@example.com',
    isActive: true,
    role: 'SuperAdmin',
    permissions: ['read', 'write', 'delete']
};
console.log('Admin-1:', admin1);
