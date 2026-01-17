import { AuthProvider } from "@/components/AuthProvider/AuthProvider";

export default function rsvpLayout({ children }: React.PropsWithChildren<{}>) {
  return <AuthProvider>{children}</AuthProvider>;
}
