import { memo } from "react";
import { FaLeaf, FaBox, FaTools, FaCarrot, FaAppleAlt } from "react-icons/fa";
import { MdLocalFlorist } from "react-icons/md"

const categories = [
  { id: 1, label: "ALL", icon: <FaLeaf /> },
  { id: 2, label: "BUNDLES", icon: <FaBox /> },
  { id: 3, label: "HERBS", icon: <FaLeaf /> }, 
  { id: 4, label: "VEGETABLES", icon: <FaCarrot /> }, 
  { id: 5, label: "FRUITS", icon: <FaAppleAlt /> }, 
  { id: 6, label: "SUPPLIES", icon: <FaTools /> },
  { id: 7, label: "FLOWERS", icon: <MdLocalFlorist /> },
];

export const Category = memo(() => {
  return (
    <section className="container py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Our products.</h2>
        <button className="border border-py text-py px-4 py-2 rounded-lg  cursor-pointer">
          View all (12)
        </button>
      </div>

      <div className="flex justify-between flex-wrap ">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className="flex items-center gap-2 border border-gray-200 py-6 px-5 rounded-lg text-gray-800 hover:border-py hover:text-py transition cursor-pointer"
          >
            <span className="text-py text-lg">{cat.icon}</span>
            <span className="text-sm font-medium">{cat.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
});
