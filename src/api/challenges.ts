import { axios } from './axios';

type FlashCardSet = {
  id: number;
  title: string;
  description: string;
  isActive: boolean;
  flashcardCount: string;
};

export type FlashCardUpload = {
  answer: string;
  question: string;
  flashCardId?: string;
  flashcardSet?: string;
};


type FlashCardResponse = {
  id: number;
  answer: string;
  question: string;
  flashcard_set: string;
};

type CounterType = {
  known: number;
  unknown: number
}

export const fetchFlashCardSets = async (): Promise<FlashCardSet[]> => {
  const flashCardSets = await axios.get<FlashCardSet[]>('flash-card-sets/');
  return flashCardSets.data;
};

export const fetchFlashCardSet = async (id: string): Promise<FlashCardSet> => {
    const flashCardSets = await axios.get<FlashCardSet>(`flash-card-sets/${id}/`);
    return flashCardSets.data;
};
  
export const createFlashCardSet = async (title: string): Promise<FlashCardSet> => {
  const response = await axios.post<FlashCardSet>(`flash-card-sets/`, { title, description: title, isActive: true });

  return response.data;
};

export const createFlashCard = async (flashcardSet: string, question: string, answer: string): Promise<FlashCardResponse> => {
  const response = await axios.post<FlashCardResponse>(`flash-card-sets/${flashcardSet}/flash-cards/`, {question , answer, flashcardSet});
  return response.data;
};


export const editFlashCard = async ({ question, answer, flashcardSet, flashCardId,}: FlashCardUpload): Promise<FlashCardResponse> => {
  const response = await axios.put<FlashCardResponse>(`flash-card-sets/${flashcardSet}/flash-cards/${flashCardId}/`, {question , answer, flashcardSet});
  return response.data;
};

export const fetchFlashCards = async (id: string): Promise<FlashCardResponse[]> => {
  const response = await axios.get<FlashCardResponse[]>(`flash-card-sets/${id}/flash-cards/`);
  return response.data;
};

export const markAsKnown = async (id: string, flashcardId: string, user: string): Promise<void> => {
   return axios.post(`flash-card-sets/${id}/flash-cards/${flashcardId}/mark-as-known/`, {user});
}

export const markAsUnknown = async (id: string, flashcardId: string, user: string): Promise<void> => {
  return axios.post(`flash-card-sets/${id}/flash-cards/${flashcardId}/mark-as-unknown/`, {user});
}

export const fetchCounters = async (id: string, user: string): Promise<CounterType> => {
  const response = await axios.get<CounterType>(`flash-card-sets/${id}/counters/`,{
    params: { user },
  });
  return response.data;
}