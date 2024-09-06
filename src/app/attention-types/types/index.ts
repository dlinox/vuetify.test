interface TypeAtention {
  id: number | null;
  name: string;
  status: boolean;
}

const TypeAtentionDefaultValues: TypeAtention = {
  id: null,
  name: "",
  status: true,
};

export { type TypeAtention, TypeAtentionDefaultValues };
