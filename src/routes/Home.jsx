import Carro from "../assets/imgCapo.jpg";
import Carro1 from "../assets/imgDentro.jpg";
import Carro2 from "../assets/imgFrente.jpg";
import Carrossel from "../components/Carrossel/Carrossel";

export default function Home() {
    return (
        <>
        <div className="carrossel">
        <Carrossel/>
        </div>
            {/* <div className="container image">
                <div className="container-produtos">
                </div>
            </div> */}
            <section className="sobre">
            <a id="Sobre"></a>
                <div className="sobre-container">                
                    <div className="sobre-container-texto">                    
                        <h1>Nossa Empresa</h1>
                        <p className="sobre-container-texto-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. At veritatis ducimus quaerat ad a laboriosam facilis, earum deleniti nam vero. Omnis cumque obcaecati numquam tempora facere asperiores, sequi officiis corporis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, pariatur porro voluptate ipsum fuga illo beatae quibusdam quisquam eius unde, molestiae libero iste dolores nam repellat quod, numquam magnam nisi.</p>
                        <p className="sobre-container-texto-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur culpa rem aliquid aliquam atque facilis aut ut, ea velit, nisi sit earum saepe quia eveniet dolorum explicabo asperiores? Nulla, dignissimos.</p>
                    </div>
                    <div className="divisao"></div>
                    <div className="sobre-container-img">
                        <img src={Carro} alt="carro"/>
                    </div>
                </div>                
                <div className="sobre-container">                    
                    <div className="sobre-container-img2">
                        <img src={Carro1} alt="carro"/>
                    </div>
                    <div className="divisao"></div>
                    <div className="sobre-container-texto2">
                        <h1>Valores</h1>
                        <p className="sobre-container-texto-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. At veritatis ducimus quaerat ad a laboriosam facilis, earum deleniti nam vero. Omnis cumque obcaecati numquam tempora facere asperiores, sequi officiis corporis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, pariatur porro voluptate ipsum fuga illo beatae quibusdam quisquam eius unde, molestiae libero iste dolores nam repellat quod, numquam magnam nisi.</p>
                        <p className="sobre-container-texto-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur culpa rem aliquid aliquam atque facilis aut ut, ea velit, nisi sit earum saepe quia eveniet dolorum explicabo asperiores? Nulla, dignissimos.</p>
                    </div>
                </div>
                <div className="sobre-container">
                    <div className="sobre-container-texto">
                        <h1>Objetivos</h1>
                        <p className="sobre-container-texto-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. At veritatis ducimus quaerat ad a laboriosam facilis, earum deleniti nam vero. Omnis cumque obcaecati numquam tempora facere asperiores, sequi officiis corporis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, pariatur porro voluptate ipsum fuga illo beatae quibusdam quisquam eius unde, molestiae libero iste dolores nam repellat quod, numquam magnam nisi.</p>
                        <p className="sobre-container-texto-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur culpa rem aliquid aliquam atque facilis aut ut, ea velit, nisi sit earum saepe quia eveniet dolorum explicabo asperiores? Nulla, dignissimos.</p>
                    </div>
                    <div className="divisao"></div>
                    <div className="sobre-container-img">
                        <img src={Carro2} alt="carro"/>
                    </div>
                </div>
            </section>
        </>
    );
}

