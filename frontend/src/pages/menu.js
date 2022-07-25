// import MenuItems from '../data/categories_items';
// import Category from '../components/category';

const Menu = () => {
  return (
    // <ul>{MenuItems.categories.map(cat => <Category name={cat.name} />)}</ul>
    <main className="relative min-h-screen bg-dark-aliona bg-no-repeat bg-cover bg-fixed" id="tabs">
      <section className="w-screen mx-auto">
        <div
          className="flex flex-col justify-center mx-auto mb-6 md:flex-row"
        >
          <div
            className="flex justify-center text-center bg-softBlue cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab"
            data-target="panel-1"
          >
            <div className="py-5 text-white" data-target="panel-1">Bakery</div>
          </div>

          <div
            className="flex justify-center text-center cursor-pointer text-gray-600 border-b-8 border-softBlue md:w-1/3 md:hover:text-softRed "
            data-target="panel-2"
          >
            <div className="py-5 text-white" data-target="panel-2">Entrees</div>
          </div>

          <div className="flex justify-center text-center cursor-pointer text-gray-600 border-b-8 border-softBlue md:w-1/3 hover:text-softRed tab" data-target="panel-3" >
            <div className="py-5 text-white" data-target="panel-3">Drinks</div>
          </div>
        </div>

        <div id="panels" className="container mx-auto">
          <div className="flex flex-col py-5 md:flex-row md:space-x-7 panel panel-1">
            <div className="relative flex justify-center mb-20 md:w-1/2">
              <img
                src="images/95d02a230fe050.jpg"
                alt="bakery"
                className="relative rounded-full border-4"
              />
              <h3 className="absolute bg-white text-slate-800 bottom-3 rounded-full px-1 drop-shadow z-5">$2.99</h3>
              <h3 className="absolute text-white -bottom-8" >Muffin</h3>
            </div>
            <div className="flex justify-center mb-20 md:w-1/2">
              <img
                src="images/70c2a6247e7b58.jpg"
                alt="bakery"
                className="relative z-10 rounded-full border-4 "
              />
            </div>
            <div className="flex justify-center mb-20 md:w-1/2">
              <img
                src="images/70c2a6247e7b58.jpg"
                alt="bakery"
                className="relative z-10 rounded-full border-4 "
              />
            </div>
            <div className="flex justify-center mb-20 md:w-1/2">
              <img
                src="images/70c2a6247e7b58.jpg"
                alt="bakery"
                className="relative z-10 rounded-full border-4 "
              />
            </div>
          </div>

          <div className="flex flex-col hidden py-5 md:flex-row md:space-x-7 panel panel-2">
            <div className="flex justify-center md:w-1/2">
              <img
                src="images/3e1bd1342800f7.jpg"
                alt="entree"
                className="relative z-10 rounded-full"
              />
            </div>
            <div className="flex justify-center md:w-1/2">
              <img
                src="images/b271afbefdc554.jpg"
                alt="entree"
                className="relative z-10 rounded-full"
              />
            </div>
          </div>

          <div className="flex flex-col hidden py-5 md:flex-row md:space-x-7 panel panel-3">
            <div className="flex justify-center md:w-1/2">
              <img
                src="images/drinks/70c2a6247e7b58.jpg"
                alt="drink"
                className="relative z-10 rounded-full"
              />
            </div>
            <div className="flex justify-center md:w-1/2">
              <img
                src="images/drinks/70c2a6247e7b58.jpg"
                alt="drink"
                className="relative z-10 rounded-full"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col absolute bottom-0 w-screen h-1/4 mx-auto bg-white md:flex-row">
        <div className="w-2/3 mx-10 p-2">
          <article className="flex flex-col border p-4">
            <div className="flex justify-between">
              <h1 className="text-xl font-bold">Impossible Burger</h1>
              <h2>$10.00</h2>
            </div>
            <p>Whole Wheat Bun, Gouda Cheese, Lettuce</p>
          </article>
          <article className="flex flex-col border p-4">
            <div className="flex justify-between">
              <h1 className="text-xl font-bold">Curly Fries</h1>
              <h2>$5.00</h2>
            </div>
          </article>
          <article className="flex flex-col border p-4">
            <div className="flex justify-between">
              <h1 className="text-xl font-bold">Curly Fries</h1>
              <h2>$5.00</h2>
            </div>
          </article>
          <article className="flex flex-col border p-4">
            <div className="flex justify-between">
              <h1 className="text-xl font-bold">Curly Fries</h1>
              <h2>$5.00</h2>
            </div>
          </article>
          <article className="flex flex-col border p-4">
            <div className="flex justify-between">
              <h1 className="text-xl font-bold">Curly Fries</h1>
              <h2>$5.00</h2>
            </div>
          </article>
          <article className="flex flex-col border p-4">
            <div className="flex justify-between">
              <h1 className="text-xl font-bold">Curly Fries</h1>
              <h2>$5.00</h2>
            </div>
          </article>
        </div>
        <div className="w-1/3"> right side</div>
      </section>
    </main>
  )
};

export default Menu;