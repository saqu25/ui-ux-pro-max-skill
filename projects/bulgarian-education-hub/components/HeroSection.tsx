export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Your Gateway to Quality Education in Bulgaria
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Explore world-class universities offering medicine, nursing, veterinary, culinary arts, management, technical, and maritime programs at affordable costs.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button className="btn-primary">
                Explore Universities
              </button>
              <button className="btn-secondary">
                Request Info
              </button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-primary-600">8+</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Universities</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">7</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Study Categories</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">EU</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Quality Standard</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-blue-600 rounded-3xl transform rotate-3 opacity-20"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">⚕️</div>
                  <div>
                    <h3 className="font-bold">Medicine & Nursing</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Top-ranked medical programs</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-4xl">🐾</div>
                  <div>
                    <h3 className="font-bold">Veterinary Science</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Advanced animal healthcare</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-4xl">👨‍🍳</div>
                  <div>
                    <h3 className="font-bold">Culinary Arts</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Professional chef training</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-4xl">⚙️</div>
                  <div>
                    <h3 className="font-bold">Technical Programs</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Engineering excellence</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-4xl">⚓</div>
                  <div>
                    <h3 className="font-bold">Maritime Studies</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Seafaring careers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
