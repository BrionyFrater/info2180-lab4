window.onload = function(){
    
    let search_button = document.getElementById("search-button");
    

    search_button.addEventListener("click", () => {
        
        charater = document.getElementById("search-bar").value; 
       
        fetch("superheroes.php?query=" + charater)
            .then((response) => {
                if(response.ok){
                    return response.text();
                }else{
                    return Promise.reject("Something went wrong");
                }
            })
            .then((data) => {
                result = document.getElementById("result");
                result.innerHTML = data;
                
            })
            .catch((error) => {
                console.log("The was an error : " + error);
            }) 

    });
    
};