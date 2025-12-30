const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-red-50 via-white to-red-50 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-red-100 text-primary-red px-4 py-2 rounded-full text-sm font-semibold">
                🎉 Welcome to MediEase
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Your Health,
              <span className="block text-primary-red">Our Priority</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Get quality medicines and healthcare products delivered to your doorstep. 
              Fast, reliable, and trusted by thousands of customers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-4 bg-gradient-to-r from-[#FF7B7B] via-[#FF3333] via-[#DD0000] via-[#AA0000] to-[#660000] text-white font-semibold rounded-xl hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all">
                Shop Now
              </button>
              <button className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-primary-red hover:text-primary-red transition-all">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8">
              <div>
                <p className="text-3xl font-bold text-primary-red">10K+</p>
                <p className="text-gray-600 text-sm">Happy Customers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary-red">5K+</p>
                <p className="text-gray-600 text-sm">Products</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary-red">24/7</p>
                <p className="text-gray-600 text-sm">Support</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="/hero1 (2).webp" 
                alt="Healthcare" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="absolute top-10 right-10 w-72 h-72 bg-red-200 rounded-full blur-3xl opacity-20 -z-10"></div>
            <div className="absolute bottom-10 left-10 w-72 h-72 bg-red-300 rounded-full blur-3xl opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;