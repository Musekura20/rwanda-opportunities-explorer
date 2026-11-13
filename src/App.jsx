
import { useState } from "react"
import seedOpportunities from "./data/seedOpportunities"
import OpportunityList from "./components/OpportunityList"

function App() {

  // Store saved opportunity IDs
  const [savedIds, setSavedIds] = useState([])

  // Save or unsave an opportunity
  function handleToggleSave(id) {

    if (savedIds.includes(id)) {
      setSavedIds(savedIds.filter((savedId) => savedId !== id))
    } else {
      setSavedIds([...savedIds, id])
    }

  }

  // Calculate dashboard statistics
  const totalOpportunities = seedOpportunities.length

  const availableOpportunities = seedOpportunities.filter(
    (opportunity) => opportunity.availableSeats > 0
  ).length

  const featuredOpportunities = seedOpportunities.filter(
    (opportunity) => opportunity.featured
  ).length

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

            <span>
              Saved: {savedIds.length}
            </span>
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
            Explore workshops, career events, community activities
            and short courses designed to help you learn and grow.
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
            <p className="text-gray-500 text-sm">
              Total Opportunities
            </p>

            <h2 className="text-3xl font-bold text-[#4B3025] mt-2">
              {totalOpportunities}
            </h2>
          </div>

          <div className="bg-white rounded-xl p-6 border border-[#E8DED2]">
            <p className="text-gray-500 text-sm">
              Available Opportunities
            </p>

            <h2 className="text-3xl font-bold text-green-700 mt-2">
              {availableOpportunities}
            </h2>
          </div>

          <div className="bg-white rounded-xl p-6 border border-[#E8DED2]">
            <p className="text-gray-500 text-sm">
              Featured Opportunities
            </p>

            <h2 className="text-3xl font-bold text-[#9A653F] mt-2">
              {featuredOpportunities}
            </h2>
          </div>

        </section>

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

          <OpportunityList
            opportunities={seedOpportunities}
            savedIds={savedIds}
            onToggleSave={handleToggleSave}
          />

        </section>

      </main>

      {/* Footer */}
      <footer className="bg-[#4B3025] text-[#E9DCD1] mt-16 py-6 text-center">
        <p className="text-sm">
          Rwanda Opportunities Explorer
        </p>

        <p className="text-xs mt-2">
          Discover. Learn. Grow.
        </p>
      </footer>

    </div>
  )
}

export default App