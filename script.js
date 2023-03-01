const textHI = document.querySelector(".welcome-hi-container");

const welcomeText2 = document.querySelector(".welcome-text--welcome-to");
const welcomeText3 = document.querySelector(".welcome-text--my-portfolio");

addEventListener("load",()=>{
    textHI.style.marginRight = `1em`
    textHI.style.opacity = 1
    setTimeout(() => {
        textHI.style.marginBottom = `13em`;
        setTimeout(() => {
            welcomeText2.style.opacity = 1
            welcomeText2.style.marginLeft = 0
            setTimeout(() => {
                welcomeText3.style.opacity = 1
                welcomeText3.style.marginLeft = 0
            }, 500);
        }, 500);
    }, 1400);
})
