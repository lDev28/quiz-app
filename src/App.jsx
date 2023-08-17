import { useEffect, useState } from 'react'
import './App.scss'
import Quiz from './components/Quiz'
import Quizes from './Quizes'

function App() {
	const [quiz, setQuiz] = useState(Quizes[0])
	const [hidden, setHidden] = useState('')

	const hide = (hidden) => {
		setHidden(hidden)
	}

	const [title, setTitle] = useState('')

	return (
		<>
			<div className={`quizes ${hidden}`}>
				{/* <div className='quizes'> */}
				<h1>Check your quiz</h1>
				<button
					onClick={() => {
						setQuiz(Quizes[0])
						setHidden('hidden')
						setTitle('programming')
					}}
				>
					programming
				</button>
				<br />
				<button
					onClick={() => {
						setQuiz(Quizes[1])
						setHidden('hidden')
						setTitle('math')
					}}
				>
					math
				</button>
				<br />
				<button
					onClick={() => {
						setQuiz(Quizes[2])
						setHidden('hidden')
						setTitle('english')
					}}
				>
					english
				</button>
			</div>

			<Quiz quiz={quiz} hide={hide} title={title} />
		</>
	)
}

export default App
