  describe('Tests app init ', () => {

    beforeAll(async () => {
      await device.launchApp();
    });
  
    it('Check screen and music attributes', async () => {
      await expect(element(by.id('banner'))).toBeVisible();
      await expect(element(by.id('name_music'))).toBeVisible();
      await expect(element(by.id('artist'))).toBeVisible();
      await expect(element(by.id('slider'))).toBeVisible();
      await expect(element(by.id('counter_zero'))).toBeVisible();
      await expect(element(by.id('counter_duration'))).toBeVisible();
      await expect(element(by.id('back'))).toBeVisible();
      await expect(element(by.id('pause_play'))).toBeVisible();
      await expect(element(by.id('next'))).toBeVisible();
      await expect(element(by.id('heart'))).toBeVisible();
      await expect(element(by.id('repeat'))).toBeVisible();
      await expect(element(by.id('share'))).toBeVisible();
      await expect(element(by.id('menu'))).toBeVisible();
    });
  });
