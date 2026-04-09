import { supabase } from '../lib/supabase';
import type { User } from '../types/user';

export const createUser = async (payload: User) => {
  const { data, error} = await supabase 
    .from('users')
    .insert([payload])
   
    if(error) throw new Error(error.message)

        return data
}

export const fetchUsers = async ()=> {
    const {data, error} = await supabase
    .from("users")
    .select("*")
    // .order("created_at", { ascending: false})

    if(error) throw new Error(error.message)
        return data
}