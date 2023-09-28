/**
 * Binary search for a target element in a sorted array.
 * @param {number[]} arr - The sorted array to search in.
 * @param {number} target - The target element to find.
 * @returns {number | null} - The index of the target element or null if not found.
 */
export const binarySearch=(arr: number[], target: number): number | null =>{
    let left = 0; // Left pointer initialized to the beginning of the array.
    let right = arr.length - 1; // Right pointer initialized to the end of the array.
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2); // Calculate the middle index.
  
      if (arr[mid] === target) {
        return mid; // Element found, return its index.
      } else if (arr[mid] < target) {
        // If the middle element is less than the target, adjust the left pointer.
        left = mid + 1;
      } else {
        // If the middle element is greater than the target, adjust the right pointer.
        right = mid - 1;
      }
    }
  
    // Element not found in the array, return null.
    return null;
  }
  
  // Example usage:
  const sortedArray = [1, 3, 5, 7, 9, 11, 13];
  const targetElement = 7;
  const result = binarySearch(sortedArray, targetElement);
  //result can be null or index of the element that we are searching
  
  
  
  