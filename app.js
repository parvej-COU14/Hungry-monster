const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelector('.meal-details-content');

 document.getElementById("search-input").addEventListener("keypress", function(event) {
   if (event.key == 'Enter') {
          document.getElementById("search-btn").click();
     }
    });
    
       searchBtn.addEventListener('click', function () {
        const searchInputText=document.getElementById("search-input").value;
       fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputText}`)
        .then(res=>res.json())
        .then(data=>{
             let html="";
           if(data.meals){
            data.meals.forEach(meal => {
                html +=`
                <div class = "meal-item" data-id = "${meal.idMeal}">
                <div class = "meal-img">
                    <img src = "${meal.strMealThumb}" alt = "food">
                </div>
                <div class = "meal-name">
                    <h3>${meal.strMeal}</h3>
                    
                </div>
            </div>
                `;
                
            });
            mealList.classList.remove('notFound');
        } else{
            html = "Sorry, we didn't find any meal!";
            mealList.classList.add('notFound');
        }
       mealList.innerHTML = html;
    });
})
   
//  Meal details

     const mealFinder=document.getElementById('meal');
     mealFinder.addEventListener('click',function(e){
        e.preventDefault();
         
            let mealItem = e.target.parentElement.parentElement;
            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
            .then(response => response.json())
            .then(data => mealRecipeModal(data.meals));
        
     })
   // create a modal
   function mealRecipeModal(meal){
    console.log(meal);
    meal = meal[0];
    let html = `
      <div class = "recipe-meal-img">
            <img src = "${meal.strMealThumb}" alt = "">
        </div>
        <h2 class = "recipe-title">${meal.strMeal}</h2>
        <h4> Ingredients </h4>
        <div class = "recipe-instruct">
           
            <p>${meal.strInstructions}</p>
        </div>
        
    `;
    mealDetailsContent.innerHTML = html;
    mealDetailsContent.parentElement.classList.add('showRecipe');
}
   
   
   
   
    

