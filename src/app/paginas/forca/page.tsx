"use client";
import React, { useEffect, useState } from "react";
import "@/styles/globals.css";
import { TipoImag } from "@/types";
import Image from "next/image";

export default function Forca() {
    const [imagem, setImagem] = useState<TipoImag | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function chamadaApi() {
            try {
                const response = await fetch('http://localhost:3000/api/nasa/forca'); 

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
            <h1 className="page-title">Forças Gravitacionais e Eletromagnéticas</h1>
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
                    Velikovsky propôs que as forças eletromagnéticas entre planetas poderiam ter desempenhado um papel significativo nos encontros próximos, algo que contraria o modelo puramente gravitacional aceito na física celeste. Ele sugeriu que os cálculos gravitacionais sozinhos não explicavam adequadamente as interações planetárias propostas em suas teorias.
                </p>
            </div>
        </main>
    );
}
