console.log('Learning Objects');

let product = {
    company: 'Nike',
    'item-name': 'Running Shoes',
    Price: 100000,
    avgRating: 4.9,
    numberOfRating: 1, 

    rating:{
    fiveStar: 10,
    fourStar: 5,
    threeStar: 3,
    twoStar: 1,
    oneStar: 1,
    }
};

// rating 
console.log(product.rating.fiveStar)

console.log(product.Price);
console.log(product['item-name']);
let key = 'company'
console.log(product[key]);

console.log( typeof product);

// Modifying the object

product.discount = 50;
product.Price = 10000;

console.log("After Modify",product);

delete product.numberOfRating;

console.log('After delete',product);

