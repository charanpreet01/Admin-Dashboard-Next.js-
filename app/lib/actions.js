"use server"

import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";

export const addUser = async (formData) => {

    const { username, email, password, phone, isAdmin, isActive, address } = Object.fromEntries(formData);

    try {

        connectToDB();

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            phone,
            isAdmin,
            isActive,
            address
        })

        await newUser.save();

    } catch (error) {
        console.log(`Error adding user: ${error}`);
        throw new Error(`Failed to add user: ${error}`);
    }

    revalidatePath('/dashboard/users');
    redirect('/dashboard/users');

}

export const addProduct = async (formData) => {

    const { title, price, stock, color, size, desc } = Object.fromEntries(formData);

    try {

        connectToDB();

        const newProduct = new Product({
            title,
            price,
            stock,
            color,
            size,
            desc
        })

        await newProduct.save();

    } catch (error) {
        console.log(`Error adding product: ${error}`);
        throw new Error(`Failed to add product: ${error}`);
    }

    revalidatePath('/dashboard/products');
    redirect('/dashboard/products');

}