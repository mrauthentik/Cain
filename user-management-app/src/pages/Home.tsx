import { useEffect } from "react"
import { fetchUsers } from "../services/userService"


const  Home=()=>{
    useEffect(()=> {
        fetchUsers().then((data)=> console.log(data))
    }, [])

    return <div> Supabase Connected</div>
}
export default Home