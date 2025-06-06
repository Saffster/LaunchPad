// src/pages/Home.jsx
import HeroSection from "../components/HeroSection";
import FiltersSidebar from "../components/FiltersSidebar";
import SearchAndSortBar from "../components/SearchAndSortBar";
import FeaturedIdeasGrid from "../components/FeaturedIdeasGrid";
import Pagination from "../components/Pagination";

export default function Home() {
  const handlePageChange = (page) => {
    console.log("Page changed to:", page);
    // Add your page change logic here
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <HeroSection />
      <main className="flex-1 max-w-7xl mx-auto px-4 py-8 w-full">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <FiltersSidebar />
          </div>
          <div className="flex-1">
            <SearchAndSortBar />
            <FeaturedIdeasGrid />
            <Pagination
              currentPage={1}
              totalPages={8}
              onPageChange={handlePageChange}
              className="mt-8"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
