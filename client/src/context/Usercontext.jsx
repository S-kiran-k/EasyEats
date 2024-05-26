import { createContext } from "react"
const UserContext = createContext({
    userData: {}, // Will have the user data
    setUser: () => { }, // Set user data
});

export default UserContext