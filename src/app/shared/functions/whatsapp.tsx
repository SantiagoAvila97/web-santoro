/**
 * Redirige al usuario a WhatsApp con un mensaje personalizado para Santoro Store.
 * @param product Nombre del producto a pedir (opcional, por defecto 'producto seleccionado')
 * @param precio Precio del producto (opcional)
 * @param customMessage Mensaje personalizado (opcional)
 */
export function redirectToWhatsapp(
  product: string,
  precio: string,
  customMessage?: string,
) {
  const defaultMessage = `Hola Santoro Store 🌐, quiero realizar mi pedido de *${product}* ${precio}
\n¿Me confirmas disponibilidad, y medios de pago para realizar la compra?`;

  const message = encodeURIComponent(customMessage || defaultMessage);
  const phone = "573159397610";

  const url = `https://api.whatsapp.com/send?phone=${phone}&text=${message}`;

  if (typeof window !== "undefined") {
    window.open(url, "_blank");
  }

  return url;
}
