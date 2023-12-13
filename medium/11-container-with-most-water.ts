function maxArea(height: number[]): number {
  let maxArea = 0;

  let source = 0;
  let end = height.length - 1;

  while (source < end) {
    const minHeight = Math.min(height[source], height[end]);
    const area = minHeight * (end - source);
    maxArea = Math.max(maxArea, area);

    if (height[source] < height[end]) {
      source++;
      continue;
    }

    end--;
  }

  return maxArea;
}
