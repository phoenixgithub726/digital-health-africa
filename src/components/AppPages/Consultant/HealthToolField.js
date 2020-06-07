import React, { useState, useEffect } from 'react';
import PropTypes, { func } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Grid, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

const CustomTextField = (props) => {
    const { unit, helperText, onChange, name, value } = props;
    useEffect(() => {
    }, [props]);
    return (
        <>
            {
                name === 'bmi' ?
                    <>
                        <TextField
                            style={{ width: '100%' }}
                            type="number"
                            helperText={helperText}
                            value={value}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">{unit}</InputAdornment>,
                            }}
                            unit={unit}
                            onChange={onChange}
                            name={name}
                            inputProps={{ step: '0.05' }}
                        />
                        <Grid style={{ padding: '20px 0px' }}>
                            Underweight = {'<'} 18.5<br />
                            Normal weight = 18.5–24.9<br />
                            Overweight = 25–29.9<br />
                            Obesity = BMI of 30 or greater<br />
                        </Grid>
                    </> :
                    <TextField
                        style={{ width: '100%' }}
                        type="number"
                        helperText={helperText}
                        value={value}
                        onChange={onChange}
                        disabled={name === 'lossGainTarget' ? true : false}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">{unit}</InputAdornment>,
                        }}
                        name={name}
                        inputProps={{ step: '0.05' }}
                    />
            }
        </>

    );
};

const CustomButton = (props) => {
    const { name, onClick } = props;
    useEffect(() => {
    }, [props]);
    return (
        <Button
            style={{ padding: '10px', width: '90%', height: '60px' }}
            variant="contained" color="primary"
            onClick={onClick}
        >
            {name}
        </Button>
    );
};

