import React, { Component } from 'react';
import { Stage, Layer, Text } from 'react-konva';

class KonvaExample extends Component {

  render() {
    const {
      stageSize,
      sampleText,
    } = this.props;

    return (
      <div>
        <Stage width={stageSize.width} height={stageSize.height}>
          <Layer>
            <Text text={sampleText} />
          </Layer>
        </Stage>
      </div>
    );
  }
}

KonvaExample.defaultProps = {
  stageSize: {
    width: 640,
    height: 480,
  },
  sampleText: 'Example enzyme + jest test'
};

export default KonvaExample;
