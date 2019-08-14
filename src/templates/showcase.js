import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import {toStyleObj, safePrefix, Link, htmlToReact} from '../utils';

export default class Showcase extends React.Component {
    render() {
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
              <div class="showcase-block outer">
                <div class="inner">
                  <div class="block-items">
                    {_.map(_.get(this.props, 'pageContext.frontmatter.items'), (item, item_idx) => (
                    <section key={item_idx} class="block-item">
                      <div class="block-item-inside">
                        {_.get(item, 'preview_img') && 
                        <Link class="block-item-preview" to={_.get(item, 'url')}>
                          <img class="thumbnail" src={safePrefix(_.get(item, 'preview_img'))} alt={_.get(item, 'title')} />
                        </Link>
                        }
                        <h2 class="block-item-title"><Link to={_.get(item, 'url')}>{_.get(item, 'title')}</Link></h2>
                        {_.get(item, 'subtitle') && 
                        <p class="block-item-text">{htmlToReact(_.get(item, 'subtitle'))}</p>
                        }
                      </div>
                    </section>
                    ))}
                  </div>
                </div>
              </div>
            </Layout>
        );
    }
}
