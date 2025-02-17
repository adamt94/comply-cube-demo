"use client"

import { useEffect } from "react"

import Button from "@/components/Button/Button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/Form/Form"
import { Input } from "@/components/Input/Input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { UserDetails, userDetailsSchema } from "../schema/user"
import { useMutation } from "@tanstack/react-query"
import { createUser } from "../api/createUser"
import { CreateUserResponse } from "@/features/types/user"


type UserInputFormProps = {
  onSuccess: (value: CreateUserResponse) => void;
}

function UserInputForm({ onSuccess }: UserInputFormProps) {
  const form = useForm<UserDetails>({
    resolver: zodResolver(userDetailsSchema),
  })


  const { data, mutate } = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      console.log("User created successfully!")
    }
  })

  const onSubmit = (values: UserDetails) => {
    mutate(values)
  }

  useEffect(() => {
    if (data) {
      onSuccess(data)
    }
  }, [data, onSuccess])


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-6 max-w-64 justify-end">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormMessage className="min-h-[1rem]" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormMessage className="min-h-[1rem]" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="example@mail.com" {...field} />
              </FormControl>
              <FormMessage className="min-h-[1rem]" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="dateOfBirth"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="01/01/1990" {...field} />
              </FormControl>
              <FormMessage className="min-h-[1rem]" />
            </FormItem>
          )}
        />


        <Button className="bg-primary text-onPrimary" type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default UserInputForm;

