import React from 'react';
import _ from 'lodash';

import {Link, safePrefix} from '../utils';

export default class CtaButtons extends React.Component {
    render() {
        return (
            <div class="block-item-cta">
              {_.map(_.get(this.props, 'actions'), (action, action_idx) => (
              <Link key={action_idx} to={safePrefix(_.get(action, 'url'))}>{_.get(action, 'label')} <span class="icon-arrow-right" aria-hidden="true" /></Link>
              ))}
            </div>
        );
    }
}
