import { http } from "@/helpers/http";

export const getReportUsers = async () => {
  try {
    const token = localStorage.getItem("token") as string;
    const response = await http(token).get("/reports/items/users");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const exportPdfReportByUser = async (data: any) => {
  try {
    const token = localStorage.getItem("token") as string;

    const dataPdf = {
      data: data,
    };

    let response = await http(token).post("/pdf/report/users", dataPdf, {
      responseType: "blob",
    });

    let responseBlod = await response.data;

    let url = window.URL.createObjectURL(responseBlod);

    var a = document.createElement("a");
    a.href = url;
    a.download = "reporter-users.pdf";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  } catch (error) {
    console.error("Error al generar o descargar el PDF:", error);
  }
};
