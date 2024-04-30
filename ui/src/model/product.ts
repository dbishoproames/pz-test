type Uuid = string;
//export type Uuid = string;

export interface Product {
  readonly uuid: Uuid;
  productName: string;

  pricePerKilogram: number;

  pictures: string[];
  colour: string;
}

type RemoveGeneratedFields<Type> = {
  [Property in keyof Type as Exclude<Property, "uuid">]: Type[Property]
};

export type ProductEdit = RemoveGeneratedFields<Product>;
