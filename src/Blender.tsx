import { CSSProperties, FC, useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { ColorProps } from './Color';

import { ItemTypes } from './ItemTypes';
import blendColors from './utils';

export const Blender: FC<{ id: string; blenderStyles?: CSSProperties }> = ({
  id,
  blenderStyles,
}) => {
  const [blendedColor, setBlendedColor] = useState('#222');

  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      accept: [ItemTypes.BOX, ItemTypes.BLENDER],
      drop: (item: ColorProps) => {
        setBlendedColor(blendColors(blendedColor, item.color));
        return { name: id };
      },
      collect: (monitor) => {
        return {
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
        };
      },
    }),
    [blendedColor]
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, drag] = useDrag(
    () => ({
      type: ItemTypes.BLENDER,
      item: { name: id, color: blendedColor },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [blendedColor, id]
  );

  const isDroppable = canDrop && isOver;
  let textContent = 'Drag a color or a blender here';
  if (isDroppable) {
    textContent = 'Release to drop';
  }

  return (
    <div ref={drop}>
      <div
        ref={drag}
        style={{ ...blenderStyles, backgroundColor: blendedColor }}
        className="blender"
      >
        {textContent}
      </div>
    </div>
  );
};
