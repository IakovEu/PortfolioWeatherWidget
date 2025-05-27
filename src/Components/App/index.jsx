import { useState } from 'react';
import st from './styles.module.scss';
import Location from '../Location';
import RightSide from '../RightSide';

export default function App() {
	// Отслеживаем изменение прогноза по городу / по гео
	const [forecast, setForecast] = useState({});

	// Запрос по гео / по вводу
	const [geo, setGeo] = useState(true);

	// Тумблер запроса на 1 или 5 дней
	const [toggler, setToggler] = useState(false);

	// Переключение тумблера
	const checkboxChange = (event) => {
		setToggler(event.target.checked);
	};

	// Запрашиваем широту и долготу
	const getCurrentPosition = () => {
		const err = () => {
			alert('allow access to geolocation!');
		};

		const success = (position) => {
			requestByCoords(position.coords.latitude, position.coords.longitude);
			setGeo(true);
		};

		navigator.geolocation.getCurrentPosition(success, err);
	};

	// Запрашиваем данные по широте и долготе
	const requestByCoords = (lat, long) => {
		fetch(
			`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=38d3d091d3b6b35d01940b96fbd4276f`
		)
			.then((response) => {
				if (!response.ok) {
					throw Error(`is not ok: ` + response.status);
				}
				return response.json();
			})
			.then((data) => setForecast(data))
			.catch((error) => console.error('Error:', error));
	};

	//Запрашиваем место
	const getInputValue = () => {
		const area = document.querySelector('input');

		if (typeof area.value === 'string') {
			requestByCity(area.value);
			setGeo(false);
			area.value = '';
		}
	};

	// Запрашиваем данные по месту
	const requestByCity = (city) => {
		fetch(
			`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=38d3d091d3b6b35d01940b96fbd4276f`
		)
			.then((response) => {
				if (!response.ok) {
					throw Error(`is not ok: ` + response.status);
				}
				return response.json();
			})
			.then((data) => setForecast(data))
			.catch((error) => {
				console.error('Error:', error);
				return setForecast({});
			});
	};

	return (
		<div className={st.background}>
			<Location data={forecast} onClick={getCurrentPosition} />
			<RightSide
				data={forecast}
				onClick={getInputValue}
				onChange={checkboxChange}
				toggler={toggler}
				geo={geo}
			/>
		</div>
	);
}
