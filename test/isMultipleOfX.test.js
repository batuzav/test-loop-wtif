const { isMultipleOfX } = require('../services.js');

test('multiple', () => {
	expect(isMultipleOfX(1,2)).toBe(1);
});
