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
