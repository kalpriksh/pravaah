import { ViewportPortal } from '@xyflow/react';
 
export default function TestCustomComponent() {
  return (
    <ViewportPortal>
      <div
        style={{ transform: 'translate(100px, 100px)', position: 'absolute' }}
      >
        This div is positioned at [100, 100] on the flow.
      </div>
    </ViewportPortal>
  );
}