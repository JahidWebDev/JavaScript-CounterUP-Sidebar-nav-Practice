const counter = document.getElementById("counter");
const btn  = document.querySelectorAll(".btn");

let count = 0;

btn.forEach((btn) => {
    btn.addEventListener("click", (eachBtn) => {
        let classname = eachBtn.target.className;

        if (classname.includes("increase")){
            count++;
        } else if (classname.includes("decrease")){
            count--; 
        } else {
            count = 0;
        } 
        counter.innerHTML = count;
    });
});
    