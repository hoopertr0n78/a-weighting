import React from 'react';
import { HotTable } from '@handsontable/react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.data = [
      ['100', '100', '100', '100', '100', '100', '100', '100'],
      [-26.2, -16.1, -8.6, -3.2, 0, 1.2, 1, -1.1],
      ['=A1+A2', '=B1+B2', '=C1+C2', '=D1+D2', '=E1+E2', '=F1+F2', '=G1+G2', '=H1+H2'],
    ];
  }

  render() {
    return (
      <div id="hot-app">
        <HotTable
          data={this.data}
          colHeaders={['63', '125', '250', '500', '1k', '2k', '4k', '8k']}
          rowHeaders={['Input', 'A', 'Output']}
          formulas={[true]}
          width="600"
          height="300"
          licenseKey="non-commercial-and-evaluation"
        />
      </div>
    );
  }
}

export default App;
