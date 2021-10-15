function myFunc() {
    var random_colors = ["#c2ff3d", "#ff3de8", "#3dc2ff", "#04e022", "#bc83e6", "#ebb328"];
    var random_margin = ["5px", "10px", "-2px", "3px", "-5px", "7px"];
    var random_degree = ["rotate(5deg)", "rotate(-5deg)", "rotate(0deg)", "rotate(2deg)", "rotate(3deg)", "rotate(-2deg)"]
    var title = document.getElementById("note_title").value;
    var message = document.getElementById("message-text").value;



    var random_no = Math.floor(Math.random() * 6);


    div = document.createElement("div");
    div.className = "notes";
    div.innerHTML = "<h4  style = 'display : inline;'>" + title + "</h4> <button type='button' onmousedown = 'myFunc2(this);' style = 'position: absolute; right: 0px; margin: 10px;' class='btn-close' ></button><hr> <p>" + message + "</p>";
    div.style.margin = random_margin[random_no];
    div.style.backgroundColor = random_colors[random_no];
    div.style.transform = random_degree[random_no]
    document.body.appendChild(div);




}

function myFunc2(a) {

    a.parentElement.remove();




}