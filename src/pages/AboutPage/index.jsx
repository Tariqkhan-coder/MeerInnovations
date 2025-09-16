import Breadcrumb from "../../components/BreadCrumb";
import About from "../../components/About";

export default function AboutPage() {
  return (
    <main>
      <Breadcrumb
        pageName="About"
        description="At Meer Innovations, we are passionate about crafting modern and user-friendly digital solutions. Our mission is to empower businesses and individuals with creative web experiences that combine design, innovation, and technology."
        url="/"
      />
      <About />
    </main>
  );
}
