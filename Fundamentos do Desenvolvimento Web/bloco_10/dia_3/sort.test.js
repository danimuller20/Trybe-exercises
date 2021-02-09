function generatesRandomNumber () {
  return Math.floor(Math.random() * 100 * 1);
};

test('sort number', () => {
  generatesRandomNumber = jest.fn().mockReturnValue(10);

  generatesRandomNumber();
  expect(generatesRandomNumber).toHaveBeenCalled()
  expect(generatesRandomNumber()).toBe(10);
  expect(generatesRandomNumber).toHaveBeenCalledTimes(2);
});