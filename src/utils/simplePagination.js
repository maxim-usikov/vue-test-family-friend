// TODO: tests
function simplePagination(currentPage, pageCount) {
  const delta = 2;
  const range = [];

  for (
    let i = Math.max(2, currentPage - delta);
    i <= Math.min(pageCount - 1, currentPage + delta);
    i += 1
  ) {
    range.push(i);
  }

  if (currentPage - delta > 2) {
    range.unshift('...');
  }
  if (currentPage + delta < pageCount - 1) {
    range.push('...');
  }

  range.unshift(1);
  range.push(pageCount);

  return range;
}

export default simplePagination;
