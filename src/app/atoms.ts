import { atom } from 'jotai'


// Helper function to handle doing a logout after midnight
const getAdjustedDate = () => {
  const now = new Date();
  if (now.getHours() < 6) {
    now.setDate(now.getDate() - 1);
  }
  return now
//   return now.toISOString().split('T')[0]; // Return as YYYY-MM-DD
};

const dateAtom = atom(getAdjustedDate());
