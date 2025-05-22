import st from './styles.module.scss';
import Location from '../Location';
import RightSide from '../RightSide';

export default function App() {
	return (
  <div className={st.background}>
    <Location/>
    <RightSide/>
  </div>
  );
}
