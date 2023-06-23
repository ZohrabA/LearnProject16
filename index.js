// let rows= document.querySelectorAll("table tbody tr");
// let pagePerCount = 1;
// let currentpage = 0;



// for(let i = pagePerCount  ; i < rows.length; i++){
//     rows[i].classList.add("hide")
// }


// let totalPageCount = Math.ceil( rows.length / pagePerCount);
// let pagination = document.querySelector(".pagination");



// const goToPage =(e)=>{
//     let page = e.target.getAttribute("datapage")
//     let start = page  * pagePerCount;
//     let end = start + pagePerCount;
//     for(let i= 0; i< rows.length; i++){
//         rows[i].classList.add("hide")
//     }
//     for(let i= start; i< end && i <rows.length ; i++){
//         rows[i].classList.remove("hide")
//     }

// // rows[start].classList.remove("hide");
// const lists = [...document.querySelectorAll("ul li")];
// lists.map((a)=>{
//     a.addEventListener("click", ()=>{
//         document.querySelector(".active") &&
//         document.querySelector(".active").classList.remove("active")
//         a.classList.add("active")
//     })
// })

// }



// for(let i =  0 ;  i < totalPageCount  ; i++){

//         let li = document.createElement("li");
//         //li.classList.add((i===0) ? "active" : "lost") bu asagidaki ifle eyniisi gorur ama burda : sonra mutleq "" icinde nese yazilmalidi deye asagidaki daha yaxsidi.
        
//         li.setAttribute("datapage", i);
//         li.addEventListener("click", goToPage)
//         if(i==0){
//             li.classList.add("active")
//         }
//         li.innerText = i + 1
//         pagination.append(li)
    
// }






/////////////////////////        menuya activin verilmesi      ///////////////////////////////////////////////////////                        



let rows = document.querySelectorAll("tbody tr");
let countPerPage = 1;
let currentpage = 1;
let totalCount = Math.ceil(rows.length / countPerPage);
let pagination = document.querySelector(".pagination");
// let div = document.createElement("div")
// div.classList.add("divOne")
// let span = document.createElement("span")
// span.classList.add("spanSircle")
// let spann = document.createElement("span")
// spann.classList.add("spanSircle")
// let spannn = document.createElement("span")
// spannn.classList.add("spanSircle")
// div.append(span, spann, spannn)

for(let i = countPerPage; i < rows.length; i++){
    rows[i].classList.add("hide")
}

const makePagination =()=>{
   pagination.innerHTML= ""
    //let data = e.target.getAttribute("dataCount")
    
        for(let i = currentpage -4; i <= currentpage +4; i++ ){
     
            if(i <= 0 || i > totalCount){
                continue;
            }
            let li = document.createElement("li");
                li.innerText = i;
                pagination.append(li);
                li.addEventListener("click", ()=>{
                    currentpage = i
                    showPage(currentpage)
                })
    
                if(i == currentpage ){
                    li.classList.add("active")
                }
        }

    
    




    
    let lists = [...document.querySelectorAll(".pagination li")];
    lists.map(a=>{
        
        a.addEventListener("click", ()=>{
            document.querySelector(".active") &&
            document.querySelector(".active").classList.remove("active");
            a.classList.add("active");
        

})})}

const showPage = (e)=>{
    makePagination()

    let page = e
    let start = (page - 1) * countPerPage;
    let end = start + countPerPage;

    for(let i = 0; i < rows.length; i++ ){
        rows[i].classList.add("hide")
    }

    for(let i = start; i < end && i < rows.length; i++){
        rows[i].classList.remove("hide")
    }
}



showPage(currentpage)


