type OptionList = string[];

export interface AnswerOptions {
  A: string;
  B: string;
  C: string;
  D: string;
  [key: string]: string;
}

export interface Question {
  question: string; 
  options: OptionList;
  answer: string;
}

export interface Quiz {
  title: string;
  icon: string;
  questions: Question[];
}

export function findCorrectOption(options: OptionList, correctAnswer: string): number {
  return options.findIndex((option) => option === correctAnswer);
}

export function handleOptionSelection(
  selectedOption: string, 
  setSelectedAnswer: React.Dispatch<React.SetStateAction<string>>, 
  setOptions: React.Dispatch<React.SetStateAction<AnswerOptions>>
): void {
  setSelectedAnswer(selectedOption);

  setOptions(() => ({
    A: "",
    B: "",
    C: "",
    D: "",
    [selectedOption]: "selected",
  }));
}

export async function fetchQuizData(url: string): Promise<any> {
  try {
    const response = await fetch(url, { 
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    return { error: error instanceof Error ? error.message : 'An unknown error occurred.' };
  }
}

export function filterQuizData(quizData: Quiz[], searchTitle: string): Quiz[] {
  return quizData.filter((quiz) => quiz.title.toLowerCase() === searchTitle.toLowerCase());
}
