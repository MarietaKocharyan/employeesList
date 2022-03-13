import { useMemo, useState } from 'react';

import { Stack, IconButton, Box, Select, MenuItem, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

import Card from './Card';

import useStyles from './styles';

const Slider = ({user = [] }): JSX.Element => {
    const [suggestion, setSuggestion] = useState('marketing');
    const [selectedSlide, setSelectedSlide] = useState<number>(0);

    const classes = useStyles();

    const lastSlideIndex = selectedSlide + 3;

    const prev = () => setSelectedSlide((prev) => prev - 1);
    const next = () => setSelectedSlide((prev) => prev + 1);


    const handleChange = (event) => {
        setSuggestion(event.target.value as string);
    };
    const filteredData = useMemo(() => {
        return user.filter((user) => user.department === suggestion);
    }, [suggestion]);

    return (
        <Box className={classes.commercials}>
            <Box className={classes.commercialsActions}>
                <Typography>Department</Typography>
                <Select value={suggestion} label="Suggestions" onChange={handleChange}>
                    <MenuItem value="marketing">Marketing</MenuItem>
                    <MenuItem value="development">Development</MenuItem>
                    <MenuItem value="hr">Human Resource</MenuItem>
                    <MenuItem value="qa">Quality Assurance</MenuItem>
                </Select>
                <IconButton className={classes.commercialsActionButton} onClick={prev} disabled={selectedSlide <= 0}>
                    <NavigateBeforeIcon />
                </IconButton>
                <IconButton
                    onClick={next}
                    className={classes.commercialsActionButton}
                    disabled={lastSlideIndex >= user.length}
                >
                    <NavigateNextIcon />
                </IconButton>
            </Box>
            <Stack spacing="16px" direction="row">
                {filteredData.slice(selectedSlide, lastSlideIndex).map((el) => (
                    <Box key={el.firstName} className={classes.commercialsItem}>
                        <Card user={el} />
                    </Box>
                ))}
            </Stack>
        </Box>
    );
};

export default Slider;
