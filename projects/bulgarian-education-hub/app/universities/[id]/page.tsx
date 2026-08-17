import { universities } from "@/data/universities";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  return universities.map((uni) => ({
    id: uni.id,
  }));
}

export default function UniversityDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const university = universities.find((u) => u.id === params.id);

  if (!university) {
    notFound();
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/#universities" className="text-primary-100 hover:text-white mb-6 inline-flex items-center gap-2">
            ← Back to Universities
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h1 className="text-5xl font-bold mb-4">{university.name}</h1>
              <p className="text-xl text-primary-100 mb-6">{university.description}</p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div>
                  <p className="text-sm text-primary-200">Location</p>
                  <p className="text-lg font-semibold">{university.location}</p>
                </div>
                <div>
                  <p className="text-sm text-primary-200">Founded</p>
                  <p className="text-lg font-semibold">{university.founded}</p>
                </div>
                <div>
                  <p className="text-sm text-primary-200">Tuition</p>
                  <p className="text-lg font-semibold">{university.tuitionEstimate}</p>
                </div>
              </div>
              <a
                href={university.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-primary-600 font-semibold px-6 py-3 rounded-lg hover:bg-primary-50 transition"
              >
                Visit Official Website
              </a>
            </div>

            <div className="flex items-center justify-center">
              <div className="text-9xl font-bold text-primary-200 opacity-20">
                {university.name.substring(0, 2)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Study Categories</h2>
          <div className="flex flex-wrap gap-3">
            {university.categories.map((cat) => (
              <span
                key={cat}
                className="px-6 py-3 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full font-semibold text-sm"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">Available Programs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {university.programs.map((program) => (
              <div
                key={program.id}
                className="card border-2 border-gray-200 dark:border-gray-700 hover:border-primary-400 dark:hover:border-primary-500 transition"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {program.name}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold">
                      {program.level}
                    </p>
                  </div>
                  <span className="text-3xl">📚</span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {program.description}
                </p>

                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-semibold">
                  <span>⏱️</span>
                  <span>Duration: {program.duration}</span>
                </div>

                <button className="mt-4 w-full btn-secondary text-sm">
                  Get More Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">Why Choose {university.name}?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Consistently recognized for academic excellence and research contributions.
              </p>
            </div>

            <div className="card">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-3">International Community</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Study alongside students from around the world in a multicultural environment.
              </p>
            </div>

            <div className="card">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-xl font-bold mb-3">Career Prospects</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Strong industry connections and job placement support for graduates.
              </p>
            </div>

            <div className="card">
              <div className="text-5xl mb-4">🏛️</div>
              <h3 className="text-xl font-bold mb-3">Modern Facilities</h3>
              <p className="text-gray-600 dark:text-gray-400">
                State-of-the-art laboratories, libraries, and campus infrastructure.
              </p>
            </div>

            <div className="card">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3">Affordable Education</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Quality education at a fraction of Western European university costs.
              </p>
            </div>

            <div className="card">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-xl font-bold mb-3">Accreditation</h3>
              <p className="text-gray-600 dark:text-gray-400">
                EU-recognized degrees with international validity and employer recognition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Apply?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Our education consultants are here to guide you through the application process.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <button className="btn-primary">
              Request Admission Info
            </button>
            <button className="btn-secondary">
              Schedule Consultation
            </button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-left">
              <h3 className="font-bold mb-2">📧 Email</h3>
              <p className="text-gray-600 dark:text-gray-400">info@bulgeduhub.com</p>
            </div>
            <div className="text-left">
              <h3 className="font-bold mb-2">📞 Phone</h3>
              <p className="text-gray-600 dark:text-gray-400">+359 2 XXX XXXX</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
