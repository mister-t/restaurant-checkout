import Categories from '../components/Categories';
import Items from '../components/Items';
import Orders from '../components/Orders';

const Menu = () => {
  return (
    <main className="relative min-h-screen bg-dark-chopping-board bg-no-repeat bg-cover bg-fixed" id="tabs">
      <Categories />
      <Items />
      
      <Orders />
    </main>
  )
};

export default Menu;