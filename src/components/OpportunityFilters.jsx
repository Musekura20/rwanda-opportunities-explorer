
function OpportunityFilters({
  search,
  setSearch,
  category,
  setCategory,
  availableOnly,
  setAvailableOnly,
  savedOnly,
  setSavedOnly,
  sortBy,
  setSortBy,
  onReset
}) {

  return (
    <div className="bg-white rounded-xl border border-[#E8DED2] p-5 mb-8">

      <h3 className="text-lg font-bold text-[#4B3025] mb-5">
        Find Opportunities
      </h3>

      {/* Search input */}
      <div className="mb-5">

        <label
          htmlFor="search"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Search by title or city
        </label>

        <input
          id="search"
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Example: React, Kigali..."
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-700"
        />

      </div>

      {/* Category and sorting */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">

        <div>

          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Category
          </label>

          <select
            id="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-amber-700"
          >
            <option value="All">All categories</option>
            <option value="Workshop">Workshop</option>
            <option value="Career Event">Career Event</option>
            <option value="Community">Community</option>
            <option value="Short Course">Short Course</option>
            <option value="Seminar">Seminar</option>
          </select>

        </div>

        <div>

          <label
            htmlFor="sort"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Sort by
          </label>

          <select
            id="sort"
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-amber-700"
          >
            <option value="date">Earliest date</option>
            <option value="title">Title A to Z</option>
            <option value="seats">Available seats (highest first)</option>
          </select>

        </div>

      </div>

      {/* Checkboxes */}
      <div className="flex flex-col sm:flex-row gap-4 mb-5">

        <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">

          <input
            type="checkbox"
            checked={availableOnly}
            onChange={(event) => setAvailableOnly(event.target.checked)}
            className="w-4 h-4 accent-amber-900"
          />

          Available only

        </label>

        <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">

          <input
            type="checkbox"
            checked={savedOnly}
            onChange={(event) => setSavedOnly(event.target.checked)}
            className="w-4 h-4 accent-amber-900"
          />

          Saved only

        </label>

      </div>

      {/* Reset button */}
      <button
        type="button"
        onClick={onReset}
        className="text-sm font-semibold text-[#80543C] hover:text-[#4B3025] underline focus:outline-none focus:ring-2 focus:ring-amber-700 rounded"
      >
        Reset filters
      </button>

    </div>
  )
}

export default OpportunityFilters
