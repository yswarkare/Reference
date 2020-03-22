class person {
	constructor (firstname, middlename, lastname,){
		this.firstname = firstname;
		this.middlename = middlename;
		this.lastname = lastname;
    this.fullname;
	}
	printName(){
		this.fullname = this.firstname + " " +this.middlename +" "+ this.lastname;
    //return this.fullname;
    // return () =>{
    console.log(this.firstname + " " + this.lastname);
    // }
	}
}

var rick = new person("Richard", "Steven", "Sanchez");

//rick.firstname;
//rick.middlename;
//rick.lastname;
//rick.printName();
rick.firstname = "Rick";
rick.firstname;
rick.printName();