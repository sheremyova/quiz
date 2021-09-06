const start_btn = document.querySelector(".start_button button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");


start_btn.onclick = () => {
    info_box.classList.add("activeInfo"); 
}

exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); 
}


continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); 
    quiz_box.classList.add("activeQuiz"); 
    showQuestions(0);
}

let que_count = 0;
const next_btn = document.querySelector(".next_button");

next_btn.onclick = () => {
    if (que_count < questions.length - 1) {
        que_count++;
        showQuestions(que_count);
    } else {
        console.log("Questions completed");
    }
}

function showQuestions(index) {
    const que_text = document.querySelector(".que_text");
    const option_list = document.querySelector(".option_list");
    let que_tag = '<span>' + questions[index].number + ". " + questions[index].question + '</span>';
    let option_tag = '<div class="option"><label><input type="radio" name="question_one" value="to buy">' + ' ' + questions[index].options[0] + '<span></span></label></div>'
                     + '<div class="option"><label><input type="radio" name="question_one" value="to buy">' + ' ' + questions[index].options[1] + '<span></span></div>'
                     + '<div class="option"><label><input type="radio" name="question_one" value="to buy">' + ' ' + questions[index].options[2] + '<span></span></div>'
                     + '<div class="option"><label><input type="radio" name="question_one" value="to buy">' + ' ' + questions[index].options[3 ] + '<span></span></div>'
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag; 
}