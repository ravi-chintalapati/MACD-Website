import React from 'react';
import Typography from '@material-ui/core/Typography';
import { TextField, Divider, Select, MenuItem } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { DatePicker } from 'material-ui-pickers';
import { format } from 'date-fns';

export class request extends React.Component {
    state = {
        // The first commit of Material-UI
        selectedDate: new Date(),
        option: "   "
    };

    handleDateChange = date => {
        this.setState({ selectedDate: date });
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    render() {

        const { selectedDate } = this.state;

        const config = [
            { label: "Company Name", name: "company_name" },
            { label: "Processing Region", name: "processing_region" },
            { label: "ADP Contact Person", name: "contact_name" },
            { label: "ADP Contact Title", name: "contact_title" },
            { label: "ADP Contact Phone #", name: "contact_phone" },
            { label: "Email Id", name: "contact_email" },
            { label: "Date", name: "date", type: "date" }
        ]

        return <Card style={{ padding: 10, margin: "auto", maxWidth: 600 }}>
            <CardContent>
                <Typography variant='body3' style={{ marginBottom: 14 }}>
                    For a new custom program
                    or to modify existing custom programs,
                    complete this form and submit.
                </Typography>

                <Typography variant='h5' style={{ marginTop: 20, marginBottom: 5 }}>
                    <b>General Information</b>
                </Typography>

                <Divider style={{ marginBottom: 20 }} />

                <form style={{ maxWidth: 900, margin: "auto" }}>
                    {config.map((el, i) => {
                        switch (el.type) {
                            case "date":
                                return <DatePicker
                                    key={i}
                                    margin="normal"
                                    label={el.label}
                                    autoOk
                                    style={{ display: "flex", marginBottom: 20 }}
                                    labelFunc={(val) => {
                                        console.log(val);
                                        return format(val, "MMMM do yyyy")
                                    }}
                                    value={selectedDate}
                                    onChange={this.handleDateChange}
                                />
                            default:
                                return <TextField key={i} InputLabelProps={{
                                    // shrink: true,
                                    // style: {width: "100%"}
                                }}
                                    id="company-name"
                                    style={{ display: "flex", marginBottom: 20 }}
                                    label={el.label}
                                    name={el.name}
                                    type={el.type ? el.type : "text"}
                                    // variant="outlined"
                                    autoComplete="Company Name"
                                />;
                        }
                    })}

                    <div>
                        <FormControl component="fieldset" style={{ flexGrow: 1, flexBasis: "50%" }}>
                            <FormLabel component="legend">An Existing Company ?</FormLabel>
                            <RadioGroup
                                value={this.state.option2} onChange={(e) => {
                                    this.setState({
                                        option2: e.target.value
                                    })
                                }}
                                aria-label="Company_with_ADP"
                                row>
                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="No" control={<Radio />} label="No" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <FormControl component="fieldset">
                        <FormLabel component="legend">Select an Option</FormLabel>
                        <RadioGroup
                            value={this.state.option} onChange={(e) => {
                                this.setState({
                                    option: e.target.value
                                })
                            }}
                            aria-label="program"
                            row>
                            <FormControlLabel value="new" control={<Radio />} label="New Program" />
                            <FormControlLabel value="existing" control={<Radio />} label="Modification to Existing Program" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>

                    {this.state.option === "new" && <div><FormControl style={{ marginTop: 5, marginBottom: 10 }} autoComplete='off' >
                        <FormLabel component="legend" shrink htmlFor="program_type">Select One</FormLabel>
                        <Select
                            value={this.state.program_type}
                            onChange={this.handleChange}
                            inputProps={{
                                shrink: false,
                                name: 'program_type',
                                id: 'program_type',
                            }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={1}>Custom Check</MenuItem>
                            <MenuItem value={2}>Custom Net</MenuItem>
                            <MenuItem value={3}>Custom Register</MenuItem>
                        </Select>
                    </FormControl></div>
                    }

                    <FormControl component="fieldset">
                        <FormLabel component="legend">Client Processing Set Up:</FormLabel>
                        <RadioGroup
                            value={this.state.option} onChange={(e) => {
                                this.setState({
                                    option: e.target.value
                                })
                            }}
                            aria-label="processing"
                            row>
                            <FormControlLabel value="NON-NOS" control={<Radio />} label="Non-NOS" />
                            <FormControlLabel value="NOS" control={<Radio />} label="NOS" />
                            <FormControlLabel value="Expnd-NOS" control={<Radio />} label="NOS with expanded data" />
                        </RadioGroup>
                    </FormControl>

                    <div style={{ display: "flex" }}>
                        <FormControl component="fieldset" style={{ flexGrow: 1, flexBasis: "50%" }}>
                            <FormLabel component="legend">Is this a PLD Company ?</FormLabel>
                            <RadioGroup
                                value={this.state.option1} onChange={(e) => {
                                    this.setState({
                                        option1: e.target.value
                                    })
                                }}
                                aria-label="PLD"
                                row>
                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="No" control={<Radio />} label="No" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <FormControl component="fieldset">
                        <FormLabel component="legend">Labour Distribution Reporting:</FormLabel>
                        <RadioGroup
                            value={this.state.option3} onChange={(e) => {
                                this.setState({
                                    option3: e.target.value
                                })
                            }}
                            aria-label="LDR"
                            row>
                            <FormControlLabel value="Dept" control={<Radio />} label="Dept" />
                            <FormControlLabel value="Cost" control={<Radio />} label="Cost" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>

                    <div>
                        <FormControl component="fieldset">
                            <FormLabel component="legend"> Is this an ADP Mobile company?</FormLabel>
                            <RadioGroup
                                value={this.state.option4} onChange={(e) => {
                                    this.setState({
                                        option4: e.target.value
                                    })
                                }}
                                aria-label="ADP_Mobile"
                                row>
                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="No" control={<Radio />} label="No" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <Typography variant='body4' style={{ marginBottom: 14 }}>
                        <b>Notes:</b><br />
                        It is the responsibility of regional associates to work with the client to determine requirements. <br />
                        All programs require regional beta testing before "live" production. <br /><br />

                        Your new custom request will be assigned to an Analyst for estimate analysis. The assigned Analyst may contact you to discuss the custom requirements in more detail.
                    </Typography>

                    <Typography variant='h5' style={{ marginTop: 20, marginBottom: 5 }}>
                        <b>Payroll Information</b>
                    </Typography>

                    <Divider style={{ marginBottom: 20 }} />

                </form>
            </CardContent>
        </Card>
    }
}