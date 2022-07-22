import MenuItems from '../data/categories_items';
import Category from '../components/category';

const Menu = () => {
  return (
    <ul>{MenuItems.categories.map(cat => <Category name={cat.name} />)}</ul>
  )
};

export default Menu;