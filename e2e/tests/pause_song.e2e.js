describe('Tests pause music', () => {

  beforeAll(async () => {
    await device.launchApp();
  });

  it('Tests pause song', async () => {
    await new Promise((r) => setTimeout(r, 2000));
    await element(by.id('pause_play')).tap();
    await new Promise((r) => setTimeout(r, 5000));
    await element(by.id('pause_play')).tap();
    const attributes = await element(by.id('counter_zero')).getAttributes();
    await expect(element(by.id('counter_zero'))).toHaveValue('00:05');
  });

});