import React from 'react'

function Categories() {
  return (
     <section className="mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">
          Shop by Category
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Electronics", "Fashion", "Home", "Beauty"].map((cat) => (
            <div
              key={cat}
              className="bg-white border rounded-lg p-6 text-center hover:shadow-md transition cursor-pointer"
            >
              <h3 className="font-semibold">{cat}</h3>
            </div>
          ))}
        </div>
      </section>
  )
}

export default Categories