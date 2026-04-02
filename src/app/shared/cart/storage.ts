import { EMPTY_CART_STATE, type CartLine, type CartState } from "./types";

const CART_STORAGE_KEY = "santoro_cart_v1";

function isValidLine(item: unknown): item is CartLine {
  if (typeof item !== "object" || item === null) return false;

  const line = item as Partial<CartLine>;

  return (
    typeof line.productId === "string" &&
    line.productId.length > 0 &&
    typeof line.quantity === "number" &&
    Number.isInteger(line.quantity) &&
    line.quantity > 0
  );
}

export function readCartState(): CartState {
  if (typeof window === "undefined") return EMPTY_CART_STATE;

  try {
    const raw = window.localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return EMPTY_CART_STATE;

    const parsed = JSON.parse(raw) as Partial<CartState>;
    const parsedItems = Array.isArray(parsed.items)
      ? parsed.items.filter(isValidLine)
      : [];

    if (parsedItems.length === 0) return EMPTY_CART_STATE;

    return { items: parsedItems };
  } catch {
    return EMPTY_CART_STATE;
  }
}

export function writeCartState(state: CartState): void {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Ignore storage write errors (private mode, quota, etc.)
  }
}
