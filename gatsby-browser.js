/* globals window CustomEvent */
import React, { createElement } from 'react';
import { Transition } from 'react-transition-group';
import createHistory from 'history/createBrowserHistory';

import getTransitionStyle from './src/utils/transition-style';

const timeout = 225;
const historyExitingEventType = `history::exiting`;

const getUserConfirmation = (pathname, callback) => {
  const event = new CustomEvent(historyExitingEventType, { detail: { pathname } });
  window.dispatchEvent(event);
  setTimeout(() => {
    callback(true);
  }, timeout);
};

const history = createHistory({ getUserConfirmation });

// block must return a string to conform
history.block(location => location.pathname);

exports.replaceHistory = () => history;

class ReplaceComponentRenderer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { exiting: false, nextPageResources: {} };
    this.listenerHandler = this.listenerHandler.bind(this);
  }

  componentDidMount() {
    window.addEventListener(historyExitingEventType, this.listenerHandler);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.key !== nextProps.location.key) {
      this.setState({ exiting: false, nextPageResources: {} });
    }
  }

  componentWillUnmount() {
    window.removeEventListener(historyExitingEventType, this.listenerHandler);
  }

  listenerHandler(event) {
    const nextPageResources =
      this.props.loader.getResourcesForPathname(event.detail.pathname, _nextPageResources =>
        this.setState({ nextPageResources: _nextPageResources })
      ) || {};
    this.setState({ exiting: true, nextPageResources });
  }

  render() {
    const transitionProps = {
      timeout: {
        enter: 0,
        exit: timeout,
      },
      appear: true,
      in: !this.state.exiting,
      key: this.props.location.key,
    };
    return (
      <Transition {...transitionProps}>
        {status =>
          createElement(this.props.pageResources.component, {
            ...this.props,
            ...this.props.pageResources.json,
            transition: {
              status,
              timeout,
              style: getTransitionStyle({ status, timeout }),
              nextPageResources: this.state.nextPageResources,
            },
          })
        }
      </Transition>
    );
  }
}

// eslint-disable-next-line react/display-name
exports.replaceComponentRenderer = ({ props, loader }) => {
  if (props.layout) {
    return undefined;
  }
  return createElement(ReplaceComponentRenderer, { ...props, loader });
};