const a11yProps = (index) => {
    return {
        'id': `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
};

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        width: '73%',
        float: 'left',
        padding: '0px 20px',
    },
    modalWrapper: {
        color: '#4c5956',
        padding: '20px 10px',
    },
    customModal: {
        position: 'absolute',
        background: '#ffffff',
        borderRadius: '4px',
        boxShadow: '0 2px 4px rgba(22, 22, 22, 0.15)',
        opacity: 1,
    },
    yes_btn: {
        height: '50px',
        width: '100%',
        padding: '2px',
        color: 'white',
        backgroundColor: '#3d8ccb',
        textTransform: 'none',
    },
    cancel: {
        height: '50px',
        width: '100%',
        padding: '2px',
        textDecoration: 'underline',
        textTransform: 'none',
    },
}));

const HealthToolField = ({ healthInfo, handleSave, healthToolsId, loaded }) => {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [modalFlag, setModalFlag] = useState(false);
    const [modalData, setModalData] = useState([]);
    const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
    const [bmiHeight, setbmiHeight] = useState(0);
    const [bmiWeight, setbmiWeight] = useState(0);
    const [editAble, setEditAble] = useState(false);
    const [message, setMessage] = useState('');
    const [personalInfo, setPersonalInfo] = useState({})
    console.log(loaded)
    useEffect(() => {
        setPersonalInfo(healthInfo)
        setModalData([])
        setModalFlag(false)
        setEditAble(false);
        setbmiHeight(healthInfo.height)
        setbmiWeight(healthInfo.weight)
    }, [healthInfo, healthToolsId])

    const {
        systolic, destolic, pulse,
        temperature, respiration,
        weight, age, height,
        bmi, ldl, hdl,
        visceralFat, bloodGlucoseLevel,
        target
    } = personalInfo;

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setPersonalInfo(healthInfo);
        setModalFlag(false);
        setEditAble(false);
    };

    const handleCancel = () => {
        setPersonalInfo(healthInfo);
        setModalFlag(false);
    };

    const setModalInfo = (string) => {
        //Health Vitals
        if (string === 'blood') {
            setModalData([
                { unit: 'mmHg', helperText: 'systolic', currentValue: systolic },
                { unit: 'mmHg', helperText: 'destolic', currentValue: destolic },
                { unit: 'Hz', helperText: 'pulse', currentValue: pulse },
            ]);
        }
        if (string === 'temperature') {
            setModalData([{ unit: '°C', helperText: 'temperature', currentValue: temperature }]);
        }
        if (string === 'respiration') {
            setModalData([{ unit: 'Count', helperText: 'respiration', currentValue: respiration }]);
        }
        if (string === 'weight1') {
            setModalData([{ unit: 'Kg', helperText: 'weight', currentValue: weight }]);
        }
        if (string === 'age') {
            setModalData([{ unit: 'Years', helperText: 'age', currentValue: age }]);
        }
        if (string === 'height1') {
            setModalData([{ unit: 'Cm', helperText: 'height', currentValue: height }]);
        }
        // Food And Nutrition
        if (string === 'bmi') {
            let val = 0;
            if (!height || !weight) val = 0;
            else val = weight / (Math.pow(height / 100, 2));
            setModalData([
                { unit: 'Cm', helperText: 'bmiHeight', currentValue: height },
                { unit: 'Kg', helperText: 'bmiWeight', currentValue: weight },
                { unit: 'kg/m2', helperText: 'bmi', currentValue: val },
            ]);
        }
        if (string === 'ldl') {
            setModalData([{ unit: 'mg/dL', helperText: 'ldl', currentValue: ldl }]);
        }
        if (string === 'hdl') {
            setModalData([{ unit: 'mg/dL', helperText: 'hdl', currentValue: hdl }]);
        }
        if (string === 'visceralFat') {
            setModalData([{ unit: 'level', helperText: 'visceralFat', currentValue: visceralFat }]);
        }
        if (string === 'weight') {
            setModalData([{ unit: 'Kg', helperText: 'weight', currentValue: weight }]);
        }
        if (string === 'bloodGlucoseLevel') {
            setModalData([{ unit: 'mmol/L', helperText: 'bloodGlucoseLevel', currentValue: bloodGlucoseLevel }]);
        }
        if (string === 'height') {
            setModalData([{ unit: 'Cm', helperText: 'height', currentValue: height }]);
        }
        // weight Management
    }

    const handleClick = (e, string) => {
        setPersonalInfo(healthInfo);
        setModalInfo(string)
        setModalPosition({ x: e.clientX, y: e.clientY });
        setModalFlag(true);
    };

    const handleChangeValue = (e) => {
        if (e.target.name === 'bmiHeight' || e.target.name === 'bmiWeight') {
            if (e.target.name === 'bmiHeight') {
                setbmiHeight(e.target.value);
                if (bmiWeight) {
                    setModalData([
                        { unit: 'Cm', helperText: 'bmiHeight', currentValue: e.target.value },
                        { unit: 'Kg', helperText: 'bmiWeight', currentValue: bmiWeight },
                        { unit: 'kg/m2', helperText: 'bmi', currentValue: bmiWeight / (Math.pow(e.target.value / 100, 2)) },
                    ]);
                    setPersonalInfo({ ...personalInfo, bmi: parseFloat(bmiWeight / (Math.pow(e.target.value / 100, 2))) });
                }
            }
            if (e.target.name === 'bmiWeight') {
                setbmiWeight(e.target.value);
                if (bmiHeight) {
                    setModalData([
                        { unit: 'Cm', helperText: 'bmiHeight', currentValue: bmiHeight },
                        { unit: 'Kg', helperText: 'bmiWeight', currentValue: e.target.value },
                        { unit: 'kg/m2', helperText: 'bmi', currentValue: e.target.value / (Math.pow(bmiHeight / 100, 2)) },
                    ]);
                    setPersonalInfo({ ...personalInfo, bmi: parseFloat(e.target.value / (Math.pow(bmiHeight / 100, 2))) });
                }
            }
        } else {
            setPersonalInfo({ ...personalInfo, [e.target.name]: parseFloat(e.target.value) });
            if (['systolic', 'destolic', 'pulse'].includes(e.target.name)) {
                setModalData([
                    { unit: 'mmHg', helperText: 'systolic', currentValue: e.target.name === 'systolic' ? e.target.value : systolic },
                    { unit: 'mmHg', helperText: 'destolic', currentValue: e.target.name === 'destolic' ? e.target.value : destolic },
                    { unit: 'Hz', helperText: 'pulse', currentValue: e.target.name === 'pulse' ? e.target.value : pulse },
                ]);
            }
            // else if (['bmiHeight', 'bmiWeight', 'bmi'].includes(e.target.name)) {
            //     let val = 0;
            //     if (!height || !weight) val = 0;
            //     else val = weight / (Math.pow(height / 100, 2));
            //     setModalData([
            //         { unit: 'Cm', helperText: 'bmiHeight', currentValue: e.target.name === 'bmiHeight' ? e.target.value : height },
            //         { unit: 'Kg', helperText: 'bmiWeight', currentValue: e.target.name === 'bmiWeight' ? e.target.value : weight },
            //         { unit: 'kg/m2', helperText: 'bmi', currentValue: e.target.name === 'bmi' ? e.target.value : bmi },
            //     ]);
            // }
            else setModalData([{ unit: 'X', helperText: e.target.name, currentValue: e.target.value }]);
            // setModalInfo(e.target.name)
        }
    };

    const handleChangeTarget = (e) => {
        setPersonalInfo({ ...personalInfo, target: parseFloat(e.target.value) });
    };

    const handleLossCancel = () => {
        setPersonalInfo(healthInfo);
        setEditAble(!editAble);
    };

    const handleCompareTarget = (e) => {
        if (parseFloat(e.target.value) <= parseFloat(target)) {
            setMessage('Conguratulations!');
        } else {
            setMessage('Please keep working hard...');
        }
    };

    return (
        <>
            <div className={classes.root}>
                <AppBar position="static">
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                        <Tab label="Health Vitals" {...a11yProps(0)} />
                        <Tab label="Food and nutrition" {...a11yProps(1)} />
                        <Tab label="Weight management" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0} className={classes.vitals}>
                    <Grid container>
                        <Grid container item xs={4} justify="center" alignItems="center" style={{ padding: '10px' }}>
                            <CustomButton name="Blood Pressure" onClick={(e) => handleClick(e, 'blood')} />
                        </Grid>
                        <Grid container item xs={4} justify="center" alignItems="center" style={{ padding: '10px' }}>
                            <CustomButton name="Temperature" onClick={(e) => handleClick(e, 'temperature')} />
                        </Grid>
                        <Grid container item xs={4} justify="center" alignItems="center" style={{ padding: '10px' }}>
                            <CustomButton name="Respiration" onClick={(e) => handleClick(e, 'respiration')} />
                        </Grid>
                        <Grid container item xs={4} justify="center" alignItems="center" style={{ padding: '10px' }}>
                            <CustomButton name="Weight" onClick={(e) => handleClick(e, 'weight1')} />
                        </Grid>
                        <Grid container item xs={4} justify="center" alignItems="center" style={{ padding: '10px' }}>
                            <CustomButton name="age" onClick={(e) => handleClick(e, 'age')} />
                        </Grid>
                        <Grid container item xs={4} justify="center" alignItems="center" style={{ padding: '10px' }}>
                            <CustomButton name="Height" onClick={(e) => handleClick(e, 'height1')} />
                        </Grid>
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={1} className={classes.nutrition}>
                    <Grid container>
                        <Grid container item xs={4} justify="center" alignItems="center" style={{ padding: '10px' }}>
                            <CustomButton name="BMI" onClick={(e) => handleClick(e, 'bmi')} />
                        </Grid>
                        <Grid container item xs={4} justify="center" alignItems="center" style={{ padding: '10px' }}>
                            <CustomButton name="LDL" onClick={(e) => handleClick(e, 'ldl')} />
                        </Grid>
                        <Grid container item xs={4} justify="center" alignItems="center" style={{ padding: '10px' }}>
                            <CustomButton name="HDL" onClick={(e) => handleClick(e, 'hdl')} />
                        </Grid>
                        <Grid container item xs={4} justify="center" alignItems="center" style={{ padding: '10px' }}>
                            <CustomButton name="Visceral Fat" onClick={(e) => handleClick(e, 'visceralFat')} />
                        </Grid>
                        <Grid container item xs={4} justify="center" alignItems="center" style={{ padding: '10px' }}>
                            <CustomButton name="Blood Glucose Level" onClick={(e) => handleClick(e, 'bloodGlucoseLevel')} />
                        </Grid>
                        <Grid container item xs={4} justify="center" alignItems="center" style={{ padding: '10px' }}>
                            <CustomButton name="Weight" onClick={(e) => handleClick(e, 'weight')} />
                        </Grid>
                        <Grid container item xs={4} justify="center" alignItems="center" style={{ padding: '10px' }}>
                            <CustomButton name="Height" onClick={(e) => handleClick(e, 'height')} />
                        </Grid>
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={2} className={classes.weightManagement}>

                    <Grid container>
                        <Grid container item xs={6} justify="center" alignItems="center" style={{ padding: '10px' }}>
                            <CustomTextField
                                unit='Kg'
                                helperText={'Weight Loss Gain Target'}
                                onChange={handleChangeTarget}
                                name={!editAble ? 'lossGainTarget' : 'saveGainTarget'}
                                value={target ? target : ''}
                            />
                        </Grid>
                        <Grid container item xs={3} justify="center" alignItems="center" style={{ padding: '10px' }}>
                            <Button
                                style={{ padding: '10px', width: '90%' }}
                                variant="contained" color="primary"
                                onClick={handleLossCancel}
                            >
                                {!editAble ? 'Edit' : 'Cancel'}
                            </Button>
                        </Grid>
                        <Grid container item xs={3} justify="center" alignItems="center" style={{ padding: '10px' }}>
                            {
                                editAble &&
                                <Button
                                    style={{ padding: '10px', width: '90%' }}
                                    variant="contained" color="primary"
                                    onClick={e => handleSave(personalInfo)}
                                >
                                    Save
                                </Button>
                            }
                        </Grid>
                        <Grid container item xs={12} justify="center" alignItems="center" style={{ padding: '10px' }}>
                            <CustomTextField
                                unit='Kg'
                                helperText={'Current Weight'}
                                onChange={handleCompareTarget}
                                name={'currentWeight'}
                            />
                        </Grid>
                        <Grid container item xs={12} justify="center" alignItems="center" style={{ padding: '10px', color: '#00B0ED' }}>
                            {message}
                        </Grid>
                    </Grid>
                </TabPanel>
            </div>
            {/* when click event occur, popup modal */}
            {
                loaded &&
                <div
                    className={classes.customModal}
                    style={{
                        left: modalPosition.x + 320 < document.documentElement.clientWidth ? modalPosition.x : modalPosition.x - 320,
                        top: modalPosition.y,
                        visibility: modalFlag ? 'visible' : 'hidden',
                        width: 320,
                    }}
                >
                    <Grid container spacing={1} className={classes.modalWrapper}>
                        <Grid item style={{ padding: '10px' }} xs={12}>
                            {modalData.map((e, index) => {
                                if (e !== [])
                                    return (
                                        <CustomTextField
                                            key={e.helperText + index}
                                            unit={e.unit}
                                            helperText={e.helperText}
                                            onChange={handleChangeValue}
                                            name={e.helperText}
                                            value={e.currentValue ? e.currentValue : ''}
                                        />
                                    );
                            })}
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={1} justify="center">
                                <Grid container item xs={4}></Grid>
                                <Grid container item xs={4}>
                                    <Button size="small" className={classes.cancel} onClick={handleCancel} >
                                        No, Go Back
                                    </Button>
                                </Grid>
                                <Grid container item xs={4} justify="center" alignItems="center">
                                    <Button
                                        size="small"
                                        variant="contained"
                                        color="default"
                                        className={classes.yes_btn}
                                        onClick={e => handleSave(personalInfo)}
                                    >
                                        Yes, Save
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            }

        </>
    );
};

export default HealthToolField;
