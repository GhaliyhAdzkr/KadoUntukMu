import { useState } from "react";
import questionList from "../data/flashcard-data.json";

function Flash() {
	const [currIndex, setCurrIndex] = useState(0);


	const nextQuestion = () => {
		if (currIndex < questionList.length - 1) {
			setCurrIndex(currIndex + 1);
		} else {
			setCurrIndex(0)
		}
	};

	const prevQuestion = () => {
		if (currIndex > 0) {
			setCurrIndex(currIndex - 1);
		} else {
			setCurrIndex(questionList.length-1)
		}
	};

	const currQuestion = questionList[currIndex];
	return (
		<>
			<div className="mx-15 flex flex-col gap-1 items-center bg-white rounded-2xl justify-center py-10">
				<p className="text-xl font-bold text-center pb-2">
					Mungkin sementara dan tidak selamanya, tapi mereka ada
				</p>
				<div id="question-box" className="w-full rounded block items-center">
					<div className="flex justify-between w-full px-10 items-center">
						<img src="src/assets/prev-button.png" className="size-10" onClick={prevQuestion} />
						<div>
							<div className="w-full px-5  rounded min-h-60 flex">
								<div className="text-xl text-justify whitespace-pre-line my-auto w-full">
									{" "}
									{currQuestion.question}
								</div>
							</div>
						</div>
						<img src="src/assets/next-button.png" className="size-10" onClick={nextQuestion} />
					</div>
				</div>
				<p className="text- text-gray-800 text-center pt-2">
					{currQuestion.answer} <br />
					{currIndex + 1} of {questionList.length}
				</p>
			</div>
		</>
	);
}

export default Flash;
