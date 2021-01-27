/*
    ser autenticavel significa ter um metodo autenticar

    duck type
*/ 
export class AuthenticationSystem{
    static login(autenticable, password){
        if(AuthenticationSystem.isAthenticable(autenticable)){
            return (autenticable.authenticate(password));
        }
        return false;
    }

    static isAthenticable(autenticable){
       return "authenticate" in autenticable && 
       autenticable.authenticate instanceof Function;
    }
}