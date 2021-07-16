const { CountBy } = require('./countBy');

describe('Test Count by X functions', () => {
  it('Test 1x1=1', () => {
    const countBy = new CountBy();
    expect(countBy.countBy(1,1)).toBe([1]);
  });
});