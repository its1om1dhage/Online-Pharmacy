import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Subscription from './pages/Subscription';
import TrackOrder from './pages/TrackOrder';
import Chatbot from './pages/Chatbot';
import Consultation from './pages/Consultation';
import Reminder from './pages/Reminder';
import Prescription from './pages/Prescription';
import GenericMedicines from './pages/GenericMedicines';
import MedicalEquipment from './pages/MedicalEquipment';
import MedicalMachines from './pages/MedicalMachines';
import CleaningProducts from './pages/CleaningProducts';
import Supplements from './pages/Supplements';
import Skincare from './pages/Skincare';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="subscription" element={<Subscription />} />
          <Route path="track-order" element={<TrackOrder />} />
          <Route path="chatbot" element={<Chatbot />} />
          <Route path="consultation" element={<Consultation />} />
          <Route path="reminder" element={<Reminder />} />
          <Route path="prescription" element={<Prescription />} />
          <Route path="generic-medicines" element={<GenericMedicines />} />
          <Route path="medical-equipment" element={<MedicalEquipment />} />
          <Route path="medical-machines" element={<MedicalMachines />} />
          <Route path="cleaning-products" element={<CleaningProducts />} />
          <Route path="supplements" element={<Supplements />} />
          <Route path="skincare" element={<Skincare />} />
          <Route path="product/:id" element={<ProductDetail />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
