let body = document.querySelector('#main')
let colorlet =[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
body.addEventListener('click',()=>{
  let color = genNum()
  setColor(color)
})
let genRandNum =()=>{

  let num =Math.floor(Math.random () *colorlet.length)
  return num
}
 let genNum =() =>{

  let color =''
  for(let i=0; i<6; i++){

    let rnd =genRandNum()
    color +=colorlet[rnd]
  }
  return color
 }

 let setColor =(color)=>{
  body.style.backgroundColor =`#${color}`
 }
