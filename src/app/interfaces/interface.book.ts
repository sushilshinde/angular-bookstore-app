export interface Book {
  title: string;
  id: number;
  price: number;
  thumbnailUrl: string;
  longDescription: string;
  status: string;
  authors: string[];
  categories: string[];
  discount?:number;
<<<<<<< HEAD
}
export interface  BookQty extends Book  {
  quantity:number;
}
=======
  quantity?:number;
}
>>>>>>> 8cc4c8c129ba1de5c96a35f549f9a95e6dc139c6
