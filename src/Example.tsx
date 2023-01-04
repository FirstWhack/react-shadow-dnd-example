import type { FC } from 'react';
import root from 'react-shadow';
import { Blender } from './Blender';
import { Box } from './Color';
import './styles.css';
// get file as string without ejecting from CRA
// in theory this is some kind of string received at runtime
// eslint-disable-next-line import/no-webpack-loader-syntax
import shadowStyles from '!!raw-loader!./Shadow.module.css';

export const Container: FC = () => {
  return (
    <>
      <section className="blender-container">
        <Blender id="Framed-Blender" />
      </section>
      <section>
        <root.div className="quote">
          <style type="text/css">{shadowStyles}</style>
          <div className="blender-container">
            <div style={{ overflow: 'hidden', clear: 'both' }}>
              <Blender id="Framed-Blender" />
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
