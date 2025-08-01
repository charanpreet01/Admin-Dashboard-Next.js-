import { User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q) => {

    const regex = new RegExp(q, 'i'); // 'i' for case-insensitive search

    try {
        connectToDB();

        const users = await User.find({ username: { $regex: regex } });

        return users;

    } catch (error) {
        console.log("Error in fetching users: ", error);
        throw new Error(error);
    }

}