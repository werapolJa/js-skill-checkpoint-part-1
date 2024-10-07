// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้

inventory[0].quantity = 200;
inventory.push({ name: "Orange", price: 20, quantity: 300 });

let priceAll = 0;
for (let index = 0; index < inventory.length; index++) {
  priceAll = priceAll + inventory[index].quantity * inventory[index].price;
}

console.log(`มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก ${priceAll} บาท`);
