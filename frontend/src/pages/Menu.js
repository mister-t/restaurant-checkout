import dataSource from '../data/categories_items';
import Items from '../components/Items';
import Orders from '../components/Orders';

const Menu = () => {
  return (
    <main className="relative min-h-screen bg-dark-chopping-board bg-no-repeat bg-cover bg-fixed" id="tabs">
      <Items categoriesItems={dataSource} />
      <Orders />
    </main>
  )
};

export default Menu;