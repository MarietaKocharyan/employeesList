import { makeStyles } from '@mui/styles';

export default makeStyles({
    label: {
        color: '#838F98',
    },
    select: {
        '&.Mui-disabled': {
            '& > fieldset': {
                border: '1px dashed #D9DDE0',
            },
        },
    },
    menuPaper: {
        marginTop: 4,
        border: '1px solid #D9DDE0',
        boxShadow: '0px 3px 3px #CDD2D6',
    },
    menuList: {
        maxHeight: 300,
    },
    option: {
        height: 48,
        padding: 2,
        '&.Mui-focusVisible': {
            backgroundColor: '#F6F8F9',
        },
        '&.Mui-selected': {
            backgroundColor: 'transparent',
        },
        '&:hover': {
            backgroundColor: '#F6F8F9',
            '&.Mui-selected': {
                backgroundColor: '#F6F8F9',
            },
        },
    },
    checkbox: {
        color: '#939DA5',
        '&.Mui-checked': {
            color: '#0000008A',
        },
    },
    optionTitle: {
        color: '#838F98',
        fontSize: 16,
        lineHeight: '24px',
    },
});
