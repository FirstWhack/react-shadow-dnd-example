import type { CSSProperties, FC } from 'react';
import { useDrag } from 'react-dnd';

import { ItemTypes } from './ItemTypes';

const style: CSSProperties = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
};

export interface ColorProps {
  name: string;
  color: string;
}

export const Box: FC<ColorProps> = ({ name, color }) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.BOX,
      item: { name, color },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [name, color]
  );
  const opacity = isDragging ? 0.4 : 1;

  return (
    <div ref={drag} style={{ ...style, opacity }}>
      {name}
    </div>
  );
};
