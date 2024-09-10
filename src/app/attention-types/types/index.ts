interface TypeAtention {
  id: number | null;
  type: string | null;
  name: string;
  status: boolean;
}

const TypeAtentionDefaultValues: TypeAtention = {
  id: null,
  type: null,
  name: "",
  status: true,
};

export { type TypeAtention, TypeAtentionDefaultValues };
