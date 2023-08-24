function checkCashRegister(price, cash, cid) {
    let arr = [...cid];
    let money = cash - price;
  
    let index;
    let value;
    let divide;
    let changeValue;
    let change = [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]
    let amount = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.10], ["QUARTER", 0.25], ["ONE", 1.00], ["FIVE", 5.00], ["TEN", 10.00], ["TWENTY", 20.00], ["ONE HUNDRED", 100.00]];
    for(let i=0; i<arr.length; i++){
      if (arr[i][1]<amount[i][1]){
        arr.splice(i,1);
        amount.splice(i,1);
        i-=1
      }
    }
    //calculate
  
    //starting point for for loop (from the end)
    let start = amount.length - 1;
  
    for (let i=start; i>=0; i--){
      value = arr[i][1];
      changeValue = 0;
      if (amount[i][1]<=money || value > 0){
        divide = money/amount[i][1];
        divide = Math.trunc(divide);
        for (let x=1; x<=divide; x++){
            changeValue+=amount[i][1];
            change[i][1] = changeValue;
            value = parseFloat((value - amount[i][1]).toFixed(2));
            arr[i][1] = value;
            money = parseFloat((money - amount[i][1]).toFixed(2));
            if (value <= 0){
              break
            }
          }
        }
      }
    
  
    //fix decimals 
    let numDec;
    for (let i=0; i<change.length; i++){
      if (change[i][1]>0.00){
        numDec=change[i][1];
        numDec = numDec.toFixed(2).replace(/\.?0+$/, "");
        change[i][1] = parseFloat(numDec, 10);;
      }
    }
  
    //result log
    let counter=0;
    let empty=false;
    let changeBack = [];
    for (let i=start; i>=0; i--){
      if(change[i][1]!=0){
        changeBack.push(change[i]);
      }
    }
  
    for (let i=0; i<arr.length; i++){
      if (arr[i][1] == 0){
        counter++;
      }
    }
    if (counter==arr.length){
      empty=true;
    }
  
    let open = {status: "OPEN", change: changeBack};
    let closed = {status: "CLOSED", change: change};
    let insufficient = {status: "INSUFFICIENT_FUNDS", change: []}
  
    if (money == 0 && empty == false){
      return open;
    }
  
  
    if (money == 0 && empty == true){
     return closed;
    }
    
    if (money > 0){
      return insufficient;
    }
  
  }
  
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));