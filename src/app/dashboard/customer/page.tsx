import { Container } from "@/components/container";
import Link from "next/link";
import { CardCustomer } from "../components/card";
import PrismaClient  from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Customers() {

    const session = await getServerSession(authOptions)

    if(!session || !session.user) {
        redirect("/")
    }

    const customers = await PrismaClient.customer.findMany({
        where: {
            userId: session.user.id
        }
    })

    return(
        <Container>
            <main>
                <div className="flex items-center justify-between mt-6">
                    <h1 className="font-bold text-3xl">Meus Clientes</h1>
                    <Link href="/dashboard/customer/new" className="bg-blue-500 text-white px-3 rounded">Novo Cliente</Link>
                </div>

                <section className="mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {customers.map(customer => (
                        <CardCustomer
                            key={customer.id}
                            customer={customer}
                        />
                    ))}
                </section>

                {customers.length === 0 && (
                    <h1 className="text-gray-600">Você ainda não possui nenhum cliente.</h1>
                )}

            </main>
        </Container>
    )
}