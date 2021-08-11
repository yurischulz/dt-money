import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-shape: #ffffff;

    --color-primary: #5429CC;
    --color-secundary: #33CC95;
    --color-third: #E52E4D;
    --color-title: #363F5F;
    --color-text: #969CB2;
    --color-background: #F0F2F5;
    --color-background-input: #e7e9ee;

    --color-disabled: #E5E5E5;
    --color-success: #D1DFD7;
    --color-danger: #E6D4D7;
    --color-border: #D7D7D7;

    --color-btn-primary: #6933FF;
    --color-btn-success: var(--color-success);
    --color-btn-danger: var(--color-danger);

    --fs-desktop-bigger: 34px;
    --fs-desktop-title: 24px;
    --fs-desktop-text: 16px;
  }

  *, &:before, *:after {
    box-sizing: border-box;
  }

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

  :focus {
    outline: 0;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    background-color: var(--color-background);
    line-height: 1;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after, q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  input[type=search]::-webkit-search-cancel-button,
  input[type=search]::-webkit-search-decoration,
  input[type=search]::-webkit-search-results-button,
  input[type=search]::-webkit-search-results-decoration {
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  input[type=search] {
    -webkit-appearance: none;
    -moz-appearance: none;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }

  textarea {
    border: 1px solid var(--color-border);
    border-radius: 5px;
    overflow: auto;
    vertical-align: top;
    resize: vertical;
  }

  audio,
  canvas,
  video {
    display: inline-block;
    *display: inline;
    *zoom: 1;
    max-width: 100%;
  }

  audio:not([controls]) {
    display: none;
    height: 0;
  }

  [hidden] {
    display: none;
  }

  html {
    font-size: 100%;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;

    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 1080px) {
      font-size: 87.5%; // 14px
    }
  }

  a:focus {
    outline: thin dotted;
  }

  a:active,
  a:hover {
    outline: 0;
  }

  img {
    border: 0;
    -ms-interpolation-mode: bicubic;
  }

  figure {
    margin: 0;
  }

  form {
    margin: 0;
  }

  fieldset {
    border: 1px solid var(--color-border);
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
  }

  legend {
    border: 0;
    padding: 0;
    white-space: normal;
    *margin-left: -7px;
  }

  button,
  input,
  select,
  textarea {
    border-radius: 5px;
    font-size: 100%;
    margin: 0;
    vertical-align: baseline;
    *vertical-align: middle;
    &:not(button) {
      border: 1px solid var(--color-border);
    }
  }

  button,
  input {
    line-height: normal;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  html input[type="button"],
  input[type="reset"],
  input[type="submit"] {
    -webkit-appearance: button;
    cursor: pointer;
    *overflow: visible; 
  }

  button[disabled],
  html input[disabled] {
    cursor: not-allowed;
    background-color: var(--color-disabled);
  }

  input[type="checkbox"],
  input[type="radio"] {
    box-sizing: border-box;
    padding: 0;
    *height: 13px;
    *width: 13px;
  }

  input[type="search"] {
    -webkit-appearance: textfield;
    -moz-box-sizing: content-box;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
  }

  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  button::-moz-focus-inner,
  input::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  textarea {
    overflow: auto;
    vertical-align: top;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  body, 
  html,
  button,
  input,
  select,
  textarea {
    color: var(--color-text);
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  ::-moz-selection {
    background: var(--color-border);
    text-shadow: none;
  }

  ::selection {
    background: var(--color-border);
    text-shadow: none;
  }

  img {
    vertical-align: middle;
  }

  fieldset {
    border: 0;
    margin: 0;
    padding: 0;
  }

  textarea {
    resize: vertical;
  }

  .chromeframe {
    margin: 0.2em 0;
    background: var(--color-background);
    color: #000;
    padding: 0.2em 0;
  }

  .react-modal-overlay {
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    border-radius: 0.25rem;
    background-color: var(--color-background);
    padding: 3rem;
    position: relative;

    h2 {
      color: var(--color-title);
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }

    input {
      width: 100%;
      background-color: var(--color-background-input);
      border: 1px solid var(--color-border);
      border-radius: 0.25rem;
      padding: 0 1.5rem;
      height: 4rem;
      font-weight: 400;
      font-size: 1rem;
    }
  }
`;
