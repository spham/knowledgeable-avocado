import React from 'react';
import _ from 'lodash';

import {classNames, htmlToReact, markdownify} from '../utils';
import CtaButtons from './CtaButtons';

export default class FeaturesBlock extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} className={classNames('block', 'features-block', 'outer', {'has-header': _.get(this.props, 'section.title') || _.get(this.props, 'section.subtitle')})}>
              <div class="inner">
                <div class="block-inside">
                  {(_.get(this.props, 'section.title') || _.get(this.props, 'section.subtitle')) && 
                  <div class="block-header">
                    {_.get(this.props, 'section.title') && 
                    <h2 class="block-title">{_.get(this.props, 'section.title')}</h2>
                    }
                    {_.get(this.props, 'section.subtitle') && 
                    <p class="block-subtitle">
                      {htmlToReact(_.get(this.props, 'section.subtitle'))}
                    </p>
                    }
                  </div>
                  }
                  {_.get(this.props, 'section.featureslist') && 
                  <div class="block-items">
                    {_.map(_.get(this.props, 'section.featureslist'), (feature, feature_idx) => (
                    <section key={feature_idx} class="block-item">
                      <div class="block-item-inside">
                        <h3 class="block-item-title line-left">{_.get(feature, 'title')}</h3>
                        <div class="block-item-text">
                          {markdownify(_.get(feature, 'content'))}
                        </div>
                        {_.get(feature, 'actions') && 
                          <CtaButtons {...this.props} actions={_.get(feature, 'actions')} />
                        }
                      </div>
                    </section>
                    ))}
                  </div>
                  }
                </div>
              </div>
            </section>
        );
    }
}
