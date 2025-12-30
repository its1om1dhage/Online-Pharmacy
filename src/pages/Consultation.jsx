import { useNavigate } from 'react-router-dom';

const Consultation = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        className="fixed top-20 left-6 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl transition-all hover:scale-110"
      >
        <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Doctor Consultation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with certified doctors for online consultations anytime
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Coming Soon</h2>
          <p className="text-gray-600 text-lg">
            Book appointments with experienced doctors and get medical advice from the comfort of your home.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
