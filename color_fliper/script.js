const container = document.querySelector('.container')
console.log(container);
const color = ['red','green','white','orange','yellow','blue','black','magenta'];
Array.from(color).forEach((element)=>{
    console.log(element)
})
    let i = 0;
    document.getElementById('btn').addEventListener('click',()=>{
            
        container.style.backgroundColor = color[i];
        i++;
        if(i > color.length)
            i = 0;
            
    })

   
