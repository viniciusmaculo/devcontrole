import { ModalContext } from "@/providers/modal"
import { useContext, useRef, MouseEvent } from "react"

export function ModalTicket() {

    const {handleModalVisible, ticket} = useContext(ModalContext);
    const modalRef = useRef<HTMLDivElement | null>(null)

    const handleModalClick = (e: MouseEvent<HTMLDivElement>) => {
        if(modalRef.current && !modalRef.current.contains(e.target as Node)) {
            handleModalVisible();
        }
    }

    return(
        <div className="absolute bg-gray-900/80 w-full min-h-screen" onClick={handleModalClick}>
            <div className="absolute inset-0 flex items-center justify-center">

                <div ref={modalRef} className="bg-white shadow-lg w-4/5 md:w-1/2 max-w-2xl p-3 rounded">

                    <div className="flex justify-between items-center">
                        <h1 className="font-bold text-2xl">Detalhes do chamado:</h1>
                        <button className="bg-red-500 py-1 px-4 rounded text-white" onClick={handleModalVisible}>Fechar</button>
                    </div>

                    <section className="py-5 border-b flex flex-col gap-2">
                        <div className="flex items-center gap-1">
                            <h3 className="font-bold">Nome:</h3>
                            <p className="md:text-base text-sm">{ticket?.ticket.name}</p>
                        </div>

                        <h3 className="font-bold">Descrição:</h3>
                        <p className="md:text-base text-sm">{ticket?.ticket.description}</p>
                    </section>

                    <section className="flex flex-col gap-2 mt-5">
                        <h2 className="font-bold text-xl">Detalhe do cliente</h2>

                        <div className="flex items-center gap-1">
                            <h3 className="font-bold">Nome:</h3>
                            <p className="md:text-base text-sm">{ticket?.customer?.name}</p>
                        </div>

                        <div className="flex items-center gap-1">
                            <h3 className="font-bold">Telefone:</h3>
                            <p className="md:text-base text-sm">{ticket?.customer?.phone}</p>
                        </div>

                        <div className="flex items-center gap-1">
                            <h3 className="font-bold">Endereço:</h3>
                            <p className="md:text-base text-sm">{ticket?.customer?.address}</p>
                        </div>

                    </section>

                </div>

            </div>
        </div>
    )
}