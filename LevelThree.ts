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
