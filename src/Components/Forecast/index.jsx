import st from './styles.module.scss';
import snow from '../../images/snow.svg';
import rain from '../../images/rain.svg';
import sun from '../../images/sun.svg';
import clouds from '../../images/clouds.svg';
import heat from '../../images/temperature-heat.svg';
import cold from '../../images/temperature-cold.svg';
import wind from '../../images/wind.svg';
import CurretWeatherPosition from '../CurrentWeatherPosition';
import OneDayPosition from '../OneDayPosition';

export default function Forecast({ forecast, toggler, geo }) {
	// Для назначения нужного класса
	let nameAfterGeo = '';
	let nameAfterSearch = '';

	// вытаскиваем данные для текущего прогноза
	const positions = {};

	if (Object.keys(forecast).length !== 0) {
		positions.max = (forecast.list[0].main.temp_max - 273.15).toFixed(1);
		positions.min = (forecast.list[0].main.temp_min - 273.15).toFixed(1);
		positions.humidity = forecast.list[0].main.humidity;
		positions.clouds = forecast.list[0].clouds.all;
		positions.wind = forecast.list[0].wind.speed.toFixed(1);
	}

	if (geo && Object.keys(forecast).length !== 0) {
		nameAfterGeo = st.weather;
	} else {
		nameAfterGeo = st.none;
	}

	if (!geo && Object.keys(forecast).length !== 0 && !toggler) {
		nameAfterSearch = st.oneDay;
	} else if (!geo && Object.keys(forecast).length !== 0 && toggler) {
		nameAfterSearch = st.fiveDays;
	} else {
		nameAfterSearch = st.none;
	}

	console.log(forecast.list);

	return (
		<div className={st.info}>
			<h3 className={st.details}>Weather Details...</h3>
			<h2 className={st.title}>
				{Object.keys(forecast).length === 0
					? 'Information will be loaded here'
					: geo
					? 'WEATHER FORECAST'
					: toggler
					? 'FIVE DAY FORECAST'
					: 'DAILY FORECAST'}
			</h2>
			<div
				className={
					Object.keys(forecast).length === 0 ? st.imagesBeforeAnswer : st.none
				}>
				<img src={snow} alt="*" />
				<img src={rain} alt="*" />
				<img src={sun} alt="*" />
				<img src={clouds} alt="*" />
			</div>
			<div className={nameAfterGeo}>
				<CurretWeatherPosition
					txt="Temp max"
					positions={positions.max}
					mark="&deg;"
					src={heat}
				/>
				<CurretWeatherPosition
					txt="Temp min"
					positions={positions.min}
					mark="&deg;"
					src={cold}
				/>
				<CurretWeatherPosition
					txt="Humidity"
					positions={positions.humidity}
					mark="%"
					src={rain}
				/>
				<CurretWeatherPosition
					txt="Cloudy"
					positions={positions.clouds}
					mark="%"
					src={clouds}
				/>
				<CurretWeatherPosition
					txt="Wind"
					positions={positions.wind}
					mark="m/s"
					src={wind}
				/>
			</div>
			<div className={nameAfterSearch}>
				<OneDayPosition forecast={forecast} toggler={toggler} />
			</div>
		</div>
	);
}
