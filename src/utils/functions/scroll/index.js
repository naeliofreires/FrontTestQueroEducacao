export function unlockScroll() {
  const [body] = document.getElementsByTagName('body');
  const [html] = document.getElementsByTagName('html');

  body.classList.remove('block-scroll');
  html.classList.remove('block-scroll');
}

export function blockScroll() {
  const [body] = document.getElementsByTagName('body');
  const [html] = document.getElementsByTagName('html');

  body.classList.add('block-scroll');
  html.classList.add('block-scroll');
}
