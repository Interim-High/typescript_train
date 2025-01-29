function GenericsExample(){
    function identity <T>(value :T):T{
        return value;
    }
    console.log(identity<string>("hello world"))
    console.log(identity<number>(123))
}
export default GenericsExample;