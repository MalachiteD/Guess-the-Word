player1_name = localStorage.getItem("player1_namekey");
player2_name = localStorage.getItem("player2_namekey");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn: " + player1_name
document.getElementById("player_answer").innerHTML = "Answer Turn: " + player2_name

function send(){
    getWord =  document.getElementById("word").value

    lowercase_word = getWord.toLowerCase();

    console.log("User input in Lowercase: " + lowercase_word);

    // charAt(index number) = returns the CHARACTER at that index number from a string value.
    // ACTIONS : 0 = A, 1=C, 2=T, 3=I , 4=O, 5=N, 6=S
    // charAt(2) = T

    second_letter = lowercase_word.charAt(1)

    console.log("Second Letter " + second_letter)

    index_last = lowercase_word.length - 1;
    last_letter = lowercase_word.charAt(index_last);
    console.log("Last Letter: " + last_letter)

    // example = actions
   // length = 7
   // length/2 = 3.5
   // floor(3.5) = 3
   // floor(3.9) = 3   
   // lowercase_word = javascript = 10/2 = 5
   // Math.floor(5) = 5
   // index_middle = 5
   //charAt(5) = C
   // middle_letter = C


    index_middle = Math.floor(lowercase_word.length/2);
    middle_letter = lowercase_word.charAt(index_middle);
    console.log("Middle Letter: " + middle_letter);

    output1 = lowercase_word.replace(second_letter, "_")
    output2 = output1.replace(middle_letter, "_")
    output3 = output2.replace(last_letter, "_")
    console.log(output3)

    question_word = "<h4>Question: " + output3 + "</h4><br>"
    input_box = "Answer:<input type='text' id='input_text_box'><br><br>"
    check_button = "<button class='btn btn-info' onclick='check()'>Check</button>"

    row = question_word + input_box + check_button

    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
    
    
}


question_turn = "p1"
answer_turn = "p2"

function check(){
    get_answer = document.getElementById("input_text_box").value;
    answer = get_answer.toLowerCase();
    console.log("answer in lowercase - " + answer)
    
    if(answer==lowercase_word){
        if(answer_turn == "p1"){
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score
        }
        else{
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score
        }
    }



    if(question_turn == "p1"){
       question_turn = "p2"
       document.getElementById("player_question").innerHTML = "Question Turn: " + player2_name
    }
    else{
        question_turn = "p1"
        document.getElementById("player_question").innerHTML = "Question Turn: " + player1_name
    }

    if(answer_turn == "p1"){
        answer_turn = "p2"
        document.getElementById("player_answer").innerHTML = "Answer Turn: " + player2_name
    }
    else{
        answer_turn = "p1"
        document.getElementById("player_answer").innerHTML = "Answer Turn: " + player1_name
    }

    document.getElementById("output").innerHTML = "";
    


    


}
