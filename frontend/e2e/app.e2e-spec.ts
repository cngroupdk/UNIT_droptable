import { UnitFrontendPage } from './app.po';

describe('unit-frontend App', () => {
  let page: UnitFrontendPage;

  beforeEach(() => {
    page = new UnitFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
