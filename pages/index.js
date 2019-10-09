import React from 'react'

// styles
import {
  GlobalStyleSheet,
  Header,
  List,
  PageWrap,
} from '../style/style'

export default () => (
  <PageWrap>
    <GlobalStyleSheet />
    <Header>
      <h1>William Kunz</h1>
      <h4>I'm good at computers.</h4>
    </Header>
    <section>
      <List>
        <li>
          <a
            href="https://github.com/williamkunz"
            target="_blank"
            title="View my projects"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/WilliamKunz"
            target="_blank"
            title="Follow Me"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            download
            href="/static/william.kunz.resume.pdf"
            title="Where I direct my commits"
          >
            Resume
          </a>
        </li>
      </List>

      <small>I had to quickly put this up. I know it is not good.</small>
    </section>
  </PageWrap>
)
