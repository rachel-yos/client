
import * as React from 'react';
import { styled, useTheme, Dialog, DialogTitle, DialogContent, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const BootstrapDialog = styled(Dialog)(() => ({
    '& .MuiPaper-root': {
        width: '454.81px',
        height: '316px',
        borderRadius: '23px',
        border: '1.5px #696969 solid',
        background: 'linear-gradient(to bottom left, #297FB8, #181818, #181818, #181818)',
        textAlign: 'right',
    },
    '& .MuiBackdrop-root': {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
    '& .css-10bxh4q-MuiDialogContent-root': {
        margin: 0,
        letterSpacing: '0.00938em',
        marginBottom: '0.35em',
    },
    '& .css-vjrxpc-MuiTypography-root': {
        fontSize: '20px',
        fontFamily: 'Open Sans',
        margin: 0,
        lineHeight: '27.24px',
    },
    '& .css-osx6jf-MuiTypography-root': {
        fontSize: '20px',
        fontFamily: 'Open Sans',
        margin: 0,
        lineHeight: '27.24px',
    }
}));

export function PopUp({ open, onClose }) {
    const theme = useTheme();

    return (
        <>
            <BootstrapDialog open={open}>
                <DialogTitle sx={{ m: 0, p: 3 }}>
                </DialogTitle>
                <IconButton
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        left: 8,
                        top: 8,
                        color: theme.palette.text.primary,
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                    <Typography gutterBottom sx={{
                        color: theme.palette.secondary.main,
                        fontFamily: 'Open Sans',
                        fontSize: '32px',
                        lineHeight: '43.58px',
                        marginTop: '7%'
                    }}>
                        ?רוצה להיות חלק
                    </Typography>
                    <Typography gutterBottom>
                        מלאי את <Typography component="span" sx={{
                            color: '#3598DB',
                            fontFamily: 'Open Sans',
                            fontSize: '20px',
                            textDecoration: 'underline',
                            textDecorationThickness: '1px',
                        }}>הטופס</Typography>
                    </Typography>
                    <Typography gutterBottom>
                        כשתקבלי מייל שאושרת
                    </Typography>
                    <Typography gutterBottom>
                        הצטרפי אלינו
                    </Typography>
                    <Typography sx={{ textAlign: 'left' }}>
                        מחכות לך
                    </Typography>
                    <Typography sx={{ textAlign: 'left' }}>
                        Npm Start צוות
                    </Typography>
                </DialogContent>
            </BootstrapDialog>
        </>
    );
}