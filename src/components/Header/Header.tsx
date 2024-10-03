import Menu from '../Menu/Menu';
import "@/styles/globals.css";

export default function Header() {
    return (
        <header className="cabecalho">
            <h1 className="text-2xl">NASA</h1>
            <Menu />
        </header>
    );
}
