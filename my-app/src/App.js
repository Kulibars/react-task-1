import logo from './logo.svg';
import './App.css';

// декларативный
export function App() {
	// императивный
	const app = document.createElement('div');
	app.className = 'App-header';
	const header = document.createElement('header');
	header.className = 'App-header';
	const logoApp = document.createElement('img');
	logoApp.className = 'App-logo';
	logoApp.alt = 'logo';
	logoApp.src = logo;
	const paragraph = document.createElement('p');
	paragraph.textContent = 'Edit src/App.js and save to reload.';
	const appLink = document.createElement('a');
	appLink.className = 'App-link';
	appLink.href = 'https://reactjs.org';
	appLink.target = '_blank';
	appLink.rel = 'noopener noreferrer';
	appLink.textContent = 'Learn React';

	const currentyear = new Date().getFullYear();
	const currentYearHTML = document.createElement('div');
	currentYearHTML.textContent = currentyear;

	app.append(header);
	header.append(logoApp);
	header.append(paragraph);
	header.append(appLink);
	header.append(currentYearHTML);

	return document.body.append(app);
}

/* <div className="App">
<header className="App-header">
	<img src={logo} className="App-logo" alt="logo" />
	<p>
		Edit <code>src/App.js</code> and save to reload.
	</p>
	<a
		className="App-link"
		href="https://reactjs.org"
		target="_blank"
		rel="noopener noreferrer"
	>
		Learn React
	</a>
</header>
</div> */
