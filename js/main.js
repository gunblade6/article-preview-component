const shareButton = document.querySelector(
  `.card .content .share_holder .share`
);
const linksHolder = document.querySelector(
  `.card .content .share_holder .links`
);

let open = "false";

document.addEventListener(`click`, (e) => {
  if (e.target.classList.contains(`openShare`)) {
    if (open === `false`) {
      shareButton.classList.add(`hover`);
      open = "true";
      linksHolder.style.cssText = `opacity: 1; z-index: 1;`;
    } else {
      shareButton.classList.remove(`hover`);
      open = "false";
      linksHolder.style.cssText = `opacity: 0; z-index: -2;`;
    }
  }
});
document.addEventListener(`click`, (e) => {
  if (!e.target.classList.contains(`openShare`) && open === `true`) {
    shareButton.classList.remove(`hover`);
    open = "false";
    linksHolder.style.cssText = `opacity: 0; z-index: -2;`;
  }
});
