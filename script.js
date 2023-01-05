async function data(){
    try{
      let url="https://api.artic.edu/api/v1/artworks"
      let fet = await fetch(url) 
      let jso = await fet.json()
      var cre_divs1=document.createElement("div")
      cre_divs1.setAttribute("class","container")
      var cre_divs2=document.createElement("div")
      cre_divs2.setAttribute("class","accordion w-80")
      cre_divs2.setAttribute("id","accordionExample")
      cre_divs1.append(cre_divs2)
     
for(var i = 0;i<12;i++){
    var cre_div1=document.createElement("div")
    cre_div1.setAttribute("class","accordion-item")

    var h=document.createElement("h2")
    h.setAttribute("class","accordion-header")
    h.setAttribute("id","headingOne")

    var btn=document.createElement("button")
    btn.setAttribute("class","accordion-button")
    btn.setAttribute("type","button")
    btn.setAttribute("data-bs-toggle","collapse")
    btn.setAttribute("data-bs-target","#collapseOne")
    btn.setAttribute("aria-expanded","true")
    btn.setAttribute("aria-controls","collapseOne")
    btn.innerText=`MR : ${jso.data[i].artist_titles}`


    var cre_div2=document.createElement("div")
    cre_div2.setAttribute("id","collapseOne")
    cre_div2.setAttribute("class","accordion-collapse collapse show")
    cre_div2.setAttribute("aria-labelledby","headingOne")
    cre_div2.setAttribute("data-bs-parent","#accordionExample")

    var cre_div3=document.createElement("div")
    cre_div3.setAttribute("class","accordion-body")

    var p1=document.createElement("p")
    p1.innerText=`ARTIST NAME : ${jso.data[i].artist_titles[0]}`
    var p2=document.createElement("p")
    p2.innerText=`ARTIST-ID : ${jso.data[i].artist_ids[0]}`
    var p3=document.createElement("p")
    p3.innerText=`DEPARTMENT-ID : ${jso.data[i].category_ids[0]}`
    var p4=document.createElement("p")
    p4.innerText=`DEPARTMENT-TITLE : ${jso.data[i].category_titles[0]}`
    var p5=document.createElement("p")
    p5.innerText=`MATERIAL NAME : ${jso.data[i].material_ids[0]}`
    var p6=document.createElement("p")
    p6.innerText=`MATERIAL-ID : ${jso.data[i].material_titles[0]}`

    cre_div3.append(p1)
    cre_div3.append(p2)
    cre_div3.append(p3)
    cre_div3.append(p4)
    cre_div3.append(p5)
    cre_div3.append(p6)
    cre_div2.append(cre_div3)
    h.append(btn)
    cre_div1.append(h)
    cre_div1.append(cre_div2)

    cre_divs2.append(cre_div1)

      
      
}
var get_body=document.querySelector("body")
get_body.insertAdjacentElement("beforeend",cre_divs1)
    }
    catch(e){
        console.log(e)
        console.log("this url is not valid")
    }

}
data()


