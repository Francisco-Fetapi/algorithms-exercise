export function findPossibleParcels(nums: number[], k: number): boolean {
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let otherParcel = k - num;

    let exists = nums.indexOf(otherParcel);
    if (exists != -1) {
      return true;
    }
  }

  return false;
}
