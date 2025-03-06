import { atom, useSetAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

// Helper function to handle doing a logout after midnight
// const getAdjustedDate = () => {
//   const now = new Date();
//   if (now.getHours() < 6) {
//     now.setDate(now.getDate() - 1);
//   }
//   return now
// }

// export const dateAtom = atom(getAdjustedDate());
export const dateAtom = atom<Date>();
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
export const pintCardAtom = atomWithStorage("pintCard", "", undefined, { getOnInit: true });
export const pickleCardAtom = atomWithStorage("pickleCard", "", undefined, { getOnInit: true });
export const teamNachoAtom = atomWithStorage("teamNacho", "", undefined, { getOnInit: true });
export const guestSatisfactionAtom = atomWithStorage("guestSatisfaction", [], undefined, { getOnInit: true });
export const promoDescAtom = atomWithStorage("promoDesc", "", undefined, { getOnInit: true });
export const deletesAtom = atomWithStorage("deletes", "", undefined, { getOnInit: true });
export const wasteAtom = atomWithStorage("waste", "", undefined, { getOnInit: true });
export const maintenanceAtom = atomWithStorage("maintenance", "", undefined, { getOnInit: true });
export const fohCutTimesAtom = atomWithStorage("fohCutTimes", "", undefined, { getOnInit: true });

export const useResetAllAtoms = () => {
  const setDate = useSetAtom(dateAtom);
  const setShift = useSetAtom(shiftAtom);
  const setReportTime = useSetAtom(reportTimeAtom);
  const setSales = useSetAtom(salesAtom);
  const setFoodSales = useSetAtom(foodSalesAtom);
  const setDiscountsAmount = useSetAtom(discountsAmountAtom);
  const setDiscountsPercent = useSetAtom(discountsPercentAtom);
  const setTakeout = useSetAtom(takeoutAtom);
  const setPromoTotal = useSetAtom(promoTotalAtom);
  const setFloat = useSetAtom(floatAtom);
  const setFlow = useSetAtom(flowAtom);
  const setIssues = useSetAtom(issuesAtom);
  const setEightySix = useSetAtom(eightySixAtom);
  const setTakeoutIssues = useSetAtom(takeoutIssuesAtom);
  const setManagerDiscounts = useSetAtom(managerDiscountsAtom);
  const setBOHDiscount = useSetAtom(BOHDiscountAtom);
  const setFOHonShift = useSetAtom(FOHonShiftAtom);
  const setStaffOffShift = useSetAtom(staffOffShiftAtom);
  const setNBH = useSetAtom(NBHAtom);
  const setOwners = useSetAtom(ownersAtom);
  const setTrainingDiscounts = useSetAtom(trainingDiscountsAtom);
  const setPintCard = useSetAtom(pintCardAtom);
  const setPickleCard = useSetAtom(pickleCardAtom);
  const setTeamNacho = useSetAtom(teamNachoAtom);
  const setGuestSatisfaction = useSetAtom(guestSatisfactionAtom);
  const setPromoDesc = useSetAtom(promoDescAtom);
  const setDeletes = useSetAtom(deletesAtom);
  const setWaste = useSetAtom(wasteAtom);
  const setMaintenance = useSetAtom(maintenanceAtom);
  const setFohCutTimes = useSetAtom(fohCutTimesAtom);

  return () => {
    setDate(null);
    setShift("Day");
    setReportTime("");
    setSales(0);
    setFoodSales(0);
    setDiscountsAmount(0);
    setDiscountsPercent(0);
    setTakeout(0);
    setPromoTotal(0);
    setFloat(0);
    setFlow("");
    setIssues("");
    setTakeoutIssues("");
    setEightySix([]);

    setManagerDiscounts([]);
    setBOHDiscount([]);
    setFOHonShift([]);
    setStaffOffShift([]);
    setNBH([]);
    setOwners([]);
    setTrainingDiscounts([]);
    setPintCard('');
    setPickleCard('');
    setTeamNacho('');
    setGuestSatisfaction([]);
    setPromoDesc("");
    setDeletes("");
    setWaste("");
    setMaintenance("");
    setFohCutTimes("");
  };
}