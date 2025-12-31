import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-20rem)] py-6 sm:py-8 md:py-12 px-3 sm:px-4">
      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        className="fixed top-20 left-3 sm:left-6 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl transition-all hover:scale-110"
      >
        <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
          Shopping <span className="text-primary-red">Cart</span>
        </h1>
        
        {/* Empty Cart State */}
        <div className="flex flex-col items-center justify-center py-16 px-4">
          <div className="bg-white rounded-2xl shadow-lg p-12 max-w-md w-full text-center">
            <div className="mb-6">
              <svg className="w-24 h-24 mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
            <a href="/" className="inline-block px-8 py-4 bg-gradient-to-r from-[#FF7B7B] via-[#FF3333] via-[#DD0000] via-[#AA0000] to-[#660000] text-white font-semibold rounded-xl hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all">
              Start Shopping
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
