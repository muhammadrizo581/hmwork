import { memo, type FC } from "react";
import { FaHeart, FaStar, FaShoppingCart } from "react-icons/fa";

export const ProductCard: FC<{ item: any }> = memo(({ item }) => {
  const discountedPrice = item.discountPercentage
    ? (item.price - (item.price * item.discountPercentage) / 100).toFixed(2)
    : null;

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden  relative group">
      <div className="relative">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-64 object-cover"
        />
        <button className="absolute top-3 right-3 p-2 rounded-full bg-transparent text-th hover:text-red-500 shadow opacity-0 group-hover:opacity-100 transition">
          <FaHeart />
        </button>
      </div>

      <div className="p-4 flex flex-col gap-2">
        <div className="flex items-center gap-1 text-sm text-yellow-500">
          {Array.from({ length: 5 }, (_, i) => (
            <FaStar
              key={i}
              className={
                i < Math.round(item.rating)
                  ? "text-yellow-500"
                  : "text-gray-300"
              }
            />
          ))}
          <span className="text-gray-500 text-xs ml-1">
            ({item.reviews?.length || 0})
          </span>
        </div>

        <h3 className="font-medium text-gray-900 text-sm line-clamp-2">
          {item.title}
        </h3>

        <div className="flex items-center gap-2">
          {discountedPrice ? (
            <>
              <span className="text-fh font-semibold">
                ${discountedPrice}
              </span>
              <span className="text-gray-400 line-through text-sm">
                ${item.price}
              </span>
            </>
          ) : (
            <span className="text-gray-900 font-semibold">${item.price}</span>
          )}
        </div>
      </div>

      <button className="absolute bottom-3 right-3 p-2 rounded-md border border-gray-200 text-green-700 transition">
        <FaShoppingCart />
      </button>
    </div>
  );
});
