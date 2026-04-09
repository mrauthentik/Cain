import { z } from 'zod'

export const userSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters long'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(2, 'Role is required')
})

export type UserFormData = z.infer<typeof userSchema>

