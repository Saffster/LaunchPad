export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-500 to-purple-600 text-white py-16 px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Share. Collaborate. Innovate.</h1>
      <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
        The marketplace for startup ideas where entrepreneurs meet collaborators and investors.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition">Post Your Idea</button>
        <button className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">How It Works</button>
      </div>
    </section>
  );
} 