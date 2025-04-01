import { captilize } from "../src/captilize";

test('Captilize the first letter', ()=>{
    expect(captilize('hello')).toBe('Hello')
});

test('Works with single-letter words', ()=>{
    expect(captilize('a')).toBe('A');
});

test('Throws error for non-string input',()=>{
    expect(()=>captilize(123)).toThrow('Invalid input');
});