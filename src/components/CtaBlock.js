import React from 'react';
import _ from 'lodash';

import {htmlToReact, Link, safePrefix} from '../utils';

export default class CtaBlock extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} class="block cta-block outer">
              <div class="inner">
                <div class="block-outside bg-gradient">
                  <div class="block-inside">
                    <div class="block-content">
                      <h2 class="block-title">{_.get(this.props, 'section.title')}</h2>
                      {_.get(this.props, 'section.subtitle') && 
                      <p class="block-text">
                        {htmlToReact(_.get(this.props, 'section.subtitle'))}
                      </p>
                      }
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
