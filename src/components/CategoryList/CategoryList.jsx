/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import "./category.css";
const CategoryList = () => {
  const category = [
    {
      name: "remote",
      description: "lorem fdsf disfdsufb difbdsfudsi",
      category_id: "1",
    },
    {
      name: "Offline",
      description: "lorem fdsf disfdsufb difbdsfudsi",
      category_id: "1",
    },
    {
      name: "Re-Located",
      description: "lorem fdsf disfdsufb difbdsfudsi",
      category_id: "1",
    },
  ];
  return (
    <div>
      <h1 className="category-main-title">Category</h1>
      <div className="category-container">
        {category.map((cat) => (
          <div className="category">
            <h1 className="category-title">{cat.name}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
