var searchBox = document.querySelector('.search-box')
searchBox.addEventListener('keypress', setQuery)
//console.log(searchBox.value)
function setQuery(evt){
	if (evt.keyCode === 13){
		getResults(searchBox.value)
	}
}

/*const application = {
	application_key : 
	'2c8bc51eee49de5e7e65c698d382a71d',
	application_id: '1438218c',
	query: 'sugar'
}*/

function getResults(query){
	fetch(`https://api.edamam.com/api/food-database/v2/parser?app_id=1438218c&app_key=2c8bc51eee49de5e7e65c698d382a71d%09&ingr=${query}&nutrition-type=cooking`)
	.then(response => {
		return response.json()
		//response
		//const response1 = response.json()
	}).then(displayResults)
	

}

function displayResults(response){
	//console.log(response1.hints[0].food.nutrients.ENERC_KCAL)
	let calories = document.getElementById('calories')
	let caloriesValue = response.hints[0].food.nutrients.ENERC_KCAL
	//console.log(caloriesValue)
	calories.value = caloriesValue
	
	//console.log(calories.value)

	let carbs = document.getElementById('carbs')
	let carbsValue = response.hints[0].food.nutrients.CHOCDF
	carbs.value = carbsValue
	let protein = document.getElementById('proteins')
	let proteinValue = response.hints[0].food.nutrients.PROCNT
	protein.value = proteinValue

	let fat = document.getElementById('fat')
	let fatValue= response.hints[0].food.nutrients.FAT
	fat.value = fatValue
	



}


/*async function getInfo(query) {
    const response = await fetch(`https://api.edamam.com/api/food-database/v2/parser?app_id=1438218c&app_key=2c8bc51eee49de5e7e65c698d382a71d%09&ingr=${query}&nutrition-type=cooking`);

    const responseData = await response.json();
	let calories = responseData.hints[0].food.nutrients.ENERC_KCAL
	let carbs = responseData.hints[0].food.nutrients.CHOCDF
	let fat = responseData.hints[0].food.nutrients.FAT
	let protein = responseData.hints[0].food.nutrients.PROCNT

    return {calories, carbs, fat, protein}
	

  }

console.log(getInfo())*/
