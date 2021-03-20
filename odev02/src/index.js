

let tahmin = 2;
let x;
let html;
let html1;
let html2;

const resimler = [
    "kedi.png",
    "kopek.png",
    "kopek.png",
];

export const yeniOyun0 = () => {
if(tahmin!==0){
    let index = Math.floor(Math.random()*resimler.length);
    if(x === index){
        index = (index+1)%resimler.length;
    }
    const image = resimler[index];
    x = index;
    html = document.getElementById("img0").src=image; 
    if(resimler[0] === image){
        document.getElementById("alanId").innerHTML="Kazandın!!! Tebrik ederiz :) Yeni bir oyun oynamak istersen <span class='link' onclick='document.location.reload(true);'>buraya</span> tıklayabilirsin.";
    }
    tahmin-=1;
}else{
    document.getElementById("alanId").innerHTML="Kaybettin :( Yeni bir oyun oynamak istersen <span class='link' onclick='document.location.reload(true);'>buraya</span> tıklayabilirsin.";
}
}

export const yeniOyun1 = () => {
if(tahmin!==0){
    let index1 = Math.floor(Math.random()*resimler.length);
    if(x === index1){
        index1 = (index1+1)%resimler.length;
    }
    const image1 = resimler[index1];
    x = index1;

    html1 = document.getElementById("img1").src=image1; 
    if(resimler[0] === image1){
        document.getElementById("alanId").innerHTML="Kazandın!!! Tebrik ederiz :) Yeni bir oyun oynamak istersen <span class='link' onclick='document.location.reload(true);'>buraya</span> tıklayabilirsin.";
    } 
    tahmin-=1;
}else{
    document.getElementById("alanId").innerHTML="Kaybettin :( Yeni bir oyun oynamak istersen <span class='link' onclick='document.location.reload(true);'>buraya</span> tıklayabilirsin.";
}
}
export const yeniOyun2 = () => {
if(tahmin!==0){
    let index2 = Math.floor(Math.random()*resimler.length);
    if(x === index2){
        index2 = (index2+1)%resimler.length;
    }
    const image2 = resimler[index2];
    x = index2;    
    html2 = document.getElementById("img2").src=image2; 
    if(resimler[0] === image2){
        document.getElementById("alanId").innerHTML="Kazandın!!! Tebrik ederiz :) Yeni bir oyun oynamak istersen <span class='link' onclick='document.location.reload(true);'>buraya</span> tıklayabilirsin.";
    } 
    tahmin-=1;
}else{
    document.getElementById("alanId").innerHTML="Kaybettin :( Yeni bir oyun oynamak istersen <span class='link' onclick='document.location.reload(true);'>buraya</span> tıklayabilirsin.";
}
}