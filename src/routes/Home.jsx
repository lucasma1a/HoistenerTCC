import Fox from '../assets/1.jpg';
import X1 from '../assets/4.jpg';
import Amarok from '../assets/5.jpg';
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
                <h1>DESTAQUES</h1>
                <div className="sobre-container">                
                    <div className="sobre-container-texto">                    
                        <h1>Volkswagen Fox</h1>
                        <p className="sobre-container-texto-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. At veritatis ducimus quaerat ad a laboriosam facilis, earum deleniti nam vero. Omnis cumque obcaecati numquam tempora facere asperiores, sequi officiis corporis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, pariatur porro voluptate ipsum fuga illo beatae quibusdam quisquam eius unde, molestiae libero iste dolores nam repellat quod, numquam magnam nisi.</p>
                        <p className="sobre-container-texto-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur culpa rem aliquid aliquam atque facilis aut ut, ea velit, nisi sit earum saepe quia eveniet dolorum explicabo asperiores? Nulla, dignissimos.</p>
                    </div>
                    <div className="divisao"></div>
                    <div className="sobre-container-img">
                        <img src={Fox} alt="carro"/>
                    </div>
                </div>                
                <div className="sobre-container">                    
                    <div className="sobre-container-img2">
                        <img src={X1} alt="carro"/>
                    </div>
                    <div className="divisao"></div>
                    <div className="sobre-container-texto2">
                        <h1>BMW X1</h1>
                        <p className="sobre-container-texto-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. At veritatis ducimus quaerat ad a laboriosam facilis, earum deleniti nam vero. Omnis cumque obcaecati numquam tempora facere asperiores, sequi officiis corporis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, pariatur porro voluptate ipsum fuga illo beatae quibusdam quisquam eius unde, molestiae libero iste dolores nam repellat quod, numquam magnam nisi.</p>
                        <p className="sobre-container-texto-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur culpa rem aliquid aliquam atque facilis aut ut, ea velit, nisi sit earum saepe quia eveniet dolorum explicabo asperiores? Nulla, dignissimos.</p>
                    </div>
                </div>
                <div className="sobre-container">
                    <div className="sobre-container-texto">
                        <h1>Volkswagen Amarok</h1>
                        <p className="sobre-container-texto-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. At veritatis ducimus quaerat ad a laboriosam facilis, earum deleniti nam vero. Omnis cumque obcaecati numquam tempora facere asperiores, sequi officiis corporis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, pariatur porro voluptate ipsum fuga illo beatae quibusdam quisquam eius unde, molestiae libero iste dolores nam repellat quod, numquam magnam nisi.</p>
                        <p className="sobre-container-texto-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur culpa rem aliquid aliquam atque facilis aut ut, ea velit, nisi sit earum saepe quia eveniet dolorum explicabo asperiores? Nulla, dignissimos.</p>
                    </div>
                    <div className="divisao"></div>
                    <div className="sobre-container-img">
                        <img src={Amarok} alt="carro"/>
                    </div>
                </div>
            </section>
        </>
    );
}

