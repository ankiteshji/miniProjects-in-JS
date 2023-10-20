// Generate a random colors
const randomColor=function(){
    const hex='0123456789ABCDEF'
    let color='#'
    for(let i=0; i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]

    }
    return color
}

// console.log(randomColor())





const change=()=>{
    document.querySelector('body').style.backgroundColor=randomColor()
}
let interval;
const temp=()=>{
    interval=setInterval(change,1000)
}
document.getElementById('start').addEventListener('click',function(){
    temp();
})
document.getElementById('stop').addEventListener('click',function(){
    clearInterval(interval);
    interval=null;
})