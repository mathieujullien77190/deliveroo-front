export type Restaurant = {
  path: string;
  name: string;
  categories: string[];
  price: string;
  phone: string;
  percentage: number;
  ratings: string;
  address: string;
  delay: string;
  description: string;
  picture: string;
  client_address: {
    coordinates: [number, number];
    locality: string;
    country: "FR";
    formatted_address: string;
    post_code: string;
    route: string;
    street_number: string;
    city: string;
  };
};

export type Meal = {
  id: string;
  title: string;
  description: string;
  price: string;
  picture: string;
  popular: boolean;
};

export type Category = {
  name: string;
  meals: Meal[];
};

export type Data = {
  restaurant: Restaurant;
  categories: Category[];
};

export type Product = {
  id: Meal["id"];
  count: number;
  title: Meal["title"];
};
