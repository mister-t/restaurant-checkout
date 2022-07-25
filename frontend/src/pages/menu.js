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
      <section className="flex flex-col absolute bottom-0 w-screen min-h-1/4 mx-auto md:flex-row">
        <div className="w-2/3 mx-1 p-2 bg-white">
          <article className="relative flex flex-col border p-4">
            <div className="flex justify-between">
              <h1 className="text-xl font-bold">Impossible Burger</h1>
              <h2 className="pr-5">$10.00</h2>
            </div>
            <p className="text-slate-400">Whole Wheat Bun, Gouda Cheese, Lettuce</p>
            <div className="absolute bottom-0 right-0 w-11 overflow-hidden inline-block">
              <div className="h-16 bg-slate-200 rotate-45 transform origin-bottom-left"><div className="-rotate-45 w-16 text-slate-400">x</div></div>
            </div>
          </article>
          <article className="relative flex flex-col border p-4">
            <div className="flex justify-between items-start">
              <h1 className="text-xl font-bold">Curly Fries</h1>
              <h2 className="pr-5">$5.00</h2>
            </div>
            <div className="absolute bottom-0 right-0 w-11 overflow-hidden inline-block">
              <div className="h-16 bg-slate-200 rotate-45 transform origin-bottom-left"><div className="-rotate-45 w-16 text-slate-400">x</div></div>
            </div>
          </article>
          <article className="relative flex flex-col border p-4">
            <div className="flex justify-between">
              <h1 className="text-xl font-bold">Double-Cheeseburger</h1>
              <h2 className="pr-5">$15.00</h2>
            </div>
              <p className="text-slate-400">Quarter-pound Wagyu beef, No Onions</p>
            <div className="absolute bottom-0 right-0 w-11 overflow-hidden inline-block">
              <div className="h-16 bg-slate-200 rotate-45 transform origin-bottom-left"><div className="-rotate-45 w-16 text-slate-400">x</div></div>
            </div>
          </article>
        </div>
        <div className="w-1/3">
          <article className="h-1/3 text-white flex items-center justify-center border-y">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <button className="text-3xl tracking-wider">Cancel</button>
          </article>
          <article className="h-2/3 flex flex-col items-center justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 my-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
            </svg>
            <button className="min-h-2/3 text-white text-4xl tracking-wider font-bold mb-5">ORDER</button> 
            <h1 className="text-2xl tracking-wider ">$55.99</h1>
          </article>
        </div>
      </section>
    </main>
  )
};

export default Menu;