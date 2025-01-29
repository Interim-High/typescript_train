 const ArrayofObject =()=>{
     let house :{
       floor : number,
       rooms : number ,
       details :{
        color : string,
        cost : number 
       },
     }[];
     house = [{
        floor: 3,
        rooms : 4,
        details:{
            color : "red",
            cost: 20000
            
        }
     },{
        floor: 6,
        rooms : 4,
        details:{
            color : "black",
            cost: 30000
            
        }
     }]
     console.log(house)
 }
 
 export default ArrayofObject ;