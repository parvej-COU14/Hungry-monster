
function getMealList(){
    const searchInputText=document.getElementById("search-input").value;
    
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputText}`)
    .then(res=>res.json())
    .then(data=>{
        const detailsDiv=document.getElementById("main-card");
    for (let i= 0; i < data.meals.length; i++) {
        const detail = data.meals[i];
       

        const detailDiv=document.createElement('div');
        detailDiv.className='detail'
        const detailInfo=`
        <img class="img"src="${detail.strMealThumb}"/>
        <h3 class="name">${detail.strMeal}</h3>`
        detailDiv.innerHTML=detailInfo;
      
        detailsDiv.appendChild(detailDiv);
        console.log(detailsDiv)
        
    }
    })
}


   
   
   
    

