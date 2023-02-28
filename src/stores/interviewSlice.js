import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	questionnaire :{
		gender: '',
		year: 0,
		month: 0,
		day: 0,
		questionFirst: '',
		questionSecond: '',
		questionThird: '',
		consultationContent: '',
	}
};

const interviewSlice = createSlice({
	name: "interview",
	initialState,
	reducers: {
		setGender: (state, action) => {
			state.questionnaire.gender = action.payload
		},
		setYear: (state, action) => {
			state.questionnaire.year = action.payload
		},
		setMonth: (state, action) => {
			state.questionnaire.month = action.payload
		},
		setDay: (state, action) => {
			state.questionnaire.day = action.payload
		},
		setQuestionFirst: (state, action) => {
			state.questionnaire.questionFirst = action.payload
		},
		setQuestionSecond: (state, action) => {
			state.questionnaire.questionSecond = action.payload
		},
		setQuestionThird: (state, action) => {
			state.questionnaire.questionThird = action.payload
		},
		setConsultationContent: (state, action) => {
			state.questionnaire.consultationContent = action.payload
		}
	}
})

export const {
	setGender,
	setYear,
	setMonth,
	setDay,
	setQuestionFirst,
	setQuestionSecond,
	setQuestionThird,
	setConsultationContent
} = interviewSlice.actions;


export default interviewSlice.reducer;
