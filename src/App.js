import logo from './logo.svg';
import './index.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Welcome to My One-Page React Website</h1>
				<p>This is a fully working one-page website built with React.</p>
				<a className="App-link" rel="noopener noreferrer">
					Learn More
				</a>
			</header>
			<main>
				<section id="services" className="section">
					<h2>Our Services</h2>
					<ul>
						<li>Web Development</li>
						<li>Mobile App Development</li>
						<li>AI Integration</li>
					</ul>
				</section>
			</main>
		</div>
	);
}

export default App;
