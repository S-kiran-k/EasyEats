import { useForm } from "react-hook-form"
import { string, z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import axios from "axios"
import { toast } from 'sonner';
import { useNavigate } from "react-router-dom";
import "./Register.css"

const schema = z.object({
    name: string().min(1, { message: "*required" }),
    email: string().email({ message: "*required" }),
    age: string().min(2, { message: "*required" }).refine(value => parseInt(value) > 18, { message: "Age must be greater than 18" }),//age > 18  age < 18 your not elegible
    password: string().min(6, { message: "Please enter more than 6 characters" }),
    confirm: string()

}).refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ["confirm"], // path of error
});


function Register() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
        mode: "onBlur"
    })
    const handleSubmitform = async (data) => {
        try {

            const res = await axios.post("http://localhost:8080/register", data)
            if (res.status === 200) {
                toast.success("Registered successfully");
                navigate("/")
            }

        }
        catch (error) {
            toast.error("User Already Registered")
        }
    }
    return (
        <>
            <section className="2xl:container py-5 contain">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-white">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl underline flex justify-center">
                                Register
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(handleSubmitform)} >
                                <div>
                                    <label htmlFor="names" className="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
                                    <input type="text" name="names" id="names" className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Andrew Stewart"
                                        {...register("name")}
                                    />
                                    <p className="text-red-500">{errors?.names?.message}</p>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                                    <input type="email" name="email" id="email" className="sm:text-sm rounded-lg border focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 border-gray-500  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"
                                        {...register("email")}
                                    />
                                    <p className="text-red-500">{errors?.email?.message}</p>
                                </div>
                                <div>
                                    <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900 ">Age</label>
                                    <input type="text" name="age" id="age" placeholder="Eg.18" className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        {...register("age")}
                                    />
                                    <p className="text-red-500">{errors?.age?.message}</p>

                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                    <input type="password" name="password" placeholder="••••••••" id="password"
                                        {...register("password")} className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    <p className="text-red-500">{errors?.password?.message}</p>

                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">confirmPassword</label>
                                    <input type="password" name="confirm" placeholder="••••••••" id="confirm"
                                        {...register("confirm")} className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    <p className="text-red-500">{errors?.confirm?.message}</p>

                                </div>
                                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign in</button>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register