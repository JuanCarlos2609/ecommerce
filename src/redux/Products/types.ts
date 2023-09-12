interface Rating {
  count: number;
  rate: number;
}

export interface Data {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: Rating;
  title: string;
}

export interface ProductsData {
  config: any;
  data: Data[];
  headers: any;
  request: any;
  status: number;
  statusText: string;
}

export interface StateValues {
  products: any;
  error: any;
  isLoading: boolean;
}
