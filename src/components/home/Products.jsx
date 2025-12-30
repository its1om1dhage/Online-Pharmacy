import { useNavigate } from 'react-router-dom';

const Products = () => {
  const navigate = useNavigate();

  const categories = [
    { id: 'generic', name: 'Generic Medicines', path: '/generic-medicines' },
    { id: 'equipment', name: 'Medical Equipment', path: '/medical-equipment' },
    { id: 'machines', name: 'Medical Machines', path: '/medical-machines' },
    { id: 'cleaning', name: 'Cleaning Products', path: '/cleaning-products' },
    { id: 'supplements', name: 'Supplements', path: '/supplements' },
    { id: 'skincare', name: 'Skincare', path: '/skincare' }
  ];

  const products = {
    generic: [
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
    ],
    equipment: [
      {
        id: 9,
        name: 'Digital Thermometer',
        price: 250,
        image: '/products/thermometer.jpg',
        info: 'Quick and accurate temperature reading'
      },
      {
        id: 10,
        name: 'Blood Pressure Monitor',
        price: 1500,
        image: '/products/bp-monitor.jpg',
        info: 'Automatic BP measurement'
      },
      {
        id: 11,
        name: 'Pulse Oximeter',
        price: 800,
        image: '/products/oximeter.jpg',
        info: 'Measures oxygen saturation'
      },
      {
        id: 12,
        name: 'Nebulizer Machine',
        price: 2500,
        image: '/products/nebulizer.jpg',
        info: 'For respiratory treatments'
      },
      {
        id: 13,
        name: 'Stethoscope',
        price: 1200,
        image: '/products/stethoscope.jpg',
        info: 'Professional grade acoustic'
      },
      {
        id: 14,
        name: 'Surgical Gloves (100pc)',
        price: 350,
        image: '/products/gloves.jpg',
        info: 'Latex-free disposable gloves'
      }
    ],
    machines: [
      {
        id: 15,
        name: 'ECG Machine',
        price: 45000,
        image: '/products/ecg.jpg',
        info: '12-lead electrocardiogram'
      },
      {
        id: 16,
        name: 'Oxygen Concentrator',
        price: 35000,
        image: '/products/oxygen-concentrator.jpg',
        info: 'Portable oxygen therapy'
      },
      {
        id: 17,
        name: 'Suction Machine',
        price: 8500,
        image: '/products/suction.jpg',
        info: 'Medical grade suction device'
      },
      {
        id: 18,
        name: 'Infusion Pump',
        price: 25000,
        image: '/products/infusion-pump.jpg',
        info: 'Controlled fluid delivery'
      },
      {
        id: 19,
        name: 'Autoclave Sterilizer',
        price: 18000,
        image: '/products/autoclave.jpg',
        info: 'High-pressure steam sterilization'
      },
      {
        id: 20,
        name: 'Ultrasound Scanner',
        price: 125000,
        image: '/products/ultrasound.jpg',
        info: 'Portable diagnostic imaging'
      }
    ],
    cleaning: [
      {
        id: 21,
        name: 'Hand Sanitizer 500ml',
        price: 150,
        image: '/products/sanitizer.jpg',
        info: '70% alcohol based formula'
      },
      {
        id: 22,
        name: 'Disinfectant Spray',
        price: 200,
        image: '/products/disinfectant.jpg',
        info: 'Kills 99.9% germs'
      },
      {
        id: 23,
        name: 'Surgical Spirit 500ml',
        price: 120,
        image: '/products/surgical-spirit.jpg',
        info: 'Antiseptic solution'
      },
      {
        id: 24,
        name: 'Medical Grade Wipes',
        price: 180,
        image: '/products/wipes.jpg',
        info: 'Antibacterial cleaning wipes'
      },
      {
        id: 25,
        name: 'Hydrogen Peroxide',
        price: 95,
        image: '/products/hydrogen-peroxide.jpg',
        info: 'Wound cleaning solution'
      },
      {
        id: 26,
        name: 'Cotton Balls (100pc)',
        price: 60,
        image: '/products/cotton-balls.jpg',
        info: 'Sterile medical cotton'
      }
    ],
    supplements: [
      {
        id: 27,
        name: 'Multivitamin Tablets',
        price: 350,
        image: '/products/multivitamin.jpg',
        info: 'Complete daily nutrition'
      },
      {
        id: 28,
        name: 'Vitamin D3 1000IU',
        price: 280,
        image: '/products/vitamin-d.jpg',
        info: 'Bone health support'
      },
      {
        id: 29,
        name: 'Omega-3 Fish Oil',
        price: 450,
        image: '/products/omega3.jpg',
        info: 'Heart and brain health'
      },
      {
        id: 30,
        name: 'Calcium + Magnesium',
        price: 320,
        image: '/products/calcium.jpg',
        info: 'Bone strength formula'
      },
      {
        id: 31,
        name: 'Protein Powder 1kg',
        price: 1200,
        image: '/products/protein.jpg',
        info: 'Whey protein isolate'
      },
      {
        id: 32,
        name: 'Zinc 50mg',
        price: 180,
        image: '/products/zinc.jpg',
        info: 'Immune system support'
      }
    ],
    skincare: [
      {
        id: 33,
        name: 'Sunscreen SPF 50',
        price: 350,
        image: '/products/sunscreen.jpg',
        info: 'Broad spectrum UV protection'
      },
      {
        id: 34,
        name: 'Moisturizing Cream',
        price: 280,
        image: '/products/moisturizer.jpg',
        info: 'Hydrating skin care'
      },
      {
        id: 35,
        name: 'Acne Treatment Gel',
        price: 420,
        image: '/products/acne-gel.jpg',
        info: 'Salicylic acid formula'
      },
      {
        id: 36,
        name: 'Anti-aging Serum',
        price: 650,
        image: '/products/serum.jpg',
        info: 'Vitamin C and retinol'
      },
      {
        id: 37,
        name: 'Face Wash 150ml',
        price: 220,
        image: '/products/facewash.jpg',
        info: 'Gentle daily cleanser'
      },
      {
        id: 38,
        name: 'Lip Balm SPF 15',
        price: 120,
        image: '/products/lip-balm.jpg',
        info: 'Nourishing lip protection'
      }
    ]
  };

  return (
    <div className="py-8 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        {categories.map((category) => {
          const categoryProducts = products[category.id];
          const displayedProducts = categoryProducts.slice(0, 5);

          return (
            <div 
              key={category.id}
              className="border-2 border-gray-300 rounded-xl p-6 bg-white"
            >
              {/* Category Header */}
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {category.name}
              </h2>

              {/* Products Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {displayedProducts.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-105 cursor-pointer overflow-hidden border border-gray-200"
                  >
                    {/* Product Image */}
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

                    {/* Product Info */}
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

              {/* Show More Button */}
              <div className="mt-6 text-center">
                <button
                  onClick={() => navigate(category.path)}
                  className="px-6 py-2 bg-gradient-to-r from-red-500 to-red-700 text-white rounded-lg font-medium hover:shadow-lg transition-all"
                >
                  Show More
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
