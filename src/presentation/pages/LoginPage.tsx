import { useState } from "react";
import { AuthServiceImpl } from "../../infrastructure/api/AuthServiceImpl";
import { LoginUser } from "../../application/usecases/LoginUser";

const authService=new AuthServiceImpl();// DI manual
const loginUser=new LoginUser(authService);

export function LoginPage(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const handleLogin=async()=>{
        const user=await loginUser.execute(email,password);
        alert(`Bienvenido, ${user.name}`)
    };
    return(
        <div>
            <h2>Iniciar sesión</h2>
            <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input placeholder="Contraseña" type="password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}