let email = document.getElementById("email");
let signUp = document.getElementById("content");
let successMessage = document.getElementById("success-message")


function subscribeToMonthlyNewsletter(){   
   
    let errorMessage = document.getElementById("error-message");
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = emailPattern.test(email.value);

    if(email.value===""){
        alert("Whoops! It looks like you forgot to add your email");
    }

    else{
        if(isValid===false){
            errorMessage.style.display = 'flex'
            email.style.backgroundColor = 'hsl(4, 100%, 87%)'
            email.style.border = '1px solid hsl(4, 100%, 67%)'
        }
        else{
            signUp.style.display = 'none';
            successMessage.style.display = 'flex';
        }
    }
}




function dismissMessage(){
    signUp.style.display = 'flex';
    successMessage.style.display = 'none';
    email.style.backgroundColor = '';
    email.style.border = '1px solid hsl(231, 7%, 60%)';

    email.value ='';

    let errorMessage = document.getElementById("error-message");
    errorMessage.style.display = 'none';
}