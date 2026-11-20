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
    twoStar: 5,
    oneStar: 2,

        showRating: function(){
        let totalRatings = this.fiveStar + this.fourStar + this.threeStar + this.twoStar + this.oneStar;

        let avgRating = (5 * this.fiveStar + 4 * this.fourStar + 3 * this.threeStar + 2 * this.twoStar + 1 * this.oneStar)/totalRatings;

        console.log('Total Ratings: ',totalRatings)
        console.log('Avg Rating: ',avgRating)
        }
    },

    
};

// showRating(product.rating);
product.rating.showRating();