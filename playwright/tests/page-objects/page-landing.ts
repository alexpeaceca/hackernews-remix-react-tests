import { expect, type Locator, type Page } from '@playwright/test';

export class PageLanding {
  readonly page: Page;
  /**
   * *** Header ***
   */
  readonly headerIcon: Locator;
  readonly headerName: Locator;
  readonly headerNew: Locator;
  readonly headerComments: Locator;
  readonly headerShow: Locator;
  readonly headerAsk: Locator;
  readonly headerJobs: Locator;
  readonly headerSubmit: Locator;
  readonly headerLogin: Locator;
  readonly headerLogout: Locator;

  /**
   * *** Table ***
   */
  readonly tableItem: Locator;
  readonly tableAllRows: Locator;
  readonly tableVoteArrow: Locator;
  readonly tableTitleLine: Locator;
  readonly tableSiteStr: Locator;
  readonly tableSublineScore: Locator;
  readonly tableSublineUser: Locator;
  readonly tableSublineAge: Locator;
  readonly tableSublineHide: Locator;
  readonly tableSublineComments: Locator;
  readonly tableMore: Locator;

  /**
   * *** Footer ***
   */
  readonly footerGuidelines: Locator;
  readonly footerFAQ: Locator;
  readonly footerSupport: Locator;
  readonly footerAPI: Locator;
  readonly footerSecurity: Locator;
  readonly footerLists: Locator;
  readonly footerBookmarklet: Locator;
  readonly footerDMCA: Locator;
  readonly footerApply: Locator;
  readonly footerContact: Locator;
  readonly footerSearchInput: Locator;



  constructor(page: Page) {
    this.page = page;
    /**
     * *** Header ***
     */
    this.headerIcon = page.locator('a').first()
    this.headerName = page.getByRole('link', { name: 'Hacker News', exact: true });
    this.headerNew = page.getByRole('link', { name: 'new', exact: true });
    this.headerComments = page.getByRole('link', { name: 'comments', exact: true });
    this.headerShow = page.getByRole('link', { name: 'show', exact: true });
    this.headerAsk = page.getByRole('link', { name: 'ask', exact: true });
    this.headerJobs = page.getByRole('link', { name: 'jobs', exact: true });
    this.headerSubmit = page.getByRole('link', { name: 'submit', exact: true });
    this.headerLogin = page.getByRole('link', { name: 'login', exact: true });
    this.headerLogout = page.getByRole('link', { name: 'logout', exact: true });

  /**
   * *** Table ***
   */
  this.tableItem = page.locator('a').first()
  this.tableAllRows = page.locator('#hnmain > tbody > tr:nth-child(3) > td > table > tbody > tr');
  this.tableVoteArrow = page.locator('tr:nth-of-type(1) > td.votelinks')
  this.tableTitleLine = page.locator('tr:nth-of-type(1) > td.title > a')
  this.tableSiteStr = page.locator('tr:nth-of-type(1) > td.title > span.sitebit.comhead > a > span.sitestr')
  this.tableSublineScore = page.locator(':nth-child(2) > .subtext > .score')
  this.tableSublineUser = page.locator(':nth-child(2) > .subtext > .hnuser')
  this.tableSublineAge = page.locator(':nth-child(2) > .subtext > .age > a')
  this.tableSublineHide = page.locator('tr:nth-of-type(2) a:nth-of-type(2)')
  this.tableSublineComments = page.locator(':nth-child(2) > .subtext > :nth-child(5)')
  this.tableMore = page.getByRole('link', { name: 'More', exact: true })


   /**
   * *** Footer ***
   */
   this.footerGuidelines = page.getByRole('link', { name: 'Guidelines', exact: true })
   this.footerFAQ = page.getByRole('link', { name: 'FAQ', exact: true })
   this.footerSupport = page.getByRole('link', { name: 'Support', exact: true })
   this.footerAPI = page.getByRole('link', { name: 'API', exact: true })
   this.footerSecurity = page.getByRole('link', { name: 'Security', exact: true })
   this.footerLists = page.getByRole('link', { name: 'Lists', exact: true })
   this.footerBookmarklet = page.getByRole('link', { name: 'Bookmarklet', exact: true })
   this.footerDMCA = page.getByRole('link', { name: 'DMCA', exact: true })
   this.footerApply = page.getByRole('link', { name: 'Apply to YC', exact: true })
   this.footerContact = page.getByRole('link', { name: 'Contact', exact: true })
   this.footerSearchInput = page.getByRole('textbox')


  }

  /**
   * *** Functions ***
   */
  

  /** 
   * Get Item Id
   * @returns {string} item id
   */
  async getItemId(): Promise<string> {
    const linkStr = await this.tableVoteArrow.getByRole('link').getAttribute('href');
    const itemId = linkStr!.replace(/^\D+|\D+$/g, "")
    return itemId;
  }


  // async getStarted() {
  //   await this.getStartedLink.first().click();
  //   await expect(this.gettingStartedHeader).toBeVisible();
  // }

  // async pageObjectModel() {
  //   await this.getStarted();
  //   await this.pomLink.click();
  // }
}