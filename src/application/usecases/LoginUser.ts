import { AuthService } from "../../domain/services/AuthService";

export class LoginUser{
    constructor(private authService:AuthService){}

    async execute(email:string,password:string){
        return await this.authService.login(email,password);
    }
}