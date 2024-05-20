import { Link } from 'react-router-dom';
export default function Aston(){
    return(
        <>
        <section className="marcas">
        <container className="marcas-bmw-garagem">
                    <Link to="/garagem/bmw" className="marcas-bmw-garagem-name">BMW</Link>
                </container>                    
                <container className="marcas-mercedes-garagem">
                <Link to="/garagem/meca" className="marcas-bmw-garagem-name">MERCEDES</Link>
                </container>                    
                <container className="marcas-astonmartin-garagem">
                <Link to="/garagem/aston" className="marcas-bmw-garagem-name">ASTON MARTIN</Link>
                </container>                                        
                <container className="marcas-audi-garagem">
                <Link to="/garagem/audi" className="marcas-bmw-garagem-name">AUDI</Link>
                </container>                                        
                <container className="marcas-volkswagen-garagem">
                <Link to="/garagem/volks" className="marcas-bmw-garagem-name">VOLKSWAGEN</Link>
                </container>                                        
                <container className="marcas-hyundai-garagem">
                <Link to="/garagem/hyundai" className="marcas-bmw-garagem-name">HYUNDAI</Link>
                </container>                                       
            </section>

            <div className="container-carro">
                <div className="container-carro-card">
                    <div className="container-carro-card-image"> </div>
                    <h1> ASTON 1 </h1>
                    <p>Lorem ipsum dolor sit amet, <br/>
                        consectetur adipiscing elit.</p>
                    <div className="container-carro-card-btn"> 
                        <button className="btn outline">DETAILS</button>
                        <button className="btn fill">BUY NOW</button>
                    </div>                    
                </div>
                <div className="container-carro-card">
                    <div className="container-carro-card-image"> </div>
                    <h1> ASTON 2 </h1>
                    <p>Lorem ipsum dolor sit amet, <br/>
                        consectetur adipiscing elit.</p>
                    <div className="container-carro-card-btn"> 
                        <button className="btn outline">DETAILS</button>
                        <button className="btn fill">BUY NOW</button>
                    </div>                    
                </div>
                <div className="container-carro-card">
                    <div className="container-carro-card-image"> </div>
                    <h1> ASTON 3 </h1>
                    <p>Lorem ipsum dolor sit amet, <br/>
                        consectetur adipiscing elit.</p>
                    <div className="container-carro-card-btn"> 
                        <button className="btn outline">DETAILS</button>
                        <button className="btn fill">BUY NOW</button>
                    </div>                    
                </div>
            </div>
            <div className="container-carro">
                <div className="container-carro-card">
                    <div className="container-carro-card-image"> </div>
                    <h1> ASTON 4 </h1>
                    <p>Lorem ipsum dolor sit amet, <br/>
                        consectetur adipiscing elit.</p>
                    <div className="container-carro-card-btn"> 
                        <button className="btn outline">DETAILS</button>
                        <button className="btn fill">BUY NOW</button>
                    </div>                    
                </div>
                <div className="container-carro-card">
                    <div className="container-carro-card-image"> </div>
                    <h1> ASTON 5 </h1>
                    <p>Lorem ipsum dolor sit amet, <br/>
                        consectetur adipiscing elit.</p>
                    <div className="container-carro-card-btn"> 
                        <button className="btn outline">DETAILS</button>
                        <button className="btn fill">BUY NOW</button>
                    </div>                    
                </div>
                <div className="container-carro-card">
                    <div className="container-carro-card-image"> </div>
                    <h1> ASTON 6 </h1>
                    <p>Lorem ipsum dolor sit amet, <br/>
                        consectetur adipiscing elit.</p>
                    <div className="container-carro-card-btn"> 
                        <button className="btn outline">DETAILS</button>
                        <button className="btn fill">BUY NOW</button>
                    </div>                    
                </div>
            </div>
        </>
    )

}