import React from 'react';
import _ from 'lodash';

import {toStyleObj, safePrefix, markdownify, Link} from '../utils';

export default class HeroBlock extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} class="block hero-block bg-gradient outer">
              {_.get(this.props, 'section.image') && 
              <div class="bg-img" style={toStyleObj('background-image: url(\'' + safePrefix(_.get(this.props, 'section.image')) + '\')')}/>
              }
              <div class="inner-small">
                <div class="block-inside">
                  <div class="block-content">
                    <h2 class="block-title">{_.get(this.props, 'section.title')}</h2>
                    <div class="block-text">
                      {markdownify(_.get(this.props, 'section.content'))}
                    </div>
                    {_.get(this.props, 'section.actions') && 
                    <div class="block-cta">
                      {_.map(_.get(this.props, 'section.actions'), (action, action_idx) => (
                      <Link key={action_idx} to={safePrefix(_.get(action, 'url'))} class="button secondary">{_.get(action, 'label')}</Link>
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
