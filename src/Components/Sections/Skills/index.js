import CircularProgressWithLabel from "../../CircularProgress";
import "./Skills.css";

import { SkilslList } from "./SkillsList";

const Skills = () => {
    return (
        <section id="skills">
            <h1 className="skills__titulo">Skills</h1>
            <nav>
                <ul className="skills">
                    {
                        SkilslList.map((list,index) => (
                            <li className={list.classItem} key={index}>
                                <img className={list.classImg} src={list.src} alt={list.alt} />
                                <CircularProgressWithLabel value={list.progress}/>
                                <a href={list.href}>{list.name}</a></li>
                        ))
                    }
                </ul>
            </nav>
        </section>
    )
}

export default Skills