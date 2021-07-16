const { CountBy } = require('./countBy');

describe('Test Count by X functions', () => {
  it('Test 1x1=1', () => {
    const countBy = new CountBy();
    expect(countBy.countBy(1,1)).toStrictEqual([1]);
  });
  it('Multiple 1 by 10 times', () => {
    const countBy = new CountBy();
    expect(countBy.countBy(1,10)).toStrictEqual([1,2,3,4,5,6,7,8,9,10]);
  });
});