const shoppingCart=[
    {name:"shirt",price:700,brand:"eyecats", quantity:5},
    {name:"pant",price:1700,brand:"eyecats", quantity:3},
    {name:"shoe",price:2000,brand:"eyecats", quantity:2},
    {name:"belt",price:600,brand:"eyecats", quantity:4},
];

function totalCost(products){
    let sum = 0;
   for(let i = 0; i < products.length; i++){
    const product = products[i];
    // console.log(product);
    const productTotalCost = product.price * product.quantity;
    sum = sum + productTotalCost;
   }
   return sum;
}

const totalExpense = totalCost(shoppingCart);
console.log(totalExpense);