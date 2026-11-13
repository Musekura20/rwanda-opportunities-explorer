import { useState } from "react";

import seedOpportunities from "./data/seedOpportunities";

import OpportunityList from "./components/OpportunityList";
import OpportunityFilters from "./components/OpportunityFilters";
import OpportunityForm from "./components/OpportunityForm";

function App() {
  // Saved opportunities
  const [savedIds, setSavedIds] = useState([]);

  // All opportunities, including newly added ones
  const [opportunities, setOpportunities] = useState(seedOpportunities);

  const [demoStatus, setDemoStatus] = useState("success");

  // Filter states
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [availableOnly, setAvailableOnly] = useState(false);
  const [savedOnly, setSavedOnly] = useState(false);
  const [sortBy, setSortBy] = useState("date");

  // Save or unsave an opportunity
  function handleToggleSave(id) {
    setSavedIds((currentSavedIds) => {
      if (currentSavedIds.includes(id)) {
        return currentSavedIds.filter((savedId) => savedId !== id);
      }

      return [...currentSavedIds, id];
    });
  }

  // Add a new opportunity
  function handleAddOpportunity(newOpportunity) {
    setOpportunities((currentOpportunities) => [
      newOpportunity,
      ...currentOpportunities,
    ]);
  }

  // Reset all filters
  function handleResetFilters() {
    setSearch("");
    setCategory("All");
    setAvailableOnly(false);
    setSavedOnly(false);
    setSortBy("date");
  }

  // Filter opportunities
  const filteredOpportunities = opportunities.filter((opportunity) => {
    const searchText = search.trim().toLowerCase();

    const matchesSearch =
      opportunity.title.toLowerCase().includes(searchText) ||
      opportunity.city.toLowerCase().includes(searchText);

    const matchesCategory =
      category === "All" || opportunity.category === category;

    const matchesAvailability =
      !availableOnly || opportunity.availableSeats > 0;

    const matchesSaved = !savedOnly || savedIds.includes(opportunity.id);

    return (
      matchesSearch && matchesCategory && matchesAvailability && matchesSaved
    );
  });

  // Sort opportunities
  const sortedOpportunities = [...filteredOpportunities];

  if (sortBy === "date") {
    sortedOpportunities.sort((a, b) => a.date.localeCompare(b.date));
  } else if (sortBy === "title") {
    sortedOpportunities.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortBy === "seats") {
    sortedOpportunities.sort((a, b) => b.availableSeats - a.availableSeats);
  }

  // Dashboard statistics
  const totalOpportunities = opportunities.length;

  const availableOpportunities = opportunities.filter(
    (opportunity) => opportunity.availableSeats > 0,
  ).length;

  const featuredOpportunities = opportunities.filter(
    (opportunity) => opportunity.featured,
  ).length;

  return (
    <div className="min-h-screen bg-[#F8F4EE]">
      {/* Navigation */}
      <header className="bg-white border-b border-[#E8DED2]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-[#4B3025]">
            Rwanda Opportunities
          </a>

          <nav className="flex items-center gap-6 text-sm text-gray-600">
            <a href="#opportunities" className="hover:text-[#704936]">
              Explore
            </a>

            <span>Saved: {savedIds.length}</span>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8 md:py-12">
        {/* Hero section */}
        <section className="bg-[#4B3025] text-white rounded-2xl p-8 md:p-12 mb-10">
          <p className="text-[#E8C9A8] font-medium mb-4">
            OPPORTUNITIES ACROSS RWANDA
          </p>

          <h1 className="text-3xl md:text-5xl font-bold max-w-2xl leading-tight">
            Discover opportunities. Build your future.
          </h1>

          <p className="text-[#E9DCD1] mt-5 max-w-xl leading-relaxed">
            Explore workshops, career events, community activities and short
            courses designed to help you learn and grow.
          </p>

          <a
            href="#opportunities"
            className="inline-block mt-7 bg-[#E8C9A8] text-[#4B3025] px-6 py-3 rounded-lg font-semibold hover:bg-[#F0D9C2] transition"
          >
            Explore Opportunities
          </a>
        </section>

        {/* Dashboard statistics */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
          <div className="bg-white rounded-xl p-6 border border-[#E8DED2]">
            <p className="text-gray-500 text-sm">Total Opportunities</p>

            <h2 className="text-3xl font-bold text-[#4B3025] mt-2">
              {totalOpportunities}
            </h2>
          </div>

          <div className="bg-white rounded-xl p-6 border border-[#E8DED2]">
            <p className="text-gray-500 text-sm">Available Opportunities</p>

            <h2 className="text-3xl font-bold text-green-700 mt-2">
              {availableOpportunities}
            </h2>
          </div>

          <div className="bg-white rounded-xl p-6 border border-[#E8DED2]">
            <p className="text-gray-500 text-sm">Featured Opportunities</p>

            <h2 className="text-3xl font-bold text-[#9A653F] mt-2">
              {featuredOpportunities}
            </h2>
          </div>
        </section>

        {/* Add opportunity form */}
        <OpportunityForm onAddOpportunity={handleAddOpportunity} />

        {/* Opportunities section */}
        <section id="opportunities">
          <div className="mb-7">
            <p className="text-sm font-semibold text-[#9A653F] mb-2">
              FIND YOUR NEXT STEP
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-[#4B3025]">
              Explore Opportunities
            </h2>

            <p className="text-gray-600 mt-2">
              Discover activities that match your interests and goals.
            </p>
          </div>

          {/* Demo status buttons */}
          <div className="flex flex-wrap gap-3 mb-6">
            <button
              type="button"
              onClick={() => setDemoStatus("success")}
              className="bg-[#4B3025] text-white px-4 py-2 rounded-lg"
            >
              Show Opportunities
            </button>

            <button
              type="button"
              onClick={() => setDemoStatus("loading")}
              className="bg-amber-600 text-white px-4 py-2 rounded-lg"
            >
              Demo Loading
            </button>

            <button
              type="button"
              onClick={() => setDemoStatus("error")}
              className="bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              Demo Error
            </button>
          </div>

          {/* Filters */}
          <OpportunityFilters
            search={search}
            setSearch={setSearch}
            category={category}
            setCategory={setCategory}
            availableOnly={availableOnly}
            setAvailableOnly={setAvailableOnly}
            savedOnly={savedOnly}
            setSavedOnly={setSavedOnly}
            sortBy={sortBy}
            setSortBy={setSortBy}
            onReset={handleResetFilters}
          />

          {/* Result count */}
          <p className="text-sm text-gray-600 mb-5">
            {sortedOpportunities.length} opportunities found
          </p>

          {/* Display results */}

          {demoStatus === "loading" ? (
            <div className="bg-white rounded-xl p-10 text-center">
              <p className="text-[#4B3025] font-semibold">
                Loading opportunities...
              </p>
            </div>
          ) : demoStatus === "error" ? (
            <div className="bg-white rounded-xl border border-red-200 p-10 text-center">
              <h3 className="text-xl font-bold text-red-600 mb-2">
                Something went wrong!
              </h3>

              <p className="text-gray-600 mb-5">
                We couldn't display the opportunities. Please try again.
              </p>

              <button
                type="button"
                onClick={() => setDemoStatus("success")}
                className="bg-[#4B3025] text-white px-5 py-3 rounded-lg"
              >
                Try Again
              </button>
            </div>
          ) : sortedOpportunities.length > 0 ? (
            <OpportunityList
              opportunities={sortedOpportunities}
              savedIds={savedIds}
              onToggleSave={handleToggleSave}
            />
          ) : (
            <div className="bg-white rounded-xl border border-[#E8DED2] p-10 text-center">
              <h3 className="text-xl font-bold text-[#4B3025] mb-2">
                No opportunities found
              </h3>

              <p className="text-gray-600 mb-5">
                We couldn't find any opportunities matching your filters. Try
                changing your search or resetting your filters.
              </p>

              <button
                type="button"
                onClick={handleResetFilters}
                className="bg-[#4B3025] text-white px-5 py-3 rounded-lg hover:bg-[#704936] transition"
              >
                Reset filters
              </button>
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#4B3025] text-[#E9DCD1] mt-16 py-6 text-center">
        <p className="text-sm">Rwanda Opportunities Explorer</p>

        <p className="text-xs mt-2">Discover. Learn. Grow.</p>
      </footer>
    </div>
  );
}

export default App;
