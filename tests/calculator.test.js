import { calculator } from "../src/calculator";

test('Addition works correctly',()=>{
    expect(calculator.add(2,3)).toBe(5);
});

test('subtraction works correctly',()=>{
    expect(calculator.subtract(3,2)).toBe(1);
});

test('multiplication works correctly',()=>{
    expect(calculator.multiply(2,3)).toBe(6);
});
test('division works correctly',()=>{
    expect(calculator.divide(10,2)).toBe(5);
});
test('division by zero throws error',()=>{
    expect(()=>calculator.divide(5,0).toThrow('cannot divide by zero'));
})