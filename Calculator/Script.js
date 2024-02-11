let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click',(e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
        string += e.target.innerHTML;
        input.value = string;
        }
        document.querySelector("input").focus();
    })
})

input.addEventListener("keydown", (e) => {
    console.log(e);
    const key = e.key;
    if (key == "Backspace" || key == "Delete") {
      string = document.querySelector("input").value;
    } else if (key == "=" || key == "Enter") {
      string = document.querySelector("input").value;
      string = eval(string);
      document.querySelector("input").value = string;
    }
  });
