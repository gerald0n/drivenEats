const listFoods = document.querySelectorAll('.food')

const arrFood = [...listFoods]

arrFood.forEach(food => {
    food.addEventListener('click', () => {
        if (
            food.querySelector('#price-and-check div').classList.item(0) ===
            'i-disabled'
        ) {
            food.classList.add('b-enabled')
            food.querySelector('#price-and-check div').classList.remove(
                'i-disabled'
            )
        } else {
            food.classList.remove('b-enabled')
            food.querySelector('#price-and-check div').classList.add(
                'i-disabled'
            )
        }
    })
})
