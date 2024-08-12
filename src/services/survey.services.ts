///surveys/enabled
import { http } from "@/helpers/http";
import { type Survey } from "@/types/survey.types";

export const _Surveys = async (): Promise<Survey[]> => {
  let token = localStorage.getItem("token") as string;
  try {
    let response = await http(token).get(`/surveys/enabled`);
    let data = response.data.data.map((survey: any) => {
      return {
        id: survey.Id,
        title: survey.Title,
        description: survey.Description,
        startDate: survey.StartDate,
        endDate: survey.EndDate,
        periodId: survey.PeriodId,
        periodName: survey.PeriodName,
        isEnabled: survey.IsEnabled,
      };
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const _Survey = async (surveyId: string): Promise<Survey> => {
  let token = localStorage.getItem("token") as string;
  try {
    let response = await http(token).get(`/surveys/survey/${surveyId}`);
    let survey = response.data.data;
    return {
      id: survey.Id,
      title: survey.Title,
      description: survey.Description,
    };
  } catch (error) {
    throw error;
  }
};

export const _Sections = async (surveyId: string): Promise<any> => {
  let token = localStorage.getItem("token") as string;
  try {
    let response = await http(token).get(`/surveys/sections/${surveyId}`);
    
    return response.data.data;
  } catch (error) {
    throw error;
  }
};
