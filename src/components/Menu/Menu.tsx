import Link from 'next/link';
import "@/styles/globals.css"

export default function Menu(){
  return (
    <nav>
      <ul className="menu">
        <li><Link href="/" className='active'>Home</Link></li>
        <li><Link href="/paginas/orbita">Órbitas Planetárias</Link></li>
        <li><Link href="/paginas/cronologia">Cronologia dos Eventos</Link></li>
        <li><Link href="/paginas/forca">Forças Gravitacionais</Link></li>
        <li><Link href="/paginas/velocidade">Velocidade e Trajetória</Link></li>
      </ul>
    </nav>
  );
};

