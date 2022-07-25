import Panel from './panel';

const Panels = ({categoryId, panels}) => {
  return (
      <div id="panels" className="container mx-auto flex flex-col md:flex-row md:flex-wrap ">
        {panels.map(panel => <Panel key={panel.id} item={panel} numOfItems={panels.length}/>)}

        {/* <div className="flex flex-col hidden py-5 md:flex-row md:space-x-7 panel panel-2">
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
        </div> */}

        {/* <div className="flex flex-col hidden py-5 md:flex-row md:space-x-7 panel panel-3">
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
        </div> */}
      </div>
  )
};

export default Panels;