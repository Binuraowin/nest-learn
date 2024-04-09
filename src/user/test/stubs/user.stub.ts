import { User } from "src/user/entities/user.entity"


export const userStub = (): User => {
    return {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        password: "securepassword"
    }
}