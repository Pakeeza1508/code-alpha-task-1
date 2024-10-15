 
var result = document.getElementById("result"); //this line gives value of input result tag 
// console.log(result.value);

 // Function to display a number selected by user on screen
function add(character) {
   if (result.value === null || result.value === "0") {
       result.value = character;
   } else {
       result.value += character;
   }
}

let clear = (() => {
       result.value = "0";
})
document.getElementById('clear').addEventListener('click', clear);

// Cos function
function cos() {
   result.value = Math.cos(parseFloat(result.value));
}

// Sin function
function sin() {
   result.value = Math.sin(parseFloat(result.value));
}

// Tan function
function tan() {
   result.value = Math.tan(parseFloat(result.value));
}

// Sqrt function
function sqrt() {
   result.value = Math.sqrt(parseFloat(result.value));
}

// Sq function
function sq() {
   result.value = Math.pow(parseFloat(result.value), 2);
}

// In function (Natural Log)
function In() {
   result.value = Math.log(parseFloat(result.value));
}

// Exp function (Exponentiation)
function exp() {
   result.value = Math.exp(parseFloat(result.value));
}

// Equal function
function equal() {
   try {
       // Evaluate the expression in the display
       result.value = eval(result.value);
   } catch (e) {
       alert("Error in expression");
       result.value = '';
   }
}

// Delete function
function del() {
   result.value = result.value.substring(0, result.value.length - 1);
}
// check valid function 
function chkValid() {
   for (var i = 0; i < result.value.length; i++) {
       let ch = result.value.charAt(i);
       if (ch < '0' || ch > '9') {
           if (ch !== '/' && ch !== '*' && ch !== '+' && ch !== '-' && ch !== '(' && ch !== ')' && ch !== '.') {
               alert("Invalid entry");
               return false;
           }
       }
   }
   return true;
}

// Change sign function
function changeSign() {
   if (result.value.startsWith("-")) {
       result.value = result.value.substring(1);
   } else {
       result.value = "-" + result.value;
   }
}
