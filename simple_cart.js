const shoppingCart=[
    {name:"shirt",price:700,brand:"eyecats"},
    {name:"pant",price:1700,brand:"eyecats"},
    {name:"shoe",price:2000,brand:"eyecats"},
    {name:"belt",price:600,brand:"eyecats"}
];

function totalCost(products){
    let sum = 0;
   for(let i = 0; i < products.length; i++){
    const product = products[i];
    // console.log(product);
    sum = sum + product.price;
   }
   return sum;
}

const totalExpense = totalCost(shoppingCart);
console.log(totalExpense);