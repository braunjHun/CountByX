const { CountBy } = require('./countBy');

describe('Test Count by X functions', () => {
  it('Basic multiplication', () => {
    const countBy = new CountBy();
    expect(countBy.countBy(1,1)).toStrictEqual([1]);
  });
  it('Multiplication ten times', () => {
    const countBy = new CountBy();
    expect(countBy.countBy(1,10)).toStrictEqual([1,2,3,4,5,6,7,8,9,10]);
  });
  it('Multiplication five times with two', () => {
    const countBy = new CountBy();
    expect(countBy.countBy(2,5)).toStrictEqual([2,4,6,8,10]);
  });
});