import { Item, ItemProps } from "./item";

export type ListProps = {
  items: ItemProps[];
};
export const List = ({ items }: ListProps) => {
  return (
    <ul className="flex flex-col gap-y-5 items-center md:flex-row md:gap-5 md:grid md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <li className="flex-1" key={item.id}>
          <Item {...item} />
        </li>
      ))}
    </ul>
  );
};
