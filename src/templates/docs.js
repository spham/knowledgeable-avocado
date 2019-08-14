import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import DocsMenu from '../components/DocsMenu';
import {htmlToReact, getPages, Link, safePrefix} from '../utils';

export default class Docs extends React.Component {
    render() {
        let root_page_path = _.get(this.props, 'pageContext.site.data.doc_sections.root_folder') + 'index.md';
        let current_page_path = '/' + _.get(this.props, 'pageContext.relativePath');
        let child_pages_path = '/' + _.get(this.props, 'pageContext.relativeDir');
        let child_pages = _.orderBy(_.filter(getPages(this.props.pageContext.pages, child_pages_path), item => _.get(item, 'base') != 'index.md'), 'frontmatter.weight');
        let child_count = _.size(child_pages);
        let has_children = (child_count > 0) ? true : false;
        return (
            <Layout {...this.props}>
              <div class="outer">
                <div class="inner">
                  <div class="docs-content">
                    <DocsMenu {...this.props} page={this.props.pageContext} site={this.props.pageContext.site} />
                    <article class="post type-docs">
                      <div class="post-inside">
                        <header class="post-header">
                          <h1 class="post-title line-left">{_.get(this.props, 'pageContext.frontmatter.title')}</h1>
                        </header>
                        <div class="post-content">
                          {htmlToReact(_.get(this.props, 'pageContext.html'))}
                          {(root_page_path !== current_page_path) && <React.Fragment>
                            {has_children && 
                              <ul class="docs-section-items">
                                {_.map(child_pages, (child_page, child_page_idx) => (
                                <li key={child_page_idx} class="docs-section-item"><Link to={safePrefix(_.get(child_page, 'url'))} class="docs-item-link">{_.get(child_page, 'frontmatter.title')}<span class="icon-angle-right" aria-hidden="true" /></Link></li>
                                ))}
                              </ul>
                            }
                          </React.Fragment>}
                        </div>
                      </div>
                    </article>
                    <nav id="page-nav" class="page-nav">
                      <div id="page-nav-inside" class="page-nav-inside sticky">
                        <h2 class="page-nav-title">Jump to Section</h2>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </Layout>
        );
    }
}
