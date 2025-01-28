function ObjectExamples(){
  let  animal :{ species : string , limbs : number , canRun : boolean }
  console.log ( animal={species : "homosapien" ,limbs: 2, canRun : true})

  let car :{
    make: string ,
    model: string,
    name: string ,
    seats: number
  }={
    make: "2020",
    model:"suv",
    name:"tesla cyber truck",
    seats:6
  }
  console.log(car)
  let student :{
    name : string ,
    age: string ,
    isEnrolled? : boolean,
}={
    name : " ashika dd",
    age: "21",
   isEnrolled: false ,

}
console.log(student)

let  personDetails :{
    readonly id : number,
    name:string 

}
personDetails={id: 21, name : "prakriti"}
//personDetails.id = 21; ---> gives error 

console.log(personDetails)
}


export default ObjectExamples;