function count_vowels(){
let q1input=document.getElementById("q1input").value.toLowerCase();
let vowels=0;
let cons=0;
for(let i=0; i<q1input.length;i++){
    let ch= q1input[i];
    if(ch==="a"||ch=== "e"|| ch=== "i"|| ch=== "o"|| ch=== "u"){
        vowels+=1;
    }else if(ch>='a' && ch<='z'){
        cons+=1;
    }

    let result=document.getElementById("resq1");
    result.innerHTML="<p>Result: </p><p>Vowels-"+vowels+"</p><p> Consonants-"+cons+"</p>";


}
document.getElementById("q1input").addEventListener("keypress",function(event){
    if(event.key==="Enter"){
        count_vowels();
    }
})

};

function check_palindrome() {
    let input2 = parseInt(document.getElementById("q2input").value);
    let rnum = 0;
    let temp = input2;

    while (temp > 0) {
        let last_digit = temp % 10;
        rnum = (rnum * 10) + last_digit;
        temp = Math.floor(temp / 10);
    }

    if (input2 === rnum) {
        let result=document.getElementById("resq2");
    result.innerHTML="<p> Result: "+input2 + " is palindrome";
    } else {
        let result=document.getElementById("resq2");
    result.innerHTML="<p> Result: "+input2 + " is not a palindrome";
    }
}

document.getElementById("q2input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        check_palindrome();
    }
});

function calc_total() {
    let subtotal = parseInt(document.getElementById("subtotal").value);
    let tipPercentage = parseInt(document.getElementById("tip").value);
    let tipAmount = subtotal * (tipPercentage / 100);
    let total = subtotal + tipAmount;
    console.log(total);

    let show_total = document.getElementById("show_total");
    show_total.innerHTML = "<p> Total: "+total+"</p>";
}

document.getElementById("calc_button").addEventListener("click", calc_total);
document.getElementById("calc_button").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        calc_total();
    }
});

    


    



