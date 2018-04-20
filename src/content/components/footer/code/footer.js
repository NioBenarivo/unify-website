import React, { PureComponent } from 'react';
import { Footer } from 'unify-react-mobile';

class ComponentDemo extends PureComponent {
  state = {
    lang: 'id'
  }

  handleLanguage = () => {
    if(this.state.lang === 'id') {
      this.setState({
        lang: 'en'
      })
    } else {
      this.setState({
        lang: 'id'
      })
    }
  }

  render() {
    return(
      <div>
        <Footer
          lang={this.state.lang}
          androidURL='#'
          iosURL='#'
          contactUsURL='https://tokopedia.com/contact-us'
          desktopURL='#'
          termConditionsURL='https://m.tokopedia.com/terms'
          privacyURL='#'
          onLanguageChange={this.handleLanguage}
        />
      </div>
    )
  }
}

export default <ComponentDemo />;
