import { useSelector, useDispatch } from 'react-redux';

import { signOut } from '../../store/userSlice';

import Button from '../../components/button/button.component';
import LineChart from '../../components/line-chart/line-chart.component';

import data from './data.json';

import './chart-page.styles.css';

const ChartPage = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.userName);

  const handleClick = () => dispatch(signOut());

  return (
    <div className='chart-page'>
      <h2 className='chart-page-header'>{userName}</h2>
      <LineChart label='Patients 2022' data={data} />
      <div className='chart-page-button'>
        <Button label='Sign Out' className='chart-page-button' onClick={handleClick} />
      </div>
    </div>
  );
};

export default ChartPage;
