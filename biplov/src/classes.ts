 function  ClassesExample (){
    class  vehicle{
      Name : string ;
      constructor (Name: string){
        this.Name = Name;
      }
     canRun():void{
        console.log(`${this.Name}can run with wheels`)
     }
    }
    const mercedes = new vehicle("mercedes")
    mercedes.canRun();

//another example
class person{
    name : string;
    std_id : number ;
    constructor (std_id : number, name : string){
        this.std_id = std_id
        this.name = name
    }
    isPresent(): void {
        console.log(`${this.std_id}. ${this.name} is absent`)
    }
}
const student = new person(123,"prerana")
student.isPresent();
 }
 export default ClassesExample;