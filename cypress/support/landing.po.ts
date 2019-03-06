import { BaseComponent } from './base.component';

export class LandingPo extends BaseComponent {
  pageUrl = '/';
  documentationUrl = '/documentation';

  mainClass = '.main';
  logoAtHeader = '.logo';
  logoAtContent = '.content-logo';
  headerSelector = '.header';
  stackOverBtn = '[alt="stackoverflow"]';
  gitHbBtn = '[alt="ngx on github"]';
  slackNgxBtn = '[alt="ngx on slack"]';
  infoButtons = '.header-list';
  sloganBs = '.slogan';
  descriptionBs = '.descr';
  versionBs = '.version';
  advantagesBs = '.advantages';
  navBtn = '.btn';

  stackoverflowUrl = 'https://stackoverflow.com/questions/tagged/ngx-bootstrap';
  githubUrl = 'https://github.com/valor-software/ngx-bootstrap';
  slackUrl = 'https://join.slack.com/t/ngx-home/shared_invite/enQtNTExMTY5MzcwMTM0LWQ5M2Y4OWM0OGJjNmZiOGYyNjFlZTdlOGI1YjcxYWQ2ODhiOTY4NzhiODgwMTIzNDczODIyNWNmM2RlYWRhNTg';

  teamUrl = 'https://github.com/valor-software';
  contributorsUrl = 'https://github.com/valor-software/ngx-bootstrap/graphs/contributors';
  mitLicenseUrl = 'https://github.com/valor-software/ngx-bootstrap/blob/development/LICENSE';
  crCommonsUrl = 'https://creativecommons.org/licenses/by/3.0/';
  originalBsUrl = 'https://getbootstrap.com/';

  isSearchResultCorrect(descendantsQuantity: number, searchResult: string) {
    cy.get('.sidebar-list').eq(1)
      .should('have.descendants', 'li').invoke('text')
      .should('contain', searchResult);
  }
}
