import Image from "next/image";
import "@/styles/globals.css";

export default function Custom404() {
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404 - Página Não Encontrada</h1>
      <h2 className="notfound-subtitle">Desculpe, esta página não existe.</h2>
      <Image
        src="https://lojaintegrada.com.br/hub/wp-content/uploads/2023/05/erro-404-4.webp"
        alt="Página de erro"
        width={400}
        height={400}
        className="notfound-image"
      />
    </div>
  );
}
