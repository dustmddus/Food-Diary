import FilterButton from "../FilterButton";
import { SPORTS_CATEGORY_DROPDOWN } from "src/constants/category";
import { useState } from "react";
import { Response } from "./type";
import { useRecoilState } from "recoil";
import { sportsCategory } from "src/recoil/category";

const FilterList = () => {
  const [state, setState] = useState<Response>({
    cursor: {
      createdAt: "",
      id: null,
    },
    values: [],
    hasNext: false,
    category: "",
  });

  const [category, setCategory] = useRecoilState(sportsCategory);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const { dataset } = e.target as HTMLElement;
    const { value } = dataset;
    if (category === value) {
      setCategory("");
      setState({
        ...state,
        category: "",
      });
    } else {
      setCategory(value as string);
      setState({
        ...state,
        category: value as string,
      });
    }
  };
  return (
    <div>
      {SPORTS_CATEGORY_DROPDOWN.map((item) => (
        <FilterButton
          key={item.id}
          data-value={item.value.sportsCategory}
          active={item.value.sportsCategory === category}
          onClick={handleClick}
        >
          {item.text}
        </FilterButton>
      ))}
    </div>
  );
};

export default FilterList;
