import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyleSheet = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  body {
    background-color: #fbfbfb;
    font-family: monospace;
  }
`

export const Header = styled.header`
  padding: 2.4rem 0;

  h1 {
    font-size: 2.4rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  h4 {
    font-size: 1rem;
    font-weight: 300;
  }
`

export const List = styled.ul`
  margin-bottom: 1.8rem;

  li {
    margin-bottom: 0.6rem;
  }

  a {
    color: #999;
    text-decoration: none;

    &:visited {
      color: #999;
      text-decoration: none;
    }

    &:hover,
    &:active {
      color: #000;
      text-decoration: underline;
    }
  }
`

export const PageWrap = styled.div`
  margin: 0 auto 2.4rem;
  padding: 0 1.6rem 1.6rem;

  small {
    color: #999;
    font-size: 0.83rem;
  }

  @media only screen and (min-width: 800px) {
    max-width: 50rem;
    padding: 0;
  }
`
