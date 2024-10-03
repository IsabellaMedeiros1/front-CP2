"use client";
import React, { useEffect, useState } from "react";
import "@/styles/globals.css";
import { TipoImag } from "@/types";
import Image from "next/image";

export default function Velocidade() {
    const [imagem, setImagem] = useState<TipoImag | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function chamadaApi() {
            try {
                const response = await fetch('http://localhost:3000/api/nasa/velocidade'); 

                if (!response.ok) {
                    throw new Error('Erro ao fazer a requisição à API');
                }

                const jsonData: TipoImag[] = await response.json();
                const numeroAleatorio = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;
                const indice = numeroAleatorio(0, jsonData.length);
                setImagem(jsonData[indice]);
            } catch (error) {
                console.log("ERRO:", error);
            } finally {
                setLoading(false);
            }
        }

        chamadaApi();
    }, []);

    if (loading) {
        return <div className="loading-message">Carregando...</div>;
    }

    return (
        <main className="page-container">
            <h1 className="page-title">Velocidade e Trajetória de Vênus</h1>
            <div>
                {imagem && (
                    <Image
                        className="image-container"
                        src={imagem.url}
                        width={500}
                        height={250}
                        alt={imagem.title} 
                    />
                )}
                <p className="description-text">
                    Velikovsky propôs que Vênus teria sido expulsa de Júpiter como um cometa e, em seguida, passou perto da Terra antes de se estabelecer na sua órbita atual. Isso teria ocorrido num curto período de tempo, algo que desafiava as equações de mecânica orbital clássica, que sugerem que as mudanças de órbita de planetas e corpos celestes são lentas e estáveis.
                </p>
            </div>
        </main>
    );
}
