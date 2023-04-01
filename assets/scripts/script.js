const listFoods = document.querySelectorAll('.food')
const listDrinks = document.querySelectorAll('.drink')
const listDesserts = document.querySelectorAll('.dessert')
const btnOrder = document.querySelector('#btn')
const orderFood = new Object()
const orderDrink = new Object()
const orderDessert = new Object()

btnOrder.addEventListener('click', () => {
    console.log(orderFood, orderDrink, orderDessert)
})

listFoods.forEach(food => {
    food.addEventListener('click', () => {
        check(food)

        listFoods.forEach(foodClass => {
            uncheck(foodClass, food)
        })
        order()
        orderFood.name = food.querySelector('h3').innerText
        orderFood.price = food.querySelector('#price-and-check span').innerText
    })
})

listDrinks.forEach(drink => {
    drink.addEventListener('click', () => {
        check(drink)
        listDrinks.forEach(drinkClass => {
            uncheck(drinkClass, drink)
        })
        order()
        orderDrink.name = drink.querySelector('h3').innerText
        orderDrink.price = drink.querySelector(
            '#price-and-check span'
        ).innerText
    })
})

listDesserts.forEach(dessert => {
    dessert.addEventListener('click', () => {
        check(dessert)

        listDesserts.forEach(dessertClass => {
            uncheck(dessertClass, dessert)
        })
        order()
        orderDessert.name = dessert.querySelector('h3').innerText
        orderDessert.price = dessert.querySelector(
            '#price-and-check span'
        ).innerText
    })
})

const order = () => {
    if (document.getElementsByClassName('b-enabled').length == 3) {
        btnOrder.disabled = false
        btnOrder.innerText = 'Finalizar Pedido'
    }
}

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
