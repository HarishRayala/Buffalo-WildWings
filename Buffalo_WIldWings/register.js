let inputs=document.querySelectorAll(".inputs");
let errMsg=document.querySelectorAll(".errMsg");
let inputFields=["First Name", "Last Name", "Email", "Phone Number", "Birthdate", "Zip Code", "Password"];
for(let i=0;i<inputs.length;i++){
    inputs[i].addEventListener("focusout",()=>{
        if(inputs[i].value==""){
            errMsg[i].style.display="block";
            errMsg[i].textContent=`${inputFields[i]} is incomplete`;
        }else{
            let err=validateData(i);
            if(err==""){
                errMsg[i].style.display="none";
                errMsg[i].textContent="";
            }else{
                errMsg[i].style.display="block";
                errMsg[i].textContent=err;
            }
        }
    })
}