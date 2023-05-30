import Header from "../components/header"
import Navbar from "../components/navbar"
import Footer from "../components/footer";

function Sobre() {
  return (
    <>        
    <Header/>
    <Navbar/>
      <div className="sobre">
        <h1>Sobre</h1>
        <p>
          Somos uma empresa especializada em artigos de pesca de alta qualidade
          e acessíveis. Temos uma paixão pela pesca e queremos compartilhar essa
          paixão com nossos clientes. Oferecemos uma variedade de produtos para
          todos os tipos de pescadores, desde iniciantes até profissionais.
          Temos anzóis, linhas, iscas, varas, molinetes, carretilhas, caixas,
          bolsas, coletes, óculos, chapéus e muito mais. Também temos dicas e
          tutoriais sobre como pescar melhor, onde encontrar os melhores locais
          e quais são as espécies mais comuns e raras. Se você ama a pesca tanto
          quanto nós, você vai adorar nossa página de artigos de pesca.
          Visite-nos hoje e descubra o que temos para você!
        </p>
      </div>
      <Footer/>
    </>
  );
}
export default Sobre;
