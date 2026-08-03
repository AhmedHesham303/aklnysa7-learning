import { supabase } from "@/supabase";
export const signIn = async (credentials: {
  email: string;
  password: string;
}) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: credentials.email,
      password: credentials.password,
    });
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    throw error;
  }
};
