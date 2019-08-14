import React from 'react';
import _ from 'lodash';

import {safePrefix, markdownify, Link} from '../utils';

export default class ContentBlock extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} class="block text-block outer">
              <div class="inner">
                <div class="block-inside">
                  {_.get(this.props, 'section.image') && 
                  <div class="block-preview">
                    <img class="thumbnail" src={safePrefix(_.get(this.props, 'section.image'))} alt={_.get(this.props, 'section.title')} />
                  </div>
                  }
                  <div class="block-content">
                    <h2 class="block-title">{_.get(this.props, 'section.title')}</h2>
                    <div class="block-text">
                      {markdownify(_.get(this.props, 'section.content'))}
                    </div>
                    {_.get(this.props, 'section.actions') && 
                    <div class="block-cta">
                      {_.map(_.get(this.props, 'section.actions'), (action, action_idx) => (
                      <Link key={action_idx} to={safePrefix(_.get(action, 'url'))} class="button">{_.get(action, 'label')}</Link>
                      ))}
                    </div>
                    }
                  </div>
                </div>
              </div>
            </section>
        );
    }
}
