// src/pages/Home.jsx
import HeroSection from "../components/HeroSection";
import FiltersSidebar from "../components/FiltersSidebar";
import SearchAndSortBar from "../components/SearchAndSortBar";
import FeaturedIdeasGrid from "../components/FeaturedIdeasGrid";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <HeroSection />
      <main className="flex-1 max-w-7xl mx-auto px-4 py-8 w-full">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4">
            <FiltersSidebar />
          </div>
          <div className="flex-1">
            <SearchAndSortBar />
            <FeaturedIdeasGrid />
          </div>
        </div>
      </main>
    </div>
  );
}
