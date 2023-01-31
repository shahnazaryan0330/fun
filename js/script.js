const feeInput = document.querySelectorAll('.feeInput')
feeInput[2].checked = true
let varFee = +feeInput[2].value

feeInput.forEach(item => {
   item.addEventListener('change', event => {
      const checkedInput = document.querySelectorAll('.feeInput')

      checkedInput.forEach(item => {
         if (item.checked) {
            item.checked = false
         }
      })
      event.target.checked = true
      varFee = +event.target.value
      calc()
   })
})

const inputEvent = document.querySelector('#purchase')

inputEvent.addEventListener('input', () => {calc()})

function calc() {
   const purchase = +inputEvent.value
   const result = document.querySelector('.result')
   const sell = document.querySelector('#sell')

   let purchaseToRub = purchase * 73
   let funpayFee = (purchaseToRub + varFee) * 0.03

   let finalPrice = Math.ceil(purchaseToRub + varFee + funpayFee)

   sell.value = purchase ? finalPrice : ''
   result.innerHTML = purchase ? varFee : 'Service fee'
}

// 

const data = {
   steam: [
      {
         shop: 'COINBEE Steam Gift Card',
         products: [
            { name: '50 TRY', price: '3$' },
            { name: '100 TRY', price: '6$' },
            { name: '200 TRY', price: '12$' },
            { name: '250 TRY', price: '16$' },
            { name: '300 TRY', price: '20$' },
         ],
         url: "https://www.coinsbee.com/ru/Steam-bitcoin"
      },
      {
         shop: 'TOKENSTORE Steam Gift Card',
         products: [
            { name: '50 TRY', price: '2,7$' },
            { name: '100 TRY', price: '5,4$' },
            { name: '200 TRY', price: '11$' },
         ],
         url: "https://s.binance.com/F4WC9KeZ"
      },
   ],
   key: [
      {
         shop: 'Kinguin',
         products: [
            {
               name: 'Steam, Origin keys'
            }
         ],
         url: "https://www.kinguin.net/",
      },
      {
         shop: 'Eneba',
         products: [
            {
               name: 'Steam, Origin keys'
            }
         ],
         url: "https://www.eneba.com/",
      },
   ],
   empty: ['Empty']
}

const searchBtn = document.querySelector('.search')

searchBtn.addEventListener('input', event => {
   let dataKey = (event.target.value).toLowerCase()
   const list = document.querySelector('.list')
   list.innerHTML = ''

   const searchedData = data.hasOwnProperty(dataKey) ? data[dataKey] : data.empty

   searchedData.forEach(item => {
      const x = createTask(item)

      list.appendChild(x)
   });

})

function createTask(data) {
   // Task
   const task = document.createElement('div')
   task.classList.add('task')

   // Shop name
   const a = document.createElement('a')
   a.setAttribute('href', data.url)
   a.setAttribute('target', '_blank')
   a.innerHTML = data.shop
   task.appendChild(a)

   // ul
   const ul = document.createElement('ul')

   //products
   data.products.forEach(item => {
      const li = document.createElement('li')


      // product name
      const span1 = document.createElement('span')
      span1.classList.add('product')
      span1.innerHTML = item.name
      li.appendChild(span1)

      // product price
      const span2 = document.createElement('span')
      span2.classList.add('price')
      span2.innerHTML = item.price
      li.appendChild(span2)

      li.addEventListener('click', event => {
         let num = +event.target.lastChild.innerHTML.slice(0, -1)
         inputEvent.value = num

         calc(num)
      })

      ul.appendChild(li)
   })

   task.appendChild(ul)

   return task
}

// 

const gameName = document.querySelector('.gameName')
const gameKey = document.querySelector('.gameKey')

gameName.addEventListener('input', event => {
   const text = document.querySelector('.text')
   const gameKey = document.querySelector('.gameKey')

   const template = `
   <div style="font-size: 18px;">
      <div>Название товара: <span>${event.target.value}</span></div>
      <div>Ключ: <span>${gameKey.value}</span></div>

      <div style="margin-top: 15px;">Спасибо за покупки❗</div>
      <div>Если хотите оставьте отзыв, вы мне очень поможете 🙂</div>
   </div>
   `

   text.innerHTML = template
})

gameKey.addEventListener('input', event => {
   const text = document.querySelector('.text')
   const gameName = document.querySelector('.gameName')

   const template = `
   <div style="font-size: 18px; margin-top: 30px;">
      <div>Название товара: <span>${gameName.value}</span></div>
      <div>Ключ: <span>${event.target.value}</span></div>

      <div style="margin-top: 15px;">Спасибо за покупки❗</div>
      <div>Если хотите можете оставить отзыв, вы мне очень поможете 🙂</div>
   </div>
   `

   text.innerHTML = template
})