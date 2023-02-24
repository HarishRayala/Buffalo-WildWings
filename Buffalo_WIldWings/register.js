let inputs=document.querySelectorAll(".inputs");
let errMsg=document.querySelectorAll(".errMsg");
let inputFields=["First Name", "Last Name", "Email", "Phone Number", "Birthdate", "Zip Code", "Password"];
let submitBtn=document.querySelector("#submitBtn");
submitBtn.disabled="true";
let checkbox=document.querySelectorAll(".check");
let fieldsFilled=[false, false, false, false, false, false, false, false, false];

const nameRegex = /^[A-Za-z]{2,30}/;
const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
const phoneRegex=/^[6789][0-9]{9}/;
const zipCodeRegex=/^[0-9]{6}/;
const pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

for(let i=0;i<inputs.length;i++){
    inputs[i].addEventListener("focusout",()=>{
        if(inputs[i].value==""){
            fieldsFilled[i]=false;
            errMsg[i].style.display="block";
            errMsg[i].textContent=`${inputFields[i]} is incomplete`;
        }else{
            // let err="";
            let inputValue=inputs[i].value;
            let err=validateData(i,inputValue);
            if(err==""){
                fieldsFilled[i]=true;
                errMsg[i].style.display="none";
            }else{
                fieldsFilled[i]=false;
                errMsg[i].style.display="block";
            }
            errMsg[i].textContent=err;
            AllFieldsFilled();
        }
    })
}
function privacyPolicy(){
    if(checkbox[0].checked==true){
        fieldsFilled[7]=true;
    }else{
        fieldsFilled[7]=false;
    }
    AllFieldsFilled();
}
function termsAndConditions(){
    if(checkbox[1].checked==true){
        fieldsFilled[8]=true;
    }else{
        fieldsFilled[8]=false;
    }
    AllFieldsFilled();
}
function AllFieldsFilled(){
    let flag=true;
    for(let i=0;i<fieldsFilled.length;i++){
        if(fieldsFilled[i]==false){
            flag=false; break;
        }
    }
    if(flag) {
        submitBtn.disabled=false;
        submitBtn.style.cssText="background-color: #ffc600; color: #382c2c;"
    }
    else {
        submitBtn.disabled=true;
        submitBtn.style.cssText="color: white; background-color: #cdcdcd; "
    }
}

function validateData(index,value){
    if(index==0 || index==1){
        if(nameRegex.test(value)) return "";
        else return "This value seems to be invalid";
    }else if(index==2){
        if(emailRegex.test(value)) return "";
        else return "Incorrect email"
    }else if(index==3){
        if(phoneRegex.test(value)) return "";
        else return "Phone Number Invalid";
    }else if(index==4){
        return "";
    }else if(index==5){
        if(zipCodeRegex.test(value)) return "";
        else return "ZIP Code invalid";
    }else{
        if(pwdRegex.test(value)) return "";
        else return "Incorrect password format";
    }
}