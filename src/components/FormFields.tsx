import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Slider from '@mui/material/Slider';

export default function AddressForm() {
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                    <TextField required id="fullName" name="fullName" label="Full name" fullWidth variant="standard" />
                </Grid>
                <Grid item xs={12}>
                    <TextField required id="email" name="email" label="Email Address" fullWidth variant="standard" />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl
                        sx={{
                            verticalAlign: 'middle',
                        }}
                    >
                        <FormLabel required id="demo-radio-buttons-group-label">
                            Are you able to attend?
                        </FormLabel>
                        <RadioGroup
                            aria-labelledby="rsvp-radio-buttons-group-label"
                            defaultValue="yes"
                            name="radio-buttons-group"
                            sx={{ flexDirection: 'row', verticalAlign: 'bottom' }}
                        >
                            <FormControlLabel value="yes" control={<Radio />} label="Yes, definitely" />
                            <FormControlLabel value="no" control={<Radio />} label="No, I can't" />
                            <FormControlLabel value="maybe" control={<Radio />} label="It's a maybe for now" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl sx={{ verticalAlign: 'middle' }}>
                        <FormLabel required id="demo-radio-buttons-group-label">
                            Are you bringing a partner or plus one?
                        </FormLabel>
                        <RadioGroup
                            aria-labelledby="rsvp-radio-buttons-group-label"
                            defaultValue="yes"
                            name="radio-buttons-group"
                            sx={{ flexDirection: 'row', verticalAlign: 'bottom' }}
                        >
                            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField
                        id="partnerName"
                        name="partnerName"
                        label="If so, what is their name?"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl sx={{ verticalAlign: 'middle' }}>
                        <FormLabel required id="demo-radio-buttons-group-label">
                            Are you bringing children?
                        </FormLabel>
                        <RadioGroup
                            aria-labelledby="rsvp-radio-buttons-group-label"
                            defaultValue="yes"
                            name="radio-buttons-group"
                            sx={{ flexDirection: 'row', verticalAlign: 'bottom' }}
                        >
                            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl fullWidth>
                        <FormLabel id="demo-radio-buttons-group-label">If so how many?</FormLabel>
                        <Slider
                            aria-label="Always visible"
                            defaultValue={0}
                            step={1}
                            marks
                            min={0}
                            max={10}
                            valueLabelDisplay="auto"
                        />
                    </FormControl>
                </Grid>
            </Grid>
        </>
    );
}
