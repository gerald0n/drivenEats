const listFoods = document.querySelectorAll('.food')
const listDrinks = document.querySelectorAll('.drink')
const listDesserts = document.querySelectorAll('.dessert')
const btnOrder = document.querySelector('#btn')
const orderFood = new Object()
const orderDrink = new Object()
const orderDessert = new Object()

let clientName
let clientAddress

const containerModal = document.querySelector('.modal')
const cancelOrder = document.querySelector('#cancel-order')
const confirmOrder = document.querySelector('#confirm-order')

btnOrder.addEventListener('click', () => {
    const modal = document.querySelector('.content-modal')
    clientName = prompt('Digite seu nome: ')
    clientAddress = prompt('Digte o endereço de entrega: ')

    modal.innerHTML = `
    <div class="content" id="content-1">
        <p>${orderFood.name}</p>
        <p>${orderFood.price.toFixed(2)}</p>
    </div>
    <div class="content" id="content-2">
        <p>${orderDrink.name}</p>
        <p>${orderDrink.price.toFixed(2)}</p>
    </div>
    <div class="content" id="content-2">
        <p>${orderDessert.name}</p>
        <p>${orderDessert.price.toFixed(2)}</p>
    </div>
    <div class="content" id="total-price">
        <p>TOTAL</p>
        <p>R$ ${(
            orderFood.price +
            orderDrink.price +
            orderDessert.price
        ).toFixed(2)}</p>
    </div>
    <div class="content" id="client-name">
        <p>Nome:</p>
        <p>${clientName}</p>
    </div>
    <div class="content" id="client-address">
        <p>Endereço:</p>
        <p>${clientAddress}</p>
    </div>`.replaceAll('.', ',')

    containerModal.style.display = 'flex'
})

cancelOrder.addEventListener('click', () => {
    containerModal.style.display = 'none'
})

confirmOrder.addEventListener('click', () => {
    const message = `Olá, gostaria de fazer pedido: \n- Prato: ${
        orderFood.name
    } \n- Bebida: ${orderDrink.name} \n- Sobremesa: ${
        orderDessert.name
    } \nTotal: R$ ${(
        orderFood.price +
        orderDrink.price +
        orderDessert.price
    ).toFixed(2)} \n\nNome: ${clientName}\nEndereço: ${clientAddress}`.replaceAll('.', ',')

    window.open(
        `https://wa.me/+5584981583718?text=${encodeURIComponent(message)}`
    )
})

listFoods.forEach(food => {
    food.addEventListener('click', () => {
        check(food)

        listFoods.forEach(foodClass => {
            uncheck(foodClass, food)
        })
        order()
        orderFood.name = food.querySelector('h3').innerText
        orderFood.price = Number(
            food
                .querySelector('#price-and-check span')
                .innerText.split('')
                .splice(3)
                .join('')
                .replace(',', '.')
        )
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
        orderDrink.price = Number(
            drink
                .querySelector('#price-and-check span')
                .innerText.split('')
                .splice(3)
                .join('')
                .replace(',', '.')
        )
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
        orderDessert.price = Number(
            dessert
                .querySelector('#price-and-check span')
                .innerText.split('')
                .splice(3)
                .join('')
                .replace(',', '.')
        )
    })
})

const order = () => {
    if (document.getElementsByClassName('b-enabled').length == 3) {
        btnOrder.disabled = false
        btnOrder.innerText = 'Fechar Pedido'
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
