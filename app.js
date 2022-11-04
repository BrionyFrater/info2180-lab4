window.onload = function(){
    
    search_button = document.getElementById("search-button");
    

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
                alert(data);
            })
            .catch((error) => {
                console.log("The was an error : " + error);
            }) 

    });
    
};