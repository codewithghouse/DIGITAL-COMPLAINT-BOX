// acessing the submit btn
let submitbtn=document.querySelector(".submitbtn");
//accesing the body
let body=document.querySelector("body");

//accssing the form
let form=document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault();
    console.log(event);

//adding the listener to the submit btn
    submitbtn.addEventListener("click",function(){
        let electricdiv=document.createElement("div");
        electricdiv.classList.add("electricdiv");
        form.append(electricdiv);

        //accessing the form elements
        let fullname=document.querySelector("#name");
        let name=document.createElement("h3");
        name.classList.add("name");
        name.innerText=`FULLNAME : ${fullname.value}`;
        electricdiv.appendChild(name);
        //phone input
        let phone=document.querySelector("#phone");
        let phonenumber=document.createElement("h3");
        phonenumber.classList.add("name");
        phonenumber.innerText=`PHONE NUMBER : ${phone.value}`;
        name.appendChild(phonenumber);

        // complaint-type
        let complaint=document.querySelector("#complaint-type");
        let complaint_it=document.createElement("h3");
        complaint_it.classList.add("name");
        complaint_it.innerText=`COMPLAINT : ${complaint.value}`;
        phonenumber.appendChild(complaint_it);

        //description
        let description=document.querySelector("#description");
        let describ=document.createElement("p");
        describ.classList.add("description");
        describ.innerText=`DESCRIPTION : ${description.value}`;
        phonenumber.appendChild(describ);

    
            if(fullname.value==" "){
             alert("FIll the fullname properly");
                    return false;
            }
            // delbtn
            let delbtn=document.createElement("button");
            delbtn.classList.add("delbtn");
            delbtn.innerText="DELETE";
            describ.append(delbtn);
            

            //deleting the complain
            delbtn.addEventListener("click",function(){
                electricdiv.remove();
            })


        

    });

})

