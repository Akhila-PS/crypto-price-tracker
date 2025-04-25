import { Sparklines, SparklinesLine } from 'react-sparklines';

const Chart = ({ data }) => {
  return (
    <div style={{ width: '100px', height: '40px' }}>
      <Sparklines data={data} width={100} height={40}>
        <SparklinesLine color="#00bcd4" />
      </Sparklines>
    </div>
  );
};

export default Chart;