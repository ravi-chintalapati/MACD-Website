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
        option: "   ",
        values: { date: new Date() }
    };

    handleDateChange = name => date => {
        this.setState({
            values: {
                ...this.state.values,
                [name]: date
            }
        });
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    submit = (e) => {
        e.preventDefault();
        const json = {
            ...this.state.values
        };
        fetch("http://localhost:8888/apirequest", {
            body: JSON.stringify(json),
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST"
        }).then(d => d.text()).then(d => console.log("RESPONSE : ", d))
    };
    onChange = (name) => e => {
        this.setState({
            values: {
                ...this.state.values,
                [name]: e.target.value
            }
        })
    }
    render() {

        const { selectedDate } = this.state;

        const config = [
            { label: "Company Name", name: "company_name" },
            { label: "Processing Region", name: "processing_region" },
            { label: "Company Codes", name: "company_codes" },
            { label: "ADP Contact Person", name: "contact_name" },
            { label: "ADP Contact Title", name: "contact_title" },
            { label: "ADP Contact Phone #", name: "contact_phone" },
            { label: "Email Id", name: "contact_email" },
            { label: "Date", name: "date", type: "date" },
            {
                label: "Select", name: "prog_type", type: "select", options: [
                    { value: "new", label: "New Program" }, { value: "existing", label: "Modification to Existing Program" }, { value: "other", label: "Other" }
                ]
            }
        ]

        const payroll_info = [
            { label: "Payroll Version", name: "payroll_version" },
            { label: "Approx. # of Pays", name: "approx_pays" },
            { label: "No. of Controls", name: "number_controls" },
            { label: "Annual Revenue $ ", name: "annual_revenue" }
        ]
        return <Card style={{ padding: 10, margin: "auto", maxWidth: 650 }}>
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

                <form style={{ maxWidth: 900, margin: "auto" }} onSubmit={this.submit}>
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
                                    value={this.state.values[el.name]}
                                    onChange={this.handleDateChange(el.name)}
                                />
                            case "select":
                                return <FormControl key={i} component="fieldset">
                                    <FormLabel component="legend">Select an Option</FormLabel>
                                    <RadioGroup
                                        value={this.state.values[el.name]} onChange={this.onChange(el.name)}
                                        aria-label="program"
                                        row>
                                        {el.options.map(v => (
                                            <FormControlLabel key={v.value} value={v.value} control={<Radio />} label={v.label} />
                                        ))}
                                    </RadioGroup>
                                </FormControl>
                            default:
                                return <TextField key={i}
                                    style={{ display: "flex", marginBottom: 20 }}
                                    label={el.label}
                                    name={el.name}
                                    value={this.state.values[el.name]}
                                    onChange={this.onChange(el.name)}
                                    type={el.type ? el.type : "text"}
                                />;
                        }
                    })}



                    {this.state.values["prog_type"] === "new" && <div><FormControl style={{ marginTop: 5, marginBottom: 10 }} autoComplete='off' >
                        <FormLabel component="legend" shrink htmlFor="program_type1">Select One</FormLabel>
                        <Select
                            value={this.state.values["program_type1"]}
                            onChange={this.onChange("program_type1")}
                            inputProps={{
                                shrink: false,
                                name: 'program_type1',
                                id: 'program_type1',
                            }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={"Custom Check"}>Custom Check</MenuItem>
                            <MenuItem value={"Custom Net"}>Custom Net</MenuItem>
                            <MenuItem value={"Custom Register"}>Custom Register</MenuItem>
                        </Select>
                    </FormControl></div>
                    }
                    <div>
                        <FormControl component="fieldset" style={{ flexGrow: 1, flexBasis: "50%" }}>
                            <FormLabel component="legend">An Existing Company ?</FormLabel>
                            <RadioGroup
                                value={this.state.values["Company_with_ADP"]}
                                onChange={this.onChange("Company_with_ADP")}
                                aria-label="Company_with_ADP"
                                row>
                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="No" control={<Radio />} label="No" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Client Processing Set Up:</FormLabel>
                        <RadioGroup
                            value={this.state.option2} onChange={(e) => {
                                this.setState({
                                    option2: e.target.value
                                })
                            }}
                            onChange={this.onChange("processing")}
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
                                value={this.state.option3} onChange={(e) => {
                                    this.setState({
                                        option3: e.target.value
                                    })
                                }}
                                onChange={this.onChange("PLD")}
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
                            value={this.state.option4} onChange={(e) => {
                                this.setState({
                                    option4: e.target.value
                                })
                            }}
                            onChange={this.onChange("LDR")}
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
                                value={this.state.option5} onChange={(e) => {
                                    this.setState({
                                        option5: e.target.value
                                    })
                                }}
                                onChange={this.onChange("ADP_Mobile")}
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

                    <FormControl style={{ marginTop: 5, marginBottom: 10, marginRight: 50 }} autoComplete='off' >
                        <FormLabel component="legend" shrink htmlFor="pay_frequency">Payroll Frequency</FormLabel>
                        <Select
                            value={this.state.pay_frequency}
                            onChange={this.handleChange}
                            inputProps={{
                                shrink: false,
                                name: 'pay_frequency',
                                id: 'pay_frequency',
                            }}
                            onChange={this.onChange("pay_frequency")}
                        >
                            <MenuItem value={'Weekly'}>Weekly</MenuItem>
                            <MenuItem value={'Bi-Weekly'}>Bi-Weekly</MenuItem>
                            <MenuItem value={'Semi-Monthly'}>Semi-Monthly</MenuItem>
                            <MenuItem value={'Monthly'}>Monthly</MenuItem>
                            <MenuItem value={'Other'}>Other</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl style={{ marginTop: 5, marginBottom: 10 }} autoComplete='off' >
                        <FormLabel component="legend" shrink htmlFor="req_frequency">Request Frequency</FormLabel>
                        <Select
                            value={this.state.req_frequency}
                            onChange={this.handleChange}
                            inputProps={{
                                shrink: false,
                                name: 'req_frequency',
                                id: 'req_frequency',
                            }}
                            onChange={this.onChange("req_frequency")}
                        >
                            <MenuItem value={'Weekly'}>Weekly</MenuItem>
                            <MenuItem value={'Bi-Weekly'}>Bi-Weekly</MenuItem>
                            <MenuItem value={'Semi-Monthly'}>Semi-Monthly</MenuItem>
                            <MenuItem value={'Monthly'}>Monthly</MenuItem>
                            <MenuItem value={'Other'}>Other</MenuItem>
                        </Select>
                    </FormControl>

                    {payroll_info.map((el, i) => {
                        return <TextField key={i}
                            id="company-name"
                            style={{ display: "flex", marginBottom: 20 }}
                            label={el.label}
                            name={el.name}
                            type={el.type ? el.type : "text"}
                            autoComplete="off"
                            onChange={this.onChange(el.name)}
                        />;
                    })}

                    <FormControl component="fieldset">
                        <FormLabel component="legend">Will Program be run at multiple Regions ?</FormLabel>
                        <RadioGroup
                            value={this.state.option6} onChange={(e) => {
                                this.setState({
                                    option6: e.target.value
                                })
                            }}
                            onChange={this.onChange("Mutli_Regions")}
                            aria-label="Multi_Regions"
                            row>
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>

                    <FormControl component="fieldset">
                        <FormLabel component="legend">Critical Project (i.e. Will client leave ADP if project not done?)</FormLabel>
                        <RadioGroup
                            value={this.state.option7} onChange={(e) => {
                                this.setState({
                                    option7: e.target.value
                                })
                            }}
                            onChange={this.onChange("Criticality")}
                            aria-label="criticality"
                            row>
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>

                    <Typography variant='h5' style={{ marginTop: 20, marginBottom: 5 }}>
                        <b>Business Scope and Objectives</b>
                    </Typography>

                    <Divider style={{ marginBottom: 20 }} />

                    <Typography variant='body4' style={{ marginBottom: 14 }}>
                        Please define the following :<br />
                        Scope and Objectives (please enumerate and be specific):
                    </Typography>

                    <TextField
                        id="scope"
                        style={{ display: "flex", marginBottom: 20 }}
                        label={""}
                        name={"scope"}
                        type={"text"}
                        autoComplete="off"
                        variant="outlined"
                        multiline={true}
                        rows={5}
                        rowsMax={10}
                        onChange={this.onChange("scope")}
                    />

                    <Typography variant='h5' style={{ marginTop: 20, marginBottom: 5 }}>
                        <b>Functional Requirements</b>
                    </Typography>

                    <Divider style={{ marginBottom: 20 }} />

                    <Typography variant='body4' style={{ marginBottom: 14 }}>
                        Define the functional requirements (please be very specific):
                </Typography>

                    <TextField
                        id="functional_scope"
                        style={{ display: "flex", marginBottom: 20 }}
                        label={""}
                        name={"functional_scope"}
                        type={"text"}
                        autoComplete="off"
                        variant="outlined"
                        multiline={true}
                        rows={5}
                        rowsMax={10}
                        onChange={this.onChange("functional_scope")}
                    />

                    <Typography variant='h5' style={{ marginTop: 20, marginBottom: 5 }}>
                        <b>Special Calcs</b>
                    </Typography>

                    <Divider style={{ marginBottom: 20 }} />

                    <Typography variant='body4' style={{ marginBottom: 14 }}>
                        If request is for an Autopay Custom Net:
                </Typography>

                    <FormControl component="fieldset">
                        <FormLabel component="legend">Are there any special calcs that will affect processing ?</FormLabel>
                        <RadioGroup
                            value={this.state.option8} onChange={(e) => {
                                this.setState({
                                    option8: e.target.value
                                })
                            }}
                            onChange={this.onChange("calcs")}
                            aria-label="calcs"
                            row>
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>

                    <FormControl component="fieldset">
                        <FormLabel component="legend">Are there any existing Autopay Custom Net programs set up to run for this client ?</FormLabel>
                        <RadioGroup
                            value={this.state.option9} onChange={(e) => {
                                this.setState({
                                    option9: e.target.value
                                })
                            }}
                            onChange={this.onChange("existing_custom_net")}
                            aria-label="existing_custom_net"
                            row>
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>

                    <Typography variant='body4' style={{ marginBottom: 14 }}>
                        If answer is Yes, please list the logic of these Special Calcs in the Functional Requirements section above.
                        This logic must be in English, and not represented in Special Calc Screen format.
                </Typography>

                    <Typography variant='h5' style={{ marginTop: 20, marginBottom: 5 }}>
                        <b>Custom Report</b>
                    </Typography>

                    <Divider style={{ marginBottom: 20 }} />

                    <FormControl component="fieldset">
                        <FormLabel component="legend">Is a custom report required ?</FormLabel>
                        <RadioGroup
                            value={this.state.option9} onChange={(e) => {
                                this.setState({
                                    option9: e.target.value
                                })
                            }}
                            onChange={this.onChange("custom_report")}
                            aria-label="custom_report"
                            row>
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>

                    <Typography variant='h5' style={{ marginTop: 20, marginBottom: 5 }}>
                        <b>Attachments</b>
                    </Typography>


                    <form action="/action_page.php">
                        Select Attachments: <input type="file" name="img" multiple/>
                    </form>

                            <input type="submit" />

                            <Divider style={{ marginBottom: 20, marginTop: 20 }} />

                            <Typography variant='body6' style={{ marginTop: 50 }}>
                                M/A Custom Development<br />
                                Copyright © 2002  ADP, LLC.  All rights reserved.<br />
                                Revised: April 09, 2019<br />
                            </Typography>

                </form>

            </CardContent>
        </Card>
                }
}