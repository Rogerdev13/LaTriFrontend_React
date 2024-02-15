import ecimg from "../img/ec.jpeg"
export const Home = () =>{


    return (
        <section className="container">
            <div className="home">
                <h2 className="titleGeneral animate__animated animate__fadeInBottomLeft">National Team Ecuador</h2>
                <figure className="image "><img className="img" src={ecimg} alt="La tri xd" /></figure>
            </div>
        </section>
    )
}