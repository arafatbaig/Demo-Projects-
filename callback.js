const datas = [
    {name : "Iron man ", Power:"Suits"},
    {name:"SpiderMan",Power:"Spidey senses"}
];

function getDatas(){
setTimeout(()=> {
    let output = "";
    datas.forEach((data,index)=>{
        output+= `<li>${data.name}</li>`;
    })
    document.body.innerHTML =output
},1000);
}

function createdata(newdata,callback){
    setTimeout(() =>{
        datas.push(newdata);
        callback();

    },2000);
    
}

createdata({name:"Flash", Power: "Speed "},getDatas)





