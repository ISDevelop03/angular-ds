'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">mybusiness documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="todo.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>TODO
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/DesignSystemModule.html" data-type="entity-link" >DesignSystemModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-DesignSystemModule-72b41327f7f9c70494d8fa1b1ec4fdddb1952e8d0cb5527aeee869bd0329e8d959e90933bba2561e732b7c496bb840f3d292d10fbb9924542c1ff927067cf653"' : 'data-bs-target="#xs-components-links-module-DesignSystemModule-72b41327f7f9c70494d8fa1b1ec4fdddb1952e8d0cb5527aeee869bd0329e8d959e90933bba2561e732b7c496bb840f3d292d10fbb9924542c1ff927067cf653"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DesignSystemModule-72b41327f7f9c70494d8fa1b1ec4fdddb1952e8d0cb5527aeee869bd0329e8d959e90933bba2561e732b7c496bb840f3d292d10fbb9924542c1ff927067cf653"' :
                                            'id="xs-components-links-module-DesignSystemModule-72b41327f7f9c70494d8fa1b1ec4fdddb1952e8d0cb5527aeee869bd0329e8d959e90933bba2561e732b7c496bb840f3d292d10fbb9924542c1ff927067cf653"' }>
                                            <li class="link">
                                                <a href="components/AccordionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccordionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AccountHoldingCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountHoldingCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AccountHoldingSelectedCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountHoldingSelectedCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AccountsSelectComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountsSelectComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AvatarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AvatarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BadgeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BadgeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CallToActionIconsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CallToActionIconsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CurrencyConverterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CurrencyConverterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DatePickerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatePickerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DsAccountFilialHoldingCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DsAccountFilialHoldingCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DsAccountGridCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DsAccountGridCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DsAccountGridHoldingCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DsAccountGridHoldingCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DsAccountSelectedCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DsAccountSelectedCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DsAccountSliderCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DsAccountSliderCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DsActionsLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DsActionsLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DsBalanceFormatterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DsBalanceFormatterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DsBreadcrumbComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DsBreadcrumbComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DsCheckboxComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DsCheckboxComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DsDropdownComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DsDropdownComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DsHoldingCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DsHoldingCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DsInputComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DsInputComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DsPaginationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DsPaginationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DsPopupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DsPopupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DsRadioComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DsRadioComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DsRangeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DsRangeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DsSelectComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DsSelectComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DsShortcutsCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DsShortcutsCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DsSidebarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DsSidebarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DsTabsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DsTabsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DsTextComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DsTextComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DsTextareaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DsTextareaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DsThemeToggleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DsThemeToggleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DsToggleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DsToggleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmptyCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmptyCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FilialCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilialCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InboxCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InboxCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InvoiceCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InvoiceCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotificationCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NumbersCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NumbersCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PaymentCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaymentCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PaymentDetailsCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaymentDetailsCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PortfolioItemCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PortfolioItemCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PortfolioSelectCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PortfolioSelectCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PortfolioVisionCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PortfolioVisionCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileDropdownComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileDropdownComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProgressComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProgressComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SheetCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SheetCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SheetLatestOpsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SheetLatestOpsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StepsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StepsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TickerCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TickerCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TodoCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TodoCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TodoTabComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TodoTabComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UploadFileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UploadFileComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/DesignSystemComponent.html" data-type="entity-link" >DesignSystemComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/DesignSystemService.html" data-type="entity-link" >DesignSystemService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AccordionItem.html" data-type="entity-link" >AccordionItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Buttons.html" data-type="entity-link" >Buttons</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChartProps.html" data-type="entity-link" >ChartProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ColumnDef.html" data-type="entity-link" >ColumnDef</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ControlConfig.html" data-type="entity-link" >ControlConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CurrencieProps.html" data-type="entity-link" >CurrencieProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DropdownItem.html" data-type="entity-link" >DropdownItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBottomMenus.html" data-type="entity-link" >IBottomMenus</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICallToActionIcon.html" data-type="entity-link" >ICallToActionIcon</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICallToActionIcons.html" data-type="entity-link" >ICallToActionIcons</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMainMenu.html" data-type="entity-link" >IMainMenu</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMenuItem.html" data-type="entity-link" >IMenuItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMenuItemSection.html" data-type="entity-link" >IMenuItemSection</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMenuList.html" data-type="entity-link" >IMenuList</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMenuListItem.html" data-type="entity-link" >IMenuListItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMenus.html" data-type="entity-link" >IMenus</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InvoiceActions.html" data-type="entity-link" >InvoiceActions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISelectItem.html" data-type="entity-link" >ISelectItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISidebar.html" data-type="entity-link" >ISidebar</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITab.html" data-type="entity-link" >ITab</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Item.html" data-type="entity-link" >Item</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NextPrevButtons.html" data-type="entity-link" >NextPrevButtons</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OmittedSelectItem.html" data-type="entity-link" >OmittedSelectItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Page.html" data-type="entity-link" >Page</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PaginationVariant.html" data-type="entity-link" >PaginationVariant</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PaginationVariants.html" data-type="entity-link" >PaginationVariants</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PerPage.html" data-type="entity-link" >PerPage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PrevNextProps.html" data-type="entity-link" >PrevNextProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SelectItem.html" data-type="entity-link" >SelectItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SelectItem-1.html" data-type="entity-link" >SelectItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Shortcut.html" data-type="entity-link" >Shortcut</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StepsTheme.html" data-type="entity-link" >StepsTheme</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TableTheme.html" data-type="entity-link" >TableTheme</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UploadFileTheme.html" data-type="entity-link" >UploadFileTheme</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});