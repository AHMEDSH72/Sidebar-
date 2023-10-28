const body = document.querySelector('body'),
    sidaber = body.querySelector('.sidebar'),
    toggle = body.querySelector('.toggle'),
    searchBtn = body.querySelector('.search-box'),
    modeSwtich = body.querySelector('.tooggle-switch'),
    modeText = body.querySelector('.made-text');






toggle.addEventListener("click",()=>{
    sidaber.classList.toggle("cloes");
    });





modeSwtich.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains('dark')){
        modeText.innerText = "LIGHT MODE"
    }else{
        modeText.innerText = "DAEK MODE"
    }
});


const loginButtom = document.getElementById('login-button'),
    loginClose = document.getElementById('login-close'),
    loginContent = document.getElementById('login-content')

/*===== SEARCH SHOW =====*/
/* Validate if constant exists */
if (loginButtom) {
    loginButtom.addEventListener('click', () => {
        loginContent.classList.add('show-login')
    })
}

/*===== SEARCH  HIDDEN =====*/
/* Validate if constant exists */
if (loginClose) {
    loginClose.addEventListener('click', () => {
        loginContent.classList.remove('show-login')
    })
}