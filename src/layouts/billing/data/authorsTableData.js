/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { Icon } from "@mui/material";
//import { DarkMode } from "@mui/icons-material";
import MDButton from "components/MDButton";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import { useMaterialUIController } from "context";
// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "ID ", accessor: "author", width: "45%", align: "left" },
      { Header: "Titre", accessor: "function", align: "left" },
      { Header: "Lien externe", accessor: "employed", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        author: <Author name="id1" />,
        function: <Job title="titre1" />,
        employed: (
          <MDBox mt={1} mb={4}>
            <MDButton variant="gradient" color="info" size="small">
              voir illustration
            </MDButton>
          </MDBox>
        ),
        action: (
          <MDBox display="flex" alignItems="center" mt={{ xs: 2, sm: 0 }} ml={{ xs: -1.5, sm: 0 }}>
            <MDBox mr={1}>
              <MDButton variant="text" color="error">
                <Icon>delete</Icon>&nbsp;supprimer
              </MDButton>
            </MDBox>
            <MDButton variant="text" color={darkMode ? "white" : "dark"}>
              <Icon>edit</Icon>&nbsp;modifier
            </MDButton>
          </MDBox>
        ),
      },
      {
        author: <Author name="id2" />,
        function: <Job title="titre2" />,
        employed: (
          <MDBox mt={1} mb={4}>
            <MDButton variant="gradient" color="info" size="small">
              voir illustration
            </MDButton>
          </MDBox>
        ),
        action: (
          <MDBox display="flex" alignItems="center" mt={{ xs: 2, sm: 0 }} ml={{ xs: -1.5, sm: 0 }}>
            <MDBox mr={1}>
              <MDButton variant="text" color="error">
                <Icon>delete</Icon>&nbsp;supprimer
              </MDButton>
            </MDBox>
            <MDButton variant="text" color={darkMode ? "white" : "dark"}>
              <Icon>edit</Icon>&nbsp;modifier
            </MDButton>
          </MDBox>
        ),
      },
      {
        author: <Author name="id3" />,
        function: <Job title="titre3" />,
        employed: (
          <MDBox mt={1} mb={4}>
            <MDButton variant="gradient" color="info" size="small">
              voir illustration
            </MDButton>
          </MDBox>
        ),
        action: (
          <MDBox display="flex" alignItems="center" mt={{ xs: 2, sm: 0 }} ml={{ xs: -1.5, sm: 0 }}>
            <MDBox mr={1}>
              <MDButton variant="text" color="error">
                <Icon>delete</Icon>&nbsp;supprimer
              </MDButton>
            </MDBox>
            <MDButton variant="text" color={darkMode ? "white" : "dark"}>
              <Icon>edit</Icon>&nbsp;modifier
            </MDButton>
          </MDBox>
        ),
      },
      {
        author: <Author name="id4" />,
        function: <Job title="titre4" />,
        employed: (
          <MDBox mt={1} mb={4}>
            <MDButton variant="gradient" color="info" size="small">
              voir illustration
            </MDButton>
          </MDBox>
        ),
        action: (
          <MDBox display="flex" alignItems="center" mt={{ xs: 2, sm: 0 }} ml={{ xs: -1.5, sm: 0 }}>
            <MDBox mr={1}>
              <MDButton variant="text" color="error">
                <Icon>delete</Icon>&nbsp;supprimer
              </MDButton>
            </MDBox>
            <MDButton variant="text" color={darkMode ? "white" : "dark"}>
              <Icon>edit</Icon>&nbsp;modifier
            </MDButton>
          </MDBox>
        ),
      },
    ],
  };
}
