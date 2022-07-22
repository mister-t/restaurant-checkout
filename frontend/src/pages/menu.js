import Menu from '../data/categories_items';
import Category from '../components/category';

const menu = () => {
  return (
    <ul>{Menu.categories.map(cat => <Category name={cat.name} />)}</ul>
  )
}

export default menu