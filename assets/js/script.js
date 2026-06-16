document.addEventListener("DOMContentLoaded", () => {
  let collapse = document.querySelector(".collapse");
  let asideli = document.querySelectorAll("aside nav>ul>li>a>span");
  let aside = document.querySelector("aside");
  let main = document.querySelector("main");
  let acardeonOpener = document.querySelectorAll("[data-acardeonOpener]");
  let dragable = document.querySelector(".dragable");
  let clicablemenu = document.querySelectorAll(".clicable-menu");
  let dataacardeons = document.querySelectorAll("[data-acardeons]");
  if (collapse) {
    collapse.addEventListener("click", (e) => {
      e.preventDefault();
      if (collapse.classList.contains("active")) {
        asideli.forEach((item) => {
          item.style.display = "inline";
        })
        collapse.classList.remove("active");
        aside.classList.remove("collapsed");
        main.classList.remove("active");
      } else {
        asideli.forEach((item) => {
          item.style.display = "none";
        })
        collapse.classList.add("active");
        aside.classList.add("collapsed");
        main.classList.add("active");
      }
    })
  }
  acardeonOpener.forEach(item => {
    let data = item.dataset;
    item.addEventListener("click", e => {
      e.preventDefault();
      let acardeonlink = item.getAttribute("data-acardeonOpener");
      let acardeon = document.querySelector("#" + acardeonlink);      
    })
  })
  if (clicablemenu.length > 0) {
    // منوی بازشوی کلیکی
    clicablemenu.forEach(item => {
      let hasChild = item.querySelectorAll(".has-child");
      hasChild.forEach(li => {
        li.addEventListener("click", () => {
          li.classList.add("active");
        });
        li.querySelector("a").addEventListener("click", e => {
          e.preventDefault();
          e.stopPropagation();
          e.target.parent().click();
        })
      })

    })


  }
  if(dataacardeons.length >0){
     dataacardeons.forEach(item=>{
      let thisdataacardeon = item.getAttribute("data-acardeons");
      let dataAcardeonBelongto = document.querySelectorAll("[data-acardeon-belongto="+thisdataacardeon+"]");
      console.log(dataAcardeonBelongto);
      let dataAcardeonIn = document.querySelectorAll("[data-acardeon-in="+thisdataacardeon+"]");
      dataAcardeonIn.forEach(acardeonOpener=>{
        acardeonOpener.classList.remove = "active";
        acardeonOpener.addEventListener("click",function(e){
          e.preventDefault();
          this.classList.add("active");
          dataAcardeonBelongto.forEach(bilong=>{
            bilong.classList.remove("active");
            bilong.classList.add("hidden");

          })
          let acardeonlink = acardeonOpener.getAttribute("data-acardeonOpener");
          let dataAcardeon = document.querySelector("data-acardeon='"+acardeonlink+"'");
          dataAcardeon.classList.add("active");
          dataAcardeon.classList.remove("hidden");
        })
      })
      
     })
  }

})