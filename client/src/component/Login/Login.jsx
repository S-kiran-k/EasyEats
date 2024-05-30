import { useForm } from "react-hook-form"
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner'
import "./Login.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
    const schema = z.object({
        email: z.string().email({ message: "*required" }),
        password: z.string().min(6, { message: "Please enter more than 6 characters" })
    })
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
        mode: "onBlur",
    }
    );
    const navigate = useNavigate();

    const handleSubmitForm = async (data) => {
        try {
            if (!data) {
                toast.error('Wrong Credentials')
            }
            else {
                const req = await axios.post("https://easyeats-1.onrender.com/login", data)
                if (req.status == 200) {
                    toast.success('Logged in Successfully')
                    console.log("data there")
                    navigate("/")
                }
            }
        }
        catch (error) {
            toast.error('Wrong Credentials')
        }
    }

    return (
        <>
            <div className="2xl:container contain">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-white ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl underline flex justify-center">
                                Login
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(handleSubmitForm)}>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 " htmlFor="email">Email:</label>
                                    <input placeholder="name@company.com" className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" id="email" type="email"
                                        {...register("email")}
                                    />
                                    <p className="text-red-500">{errors?.email?.message}</p>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 " htmlFor="password">password:</label>
                                    <input placeholder="••••••••" className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" id="password" type="password"
                                        {...register("password")} />
                                    <p className="text-red-500">{errors?.password?.message}</p>
                                </div>
                                <button className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Login