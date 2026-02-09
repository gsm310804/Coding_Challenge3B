console.log(`Coding_Challenge_3b Mirayda Gurtekin`);

let inventory = [
    { sku: "SKU-01", name: "Laptop", price: 999.99, quantity: 10 },
    { sku: "SKU-02", name: "Smartphone", price: 499.99, quantity: 25 },
    { sku: "SKU-03", name: "Tablet", price: 299.99, quantity: 15 },
    { sku: "SKU-04", name: "Headphones", price: 199.99, quantity: 30 },
];
inventory.forEach(product => {
    console.log(`SKU: ${product.sku}, Name: ${product.name}, Price: $${product.price}, Stock: ${product.quantity}`);
});

inventory.push({ sku: "SKU-05", name: "Smartwatch", price: 199.99, quantity: 20 });
console.log("Added New Item: SKU-05, Smartwatch, $199.99, quantity: 20");

let removedItem = inventory.pop();
console.log(`Removed product: ${removedItem.name}`);
console.log("Updated Inventory:");

inventory[1].price = 449.99;
console.log(`Updated Price of SKU-02 to $449.99`);

inventory[2].quantity += 5;
console.log(`Increased Stock of SKU-03 by 5 units`);

let orders = [
    {
        orderId: "ORDER-1001",
        items: [
            { sku: "SKU-01", quantity: 1 },
            { sku: "SKU-03", quantity: 2 }
        ]
    },
    {
        orderId: "ORDER-1002",
        items: [
            { sku: "SKU-02", quantity: 1 },
        ]
    }
];
orders.forEach(order => {
    let canProcess = true;


    //skips to part 5 

    let totalInventoryValue = inventory.reduce((total, item) => {
    return total + item.price * item.quantity;
}, 0);
console.log(`Total inventory value: $${totalInventoryValue.toFixed(2)}`);

const lowStockItems = inventory.filter(item => item.quantity <= 5);
console.log("Low-stock items:");
lowStockItems.forEach(item => {
    console.log(`${item.sku} | ${item.name} | Stock: ${item.quantity}`);
});

const priceList = inventory.map(item => `${item.sku} — $${item.price.toFixed(2)}`);
console.log("Price list:");
priceList.forEach(price => console.log(price));