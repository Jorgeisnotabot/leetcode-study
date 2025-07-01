function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    const m = nums1.length;
    const n = nums2.length;
    let low = 0, high = m;

    while (low <= high) {
        const cut1 = Math.floor((low + high) / 2);
        const cut2 = Math.floor((m + n + 1) / 2) - cut1;
        
        const left1 = cut1 === 0 ? -Infinity : nums1[cut1 - 1];
        const left2 = cut2 === 0 ? -Infinity : nums2[cut2 - 1];
        const right1 = cut1 === m ? Infinity : nums1[cut1];
        const right2 = cut2 === n ? Infinity : nums2[cut2];
        
        if (left1 <= right2 && left2 <= right1) {
            if ((m + n) % 2 === 0) {
                return (Math.max(left1, left2) + Math.min(right1, right2)) / 2;
            } else {
                return Math.max(left1, left2);
            }
        } else if (left1 > right2) {
            high = cut1 - 1;
        } else {
            low = cut1 + 1;
        }
    }

    return -1;
};