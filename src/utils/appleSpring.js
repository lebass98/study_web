/**
 * Apple Design Principles #2, #5, #6, #9:
 * Physics, Rubber-banding, Velocity Handoff & Momentum Projection
 */

/**
 * Apple Principle #9: Rubber-banding (Soft Boundaries)
 * Resists progressively past edge boundaries instead of hard-stopping.
 */
export function rubberband(overshoot, dimension, constant = 0.55) {
  if (dimension === 0) return 0;
  return (overshoot * dimension * constant) / (dimension + constant * Math.abs(overshoot));
}

/**
 * Apple Principle #6: Momentum Projection
 * Projects final resting endpoint from gesture release velocity using exponential decay.
 * decelerationRate ≈ 0.998 for normal scroll/swipe feel
 */
export function projectMomentum(initialVelocity /* px/s */, decelerationRate = 0.998) {
  return (initialVelocity / 1000) * decelerationRate / (1 - decelerationRate);
}

/**
 * Apple Principle #5: Relative Spring Velocity Calculation
 * Computes initial spring velocity normalized by remaining distance to target.
 */
export function calculateRelativeVelocity(gestureVelocity, currentValue, targetValue) {
  const distance = Math.abs(targetValue - currentValue);
  if (distance < 0.001) return 0;
  return gestureVelocity / distance;
}
