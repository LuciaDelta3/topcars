export interface Car {
  id: number;
  rank: number;
  name: string;
  description: string;
  image: string;
  price: string;
  specs: {
    acceleration: string;
    topSpeed: string;
    power: string;
  };
}