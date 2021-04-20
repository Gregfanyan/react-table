import { format } from "date-fns";
export const COLUMNS = [
  {
    Header: "id",
    Footer: "id",
    accessor: "id",
    disableFilters: true,
  },
  {
    Header: "Firstname",
    Footer: "Firstname",
    accessor: "first_name",
  },
  {
    Header: "Lastname",
    Footer: "Lastname",
    accessor: "last_name",
  },
  /*   {
      Header: "Email",
      accessor: "email"
    }, */
  {
    Header: "Date of Birth",
    Footer: "Date of Birth",
    accessor: "date_of-birth",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
  },
  /*   {
      Header: "Age",
      accessor: "age"
    }, */
  {
    Header: "Country",
    Footer: "Country",
    accessor: "country",
  },
  {
    Header: "Phone",
    Footer: "Phone",
    accessor: "phone",
  },
];

export const GROUPED_COLUMNS = [
  {
    Header: "id",
    Footer: "id",
    accessor: "id",
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "Firstname",
        Footer: "Firstname",
        accessor: "first_name",
      },
      {
        Header: "Lastname",
        Footer: "Lastname",
        accessor: "last_name",
      },
    ],
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "Date of Birth",
        Footer: "Date of Birth",
        accessor: "date_of-birth",
      },
      {
        Header: "Country",
        Footer: "Country",
        accessor: "country",
      },
      {
        Header: "Phone",
        Footer: "Phone",
        accessor: "phone",
      },
    ],
  },
];
