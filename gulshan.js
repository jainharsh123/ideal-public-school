let signinbtn,signinform,UserLoginPage,togglesign,SignUpFormBtn,signupform,UserLoginPageBtn;
signinbtn=document.getElementById('signinbtn');
signinform=document.getElementById('signinform');
UserLoginPage=document.getElementById('UserLoginPage');
togglesign = document.querySelectorAll('.toggle-sign');
SignUpFormBtn=document.getElementById('SignUpFormBtn');
signupform=document.getElementById('signupform');
UserLoginPageBtn=document.getElementById('UserLoginPageBtn');
// first nav click btn for sign in users
signinbtn.addEventListener('click',()=>{
     signinform.classList.remove("d-none")
})
// login page for specific type of user
for(i of togglesign){
     i.addEventListener('click',()=>{
          UserLoginPage.classList.remove("d-none");
          signinform.classList.add("d-none")
     })   
}

SignUpFormBtn.addEventListener('click',()=>{
     signupform.classList.remove('d-none');
     UserLoginPage.classList.add("d-none");
     
})

UserLoginPageBtn.addEventListener('click',()=>{
     UserLoginPage.classList.remove("d-none");
     signupform.classList.add('d-none');
})