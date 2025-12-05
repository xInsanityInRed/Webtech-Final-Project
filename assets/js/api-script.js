function catCheckboxClicked() {
    var catChecked = document.getElementById("cat");
    var catTextBox = document.getElementById("catSearch");
    
    if (catChecked.checked == true) {
        catTextBox.style.display = "block";
        document.getElementById("dog").checked = false;
        document.getElementById("dogSearch").style.display = "none";
    }
    else {
        catTextBox.style.display = "none";
    }
}

function dogCheckboxClicked() {
    var dogChecked = document.getElementById("dog");
    var dogTextBox = document.getElementById("dogSearch");
    if (dogChecked.checked == true) {
        dogTextBox.style.display = "block";
        document.getElementById("cat").checked = false;
        document.getElementById("catSearch").style.display = "none";
    } else {
        dogTextBox.style.display = "none";
    }
}

function getCatBreed(userCat) {
    const catElement = document.getElementById('getCatApi');
    catElement.textContent = 'Loading...';
    let catBreedQuery = userCat;
    document.getElementById("breedInformation").style.display = "block";

    fetch('https://api.api-ninjas.com/v1/cats?name='+ catBreedQuery,
        { headers: { 'X-Api-Key': '1l91l7+ZKS+OgPwR8aXLaA==6NFqHKeP2uT7BCiQ' }
        })
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                // Following code implementation retrieved from here: https://stackoverflow.com/questions/52097840/how-to-overwrite-text-in-p-tag-using-javascript
                document.getElementById('breedName').innerText = "Breed: " + data[0].name;
                document.getElementById('maxLifeExpectancy').innerText = "Lives up to " + data[0].max_life_expectancy + " years";
                document.getElementById('breedOriginOrEnergy').innerText = "Origin: " + data[0].origin;
                document.getElementById('breedIntelligence').innerText = "Intelligence: " + data[0].intelligence + "/5";
                document.getElementById('breedPlayfulness').innerText = "Playfulness: " + data[0].playfulness + "/5";
                document.getElementById('childSuitability').innerText = "Children friendliness: " + data[0].children_friendly + "/5";
                document.getElementById('cutePetPicture').src = data[0].image_link;
                catElement.textContent = 'Done!';
            } 
            else {
            catElement.textContent = 'No cat found under this breed name!';
            }
        })
    .catch(error => {
        console.error('Error fetching joke:', error);
        catElement.textContent = 'Failed to fetch joke.';
    });
}

function getDogBreed(userDog) {
    const dogElement = document.getElementById('getDogApi');
    dogElement.textContent = 'Loading...';
    let dogBreedQuery = userDog;
    document.getElementById("breedInformation").style.display = "block";

    fetch('https://api.api-ninjas.com/v1/dogs?name='+ dogBreedQuery, {
        headers: { 'X-Api-Key': '1l91l7+ZKS+OgPwR8aXLaA==6NFqHKeP2uT7BCiQ' }
    })
    .then(response => response.json())
    .then(data => {
        if (data.length > 0) {
        // Following code implementation retrieved from here: https://stackoverflow.com/questions/52097840/how-to-overwrite-text-in-p-tag-using-javascript
            document.getElementById('breedName').innerText = "Breed: " + data[0].name;
            document.getElementById('maxLifeExpectancy').innerText = "Lives up to " + data[0].max_life_expectancy + " years";
            document.getElementById('breedOriginOrEnergy').innerText = "Energy levels: " + data[0].energy + "/5";
            document.getElementById('breedIntelligence').innerText = "Trainability: " + data[0].trainability + "/5";
            document.getElementById('breedPlayfulness').innerText = "Playfulness: " + data[0].playfulness + "/5";
            document.getElementById('childSuitability').innerText = "Good with children: " + data[0].good_with_children + "/5";
            document.getElementById('cutePetPicture').src = data[0].image_link;
            dogElement.textContent = 'Done!';
        } 
        else {
        dogElement.textContent = 'No dog found under this breed name!';
        }
    })
    .catch(error => {
        console.error('Error fetching joke:', error);
        dogElement.textContent = 'Failed to fetch joke.';
    });
}