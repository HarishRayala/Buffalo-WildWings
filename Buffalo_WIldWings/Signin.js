document.querySelector("form").addEventListener("submit",UsersSignin);
let usersData=JSON.parse(localStorage.getItem("users"))||[];
let currentUser=[];
let errormsg=document.querySelector("#errormsg");
errormsg.style.cssText="display:none"
let submitBtn=document.querySelector("#submitBtn");
submitBtn.style.cssText="color: white; background-color: #cdcdcd;";
function UsersSignin(e){
    e.preventDefault(e);
    let email=document.querySelector("#email").value;
    let password=document.querySelector("#password").value;
    if(email.length>0 && password.length>0){
        usersData.map((el,i)=>{
            if(el.email===email){
                if(el.password==password){
                    let userDetails={
                        email:email,
                        password:password
                    }
                    console.log(userDetails)
                    currentUser.push(userDetails)
                    localStorage.setItem("currentUser",JSON.stringify(userDetails))
                    submitBtn.disabled=false;
                    submitBtn.style.cssText="background-color: #ffc600; color: #382c2c;"
                }else{
                    errormsg.textContent="Incorrect Password";
                    errormsg.style.cssText="display:block;color:red;font-size:18px;text-align:center"
                }
            }
            else{
                errormsg.textContent="User doesn't exist Create a new account to login"
                errormsg.style.cssText="display:block;color:red;font-size:18px;text-align:center"
            }
        })
    }else{
        submitBtn.style.cssText="color: white; background-color: #cdcdcd;";
    }
}