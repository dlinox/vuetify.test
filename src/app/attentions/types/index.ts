// person_id: "",
// type_attention_id: null,
// report_number: "",
// description: "",
// derivate_to: [],  person_id: "",
// type_attention_id: null,
// report_number: "",
// description: "",
// derivate_to: [],

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

export { type Attention , AttentionDefault };
