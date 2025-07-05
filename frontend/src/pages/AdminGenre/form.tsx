import TitleHeading from "@/components/titleHeading";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createGenre, genreSchema, updateGenre, type GenreValues } from "@/services/auth/genre/genre.service";
import type { Genre } from "@/services/auth/genre/genre.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Save } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function AdminGenreForm() {
    const detail = useLoaderData() as Genre | undefined

    const form = useForm<GenreValues>({
        resolver: zodResolver(genreSchema),
        defaultValues: {
            name: detail?.name,
        },
    });

    const navigate = useNavigate()

    const {isPending, mutateAsync} = useMutation({
        mutationFn: (data: GenreValues) => detail === undefined ? createGenre(data) : updateGenre(data, detail._id),
    })

    const onSubmit = async (val: GenreValues) => {
        try {
            await mutateAsync(val)

            navigate("/admin/genres")

            toast.success(`Genre successfully ${detail === undefined ? "created" : "updated"}`)
        } catch (error) {
            console.log(error)
            toast.error("Failed to create genre")
        }
    };

    return (
        <>
            <TitleHeading title={`${detail === undefined ? "Create" : "Update"} Data Genre`} />

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-1/2">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button isLoading={isPending}>
                        <Save className="w-4 h-4 mr-2" />
                        Submit
                    </Button>
                </form>
            </Form>
        </>
    );
}