
import style from "./style.module.css";

import { Accordion } from "../Accordion";



const faqList = [
    {
        q: "Вопрос 1",
        a: "А это ответ 1: в комплексе функционируют 6 детских садов с площадками, воспитателями и всякими другими людьми."
    },
    {
        q: "Вопрос 2",
        a: "А это ответ 2: в комплексе уже ничего не функциионируют."
    }
]


const SectionQuestions : React.FC = () => {

    


  return (
    <section className={style.wrapper}>
      <div className={style.container}>
        <h2>Часто задаваемые вопросы</h2>
        
        <Accordion faqList={faqList} />
      </div>
    </section>
  );
};

export default SectionQuestions;
