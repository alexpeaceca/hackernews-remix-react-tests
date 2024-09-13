import { faker } from "@faker-js/faker"
const baseUrl = Cypress.config('baseUrl')

describe('User - Anonymous - Page - Landing', { tags: ['user-anon', 'page-landing'] }, () => {

    /**
     * *** Header ***
     */

    it('Header - Icon - redirect', { tags: 'page-landing-001' }, () => {
        /** Given */
        cy.visit('/')
        /** When */
        cy.get('a > img').click()
        /** Then */
        cy.url().should('include', baseUrl)
    })

    it('Header - Name - redirect', { tags: 'page-landing-002' }, () => {
        /** Given */
        cy.visit('/')
        /** When */
        cy.contains('Hacker News').click()
        /** Then */
        cy.url().should('include', baseUrl)
    })

    it('Header - New - redirect', { tags: 'page-landing-003' }, () => {
        /** Given */
        cy.visit('/')
        /** When */
        cy.contains('new').click()
        /** Then */
        cy.url().should('include', baseUrl + '/newest')
    })

    it('Header - Comments - redirect', { tags: 'page-landing-004' }, () => {
        /** Given */
        cy.visit('/')
        /** When */
        cy.contains('comments').click()
        /** Then */
        cy.url().should('include', baseUrl + '/newcomments')
    })

    it('Header - Show - redirect', { tags: 'page-landing-005' }, () => {
        /** Given */
        cy.visit('/')
        /** When */
        cy.contains('show').click()
        /** Then */
        cy.url().should('include', baseUrl + '/show')
    })

    it('Header - Ask - redirect', { tags: 'page-landing-006' }, () => {
        /** Given */
        cy.visit('/')
        /** When */
        cy.contains('ask').click()
        /** Then */
        cy.url().should('include', baseUrl + '/ask')
    })

    it('Header - Jobs - redirect', { tags: 'page-landing-007' }, () => {
        /** Given */
        cy.visit('/')
        /** When */
        cy.contains('jobs').click()
        /** Then */
        cy.url().should('include', baseUrl + '/jobs')
    })

    it('Header - Submit - redirect', { tags: 'page-landing-008' }, () => {
        /** Given */
        cy.visit('/')
        /** When */
        cy.contains('submit').click()
        /** Then */
        cy.url().should('include', baseUrl + '/login?how=submit&goto=submit')
    })

    it('Header - Login - redirect', { tags: 'page-landing-009' }, () => {
        /** Given */
        cy.visit('/')
        /** When */
        cy.contains('login').click()
        /** Then */
        cy.url().should('include', baseUrl + '/login?goto=/')
    })

    /**
     * *** Table ***
     */
    it('Table - Result - Title Line - index', { tags: 'page-landing-101' }, () => {
        /** Given */
        cy.visit('/')
        /** When */
        cy.get('tbody')
            .find('span')
            .contains(('span[class="rank"]', '1.'))
            .parents('tr[class="athing"]')
            .invoke('index')
            /** Then */
            .then((i) => {
                expect(i).to.eql(0)
            });
        cy.get('tbody')
            .find('span')
            .contains(('span[class="rank"]', '30.'))
            .parents('tr[class="athing"]')
            .invoke('index')
            /** Then */
            .then((i) => {
                expect(i).to.eql(87)
            })
    })

    it('Table - Result - Title Line - vote arrow - redirect', { tags: 'page-landing-102' }, () => {
        /** Given */
        cy.visit('/')
        cy.locateItemByRank('1')
            .find('div[class="votearrow"]')
            /** When */
            .click()
        /** Then */
        cy.url().should('include', baseUrl + '/login?how=upgoto=/')
    })

    it('Table - Result - Title Line - title - redirect', { tags: 'page-landing-103' }, () => {
        /** Given */
        cy.visit('/')
        /** When */
        cy.get(':nth-child(1) > :nth-child(3) > .storylink')
            /** Then */
            .then((link) => {
                cy.request('HEAD', link.prop('href'))
                    .its('status')
                    .should('eq', 200);
            });
    })

    it('Table - Result - Title Line - site - redirect', { tags: 'page-landing-104' }, () => {
        /** Given */
        cy.visit('/')
        /** When */
        cy.locateItemByRank('1')
            .find('span[class="sitestr"]')
            .click()
            /** Then */
            .then(($span) => {
                const text = $span.text()
                cy.url().should('include', baseUrl + '/from?site=' + text)
            })
    })

    it('Table - Result - Sub-line - score', { tags: 'page-landing-105' }, () => {
        /** Given */
        cy.visit('/')
        /** When */
        cy.get(':nth-child(2) > .subtext > .score')
            .then(($span) => {
                let scoreStr = $span.text().split(" ")
                /** Then */
                expect(Number(scoreStr[0])).to.be.a('number')
                expect(scoreStr[1]).to.eql('points')
            })
    })

    it('Table - Result - Sub-line - user - redirect', { tags: 'page-landing-106' }, () => {
        /** Given */
        cy.visit('/')
        /** When */
        cy.get(':nth-child(2) > .subtext > .hnuser')
            .click()
            .then(($a) => {
                //Store userId
                const userId = $a.text()
                cy.url().should('include', baseUrl + '/user?id=' + userId)
            })
    })


    // it('Table - Result - Sub-line - age', { tags: 'page-landing-107' }, () => {})
    // [tech-debt] use library to assert timestamp following hour,hours,day,days pattern


    it('Table - Result - Sub-line - age - redirect', { tags: 'page-landing-108' }, () => {
        /** Given */
        cy.visit('/')
        cy.get(':nth-child(2) > .subtext > .age > a')
            /** When */
            .click()
            .invoke('attr', 'href')
            .then((href) => {
                //store href to capture itemId
                const itemId = href.split("id=")
                /** Then */
                expect(Number(itemId[1])).to.be.a('number')
                cy.url().should('include', baseUrl + '/item?id=' + itemId[1])
            })
    })

    it('Table - Result - Sub-line - hide - redirect', { tags: 'page-landing-109' }, () => {
        /** Given */
        cy.visit('/')
        /** When */
        cy.get(':nth-child(2) > .subtext')
            .find('a')
            .contains('hide')
            /** When */
            .click()
            .then(() => {
                cy.url().should('include', baseUrl + '/login?how=up&goto=news')
            })
    })

    it('Table - Result - Sub-line - comments', { tags: 'page-landing-110' }, () => {
       /** Given */
       cy.visit('/')
       /** When */
       cy.get(':nth-child(2) > .subtext > :nth-child(5)')
           .then(($span) => {
               let scoreStr = $span.text().split(" ")
               /** Then */
               expect(Number(scoreStr[0])).to.be.a('number')
               expect(scoreStr[1]).to.eql('comments')
           })
    })

    it('Table - Result - Sub-line - comments - redirect', { tags: 'page-landing-111' }, () => {
        /** Given */
        cy.visit('/')
        cy.get(':nth-child(2) > .subtext > :nth-child(5)')
            /** When */
            .click()
            .invoke('attr', 'href')
            .then((href) => {
                //store href to capture itemId
                const itemId = href.split("id=")
                /** Then */
                expect(Number(itemId[1])).to.be.a('number')
                cy.url().should('include', baseUrl + '/item?id=' + itemId[1])
            })
    })

    it('Table - More', { tags: 'page-landing-112' }, () => {
        /** Given */
        cy.visit('/')
        cy.get('tbody')
            .find('td[class="title"]')
            .contains(('More'))
            /** When */
            .click()
        /** Then */
        cy.url().should('include', baseUrl + '/?p=2')
    })

    /**
     * *** Footer ***
     */

    it('Footer - Guidlines - redirect', { tags: 'page-landing-201' }, () => {
        /** Given */
        cy.visit('/')
        cy.get('tbody')
            .find('span[class="yclinks"]')
            .find('a')
            .contains(('Guidelines'))
            /** When */
            .click()
        /** Then */
        cy.url().should('include', baseUrl + '/newsguidelines')
    })

    it('Footer - FAQ - redirect', { tags: 'page-landing-202' }, () => {
        /** Given */
        cy.visit('/')
        cy.get('tbody')
            .find('span[class="yclinks"]')
            .find('a')
            .contains(('FAQ'))
            /** When */
            .click()
        /** Then */
        cy.url().should('include', baseUrl + '/newsfaq')
    })

    // it('Footer - Support - redirect', { tags: 'page-landing-203' }, () => {})
    // [tech-debt] Capture and validate mailto address

    it('Footer - API - redirect', { tags: 'page-landing-204' }, () => {
        /** Given */
        cy.visit('/')
        cy.get('tbody')
            .find('span[class="yclinks"]')
            .find('a')
            .contains(('API'))
            /** When */
            .click()
        /** Then */
        cy.origin('https://github.com', () => {
            cy.url().should('include', 'https://github.com/HackerNews/API')
        })
    })

    it('Footer - Security - redirect', { tags: 'page-landing-205' }, () => {
        /** Given */
        cy.visit('/')
        cy.get('tbody')
            .find('span[class="yclinks"]')
            .find('a')
            .contains(('Security'))
            /** When */
            .click()
        /** Then */
        cy.url().should('include', baseUrl + '/security')
    })

    it('Footer - Lists - redirect', { tags: 'page-landing-206' }, () => {
        /** Given */
        cy.visit('/')
        cy.get('tbody')
            .find('span[class="yclinks"]')
            .find('a')
            .contains(('Lists'))
            /** When */
            .click()
        /** Then */
        cy.url().should('include', baseUrl + '/lists')
    })

    it('Footer - Bookmarklet - redirect', { tags: 'page-landing-207' }, () => {
        /** Given */
        cy.visit('/')
        cy.get('tbody')
            .find('span[class="yclinks"]')
            .find('a')
            .contains(('Bookmarklet'))
            /** When */
            .click()
        /** Then */
        cy.url().should('include', baseUrl + '/bookmarklet')
    })

    it('Footer - DMCA - redirect', { tags: 'page-landing-208' }, () => {
        /** Given */
        cy.visit('/')
        cy.get('tbody')
            .find('span[class="yclinks"]')
            .find('a')
            .contains(('DMCA'))
            /** When */
            .click()
        /** Then */
        cy.url().should('include', baseUrl + '/dmca')
    })

    it('Footer - Apply to YC - redirect', { tags: 'page-landing-209' }, () => {
        /** Given */
        cy.visit('/')
        cy.get('tbody')
            .find('span[class="yclinks"]')
            .find('a')
            .contains(('Apply to YC'))
            /** When */
            .click()
        /** Then */
        cy.origin('https://www.ycombinator.com', () => {
            cy.get('h1').should('contain', 'Apply to Y Combinator')
            cy.url().should('include', '/apply')
        })
    })

    // it('Footer - Contact - redirect', { tags: 'page-landing-210' }, () => {})
    // [tech-debt] capture mailto: address and assert on email

    it('Footer - Search - input', { tags: 'page-landing-211' }, () => {
        let searchTerm = faker.word.words({ count: { min: 1, max: 3 } })
        /** Given */
        cy.visit('/')
        cy.get('tbody')
            .find('form[action="//hn.algolia.com/"]')
            .contains(('Search:'))
            .find('input')
            .type(searchTerm)
            /** When */
            .type('{enter}')
        /** Then */
        cy.origin('https://hn.algolia.com', { args: { searchTerm } }, (searchTerm) => {
            let searchTermUrlEncode = searchTerm.searchTerm.replace(new RegExp(" ", "g"), '+')
            cy.url().should('include', 'https://hn.algolia.com/?q=' + searchTermUrlEncode)
        })
    })
})