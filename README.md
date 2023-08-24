## Cash Register

This project involves a plain JavaScript implementation of a Cash Register. It was developed as part of the FreeCodeCamp "JavaScript Algorithms and Data Structures" course certification.

### Project Description

The Cash Register project aims to design a cash drawer function called `checkCashRegister()` that processes transactions. The function takes the purchase price, payment, and cash-in-drawer (CID) as inputs and determines the change to be returned to the customer. The function returns an object with a status key and a change key, providing information about the transaction outcome.

### Challenge Requirement

**Challenge:** Design a `checkCashRegister()` function that accepts purchase price, payment, and cash-in-drawer (CID) as arguments.

**Function Behavior:**
- Return `{status: "INSUFFICIENT_FUNDS", change: []}` if cash-in-drawer is less than the change due or exact change cannot be returned.
- Return `{status: "CLOSED", change: [...CID]}` if cash-in-drawer is equal to the change due.
- Otherwise, return `{status: "OPEN", change: [...]}` with change due in coins and bills, sorted in highest to lowest order.

**Currency Units:**
- Penny: $0.01
- Nickel: $0.05
- Dime: $0.1
- Quarter: $0.25
- Dollar: $1
- Five Dollars: $5
- Ten Dollars: $10
- Twenty Dollars: $20
- One-hundred Dollars: $100

### Example Usage

For example, given a cash-in-drawer array:
```javascript
[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
```
### Technologies Used

- Plain JavaScript

This project showcases foundational JavaScript skills and the ability to solve algorithmic challenges.
