import { Component } from "react";
import { Box, Button, Checkbox, Container, Link, TextField, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default class CadastroPg extends Component {
    render() {
        return (
            <>
                <Box
                    component="main"
                    sx={{
                        alignItems: 'center',
                        display: 'flex',
                        flexGrow: 1,
                        minHeight: '100%'
                    }}
                >
                    <Container maxWidth="sm">
                        <Link
                            href="/login"
                            passHref
                        >
                            <Button
                                component="a"
                                startIcon={<ArrowBackIcon fontSize="small" />}
                            >
                                
                            </Button>
                        </Link>
                        <form>
                            <Box sx={{ my: 3 }}>
                                <Typography
                                    color="textPrimary"
                                    variant="h4"
                                >
                                    Crie uma conta
                                </Typography>
                                <Typography
                                    color="textSecondary"
                                    gutterBottom
                                    variant="body2"
                                >
                                    Use seu e-mail para criar uma conta
                                </Typography>
                            </Box>
                            <TextField
                                fullWidth
                                label="First Name"
                                margin="normal"
                                name="firstName"
                                variant="outlined"
                            />
                            <TextField
                                fullWidth
                                label="Last Name"
                                margin="normal"
                                name="lastName"
                                variant="outlined"
                            />
                            <TextField
                                fullWidth
                                label="Email Address"
                                margin="normal"
                                name="email"
                                type="email"
                                variant="outlined"
                            />
                            <TextField
                                fullWidth
                                label="Password"
                                margin="normal"
                                name="password"
                                type="password"
                                variant="outlined"
                            />
                            <Box
                                sx={{
                                    alignItems: 'center',
                                    display: 'flex',
                                    ml: -1
                                }}
                            >
                                <Checkbox
                                    name="policy"
                                />
                                <Typography
                                    color="textSecondary"
                                    variant="body2"
                                >
                                    Eu li os
                                    {' '}
                                    <Link
                                        color="primary"
                                        underline="always"
                                        variant="subtitle2"
                                    >
                                        Termos e condições
                                    </Link>
                                </Typography>
                            </Box>
                            <Box sx={{ py: 2 }}>
                                <Button
                                    color="primary"
                                    fullWidth
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                >
                                    Increva-se
                                </Button>
                            </Box>
                            <Typography
                                color="textSecondary"
                                variant="body2"
                            >
                                Já possui uma conta?
                                {' '}

                                <Link
                                    variant="subtitle2"
                                    underline="hover"
                                >
                                    Entre
                                </Link>
                            </Typography>
                        </form>
                    </Container>
                </Box>
            </>
        )
    }
}