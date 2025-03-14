//Type your code here
const SERVICE_API_URL = "https://vendure.demo.universalcommerce.io/shop-api";
const SERVICE_API_ACTIVE_ORDER =
  "query ActiveOrder { activeOrder { id lines { productVariant { id } } } }";