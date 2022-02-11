import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { ImCross } from "react-icons/im";
import * as commonService from "utils/CommonService.js";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "none",
    boxShadow: theme.shadows[5],
    maxWidth: "500px",
    width: "95%",
    padding: theme.spacing(2, 4, 3),
    "&:focus": {
      outline: "none",
    },
  },
  button: {
    textAlign: "end",
    marginLeft: "20px",
    borderRadius: "20px",
  },
}));

const CommonModal = ({ children, open, handleClose }) => {
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div onClick={() => handleClose()}>
              {" "}
              <div className={classes.button}>
                <Button
                  style={{
                    borderRadius: "50% ",
                    padding: "10px 0px",
                    marginRight: "-30px",
                    marginTop: "-10px",
                  }}
                >
                  <ImCross />{" "}
                </Button>{" "}
              </div>
            </div>
            {children}
            {/* <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p> */}
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
export default CommonModal;
