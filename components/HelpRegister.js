import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        background: '#1F1F1F url(./static/images/back.jpeg) no-repeat center center',
        width: '50vw',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function HelpRegister( {name, msg, text} ) {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>

            <Button variant="contained" color="secondary" onClick={handleOpen}>
                Important Dates and Guidelines!
            </Button>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h3>Deadlines For Poster Submission</h3>
                        <h5>
                            Abstract Submission: Feb 5, 2020
                            <br />
                            Abstract Acceptance Notofication: Feb 8, 2020
                            <br />
                            Revised Abstract Submission: Feb 11, 2020
                            <br />
                            Poster Submission: Feb 15, 2020 
                        </h5>
                        <h3>Deadlines For My Research in 3 Mins</h3>
                        <h5>
                            Abstract Submission: Feb 15, 2020
                            <br />
                            Acceptance Notofication: Feb 18, 2020 
                            <br />
                            Presentation Submission: Feb 25, 2020
                        </h5>
                        <h3>Guidelines</h3>
                        <h5>
                            Submitted abstract must be no longer than 150 words.
                            <br />
                            Authors are requested to submit their papers electronically using the online conference management system in PDF format before the deadline (see Important Dates). The submission processes will be managed by easychair.org. If you have used this system before, you can use the same username and password. If this is your first time using EasyChair, you will need to register for an account by clicking "I have no EasyChair account" button. Upon completion of registration, you will get a notification email from the system and you are ready for submitting your paper. You can upload and re-upload the paper to the system by the submission due date.
                            <br />
                            NOTE: Please enter your Roll number in the address tab , during Abstract submission process.
                        </h5>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}