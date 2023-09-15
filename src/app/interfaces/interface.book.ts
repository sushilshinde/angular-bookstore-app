export interface Book
{  //book interface before adding items to cart
  title: string;
  _id: String;
  price: number;
  thumbnailUrl: string;
  longDescription: string;
  status: string;
  authors: string[];
  categories: string[];
  discount?: number;
}
export interface BookQty extends Book
{ //bookQty interface after adding items to cart becase of quantity
  quantity: number;
}
