//promises.then()
//async wait..
//axios /fetch


const url = 'https://restcountries.com/v2/all'

async function getallcountriesfromapi(){
    
    //await 
    const response = await fetch(url)

    const data = await response.json();
    // using for loop
    /*for(i=0;i<250;i++){
        document.getElementById('list').innerHTML += `<li> ${data[i].name} </li>`
    }*/
    
    //using forEach
    //To print Countries and their population side by side
    data.forEach(function(data) {
        document.getElementById('list').innerHTML += `<li> ${data.name} : ${data.population} </li>`;
    });
    //To print Countries and their capital side by side
    data.forEach(function(data) {
        document.getElementById('cap').innerHTML += `<li> ${data.name} : ${data.capital} </li>`;
    });


    const x=[
        {
            "name":"Harry Potter",
             "city":"London"
        },
        {
            "name":"Don Quixote",
            "city":"Madrid"
        },
        {
            "name":"Joan of Arc",
            "city":"Paris"
        },
        {
            "name":"Rosa Park",
            "city":"Alabama"
        },
        {
            "name":"John",
            "city":" Paris"
        }
    
        ]	
          
        //To print all the names in x
        x.forEach(function(x){
            document.getElementById('names').innerHTML += `<ul> ${x.name} </ul>`
           
        })
        //To print user names with london as their city
        x.forEach(function(x){
            if(x.city == "London"){
                document.getElementById('namewithlondon').innerHTML = `<p> ${x.name}</p>` 
            }
            

        })
        /*const foundDuplicateName = x.find((nnn, index) =>{
            return x.find((a, ind)=> a.city === nnn.city && index !== ind )
             })
             
             console.log(foundDuplicateName)*/

             let a = [
                ...new Map(x.map((item) => [item["city"], item])).values(),
             ];
             console.log(a)
}
const freefakeapi1 = 'https://jsonplaceholder.typicode.com/posts'
const freefakeapi2 = 'https://fakestoreapi.com/products'
const freecats = 'https://api.thecatapi.com/v1/breeds'

async function freefakeapi(){
    const ffa = await fetch(freefakeapi1)
    

    const ffadata = await ffa.json();
    

    //To get all the users with user id 1
    let car = ffadata.filter(ffadata => ffadata.userId === 1);
    //Insert all the objects as rows into a table using DOM
    var table = document.getElementById('mytable')
    car.forEach(function(x){
            var row = `<tr>
                        <td>${x.userId}</td>
                        <td>${x.id}</td>
                        <td>${x.title}</td>
                        <td>${x.body}</td>
                        </tr>`
            table.innerHTML += row
        })
    
    
   
}
async function freefakestore(){
    const ffa1 = await fetch(freefakeapi2)
    const ffadata1 = await ffa1.json();
    arrr = []
    
    ffadata1.forEach(function(ffadata1){
        if(ffadata1.price >= 100){
            document.getElementById('prices').innerHTML += `<ul> Product Name:  ${ffadata1.title} :- &nbsp; Price: ${ffadata1.price} </ul>`
        }
    arrr.push(ffadata1.title)
})
  document.getElementById('as').innerHTML += `<ul> ${arrr.sort()} </ul><br>`  
}

async function fakeapicats(){
    const f = await fetch(freecats)
    const ffadata3 = await f.json();

    
    arr = []
    ffadata3.forEach(function(ffadata3){
       arr.push(ffadata3.name)
       //let arr2 = arr.sort((a,b) => a.name.localeCompare(b.name))
    
       if(ffadata3.country_codes === "US"){
        document.getElementById('cats1').innerHTML += `<ul> ${ffadata3.name} </ul>`
    }

       
       
    })
    document.getElementById('cats').innerHTML += `<ul> ${arr.reverse()} </ul>`

    
    

} 
freefakestore();
getallcountriesfromapi();
freefakeapi();
fakeapicats();