import { ReactNode, useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { DevTool } from "@hookform/devtools"
import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, FormHelperText, Checkbox, FormGroup, InputLabel, MenuItem, Select } from "@mui/material"
import InputMask from "react-input-mask"
// import MaskedInput from "react-input-mask";

let renderCount = 0
type FormValues = {
  fname: string
  lname: string
  gender: boolean
  chk1: boolean
  chk2: boolean
  dob: string
  dob2: string
  sel1: string
}

export const LoginForm = () => {
  const [submitStatus, setsubmitStatus] = useState(false)
  const form = useForm<FormValues>({
    defaultValues: {}
  })
  const { register, handleSubmit, formState, control } = form
  const { errors, isSubmitted } = formState

  const onSubmit = (data: FormValues) => {
    console.log("form submitted", isSubmitted, data)
    if (isSubmitted) {
      setsubmitStatus(true)
    }
  }

  renderCount++

  return (
    <div className="form_wrap">
      <h1>RenderCount ({renderCount / 2})</h1>
      <Box component={"form"} className={"formBox"} onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="blurr"></div>
        <div className="form_ele">
          <div className="form_row">
            <TextField
              fullWidth
              label="First Name"
              type="text"
              placeholder="Enter First Name"
              className={`customInput`}
              error={!!errors.fname}
              helperText={errors.fname?.message}
              {...register("fname", { required: "Firstname is required!" })}
            />
            <TextField
              fullWidth
              label="Last Name"
              type="text"
              placeholder="Enter Last Name"
              className={`customInput`}
              error={!!errors.lname}
              helperText={errors.lname?.message}
              {...register("lname", { required: "Lastname is required!" })}
            />
          </div>

          <div className="form_row">
            <FormControl fullWidth component="fieldset" variant="standard" error={!!errors.gender}>
              <FormLabel>Gender</FormLabel>
              <RadioGroup row name="gender" defaultValue="male">
                <FormControlLabel value="male" control={<Radio {...register("gender", { required: "Gender is required!" })} />} label="Male" />
                <FormControlLabel value="female" control={<Radio {...register("gender", { required: "Gender is required!" })} />} label="Female" />
                <FormControlLabel value="other" control={<Radio {...register("gender", { required: "Gender is required!" })} />} label="Other" />
              </RadioGroup>
              <FormHelperText>{!!errors.gender && errors.gender?.message}</FormHelperText>
            </FormControl>
          </div>

          <div className="form_row">
            <FormControl fullWidth component="fieldset" variant="standard">
              <Controller
                render={(props) => (
                  <>
                    {/* {console.log("props1", props.field.value, props.field.onChange)} */}
                    <InputMask mask="99/99/9999" placeholder="DD/MM/YYYY" value={props.field.value} onChange={props.field.onChange}>
                      <TextField fullWidth InputLabelProps={{ shrink: true }} label="DOB" type="tel" className={`customInput`} error={!!errors.dob} helperText={errors.dob?.message} />
                    </InputMask>
                  </>
                )}
                control={control}
                name="dob"
                defaultValue={""}
                rules={{
                  required: "Date should not be empty"
                }}
              />
            </FormControl>
          </div>

          <div className="form_row">
            <FormControl fullWidth error={!!errors.sel1}>
              <InputLabel id={"selinc"} shrink>
                Select Income
              </InputLabel>
              <Controller
                render={(props) => (
                  <>
                    {/* {console.log("props1", props.field.value, props.field.onChange)} */}
                    <Select label="Age" labelId={"selinc"} value={props.field.value} onChange={props.field.onChange}>
                      <MenuItem value=""></MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </>
                )}
                name={"sel1"}
                control={control}
                defaultValue=""
                rules={{
                  required: "Select any one required!"
                }}
              />
              <FormHelperText>{!!errors.sel1 && errors.sel1?.message}</FormHelperText>
            </FormControl>
          </div>

          <div className="form_row">
            <FormControl component="fieldset" variant="standard" fullWidth error={!!errors.chk1}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked sx={{ "& .MuiSvgIcon-root": { fontSize: 20 } }} {...register("chk1", { required: "Please tick the checkbox" })} />}
                  label="Recieve daily updates from us"
                />
              </FormGroup>
              <FormHelperText>{!!errors.chk1 && errors.chk1?.message}</FormHelperText>
            </FormControl>
          </div>

          <div className="form_row">
            <FormControl component="fieldset" variant="standard" fullWidth error={!!errors.chk2}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 20 } }} {...register("chk2", { required: "Please tick the checkbox" })} />}
                  label="Accept Terms & Conditions"
                />
              </FormGroup>
              <FormHelperText>{!!errors.chk2 && errors.chk2?.message}</FormHelperText>
            </FormControl>
          </div>

          <div className="form_row">
            <Button fullWidth type="submit" variant="contained" color="primary" size="large">
              {submitStatus ? "Submitted" : "Submit"}
            </Button>
          </div>
        </div>
      </Box>
      <DevTool control={control} />
    </div>
  )
}
