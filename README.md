# Binary Search Algorithm in TypeScript

## Overview

This repository provides a TypeScript implementation of the Binary Search algorithm—a highly efficient method for finding a target element within a sorted array. Binary search reduces the search space by half with each comparison, making it much faster than linear search for large datasets.

## Features

- **Efficient Searching:** Binary search offers logarithmic time complexity O(log n) for finding elements in a sorted array.
- **TypeScript Implementation:** The algorithm is implemented in TypeScript, ensuring type safety and reliability.
- **Example Usage:** The repository includes an example of how to use the binary search function.

## Getting Started

### Prerequisites

- Node.js installed on your computer.

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/TheScientist01/BinarySearchTS.git

**Usage**
To use the binary search function in your TypeScript project:

Import the binarySearch function from the provided module:

import { binarySearch } from './binarySearch';

Create a sorted array and a target element to search for.

Call the binarySearch function with the array and target element

  ```bash
  const sortedArray = [1, 3, 5, 7, 9, 11, 13];
  const targetElement = 7;
  const result = binarySearch(sortedArray, targetElement);
  
  if (result !== null) {
    console.log(`Element ${targetElement} found at index ${result}`);
  } else {
    console.log(`Element ${targetElement} not found in the array`);
  }

