import { useNavigate } from 'react-router-dom';

const TrackOrder = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-8 md:py-12">
      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        className="fixed top-20 left-3 sm:left-6 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl transition-all hover:scale-110"
      >
        <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Track Your Order
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-3">
            Real-time tracking of your orders from pharmacy to your doorstep
          </p>
        </div>

        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 lg:p-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Coming Soon</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            Track your order status in real-time with our advanced tracking system.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
