import Header from "../components/header"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import banner from "../assets/imgs/banner.jpg"
import vara from "../assets/imgs/vara.jpg"
import VaraIsca from "../assets/imgs/varaisca.jpg"
import Isca from "../assets/imgs/isca.jpg"
const produtos = [
    {
        nome: "isca",
        preco: "20,00",
        img: Isca
    },
    {
        nome: "Vara + Isca",
        preco: "100,00",
        img: VaraIsca
    },
    {
        nome: "Vara",
        preco: "90,00",
        img: vara
    }
]
function Home(){
    return(
        <>
            <Header/>
            <Navbar/>
            <section>
                <img src={banner} alt="" className="banner"/>
                <h1>Bem vindo !</h1>
                <div className="Produtos">
                {produtos.map(({nome, preco, img}) => (
                    <div className='card' key={nome}>
                        <img src={img} alt="" />
                        <h2>{nome}</h2>
                        <p>{preco}</p>
                    </div>
                ))
                }
                </div>
            </section>
            <Footer/>
        </>
    )
}
export default Home