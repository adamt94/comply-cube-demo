import { z } from "zod";

export type UserDetails = z.infer<typeof userDetailsSchema>


export const userDetailsSchema = z.object({
  firstName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  dateOfBirth: z
    .string()
    .regex(/^\d{2}\/\d{2}\/\d{4}$/, {
      message: "Date of birth must be in DD/MM/YYYY format.",
    })
})
