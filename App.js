const vedio = document.getElementById('vedio');
const button = document.getElementById('button');




vedio.hidden =true;
const mediaScreen = async() =>{
try{
    let mediaStream = await navigator.mediaDevices.getDisplayMedia();
    vedio.srcObject = mediaStream;
vedio.onloadedmetadata=()=>{
    vedio.play();}
console.log(mediaStream)

}catch(error){
    console.log("Oh!, error is here" , error)
}
}


button.addEventListener('click', async ()=>{ 
    vedio.hidden = false
    button.style.color ="white"

    button.disabled = true;
    await vedio.requestPictureInPicture();
    button.disabled = false
console.log(button)
})  

mediaScreen();

