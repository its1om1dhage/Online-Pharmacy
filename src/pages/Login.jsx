import LoginForm from '../components/auth/LoginForm';

const Login = () => {
  return (
    <div className="min-h-[calc(100vh-20rem)] flex items-center justify-center px-4 py-12 bg-gradient-to-br from-red-50 to-white">
      <LoginForm />
    </div>
  );
};

export default Login;
