import Hero from '../components/home/Hero';
import ProjectGallery from '../components/home/ProjectGallery';
import Timeline from '../components/home/Timeline';
import Skills from '../components/home/Skills';
import About from '../components/home/About';
import Contact from '../components/home/Contact';

const Home = () => {
  return (
    <main>
      <Hero />
      <ProjectGallery />
      <Timeline />
      <Skills />
      <About />
      <Contact />
    </main>
  );
};

export default Home;
