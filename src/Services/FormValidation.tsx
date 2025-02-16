const SignupFormValidation = (name:string, value:string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=(.*[a-z]))(?=(.*[A-Z]))(?=(.*\d))(?=(.*[@$!%*?&]))[A-Za-z\d@$!%*?&]{8,15}$/;
    switch(name){
        case 'name':
            if(value.length===0){
                return "Name is required";
            }
            return "";
            case 'email':
                if(value.length===0){
                    return "Email is required";
                }
                if (!emailRegex.test(value)) {
                    return "Invalid Email";
                }
                return "";
            case 'password':
                if(value.length===0){
                    return "Password is required";
                }
                if(!passwordRegex.test(value)){
                    return "Password must be 8-15 characters long and must contain at least one uppercase letter, one lowercase letter, one number and one special character";
                }
                return "";
            default:
                return "";
    }
}

export default  SignupFormValidation ;