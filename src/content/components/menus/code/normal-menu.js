import React from 'react';
import { Menu } from 'unify-react-mobile';

const ComponentDemo = (
  <Menu display={true} items={
      [
        { key: 1, text: 'First Content Goes Here', onClick: function(){ alert('Hello Item 1'); } },
        { key: 2, text: 'Second Content Goes Here', onClick: function(){ alert('Hello Item 2'); } },
        { key: 3, text: 'Third Content Goes Here', onClick: function(){ alert('Hello Item 3'); } },
      ]
    }
    actionText="Call to Action Here"
    onClose={() => alert('This is Menu')} onAction={() => alert('This is Menu')}
  />
);

export default ComponentDemo;
