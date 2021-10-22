describe('index.js', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('checks output of twoSum', async () => {
    const index = require('./index.js');
    const output = await index.twoSum(1, 2);
    expect(output).toBe(3);
  });
});
