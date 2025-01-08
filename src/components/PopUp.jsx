import React from 'react';
import { Box, Button, Typography } from '@mui/material';

export const PopUp = ({ onClose, position }) => {
    return (
        <Box
            sx={{
                position: 'absolute',
                top: position.y +  window.scrollY, 
                left: position.x  +  window.scrollX, 
                transform: 'translate(-50%, -50%)',
                width: '300px', 
                height: '200px', 
                borderRadius: '20px',
                background: 'linear-gradient(to bottom left, #297FB8, #181818)',
                border: '2px solid #FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '5%',
                zIndex: 1100, 
            }}>
            <Button onClick={onClose} sx={{
                color: '#FFFFFF',
                fontSize: '40px',
                position: 'absolute',
                top: '10px',
                left: '10px',
            }}>
                &times; 
            </Button>
            <hr style={{ color: '#FFFFFF', position: 'absolute', top: '20%', left: 0, right: 0, margin: '0' }} />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                <Typography
                    variant="h4"
                    sx={{
                        marginBottom: '7%',
                        fontFamily: 'zrima',
                        color: ' #FFD823',
                        textAlign: 'right',
                        alignSelf: 'flex-end',
                        lineHeight: 1,
                        marginLeft: '5rem',
                    }}
                >
                    ? רוצה להיות חלק
                </Typography>

            </Box>
            <Typography
                variant='p'
                sx={{
                    fontSize: '20px',
                    fontFamily: 'zrima',
                    color: '#FFFFFF',
                    fontWeight: 400,
                    textAlign: 'right',
                    width: '100%',
                    alignSelf: 'flex-end',
                    marginLeft: '55%',
                    textDecoration: 'none'
                }}
            >

                <span>מלאי את </span>
                <a href="https://github.com/rachel-yos" style={{ color: ' #3598DB' }}>
                    <span>הטופס</span></a>
                <br />
                <span>כשתקבלי מייל שאושרת</span>
                <br />
                הצטרפי אלינו
            </Typography>
            <Typography
                variant='p'
                sx={{
                    fontFamily: 'zrima',
                    color: '#FFFFFF',
                    textAlign: 'right',
                    width: '100%',
                    alignSelf: 'flex-start',
                    marginLeft: '0.5%',
                    fontSize: '20px',
                    textAlign: 'justify',
                    position: 'absolute',
                    bottom: 15,
                    left: 15
                }}
            >
                מחכות לך
                <br />
                Npm Start <span>צוות</span>
            </Typography>
        </Box>
    );
};
