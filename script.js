let button=document.getElementsByClassName('btn')[0];
let input=document.getElementsByTagName('input')[0];
let clipboard=document.getElementsByClassName('fa-regular')[0];
let alert=document.getElementsByClassName('alert-container')[0]
const createPass=()=>{
    let string='0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    // let length=Math.floor(Math.random())
    let len=Math.floor(Math.random() * (14- 10 + 1)) + 10;
    let pass="";
    for(let i=0;i<len;i++){
        let num=Math.floor(Math.random()*string.length)
        pass+=string[num];
    }
    input.value=pass;

}
button.addEventListener('click',createPass);

clipboard.addEventListener('click',()=>{
    input.select();
    input.setSelectionRange(0,9999);// for mobile devices
    navigator.clipboard.writeText(input.value)
    if(input.value!=''){
        alert.innerText=`${input.value} copied!`
        alert.classList.add('active')
        setTimeout(()=>{
        alert.classList.remove('active')
        },2000)
    }
    
});