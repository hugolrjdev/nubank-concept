import { AsideBar, NavBar } from "@/components";
import { ContextTestProvider } from "@/contexts";

export default function Home() {
  return (
   <main className="flex flex-row justify-between mx-8 my-8">
    <h1>
      Exemplo de contexto
    </h1>
    <ContextTestProvider>
      <NavBar />
      <AsideBar />
    </ContextTestProvider>

    </main>
  );
}
