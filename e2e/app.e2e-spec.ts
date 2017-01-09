import { TesteaPage } from './app.po';

describe('testea App', function() {
  let page: TesteaPage;

  beforeEach(() => {
    page = new TesteaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
