

interface Attention {
  id: number | null;
  person_id: number | null;
  type_attention_id: number | null;
  report_number: string;
  description: string;
  derivate_to: number[];
}

const AttentionDefault: Attention = {
  id: null,
  person_id: null,
  type_attention_id: null,
  report_number: "",
  description: "",
  derivate_to: [],
};


interface AttentionReport {
  id: number;
  report_number: string;
  person_id: number;
  person_type: string;
  person_name: string;
  person_document: string;
  person_code: string;
  unit_name: string;
  unit_code: string;
  type_attention_id: number;
  type_attention_name: string;
  user_id: number;
  user_office_id: number;
  created_at: string;
}



export { type Attention , AttentionDefault, type AttentionReport };
