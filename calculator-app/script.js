// function display(value) {
//     value!="" ? document.getElementById("result").value += value :document.getElementById("result").value="";
//     }


    // function solve() {
    //     let x = document.getElementById("result").value
    //     let y = math.evaluate(x)
    //     document.getElementById("result").value = y
    //     console.log(y);
    // }

   let string = "";
    let buttons = document.querySelectorAll('.button');
    Array.from(buttons).forEach((button) => {
        button.addEventListener('click', (e) =>{
            if(e.target.innerHTML == '=' ) {
                string = eval(string);
                document.getElementById('result').value = string;
            }
            else{ 
                console.log(e.target)
                string = string + e.target.innerHTML;
                document.getElementsByClassName('result').value = string;
            }
        })
    })