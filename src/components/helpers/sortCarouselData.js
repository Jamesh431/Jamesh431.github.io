export const sortCarouselData = (data, itemsPerPage) => {
  const numChunks = Math.ceil(data.length / itemsPerPage);
  const chunks = [];

  for (let i = 0; i < numChunks; i++) {
    const start = i * itemsPerPage;
    const end = start + itemsPerPage;
    const chunk = data.slice(start, end);
    chunks.push(chunk);
  }

  return chunks;
};
