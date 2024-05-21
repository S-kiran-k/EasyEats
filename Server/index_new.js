const { PrismaClient } = require('@prisma/client');
const express = require('express'); // Correct module import
const bcrypt = require("bcrypt");
const cors = require('cors')
const app = express(); // Create an instance of the eximport { PrismaClient } from '@prisma/client';
const port = 8080;


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
    res.json({ message: "Working Fine" })
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

        console.log("data from the existing user", existingUser)
        const hashedpassword = await bcrypt.hash(password, 10);
        console.log("hashed password", hashedpassword)


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


app.listen(port, () => {
    console.log(`Listening on port ${port}`); // Template string for better readability
});

// added new data 
