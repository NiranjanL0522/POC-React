import { Button, Card } from '@mui/material';
import { useState } from 'react';
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
import { Salaries } from '../data';

const ResponsiveGridLayout = WidthProvider(Responsive);

export const Dashboard = () => {
  const [items, setItems] = useState([
    { i: "a", x: 0, y: 0, w: 6, h: 2 },
    { i: "b", x: 6, y: 0, w: 6, h: 2 },
    { i: "c", x: 0, y: 2, w: 6, h: 2 },
    { i: "d", x: 6, y: 2, w: 6, h: 2 }
  ]);
  const [count, setCount] = useState(0);

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
  }
  return (
    <div>
      Dashboard <br />
      <Button variant="contained" onClick={addNewLayout} data-testid='add'>ADD</Button>
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
              {index % 4 === 1 && (<BarChart width={500} height={300} data={Salaries}>
                <XAxis dataKey="name" fontSize={10} />
                <YAxis fontSize={10} />
                <Bar dataKey="ya" barSize={30} fill="#8884d8" />
              </BarChart>)}
              {index % 4 === 2 && (
                <LineChart width={500} height={300} data={Salaries}>
                  <Line type="monotone" dataKey="ya" stroke="#8884d8" />
                  <CartesianGrid stroke="#ccc" />
                  <XAxis dataKey="name" fontSize={10} />
                  <YAxis fontSize={10} />
                </LineChart>
              )}
              {index % 4 === 3 && (
                <ScatterChart width={300} height={300} data={Salaries}>
                  <Scatter dataKey={"name"} />
                  <CartesianGrid stroke="#ccc" />
                  <XAxis dataKey="name" fontSize={10} />
                  <YAxis fontSize={10} dataKey={"ya"} />
                  <ZAxis dataKey={"salary"} />
                </ScatterChart>
              )}
              {index % 4 === 0 && (
                <AreaChart width={300} height={300} data={Salaries}>
                  <Area type="monotone" dataKey="ya" stroke="#8884d8" />
                  <CartesianGrid stroke="#ccc" />
                  <XAxis dataKey="name" fontSize={10} />
                  <YAxis fontSize={10} />
                </AreaChart>
              )}
            </Card>
          );
        })}
        
      </ResponsiveGridLayout>
    </div>
  )
}