const express = require("express");
const { faker } = require('@faker-js/faker');
const app = express();
const port = 8000;

//CLASE USERS----------------------------------------------------------------------------------------------------

  class User {
      constructor(){
     this._id= faker.random.uuid();
     this.nombre= faker.name.firstName();
     this.apellido= faker.name.lastName();
     this.telefono= faker.phone.phoneNumber();
     this.email= faker.internet.email();
     this.password= faker.internet.password();
      }
}


app.get("/api/users/new", (req, res) => {
   const user4 = new User();
    res.json({data: user4});  
    console.log(users4, "users")
});



//clase EMPRESA--------------------------------------------------------------------------------------------
class Empresa {
    constructor(){
   this._id= faker.random.uuid();
   this.nombre= faker.name.firstName();
   this.direccion={ 
        calle: faker.address.streetAddress(),
        ciudad: faker.address.city(),
        estado: faker.address.state(),
        codigopostal: faker.address.zipCode(),
        pais: faker.address.country()
   }
    }
}
app.get("/api/empresa/new", (req, res) => {
    const empresa1 = new Empresa();
     res.json({data: empresa1});  
     console.log(empresa1, "empresa")
 });

 //API USER-COMPANY---------------------------------------------------------------------------------------------------
 app.get("/api/usercompany/new", (req, res) => {
     const empresa5 = new Empresa();
     const user5 = new User();
     res.json({data1: empresa5, data2: user5}); 
     console.log(empresa1, "empresa")
 });



//console.log(new empresa());

app.listen( port, () => console.log(`Holita : ${port}`) );

//EMPRESA CON DIRECCION ANIDADA
/*class Empresa {
    constructor(){
   this._id= faker.random.uuid();
   this.nombre= faker.name.firstName();
   this.direccion= [
        this.calle= faker.address.streetAddress(),
        this.ciudad= faker.address.city(),
        this.estado= faker.address.state(),
        this.codigopostal= faker.address.zipCode(),
        this.pais= faker.address.country()
   ]
   
    }
}*/


