let register_switch_button = document.getElementById("register_switch_button");
let login_switch_button = document.getElementById("login_switch_button");
let register_window = document.getElementById("register_window");
let login_window = document.getElementById("login_window");
let main_window = document.getElementById("main_window");




register_switch_button.onclick = function(){
    main_window.style.width = "700px";
    login_window.style.display = "none";
    register_window.style.display = "block";    
}

login_switch_button.onclick = function(){
    main_window.style.width = "700px";
    login_window.style.display = "block";
    register_window.style.display = "none";
}