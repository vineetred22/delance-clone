import React, { useState } from "react";
import "./feedback.scss";
import {
  FormControlLabel,
  FormLabel,
  FormControl,
  FormHelperText,
  RadioGroup,
  Radio,
  Button,
  TextareaAutosize,
  Typography,
  Box,
} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import Rating from "@material-ui/lab/Rating";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form"


import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    "& > * + *": {
      marginTop: theme.spacing(1),
    },
  },
}));

export const FeedBackReview = () => {

  const classes = useStyles();

  const { register, handleSubmit, control, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <Typography variant="h6" className="reviewheading">
            Leave a Review
          </Typography>
          <Typography variant="p" className="reviewtext">
            <Box pb={2} pt={2}>
              Rate<Link className="feedtext"> Peter Velantin</Link> for the
              project
              <Link className="feedtext"> Simple Chrome Extension</Link>
            </Box>
          </Typography>
          <Box>
            <FormControl
              // className={classes.inputField}

              error={Boolean(errors.gender)}
            >
              <FormLabel>Was this delivered on budget ? <span className="supstar">*</span></FormLabel>
              <RadioGroup row name="gender" required>
                <FormControlLabel
                  value="female"
                  control={
                    <Radio
                      inputRef={register({
                        required: "Please select one of these options.",
                      })}
                    />
                  }
                  label="Yes"
                />
                <FormControlLabel
                  value="male"
                  control={
                    <Radio
                      inputRef={register({
                        required: "Please select one of these options.",
                      })}
                    />
                  }
                  label="No"
                />
              </RadioGroup>
              <FormHelperText className="radioerror">
                {errors.gender?.message}
              </FormHelperText>
            </FormControl>
          </Box>
          <Box pt={2}>
            <FormControl error={Boolean(errors.gender1)}>
              <FormLabel>Was this delivered on time ?<span className="supstar">*</span></FormLabel>
              <RadioGroup row name="gender1" required>
                <FormControlLabel
                  value="female"
                  control={
                    <Radio
                      inputRef={register({
                        required: "Please select one of these options",
                      })}
                    />
                  }
                  label="Yes"
                />
                <FormControlLabel
                  value="male"
                  control={
                    <Radio
                      inputRef={register({
                        required: "Please select one of these options",
                      })}
                    />
                  }
                  label="No"
                />
              </RadioGroup>
              <FormHelperText className="radioerror">
                {errors.gender1?.message}
              </FormHelperText>
            </FormControl>
          </Box>
        </Box>
        <Box pt={1}>
          <Typography className="feedbacklabel">Your Rating</Typography>

          <Box >
            <Rating
              name="star_rating"
              // defaultValue={1}
              inputRef={register({
                required:  "Please select a star rating.",
              })}
              require
              error={Boolean(errors.star_rating)}
              // helperText={errors.star_rating?.message}
            />
            <FormHelperText className="radioerror">
                {errors.star_rating?.message}
              </FormHelperText>
          </Box>


        </Box>
        <Box mb={3} mt={4}>
          <TextareaAutosize
            aria-label="minimum height"
            rows={6}
            fullWidth
            style={{ width: "100%" }}
            placeholder="comment"
          />
          
        </Box>
        <Button
          variant="contained"
          color="primary"
          className="btn btn-block blue-btn"
          type="submit"
        >
          Leave a Review
        </Button>
      </form>
    </>
  );
};
