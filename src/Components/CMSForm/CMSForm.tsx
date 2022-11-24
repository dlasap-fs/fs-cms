import { TabContext } from "../../Context/Context";
import helper from "../../utils";
import "./styles.css";
import { useState, createContext, useContext, SyntheticEvent } from "react";
import { LinearProgress, Paper, TextField } from "@mui/material";
const { REACT_APP_DATABASE_URL = "http://localhost" } = process.env;

const CMSForm = () => {
  const { setTab } = useContext(TabContext);
  const [loader, setLoader] = useState(false);
  const [verified, setIsVerified] = useState(false);

  const [formDetails, setFormDetails] = useState({
    first_name: "",
    last_name: "",
    physical_address: "",
    billing_address: "",
    submit_attempt: false,
  });

  const handleInput = (e: any) => {
    const { value, id } = e.target;

    setFormDetails((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
  };

  const handleReset = () => {
    setFormDetails((prev) => {
      return {
        ...prev,
        first_name: "",
        last_name: "",
        physical_address: "",
        billing_address: "",
      };
    });
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const form_answers = Object.values(formDetails);
    //checks if all answers are existing
    const isGood = form_answers.every(Boolean);

    setFormDetails((prevState) => ({
      ...prevState,
      submit_attempt: true,
    }));

    isGood && setLoader(true);

    //API CALL
    isGood &&
      helper.APICALL.POST(`${REACT_APP_DATABASE_URL}/record`, {
        first_name: formDetails.first_name,
        last_name: formDetails.last_name,
        delivery_address: {
          physical_address: formDetails.physical_address,
          billing_address: formDetails.billing_address,
        },
      })
        .then((data: any) => {
          data.status === 200 && data.data.success ? setIsVerified(true) : setIsVerified(false);
          // data.status !== 200 && data.data.success ? setModal(true) : setModal(false)
          setLoader(false);
        })
        .catch((error: any) => {
          // setModal(true);
          setLoader(false);
          console.log("ERROR :", error);
        });
  };

  return (
    <>
      {!verified ? (
        <Paper className="form-paper" variant="elevation">
          <h2>CMS FORM</h2>
          <div className="form-grid">
            <div className="form-header"> Name </div>
            <div className="first-name">
              <label> First Name </label>
              <TextField
                id="first_name"
                variant="standard"
                sx={{
                  "& label": {
                    marginLeft: "35%",
                  },
                  width: "90%",
                }}
                value={formDetails?.first_name}
                onChange={(e) => {
                  handleInput(e);
                }}
              />
            </div>
            <div className="last-name">
              <label> Last Name </label>
              <TextField
                id="last_name"
                variant="standard"
                sx={{
                  "& label": {
                    marginLeft: "35%",
                  },
                  width: "70%",
                }}
                onChange={(e) => {
                  handleInput(e);
                }}
                value={formDetails?.last_name}
              />
            </div>
            <div className="form-header"> Address </div>
            <div className="physical-address">
              {" "}
              <label>Physical Address</label>
              <TextField
                id="physical_address"
                variant="standard"
                sx={{
                  "& label": {
                    marginLeft: "43%",
                  },
                  width: "95%",
                }}
                value={formDetails?.physical_address}
                onChange={(e) => {
                  handleInput(e);
                }}
              />
            </div>
            <div className="billing-address ">
              {" "}
              <label>Billing Address</label>
              <TextField
                id="billing_address"
                variant="standard"
                sx={{
                  "& label": {
                    marginLeft: "43%",
                  },
                  width: "95%",
                }}
                value={formDetails?.billing_address}
                onChange={(e) => {
                  handleInput(e);
                }}
              />
            </div>
            <div className="loading-section">{loader && <LinearProgress variant="query" color="success" />}</div>
            <div className="buttons-section">
              <button className="submit-button" disabled={loader} onClick={handleSubmit}>
                Submit
              </button>
              <button className="reset-button" disabled={loader} onClick={handleReset}>
                Reset
              </button>
            </div>
          </div>
        </Paper>
      ) : (
        <Paper className="postform-paper">
          <h2>Submission sent!</h2>
          <p>Thank you for your submission!</p>
          <button
            onClick={() => {
              setIsVerified(false);
              handleReset();
            }}
          >
            Submit Another
          </button>
          <button
            onClick={() => {
              setIsVerified(false);
              setTab("records");
            }}
          >
            Go to Records
          </button>
        </Paper>
      )}
    </>
  );
};

export default CMSForm;
