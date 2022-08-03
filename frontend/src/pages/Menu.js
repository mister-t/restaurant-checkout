import Categories from '../components/categories/Categories';
import Items from '../components/items/Items';
import Orders from '../components/orders/Orders';

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