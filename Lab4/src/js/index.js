
const countInputs = document.getElementsByClassName('count-product')
const totalProducts = document.getElementsByClassName('total-product')
const circles = document.getElementsByClassName('galary-indexes-circle')
const galaryPhoto = document.getElementById('galaryPhoto')
const total = document.getElementById('total')
const cart = document.getElementById('cart')
const band = document.getElementById('band')
let currentIdexOfElement = 0


const goods = [
	{
		name: 'Himars',
		price: 1.6, 
		count: 0,
		total: 0,
		img: 'https://s0.rbk.ru/v6_top_pics/media/img/5/12/756541060352125.jpg'
	},
	{
		name: 'MLRS 270',
		price: 2.2, 
		count: 0,
		total: 0,
		img: 'https://apostrophe.ua/uploads/image/cb53eb37570f5425d16d2f214f13dc41.jpg'
	},
	{
		name: 'Vilkha',
		price: 1.1, 
		count: 0,
		total: 0,
		img: 'https://telegraf.com.ua/static/storage/originals/d/d2/576df7faf8c6d19f9c4ed26ab02ced2d.jpg'
	},
	{
		name: 'LAR 160',
		price: 2, 
		count: 0,
		total: 0,
		img: 'https://wikiwarriors.org/mediawiki/images/7/75/LAR-160.jpg'
	}
]


circles[0].classList.add('galary-indexes-circle-selected')


band.onclick =  (e) => {

	const elemnt = e.target

	if(elemnt.tagName !== 'BUTTON') {
		return
	}

	countInputs[elemnt.value].value++

	countTotalForProduct(elemnt.value)
	countTotal()

}


galaryPhoto.src= goods[0].img

setInterval(() => {

	circles[currentIdexOfElement].classList.remove('galary-indexes-circle-selected')

	currentIdexOfElement++ 
	if(currentIdexOfElement === goods.length){
		currentIdexOfElement = 0
	} 
	
	circles[currentIdexOfElement].classList.add('galary-indexes-circle-selected')
    galaryPhoto.src= goods[currentIdexOfElement].img


}, 4000)



 for (let i = 0; i < countInputs.length; i++) {
	countInputs[i].addEventListener('input', ()=> {
		countTotalForProduct(i)
		countTotal()
	} )
}


function countTotalForProduct(index){
	goods[index].total =  (countInputs[index].value  * goods[index].price).toFixed(2)
	totalProducts[index].innerHTML  = (countInputs[index].value  * goods[index].price).toFixed(2)
	
}

function countTotal () {
	let totalSum = 0
	goods.forEach(element => totalSum+= +element.total )
	total.innerHTML = ''
	total.innerHTML = 'Total: ' + totalSum.toFixed(2)
}