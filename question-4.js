// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้

let invenQuanlity = inventory[0].quantity;
let invenName = "";
for (let index = 0; index < inventory.length; index++) {
  console.log(inventory[index].quantity);
  if (invenQuanlity > inventory[index].quantity) {
    invenQuanlity = inventory[index].quantity;
    invenName = inventory[index].name;
  }
}
console.log(
  `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${invenName} ซึ่งมี ${invenQuanlity} ชิ้น`
);

