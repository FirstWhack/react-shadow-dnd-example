import type { CSSProperties, FC } from 'react';
import root from 'react-shadow';
import { Blender } from './Blender';
import { Box } from './Color';
import './styles.css';

// in theory this is some kind of string received at runtime
// styles for the encapsulated shadowRoot would never be available at compile time
const shadowBlenderStyles: CSSProperties = {
  // important to note - rem will be the same value in shadow/light dom
  height: '14rem',
  width: '14rem',
  marginBottom: '1.5rem',
  color: 'white',
  border: '5px solid purple',
  padding: '1rem',
  fontSize: '1rem',
};

export const Container: FC = () => {
  return (
    <>
      <section className="blender-container">
        <Blender id="Framed-Blender" />
      </section>
      <section>
        <root.div className="quote">
          <div className="blender-container">
            <div style={{ overflow: 'hidden', clear: 'both' }}>
              <Blender id="Framed-Blender" blenderStyles={shadowBlenderStyles} />
            </div>
          </div>
        </root.div>
      </section>
      <section>
        <div style={{ overflow: 'hidden', clear: 'both' }}>
          <Box name="Dark" color="#000" />
          <Box name="Blue" color="#00f" />
          <Box name="Green" color="#0f0" />
          <Box name="Red" color="#f00" />
          <Box name="Light" color="#fff" />
        </div>
      </section>
    </>
  );
};
