interface Survey {
  id: string;
  title: string;
  description: string | null;
  startDate?: string;
  endDate?: string;
  periodId?: string;
  periodName?: string;
  isEnabled?: string;
}

interface Question {
  id: string;
  title: string;
  description: string;
  help: string;
  order: number;
  structureType: string;
  dependsOn: string | null;
  parentId: string | null;
  idRequired: boolean;
  isEnabled?: boolean;
  surveyId?: string;
  children?: Question[];
  answer?: boolean;
}

interface Section {
  id: string;
  title: string;
  description: string;
  order: number;
  parentId: string | null;
  isRoot?: boolean;
  isEnabled?: boolean;
  surveyId?: string;
  questions?: Question[];
  children?: Section[];
}

export { type Survey, type Section, type Question };
