let string="";

let buttons=document.querySelectorAll('.button')
Array.from(buttons).forEach((buttons)=>{
    buttons.addEventListener('click',(e)=>{

        if(e.target.innerHTML== "="){
            string=eval(string);
            document.querySelector('input').value=string;
        }
        
        
        else{
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value=string;
        }
    })
})
    
let cbuttons=document.querySelectorAll('.cbutton')
Array.from(cbuttons).forEach((cbuttons)=>{
    cbuttons.addEventListener('click',(e)=>{
        
            if(e.target.innerHTML== "CLEAR"){
                // string=eval(string);
                document.querySelector('input').value="";
            }
            
            else{
                console.log(e.target)
                string = string + e.target.innerHTML;
                document.querySelector('input').value=string;
            }
      
    })

})

// })
//     let buttons=document.querySelectorAll('.button-')
// Array.from(buttons).forEach((buttons)=>{
//     buttons.addEventListener('click',(e)=>{
//         console.log(e.target)
//         string = string + e.target.innerHTML;
//         document.querySelector('input').value=string;
//     })

