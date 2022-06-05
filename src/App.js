import './App.css';
import './appStyles.css'
import NAMES from './components/data.json'
import { useState } from 'react';
import { useTransition } from 'react';

// import { Form } from './components/Form';
// import styles from './appStyles.module.css'
// import { Greet } from './components/Greet';
// import { Message } from './components/Message';
// import { ClickHandler } from './components/ClickHandler';
// import { ParentComponent } from './components/ParentComponent';
// import { UserGreeting } from './components/UserGreeting';
// import { NameList } from './components/NameList';
// import { Stylesheet } from './components/Stylesheet';
// import { Inline } from './components/Inline';
// import { PostList } from './components/PostList';
// import { PostForm } from './components/PostForm';



function App() { 
	const [query, setQuery] = useState('')
	const [inputValue, setInputValue] = useState('')
	const [isPending, startTransition] = useTransition()


	const changeHandler = (event) => {
		setInputValue(event.target.value)
		startTransition(() => setQuery(event.target.value))
	}


	const filteredNames = NAMES.filter(item => {
		return item.first_name.includes(query) || item.last_name.includes(query)
	})

	

	return (
		<div className="App">
			<input type='text' value={inputValue} onChange={changeHandler} />
			{isPending && <p>Updating List...</p>}
			{
				filteredNames.map((item) => (
					<p key={item.id}>
						{item.first_name} {item.last_name}
					</p>
				))
			}




			{/* <Greet name="Bruce" heroName="Batman" />
			<Greet name="Clark" heroName="Superman">
				<button>Action</button>
			</Greet>
			<Greet name="Diana" heroName="Wonder Woman">
				<p>This is children props</p>
			</Greet>
			<Message />
			<ClickHandler />
			<ParentComponent />
			<UserGreeting />
			<NameList/>
			<Stylesheet/>
			<Inline/>
			<h1 className='error'>Error</h1>
			<h1 className={styles.success}>Success</h1> 
			<Form />
			<PostForm />
			<PostList /> */}

		</div>
	);
}

export default App;
