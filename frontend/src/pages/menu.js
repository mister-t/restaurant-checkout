import dataSource from '../data/categories_items';
import MenuItems from '../components/menuItems';
import Orders from '../components/orders';

const Menu = () => {
  return (
    <main className="relative min-h-screen bg-dark-chopping-board bg-no-repeat bg-cover bg-fixed" id="tabs">
      <MenuItems categoriesItems={dataSource} />
      <Orders />
    </main>
  )
};

export default Menu;