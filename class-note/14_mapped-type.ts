type Heroes = "Hulk" | "Capt" | "Thor";

// 각 Heros에 속한 키들에 타입을 설정할 수 있음.
type HeroAges = { [K in Heroes]: number };

const ages: HeroAges = {
  Hulk: 33,
  Capt: 100,
  Thor: 1000,
};

// for in 반복문 코드
// let arr = ["a", "b", "c"];
// for (let key in arr) {
//   console.log(arr[key]);
// }
