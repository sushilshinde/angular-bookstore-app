export interface BookQty {
    title: string;
    id: number;
    price: number;
    thumbnailUrl: string;
    longDescription: string;
    status: string;
    authors: string[];
    categories: string[];
    discount?:number;
    quantity:number;
  }
  