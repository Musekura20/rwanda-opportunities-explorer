
import OpportunityCard from "./OpportunityCard"

function OpportunityList({ opportunities, savedIds, onToggleSave }) {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      {opportunities.map((opportunity) => (

        <OpportunityCard
          key={opportunity.id}
          opportunity={opportunity}
          isSaved={savedIds.includes(opportunity.id)}
          onToggleSave={onToggleSave}
        />

      ))}

    </div>
  )
}

export default OpportunityList