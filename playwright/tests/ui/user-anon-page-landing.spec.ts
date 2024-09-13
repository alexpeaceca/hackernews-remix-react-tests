import { faker } from "@faker-js/faker"
import { PageLanding } from '../page-objects/page-landing';
// @ts-check
const { test, expect } = require('@playwright/test')


/**
 * *** Pre-Conditions ***
 */
test.beforeEach(async ({ page }) => {
    const pageLanding = new PageLanding(page);
    await page.goto('/');
    await expect(page).toHaveTitle(/Hacker News Clone/);
});
/**
 * *** Clean-up 🧽✨ ***
 */
// test.afterEach(async ({ page }) => {
// });

/**
 * *** Landing Page ***
 */
test.describe('User - Anon - Page - Landing', {
    tag: ['@user-anon', '@page-landing']
}, () => {
    test.describe('Header', () => {
        /**
         * *** Header ***
         */
        test('Header - Icon - redirect', { tag: ['@page-landing-001'] },
            async ({ page }) => {
                /** Given */
                const pageLanding = new PageLanding(page);
                /** When */
                await pageLanding.headerIcon.click();
                /** Then */
                await page.waitForURL('/', 'domcontentloaded')
            });

        test('Header - Name - redirect', { tag: ['@page-landing-002'] },
            async ({ page }) => {
                /** Given */
                const pageLanding = new PageLanding(page);
                /** When */
                await pageLanding.headerName.click();
                /** Then */
                await page.waitForURL('/', 'domcontentloaded')
            });

        test('Header - New - redirect', { tag: ['@page-landing-003'] },
            async ({ page }) => {
                /** Given */
                const pageLanding = new PageLanding(page);
                /** When */
                await pageLanding.headerNew.click();
                /** Then */
                await page.waitForURL('/newest', 'domcontentloaded')
            });

        test('Header - Comments - redirect', { tag: ['@page-landing-004'] },
            async ({ page }) => {
                /** Given */
                const pageLanding = new PageLanding(page);
                /** When */
                await pageLanding.headerComments.click();
                /** Then */
                await page.waitForURL('/newcomments', 'domcontentloaded')
            });

        test('Header - Show - redirect', { tag: ['@page-landing-005'] },
            async ({ page }) => {
                /** Given */
                const pageLanding = new PageLanding(page);
                /** When */
                await pageLanding.headerShow.click();
                /** Then */
                await page.waitForURL('/show', 'domcontentloaded')
            });


        test('Header - Ask - redirect', { tag: ['@page-landing-006'] },
            async ({ page }) => {
                /** Given */
                const pageLanding = new PageLanding(page);
                /** When */
                await pageLanding.headerAsk.click();
                /** Then */
                await page.waitForURL('/ask', 'domcontentloaded')
            });

        test('Header - Jobs - redirect', { tag: ['@page-landing-007'] },
            async ({ page }) => {
                /** Given */
                const pageLanding = new PageLanding(page);
                /** When */
                await pageLanding.headerJobs.click();
                /** Then */
                await page.waitForURL('/jobs', 'domcontentloaded')
            });

        test('Header - Submit - redirect', { tag: ['@page-landing-008'] },
            async ({ page }) => {
                /** Given */
                const pageLanding = new PageLanding(page);
                /** When */
                await pageLanding.headerSubmit.click();
                /** Then */
                await page.waitForURL('/login?how=submit&goto=submit', 'domcontentloaded')
            });

        test('Header - Login - redirect', { tag: ['@page-landing-009'] },
            async ({ page }) => {
                /** Given */
                const pageLanding = new PageLanding(page);
                /** When */
                await pageLanding.headerLogin.click();
                /** Then */
                await page.waitForURL('/login?goto=/', 'domcontentloaded')
            });
    })

    test.describe('Table', () => {
        /**
         * *** Table ***
         */

        test('Table - Result - Title Line - index', { tag: ['@page-landing-101'] },
            async ({ page }) => {
                /** Given */
                const pageLanding = new PageLanding(page);
                /** When */
                /** Then */
                await expect(pageLanding.tableAllRows.nth(0)).toContainText('1.')
                await expect(pageLanding.tableAllRows.nth(87)).toContainText('30.')
            });

        test('Table - Result - Title Line - vote arrow - redirect', { tag: ['@page-landing-102'] },
            async ({ page }) => {
                /** Given */
                const pageLanding = new PageLanding(page);
                /** When */
                await pageLanding.tableVoteArrow.click();
                /** Then */
                await page.waitForURL('login?how=upgoto=/', 'domcontentloaded')
            });

        test('Table - Result - Title Line - title - redirect', { tag: ['@page-landing-103'] },
            async ({ page }) => {
                /** Given */
                const pageLanding = new PageLanding(page);
                /** When */
                await pageLanding.tableTitleLine.click();
                /** Then */
                await page.waitForResponse(response =>
                    response.status() === 200
                );
            });

        test('Table - Result - Title Line - site - redirect', { tag: ['@page-landing-104'] },
            async ({ page }) => {
                /** Given */
                const pageLanding = new PageLanding(page);
                /** When */
                const sitestr = await pageLanding.tableSiteStr.textContent()
                await pageLanding.tableSiteStr.click()
                /** Then */
                await page.waitForURL('from?site=' + sitestr, 'domcontentloaded')
            });

        test('Table - Result - Sub-line - score', { tag: ['@page-landing-105'] },
            async ({ page }) => {
                /** Given */
                const pageLanding = new PageLanding(page);
                /** When */
                /** Then */
                await expect(pageLanding.tableSublineScore).toContainText(/\d/)
                await expect(pageLanding.tableSublineScore).toContainText(' points')
            });

        test('Table - Result - Sub-line - user - redirect', { tag: ['@page-landing-106'] },
            async ({ page }) => {
                /** Given */
                const pageLanding = new PageLanding(page);
                /** When */
                const userStr = await pageLanding.tableSublineUser.textContent()
                await pageLanding.tableSublineUser.click()
                /** Then */
                await page.waitForURL('/user?id=' + userStr, 'domcontentloaded')
            });

        // test('Table - Result - Sub-line - age', { tag: ['@page-landing-107'] },
        //     async ({ page }) => {
        //         [tech-debt] use library to assert timestamp following hour,hours,day,days pattern
        //     });

        test('Table - Result - Sub-line - age - redirect', { tag: ['@page-landing-108'] },
            async ({ page }) => {
                /** Given */
                const pageLanding = new PageLanding(page);
                /** When */
                const itemId = await pageLanding.getItemId()
                await pageLanding.tableSublineAge.click()
                /** Then */
                await page.waitForURL('/item?id=' + itemId, 'domcontentloaded')
            });

        test('Table - Result - Sub-line - hide - redirect', { tag: ['@page-landing-109'] },
            async ({ page }) => {
                /** Given */
                const pageLanding = new PageLanding(page);
                /** When */
                await pageLanding.tableSublineHide.click()
                /** Then */
                await page.waitForURL('/login?how=up&goto=news', 'domcontentloaded')
            });

        test('Table - Result - Sub-line - comments', { tag: ['@page-landing-110'] },
            async ({ page }) => {
                /** Given */
                const pageLanding = new PageLanding(page);
                /** When */
                /** Then */
                await expect(pageLanding.tableSublineComments).toContainText(/\d/ || 'discuss')
                await expect(pageLanding.tableSublineComments).toContainText(' comment' || ' comments' || 'discuss')
            });

        test('Table - Result - Sub-line - comments - redirect', { tag: ['@page-landing-111'] },
            async ({ page }) => {
                /** Given */
                const pageLanding = new PageLanding(page);
                /** When */
                const itemId = await pageLanding.getItemId()
                await pageLanding.tableSublineComments.click()
                /** Then */
                await page.waitForURL('/item?id=' + itemId, 'domcontentloaded')
            });

        test('Table - More', { tag: ['@page-landing-112'] },
            async ({ page }) => {
                /** Given */
                const pageLanding = new PageLanding(page);
                /** When */
                await pageLanding.tableMore.click()
                /** Then */
                await page.waitForURL('/?p=2', 'domcontentloaded')
            });


    })

    test.describe('Footer', () => {
        /**
         * *** Footer ***
         */

        test('Footer - Guidlines - redirect', { tag: ['@page-landing-201'] },
            async ({ page }) => {
                /** Given */
                const pageLanding = new PageLanding(page);
                /** When */
                await pageLanding.footerGuidelines.click();
                /** Then */
                await page.waitForURL('/newsguidelines', 'domcontentloaded')
            });

        test('Footer - FAQ - redirect', { tag: ['@page-landing-202'] },
            async ({ page }) => {
                /** Given */
                const pageLanding = new PageLanding(page);
                /** When */
                await pageLanding.footerFAQ.click();
                /** Then */
                await page.waitForURL('/newsfaq', 'domcontentloaded')
            });

        // test('Footer - Support - redirect', { tag: ['@page-landing-203'] },
        //     async ({ page }) => {
        //         [tech-debt] Capture and validate mailto address
        //     });

        test('Footer - API - redirect', { tag: ['@page-landing-204'] },
            async ({ page }) => {
                /** Given */
                const pageLanding = new PageLanding(page);
                /** When */
                await pageLanding.footerAPI.click();
                /** Then */
                await page.waitForURL('https://github.com/HackerNews/API', 'domcontentloaded')
            });

        test('Footer - Security - redirect', { tag: ['@page-landing-205'] },
            async ({ page }) => {
                /** Given */
                const pageLanding = new PageLanding(page);
                /** When */
                await pageLanding.footerSecurity.click();
                /** Then */
                await page.waitForURL('/security', 'domcontentloaded')
            });

        test('Footer - Lists - redirect', { tag: ['@page-landing-206'] },
            async ({ page }) => {
                /** Given */
                const pageLanding = new PageLanding(page);
                /** When */
                await pageLanding.footerLists.click();
                /** Then */
                await page.waitForURL('/lists', 'domcontentloaded')
            });

        test('Footer - Bookmarklet - redirect', { tag: ['@page-landing-207'] },
            async ({ page }) => {
                /** Given */
                const pageLanding = new PageLanding(page);
                /** When */
                await pageLanding.footerBookmarklet.click();
                /** Then */
                await page.waitForURL('/bookmarklet', 'domcontentloaded')
            });

        test('Footer - DMCA - redirect', { tag: ['@page-landing-208'] },
            async ({ page }) => {
                /** Given */
                const pageLanding = new PageLanding(page);
                /** When */
                await pageLanding.footerDMCA.click();
                /** Then */
                await page.waitForURL('/dmca', 'domcontentloaded')
            });

        test('Footer - Apply - redirect', { tag: ['@page-landing-209'] },
            async ({ page }) => {
                /** Given */
                const pageLanding = new PageLanding(page);
                /** When */
                await pageLanding.footerApply.click();
                /** Then */
                await page.waitForURL('https://www.ycombinator.com/apply/', 'domcontentloaded')
            });

        // test('Footer - Contact - redirect', { tag: ['@page-landing-210'] },
        //     async ({ page }) => {
        //         [tech-debt] capture mailto: address and assert on email
        //     });

        test('Footer - Search - input', { tag: ['@page-landing-211'] },
            async ({ page }) => {
                /** Given */
                const pageLanding = new PageLanding(page);
                let searchTerm = faker.word.words({ count: { min: 1, max: 3 } })
                /** When */
                await pageLanding.footerSearchInput.click();
                await pageLanding.footerSearchInput.fill(searchTerm);
                await pageLanding.footerSearchInput.press('Enter');
                let searchTermUrlEncode = searchTerm.replace(new RegExp(" ", "g"), '+')
                /** Then */
                await page.waitForURL('https://hn.algolia.com/?q=' + searchTermUrlEncode, 'domcontentloaded')
            });



    })
})