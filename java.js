let num=0;
let element= document.getElementById('head')

    function add(){
    num++;
    element.innerHTML= num;
}

function prvs(){
    num--;
    element.innerHTML= num;
}

function clear(){
num= '';
document.getElementById('head').innerHTML=head;
}

// function add(){
//     for (let num=0; num<10; num++){
//         document.getElementById('previous').innerHTML+=num
//     }
//     }