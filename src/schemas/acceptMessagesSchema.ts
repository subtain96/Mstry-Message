import {z} from "zod"


export const acceotMessageSchema = z.object
({
    acceptMessages: z.boolean()
})