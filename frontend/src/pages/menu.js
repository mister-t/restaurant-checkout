import MenuItems from '../data/categories_items';
import Categories from '../components/categories';
import Panels from '../components/panels';
import Orders from '../components/orders';

const Menu = () => {
  const { categories } = MenuItems; 
  return (
    <main className="relative min-h-screen bg-dark-aliona bg-no-repeat bg-cover bg-fixed" id="tabs">
      {/* <section className="w-screen mx-auto">
        <Categories categories={categories} />
        <Panels categoryId="1" panels={categories[0]}/>
      </section> */}
      <Orders />
    </main>
  )
};

export default Menu;