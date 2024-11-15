import { ClientComponentOne } from "@/components/clientComponentOne";
import { ClientComponentTwo } from "@/components/clientComponentTwo";
import { ServerComponentOne } from "@/components/serverComponentOne";
import { ServerComponentTwo } from "@/components/serverComponentTwo";

export default function InterleavingPage() {
  return (
    <>
      <h1>Interleaving Page</h1>
      <ClientComponentOne>
         <ServerComponentOne/>
      </ClientComponentOne>
      <ClientComponentTwo/>
    </>
  );
}
