import User from "@lib/models/User";
import { connectToDB } from "@lib/mongodb/mongoose";

export const createUser = async (id, first_name, last_name, image_url, email_addresses, username) =>{

    try{
        await connectToDB();

        const user = await User.create({
            clerkId: id,
            firstName: first_name,
            lastName: last_name,
            profilePhoto: image_url,
            email: email_addresses[0].email_address,
            username: username
        })

        await user.save();
         
    } catch (err){
        console.log(`user not created`, err)
    }
}