const EmptyCart = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-12 text-center max-w-2xl mx-auto">
      <div className="mb-6">
        <svg className="w-32 h-32 text-gray-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      </div>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h2>
      <p className="text-xl text-gray-600 mb-8">
        Looks like you haven't added any items to your cart yet
      </p>
      <button className="px-8 py-4 bg-gradient-to-r from-[#FF7B7B] via-[#FF3333] via-[#DD0000] via-[#AA0000] to-[#660000] text-white font-semibold rounded-xl hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all">
        Start Shopping
      </button>
    </div>
  );
};

export default EmptyCart;