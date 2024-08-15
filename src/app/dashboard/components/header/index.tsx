import { Container } from "@/components/container";
import Link from "next/link";

export function DashboardHeader() {
    return(
        <>
            <Container>
                <header className="w-full flex gap-5 bg-gray-900 text-white p-3 rounded my-4">
                    <Link href="/dashboard">Chamados</Link>
                    <Link href="/dashboard/customer">Clientes</Link>
                </header>
            </Container>
        </>
    )
}