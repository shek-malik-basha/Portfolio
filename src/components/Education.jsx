export default function Education() {
  return (
    <section
      id="education"
      className="bg-[#0a0a0a] py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#ff7a00]" />
            <span className="text-[#ff7a00] text-xs font-semibold uppercase tracking-[0.2em]">
              Education
            </span>
          </div>

          <h2 className="text-4xl font-black text-white">
            My Academic <span className="text-[#ff7a00]">Journey.</span>
          </h2>

          <p className="text-gray-500 mt-4 max-w-xl">
            My educational background and academic progress in Data Science.
          </p>
        </div>

        {/* B.Tech */}
        <div className="border border-white/10 bg-[#111111] rounded-3xl p-8 hover:border-[#ff7a00]/30 transition-all duration-300">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">

            <div>
              <h3 className="text-2xl font-bold text-white">
                B.Tech in Data Science
              </h3>

              <p className="text-[#ff7a00] font-medium mt-2">
                Madanapalle Institute of Technology & Science
              </p>

              <p className="text-gray-400 mt-4 leading-relaxed">
                Currently pursuing a Bachelor's degree in Data Science with focus on
                Data Analytics, Machine Learning, Full Stack Development,
                Database Systems, and Data Engineering.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center min-w-[160px]">
              <span className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-[#ff7a00]/10 text-[#ff7a00] font-bold text-lg">
                2023 - 2027
              </span>

              <p className="text-gray-400 mt-4 text-center font-medium">
                Final Year Student
              </p>
            </div>

          </div>
        </div>

        {/* Intermediate */}
        <div className="border border-white/10 bg-[#111111] rounded-3xl p-8 mt-6 hover:border-[#ff7a00]/30 transition-all duration-300">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">

            <div>
              <h3 className="text-2xl font-bold text-white">
                Intermediate (MPC)
              </h3>

              <p className="text-[#ff7a00] font-medium mt-2">
                Narayana Junior College
              </p>

              <p className="text-gray-400 mt-4 leading-relaxed">
                Completed Intermediate education with Mathematics, Physics,
                and Chemistry, developing strong analytical and logical
                problem-solving skills.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center min-w-[160px]">
              <span className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-[#ff7a00]/10 text-[#ff7a00] font-bold text-lg">
                2021 - 2023
              </span>

              <p className="text-gray-400 mt-4 text-center font-medium">
                78%
              </p>
            </div>

          </div>
        </div>

        {/* SSC */}
        <div className="border border-white/10 bg-[#111111] rounded-3xl p-8 mt-6 hover:border-[#ff7a00]/30 transition-all duration-300">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">

            <div>
              <h3 className="text-2xl font-bold text-white">
                Secondary School (SSC)
              </h3>

              <p className="text-[#ff7a00] font-medium mt-2">
                Sri Chaitanya E.M High School
              </p>

              <p className="text-gray-400 mt-4 leading-relaxed">
                Successfully completed secondary education with outstanding
                academic performance and a strong foundation in mathematics
                and science.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center min-w-[160px]">
              <span className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-[#ff7a00]/10 text-[#ff7a00] font-bold text-lg">
                2020 - 2021
              </span>

              <p className="text-gray-400 mt-4 text-center font-medium">
                98%
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}