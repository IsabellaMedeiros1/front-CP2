"use client";
import React, { useEffect, useState } from "react";
import "@/styles/globals.css";
import { TipoImag } from "@/types";
import Image from "next/image";


export default function Cronologia() {
    const [imagem, setImagem] = useState<TipoImag | null>(null);
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {
        async function chamadaApi() {
            try {
                const response = await fetch('http://localhost:3000/api/nasa/cronologia'); 

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
            <h1 className="page-title">Cronologia dos Eventos</h1>
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
                    Ele questionou a cronologia aceita de eventos históricos e astronômicos, propondo que certos eventos catastróficos ocorreram em tempos muito mais recentes do que a ciência convencional sugere. A ideia de que planetas poderiam ter mudado de órbita tão recentemente desafiava as teorias astronômicas da época, que se baseavam em cálculos de órbitas estáveis por milhões de anos.
                </p>
            </div>
        </main>
    );
}
