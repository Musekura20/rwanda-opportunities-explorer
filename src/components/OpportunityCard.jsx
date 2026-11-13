
import Button from "./Button"
import Badge from "./Badge"

function OpportunityCard({ opportunity, isSaved, onToggleSave }) {

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 flex flex-col gap-4">

      {/* Opportunity title and category */}
      <div>
        <div className="flex flex-wrap gap-2 mb-3">
          <Badge variant="info">
            {opportunity.category}
          </Badge>

          {opportunity.featured && (
            <Badge variant="warning">
              Featured
            </Badge>
          )}
        </div>

        <h2 className="text-xl font-bold text-gray-900">
          {opportunity.title}
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          {opportunity.city}
        </p>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm">
        {opportunity.description}
      </p>

      {/* Opportunity details */}
      <div className="space-y-2 text-sm text-gray-700">

        <p>
          <strong>Date:</strong> {opportunity.date}
        </p>

        <p>
          <strong>Available seats:</strong> {opportunity.availableSeats}
        </p>

        <p>
          <strong>Price:</strong>{" "}
          {opportunity.price === 0
            ? "Free"
            : `${opportunity.price.toLocaleString()} RWF`}
        </p>

      </div>

      {/* Opportunity status */}
      <div className="flex flex-wrap gap-2">

        {opportunity.price === 0 && (
          <Badge variant="success">Free</Badge>
        )}

        {opportunity.availableSeats === 0 && (
          <Badge variant="danger">Fully booked</Badge>
        )}

        {opportunity.features && (
          <Badge variant="info">Special features</Badge>
        )}

      </div>

      {/* Save button */}
      <Button
        variant={isSaved ? "secondary" : "primary"}
        onClick={() => onToggleSave(opportunity.id)}
      >
        {isSaved ? "Unsave" : "Save Opportunity"}
      </Button>

    </div>
  )
}

export default OpportunityCard