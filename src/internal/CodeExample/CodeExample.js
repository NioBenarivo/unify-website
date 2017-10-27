import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CopyToClipboard from 'react-copy-to-clipboard';
import classnames from 'classnames';
import { Icon } from 'carbon-components-react';

class CodeExample extends Component {
  static propTypes = {
    htmlFile: PropTypes.string,
  }

  state = {
    copied: false,
    showBtn: false,
    expandedCode: false,
  };

  componentDidMount = () => {
    if (this.codeBlock.offsetHeight > 190) {
      this.setState({ showBtn: true });
    }
  }

  handleCopy = () => {
    this.setState({ copied: true });
    setTimeout(() => {
      this.setState({ copied: false });
    }, 2500);
  }

  expandCode = () => {
    this.setState({ expandedCode: !this.state.expandedCode });
  }

  render() {
    const {
      htmlFile,
    } = this.props;

    const copyBtnClass = classnames({
      'bx--btn--copy__feedback': true,
      'bx--btn--copy__feedback--displayed': this.state.copied,
    });

    const codeExampleClass = classnames({
      'code-example__raw-html': true,
      'code-example__raw-html--expanded': this.state.expandedCode,
    });

    const expandBtnIconClass = classnames({
      'code-example__expand--icon': true,
      'code-example__expand--icon--rotated': this.state.expandedCode,
    });

    const expandBtnClass = classnames({
      'code-example__expand': this.state.showBtn,
      'code-example__expand--hidden': !this.state.showBtn,
    });

    const expandCodeBtnText = this.state.expandedCode ? 'Show less code' : 'Show more code';
    return (
      <div className="code-example">
        <div className={codeExampleClass} ref={(ref) => { this.codeBlock = ref; }}>
          <pre className="line-numbers">
            <code className="language-html">
              {htmlFile}
            </code>
          </pre>
        </div>
        <CopyToClipboard
          text={htmlFile}
          onCopy={this.handleCopy}
        >
          <button data-copy-btn className="bx--snippet-button code-example__copy-btn">
            Copy
            <Icon className="code-example__copy-btn--icon bx--snippet__icon" name="copy" description="Copy code icon" />
            <div className={copyBtnClass} data-feedback="Copied!" />
          </button>
        </CopyToClipboard>
        <button className={expandBtnClass} onClick={this.expandCode}>
          <span>{expandCodeBtnText}</span>
          <Icon className={expandBtnIconClass} name="chevron--down" description="Expand code icon" />
        </button>
      </div>
    );
  }
}

export default CodeExample;
