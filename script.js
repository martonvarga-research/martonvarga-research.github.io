const filterButtons = document.querySelectorAll(".filter");
const papers = document.querySelectorAll(".paper");
const groups = document.querySelectorAll(".paper-group");
const emptyState = document.querySelector("#empty-state");

function applyFilter(filter) {
  let visibleCount = 0;

  papers.forEach((paper) => {
    const matches =
      filter === "all" ||
      paper.dataset.kind === filter ||
      (filter === "media" && paper.dataset.media === "true");

    paper.hidden = !matches;
    if (matches) visibleCount += 1;
  });

  groups.forEach((group) => {
    const hasVisiblePaper = [...group.querySelectorAll(".paper")].some((paper) => !paper.hidden);
    group.hidden = !hasVisiblePaper;
  });

  if (emptyState) {
    emptyState.hidden = visibleCount !== 0 || filter !== "media";
  }
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    applyFilter(button.dataset.filter);
  });
});
