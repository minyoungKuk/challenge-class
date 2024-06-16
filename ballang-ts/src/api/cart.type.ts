export type GetCartData = {
  error: null;
  success: boolean;
  result: { id: number; item: CartItem[] };
};

export type CartItem = {
  cartId: number;
  createdAt: string;
  id: number;
  product: any;
  productId: number;
  quantity: number;
  updatedAt: string;
};
