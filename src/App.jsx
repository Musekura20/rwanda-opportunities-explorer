
import { useState } from "react"
import seedOpportunities from "./data/seedOpportunities"
import OpportunityList from "./components/OpportunityList"

function App() {

  const [savedIds, setSavedIds] = useState([])

  function handleToggleSave(id) {

    if (savedIds.includes(id)) {
      setSavedIds(savedIds.filter((savedId) => savedId !== id))
    } else {
      setSavedIds([...savedIds, id])
    }

  }

  return (
    <div className="min-h-screen bg-amber-50 p-6 md:p-10">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-3xl font-bold text-amber-950 mb-3">
          Rwanda Opportunities Explorer
        </h1>

        <p className="text-gray-600 mb-8">
          Discover workshops, events and learning opportunities across Rwanda.
        </p>

        <OpportunityList
          opportunities={seedOpportunities}
          savedIds={savedIds}
          onToggleSave={handleToggleSave}
        />

      </div>

    </div>
  )
}

export default App