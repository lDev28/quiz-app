import { useEffect, useState } from 'react'
import './Quiz.scss'
// const Quiz = ({language, quiz}) => {}
const Quiz = ({ quiz, hide, title }) => {
	const [step, setStep] = useState(0)
	const road = ((100 / quiz.length) * step).toFixed(2).toString()
	const [correctAnswers, setCorrectAnswers] = useState(0)

	const goBack = () => {
		setCorrectAnswers(0)
		setStep(0)
		hide('')
	}

	return quiz.length > step ? (
		<div className='quiz-overlay'>
			<h1>{title}</h1>
			<div className='road__block'>
				<div className='road' style={{ width: road + '%' }}></div>
			</div>
			<div className='quiz'>
				<h2 className='question'>{quiz[step].question}</h2>
				<ul>
					{quiz[step].answers.map((a, index) => (
						<li
							key={index}
							className='answers'
							onClick={() => {
								setStep(step + 1)
								if (quiz[step].correct == index) {
									setCorrectAnswers(correctAnswers + 1)
								}
							}}
						>
							{a}
						</li>
					))}
				</ul>
			</div>
		</div>
	) : (
		<div className='quiz-overlay'>
			<h1>Result</h1>
			<div className='quiz'>
				<p>
					true {correctAnswers} answers from {quiz.length} questions
				</p>
				<button className='btn' onClick={goBack}>
					start again
				</button>
			</div>
		</div>
	)
}

export default Quiz
