const NestedObject = () => {
    let animal: {
      species: string;
      age: number;
      details: {
        color: string;
        habitat: string;
      };
    } = {
      species: "Tiger",
      age: 5,
      details: {
        color: "Orange with Black Stripes",
        habitat: "Forest",
      },
     
    };
  
    console.log(animal); // Use the value to avoid 'never read' warnings.
  
}
  
  export default NestedObject;
  