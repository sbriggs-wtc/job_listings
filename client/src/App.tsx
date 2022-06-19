import React, { useEffect, useState } from "react";
import "./App.css";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import FilterSearch from "./components/FilterSearch";
import { Container } from "@mui/material";
import { IJobListing } from "./interfaces/IJobListing";
import JobListingDataGrid from "./components/JobListingDataGrid";

const CONFIG = {
  API_URL: "http://localhost:8000/api/joblistings",
};

function App() {
  const [jobListings, setJobListings] = useState<IJobListing[]>([]);
  const [rolesFilter, setRolesFilter] = useState<string[]>([]);
  const [levelsFilter, setLevelsFilter] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    function fetchWithParams() {
      let roles = "?roles=";
      if (rolesFilter.length > 1) {
        roles += rolesFilter.join(",");
      } else if (rolesFilter.length === 1) {
        roles += rolesFilter[0];
      }
      let levels = "&levels=";
      if (levelsFilter.length > 1) {
        levels += levelsFilter.join(",");
      } else if (levelsFilter.length === 1) {
        levels += levelsFilter[0];
      }

      setLoading(true);
      fetch(CONFIG.API_URL + roles + levels, {
        method: "GET",
        mode: "cors",
      })
        .then((response) => response.json())
        .then((data) => {
          setLoading(false);
          setJobListings(data);
          return data;
        });
    }
    fetchWithParams();
  }, [rolesFilter, levelsFilter]);

  return (
    <Container>
      <Grid
        container
        spacing={2}
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item xs={12}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Job Listings
              </Typography>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid item md={6} xs={12}>
          <FilterSearch
            filter={rolesFilter}
            setFilter={setRolesFilter}
            columnLabel="Role"
            tags={["Backend", "Frontend", "Fullstack"]}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <FilterSearch
            filter={levelsFilter}
            setFilter={setLevelsFilter}
            columnLabel="Level"
            tags={["Junior", "Midweight", "Senior"]}
          />
        </Grid>
        <Grid item xs={12}>
          <JobListingDataGrid loading={loading} jobListings={jobListings} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
