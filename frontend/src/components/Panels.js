import Panel from './Panel';

const Panels = ({categoryId, panels}) => {
  return (
      <div id="panels" className="flex flex-col gap-20 justify-center md:flex-row md:flex-wrap ">
        {panels.map(panel => <Panel key={panel.id} item={panel} numOfItems={panels.length}/>)}
      </div>
  )
};

export default Panels;