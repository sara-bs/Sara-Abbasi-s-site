function scrollAppear(){
    
    const introText = document.querySelector(".intro-text");
    const introPosition = introText.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;
     
     if (introPosition < screenPosition ) {
         introText.style.opacity = '1';
         introText.style.transform = 'translateY(0px)';
         introText.style.transition = '1.5s all ease-in-out';
     }
}
window.addEventListener('scroll',scrollAppear);




function Appear(){
    
    const introText = document.querySelector(".appear");
    const introPosition = introText.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;
     
     if (introPosition < screenPosition ) {
         introText.style.opacity = '1';
         introText.style.transform = 'scale(1)';
         introText.style.transition = '1.5s all ease-in-out';
     }
}
window.addEventListener('scroll',Appear);




function scrollUp(){
    
    const introText = document.querySelector("#scrollUp");
    const introPosition = introText.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;
     
     if (introPosition < screenPosition ) {
         introText.style.opacity = '1';
         introText.style.transform = 'translateY(0px)';
         introText.style.transition = '1.5s all ease-in-out';
     }
}
window.addEventListener('scroll',scrollUp);


function validate(){
    const email = document.getElementById('email').value;
    const atSign = email.indexOf('@');
    const afterAtSign = email.substring(atSign);
    
    if(
        afterAtSign.indexOf('@') != -1 &&
         afterAtSign.indexOf('.') != -1 &&
         afterAtSign.indexOf('.') > afterAtSign.indexOf('@') &&
        afterAtSign.indexOf('.') - afterAtSign.indexOf('@') >1 &&
        email.indexOf('@' > 0)
    ){
        document.getElementById('txt').innerHTML = "  "
         document.getElementById('txt').style.color= "green";
        document.getElementById('txt').style.fontSize = "10px";
       }
       else{
        document.getElementById('txt').innerHTML = "*ایمیل را درست وارد کنید ";
        document.getElementById('txt').style.color= "red";
           document.getElementById('txt').style.fontSize = "10px";
       }
}


