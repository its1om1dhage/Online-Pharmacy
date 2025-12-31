import { useNavigate } from 'react-router-dom';

const GenericMedicines = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: 'Paracetamol 500mg',
      price: 25,
      image: '/products/paracetamol.jpg',
      info: 'Pain relief and fever reducer'
    },
    {
      id: 2,
      name: 'Amoxicillin 250mg',
      price: 120,
      image: '/products/amoxicillin.jpg',
      info: 'Antibiotic for bacterial infections'
    },
    {
      id: 3,
      name: 'Ibuprofen 400mg',
      price: 45,
      image: '/products/ibuprofen.jpg',
      info: 'Anti-inflammatory pain relief'
    },
    {
      id: 4,
      name: 'Cetirizine 10mg',
      price: 35,
      image: '/products/cetirizine.jpg',
      info: 'Antihistamine for allergies'
    },
    {
      id: 5,
      name: 'Omeprazole 20mg',
      price: 80,
      image: '/products/omeprazole.jpg',
      info: 'Reduces stomach acid'
    },
    {
      id: 6,
      name: 'Metformin 500mg',
      price: 65,
      image: '/products/metformin.jpg',
      info: 'Diabetes medication'
    },
    {
      id: 7,
      name: 'Aspirin 75mg',
      price: 30,
      image: '/products/aspirin.jpg',
      info: 'Blood thinner, heart health'
    },
    {
      id: 8,
      name: 'Losartan 50mg',
      price: 95,
      image: '/products/losartan.jpg',
      info: 'Blood pressure medication'
    }
  ];

  return (
    <div className="min-h-[calc(100vh-20rem)] py-6 sm:py-8 md:py-12 px-3 sm:px-4">
      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        className="fixed top-20 left-3 sm:left-6 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl transition-all hover:scale-110"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
      </button>

      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">Generic Medicines</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => navigate(`/product/${product.id}`)}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-105 cursor-pointer overflow-hidden border border-gray-200"
            >
              <div className="aspect-square bg-gray-100 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect width="200" height="200" fill="%23f3f4f6"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="14" fill="%239ca3af"%3ENo Image%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>

              <div className="p-3">
                <h3 className="font-semibold text-sm text-gray-800 mb-1 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                  {product.info}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-red-600 font-bold text-lg">
                    ₹{product.price}
                  </span>
                  <button className="bg-gradient-to-r from-red-500 to-red-700 text-white px-3 py-1 rounded-lg text-xs font-medium hover:shadow-lg transition-all">
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GenericMedicines;
