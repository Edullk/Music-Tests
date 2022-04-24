describe('Tests skip music', () => {

  beforeAll(async () => {
    await device.launchApp();
  });

  it('Tests skip music song', async () => {
    await new Promise((r) => setTimeout(r, 2000))
    const attributeNameMusic = await element(by.id('name_music')).getAttributes();
    const attributeArtistMusic = await element(by.id('artist')).getAttributes();
    await element(by.id('next')).tap();
    await new Promise((r) => setTimeout(r, 1000))
    await expect(element(by.id('name_music'))).not.toHaveValue(attributeNameMusic.text);
    await expect(element(by.id('artist'))).not.toHaveValue(attributeArtistMusic.text);
    await expect(element(by.id('counter_zero'))).toHaveText('00:00');
  });

  it('Tests skip music song', async () => {
    await new Promise((r) => setTimeout(r, 2000))
    const attributeNameMusic = await element(by.id('name_music')).getAttributes();
    const attributeArtistMusic = await element(by.id('artist')).getAttributes();
    await element(by.id('pause_play')).tap();
    await new Promise((r) => setTimeout(r, 2000))
    await element(by.id('next')).tap();
    await new Promise((r) => setTimeout(r, 3000))
    await element(by.id('pause_play')).tap();
    await expect(element(by.id('counter_zero'))).toHaveText('00:02');
    await expect(element(by.id('name_music'))).not.toHaveValue(attributeNameMusic.text);
    await expect(element(by.id('artist'))).not.toHaveValue(attributeArtistMusic.text);
  });

});