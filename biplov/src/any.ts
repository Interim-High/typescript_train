 function AnyType(){
    let value: unknown = "hello, typescrpit devlopers"

    if (typeof value == "string"){
        console.log (value. toUpperCase())
    }
    function AnyPremitiveType(){
        let value: any = "hello developers";
        console.log(value.toUpperCase());
        
        value =42
        console.log(value + 1)
    
    }
    AnyPremitiveType();
}


export default AnyType;