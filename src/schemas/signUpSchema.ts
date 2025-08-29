import {email, z} from 'zod'

export const usernameValidation = z 
.string()
.min(6 , "Username atleast 6 characters")
.max(20 , "Username atmost 20 characters ")
.regex(/^[a-zA-Z0-9]+$/, "Username must not contain speacial character")

export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: "Invalid Email Adress"}),
    password: z.string().min(6 , {message: "Password must be at least 6 characters"})
})