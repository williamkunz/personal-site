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
      {/* <small>...but I'd rather put effort elsewhere.</small> */}
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
    </section>
  </PageWrap>
)
