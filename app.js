

let pronoun=["the" ,"our","your"];
let adj=["best", "great","mostbeauty"];
let sust=["siteweb", "hotdog","sport"];
let exte=[".com", ".es",".ve"];

for(let pron of pronoun){
    
    for(let ad of adj){
        
        for(let sus of sust){
            for(let ex of exte){
                console.log(pron+ad+sus+ex)
            }
        }
    }

}
//for(let i=0;i<pronoun.length;i++){
    
//     let a=i+1;
//     let b=i+2;
//     if(a==3 && b==4){
//         a=0;
//         b=1;}
//     if(b==3){
//     b=0;  }
        
// console.log(pronoun[i].concat("",adj[b],sust[a],exte[b]))
// console.log(pronoun[a].concat("",adj[i],sust[b],exte[i]))
//console.log(pronoun[b].concat("",adj[a],sust[i],exte[a]))}

