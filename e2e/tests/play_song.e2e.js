describe('Tests play music', () => {

  beforeAll(async () => {
    await device.launchApp();
  });

  it('Tests play song', async () => {
    await new Promise((r) => setTimeout(r, 2000))
    await element(by.id('pause_play')).tap();
    await new Promise((r) => setTimeout(r, 2000))
    await expect(element(by.id('counter_zero'))).not.toHaveValue('0');
  });

});