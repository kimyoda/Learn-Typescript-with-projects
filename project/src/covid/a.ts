interface Hero {
  name: string;
  skill: string;
}

// const capt: Hero = {
//   name: 'capt',
//   skill: 'power',
// };

// const capt = {} as Hero;
// capt.name = 'capt';
// capt.skill = 'power';

// 타입 단언 문법 사용시 주의해야 할 점
const a: string | null;
a!;
