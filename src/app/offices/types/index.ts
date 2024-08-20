interface Office {
  id: number | null;
  name: string;
  status: boolean;
}

const OfficeDefaultValues: Office = {
  id: null,
  name: "",
  status: true,
};

export { type Office, OfficeDefaultValues };
