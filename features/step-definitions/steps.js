const { Given, When, Then } = require('@wdio/cucumber-framework');

const EpamPage = require('../pageobjects/locator.page');


Given(/^I open epam.com$/, async () => {
    await browser.maximizeWindow();
    await EpamPage.open();
});

When(/^Page title should be 'EPAM | Enterprise Software Development, Design & Consulting'$/,  () => {
    expect(browser).toHaveTitle('EPAM | Enterprise Software Development, Design & Consulting')
});

Then(/^I wait 1 seconds$/, async () => {
    await browser.pause(1000);
});
          ////////////
 // Given(/^I move mouse to navigation menu "([^"]*)" items$/,async (number)=>{
 //      await EpamPage.menuItem(number);
 //
 // });

// Then(/^Each menu item "([^"]*)" should change color to "([^"]*)"$/, async (number,color)=>{
//     await EpamPage.menuItem(number);
//     await browser.pause(3000);
//
//     await expect(await EpamPage.menuItemHover(number)).toEqual(color);
// });

          /////////////
Given(/^I click on the Search icon$/,async ()=>{
    await EpamPage.searchBtn.click();
    await browser.pause(2000);

});
Then (/^Should open search field$/,async ()=>{
    await expect(EpamPage.searchField).toBeExisting();
});
When (/^I set the searching word and click search icon$/,async ()=>{
    await EpamPage.searchUl.$$('li')[5].click();
   // await EpamPage.searchUl.searchUlLi[5].click();
    await browser.pause(1000);
    await browser.keys('Enter');

});
Then (/^Should see search results$/,async ()=>{
    await expect(EpamPage.searchResult).toHaveTextContaining('AUTOMATION')
});
          ///////////
Given(/^I go to 'Our Work' page$/, async ()=>{
    await browser.pause(1000)
    await EpamPage.menuItemOurWork.click();
});
Then (/^Page title should be 'Explore our Work | EPAM Customer Stories, Brochures & Accelerators'$/,async ()=>{
    await expect(browser).toHaveTitle('Explore our Work | EPAM Customer Stories, Brochures & Accelerators')
});
When (/^I fill 'Filter By' fields$/, async ()=>{
     await  EpamPage.filterByDiv.scrollIntoView();
    await browser.pause(1000)
    await EpamPage.filterIndustries.click();
    await browser.pause(2000)
    await EpamPage.ffContent(2)
     await EpamPage.filterIndustries.click();
    await browser.pause(2000)

     await  EpamPage.filterContentTypes.click();
     await browser.pause(3000)
    await EpamPage.ff(2);
    await  EpamPage.filterContentTypes.click();
    await browser.pause(2000);

});
Then(/^Should see filters$/,async ()=>{
    await  expect(EpamPage.filterDisplayFirst).toHaveTextContaining("BUSINESS INFORMATION SERVICES");
    await  expect(EpamPage.filterDisplaySecond).toHaveTextContaining("BROCHURES");
    await browser.pause(1000)
})



