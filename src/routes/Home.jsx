import Carro from "../assets/R.jpg";

export default function Home() {
    return (
        <>
            <div className="container image">
                <div className="container-produtos">
                    <h1>Produtos</h1>
                    <p>Conheça nossos novos produtos</p>
                    <a href="" className="btn">
                        Conheça mais...
                    </a>
                </div>
            </div>
            <section className="sobre">
                <div className="sobre-container">
                    <div className="sobre-container-texto">
                        <h1>About us</h1>
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
                        <img src={Carro} alt="carro"/>
                    </div>
                    <div className="divisao"></div>
                    <div className="sobre-container-texto2">
                        <h1>About us</h1>
                        <p className="sobre-container-texto-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. At veritatis ducimus quaerat ad a laboriosam facilis, earum deleniti nam vero. Omnis cumque obcaecati numquam tempora facere asperiores, sequi officiis corporis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, pariatur porro voluptate ipsum fuga illo beatae quibusdam quisquam eius unde, molestiae libero iste dolores nam repellat quod, numquam magnam nisi.</p>
                        <p className="sobre-container-texto-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur culpa rem aliquid aliquam atque facilis aut ut, ea velit, nisi sit earum saepe quia eveniet dolorum explicabo asperiores? Nulla, dignissimos.</p>
                    </div>
                </div>
                <div className="sobre-container">
                    <div className="sobre-container-texto">
                        <h1>About us</h1>
                        <p className="sobre-container-texto-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. At veritatis ducimus quaerat ad a laboriosam facilis, earum deleniti nam vero. Omnis cumque obcaecati numquam tempora facere asperiores, sequi officiis corporis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, pariatur porro voluptate ipsum fuga illo beatae quibusdam quisquam eius unde, molestiae libero iste dolores nam repellat quod, numquam magnam nisi.</p>
                        <p className="sobre-container-texto-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur culpa rem aliquid aliquam atque facilis aut ut, ea velit, nisi sit earum saepe quia eveniet dolorum explicabo asperiores? Nulla, dignissimos.</p>
                    </div>
                    <div className="divisao"></div>
                    <div className="sobre-container-img">
                        <img src={Carro} alt="carro"/>
                    </div>
                </div>
            </section>
            <section className="marcas">
                <container className="marcas-bmw">
                    <span className="marcas-bmw-name">BMW</span>
                </container>                    
                <container className="marcas-mercedes">
                    <span className="marcas-mercedes-name">MERCEDES</span>
                </container>                    
                <container className="marcas-astonmartin">
                    <span className="marcas-astonmartin-name">ASTON MARTIN</span>
                </container>                                        
            </section>
            <section className="marcas2"> 
                <container className="marcas-audi">
                    <span className="marcas-audi-name">AUDI</span>
                </container>                                        
                <container className="marcas-volkswagen">
                    <span className="marcas-volkswagen-name">VOLKSWAGEN</span>
                </container>                                        
                <container className="marcas-hyundai">
                    <span className="marcas-hyundai-name">HYUNDAI</span>
                </container>                                        
            </section>
        </>
    );
}

