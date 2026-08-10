/**
 * Apple Design Principle #13: Multimodal Feedback (Web Haptics)
 * Triggers subtle physical vibration on interactive moments (button press, snap, commit).
 */
export function triggerHaptic(type = 'light') {
  if (typeof window === 'undefined' || !('vibrate' in navigator)) return;

  try {
    switch (type) {
      case 'light':
        navigator.vibrate(8);
        break;
      case 'medium':
        navigator.vibrate(15);
        break;
      case 'heavy':
        navigator.vibrate(25);
        break;
      case 'success':
        navigator.vibrate([10, 30, 15]);
        break;
      case 'error':
        navigator.vibrate([20, 40, 20, 40, 20]);
        break;
      case 'snap':
        navigator.vibrate(12);
        break;
      default:
        navigator.vibrate(10);
    }
  } catch (e) {
    // Ignore unsupported browser security restrictions
  }
}
