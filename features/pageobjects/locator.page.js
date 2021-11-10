const Page = require('./page');

class EpamPage extends Page {

    get menuItemOurWork() {
        return $('[class="top-navigation__item-link"][href="/our-work"]');
    }

    get topNavigationUl() {
        return $('.top-navigation__row')
    }

    get searchBtn() {
        return $('.//*[@id="wrapper"]/div[2]/div[1]/header/div/ul/li[3]/div/button ')
    }

    get searchField() {
        return $('#new_form_search')
    }

    get searchUl() {
        return $('.frequent-searches__items')
    }

    get searchUlLi() {
        return $$('.frequent-searches__item')
    }

    get searchResult() {
        return $('[class="search-results__counter"]')
    }

    get filterByDiv() {
        return $('.detail-pages-filter__top-panel-holder')
    }

    get filterIndustries() {
        return $('[class="detail-pages-filter__select-wrapper"]:first-of-type')
    }

    get filterIndustriesUl() {
        return $('.//div[@class="multi-select-dropdown"]/ul[@class="multi-select-column"]')
    }

    get filterContentTypes() {
        return $('[class="detail-pages-filter__select-wrapper"]:last-of-type')
    }

    get filterContentTypeUl() {
        return $('.//div[@class="multi-select-dropdown"]/ul[@class="multi-select-column"]')
    }

    get filterContentTypeUlll() {
        return $('//span[contains(text(), \'Accelerators\')]')
    }

    get filterDisplayFirst() {
        return $('.//ul[@class="selected-items"]/li[@class="filter-tag"][1]')
    }

    get filterDisplaySecond() {
        return $('.//ul[@class="selected-items"]/li[@class="filter-tag"][2]')
    }
    get navbar (){ return $('.header-ui')}


  async   ff (index) {
      await  this.filterContentTypeUl.$$(`span`)[index].click();
    }

    async   menuItem (index) {
         return  this.topNavigationUl.$$('.top-navigation__item-link')[index].moveTo();
    }
    async   menuItemHover (num) {
         return await this.topNavigationUl.$$('.top-navigation__item-link')[num].getCSSProperty('color');

    }


}

module.exports = new EpamPage();
