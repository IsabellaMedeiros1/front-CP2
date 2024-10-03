import "@/styles/globals.css";

export default function Footer() {
  return (
    <footer className="rodape">
      <div className="container mx-auto py-4">
        <p className="text-center">
          Projeto desenvolvido por:
          <br />
          Isabella de Fátima Medeiros (RM: 554725)
          <br />
          Eduardo Miguel Forato Monteiro (RM: 554725)
          <br />
          Cicero Gabriel Oliveira Serafim (RM: 556745)
        </p>
        <p className="text-center mt-4">
          Todos os direitos reservados.
        </p>
        <p className="text-center mt-2">
          <a href="https://github.com/IsabellaMedeiros1/front-CP2" className="text-gray-400 hover:text-gray-200">
            Repositório GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}
