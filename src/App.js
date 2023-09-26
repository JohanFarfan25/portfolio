import "./App.css";
import Header from "./Components/Header";
import GlobalStyle from "./GlobalStyle";
import Presentation from "./Components/Sections/Presentation";
import AboutMe from "./Components/Sections/AboutMe";
import Skills from "./Components/Sections/Skills";
import Hobbies from "./Components/Sections/Hobbies";
import ProfesionalAcademicTraining from "./Components/Sections/AcademicTraining/professional";
import ProfessionalExperience from "./Components/Sections/ProfessionalExperience";
import AcademicTrainingCourses from "./Components/Sections/AcademicTraining/courses";
import FormContact from "./Components/Sections/Contact";
import Footer from "./Components/Sections/Footer";


function App() {

  return (
    <>
      <div className="App col-md-6 ps-5 d-flex align-items-center">
        <GlobalStyle />
        <Header />
        <br></br>
        <Presentation />
        <br></br>
        <AboutMe />
        <Skills />
        <Hobbies />
        <ProfesionalAcademicTraining />
        <AcademicTrainingCourses />
        <ProfessionalExperience />
        <FormContact/>
        <Footer/>
      </div>

    </>
  );
}

export default App;
