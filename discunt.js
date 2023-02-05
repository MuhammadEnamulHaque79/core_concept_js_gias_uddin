/*
1.if tickets numbers is less than 100, per ticket price:100
2.if tickets numbers is more than 100, but less than 200.First 100 tickets well be 100/ticket.
rest tickets will be 90 taka per piece.
3.if you purchase more than 200 tickets than per ticket price 70 taka.
*/

function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;

    if(ticketQuantity <= 100){
        const Price = ticketQuantity * first100Rate;
        return Price;
    }
    else if(ticketQuantity <= 200){
        const first100Price = 100 * first100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const secondStepTotalPrice = first100Price + restTicketPrice;
        return secondStepTotalPrice;
    }
    else{
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restTicketRate;
        const thirdStepTotalPrice = first100Price + second100Price + restTicketPrice;
        return thirdStepTotalPrice;
    }
}
const price = ticketPrice(201);
console.log("total ticket price :", price);
      



