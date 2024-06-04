import '../css/style.css'

const Car = ({nome, preco, imagem}) => {
    return(
        <>
           <div className="container-carro-card">
                    <div className="container-carro-card-image">
                        <img src={imagem} alt="" />    
                    </div>
                    <h1>{nome}</h1>
                    <p>R${preco}</p>
                    <div className="container-carro-card-btn"> 
                        <button className="btn outline">DETAILS</button>
                        <button className="btn fill">BUY NOW</button>
                    </div>                    
                </div>
        </>
    )
}

export default Car