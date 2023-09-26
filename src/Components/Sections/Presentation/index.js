import "./Presentation.css";
import { redes } from "../../Redes";

const Presentation = () => {

    return (
        <section className="presetacion">
            <div className="container">
                <div className="container_img">
                    <img className="presentacion__imagen__avatar" src="https://github.com/JohanFarfan25.png" alt="johan" />
                </div>
                <div className="descripcion__cabecera">
                    <h1 className="presentacion__titulo">Johan Farfan <br></br>(Desarrollador de software)</h1>
                    <p className="presentacion__descripcion">Soy formado en análisis y desarrollo de sistemas de información y actualmente estoy participando en el proyecto Oracle ONE en Alura Latam.</p>
                    <ul className="redes__laboreales">
                        {
                            redes.map((item,index) => (
                                <li key={index}><a className={item.class} href={item.href}>{item.name}{item.icon}</a></li>
                            ))

                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Presentation