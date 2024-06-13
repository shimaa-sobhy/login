var signupName = document.getElementById('signupName');
var signupEmail = document.getElementById('signupEmail');
var signupPassword = document.getElementById('signupPassword');
var signupBtn = document.getElementById('signupBtn');
var inputMessage = document.querySelector('.input-warning');
var successfulSignup = document.querySelector('.successful-signup');
var emailExist = document.querySelector('.email-exist');
var accounts;

if(localStorage.getItem('accountsList') == null){
    accounts = []
}
else{
    accounts = JSON.parse(localStorage.getItem('accountsList'))
}


function signupValidation(inp) {
    var signupRegex = {
        signupName : /^[\w]{3,}$/,
        signupEmail : /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$/,
        signupPassword : /^[\w]{5,}$/
    }
    if(signupRegex[inp.id].test(inp.value)){
        inp.classList.add('is-valid')
        inp.classList.remove('is-invalid')
        return true
    }
    else{
        inp.classList.add('is-invalid')
        inp.classList.remove('is-valid')
        return false
    }
}

signupBtn.addEventListener('click',function(e){
    e.preventDefault()
    if(signupValidation(signupName) && signupValidation(signupEmail) && signupValidation(signupPassword) && !isExist(signupEmail.value)){
        var account = {
            userName : signupName.value,
            userEmail : signupEmail.value,
            userPassword : signupPassword.value
        }
        successfulSignup.classList.remove('d-none')
        successfulSignup.classList.add('d-block')
        accounts.push(account)
        localStorage.setItem('accountsList',JSON.stringify(accounts))
        inputMessage.classList.remove('d-block')
        inputMessage.classList.add('d-none')
    }
    else{
        inputMessage.classList.remove('d-none')
        inputMessage.classList.add('d-block')
        successfulSignup.classList.remove('d-block')
        successfulSignup.classList.add('d-none')
    }
})

function isExist(email){
    for(var i = 0; i < accounts.length; i++){
        console.log(accounts[i]['userEmail'])
        if(accounts[i]['userEmail'] == email){
            emailExist.classList.add('d-block')
            emailExist.classList.remove('d-none')
            return true
        }
        else{
            emailExist.classList.remove('d-block')
            emailExist.classList.add('d-none')
            return false
        }
    }
}



signupBtn.addEventListener("click", function() {
    if (signupName.value.trim() === ""||signupEmail.value.trim() === "" || signupPassword.value.trim() === "") {
        inputWarning.classList.remove("d-none");
        emailExist.classList.add("d-none");
        successfulSignup.classList.add("d-none");
    } else {
       
        var helloPage = "./login.htm";

        
        window.location.href = helloPage;
    }
});
;
