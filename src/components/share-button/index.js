import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import Icon from 'components/icon';
import SharePopup from './share-popup';

export default class ShareButtonComponent extends React.Component {
  state = {
    shareModalOpen: false,
  };

  toggleShare = () => {
    const { text, url, title, onSuccess, onError } = this.props;
    if (window.navigator.share) {
      window.navigator
        .share({ title, text, url })
        .then(onSuccess)
        .catch(onError);
    } else {
      document.body.style.overflow = !this.state.shareModalOpen
        ? 'hidden'
        : 'auto';
      this.setState({ shareModalOpen: !this.state.shareModalOpen });
    }
  };
  render() {
    return (
      <Fragment>
        <ShareButton className="share-btn web-share" onClick={this.toggleShare}>
          <Icon name="share" size={25} />
        </ShareButton>
        <ShareModal open={this.state.shareModalOpen}>
          <Overlay
            onClick={this.toggleShare}
            open={this.state.shareModalOpen}
          />
          <SharePopup
            {...this.props}
            toggleShare={this.toggleShare}
            shareModalOpen={this.state.shareModalOpen}
          />
        </ShareModal>
      </Fragment>
    );
  }
}

ShareButtonComponent.propTypes = {
  /** Url to share */
  url: PropTypes.string,
  /** Title that is used by the Web Share API */
  title: PropTypes.string,
  /** Text that is used by the Web Share API */
  text: PropTypes.string,
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
  sharedBy: PropTypes.func,
};

ShareButtonComponent.defaultProps = {
  url: '',
  title: '',
  text: '',
  onSuccess: () => null,
  onError: () => null,
  sharedBy: medium => {
    // eslint-disable-next-line
    console.log('Shared via ', medium);
  },
};

const ShareButton = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  position: absolute;
  top: 20px;
  right: 15px;
  color: #fff;
  display: none;
  @media (max-width: 600px) {
    display: block;
  }
`;

const ShareModal = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: ${props => (props.open ? '100%' : 0)};
  height: ${props => (props.open ? '100%' : 0)};
  z-index: 200;
`;

const Overlay = styled.div`
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: ${props => (props.open ? '0.4' : 0)};
  position: absolute;
  transition: all 0.3s;
  display: ${props => (props.open ? 'block' : 'none')};
`;
