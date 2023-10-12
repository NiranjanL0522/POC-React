import { Button, Card } from '@mui/material';
import { useState, useContext } from 'react';
import { Responsive, WidthProvider } from "react-grid-layout";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  LineChart,
  Line,
  CartesianGrid,
  AreaChart,
  Area,
  ScatterChart,
  Scatter,
  ZAxis
} from 'recharts';
import { Employee } from './Employee';
import { PocContext } from '../store/contextAPI';

const ResponsiveGridLayout = WidthProvider(Responsive);

export const Dashboard = () => {
  const [items, setItems] = useState([
    { i: "a", x: 0, y: 0, w: 6, h: 2 },
    { i: "b", x: 6, y: 0, w: 6, h: 2 },
    { i: "c", x: 0, y: 2, w: 6, h: 2 },
    { i: "d", x: 6, y: 2, w: 6, h: 2 }
  ]);
  const [count, setCount] = useState(0);
  const { employeeDetails } = useContext(PocContext);

  const addNewLayout = (): void => {
    if (items.length % 2 === 0) {
      const item = { i: `n${count}`, x: 0, y: (items.length / 2) * 2 + 0, w: 6, h: 2 }
      setCount(count + 1);
      setItems([...items, item])
    } else {
      const item = { i: `n${count}`, x: 6, y: (items.length / 2) * 2 + 0, w: 6, h: 2 }
      setCount(count + 1);
      setItems([...items, item])
    }
  };

  return (
    <div>
      Dashboard <br />
      <Employee />
      <Button variant="contained" id="addGraph" onClick={addNewLayout} data-testid='add'>ADD Graph</Button>
      <ResponsiveGridLayout
        className="layout"
        layouts={{ lg: items, md: items, sm: items }}
        breakpoints={{ lg: 1200, md: 996, sm: 768 }}
        cols={{ lg: 12, md: 10, sm: 6 }}
        resizeHandles={["se"]}
      >
        {items?.map((item, index) => {
          return (
            <Card
              key={item.i}
              data-grid={{ x: item.x, y: item.y, w: item.w, h: item.h }}
              data-testid='cards'
            >
              {index % 4 === 1 && (
                <div>
                  <div>Bar Chart</div>
                  <BarChart width={500} height={280} data={employeeDetails}>
                    <XAxis dataKey="name" fontSize={10} />
                    <YAxis fontSize={10} />
                    <Bar dataKey="shortSal" barSize={30} fill="#8884d8" />
                  </BarChart>
                </div>
              )}
              {index % 4 === 2 && (
                <div>
                  <div>Line Chart</div>
                  <LineChart width={500} height={280} data={employeeDetails}>
                    <Line type="monotone" dataKey="shortSal" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" fontSize={10} />
                    <YAxis fontSize={10} />
                  </LineChart>
                </div>
              )}
              {index % 4 === 3 && (
                <div>
                  <div>Scatter Chart</div>
                  <ScatterChart width={500} height={270} data={employeeDetails}>
                    <Scatter dataKey={"name"} />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" fontSize={10} />
                    <YAxis fontSize={10} dataKey={"shortSal"} />
                    <ZAxis dataKey={"salary"} />
                  </ScatterChart>
                </div>
              )}
              {index % 4 === 0 && (
                <div>
                  <div>Area Chart</div>
                  <AreaChart width={500} height={270} data={employeeDetails}>
                    <Area type="monotone" dataKey="shortSal" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" fontSize={10} />
                    <YAxis fontSize={10} />
                  </AreaChart>
                </div>
              )}
            </Card>
          );
        })}

      </ResponsiveGridLayout>
    </div>
  )
}