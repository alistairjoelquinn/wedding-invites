import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

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
                    <FormControl sx={{ verticalAlign: 'middle' }}>
                        <FormLabel required id="demo-radio-buttons-group-label">
                            Are you able to attend?
                        </FormLabel>
                        <RadioGroup
                            aria-labelledby="rsvp-radio-buttons-group-label"
                            defaultValue="yes"
                            name="radio-buttons-group"
                            sx={{ flexDirection: 'row', verticalAlign: 'bottom' }}
                        >
                            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                            <FormControlLabel value="maybe" control={<Radio />} label="Maybe" />
                        </RadioGroup>
                    </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="city"
                        name="city"
                        label="City"
                        fullWidth
                        autoComplete="shipping address-level2"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="state" name="state" label="State/Province/Region" fullWidth variant="standard" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="zip"
                        name="zip"
                        label="Zip / Postal code"
                        fullWidth
                        autoComplete="shipping postal-code"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="country"
                        name="country"
                        label="Country"
                        fullWidth
                        autoComplete="shipping country"
                        variant="standard"
                    />
                </Grid>
            </Grid>
        </>
    );
}
