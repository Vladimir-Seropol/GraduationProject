import SectionAbout from "../../components/SectionAbout";
import SectionContacts from "../../components/SectionContacts";
import SectionForm from "../../components/SectionForm";
import SectionQuestions from "../../components/SectionQuestions";
import SectionSelection from "../../components/SectionSelection";
import SectionSneakers from "../../components/SectionSneakers";
import SectionTeam from "../../components/SectionTeam";




const Home = () => {
  return (
      < >
         <div className="{style.block}">
         <SectionSneakers />
         <SectionAbout />
         <SectionSelection />
         <SectionTeam />
         <SectionQuestions />
         <SectionContacts />
         <SectionForm />
      </div>
    </>
  );
};

export default Home;
