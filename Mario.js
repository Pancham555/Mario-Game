let audio=new Audio("Cartoon-Jumpy-B-www.fesliyanstudios.com.mp3")
let backAudio=new Audio("super-mario-bros-4293.mp3")

    window.addEventListener("load",function () {
        setTimeout(() => {
            document.querySelector("#character").style.left = "350px"
        }, 1800);
        backAudio.play()
    })
    
    // document.querySelector("#enemy").style.display="none"
    setTimeout(() => {
        document.querySelector("#enemy").style.display="inline-block"  
        document.querySelector("#character").style.transition="1s"
    }, 4000);



        window.addEventListener("keydown", function (e) {
            console.log(e.keyCode)
            if (e.keyCode == 38 ||e.keyCode==32) {
                document.querySelector("#character").style.top = "30px"
                document.querySelector("#character").style.left = "500px"
                document.querySelector("#character").src="MarioJumping.png"
                audio.play()
                setTimeout(() => {
                    document.querySelector("#character").style.top = "316px"
                    document.querySelector("#character").style.left = "600px"
                }, 800);
                
                setTimeout(() => {
                   document.querySelector("#character").src="Mario.gif"
                   
               }, 1500);

                setTimeout(() => {
                    document.querySelector("#character").style.left = "380px"
                    document.querySelector("#character").style.transition="3s"
                }, 1800);
                document.querySelector("#character").style.transition="1s"
            }
        })

        setInterval(() => {
            let mario = document.querySelector("#character")
            let dx = parseInt(window.getComputedStyle(mario, null).getPropertyValue("left"))
            let dy = parseInt(window.getComputedStyle(mario, null).getPropertyValue("top"))

            let pipe = document.querySelector("#enemy")
            let ox = parseInt(window.getComputedStyle(pipe, null).getPropertyValue("left"))
            let oy = parseInt(window.getComputedStyle(pipe, null).getPropertyValue("top"))

            let offsetX = Math.abs(dx - ox);
            let offsetY = Math.abs(dy - oy);
            // console.log(offsetX)

            if (offsetX < 125 && offsetY < 170) {
                let game =  alert("Game over")
                if (game == undefined) {
                location.reload()
                }
            }


        }, 10);

        let num = 0
        setInterval(() => {
            num = num + 10
            document.querySelector("#score").innerHTML = "Score:" + num
        }, 100);

