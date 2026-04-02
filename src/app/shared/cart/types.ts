export type CartLine = {
  productId: string;
  quantity: number;
};

export type CartState = {
  items: CartLine[];
};

export type CartAction =
  | { type: "hydrate"; payload: CartState }
  | { type: "add"; payload: { productId: string } }
  | { type: "remove"; payload: { productId: string } }
  | { type: "increase"; payload: { productId: string } }
  | { type: "decrease"; payload: { productId: string } };

export const EMPTY_CART_STATE: CartState = { items: [] };
