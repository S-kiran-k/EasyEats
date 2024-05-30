const { PrismaClient } = require('@prisma/client');
const express = require('express'); // Correct module import
const bcrypt = require("bcrypt");
const Razorpay = require("razorpay");
const cors = require('cors')
const app = express(); // Create an instance of the eximport { PrismaClient } from '@prisma/client';
const port = 8080;
require("dotenv").config();



const prisma = new PrismaClient();
// Use middleware to parse JSON request bodies
app.use(express.json());
app.use(cors())


app.get("/", (req, res) => {
    //Data from frontend[optional for get]
    //DB Logic
    const allData = prisma.user.findMany();
    console.log(allData);
    //Send Data to frontend [a message to frontend] 
    res.json({ message: "Working Fine", data: allData })
})

// app.get("/:id", (req, res) => {
//     //Data from frontend[optional for get]
//     const userId = req.params;
//     console.log(userId)
//     //DB Logic
//     const allData = prisma.user.findUnique({
//         where: {
//             id: userId.id
//         }
//     });
//     console.log(allData);
//     //Send Data to frontend [a message to frontend] 
//     res.json({ message: "Data from the get", data: allData })
// })





app.post("/register", async (req, res) => {
    try {
        //Data from frontend[optional for get]
        const { name, age, email, password } = req.body
        //DB Logic
        //to check if the user is already present 
        const existingUser = await prisma.user.findUnique({
            where: {
                email: email
            }
        });
        console.log(existingUser)
        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "Email is already registered",
            });
        }
        // console.log("data from the existing user", existingUser)
        const hashedpassword = await bcrypt.hash(password, 10);
        // console.log("hashed password", hashedpassword)
        //creating a new user in the database
        const newUserData = await prisma.user.create({
            data: {
                name: name,
                age: age,
                email: email,
                password: hashedpassword
            }
        });
        //sending the data to the user that the user has been created
        res.status(200).json({
            success: true,
            message: "added new user",
            // data: {
            //     user_id: newUserData.user_id
            // }
        })
        console.log("new user data", newUserData);
        //Send Data to frontend [a message to frontend] 
    }
    catch (error) {
        // Handle errors
        console.error("Error registering user:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
})

// app.post('/login',async(req,res)=>{

//     try{
//         const data = req.body //get the data from the frontend
//         const userData = await prisma.user.findUnique({//getting the email here
//             where:{
//                 email:data.email
//             }
//         })
//         //check weather the user is present or not

//         if(userData === null ){
//             res.status(404).json({message:"User not present pls register"})
//         }
//         const passwordMatch = await bcrypt.compare(data.password, userData.password);// hashing the password
//         if(passwordMatch){
//             res.status(202).json({message:"logged in successfully"})
//         }
//         console.log(passwordMatch)
//     }
//     catch(e){
//         console.log(e)
//     }


//     //db logic

//     //give the data to the frontend
// })

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body; // Get the data from the frontend

        // Retrieve user data from the database based on the provided email
        const userData = await prisma.user.findUnique({
            where: {
                email: email
            }
        });

        if (!userData) {
            return res.status(404).json({ message: "User not found" });
        }

        // Compare the hashed password retrieved from the database with the password provided
        const passwordMatch = await bcrypt.compare(password, userData.password);

        if (passwordMatch) {
            // Passwords match, login successful
            // console.log("Login successful");
            res.json({ message: "Login successful" });
        } else {
            // Passwords don't match, handle incorrect password scenario
            // console.log("Incorrect password");
            res.status(401).json({ message: "Incorrect password" });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Internal server error" });
    }
});



