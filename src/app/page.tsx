import Image from "next/image";
import hero from "@/assets/hero.svg"

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-80px)] flex-col items-center p-24 gap-2">
      <h1 className="font-medium text-2xl">Gerencie sua empresa</h1>
      <h2 className="font-bold text-blue-600 text-2xl md:text-4xl mb-2">Atendimentos, clientes</h2>
      <Image
        src={hero}
        alt="Imagem Hero do Dev Controle"
        width={600}
        className="max-w-sm md:max-w-xl"
      />
    </main>
  );
}
