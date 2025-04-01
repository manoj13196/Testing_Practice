import { reverseString } from "../src/reverseString";

test('Reverse a string correctly',()=>{
    expect(reverseString('hello')).toBe('olleh');
})

test('Works with single character',()=>{
    expect(reverseString('a')).toBe('a');
});