//* inversion of control
//* CallBack function
// const cart = ["pent", "watch"];
// createOrderAPI(card, (orderId) => {
//   procedToPayment(orderId);
// });

//* return promise
// const promise = createOrder(cart);
//* {data: undefined} initially
//* take some time to execute
//* after execution {data: orderDetails}

//* call this after promise filled
// promise.then((orderId) => {
//   procedToPayment(orderId);
// });

const GITHUB_API = "https://api.github.com/users/iamtejasj";

const user = fetch(GITHUB_API);
console.log(user); //* print promise
//* initially return a promise pending
//* After some time return a promise fullfilled

user.then((data) => {
  return data.json(); //* return a data object
});
