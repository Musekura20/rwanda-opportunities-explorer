
import { useState } from "react"
import Button from "./Button"

function OpportunityForm({ onAddOpportunity }) {
  const [formData, setFormData] = useState({
    title: "",
    category: "Workshop",
    city: "",
    date: "",
    description: "",
    capacity: "",
    price: ""
  })

  const [error, setError] = useState("")

  function handleChange(event) {
    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]: value
    })
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (
      !formData.title.trim() ||
      !formData.city.trim() ||
      !formData.date ||
      !formData.description.trim()
    ) {
      setError("Please fill in all required fields.")
      return
    }

    if (Number.isNaN(Date.parse(formData.date))) {
      setError("Please enter a valid date.")
      return
    }

    if (
      formData.capacity === "" ||
      Number(formData.capacity) < 0 ||
      formData.price === "" ||
      Number(formData.price) < 0
    ) {
      setError("Capacity and price must be zero or greater.")
      return
    }

    const newOpportunity = {
      id: Date.now(),
      title: formData.title.trim(),
      category: formData.category,
      city: formData.city.trim(),
      date: formData.date,
      description: formData.description.trim(),
      capacity: Number(formData.capacity),
      availableSeats: Number(formData.capacity),
      price: Number(formData.price),
      featured: false,
      features: false
    }

    onAddOpportunity(newOpportunity)

    setFormData({
      title: "",
      category: "Workshop",
      city: "",
      date: "",
      description: "",
      capacity: "",
      price: ""
    })

    setError("")
  }

  function handleClear() {
    setFormData({
      title: "",
      category: "Workshop",
      city: "",
      date: "",
      description: "",
      capacity: "",
      price: ""
    })

    setError("")
  }

  return (
    <section className="bg-white border border-[#E8DED2] rounded-xl p-6 mb-8">
      <h2 className="text-2xl font-bold text-[#4B3025] mb-2">
        Add a New Opportunity
      </h2>

      <p className="text-gray-600 text-sm mb-6">
        Share a new workshop, event or learning opportunity.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-1">
            Opportunity Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium mb-1">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <option value="Workshop">Workshop</option>
            <option value="Career Event">Career Event</option>
            <option value="Community">Community</option>
            <option value="Short Course">Short Course</option>
            <option value="Seminar">Seminar</option>
          </select>
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-medium mb-1">
            City
          </label>
          <input
            id="city"
            name="city"
            type="text"
            value={formData.city}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        <div>
          <label htmlFor="date" className="block text-sm font-medium mb-1">
            Date
          </label>
          <input
            id="date"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="capacity" className="block text-sm font-medium mb-1">
              Total Capacity
            </label>
            <input
              id="capacity"
              name="capacity"
              type="number"
              min="0"
              value={formData.capacity}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label htmlFor="price" className="block text-sm font-medium mb-1">
              Price (RWF)
            </label>
            <input
              id="price"
              name="price"
              type="number"
              min="0"
              value={formData.price}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
        </div>

        {error && (
          <p className="text-red-600 text-sm" role="alert">
            {error}
          </p>
        )}

        <div className="flex flex-wrap gap-3">
          <Button type="submit">Add Opportunity</Button>
          <Button type="button" variant="secondary" onClick={handleClear}>
            Clear
          </Button>
        </div>
      </form>
    </section>
  )
}

export default OpportunityForm
