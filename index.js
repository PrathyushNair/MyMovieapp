
function searchmovie(){
const moviedisplay=document.querySelector("#moviedisplay")
s=document.querySelector("#nameofmovie").value
const url="http://www.omdbapi.com/?apikey=9dd3ac03&type=movie&t="+s
console.log(url)
fetch(url).then(function(res)
{     return res.json()
      }).then(function(resp){
             showmovie(resp)
         }) 
     fetch(url).catch(function(err){
         console.log("No movie my fried")
     })
}


 function showmovie(resp){
        const moviedisplay=document.querySelector("#moviedisplay")
        moviedisplay.innerText=null
       
        if(resp.Error=="Movie not found!"){
            nomovie=document.createElement("img")
            nomovie.src="https://images.unsplash.com/photo-1609743522653-52354461eb27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bm90JTIwZm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            nomovie.style.height="500px"
            moviedisplay.append(nomovie)
        }
        else{
            title=document.createElement("h1")
            director=document.createElement("h2")
            actors=document.createElement("h2")
            year=document.createElement("h2")
            plot=document.createElement("p")
            plot.style.fontSize="20px"
            imdb=document.createElement("h2")
            poster=document.createElement("img")
            poster.src="https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdmllfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            poster.style.width="500px"
            title.innerText=`Name:${resp.Title}`
            actors.innerText=`Actors:${resp.Actors}`
            director.innerText=`Director:${resp.Director}`
            year.innerText=`Release date:${resp.Released}`
            plot.innerText=`Plot: ${resp.Plot}`
            imdb.innerText=`IMDb:${resp.imdbRating}`
            //moviedisplay.append(title,director,actors,year,plot,imdb)
            if(resp.imdbRating>8.5)
            {
                imdb.innerText=`IMDb:${resp.imdbRating} Recommended`
                moviedisplay.append(poster,title,director,actors,year,plot,imdb)

             }
            else
            {
                moviedisplay.append(poster,title,director,actors,year,plot,imdb)
            }
        }
        
 }


// s="Interstellar"
// const url="http://www.omdbapi.com/?apikey=9dd3ac03&t="+s
// console.log(url)
// let x=fetch (url)
// x.then(function(res){
//     return res.json()
// }).then(function(resp){
//     console.log(resp)
//     // append(resp.data)
// })
// x.catch(function(err){
//     console.log(err)
// })
// const container=document.querySelector("#Container")
// function append(data){
//     data.map(function(el){
//         div=document.createElement("div")
//         div.style.display="flex"
//         p=document.createElement("p")
//         t=document.createElement("p")
//         p.innerText=el.first_name
//         t.innerText=el.last_name
//         div.append(t,p)
//         container.append(div)

//     })
    
// }