let inputbox = document.getElementById("inputbox")
let buttons = document.querySelectorAll('button')
let string=''

buttons.forEach(ele =>{
    ele.addEventListener('click',(a)=>{
        if(a.target.innerText=='='){
            string=String(eval(string))
            inputbox.value=string;
        }
        else if(a.target.innerText=='AC'){
            string=''
            inputbox.value=string;
        }
        else if(a.target.innerText=='Del'){
            string=string.substring(0,string.length-1)
            inputbox.value=string;
        }
        else{
            string+=a.target.innerText
            inputbox.value=string
        }
    })
})

