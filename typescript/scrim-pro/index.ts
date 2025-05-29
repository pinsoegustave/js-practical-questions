const reviewTotalDisplay = document.querySelector('#reviews');

const reviews = [
    {
        name: 'Sheila',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Adreij',
        stars: 5,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    }
]

function showReviewTotal (value: number) {
    reviewTotalDisplay.innerHTML = 'review total' + value.toString();
}

showReviewTotal(reviews.length);