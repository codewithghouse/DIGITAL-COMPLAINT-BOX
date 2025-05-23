let buttonsubmit = document.querySelector(".submit");
let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Form action stopping

    console.log("File complained successfully");

    let complaindiv = document.createElement("div");
    complaindiv.classList.add("complaindiv");
    form.append(complaindiv);

    // Creating the delete button
    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.classList.add("delete");
    complaindiv.append(delbtn);

    // ❌ Delete logic form ke andar hi
    delbtn.addEventListener("click", function () {
        complaindiv.remove();
        console.log("Complaint deleted");
    });

    // Accessing form elements
    let name = document.querySelector("#name");
    let namepara = document.createElement("p");
    namepara.classList.add("namepara");
    namepara.innerText = `Number: ${name.value}`;
    complaindiv.append(namepara);

    let phone = document.querySelector("#phone");
    let phnnumber = document.createElement("p");
    phnnumber.classList.add("namepara");
    phnnumber.innerText = `Phone number: ${phone.value}`;
    complaindiv.append(phnnumber);

    let complain = document.querySelector("#complaint-type");
    let complains = document.createElement("p");
    complains.classList.add("namepara");
    complains.innerText = `Complaint: ${complain.value}`;
    complaindiv.append(complains);

    let location = document.querySelector("#location");
    let loco = document.createElement("p");
    loco.classList.add("namepara");
    loco.innerText = `Location: ${location.value}`;
    complaindiv.append(loco);

    let description = document.querySelector("#description");
    let descrip = document.createElement("p");
    descrip.classList.add("namepara");
    descrip.innerText = `Description: ${description.value}`;
    complaindiv.append(descrip);

    let img = document.querySelector("#image");
    if (img.files.length > 0) {
        let image = document.createElement("img");
        image.classList.add("imgdiv");
        image.src = URL.createObjectURL(img.files[0]); // Correct way to show uploaded image
        image.style.maxWidth = "auto";
        complaindiv.append(image);
    }

    let action = document.querySelector("#action");
    let preaction = document.createElement("p");
    preaction.classList.add("namepara");
    preaction.innerText = `Preferred action: ${action.value}`;
    complaindiv.append(preaction);
});
