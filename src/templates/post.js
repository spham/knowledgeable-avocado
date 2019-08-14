import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import {Layout} from '../components/index';
import {toStyleObj, safePrefix, htmlToReact} from '../utils';

export default class Post extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
              <article class="post post-full">
                <header class="post-header bg-gradient outer">
                  {_.get(this.props, 'pageContext.frontmatter.content_img_path') && 
                  <div class="bg-img" style={toStyleObj('background-image: url(\'' + safePrefix(_.get(this.props, 'pageContext.frontmatter.content_img_path')) + '\')')}/>
                  }
                  <div class="inner-small">
                    <div class="post-meta">
                      <time class="published" datetime={moment(_.get(this.props, 'pageContext.frontmatter.date')).strftime('%Y-%m-%d %H:%M')}>{moment(_.get(this.props, 'pageContext.frontmatter.date')).strftime('%B %d, %Y')}</time>
                    </div>
                    <h1 class="post-title">{_.get(this.props, 'pageContext.frontmatter.title')}</h1>
                    {_.get(this.props, 'pageContext.frontmatter.subtitle') && 
                    <div class="post-subtitle">
                      {htmlToReact(_.get(this.props, 'pageContext.frontmatter.subtitle'))}
                    </div>
                    }
                  </div>
                </header>
                <div class="outer">
                  <div class="inner-medium">
                    <div class="post-content">
                      {htmlToReact(_.get(this.props, 'pageContext.html'))}
                    </div>
                  </div>
                </div>
              </article>
            </Layout>
        );
    }
}
