import { atomWithStorage } from 'jotai/utils'

// Helper function to handle doing a logout after midnight
const getAdjustedDate = () => {
  const now = new Date();
  if (now.getHours() < 6) {
    now.setDate(now.getDate() - 1);
  }
  return now
//   return now.toISOString().split('T')[0]; // Return as YYYY-MM-DD
};

export const dateAtom = atomWithStorage("date", getAdjustedDate(), undefined, { getOnInit: true});
export const shiftAtom = atomWithStorage("shift", "Day", undefined, { getOnInit: true });
export const reportTimeAtom = atomWithStorage("reportTime", "", undefined, { getOnInit: true });
export const salesAtom = atomWithStorage("sales", 0, undefined, { getOnInit: true });
export const foodSalesAtom = atomWithStorage("foodSales", 0, undefined, { getOnInit: true });
export const discountsAmountAtom = atomWithStorage("discountsAmount", 0, undefined, { getOnInit: true });
export const discountsPercentAtom = atomWithStorage("discountsPercent", 0, undefined, { getOnInit: true });
export const takeoutAtom = atomWithStorage("takeout", 0, undefined, { getOnInit: true });
export const promoTotalAtom = atomWithStorage("promoTotal", 0, undefined, { getOnInit: true });
export const floatAtom = atomWithStorage("float", 0, undefined, { getOnInit: true });
export const flowAtom = atomWithStorage("flow", "", undefined, { getOnInit: true });
export const issuesAtom = atomWithStorage("issues", "", undefined, { getOnInit: true });
export const takeoutIssuesAtom = atomWithStorage("takeoutIssues", "", undefined, { getOnInit: true });
export const eightySixAtom = atomWithStorage("eightySix", [], undefined, { getOnInit: true });
export const managerDiscountsAtom = atomWithStorage("managerDiscounts", [], undefined, { getOnInit: true });
export const BOHDiscountAtom = atomWithStorage("BOHDiscount", [], undefined, { getOnInit: true });
export const FOHonShiftAtom = atomWithStorage("FOHonShift", [], undefined, { getOnInit: true });
export const staffOffShiftAtom = atomWithStorage("staffOffShift", [], undefined, { getOnInit: true });
export const NBHAtom = atomWithStorage("NBH", [], undefined, { getOnInit: true });
export const ownersAtom = atomWithStorage("owners", [], undefined, { getOnInit: true });
export const trainingDiscountsAtom = atomWithStorage("trainingDiscounts", [], undefined, { getOnInit: true });
export const pintCardAtom = atomWithStorage("pintCard", [], undefined, { getOnInit: true });
export const pickleCardAtom = atomWithStorage("pickleCard", [], undefined, { getOnInit: true });
export const teamNachoAtom = atomWithStorage("teamNacho", [], undefined, { getOnInit: true });
export const guestSatisfactionAtom = atomWithStorage("guestSatisfaction", [], undefined, { getOnInit: true });
export const promoDescAtom = atomWithStorage("promoDesc", "", undefined, { getOnInit: true });
export const deletesAtom = atomWithStorage("deletes", "", undefined, { getOnInit: true });
export const wasteAtom = atomWithStorage("waste", "", undefined, { getOnInit: true });
export const maintenanceAtom = atomWithStorage("maintenance", "", undefined, { getOnInit: true });
export const fohCutTimesAtom = atomWithStorage("fohCutTimes", "", undefined, { getOnInit: true });



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










