import "./Presentation.css";
import { redes } from "../../Redes";
import { Link } from "@mui/material";

const Presentation = () => {

    return (
        <section className="presetacion">
            <div className="container">
                <div className="container_img">
                    <img className="presentacion__imagen__avatar" src="https://github.com/JohanFarfan25.png" alt="johan" />
                </div>
                <div className="descripcion__cabecera">
                    <h1 className="presentacion__titulo">Johan Farfan <br></br>(Desarrollador de software)</h1>
                    <p className="presentacion__descripcion">Formado en análisis y desarrollo de sistemas de información (SENA).<br></br>
                        Backend Developer  (BOYTECH).<br></br>
                        Formado como Frontend Developer  (Oracle ONE en Alura Latam).
                    </p>
                    <ul className="redes__laboreales">
                        {
                            redes.map((item, index) => (
                                <div className={item.class}>
                                    <Link
                                        style={{ paddingLeft: "1rem" }}
                                        href={item.href}
                                        variant="body2"
                                        color="inherit"
                                        underline="none"
                                        key={index}
                                        target="_blank"
                                    >
                                        {item.name}{item.icon}
                                    </Link>
                                </div>

                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Presentation