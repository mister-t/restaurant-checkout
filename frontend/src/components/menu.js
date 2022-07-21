import Menu from '../data/categories_items';

const menu = () => {
  return (
    <div>{Menu.categories.map(cat => cat.name)}</div>
  )
}

export default menu