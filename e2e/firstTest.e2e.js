describe('Example', () => {

  describe('Tests forgot password', () => {

    beforeAll(async () => {
      await device.launchApp();
    });
  
    it('Check screen forgot password', async () => {
      await expect(element(by.text('19th Floor'))).toBeVisible();
    });
  
  });
});
