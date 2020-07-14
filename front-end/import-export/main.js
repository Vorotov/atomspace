console.log(123);
import { NUMBER_1 as num_1, NUMBER_2 as num_2 } from "./data.js";
console.log(num_1);
console.log(num_2);
import { incr, decr } from "./utils.js";
incr(num_1);
decr(num_2);
console.log(num_1);
console.log(num_2);
