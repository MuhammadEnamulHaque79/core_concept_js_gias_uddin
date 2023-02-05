/*
1.if tickets numbers is less than or equal 100, per ticket price:100
2.if tickets numbers is more than 100, but less than or equal 200.
First 100 tickets well be 100 taka/ticket.
rest tickets will be 90 taka per piece.
3.if you purchase more than 200 tickets than per ticket price 70 taka.
*/
/**
 * first100Rate = 100;
 * second100Rate = 90;
 * rest100Rate = 70;
*/
function ticketPriceCalculation(ticketQuantity){
   const first100TicketRate = 100;
   const second100TicketRate = 90;
   const remainingTicketRate = 70;

   if(ticketQuantity <= 100){
    const first100TicketPrice = ticketQuantity * first100TicketRate ;
    return first100TicketPrice;

   }
   else if(ticketQuantity <= 200){
    const first100TicketPrice = 100 * first100TicketRate ;
    const restTicketQuantity = ticketQuantity - 100;
    const restTicketPrice = restTicketQuantity * second100TicketRate;
    const secondStepTotalTicketPrice = first100TicketPrice + restTicketPrice;
    return secondStepTotalTicketPrice;
   }
   else{
    const first100TicketPrice = 100 * first100TicketRate ;
    const second100TicketPrice = 100 * second100TicketRate ;
    const restTicketQuantity = ticketQuantity - 200;
    const restTicketPrice = restTicketQuantity * remainingTicketRate;
    const thirdStepTotalTicketPrice = first100TicketPrice + second100TicketPrice + restTicketPrice;
    return thirdStepTotalTicketPrice;

   }
}
const totalTicketPrice = ticketPriceCalculation(201);
console.log("Your total ticket price :", totalTicketPrice);
