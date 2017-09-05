class RegistrationStore{
  constructor(){
    this.fields = {
      firstName:'',
      lastName:'',
      email:'',
      password:''
    }
    this.errors = {}
  }

  getFields(){
    return this.fields
  }

  getErrors(){
    return this.errors

  }

  validate(){
    this.errors = {
      firstName:[],
      lastName:[],
      email:[],
      password:[]
    }
    this.validatePresence('firstName')
    this.validateEmailLength('email')
    this.validatePresence('lastName')
    this.validatePasswordLength('password')
    this.validatePassword('password')
    this.validateEmail('email')

  }

  validatePresence(fieldName){
    if(this.fields[fieldName] === ''){
      this.addError(fieldName, 'is Required')
    }
  }

  validateEmailLength(fieldName){
    if(this.fields[fieldName].length < 9){
      this.addError(fieldName, 'Must be 8 characters long.')
      }
    }

  validatePasswordLength(fieldName){
    if(this.fields[fieldName].length < 9){
      this.addError(fieldName, 'Must be 8 characters long.')
      }
    }

validatePassword(fieldName){
    const passwordfilter = /^([0-9]+[a-zA-Z]+|[a-zA-Z]+[0-9]+)[0-9a-zA-Z]*$/
    if(!passwordfilter.test(this.fields[fieldName])){
      this.addError(fieldName, ' Must be alphanumeric.')
    }
  }


  validateEmail(fieldName){
    const filter = /^\w+([\.-]?\ w+)*@\w+([\.-]?\ w+)*(\.\w{2,3})+$/
    if(!filter.test(this.fields[fieldName])){
      this.addError(fieldName, ' Is not a valid e-mail.')
    }
  }

  addError(fieldName, message){
    this.errors[fieldName].push(message)
  }


//   addPasswordError(fieldName, message){
//     this.errors[fieldName].push(message)
//   }
}


const store = new RegistrationStore()
export default store
