import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../actions/cartActions';

const Item = ({ item }) => {
  const { _id: itemId, image, name, price, description } = item;
  const imgSrc = `images/${image.name}.jpg`;
  const normalizedPrice = (price || 0).toFixed(2);
  const itemSize = 2;

  const dispatch = useDispatch();

  const onAddItemToCart = (evt) => {
    evt.preventDefault();
    dispatch(addItemToCart({
      name,
      price,
      id: itemId,
      imgSrc,
      description,
    }));
  };

  return (
    <div className={`basis-1/${itemSize} relative h-40 border-0 flex flex-col justify-center items-center cursor-pointer`} onClick={onAddItemToCart}>
      <img
        src={imgSrc}
        alt={name}
        title={name}
        className="rounded-full h-40 w-40 border-2"
      />
      <h3 className="absolute bg-white text-slate-800 bottom-2 rounded-full px-1 drop-shadow">${normalizedPrice}</h3>
      <h3 className="absolute text-white -bottom-8" >{name}</h3>
    </div>
  )
}

export default Item;