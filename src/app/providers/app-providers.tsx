"use client";

import type { ReactNode } from "react";
import { CartProvider } from "../shared/cart/context";
import { PRODUCTS } from "../shared/data/products";

type AppProvidersProps = {
  children: ReactNode;
};

export function AppProviders({ children }: AppProvidersProps) {
  return <CartProvider products={PRODUCTS}>{children}</CartProvider>;
}
