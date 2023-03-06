function display(value) {
    value!="" ? document.getElementById("result").value += value :document.getElementById("result").value="";
    }


    function solve() {
        let x = document.getElementById("result").value
        let y = math.evaluate(x)
        document.getElementById("result").value = y
        console.log(y);
    }