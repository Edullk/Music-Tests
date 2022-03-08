describe('Tests play music', () => {

  beforeAll(async () => {
    await device.launchApp();
  });

  it('Tests play music', async () => {
    await element(by.id('pause_play')).tap();
    await expect(element(by.id('banner'))).toBeVisible();
  });

});