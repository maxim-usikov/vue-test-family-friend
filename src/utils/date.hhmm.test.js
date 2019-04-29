import hhmm from './date.hhmm';

describe('date.hhmm', () => {
  it.each`
    date                                      | expected
    ${new Date('December 26, 1990 00:00:00')} | ${'00:00'}
    ${new Date('December 26, 1990 00:01:00')} | ${'00:01'}
    ${new Date('December 26, 1990 00:10:00')} | ${'00:10'}
    ${new Date('December 26, 1990 00:11:00')} | ${'00:11'}
    ${new Date('December 26, 1990 00:20:00')} | ${'00:20'}
    ${new Date('December 26, 1990 00:21:00')} | ${'00:21'}
    ${new Date('December 26, 1990 01:00:00')} | ${'01:00'}
    ${new Date('December 26, 1990 02:00:00')} | ${'02:00'}
    ${new Date('December 26, 1990 10:00:00')} | ${'10:00'}
    ${new Date('December 26, 1990 11:00:00')} | ${'11:00'}
    ${new Date('December 26, 1990 20:00:00')} | ${'20:00'}
    ${new Date('December 26, 1990 21:00:00')} | ${'21:00'}
  `('converts $date to $expected', ({ date, expected }) => {
  expect(hhmm(date)).toBe(expected);
});
});
