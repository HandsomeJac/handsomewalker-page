import { Ng2ProjectPage } from './app.po';

describe('ng2-project App', () => {
  let page: Ng2ProjectPage;

  beforeEach(() => {
    page = new Ng2ProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
