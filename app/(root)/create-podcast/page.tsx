"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Inter } from 'next/font/google'

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

const CreatePodcast = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <section className = "mt-10 flex flex-col">
      <h1 className="text-24 font-bold text-white-1">Create A Podcast</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-12 flex w-full flex-col">
          <div className = "flex flex-col gap-[30px] border-b border-black-5 pb-10">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className = "flex flex-col gap-2.5">
                  <FormLabel className = "text-16 font-manrope text-white-1">Podcast Title</FormLabel>
                  <FormControl>
                    <Input className = "input-class focus-visible:ring-yellow" placeholder="What would you like to name your podcast?" {...field} />
                  </FormControl>
                  <FormMessage className = "text-white-1"/>
                </FormItem>
              )}
            />
          </div>
        </form>
      </Form>
    </section>
  )
}

export default CreatePodcast