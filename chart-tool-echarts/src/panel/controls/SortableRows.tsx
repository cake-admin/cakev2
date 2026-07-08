import type { ReactNode } from 'react';
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface SortableRowsProps {
  ids: string[];
  onReorder: (ids: string[]) => void;
  children: (id: string, dragHandle: ReactNode) => ReactNode;
}

function Row({
  id,
  render,
}: {
  id: string;
  render: (id: string, handle: ReactNode) => ReactNode;
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.6 : 1,
  };
  const handle = (
    <button type="button" className="drag-handle" aria-label="Drag to reorder" {...attributes} {...listeners}>
      ⠿
    </button>
  );
  return (
    <div ref={setNodeRef} style={style} className="data-row">
      {render(id, handle)}
    </div>
  );
}

/** Generic dnd-kit vertical sortable list keyed by stable string ids. */
export function SortableRows({ ids, onReorder, children }: SortableRowsProps) {
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 4 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = ids.indexOf(String(active.id));
      const newIndex = ids.indexOf(String(over.id));
      if (oldIndex !== -1 && newIndex !== -1) onReorder(arrayMove(ids, oldIndex, newIndex));
    }
  };

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={ids} strategy={verticalListSortingStrategy}>
        {ids.map((id) => (
          <Row key={id} id={id} render={children} />
        ))}
      </SortableContext>
    </DndContext>
  );
}
