function extend<First, Second>(first: First, second: Second): First & Second {
  const result: Partial<First & Second> = {};
}
