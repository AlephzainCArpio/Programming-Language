
const UserData =  {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john@example.com",
    isAdmin: false,
    fullname: function(){
        return this.firstName+ " " + this.lastName;
    },
    Information:function(){
        console.log("User Information")
        console.log("Fullname: " + UserData.fullname());
        console.log("Age: " + UserData.age);
        console.log("Email: " + UserData.email);

        if(this.isAdmin){
            console.log("Role: Admin");
        }
        else{
            console.log("Role: User")
        }
    },
    adminInformation:function(){
        this.isAdmin = true
        console.log("Admin Information")
        console.log("Fullname: " + UserData.fullname());
        console.log("Age: " + UserData.age);
        console.log("Email: " + UserData.email);

        if(this.isAdmin){
            console.log("Role: Admin");
        }
        else{
            console.log("Role: User")
        }
    }
    
}


UserData.Information()
UserData.adminInformation()