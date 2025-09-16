import { ChevronDown } from "lucide-react";
import { aboutFeatures } from "../data/aboutData";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

export default function About() {
  const Navigate = useNavigate();
  return (
    <section id="about" className="py-20 bg-[#002140]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-orange-400">Meer Innovations</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Meer Innovations offers a variety of courses and hands-on projects to help you
            become a skilled software developer. We bridge the gap between
            theoretical knowledge and practical industry skills.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div data-aos="fade-right" data-aos-duration="1000">
            <h3 className="text-3xl font-bold text-white mb-6">
              Why Choose Meer Innovations?
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              At Meer Innovations, we believe in learning by doing. Our curriculum is
              designed by industry experts and updated regularly to match
              current market demands. We don't just teach you to code - we
              prepare you for a successful career in software development.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span className="text-slate-300">
                  100% hands-on project-based learning
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span className="text-slate-300">
                  Industry-relevant curriculum
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span className="text-slate-300">
                  Personalized mentorship and support
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span className="text-slate-300">
                  Career placement assistance
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {aboutFeatures.map((feature, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                data-aos-duration="1000"
              >
                <Card type="about-feature" data={feature} />
              </div>
            ))}
          </div>
        </div>

        <div
          className="text-center mt-12"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <button
            onClick={() => Navigate("/Meer Innovationsdiaries")}
            className="group px-8 py-4 border border-slate-600 text-slate-300 rounded-xl hover:bg-slate-700 hover:border-slate-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-lg font-semibold mx-auto transform hover:scale-105"
          >
            Explore Our Journey
            <ChevronDown
              className="group-hover:translate-y-1 transition-transform"
              size={20}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
