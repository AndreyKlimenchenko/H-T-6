const button = document.getElementById("change");

let d=0;
let headers=['nav1', 'nav2', 'nav3', 'nav4'];
function handleChangeHeader() {
    d++;d%=headers.length;
    headers.forEach((header, index)=> {
        if(index !== d){
            const element = document.getElementsByClassName(headers[index])[0];
            element.style.display="none";
        }
    })
    const header = document.getElementsByClassName(headers[d])[0];
    header.style.display="flex";
};