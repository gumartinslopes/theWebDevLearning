/*
    ser autenticavel significa ter um metodo autenticar
*/ 
export class AuthenticationSystem{
    static login(autenticable, password){
        return (autenticable.autenticathe(password));
    }
}