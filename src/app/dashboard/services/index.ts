import { http } from "@/helpers/http";

//attentions-by-month/{year}
export const getAttentionsByMonth = async (year: number): Promise<any[]> => {
  try {
    const token = localStorage.getItem("token") as string;
    let response = await http(token).get(
      `/reports/attentions-by-month/${year}`
    );

    let series = [
      {
        name: "Estudiantes",
        data: response.data,
      },
    ];

    return series;
  } catch (error) {
    return [];
  }
};

//attentions-by-month-type

export const getAttentionsByMonthType = async (
  year: number
): Promise<any[]> => {
  try {
    const token = localStorage.getItem("token") as string;
    let response = await http(token).get(
      `/reports/attentions-by-month-type/${year}`
    );

    let series = [
      {
        name: "Estudiantes",
        data: response.data["001"],
      },
      {
        name: "Docentes",
        data: response.data["002"],
      },
      {
        name: "Administrativos",
        data: response.data["003"],
      },
    ];

    return series;
  } catch (error) {
    return [];
  }
};
