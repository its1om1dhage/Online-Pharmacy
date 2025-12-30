import EmptyCart from '../components/cart/EmptyCart';

const Cart = () => {
  return (
    <div className="min-h-[calc(100vh-20rem)] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Shopping <span className="text-primary-red">Cart</span>
        </h1>
        <EmptyCart />
      </div>
    </div>
  );
};

export default Cart;
