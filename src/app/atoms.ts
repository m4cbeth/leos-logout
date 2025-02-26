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

export const dateAtom = atom(getAdjustedDate());
export const shiftAtom = atom("Day")
export const salesAtom = atom(0)
export const foodSalesAtom = atom(0)
export const discountsAmountAtom = atom(0)
export const discountsPercentAtom = atom(0)
export const takeoutAtom = atom(0)
export const promoAtom = atom(0)
export const floatAtom = atom(0)
export const flowAtom = atom("")
export const issuesAtom = atom("")
export const takeoutIssuesAtom = atom("")
export const eightySixAtom = atom<string[]>([])
export const managerDiscountsAtom = atom<string[]>([])
export const BOHDiscountAtom = atom<string[]>([])
export const FOHonShiftAtom = atom<string[]>([])
export const staffOffShiftAtom = atom<string[]>([])
export const NBHAtom = atom<string[]>([])
export const ownersAtom = atom<string[]>([])
export const trainingDiscountsAtom = atom<string[]>([])
export const pintCardAtom = atom<string[]>([])
export const pickleCardAtom = atom<string[]>([])
export const teamNachoAtom = atom<string[]>([])
export const guestSatisfactionAtom = atom<string[]>([])

// ================WORKING================



// ===================TODO==================



// TAKE OUT FLOW/DOWNTIMES/PAUSES/COMMENTS

// ▪︎

// DISCOUNTS
// Manager on shift (x100, x50)
// BOH on shift (x100, x50)
// FOH on shift (x50)
// Staff not on shift (x25)
// NBH (X10)
// Owners (x50)
// Training Discount (x100)
// Pint/Pickle cards/ Team nachos (amount of cards/orders)
// Guest Satisfaction (% and reason)
// PROMO:
// Deletes:
// WASTE
// ▪︎
// MAINTENANCE
// ▪︎
// FOH CUT TIMES
// ▪︎
//
// ===================DONE==================
// DATE:Feb 23 night
// SALES: $12861.03
// FOOD SALES (excel discounts): $8039.21
// TAKEOUT SALES :$1343.54
// DISCOUNT TOTAL:$412.68 3.26%
// PROMO TOTAL: x10 = $53.50
// FLOAT: $350
// FLOW
//
// ▪︎
// ISSUES/CONCERNS/COMMENTS
// ▪︎
//
// 86D
// ▪︎










