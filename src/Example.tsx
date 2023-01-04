import type { FC } from 'react';
import root from 'react-shadow';
import { Blender } from './Blender';
import { Box } from './Color';

export const Container: FC = () => {
  return (
    <>
      <section>
        <Blender id="Framed-Blender" />
      </section>
      <section>
        <root.div className="quote">
          <div>
            <div style={{ overflow: 'hidden', clear: 'both' }}>
              <Blender id="Framed-Blender" />
            </div>
            <div style={{ overflow: 'hidden', clear: 'both' }}>
              <Box name="Dark" color="#000" />
              <Box name="Blue" color="#00f" />
              <Box name="Green" color="#0f0" />
              <Box name="Red" color="#f00" />
              <Box name="Light" color="#fff" />
            </div>
          </div>
        </root.div>
      </section>
    </>
  );
};
