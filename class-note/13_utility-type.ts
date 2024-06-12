interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// 1. 상품 목록을 받아오기 위한 API 함수
// function fetchProducts(): Promise<Product[]> {
//   // ..
// }

// interface ProductDetail {
//   id: number;
//   name: string;
//   price: number;
// }

// 2. 특정 상품의 상세정보를 나타내기 위한 함수
type ShoppingItem = Pick<Product, "id" | "name" | "price">;
// Pick을 사용하여 뽑아서 사용할 수 있다. 제네릭 타입. 불필요한 타입을 줄이기 위해 사용한다.
function displayProductDetail(
  shoppingItem: Pick<Product, "id" | "name" | "price">
) {}

// interface UpdateProduct {
//   id?: number;
//   name?: string;
//   price?: number;
//   brand?: string;
//   stock?: number;
// }

type UpdateProduct = Partial<Product>;
// 3. 특정 상품 정보를 업데이트(갱신)하는 함수
function updateProductItem(productItem: Partial<Product>) {}
