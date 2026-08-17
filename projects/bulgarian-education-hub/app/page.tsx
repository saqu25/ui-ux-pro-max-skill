import { universities } from "@/data/universities";
import UniversityCard from "@/components/UniversityCard";
import CategoryFilter from "@/components/CategoryFilter";
import HeroSection from "@/components/HeroSection";
import ProgramShowcase from "@/components/ProgramShowcase";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const categories = ["Medicine", "Nursing", "Veterinary", "Management", "Culinary Arts", "Technical", "Maritime"];

  return (
    <div>
      <HeroSection />

      {/* Featured Universities */}
      <section id="universities" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Explore Bulgarian Universities</h2>
            <p className="section-subtitle">
              Discover leading institutions offering world-class education
            </p>
          </div>

          <CategoryFilter categories={categories} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {universities.map((uni) => (
              <UniversityCard key={uni.id} university={uni} />
            ))}
          </div>
        </div>
      </section>

      {/* Program Categories */}
      <section id="programs" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Study Programs</h2>
            <p className="section-subtitle">
              Choose from diverse academic programs across Bulgaria
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProgramShowcase
              title="Medicine & Nursing"
              icon="⚕️"
              description="Comprehensive medical education with modern facilities and clinical training"
              programs={["General Medicine", "Pediatrics", "Nursing", "Surgery"]}
              color="bg-red-100 dark:bg-red-900"
            />
            <ProgramShowcase
              title="Veterinary Science"
              icon="🐾"
              description="Advanced veterinary training with animal care specialization"
              programs={["Veterinary Medicine", "Veterinary Surgery", "Animal Pathology"]}
              color="bg-green-100 dark:bg-green-900"
            />
            <ProgramShowcase
              title="Culinary Arts"
              icon="👨‍🍳"
              description="Professional chef training with international culinary techniques"
              programs={["Culinary Arts", "Pastry & Baking", "Food Technology", "Hospitality Management"]}
              color="bg-orange-100 dark:bg-orange-900"
            />
            <ProgramShowcase
              title="Management"
              icon="📊"
              description="Business management and organizational leadership programs"
              programs={["Business Administration", "Project Management", "Finance", "International Business"]}
              color="bg-blue-100 dark:bg-blue-900"
            />
            <ProgramShowcase
              title="Technical Engineering"
              icon="⚙️"
              description="Cutting-edge technical and engineering education"
              programs={["Civil Engineering", "Mechanical Engineering", "Computer Science", "Electrical Engineering"]}
              color="bg-purple-100 dark:bg-purple-900"
            />
            <ProgramShowcase
              title="Maritime Studies"
              icon="⚓"
              description="Maritime and naval engineering with port management specialization"
              programs={["Naval Architecture", "Marine Engineering", "Navigation Science", "Port Management"]}
              color="bg-cyan-100 dark:bg-cyan-900"
            />
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gray-900 dark:bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-500 mb-2">8+</div>
              <p className="text-gray-300">Universities</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-500 mb-2">50+</div>
              <p className="text-gray-300">Programs</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-500 mb-2">1000+</div>
              <p className="text-gray-300">International Students</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-500 mb-2">95%</div>
              <p className="text-gray-300">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Bulgaria */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Study in Bulgaria?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Affordable Tuition",
                description: "30-50% lower costs compared to Western Europe while maintaining high quality",
                icon: "💰",
              },
              {
                title: "Quality Education",
                description: "European standard education with modern facilities and experienced professors",
                icon: "🎓",
              },
              {
                title: "EU Member State",
                description: "Access to EU programs, erasmus+ opportunities, and international recognition",
                icon: "🌍",
              },
              {
                title: "Strategic Location",
                description: "Gateway to Eastern Europe with excellent transportation links",
                icon: "📍",
              },
            ].map((item, i) => (
              <div key={i} className="card text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Start Your Journey Today</h2>
            <p className="section-subtitle">
              Get in touch with our education consultants
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}
