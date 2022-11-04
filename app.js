window.onload = function(){
    
    let search_button = document.getElementById("search-button");
    

    search_button.addEventListener("click", () => {
        
        fetch("superheroes.php")
            .then((response) => {
                if(response.ok){
                    return response.text();
                }else{
                    return Promise.reject("Something went wrong");
                }
            })
            .then((data) => {
                result = document.getElementById("result");
                result.textContent = data;
                
            })
            .catch((error) => {
                console.log("The was an error : " + error);
            }) 

    });
    
};