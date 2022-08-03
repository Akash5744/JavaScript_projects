const container = document.querySelector('.container')
console.log(container);
const color = ['red','green','white','orange','yellow','blue','black','magenta'];
Array.from(color).forEach((element)=>{
    console.log(element)
})

    document.getElementById('btn').addEventListener('click',()=>{
            
        container.style.backgroundColor = 'rgb(255,0,0)';
            
    })

   