app.get("/menu", async (req, res) => {
    //
    //
    try {
        const data = await prisma.menucard.findMany();
        res.status(202).json({ message: "Got the data", data: data })
    }
    catch (error) {
        console.log(error)
        res.status(405).json({ message: "Error in getting the data" })
    }
})
app.post("/menu", async (req, res) => {
    try {
        const { menu_card_id, menu_name, menu_image } = req.body;
        const newMenu = await prisma.menucard.create({
            data: { menu_card_id, menu_name, menu_image }
        });
        res.status(201).json({ message: "Menu created successfully", data: newMenu });
    } catch (error) {
        console.error("Error creating menu:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
app.put("/menu", async (req, res) => {
    try {
        const { menu_card_id, menu_name, menu_image } = req.body;
        const updatedMenu = await prisma.menucard.update({
            where: { menu_card_id },
            data: { menu_name, menu_image }
        });
        res.status(200).json({ message: "Menu updated successfully", data: updatedMenu });
    } catch (error) {
        console.error("Error updating menu:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
app.delete("/menu", async (req, res) => {
    try {
        const { menu_card_id } = req.body;
        await prisma.menucard.delete({ where: { menu_card_id } });
        res.status(200).json({ message: "Menu deleted successfully" });
    } catch (error) {
        console.error("Error deleting menu:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
app.get("/foodlist", async (req, res) => {
    try {
        const data = await prisma.foodList.findMany();
        res.status(200).json({ message: "Data fetched successfully", data });
    } catch (error) {
        console.error("Error fetching food list:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
app.get("/foodlist/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const data = await prisma.foodList.findUnique({ where: { foodlist_id: id } });
        res.status(200).json({ message: "Data fetched successfully", data });
    } catch (error) {
        console.error("Error fetching food list item:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
app.post("/foodlist", async (req, res) => {
    try {
        const { restaurantId, name, image, price, offer, description, category } = req.body;
        // const existingFoodItem = prisma.foodList.findUnique({
        //     where:{
        //         name: name
        //     }
        // })
        // if (existingFoodItem) {
        //     return res.status(409).json({
        //         success: false,
        //         message: "Food item already present"
        //     });
        // }
        const newFoodItem = await prisma.foodList.create({
            data: { restaurantId, name, image, price, offer, description, category }
        });
        res.status(201).json({ message: "Food item created successfully", data: newFoodItem });
    } catch (error) {
        console.error("Error creating food item:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
app.put("/foodlist", async (req, res) => {
    try {
        const { foodlist_id,restaurantId, name, image, price, offer, description, category } = req.body;
        const newFoodItem = await prisma.foodList.update({
            where: { foodlist_id },
            data: { restaurantId, name, image, price, offer, description, category }
        });
        res.status(201).json({ message: "Food item updated successfully", data: newFoodItem });
    } catch (error) {
        console.error("Error updating food item:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
app.delete("/foodlist", async (req, res) => {
    try {
    const { foodlist_id} = req.body;
       await prisma.foodList.update({
            where: { foodlist_id },
        });
        res.status(201).json({ message: "Food item delete successfully", data: newFoodItem });
    } catch (error) {
        console.error("Error creating food item:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});



// Payements
app.post("/order", async (req, res) => {
    try {

        const razorpay = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_SECRET,
        });

        const options = req.body; // Options might include amount, currency, etc.
        console.log(options);

        // Create an order using Razorpay API
        const order = await razorpay.orders.create(options);

        // Check if the order creation was successful
        if (!order) {
            // If order creation failed, return a 500 Internal Server Error response
            return res.status(500).send("Error creating order");
        } else {
            // If order creation succeeded, send the order details in the response to frontend
            res.json(order);
        }
    } catch (error) {
        // Handle errors
        console.error("Error creating order:", error);
        res.status(500).send("Error creating order");
    }
});

app.post("/order/validate", async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
        req.body;

    const sha = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET);
    // order_id + "|" + razorpay_payment_id
    sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);
    const digest = sha.digest("hex");

    if (digest !== razorpay_signature) {
        return res.status(400).json({ msg: "Transaction is not legit!" });
    }

    res.json({
        msg: "success",
        orderId: razorpay_order_id,
        paymentId: razorpay_payment_id,
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`); // Template string for better readability
});




// added new data 
