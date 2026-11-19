export const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
export const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
export const finePointerMotion = window.matchMedia(
  '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)'
);

interface TrackPointerOptions {
  when?: MediaQueryList;
  onLeave?: () => void;
}

export function trackPointer(
  target: HTMLElement,
  onMove: (x: number, y: number) => void,
  { when = finePointer, onLeave }: TrackPointerOptions = {}
) {
  let frame = 0;
  let pointerX = 0;
  let pointerY = 0;

  const flush = () => {
    frame = 0;
    onMove(pointerX, pointerY);
  };

  target.addEventListener('pointermove', (event) => {
    if (!when.matches) return;
    pointerX = event.clientX;
    pointerY = event.clientY;
    if (!frame) frame = requestAnimationFrame(flush);
  });

  if (onLeave) {
    target.addEventListener('pointerleave', () => {
      cancelAnimationFrame(frame);
      frame = 0;
      onLeave();
    });
  }
}

export function setPointerOrigin(element: HTMLElement, x: number, y: number) {
  const rect = element.getBoundingClientRect();
  element.style.setProperty('--mx', `${x - rect.left}px`);
  element.style.setProperty('--my', `${y - rect.top}px`);
}
