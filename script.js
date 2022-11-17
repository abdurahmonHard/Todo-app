const conten = document.querySelector(".content");
const overflo = document.querySelector(".overflov");
const okey = document.getElementById("ok");
const cancel = document.getElementById("cancel");


const aydi = document.getElementById("itemInput");
// const input = document.getElementById("input2");
const lodlis = document.getElementById("todoList");
const addButton = document.getElementById("addButton");
const clearButton = document.getElementById("clearButton");
const ul = document.querySelector("#todoList");


addButton.addEventListener("click",function(){
    // let nav = aydi.value;
    let  li = document.createElement("li");
    let spans = document.createElement("span");
    const btn1 = document.createElement("button");
    const btn2 = document.createElement("button");
    const btn3 = document.createElement("button");
    if (aydi.value !== "") {
        spans.textContent = aydi.value;
        btn1.textContent ="Edit";
        btn1.setAttribute("class", "btn btn-primary main");
        btn2.setAttribute("class", "btn btn-success ");
        btn3.setAttribute("class", "btn btn-danger ");
        btn2.textContent = "complate";
        btn3.textContent = "Delete";
        li.appendChild(spans);
        li.appendChild(btn1);
        li.appendChild(btn2);
        li.appendChild(btn3);
        ul.appendChild(li);
        aydi.value = ""

        btn1.addEventListener("click", function(){
            let modull = document.createElement("modul");
            let inputt = document.createElement("input");
            let newbtn = document.createElement("button");
            let newbt = document.createElement("button");
            modull.textContent = inputt.value;
            newbtn.textContent = "Edit";
            newbt.textContent = "cencil";
            modull.setAttribute("class", "modul");
            modull.appendChild(inputt);
            modull.appendChild(newbtn);
            modull.appendChild(newbt);
            ul.appendChild(modull);
            
            newbt.addEventListener("click", function(){
                modull.remove()
            });

            newbtn.addEventListener("click", function(){
                if (inputt.value !== "") {
                    spans.textContent = inputt.value;
                    modull.remove()
                }
            });

        });

    }

    btn3.addEventListener("click", function(){
        li.remove()
    });

    btn2.addEventListener("click", function(){
        spans.classList.toggle("line");
    });

    clearButton.addEventListener("click", function(){
        li.remove()
    });

});





























// const conten = document.querySelector(".content");
// const overflo = document.querySelector(".overflov");
// const okey = document.getElementById("ok");
// const cancel = document.getElementById("cancel");


// const aydi = document.getElementById("itemInput");
// const input = document.getElementById("input2");
// const lodlis = document.getElementById("todoList")
// const addButton = document.getElementById("addButton")
// const clearButton = document.getElementById("clearButton");
// const ul = document.querySelector("ul");


// addButton.addEventListener("click",function(){
//     let nav = aydi.value;
//     let  li = document.createElement("li");
//     let spans = document.createElement("span");
//     const btn1 = document.createElement("button");
//     const btn2 = document.createElement("button");
//     const btn3 = document.createElement("button");
//     if (aydi.value !== "") {
//         spans.textContent = aydi.value;
//         btn1.textContent ="Edit";
//         btn1.setAttribute("class", "btn btn-primary main");
//         btn2.setAttribute("class", "btn btn-success ");
//         btn3.setAttribute("class", "btn btn-danger ");
//         btn2.textContent = "complate";
//         btn3.textContent = "Delete";
//         li.appendChild(spans);
//         li.appendChild(btn1);
//         li.appendChild(btn2);
//         li.appendChild(btn3);
//         ul.appendChild(li);
//         aydi.value = ""


//         btn1.addEventListener("click", function(){
//             conten.classList.remove("hiddenn")
//             overflo.classList.remove("hiddenn")
//             input.value = nav;
//         });

//     }

//     btn3.addEventListener("click", function(){
//         li.remove()
//     });

//     btn2.addEventListener("click", function(){
//         spans.classList.toggle("line");
//     });

//     cancel.addEventListener("click", function(){
//         conten.classList.add("hiddenn")
//         overflo.classList.add("hiddenn") 
//     });

//     clearButton.addEventListener("click", function(){
//         li.remove()
//     });

//     okey.addEventListener("click", function(){
//         if (input.value !== "") {
//             spans.textContent = input.value;
//             input.value = ""
        
        
//         }
//     });
// });




































































































































































































































































































































































































































































