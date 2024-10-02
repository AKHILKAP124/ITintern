let html = document.querySelector("html")
let toggle = document.querySelector("#toggle")

toggle.addEventListener('click', ()=>{
    if (toggle.checked) {
        html.classList.add('dark');
    }
    else html.classList.remove('dark');
})

if (toggle.checked) {
    html.classList.add('dark');
}
else html.classList.remove('dark');

// end
