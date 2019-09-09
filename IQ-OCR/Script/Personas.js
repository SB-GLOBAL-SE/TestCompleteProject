function Persona(firstname){
  
 // constructor(firstname) {
    this.firstname = firstname;
    this.lastname = Project.Variables.VariableByName("PersonaData").Lastname(firstname);
    this.product = Project.Variables.VariableByName("PersonaData").preferredProduct(firstname);
    this.username = Project.Variables.VariableByName("PersonaData").username(firstname);
    this.password = Project.Variables.VariableByName("PersonaData").password(firstname);
 // }
  
  
}
//var PersonaObj = { Alice: { LastName: "Angular", username: "alice@localhost", password: "password1" }, Bob: LastName: "Bourne-Shell", username: "bob@localhost", password: "password2" } };

//let foo = new Persona(Alice);