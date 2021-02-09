    function getFoodItem(mealId) {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                displayFoods(data.meals);
            });
            
            const displayFoods = foods => {
                const foodsDiv = document.getElementById('foods');
                    foods.forEach(food => {
                        const foodDiv = document.createElement('div');
                            foodDiv.className = 'foodList';
                        const foodInfo = `
                                <div onclick="displayDetails('${food.idMeal}')">
                                <img src="${food.strMealThumb}">
                                <h3>${food.strMeal}</h3>
                                </div>
                        `;
                    foodDiv.innerHTML = foodInfo;
                    foodsDiv.appendChild(foodDiv);
                });
            
        };
        
       
    }

    const displayDetails = name => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${name}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                renderFoodInfo(data.meals[0]);
            });
    };

    const renderFoodInfo = food => {
        const foodDetailsDiv = document.getElementById('foodsDetails');

        foodDetailsDiv.innerHTML = `
        <div class="foodResult">
            <img src="${food.strMealThumb}">
            <h3>${food.strMeal}</h3>
            
            <h3> Ingredients</h3>
            <ul>
                <li>${food.strIngredient1}</li>
                <li> ${food.strIngredient2}</li>
                <li> ${food.strIngredient3}</li>
                <li> ${food.strIngredient4}</li>
                <li> ${food.strIngredient5}</li>
                <li> ${food.strIngredient6}</li>
                <li> ${food.strIngredient7}</li>
                <li> ${food.strIngredient8}</li>
                <li> ${food.strIngredient9}</li>
                <li> ${food.strIngredient10}</li>
            </ul>
        </div>
    `;
    };

    const foodContainer = document.getElementById('foods');
    const searchBtn = document.getElementById('searchBtn');
    const warning = document.getElementById('warning');

    searchBtn.addEventListener('click', function () {
        const foodName = document.getElementById('foodName').value;
        foodContainer.innerHTML = '';
        if (foodName === '' ) {
            warning.style.display = 'block';
        } else {
            getFoodItem(foodName);
            warning.style.display = 'none';
        }
    });
        