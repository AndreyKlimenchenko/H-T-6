let a=0;
let imagea=document.getElementById("ready");
let imgsa=new Array('./img/ava1.png','./img/ava2.png');
function imgsrca() {
    a++;a%=imgsa.length;
    imagea.src = imgsa[a];
};

let b=0;
let imageb=document.getElementById("body");
let imgsb=new Array('./img/body1.png','./img/body2.png','./img/body3.png','./img/body4.png');
function imgsrcb() {
    b++;b%=imgsb.length;
    imageb.src = imgsb[b];
};

let c=0;
let imagec=document.getElementById("beard");
let imgsc=new Array('./img/beard1.png','./img/beard2.png','./img/beard3.png','');
function imgsrcc() {
    c++;c%=imgsc.length;
    if(!imgsc[c]){
        imagec.style.visibility="hidden";
        return;
        }
        
    imagec.src = imgsc[c];
    imagec.style.visibility="visible";
};

let d=0;
let imaged=document.getElementById("glass");
let imgsd=new Array('./img/glas1.png','./img/glas2.png','./img/glas3.png','');
function imgsrcd() {
    d++;d%=imgsd.length;
    if(!imgsd[d]){
        imaged.style.visibility="hidden";
        return;
        }
        
    imaged.src = imgsd[d];
    imaged.style.visibility="visible";
};

let e=0;
let imagee=document.getElementById("hat");
let imgse=new Array('./img/hat.png','./img/hat1.png','./img/hat2.png','./img/hat3.png','');
function imgsrce() {
    e++;e%=imgse.length;
    if(!imgse[e]){
        imagee.style.visibility="hidden";
        return;
        }
        
    imagee.src = imgse[e];
    imagee.style.visibility="visible";
};

let f=0;
let imagef=document.getElementById("hair");
let imgsf=new Array('./img/m1.png','./img/m2.png','./img/m3.png','./img/m4.png','./img/m5.png','./img/m6.png','./img/w1.png','./img/w2.png','./img/w3.png','./img/w4.png','./img/w5.png','./img/w6.png','');
function imgsrcf() {
    f++;f%=imgsf.length;
    if(!imgsf[f]){
        imagef.style.visibility="hidden";
        return;
        }
        
    imagef.src = imgsf[f];
    imagef.style.visibility="visible";
};

let j=0;
let imagej=document.getElementById("shirt");
let imgsj=new Array('./img/shirt.png','./img/shirt1.png','./img/shirt2.png','./img/shirt3.png','./img/shirt4.png','');
function imgsrcj() {
    j++;j%=imgsj.length;
    if(!imgsj[j]){
        imagej.style.visibility="hidden";
        return;
        }
        
    imagej.src = imgsj[j];
    imagej.style.visibility="visible";
};