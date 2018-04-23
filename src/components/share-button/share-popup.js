import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import Icon from 'components/icon';
import Visibility from './visibility';

export default class SharePopup extends React.Component {
  copyClicked = e => {
    const t = e.currentTarget;
    const c = t.dataset.copytarget;
    const inp = c ? document.querySelector(c) : null;

    if (inp && inp.select) {
      inp.select();
      try {
        document.execCommand('copy');
        inp.blur();
      } catch (err) {
        // eslint-disable-next-line
        alert('Please copy manually');
      }
    }
    this.props.sharedBy('copy');
  };

  whatsappClicked = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    let link = '';
    if (/android/i.test(userAgent)) {
      link = 'https://play.google.com/store/apps/details?id=com.whatsapp';
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      link = 'https://itunes.apple.com/app/id310633997';
    }
    const delay = 1000;
    const start = new Date().getTime();
    setTimeout(() => {
      const end = new Date().getTime();
      if (
        (this.visibility && this.visibility.isHidden()) ||
        end - start >= delay * 2
      )
        return;
      window.open(link, '_blank');
    }, delay);
    this.props.sharedBy('whatsapp');
  };

  fbClicked = () => {
    this.props.sharedBy('fb');
  };

  twitterClicked = () => {
    this.props.sharedBy('twitter');
  };

  render() {
    const text = `${this.props.text} ${this.props.url}`;
    return (
      <StyledSharePopup open={this.props.shareModalOpen}>
        {this.props.shareModalOpen && (
          <Visibility
            ref={node => {
              this.visibility = node;
            }}
          />
        )}
        <ShareLink
          href={`whatsapp://send?text=${text}`}
          onClick={this.whatsappClicked}
        >
          <Icon name="whatsapp" />
          <span>WhatsApp</span>
        </ShareLink>
        <ShareLink
          href={`http://www.facebook.com/sharer.php?u=${encodeURIComponent(
            this.props.url
          )}&p[title]=${encodeURIComponent(this.props.text)}`}
          onClick={this.fbClicked}
          target="_blank"
        >
          <Icon name="facebook" />
          <span>Facebook</span>
        </ShareLink>
        <ShareLink
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            this.props.text
          )}&url=${encodeURIComponent(this.props.url)}`}
          onClick={this.twitterClicked}
          target="_blank"
        >
          <Icon name="twitter" />
          <span>Twitter</span>
        </ShareLink>
        <CopyButton onClick={this.copyClicked} data-copytarget="#url">
          <div className="copy-input">
            <input
              type="text"
              id="url"
              defaultValue={this.props.url}
              readOnly
            />
          </div>
          <div>
            <span aria-label="url" role="img">
              🔗
            </span>
            <span>Copy to clipboard</span>
          </div>
        </CopyButton>
      </StyledSharePopup>
    );
  }
}

SharePopup.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  shareModalOpen: PropTypes.bool.isRequired,
  sharedBy: PropTypes.func.isRequired,
};

const StyledSharePopup = styled.div`
  height: 220px;
  width: 100%;
  background: #fff;
  bottom: 0;
  position: absolute;
  z-index: 2;
  padding: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.6, 1);
  transform: ${props => (props.open ? `translateY(0)` : `translateY(100%)`)};
`;

const ShareLink = styled(OutboundLink)`
  height: 40px;
  line-height: 40px;
  display: block;
  color: #444;
  text-decoration: none;
  & span {
    margin-left: 10px;
  }
`;

const CopyButton = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  height: 70px;
  width: 100%;
  text-align: left;
  font-size: 1rem;
  & span {
    &:not(:first-child) {
      margin-left: 10px;
    }
  }
  & .copy-input {
    width: 100%;
    height: 30px;
    line-height: 30px;
    & input {
      width: 96%;
      outline: none;
      border: none;
      font-size: 1rem;
    }
  }
`;
