export default function ServiceCard({ title, description, icon }) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 transition transform hover:scale-105">
        <div className="text-center mb-4">
          <div className="inline-block p-4 bg-blue-100 rounded-full text-blue-500">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  }