import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ProductDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  // Product data - In real implementation, this would come from an API
  const allProducts = [
      {
        id: 1,
        name: 'Paracetamol 500mg',
        price: 25,
        image: '/products/paracetamol.jpg',
        info: 'Pain relief and fever reducer',
        description: 'Paracetamol is a common painkiller used to treat aches and pain. It can also be used to reduce a high temperature. Available for adults and children.',
        category: 'Generic Medicines'
      },
      {
        id: 2,
        name: 'Amoxicillin 250mg',
        price: 120,
        image: '/products/amoxicillin.jpg',
        info: 'Antibiotic for bacterial infections',
        description: 'Amoxicillin is a penicillin antibiotic that fights bacteria. Used to treat many different types of infection caused by bacteria.',
        category: 'Generic Medicines'
      },
      {
        id: 3,
        name: 'Ibuprofen 400mg',
        price: 45,
        image: '/products/ibuprofen.jpg',
        info: 'Anti-inflammatory pain relief',
        description: 'Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID) used for treating pain, fever, and inflammation.',
        category: 'Generic Medicines'
      },
      {
        id: 4,
        name: 'Cetirizine 10mg',
        price: 35,
        image: '/products/cetirizine.jpg',
        info: 'Antihistamine for allergies',
        description: 'Cetirizine is an antihistamine used to relieve allergy symptoms such as watery eyes, runny nose, itching eyes/nose, and sneezing.',
        category: 'Generic Medicines'
      },
      {
        id: 5,
        name: 'Omeprazole 20mg',
        price: 80,
        image: '/products/omeprazole.jpg',
        info: 'Reduces stomach acid',
        description: 'Omeprazole decreases the amount of acid produced in the stomach. Used to treat symptoms of gastroesophageal reflux disease (GERD).',
        category: 'Generic Medicines'
      },
      {
        id: 6,
        name: 'Metformin 500mg',
        price: 65,
        image: '/products/metformin.jpg',
        info: 'Diabetes medication',
        description: 'Metformin is an oral diabetes medicine that helps control blood sugar levels. Used together with diet and exercise.',
        category: 'Generic Medicines'
      },
      {
        id: 7,
        name: 'Aspirin 75mg',
        price: 30,
        image: '/products/aspirin.jpg',
        info: 'Blood thinner, heart health',
        description: 'Low-dose aspirin helps to prevent heart attacks and strokes in people at high risk. Works by reducing blood clotting.',
        category: 'Generic Medicines'
      },
      {
        id: 8,
        name: 'Losartan 50mg',
        price: 95,
        image: '/products/losartan.jpg',
        info: 'Blood pressure medication',
        description: 'Losartan is used to treat high blood pressure and to help protect the kidneys from damage due to diabetes.',
        category: 'Generic Medicines'
      },
      {
        id: 9,
        name: 'Digital Thermometer',
        price: 250,
        image: '/products/thermometer.jpg',
        info: 'Quick and accurate temperature reading',
        description: 'Digital thermometer with fast 10-second reading, fever alarm, and memory recall. Waterproof and easy to clean.',
        category: 'Medical Equipment'
      },
      {
        id: 10,
        name: 'Blood Pressure Monitor',
        price: 1500,
        image: '/products/bp-monitor.jpg',
        info: 'Automatic BP measurement',
        description: 'Automatic upper arm blood pressure monitor with large LCD display. Stores up to 120 readings for 2 users.',
        category: 'Medical Equipment'
      },
      {
        id: 11,
        name: 'Pulse Oximeter',
        price: 800,
        image: '/products/oximeter.jpg',
        info: 'Measures oxygen saturation',
        description: 'Fingertip pulse oximeter for measuring blood oxygen saturation (SpO2) and pulse rate. LED display with multiple viewing angles.',
        category: 'Medical Equipment'
      },
      {
        id: 12,
        name: 'Nebulizer Machine',
        price: 2500,
        image: '/products/nebulizer.jpg',
        info: 'For respiratory treatments',
        description: 'Compact nebulizer for treating asthma, COPD, and other respiratory conditions. Includes adult and child masks.',
        category: 'Medical Equipment'
      },
      {
        id: 13,
        name: 'Stethoscope',
        price: 1200,
        image: '/products/stethoscope.jpg',
        info: 'Professional grade acoustic',
        description: 'Cardiology-grade stethoscope with dual head design. Superior acoustics for adult and pediatric use.',
        category: 'Medical Equipment'
      },
      {
        id: 14,
        name: 'Surgical Gloves (100pc)',
        price: 350,
        image: '/products/gloves.jpg',
        info: 'Latex-free disposable gloves',
        description: 'Box of 100 latex-free nitrile examination gloves. Powder-free, ambidextrous, and suitable for sensitive skin.',
        category: 'Medical Equipment'
      },
      {
        id: 15,
        name: 'ECG Machine',
        price: 45000,
        image: '/products/ecg.jpg',
        info: '12-lead electrocardiogram',
        description: 'Professional 12-lead ECG machine with interpretation software, touchscreen display, and thermal printer.',
        category: 'Medical Machines'
      },
      {
        id: 16,
        name: 'Oxygen Concentrator',
        price: 35000,
        image: '/products/oxygen-concentrator.jpg',
        info: 'Portable oxygen therapy',
        description: '5L oxygen concentrator with adjustable flow rate. Quiet operation, energy efficient, and easy to use.',
        category: 'Medical Machines'
      },
      {
        id: 17,
        name: 'Suction Machine',
        price: 8500,
        image: '/products/suction.jpg',
        info: 'Medical grade suction device',
        description: 'Portable suction machine for airway clearance. Variable vacuum control with overflow protection.',
        category: 'Medical Machines'
      },
      {
        id: 18,
        name: 'Infusion Pump',
        price: 25000,
        image: '/products/infusion-pump.jpg',
        info: 'Controlled fluid delivery',
        description: 'Programmable infusion pump with dose rate calculation, multiple alarm systems, and battery backup.',
        category: 'Medical Machines'
      },
      {
        id: 19,
        name: 'Autoclave Sterilizer',
        price: 18000,
        image: '/products/autoclave.jpg',
        info: 'High-pressure steam sterilization',
        description: 'Tabletop autoclave sterilizer for medical instruments. Class B standard with drying cycle.',
        category: 'Medical Machines'
      },
      {
        id: 20,
        name: 'Ultrasound Scanner',
        price: 125000,
        image: '/products/ultrasound.jpg',
        info: 'Portable diagnostic imaging',
        description: 'Portable ultrasound system with high-resolution imaging. Multiple probes available for various applications.',
        category: 'Medical Machines'
      },
      {
        id: 21,
        name: 'Hand Sanitizer 500ml',
        price: 150,
        image: '/products/sanitizer.jpg',
        info: '70% alcohol based formula',
        description: 'Alcohol-based hand sanitizer that kills 99.9% of germs. Moisturizing formula with aloe vera.',
        category: 'Cleaning Products'
      },
      {
        id: 22,
        name: 'Disinfectant Spray',
        price: 200,
        image: '/products/disinfectant.jpg',
        info: 'Kills 99.9% germs',
        description: 'Multi-surface disinfectant spray effective against bacteria and viruses. Safe for medical equipment.',
        category: 'Cleaning Products'
      },
      {
        id: 23,
        name: 'Surgical Spirit 500ml',
        price: 120,
        image: '/products/surgical-spirit.jpg',
        info: 'Antiseptic solution',
        description: 'Isopropyl alcohol-based antiseptic solution for skin preparation and medical equipment cleaning.',
        category: 'Cleaning Products'
      },
      {
        id: 24,
        name: 'Medical Grade Wipes',
        price: 180,
        image: '/products/wipes.jpg',
        info: 'Antibacterial cleaning wipes',
        description: 'Pre-moistened antibacterial wipes for medical surfaces. Pack of 100 large wipes.',
        category: 'Cleaning Products'
      },
      {
        id: 25,
        name: 'Hydrogen Peroxide',
        price: 95,
        image: '/products/hydrogen-peroxide.jpg',
        info: 'Wound cleaning solution',
        description: '3% hydrogen peroxide solution for wound cleaning and disinfection. 500ml bottle.',
        category: 'Cleaning Products'
      },
      {
        id: 26,
        name: 'Cotton Balls (100pc)',
        price: 60,
        image: '/products/cotton-balls.jpg',
        info: 'Sterile medical cotton',
        description: 'Pack of 100 sterile cotton balls for wound care, applying medications, and general medical use.',
        category: 'Cleaning Products'
      },
      {
        id: 27,
        name: 'Multivitamin Tablets',
        price: 350,
        image: '/products/multivitamin.jpg',
        info: 'Complete daily nutrition',
        description: 'Complete multivitamin with essential vitamins and minerals. 60 tablets for 2 months supply.',
        category: 'Supplements'
      },
      {
        id: 28,
        name: 'Vitamin D3 1000IU',
        price: 280,
        image: '/products/vitamin-d.jpg',
        info: 'Bone health support',
        description: 'Vitamin D3 supplement for bone health and immune system support. 90 tablets.',
        category: 'Supplements'
      },
      {
        id: 29,
        name: 'Omega-3 Fish Oil',
        price: 450,
        image: '/products/omega3.jpg',
        info: 'Heart and brain health',
        description: 'High-potency omega-3 fish oil capsules for cardiovascular and cognitive health. 60 softgels.',
        category: 'Supplements'
      },
      {
        id: 30,
        name: 'Calcium + Magnesium',
        price: 320,
        image: '/products/calcium.jpg',
        info: 'Bone strength formula',
        description: 'Calcium and magnesium supplement for strong bones and teeth. Enhanced with vitamin D3.',
        category: 'Supplements'
      },
      {
        id: 31,
        name: 'Protein Powder 1kg',
        price: 1200,
        image: '/products/protein.jpg',
        info: 'Whey protein isolate',
        description: 'Premium whey protein isolate for muscle building and recovery. Low carb, high protein formula.',
        category: 'Supplements'
      },
      {
        id: 32,
        name: 'Zinc 50mg',
        price: 180,
        image: '/products/zinc.jpg',
        info: 'Immune system support',
        description: 'Zinc supplement for immune system support and overall health. 100 tablets.',
        category: 'Supplements'
      },
      {
        id: 33,
        name: 'Sunscreen SPF 50',
        price: 350,
        image: '/products/sunscreen.jpg',
        info: 'Broad spectrum UV protection',
        description: 'Water-resistant broad-spectrum sunscreen with SPF 50. Suitable for sensitive skin.',
        category: 'Skincare'
      },
      {
        id: 34,
        name: 'Moisturizing Cream',
        price: 280,
        image: '/products/moisturizer.jpg',
        info: 'Hydrating skin care',
        description: 'Deep hydrating moisturizer for dry skin. Non-greasy formula with vitamin E and aloe vera.',
        category: 'Skincare'
      },
      {
        id: 35,
        name: 'Acne Treatment Gel',
        price: 420,
        image: '/products/acne-gel.jpg',
        info: 'Salicylic acid formula',
        description: 'Acne treatment gel with 2% salicylic acid. Clears breakouts and prevents new acne formation.',
        category: 'Skincare'
      },
      {
        id: 36,
        name: 'Anti-aging Serum',
        price: 650,
        image: '/products/serum.jpg',
        info: 'Vitamin C and retinol',
        description: 'Anti-aging serum with vitamin C and retinol. Reduces fine lines and improves skin texture.',
        category: 'Skincare'
      },
      {
        id: 37,
        name: 'Face Wash 150ml',
        price: 220,
        image: '/products/facewash.jpg',
        info: 'Gentle daily cleanser',
        description: 'Gentle foaming face wash for daily cleansing. Removes dirt and oil without drying skin.',
        category: 'Skincare'
      },
      {
        id: 38,
        name: 'Lip Balm SPF 15',
        price: 120,
        image: '/products/lip-balm.jpg',
        info: 'Nourishing lip protection',
        description: 'Moisturizing lip balm with SPF 15 sun protection. Soothes and protects dry, chapped lips.',
        category: 'Skincare'
      }
    ];

  const product = allProducts.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-[calc(100vh-20rem)] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Product not found</h2>
          <button
            onClick={() => navigate('/')}
            className="mt-4 px-6 py-2 bg-gradient-to-r from-red-500 to-red-700 text-white rounded-lg font-medium hover:shadow-lg transition-all"
          >
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    // TODO: Implement cart functionality
    alert(`Added ${quantity} ${product.name} to cart!`);
  };

  const handleOrderNow = () => {
    // TODO: Implement order functionality
    alert(`Ordering ${quantity} ${product.name}!`);
  };

  return (
    <div className="min-h-[calc(100vh-20rem)] py-6 sm:py-8 md:py-12 px-3 sm:px-4">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="fixed top-20 left-3 sm:left-6 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl transition-all hover:scale-110"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
      </button>

      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 md:p-8">
            {/* Product Image */}
            <div className="bg-gray-100 rounded-xl overflow-hidden aspect-square md:aspect-auto">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain p-4 sm:p-6 md:p-8"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect width="400" height="400" fill="%23f3f4f6"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="20" fill="%239ca3af"%3ENo Image%3C/text%3E%3C/svg%3E';
                }}
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-red-100 text-red-600 text-xs sm:text-sm font-medium rounded-full mb-2 sm:mb-3">
                  {product.category}
                </span>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 sm:mb-3">
                  {product.name}
                </h1>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  {product.info}
                </p>
              </div>

              <div className="mb-4 sm:mb-6">
                <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Description</h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="mb-4 sm:mb-6">
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-bold text-red-600">₹{product.price}</span>
                  <span className="text-gray-500 text-xs sm:text-sm">(inclusive of all taxes)</span>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mb-4 sm:mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center rounded-lg border-2 border-gray-300 hover:border-red-500 hover:text-red-500 transition-all"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                    </svg>
                  </button>
                  <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center rounded-lg border-2 border-gray-300 hover:border-red-500 hover:text-red-500 transition-all"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-auto">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 px-4 sm:px-6 py-3 bg-white border-2 border-red-500 text-red-500 rounded-lg font-semibold hover:bg-red-50 transition-all text-sm sm:text-base"
                >
                  Add to Cart
                </button>
                <button
                  onClick={handleOrderNow}
                  className="flex-1 px-4 sm:px-6 py-3 bg-gradient-to-r from-[#FF7B7B] via-[#FF3333] via-[#DD0000] via-[#AA0000] to-[#660000] text-white rounded-lg font-semibold hover:shadow-lg transition-all text-sm sm:text-base"
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
