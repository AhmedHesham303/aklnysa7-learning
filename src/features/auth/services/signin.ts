import { supabase } from "@/supabase";
export const signIn = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    console.log("Sign in success :", data);
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    console.error("Error signing in:", error);
    throw error;
  }
};
