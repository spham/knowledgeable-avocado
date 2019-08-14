import React from 'react';
import _ from 'lodash';

import {Link, safePrefix} from '../utils';
import Menu from './Menu';

export default class Header extends React.Component {
    render() {
        let menu = _.get(this.props, 'pageContext.menus.main');
        return (
            <header id="masthead" class="site-header outer">
              <div class="inner">
                <div class="site-header-inside">
                  <div class="site-branding">
                    {_.get(this.props, 'pageContext.site.data.header.logo_img') && 
                    <p class="site-logo">
                      <Link to={safePrefix(_.get(this.props, 'pageContext.site.data.header.url') || '/')}>
                        <img src={safePrefix(_.get(this.props, 'pageContext.site.data.header.logo_img'))} alt="Logo" />
                      </Link>
                    </p>
                    }
                    {(_.get(this.props, 'pageContext.frontmatter.template') === 'home') ? 
                    <h1 class="site-title"><Link to={safePrefix(_.get(this.props, 'pageContext.site.data.header.url') || '/')}>{_.get(this.props, 'pageContext.site.data.header.title')}</Link></h1>
                     : 
                    <p class="site-title"><Link to={safePrefix(_.get(this.props, 'pageContext.site.data.header.url') || '/')}>{_.get(this.props, 'pageContext.site.data.header.title')}</Link></p>
                    }
                  </div>
                  {(_.get(this.props, 'pageContext.menus.main') && _.get(this.props, 'pageContext.site.data.header.has_nav')) && <React.Fragment>
                  <nav id="main-navigation" class="site-navigation" aria-label="Main Navigation">
                    <div class="site-nav-inside">
                      <button id="menu-close" class="menu-toggle"><span class="screen-reader-text">Open Menu</span><span class="icon-close" aria-hidden="true" /></button>
                      <Menu {...this.props} menu={menu} menu_class={'menu'} page={this.props.pageContext} />
                    </div>
                  </nav>
                  <button id="menu-open" class="menu-toggle"><span class="screen-reader-text">Close Menu</span><span class="icon-menu" aria-hidden="true" /></button>
                  </React.Fragment>}
                </div>
              </div>
            </header>
        );
    }
}
