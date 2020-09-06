const myObj = [
    {
    id : 01,
    firstname : "suraj",
    lastname : "sable",
    village :"Dharmasagar"
    },
    {
                id : 02,
                firstname : "suraj1",
                lastname : "sable",
                village :"Dharmasagar"
                },
                {
                    id : 03,
                    firstname : "suraj2",
                    lastname : "sable",
                    village :"Dharmasagar"
                    },
                    {
                        id : 04,
                        firstname : "sura3",
                        lastname : "sable",
                        village :"Dharmasagar"
                        }
]

const demo = [10,20,03,04,06];

demo.reduce(function(acc,curr){
    acc +=curr;
    console.log(acc)
    return acc;
},0)

myObj.filter(item=>{
    if(item.id === 02){
        // console.log(item.village);
    }
    // console.log(item.firstname);
})
myObj.map(item=>{
    // item.firstname * 2
    // console.log(item.firstname);
})
for(var i=0;i < 100;i+=2){ //odd numbers 
    //  console.log(i)
} 
for(var i=1; i<100;i+=2){ //even numbers
    // console.log(i);
}