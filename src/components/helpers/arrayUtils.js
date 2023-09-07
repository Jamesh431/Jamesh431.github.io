export const createPageObject = (num, idx) => ({
  page: num,
  id: idx,
});

export const truncatePageNumbers = (
  maxNumberOfPageButtons,
  currentPage,
  maxPage
) => {
  if (maxNumberOfPageButtons >= maxPage) {
    return pageRange(1, maxPage).map(createPageObject);
  }

  if (currentPage < maxNumberOfPageButtons - 2) {
    const workingArr = pageRange(1, maxNumberOfPageButtons - 2);
    return [...workingArr, "...", maxPage].map(createPageObject);
  }

  if (currentPage >= maxPage - (maxNumberOfPageButtons - 2)) {
    const workingArr = pageRange(
      maxPage - (maxNumberOfPageButtons - 3),
      maxPage
    );
    return [1, "...", ...workingArr].map(createPageObject);
  }

  const offset = maxNumberOfPageButtons % 2 === 0 ? 2 : 1;
  const workingArr = pageRange(currentPage - offset, currentPage + 1);
  return [1, "...", ...workingArr, "...", maxPage].map(createPageObject);
};

export const pageRange = (start, end) => {
  let rangeList = [];

  for (let i = start; i <= end; i++) {
    rangeList.push(i);
  }

  return rangeList;
};
