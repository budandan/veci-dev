import { VeciAngularSrcPage } from './app.po';

describe('veci-angular-src App', () => {
  let page: VeciAngularSrcPage;

  beforeEach(() => {
    page = new VeciAngularSrcPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
