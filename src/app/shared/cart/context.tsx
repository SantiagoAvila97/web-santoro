"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import type { ProductCatalogItem } from "../data/products";
import { readCartState, writeCartState } from "./storage";
import { EMPTY_CART_STATE, type CartAction, type CartState } from "./types";

type CartItemView = {
  productId: string;
  quantity: number;
  product: ProductCatalogItem;
};

type CartContextValue = {
  items: CartItemView[];
  totalItems: number;
  subtotalLabel: string;
  addItem: (productId: string) => void;
  removeItem: (productId: string) => void;
  increaseQty: (productId: string) => void;
  decreaseQty: (productId: string) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

function parseCurrencyToNumber(value: string): number | null {
  const numericOnly = value.replace(/[^\d]/g, "");
  if (numericOnly.length === 0) return null;
  const numberValue = Number(numericOnly);
  if (!Number.isFinite(numberValue)) return null;
  return numberValue;
}

function formatCurrencyCOP(value: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);
}

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "hydrate": {
      return action.payload;
    }
    case "add": {
      const found = state.items.find(
        (item) => item.productId === action.payload.productId,
      );
      if (!found) {
        return {
          items: [
            ...state.items,
            { productId: action.payload.productId, quantity: 1 },
          ],
        };
      }
      return {
        items: state.items.map((item) =>
          item.productId === action.payload.productId
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      };
    }
    case "remove": {
      return {
        items: state.items.filter(
          (item) => item.productId !== action.payload.productId,
        ),
      };
    }
    case "increase": {
      return {
        items: state.items.map((item) =>
          item.productId === action.payload.productId
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      };
    }
    case "decrease": {
      return {
        items: state.items
          .map((item) =>
            item.productId === action.payload.productId
              ? { ...item, quantity: item.quantity - 1 }
              : item,
          )
          .filter((item) => item.quantity > 0),
      };
    }
    default: {
      return state;
    }
  }
}

type CartProviderProps = {
  products: ProductCatalogItem[];
  children: React.ReactNode;
};

export function CartProvider({ products, children }: CartProviderProps) {
  const [state, dispatch] = useReducer(cartReducer, EMPTY_CART_STATE);

  useEffect(() => {
    dispatch({ type: "hydrate", payload: readCartState() });
  }, []);

  useEffect(() => {
    writeCartState(state);
  }, [state]);

  const productsById = useMemo(() => {
    return new Map(products.map((product) => [product.id, product]));
  }, [products]);

  const items = useMemo<CartItemView[]>(() => {
    return state.items
      .map((line) => {
        const product = productsById.get(line.productId);
        if (!product) return null;

        return {
          productId: line.productId,
          quantity: line.quantity,
          product,
        };
      })
      .filter((line): line is CartItemView => line !== null);
  }, [productsById, state.items]);

  const totalItems = useMemo(
    () => items.reduce((acc, item) => acc + item.quantity, 0),
    [items],
  );

  const subtotalLabel = useMemo(() => {
    const subtotal = items.reduce((acc, item) => {
      const parsed = parseCurrencyToNumber(item.product.detailPrice);
      if (parsed === null) return acc;
      return acc + parsed * item.quantity;
    }, 0);

    if (subtotal <= 0) return "A convenir";

    return formatCurrencyCOP(subtotal);
  }, [items]);

  const addItem = useCallback((productId: string) => {
    dispatch({ type: "add", payload: { productId } });
  }, []);

  const removeItem = useCallback((productId: string) => {
    dispatch({ type: "remove", payload: { productId } });
  }, []);

  const increaseQty = useCallback((productId: string) => {
    dispatch({ type: "increase", payload: { productId } });
  }, []);

  const decreaseQty = useCallback((productId: string) => {
    dispatch({ type: "decrease", payload: { productId } });
  }, []);

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      totalItems,
      subtotalLabel,
      addItem,
      removeItem,
      increaseQty,
      decreaseQty,
    }),
    [
      addItem,
      decreaseQty,
      increaseQty,
      items,
      removeItem,
      subtotalLabel,
      totalItems,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }

  return context;
}
