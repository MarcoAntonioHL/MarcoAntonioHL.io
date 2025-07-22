import {User} from "../../../domain/models/User";

export const UserMapper={
    fromApi(data:any):User{
        return {
            id:data.id,
            name:data.full_name,
            email:data.email_adress,
        }
    }

}