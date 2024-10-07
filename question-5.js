// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้

function calculateTotalPrice(products, promotionCode) {
  let totalProduct = 0;

  if (promotionCode === "SALE20") {
    for (let index = 0; index < products.length; index++) {
      totalProduct =
        totalProduct + products[index].price * products[index].quantity;
    }
    return totalProduct - totalProduct * 0.2;
  } else if (promotionCode === "SALE50") {
    for (let index = 0; index < products.length; index++) {
      totalProduct =
        totalProduct + products[index].price * products[index].quantity;
    }
    return totalProduct - totalProduct * 0.5;
  } else {
    for (let index = 0; index < products.length; index++) {
      totalProduct =
        totalProduct + products[index].price * products[index].quantity;
    }
    return totalProduct;
  }
}

console.log(calculateTotalPrice(products, ""));
console.log(calculateTotalPrice(products, "SALE20"));
console.log(calculateTotalPrice(products, "SALE50"));
