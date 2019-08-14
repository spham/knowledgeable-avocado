import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import {Layout} from '../components/index';
import {toStyleObj, safePrefix, getPages, Link} from '../utils';

export default class Blog extends React.Component {
    render() {
        let display_posts = _.orderBy(getPages(this.props.pageContext.pages, '/posts'), 'frontmatter.date', 'desc');
        return (
            <Layout {...this.props}>
              <header class="page-header bg-gradient outer">
                {_.get(this.props, 'pageContext.frontmatter.img_path') && 
                <div class="bg-img" style={toStyleObj('background-image: url(\'' + safePrefix(_.get(this.props, 'pageContext.frontmatter.img_path')) + '\')')}/>
                }
                <div class="inner-small">
                  <h1 class="page-title">{_.get(this.props, 'pageContext.frontmatter.title')}</h1>
                  {_.get(this.props, 'pageContext.frontmatter.subtitle') && 
                  <p class="page-subtitle">{_.get(this.props, 'pageContext.frontmatter.subtitle')}</p>
                  }
                </div>
              </header>
              <div class="outer">
                <div class="inner-medium">
                  <div class="post-feed">
                    {_.map(display_posts, (post, post_idx) => (
                    <article key={post_idx} class="post">
                      {_.get(post, 'frontmatter.thumb_img_path') && 
                      <Link class="post-thumbnail" to={safePrefix(_.get(post, 'url'))}>
                        <img class="thumbnail" src={safePrefix(_.get(post, 'frontmatter.thumb_img_path'))} alt={_.get(post, 'frontmatter.title')} />
                      </Link>
                      }
                      <header class="post-header">
                        <div class="post-meta">
                          <time class="published" datetime={moment(_.get(post, 'frontmatter.date')).strftime('%Y-%m-%d %H:%M')}>{moment(_.get(post, 'frontmatter.date')).strftime('%B %d, %Y')}</time>
                        </div>
                        <h2 class="post-title line-left"><Link to={safePrefix(_.get(post, 'url'))} rel="bookmark">{_.get(post, 'frontmatter.title')}</Link></h2>
                      </header>
                      {_.get(post, 'frontmatter.excerpt') && <React.Fragment>
                      <p class="post-excerpt">{_.get(post, 'frontmatter.excerpt')}</p>
                      <p class="read-more"><Link to={safePrefix(_.get(post, 'url'))} class="read-more-link">Read More <span class="icon-arrow-right" aria-hidden="true" /></Link></p>
                      </React.Fragment>}
                    </article>
                    ))}
                  </div>
              </div>
            </div>
            </Layout>
        );
    }
}
