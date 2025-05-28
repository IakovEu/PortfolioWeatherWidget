import st from './styles.module.scss';
import Snow from '../../images/snow.svg';
import Rain from '../../images/rain.svg';
import Clear from '../../images/sun.svg';
import Clouds from '../../images/clouds.svg';

// Переиспользуемый компонент в основном компоненте
const MyComponent = ({ src, time, weather, temp }) => {
	return (
		<div className={st.position}>
			<div className={st.weather}>
				<img className={st.icon} src={src} alt="*" />
				<div className={st.time}>
					<p>{time}</p>
					<p>{weather}</p>
				</div>
			</div>
			<p className={st.temperature}>{temp} &deg;</p>
		</div>
	);
};

export default function DayPosition({ forecast, toggler }) {
	const srcArr = { Snow, Rain, Clear, Clouds };
	return (
		<div className={st.block}>
			{forecast &&
				forecast.list &&
				!toggler &&
				forecast.list.map(
					(el, ind) =>
						forecast.list[ind].dt_txt.split(' ')[0] ===
							forecast.list[0].dt_txt.split(' ')[0] && (
							<MyComponent
								key={ind}
								src={srcArr[el.weather[0].main]}
								time={el.dt_txt.slice(10, 16)}
								weather={el.weather[0].main}
								temp={Math.round(el.main.temp - 273.15)}
							/>
						)
				)}
			{forecast &&
				forecast.list &&
				toggler &&
				forecast.list.map((el, ind) => (
					<MyComponent
						key={ind}
						src={srcArr[el.weather[0].main]}
						time={
							el.dt_txt
								.split(' ')[0]
								.split('-')
								.reverse()
								.slice(0, 2)
								.join('.') +
							' ' +
							el.dt_txt.slice(10, 16)
						}
						weather={el.weather[0].main}
						temp={Math.round(el.main.temp - 273.15)}
					/>
				))}
		</div>
	);
}
