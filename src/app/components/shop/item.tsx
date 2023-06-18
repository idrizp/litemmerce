import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardText, CardTitle } from "../ui/card";
import { Gallery } from "../ui/gallery";

export type ItemProps = {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  purchaseUrl?: string;
};
export const Item = ({ id, name, description, price, images }: ItemProps) => {
  return (
    <Card className="max-w-lg md:max-w-max">
      <CardTitle>{name}</CardTitle>
      <Gallery images={images} />
      <CardText className="text-white/70">${price}</CardText>
      <CardText className="text-white/50">{description}</CardText>
      <Link href={`/shop/item/${id}`}>
        <Button type="primary">View Details</Button>
      </Link>
    </Card>
  );
};
