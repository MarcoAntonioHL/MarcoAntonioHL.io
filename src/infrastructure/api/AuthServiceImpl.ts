import { AuthService } from "../../domain/services/AuthService";
import { User } from "../../domain/models/User";
import { UserMapper } from "./mappers/UserMapper";

export class AuthServiceImpl implements AuthService{
    async login(email:string,password:string):Promise<User>{
        const res=await fetch ("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        });
        const data =await res.json();
        return UserMapper.fromApi(data);
    }
}