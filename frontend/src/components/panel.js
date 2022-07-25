const Panel = ({item, numOfItems}) => {
  const { category_id:catId, id:itemId, image_id:imgId, name, price } = item;
  const imgSrc = `images/${imgId}.jpg`;
  const normalizedPrice = (price || 0).toFixed(2);

  const itemsPerRow = 3;
  const itemImgWidth = numOfItems >= itemsPerRow ? itemsPerRow : numOfItems;

  return (
    <div className={`py-5 panel flex flex-col md:space-x-7 w-1/${itemImgWidth}`}>
      <div data-category-id={catId} data-item-id={itemId} className={`relative mb-20 `}>
        <img
          src={imgSrc}
          alt=""
          className="rounded-full border-4"
        />
        <h3 className="absolute bg-white text-slate-800 bottom-3 rounded-full px-1 drop-shadow z-5">${normalizedPrice}</h3>
        <h3 className="absolute text-white -bottom-8" >{name}</h3>
      </div>
    </div>
  )
}

export default Panel;