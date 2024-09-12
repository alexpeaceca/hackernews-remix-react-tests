/** 
 * @param {string}  itemRank Rank of item to retrieve id.
 * @returns {string} item id
 */
Cypress.Commands.add('getItemIdByRank', (itemRank) => {
    let id
    cy.get('tbody')
        .find('span')
        .contains(('span[class="rank"]', `${itemRank}` + '.'))
        .parents('tr[class="athing"]')
        .invoke('attr', 'id')
        .then((id) => {
            return id
        })
    return id
});

/** 
 * @param {string}  itemRank Rank of item to retrieve id.
 * @returns {string} item id
 */
Cypress.Commands.add('locateItemByRank', (itemRank) => {
    cy.get('tbody')
        .find('span')
        .contains(('span[class="rank"]', `${itemRank}` + '.'))
        .parents('tr[class="athing"]')
});

/** 
* @param {string}  itemRank Rank of item to retrieve subline.
*/
Cypress.Commands.add('findSubline', (itemRank) => {
    // 
    cy.get('tbody')
        .find('span')
        .contains(('span[class="rank"]', `${itemRank}` + '.'))
        .parents('tr[class="athing"]')
});