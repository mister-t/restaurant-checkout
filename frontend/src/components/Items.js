import Categories from './Categories'
import Panels from './Panels'

const menuItems = ({categoriesItems}) => {
  return (
    <section className="w-screen mx-auto">
      <Categories categoriesItems={categoriesItems} />
      <Panels activeCategoryId="" panels={categoriesItems.items}/>
    </section>
  )
}

export default menuItems