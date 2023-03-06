function calculatePrice(item, quantity) {
  if (item === 'apple') {
    return quantity * 0.5;
  } else if (item === 'banana') {
    return quantity * 0.25;
  } else if (item === 'orange') {
    return quantity * 0.75;
  } else {
    throw new Error('Invalid item');
  }
}




const prices = {
  'apple': 0.5,
  'banana': 0.25,
  'orange': 0.75,
};

function calculatePrice(item, quantity) {
  if (!prices[item]) {
    throw new Error('Invalid item');
  }
  return quantity * prices[item];
}

//The bad code is not maintainable, as adding new items to the calculation requires modifying the code. The good code uses a lookup table to store the prices, making it easy to add new items without modifying the code.



