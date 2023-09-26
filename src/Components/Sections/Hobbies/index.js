import "./Hobbies.css";
import { HobbiesList } from "./HobbiesList";

const Hobbies = () => {

    return (
        <section className="hobbies__header" id="hobbies">
        <h1 className="hobbies__title">Hobbies</h1>
        <nav>
            <ul className="hobbies">
                    {
                        HobbiesList.map((list,index) => (
                            <li className={list.classItem} key={index}>
                                <img className={list.classImg} src={list.src} alt={list.alt} />
                                <a href={list.href}>{list.name}</a></li>
                        ))
                    }
            </ul>
        </nav>
    </section>
    )
}


export default Hobbies