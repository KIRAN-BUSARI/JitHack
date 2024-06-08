import NavbarRoutes from '@/components/navbar-routes';
import MobileSidebar from './mobile-sidebar';

const Navbar = () => (
  <div className='p-4 border-b h-full flex items-center shadow-sm'>
    <MobileSidebar />
    <NavbarRoutes />
  </div>
);

export default Navbar;
