var searchBox = document.querySelector('.search-box')
searchBox.addEventListener('keypress', setQuery)
//console.log(searchBox.value)
function setQuery(evt){
	if (evt.keyCode === 13){
		getResults(searchBox.value)
	}
}

const application = {
	application_key : 
	'2c8bc51eee49de5e7e65c698d382a71d',
	application_id: '1438218c',
	
}

function getResults(query){
	fetch(`https://api.edamam.com/api/food-database/v2/parser?app_id=${application.application_id}&app_key=${application.application_key}09&ingr=${query}/*&nutrition-type=cooking*/`)
	.then(response => {
		return response.json().
		catch(err => alert(err))
	}).then(displayResults)

	

} 

function getResults(query){
    fetch(`https://api.edamam.com/api/food-database/v2/parser?app_id=1438218c&app_key=2c8bc51eee49de5e7e65c698d382a71d%09&ingr=${query}&nutrition-type=cooking`)
    .then(response => {
      if (response.ok){
      return response.json()}
      else if (response.status === 404){
        return Promise.reject('error 404')

      }
      
    }).then(displayResults)
    
    
  }

function displayResults(response){

	/*let calories = document.getElementById('calories')
	let caloriesValue = response.hints[0].food.nutrients.ENERC_KCAL
	let carbs = document.getElementById('carbs')
	let carbsValue = response.hints[0].food.nutrients.CHOCDF
	let protein = document.getElementById('proteins')
	let proteinValue = response.hints[0].food.nutrients.PROCNT
	let fat = document.getElementById('fat')
	let fatValue= response.hints[0].food.nutrients.FAT */

	if (response.hints.length === 0 ) {

	/*let calories = document.getElementById('calories')
	let caloriesValue = response.hints[0].food.nutrients.ENERC_KCAL
	let carbs = document.getElementById('carbs')
	let carbsValue = response.hints[0].food.nutrients.CHOCDF
	let protein = document.getElementById('proteins')
	let proteinValue = response.hints[0].food.nutrients.PROCNT
	let fat = document.getElementById('fat')
	let fatValue= response.hints[0].food.nutrients.FAT*/

		caloriesValue = 'FOOD ITEM NOT FOUND'
		calories.value = caloriesValue
		carbsValue    = 'FOOD ITEM NOT FOUND'
		carbs.value = carbsValue
		proteinValue = 'FOOD ITEM NOT FOUND'
		proteins.value = proteinValue
		fatValue       = 'FOOD ITEM NOT FOUND'
		fat.value = fatValue

		setTimeout(clearMessage, 3000)

		console.log(caloriesValue)
	}
	else{
	let calories = document.getElementById('calories')
	let caloriesValue = response.hints[0].food.nutrients.ENERC_KCAL
	let carbs = document.getElementById('carbs')
	let carbsValue = response.hints[0].food.nutrients.CHOCDF
	let protein = document.getElementById('proteins')
	let proteinValue = response.hints[0].food.nutrients.PROCNT
	let fat = document.getElementById('fat')
	let fatValue= response.hints[0].food.nutrients.FAT

	console.log(response)
	
	//console.log(caloriesValue)
	calories.value = caloriesValue.toFixed(2)
	
	//console.log(calories.value)

	
	carbs.value = carbsValue.toFixed(2)
	
	protein.value = proteinValue.toFixed(2)

	
	fat.value = fatValue.toFixed(2)
	}



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

function clearMessage(){
	let calories = document.getElementById('calories')
	let carbs = document.getElementById('carbs')
	let protein = document.getElementById('proteins')
	let fat = document.getElementById('fat')
	//
	calories.value = ''
	carbs.value = ''
	protein.value = ''
	fat.value = ''


}