const Panel = ({item, numOfItems}) => {
  const { category_id:catId, id:itemId, image_id:imgId, name, price } = item;
  const imgSrc = `images/${imgId}.jpg`;
  const normalizedPrice = (price || 0).toFixed(2);
  const itemSize = 2;

  return (
      <div data-category-id={catId} data-item-id={itemId} className={`panel basis-1/${itemSize} relative border-2`}>
        <img
          src={imgSrc}
          alt={name}
          title={name}
          className="rounded-full h-40 w-40"
        />
        <h3 className="absolute bg-white text-slate-800 right-1/3 bottom-5 rounded-full px-1 mx-8 drop-shadow">${normalizedPrice}</h3>
        <h3 className="absolute text-white -bottom-8" >{name}</h3>
      </div>
  )
}

export default Panel;