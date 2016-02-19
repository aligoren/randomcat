function get_cat() {
    var randomFoldNum = Math.floor(Math.random()*5) + 1;
    var randomNumber;

    if(randomFoldNum == 1) {
    	randomNumber = Math.floor(Math.random()*100) + 1;
    } else if(randomFoldNum == 2) {
    	randomNumber = Math.floor(Math.random()*34) + 1;
    } else if(randomFoldNum == 3) {
    	randomNumber = Math.floor(Math.random()*46) + 1;
    } else if(randomFoldNum == 4) {
    	randomNumber = Math.floor(Math.random()*59) + 1;
    } else if(randomFoldNum == 5) {
    	randomNumber = Math.floor(Math.random()*89) + 1;
    }
    document.body.innerHTML += "<div id='cats'><h3>CLICK IMAGE FOR A NEW CAT</h3><img onclick='reload_cat();' src='" + randomFoldNum + "/" + randomNumber + ".jpg' /></div>";
}

function reload_cat() {
    var randomFoldNum = Math.floor(Math.random()*5) + 1;
    var randomNumber;

    if(randomFoldNum == 1) {
    	randomNumber = Math.floor(Math.random()*100) + 1;
    } else if(randomFoldNum == 2) {
    	randomNumber = Math.floor(Math.random()*34) + 1;
    } else if(randomFoldNum == 3) {
    	randomNumber = Math.floor(Math.random()*46) + 1;
    } else if(randomFoldNum == 4) {
    	randomNumber = Math.floor(Math.random()*59) + 1;
    } else if(randomFoldNum == 5) {
    	randomNumber = Math.floor(Math.random()*89) + 1;
    }
    document.getElementById('cats').innerHTML = "<h3>CLICK IMAGE FOR A NEW CAT</h3><img onclick='reload_cat();' src='" + randomFoldNum + "/" + randomNumber + ".jpg' />";
}
