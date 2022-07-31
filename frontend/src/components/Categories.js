import Category from '../components/Category';

const Categories = ({activeCats, setActiveCategory}) => {

  return (
    <div className="flex flex-col mx-auto mb-6 md:flex-row">
      {activeCats.map((cat, idx) => (
        <Category
          key={cat._id}
          catId={cat._id}
          catName={cat.name}
          isActive={cat.isActive}
          numOfTabs={activeCats.length}
          setActiveCategory={setActiveCategory}
          />))
      }
    </div>
  );
};

export default Categories;