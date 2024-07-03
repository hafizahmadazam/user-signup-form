//INPUTS
const input1 = document.getElementById('in1');
const input2 = document.getElementById('in2');
const input3 = document.getElementById('in3');

//PARAGRAPHS

const paragraph1 = document.getElementById('p1');
const paragraph2 = document.getElementById('p2');
const paragraph12 = document.getElementById("p12");
const paragraph13 = document.getElementById("p13");
const paraForPassword = document.getElementById('p3');
const paraForPassword2 = document.getElementById('p31');
const paraForPassword3 = document.getElementById('p32');
const paraForPassword4 = document.getElementById('p33');
const paraForPassword5 = document.getElementById('p34');
const paraForPassword6 = document.getElementById('p35');
const paraForPassword7 = document.getElementById('p36');

let a = ()=>{
    if(input1.value === ""){
        // paragraph12.innerText = "";
        paragraph12.classList.remove('dotGreen');
        paragraph12.classList.add('dotRed');
        // paragraph1.innerText = "";
        paragraph1.classList.add('dotRed');
        paragraph1.classList.remove('dotGreen'); 
        // paragraph13.innerText = ""
        paragraph13.classList.add('dotRed');
        paragraph13.classList.remove('dotGreen');
    }else if (input1.value.match(/[A-Z]/) && (input1.value.includes(" "))){
        // paragraph12.innerText = "";
        paragraph12.classList.remove('dotGreen');
        paragraph12.classList.add('dotRed');
        // paragraph13.innerText = "";
        paragraph13.classList.add('dotRed');
        paragraph13.classList.remove('dotGreen');
    }
    else if(input1.value.match(/[A-Z]/)){
        // paragraph13.innerText = ""
        paragraph13.classList.add('dotGreen');
        paragraph13.classList.remove('dotRed');
        // paragraph1.innerText = "";
        paragraph1.classList.add('dotRed');
        paragraph1.classList.remove('dotGreen');
    }
    else if(input1.value.includes(" ")){
        // paragraph13.innerText = ""
        paragraph13.classList.add('dotRed');
        paragraph13.classList.remove('dotGreen');
        // paragraph1.innerText = "";
        paragraph1.classList.add('dotRed');
        paragraph1.classList.remove('dotGreen');
    }else {
        // paragraph1.innerText = "";
        paragraph1.classList.add('dotGreen');
        paragraph1.classList.remove('dotRed');
        // paragraph13.innerText = ""
        paragraph13.classList.add('dotGreen');
        paragraph13.classList.remove('dotRed');
        // paragraph12.innerText = "";
        paragraph12.classList.remove('dotRed');
        paragraph12.classList.add('dotGreen');
    }
}
    


function ValidateEmail() {
    if(input2.value === ""){
        paragraph2.innerText = "enter your email"
        paragraph2.classList.remove('dotGreen');
        paragraph2.classList.add('dotRed');
    }else if (input2.value.match(/^[a-zA-Z0-9]+@[a-zA-z]+\.[a-z]/)) {
      paragraph2.innerText = "valid email address!";
      paragraph2.classList.remove('dotRed');
      paragraph2.classList.add('dotGreen');
    } else {
      paragraph2.innerText = "invalid email address!";
      paragraph2.classList.remove('dotGreen');
      paragraph2.classList.add('dotRed');
    }
}

let b = () => {
    // paraForPassword. innerText = "";
    // paraForPassword2.innerText = "";
    // paraForPassword3.innerText = "";
    // paraForPassword4.innerText = "";
    // paraForPassword5.innerText = "";
    // paraForPassword6.innerText = "";
    // paraForPassword7.innerText = "";

    
    if (input3.value.trim() === "") {
        paraForPassword.innerText += "";
        paraForPassword.classList.add('dotRed');
        paraForPassword.classList.remove('dotGreen');

    } else {
        paraForPassword.innerText += "";
        paraForPassword.classList.add('dotGreen');
        paraForPassword.classList.remove('dotRed');
    }

    if (input3.value.includes(" ")) {
        paraForPassword2.innerText += '';
        paraForPassword2.classList.add('dotRed');
        paraForPassword2.classList.remove('dotGreen');
    }
    else if (input3.value.trim() === ""){
        paraForPassword2.innerText += '';
        paraForPassword2.classList.add('dotRed');
        paraForPassword2.classList.remove('dotGreen');
    }
    else {
        paraForPassword2.innerText += '';
        paraForPassword2.classList.remove('dotRed');
        paraForPassword2.classList.add('dotGreen');
    }

    if (input3.value.length < 8 || input3.value.length > 16) {
        paraForPassword3.innerText += '';
        paraForPassword3.classList.add('dotRed');
        paraForPassword3.classList.remove('dotGreen');
    } else {
        paraForPassword3.innerText += '';
        paraForPassword3.classList.add('dotGreen');
        paraForPassword3.classList.remove('dotRed');
    }

    if (!/[A-Z]/.test(input3.value)) {
        paraForPassword4.innerText += '';
        paraForPassword4.classList.add('dotRed');
        paraForPassword4.classList.remove('dotGreen');
    } else {
        paraForPassword4.innerText += '';
        paraForPassword4.classList.add('dotGreen');
        paraForPassword4.classList.remove('dotRed');
    }

    if (!/[a-z]/.test(input3.value)) {
        paraForPassword5.innerText += '';
        paraForPassword5.classList.add('dotRed');
        paraForPassword5.classList.remove('dotGreen');
    } else {
        paraForPassword5.innerText += '';
        paraForPassword5.classList.add('dotGreen');
        paraForPassword5.classList.remove('dotRed');
    }

    if (!/\d/.test(input3.value)) {
        paraForPassword6.innerText += '';
        paraForPassword6.classList.add('dotRed');
        paraForPassword6.classList.remove('dotGreen');
    } else {
        paraForPassword6.innerText += '';
        paraForPassword6.classList.add('dotGreen');
        paraForPassword6.classList.remove('dotRed');
    }

    if (!/[*&^%$#@!_-]/.test(input3.value)) {
        paraForPassword7.innerText += '';
        paraForPassword7.classList.add('dotRed');
        paraForPassword7.classList.remove('dotGreen');
    } else {
        paraForPassword7.innerText += '';
        paraForPassword7.classList.add('dotGreen');
        paraForPassword7.classList.remove('dotRed');
    }
}

let submit = document.getElementById("sub");
submit.addEventListener('click', (e) => {
    e.preventDefault();
    a();
    ValidateEmail();
    b();
});
a();
ValidateEmail();
b();
input1.addEventListener('input', ()=>{
    a();
})
input3.addEventListener('input', ()=>{
    b();
})
input2.addEventListener('input', ()=>{
    ValidateEmail();
})