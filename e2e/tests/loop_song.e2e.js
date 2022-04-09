describe('Tests song loop', () => {

  beforeAll(async () => {
    await device.launchApp();
  });

  it('Lopp 1x', async () => {
    await new Promise((r) => setTimeout(r, 2000));
    const attributeNameMusic = await element(by.id('name_music')).getAttributes();
    await element(by.id('pause_play')).tap();
    await element(by.id('menu')).tap();
    await new Promise((r) => setTimeout(r, 2000));
    await expect(element(by.id('name_music'))).toHaveValue(attributeNameMusic.text);
  });

});