


// ???
   
// fetch dataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

fetch("data.json").then(res => res.json())
.then(data => {

    let care = document.getElementById("care");
    care.innerHTML=`
    <div id="car">
            <div id="d2"><img id="im" src="${data.banner.b1}" alt=""></div>
        </div>
        <div id="car">
            <div id="d2"><img id="im" src="${data.banner.b2}" alt=""></div>
        </div>
        <div id="car">
            <div id="d2"><img id="im" src="${data.banner.b3}" alt=""></div>
        </div>
        <div id="car">
            <div id="d2"><img id="im" src="${data.banner.b4}" alt=""></div>
        </div>
        <div id="car">
            <div id="d2"><img id="im" src="${data.banner.b5}" alt=""></div>
        </div>
    `

let all = document.getElementById("all");
let listdivlatest = document.getElementById("listdivlatest");


for (let j = 0; j < 1000; j++) {

listdivlatest.innerHTML+=`
<div class="list"> <a href="${data.latest[j].link}" ><img id="listimg" src="${data.latest[j].img}" alt="${data.latest[j].movie}"></a> </div>
`   
}


});

fetch("data.json").then(res => res.json())
.then(data => {
    let listdivpopular = document.getElementById("listdivpopular");
    let listdivrecommanded = document.getElementById("listdivrecommanded");

    for (let i = 0; i < 30; i++) {
    
        listdivpopular.innerHTML+=`
        <div class="list"> <a href="${data.popu[i].link}" ><img id="listimg" src="${data.popu[i].img}" alt="${data.popu[i].movie}"></a> </div>
        `   
        }
       
});

fetch("data.json").then(res => res.json())
.then(data => {
    let listdivrecommanded = document.getElementById("listdivrecommanded");

   
        
        for (let h = 0; h < 30; h++) {
    
            listdivrecommanded.innerHTML+=`
            <div class="list"> <a href="${data.recome[h].link}" ><img id="listimg" src="${data.recome[h].img}" alt="${data.recome[h].movie}"></a></div>
            `   
            }
});


function moviemenustart(params) {
    document.getElementById("moviemenu").style.display="block";
}

function moviemenuend(params) {
    document.getElementById("moviemenu").style.display="none";
}
function hovermovie(params) {
    document.getElementById("linemenu").style.display="block";
}

function hoverendmovie(params) {
    document.getElementById("linemenu").style.display="none";
    document.getElementById("leftslideline").style.left="-60%"

}

function leftslide(params) {
    document.getElementById("leftslideline").style.left="0px"
    document.getElementById("linemenu").style.display="block";

}





















// all.innerHTML+=`<div id="latest">
// <div id="latesthead"> <h2 id="heading">Latest & Trending</h2></div>
// <div class="listdiv" id="latestcontent">
// <div class="list"> <img id="listimg" src="l.webp" alt=""> </div>
//     <div class="list"><img id="listimg" src="l.webp" alt=""> </div>
//     <div class="list"><img id="listimg" src="l.webp" alt=""> </div>
//     <div class="list"><img id="listimg" src="l.webp" alt=""> </div>
//     <div class="list"><img id="listimg" src="l.webp" alt=""> </div>
// </div>
// </div>`