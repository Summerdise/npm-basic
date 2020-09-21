import { transform } from "../src/romanizer"

describe('romanizer', () => {
    it('should return X when input 10', () => {
        expect(transform(10)).toEqual('X');
    })
})