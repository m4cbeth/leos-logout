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
export const salesAtom = atom(0)
export const foodSalesAtom = atom(0)
export const discountsAmountAtom = atom(0)
export const discountsPercentAtom = atom(0)

// ===================DONE==================
// ATE:Feb 23 night
// SALES: $12861.03
// ===================TODO==================
// FOOD SALES (excel discounts): $8039.21
// TAKEOUT SALES :$1343.54
// DISCOUNT TOTAL:$412.68 3.26%
// PROMO TOTAL: x10 = $53.50
// FLOAT: $350
// FLOW
// ▪︎ Steady flow, less chaos and hectic stuff tonight. Focused on working as a team on the bar and floor. Bill times were great out of the kitchen. Died out around 11pm, had a couple peeps chill till end.
// ISSUES/CONCERNS/COMMENTS
// ▪︎ Back kitchen door is hard to lock and tight. Handicapped stall is still locked.
// 86D
// ▪︎ Corona
// Strongbow
// Pineapple juice
// Grand Marnier
// Strawberry syrup
// TAKE OUT FLOW/DOWNTIMES/PAUSES/COMMENTS
// ▪︎
// DISCOUNTS
// Manager on shift (x100, x50)
// Jaime $28 Alex $9.75
// BOH on shift (x100, x50)
// Chris $24, brayden $23.5, Francine $22
// FOH on shift (x5 x100)
// X5 = $52.02
// Staff not on shift (x25)
// NBH (X10)
// Owners (x50)
// Training Discount (x100)
// Pint/Pickle cards/ Team nachos (amount of cards/orders)
// 9 pint cards
// 3 Pickle cards
// Guest Satisfaction (% and reason)
// NONE! PERFECT SERVICE!!!
// PROMO: X10 53.50
// Deletes:
// See attached
// WASTE
// One kits pint
// One can of can
// One oz tequila wrong mix
// MAINTENANCE
// ▪︎
// FOH CUT TIMES
// ▪︎
// Joyce 6
// Cort 645
// Brook 8
// Chantelle 10
// Nicole 1030
// Kendell 12
// Jaren 230