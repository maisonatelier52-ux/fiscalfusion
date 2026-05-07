export const sortArticlesByDate = (articles) => {
  return [...articles].sort((a, b) => {
    // Standardizing date strings by removing dots (e.g., "Jan." -> "Jan")
    const cleanDateA = a.date.replace(/\./g, '');
    const cleanDateB = b.date.replace(/\./g, '');
    
    const timeA = new Date(cleanDateA).getTime();
    const timeB = new Date(cleanDateB).getTime();
    
    return timeB - timeA; // Descending order: newest first
  });
};
