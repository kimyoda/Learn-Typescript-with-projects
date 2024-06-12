interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// 상품 목록을 받아오기 위한 API 함수
// function fetchProducts(): Promise<Product[]> {
//   // ..
// }

// interface ProductDetail {
//   id: number;
//   name: string;
//   price: number;
// }

type ShoppingItem = Pick<Product, "id" | "name" | "price">;

// Pick을 사용하여 뽑아서 사용할 수 있다. 제네릭 타입. 불필요한 타입을 줄이기 위해 사용한다.
function displayProductDetail(
  shoppingItem: Pick<Product, "id" | "name" | "price">
) {}
