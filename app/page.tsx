import { AboutMe } from "@/feature/home/components/AboutMe";
import { CardToAction } from "@/feature/home/components/CardToAction";
import { Education } from "@/feature/home/components/Education";
import { Experience } from "@/feature/home/components/Experience";
import { Presentation } from "@/feature/home/components/Presentation";
import { Skills } from "@/feature/home/components/Skills";

const Home = () => {
  return (
    <div>
      <Presentation />
      <Skills />
      <Experience />
      <CardToAction />
      <Education />
      <AboutMe />
    </div>
  );
};

export default Home;
