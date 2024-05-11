function addUser(){
    player1_name_input = document.getElementById("player1_name_input").value
    player2_name_input = document.getElementById("player2_name_input").value
    //key-value pair
    localStorage.setItem("player1_namekey", player1_name_input)
    localStorage.setItem("player2_namekey", player2_name_input)
    //page redirection
    window.location = "gamepage.html"
}
