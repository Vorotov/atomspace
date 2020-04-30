let o = {
  x: 2,
  y: 5,
  z: 8,
  prim: {
    bool: true,
    null: null,
    undefined: undefined,
    number: 5,
    string: "abs",
    symbol: Symbol("q"),
  },
};
function div({ x, y, ...rest }) {
  console.log(rest.prim);
  return x / y;
}
console.log(div(o));
