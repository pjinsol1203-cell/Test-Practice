document.addEventListener("DOMContentLoaded",()=>{
    //팝업
    const popup = document.querySelector(".popup")
    const btnOpen = document.querySelector("#btn-open")
    const btnClose = document.querySelector("#btn-close")

    btnOpen.addEventListener("click",()=>{
        popup.classList.add("on")
    })

    btnClose.addEventListener("click",()=>{
        popup.classList.remove("on")
    })

    //세로형 슬라이드
    let count = 0
    const train = document.querySelector(".train")

    setInterval(()=>{
        count++
        train.style.transition = `all 0.6s ease 0s`
        train.style.transform = `translateY(${-25*count}%)`
        if (count==3){

            setTimeout(()=>{
            count=0
            train.style.transition = `none`
            train.style.transform = `translateY(${-25*count}%)` 
            },800)
           
        }
    },3000)

    //탭 메뉴
    const tabs = document.querySelectorAll(".tabs>a")
    const tabDesc = document.querySelectorAll(".tab-desc>ul")

    tabs.forEach((tab,idx)=>{
        tab.addEventListener("click",()=>{
            tabs.forEach(a=>{a.classList.remove("on")})
            tab.classList.add("on")
            tabDesc.forEach(ul=>{ul.classList.remove("on")})
            tabDesc[idx].classList.add("on")
        })
    })
})