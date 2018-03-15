import { AppdevPage } from './app.po';

describe('appdev App', function() {
  let page: AppdevPage;

  beforeEach(() => {
    page = new AppdevPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
