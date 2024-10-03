import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=AGzuldIstUkIsEcCb7dMSRPoWCmPrCmJNGQogRP2&count=10");

        if (!response.ok) {
            throw new Error(`Erro ao fazer o fetch: ${response.statusText}`);
        }

        const dados = await response.json();
        return NextResponse.json(dados);

    } catch (error) {
        console.error("Erro ao carregar os dados da API:", error);
        return NextResponse.json({ error: 'Erro ao carregar os dados da API.' }, { status: 500 });
    }
}
