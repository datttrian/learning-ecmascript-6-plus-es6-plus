const print = (firstName) => {
  console.log(`Hello ${firstName}`);
};

print("Jenny");

const createEmail = (firstName, price) => {
  const shipping = 5.95;
  console.log(`Hi ${firstName}! Thanks
    Total: ${price}
    Shipping: ${shipping}
    Grand Total: $${price + shipping}
  `);
};

createEmail("Guy", 100);
