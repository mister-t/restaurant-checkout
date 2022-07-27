import Categories from './categories'
import Panels from './panels'

const menuItems = ({categoriesItems}) => {
  return (
    <section className="w-screen mx-auto">
      <Categories categoriesItems={categoriesItems} />
      <Panels activeCategoryId="" panels={categoriesItems.items}/>
    </section>
  )
}

export default menuItems