// import MenuItems from '../data/categories_items';
// import Category from '../components/category';

const Menu = () => {
  return (
    // <ul>{MenuItems.categories.map(cat => <Category name={cat.name} />)}</ul>
    <section id="tabs">
      <div class="w-screen mx-auto my-6 mb-32 mt-12 px-6">
        <div
          class="flex flex-col justify-center mx-auto mb-6 border-b md:space-x-10 md:flex-row"
        >
          <div
            class="flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab"
            data-target="panel-1"
          >
            <div class="py-5 border-b-4 border-softRed" data-target="panel-1">Bakery</div>
          </div>

          <div
            class="flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab"
            data-target="panel-2"
          >
            <div class="py-5" data-target="panel-2">Entrees</div>
          </div>

          <div class="flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab" data-target="panel-3" >
            <div class="py-5" data-target="panel-3">Drinks</div>
          </div>
        </div>

        <div id="panels" class="container mx-auto">
          <div class="flex flex-col py-5 md:flex-row md:space-x-7 panel panel-1">
            <div class="flex justify-center md:w-1/2">
              <img
                src="images/70c2a6247e7b58.jpg"
                alt="bakery"
                class="relative z-10 rounded-full "
              />
            </div>
            <div class="flex justify-center md:w-1/2">
              <img
                src="images/70c2a6247e7b58.jpg"
                alt="bakery"
                class="relative z-10 rounded-full "
              />
            </div>
            <div class="flex justify-center md:w-1/2">
              <img
                src="images/70c2a6247e7b58.jpg"
                alt="bakery"
                class="relative z-10 rounded-full "
              />
            </div>
            <div class="flex justify-center md:w-1/2">
              <img
                src="images/70c2a6247e7b58.jpg"
                alt="bakery"
                class="relative z-10 rounded-full "
              />
            </div>
          </div>

          <div class="flex flex-col hidden py-5 md:flex-row md:space-x-7 panel panel-2">
            <div class="flex justify-center md:w-1/2">
              <img
                src="images/3e1bd1342800f7.jpg"
                alt="entree"
                class="relative z-10 rounded-full"
              />
            </div>
            <div class="flex justify-center md:w-1/2">
              <img
                src="images/b271afbefdc554.jpg"
                alt="entree"
                class="relative z-10 rounded-full"
              />
            </div>
          </div>

          <div class="flex flex-col hidden py-5 md:flex-row md:space-x-7 panel panel-3">
            <div class="flex justify-center md:w-1/2">
              <img
                src="images/drinks/70c2a6247e7b58.jpg"
                alt="drink"
                class="relative z-10 rounded-full"
              />
            </div>
            <div class="flex justify-center md:w-1/2">
              <img
                src="images/drinks/70c2a6247e7b58.jpg"
                alt="drink"
                class="relative z-10 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Menu;