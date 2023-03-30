const listFoods = document.querySelectorAll('.food')
const listDrinks = document.querySelectorAll('.drink')
const listDesserts = document.querySelectorAll('.dessert')

listFoods.forEach(food => {
    food.addEventListener('click', () => {
        check(food)
        listFoods.forEach(foodClass => {
            uncheck(foodClass, food)
        })
    })
})

listDrinks.forEach(drink => {
    drink.addEventListener('click', () => {
        check(drink)
        listDrinks.forEach(drinkClass => {
            uncheck(drinkClass, drink)
        })
    })
})

listDesserts.forEach(dessert => {
    dessert.addEventListener('click', () => {
        check(dessert)
        listDesserts.forEach(dessertClass => {
            uncheck(dessertClass, dessert)
        })
    })
})








const check = divClicked => {
    divClicked.classList.add('b-enabled')
    divClicked
        .querySelector('#price-and-check div')
        .classList.remove('i-disabled')
}
const uncheck = (divCurrent, divClicked) => {
    if (
        divCurrent.classList.value.includes('b-enabled') &&
        divCurrent != divClicked
    ) {
        divCurrent.classList.remove('b-enabled')
        divCurrent
            .querySelector('#price-and-check div')
            .classList.add('i-disabled')

        divClicked.classList.add('b-enabled')
        divClicked
            .querySelector('#price-and-check div')
            .classList.remove('i-disabled')
    }
}