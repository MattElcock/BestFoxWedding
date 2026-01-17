import { auth0 } from "@/lib/auth0";
import { redirect } from "next/navigation";

const AuthProvider = async ({ children }: React.PropsWithChildren<{}>) => {
  const session = await auth0.getSession();
  const user = session?.user;

  if (!user) {
    redirect("/auth/login");
  }

  return children;
};

export { AuthProvider };
