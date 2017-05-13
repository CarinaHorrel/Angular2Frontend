import { Angular2frontendPage } from './app.po';

describe('angular2frontend App', function() {
  let page: Angular2frontendPage;

  beforeEach(() => {
    page = new Angular2frontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
