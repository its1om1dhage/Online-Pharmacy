import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-20rem)] flex items-center justify-center px-3 sm:px-4 py-8 sm:py-12 bg-gradient-to-br from-red-50 to-white">
      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        className="fixed top-6 left-3 sm:left-6 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl transition-all hover:scale-110"
      >
        <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-md">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
          <p className="text-sm sm:text-base text-gray-600">Sign in to your MediEase account</p>
        </div>

        <form className="space-y-5 sm:space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent transition-all text-sm sm:text-base"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent transition-all text-sm sm:text-base"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="w-4 h-4 text-primary-red border-gray-300 rounded focus:ring-primary-red" />
              <span className="ml-2 text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-primary-red hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#FF7B7B] via-[#FF3333] via-[#DD0000] via-[#AA0000] to-[#660000] text-white text-sm sm:text-base font-semibold rounded-xl hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Sign In
          </button>
        </form>

        <div className="mt-5 sm:mt-6 text-center text-sm sm:text-base">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <a href="#" className="text-primary-red font-semibold hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
