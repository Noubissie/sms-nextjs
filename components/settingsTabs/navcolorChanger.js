
let NavColorChanger = (colorFrom, colorTo)=>{
    Array.from(document.getElementsByClassName(colorFrom)).forEach((x,i)=>
    {
        x.setAttribute("class",x.getAttribute("class").replace(colorFrom, colorTo))
    })
}
export {NavColorChanger}