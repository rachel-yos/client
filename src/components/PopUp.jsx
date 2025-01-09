import React from 'react';
import { Box, Button, Typography } from '@mui/material';

export const PopUp = ({ onClose, position }) => {
    return (
        <Box
            sx={{
                position: 'absolute',
                top: position.y + window.scrollY,
                left: position.x + window.scrollX,
                transform: 'translate(-50%, -50%)',
                width: '16vw',
                height: '17vh',
                gap: '0px',
                opacity: '0px',
                borderRadius: '23px',
                background: ' linear-gradient(to bottom left, #49ACEF, #050505, #050505, #050505)',
                border: '1.5px solid #696969',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '5%',
                zIndex: 1100,
                fontFamily: 'Open Sans',
                fontWeight: 400,
                color: '#FFFFFF',
            }}>
            <Button onClick={onClose} sx={{
                fontFamily: 'Inter',
                color: '#FFFFFF',
                fontSize: '50px',
                position: 'absolute',
                height: '5',
                lineHeight: '24.2px',
                top: '0.7vh',
                left: '0.2vw',
            }}>
                &times;
            </Button>
            <hr
                style={{
                    borderBottom: 'none', height: '0.2px ', position: 'absolute', top: '13%', left: 0, right: 0, margin: '0'
                }}
            />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                <Typography
                    variant="h4"
                    sx={{
                        marginBottom: '7%',
                        color: ' #FFD823',
                        textAlign: 'right',
                        lineHeight: 1,
                        marginLeft: '3.8rem',
                        fontFamily: 'Open Sans',
                    }}
                >
                    ? רוצה להיות חלק
                </Typography>

            </Box>
            <Typography
                variant='p'
                sx={{
                    fontSize: '20px',
                    textAlign: 'right',
                    alignSelf: 'flex-end',
                    textDecoration: 'none'
                }}
            >

                <span>מלאי את </span>
                <span style={{ cursor: 'pointer', color: ' #3598DB', textDecoration: 'underline' }}>הטופס</span>
                <br />
                <span>כשתקבלי מייל שאושרת</span>
                <br />
                הצטרפי אלינו
            </Typography>
            <Typography
                variant='p'
                sx={{
                    textAlign: 'right',
                    alignSelf: 'flex-start',
                    fontSize: '20px',
                    textAlign: 'justify',
                    position: 'absolute',
                    bottom: 20,
                    left: 45
                }}
            >
                מחכות לך
                <br />
                Npm Start <span>צוות</span>
            </Typography>
        </Box>
    );
};
