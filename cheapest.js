const phones = [
    {name:"samsung",camera:"12mpx",storage:"32gb",price:615000,color:"silver"},
    {name:"walton",camera:"12mpx",storage:"32gb",price:320000,color:"silver"},
    {name:"symphony",camera:"12mpx",storage:"32gb",price:295000,color:"silver"},
    {name:"realMe",camera:"12mpx",storage:"32gb",price:306000,color:"silver"},
    {name:"nokia",camera:"12mpx",storage:"32gb",price:345000,color:"silver"},
    {name:"vivo",camera:"12mpx",storage:"32gb",price:40000,color:"silver"},
    {name:"htg",camera:"12mpx",storage:"32gb",price:45000,color:"silver"},
    {name:"sony",camera:"12mpx",storage:"32gb",price:570000,color:"silver"},
    {name:"zte",camera:"12mpx",storage:"32gb",price:550500,color:"silver"},
];

function cheapestPhone(){
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        // console.log(phone);
        
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
      
    }
    return cheapest;
}

const mySelectedPhone = cheapestPhone(phones);
console.log(mySelectedPhone);
