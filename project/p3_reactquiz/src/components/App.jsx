import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import QuestionList from './quiz/QuestionList.jsx';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			questions : [
				{
					id : 1,
					text : 'What is your name?',
					choices : [
						{
							id : 'a',
							text : 'Super man'
						},
						{
							id : 'b',
							text : 'Bat man'
						},
						{
							id : 'c',
							text : 'Flash'
						},
						{
							id : 'd',
							text : 'Iron man'
						}
					],
					correct : 'a'
				},
				{
					id : 2,
					text : 'What is your brother name?',
					choices : [
						{
							id : 'a',
							text : 'Steve'
						},
						{
							id : 'b',
							text : 'Ted'
						},
						{
							id : 'c',
							text : 'Tom'
						},
						{
							id : 'd',
							text : 'Bobby'
						}
					],
					correct : 'b'
				},
				{
					id : 3,
					text : 'What is your father name?',
					choices : [
						{
							id : 'a',
							text : 'Mikel'
						},
						{
							id : 'b',
							text : 'Bob'
						},
						{
							id : 'c',
							text : 'John'
						},
						{
							id : 'd',
							text : 'Tom'
						}
					],
					correct : 'c'
				},{
					id : 4,
					text : 'What is your sister name?',
					choices : [
						{
							id : 'a',
							text : 'Sara'
						},
						{
							id : 'b',
							text : 'Sue'
						},
						{
							id : 'c',
							text : 'Jane'
						},
						{
							id : 'd',
							text : 'Donna'
						}
					],
					correct : 'd'
				}
			],
			score : 0,
			current : 1
		}
	}
	render(){
		return(
			<div>
				<QuestionList {...this.state}/>
			</div>
		)
	}
}

export default App