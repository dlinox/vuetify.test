import type {
  DataTableOptions,
  DataTableResponse,
} from "@/common/types/data-table.types";

const DataTableDefaultOptions: DataTableOptions = {
  page: 1,
  itemsPerPage: 10,
  search: "",
  filters: {},
  sortBy: [],
};

const DataTableDefaultResponse: DataTableResponse<any> = {
  current_page: 1,
  data: [],
  first_page_url: "",
  from: 1,
  last_page: 1,
  last_page_url: "",
  next_page_url: "",
  path: "",
  per_page: 10,
  prev_page_url: "",
  to: 1,
  total: 0,
};

export { DataTableDefaultOptions, DataTableDefaultResponse };
