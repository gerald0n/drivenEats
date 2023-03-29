const listFoods = document.querySelectorAll('.food')

listFoods.forEach(food => {
    food.addEventListener('click', () => {
        
        const foods = [];
        for (const food in listFoods) {
            if (Object.hasOwnProperty.call(listFoods, food)) {
                if(listFoods[food].classList.value.includes('outraclasse')) {
                    const [a, b] = listFoods[food].classList.value.split(' ')
                    console.log(listFoods[food]) //identificar se alguma div está utilizando a classe 
                    // console.log(b)
                }
                foods.push(listFoods[food].classList.value)
            }
        }
    })
git 


// console.log(foods)




























// arrFood.forEach(food => {

//     food.addEventListener('click', () => {
        
//         const listClasses = []

//         if (!food.classList.contains('b-enabled')) {
//             food.classList.add('b-enabled')
//             food.querySelector('#price-and-check div').classList.remove(
//                 'i-disabled'
//             )
//         }
//     })
// })

// arrFood.forEach(food => {
//     // quando clicar no quadro de comida
//     food.addEventListener('click', () => {

//         const newArr = []
//         arrFood.forEach(food => {
//             food.classList.forEach(food => {
//                 newArr.push(food) // cria um novo arr listando todas as classes
//             })
//         })

//         if (!newArr.includes('b-enabled')) { //verifica se NÃO há a classe b-enabled, não havendo:
//             food.classList.add('b-enabled') //adiciona a classe b-enabled com borda
//             food.querySelector('#price-and-check div').classList.remove('i-disabled') //remove a classe i-disabled e habilita o icone
//             }
//         else {
//             // TODO
//         }

//             })
// })

// // Ao clicar no food, deve-se verificar se há algum marcado; se houver, é preciso desmarcá-lo e marcar o outro.
// // Se não houver nenhum marcado, marcar.
