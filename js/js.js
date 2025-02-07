/*
* fil: js.js
* foråmål: er at lave et pil hvor man kan bruge makey makey til at trykke
 */

start.addEventListener("click", function(){
    start.style.display="none"

    setInterval(()=>{
        num=Math.floor(Math.random()*(330-200+1)+200)
        ondbil1.style.left=`${num}px`
    }, 3000)

    setInterval(()=>{
        num=Math.floor(Math.random()*(150-100 + 1)-100)
        ondbil2.style.left=`${num}px`
    }, 4000)
    
    setInterval(()=>{
        num=Math.floor(Math.random()*(10-200+1)-200)
        ondbil3.style.left=`${num}px`
    }, 2000)
    

    ondbil1.style.animation= "ondbil1 3s linear infinite"
    ondbil2.style.animation= "ondbil2 4s linear infinite"
    ondbil3.style.animation= "ondbil3 2s linear infinite"

})



let t=-20;
let l=0;


window.addEventListener("keydown", function(x) {

    //tallene er en kode for et bestemt bogstav på tastaturet
    //w key
    if(x.keyCode==87) {
        t=t-3
        //alert("w")
    }

    //a key
    if(x.keyCode==65) {
        l=l-1
        //alert(w)
    }

    //s key
    if(x.keyCode==83) {
        t=t+3

        //alert(w)
    }

    if(x.keyCode==68) {
        l=l+1
        //alert(w)
    }

    minbil.style.top= `${t}vh`
    minbil.style.left= `${l}vw`


n = 0 

    setInterval(()=>{
        n = n + 1

        score.innerHTML= `Score: ${n}`


        var ondbil1_left=Math.abs(ondbilimg1.getBoundingClientRect().left)
        var ondbil1_right=Math.abs(ondbilimg1.getBoundingClientRect().right)
        var ondbil1_top=Math.abs(ondbilimg1.getBoundingClientRect().top)
        var ondbil1_bottom=Math.abs(ondbilimg1.getBoundingClientRect().bottom)

        var ondbil2_left=Math.abs(ondbilimg2.getBoundingClientRect().left)
        var ondbil2_right=Math.abs(ondbilimg2.getBoundingClientRect().right)
        var ondbil2_top=Math.abs(ondbilimg2.getBoundingClientRect().top)
        var ondbil2_bottom=Math.abs(ondbilimg2.getBoundingClientRect().bottom)

        var ondbil3_left=Math.abs(ondbilimg3.getBoundingClientRect().left)
        var ondbil3_right=Math.abs(ondbilimg3.getBoundingClientRect().right)
        var ondbil3_top=Math.abs(ondbilimg3.getBoundingClientRect().top)
        var ondbil3_bottom=Math.abs(ondbilimg3.getBoundingClientRect().bottom)

        var minbil_left=Math.abs(minbilimg.getBoundingClientRect().left)
        var minbil_right=Math.abs(minbilimg.getBoundingClientRect().right)
        var minbil_top=Math.abs(minbilimg.getBoundingClientRect().top)
        var minbil_bottom=Math.abs(minbilimg.getBoundingClientRect().bottom)


       if (minbil_left < 200 || minbil_right > 1050 || minbil_top < 20 || minbil_bottom > 690) {
            
            setTimeout(() => {
                alert("Du dø'e")
            })
            location.reload()
        }

        
        if(((ondbil1_left<minbil_left && minbil_left<ondbil1_right)||(ondbil1_left<minbil_right && minbil_right<ondbil1_right)) && ((ondbil1_top<minbil_top && minbil_top<ondbil1_bottom)||(ondbil1_top<minbil_bottom && minbil_bottom<ondbil1_bottom))) {
            
            setTimeout(() => {
                alert("Du dø'e")
            })
            location.reload()

        }


        if(((ondbil2_left<minbil_left && minbil_left<ondbil2_right)||(ondbil2_left<minbil_right && minbil_right<ondbil2_right)) && ((ondbil2_top<minbil_top && minbil_top<ondbil2_bottom)||(ondbil2_top<minbil_bottom && minbil_bottom<ondbil2_bottom))) {
            
            setTimeout(() => {
                alert("Du dø'e")
            })
            location.reload()

        }


        if(((ondbil3_left<minbil_left && minbil_left<ondbil3_right)||(ondbil3_left<minbil_right && minbil_right<ondbil3_right)) && ((ondbil3_top<minbil_top && minbil_top<ondbil3_bottom)||(ondbil3_top<minbil_bottom && minbil_bottom<ondbil3_bottom))) {
            
            setTimeout(() => {
                alert("Du dø'e")
            })
            location.reload()

        }


    },100)

}) 

