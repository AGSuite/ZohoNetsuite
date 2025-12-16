export default function ZohosprintPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-32 pb-12 px-4 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Zoho Sprints</h1>
          <p className="text-xl text-gray-700 font-medium mb-4">Agile Project Management</p>
          <p className="text-lg text-gray-600">Plan and track agile projects with scrum and Kanban boards</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Key Feature 1", description: "Powerful capabilities to streamline operations" },
              { title: "Key Feature 2", description: "Intuitive interface for better productivity" },
              { title: "Key Feature 3", description: "Seamless integration with other tools" },
              { title: "Key Feature 4", description: "Real-time analytics and reporting" },
              { title: "Key Feature 5", description: "Mobile access for on-the-go work" },
              { title: "Key Feature 6", description: "Scalable solution that grows with you" }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8">Contact our team to learn how Zoho Sprints can help your business.</p>
          <a href="/free-consultation" className="inline-block bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition shadow-lg">
            Get Started
          </a>
        </div>
      </section>
    </main>
  );
}
