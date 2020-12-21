import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Grid,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { SectionHeader, TypedText } from 'components/molecules';
import emailjs from 'emailjs-com';

const useStyles = makeStyles(theme => ({
  root: {},
  // map: {
  //   zIndex: 9,
  // },
  form: {
    '& .MuiTextField-root': {
      background: theme.palette.background.paper,
    },
    '& .MuiOutlinedInput-input': {
      background: theme.palette.background.paper,
    },
  },
  inputTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(1),
  },
  heroleftSide: {
    [theme.breakpoints.up('md')]: {
      marginRight: theme.spacing(6),
    },
  },
  herorightSide: {
    // display: 'flex',
    // alignItems: 'center',

    [theme.breakpoints.up('md')]: {
      marginRight: theme.spacing(6),
    },
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    // marginLeft: '50%',
    // transform: 'translate(-50%)',
  },
  listItemText: {
    display: 'flex',
    flexDirection: 'column',
    flex: '0 0 auto',
  },
  listItem: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  icon: {
    background: 'transparent',
    borderRadius: 0,
  },
  parentWrap: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'column',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  row: {
    display: 'flex',
    direction: 'row',
    position: 'absolute',
  },
  p: {
    width: '100px',
  }
}));

const ContactForm = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [roomType, setRoomType] = React.useState('');

  const handleChange = event => {
    setRoomType(event.target.value);
  };

  const [arrivalDate, setArrivalDate] = React.useState('');

  const handleArrivalDateChange = event => {
    setArrivalDate(event.target.value);
  };
  const [departureDate, setDepartureDate] = React.useState('');

  const handleDepartureDateChange = event => {
    setDepartureDate(event.target.value);
  };

  // const [estimatedPrice, setEstimatedPrice] = React.useState('');



  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_7mno5xj',
        'template_07vxmyw',
        e.target,
        'user_tzXMT3XnWnXuBA6DwVV6s',
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        },
      );
    e.target.reset();
  }

  const PersonalDetails = () => {
    // Name
    // Phone Number and Email
    return (
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={12} sm={12} data-aos="fade-up">
          <Typography
            variant="subtitle1"
            color="textPrimary"
            className={classes.inputTitle}
          >
            Teljes Név
          </Typography>
          <TextField
            color={isMd ? 'primary' : 'secondary'}
            placeholder="Teljes Név"
            variant="outlined"
            size="medium"
            name="fullname"
            fullWidth
            type="text"
          />
        </Grid>
        <Grid item xs={12} sm={6} data-aos="fade-up">
          <Typography
            variant="subtitle1"
            color="textPrimary"
            className={classes.inputTitle}
          >
            Telefonszám
          </Typography>
          <TextField
            color={isMd ? 'primary' : 'secondary'}
            placeholder="Elerhetoseged"
            variant="outlined"
            size="medium"
            name="phone"
            fullWidth
            type="tel"
          />
        </Grid>

        <Grid item xs={12} sm={6} data-aos="fade-up">
          <Typography
            variant="subtitle1"
            color="textPrimary"
            className={classes.inputTitle}
          >
            E-mail
          </Typography>
          <TextField
            placeholder="Az e-mail címed"
            variant="outlined"
            size="medium"
            name="email"
            fullWidth
            type="email"
          />
        </Grid>
      </Grid>
    );
  };

  const RoomDetails = () => {
    // const [roomType, setRoomType] = React.useState('');

    // const handleChange = event => {
    //   setRoomType(event.target.value);
    // };

    // const [arrivalDate, setArrivalDate] = React.useState('');

    // const handleArrivalDateChange = event => {
    //   setArrivalDate(event.target.value);
    // };
    // const [departureDate, setDepartureDate] = React.useState('');

    // const handleDepartureDateChange = event => {
    //   setDepartureDate(event.target.value);
    // };

    //Roomtype - Arrival - Departure
    return (
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={12} sm={3} data-aos="fade-up">
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-helper-label">
              Szobatípus
            </InputLabel>
            <Select
              name="roomType"
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={roomType}
              onChange={handleChange}
            >
              <MenuItem value="doubleRoom">Doubleroom</MenuItem>
              <MenuItem value="tripleRoom">Tripleroom</MenuItem>
              <MenuItem value="dormRoom">Dorm Bed</MenuItem>
            </Select>
            <FormHelperText>Válaszd ki a szobatípust</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={3} data-aos="fade-up">
          <TextField
            name="arrivalDate"
            id="arrivaldate"
            label="Érkezés"
            type="date"
            onChange={(handleArrivalDateChange)}
            value={arrivalDate}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={3} data-aos="fade-up">
          <TextField
            name="departureDate"
            id="departuredate"
            label="Távozás"
            type="date"
            onChange={(handleDepartureDateChange)}
            value={departureDate}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
      </Grid>
    );
  };

  const calculatePrice = () => {
      let arrival = new Date(arrivalDate);
      let departure = new Date(departureDate);
      var one_day = 1000 * 60 * 60 * 24;
      let dateDiff = Math.ceil(
        (departure.getTime() - arrival.getTime()) / one_day,
      );

    if (roomType === 'doubleRoom') {
      return 69 * dateDiff
    } else if (roomType === 'tripleRoom') { 
      return 79 * dateDiff
    } else if (roomType === 'dormRoom') {
      return 19 * dateDiff
    }
  }

  const EstimatedPrice = () => {
    if (Number.isInteger(calculatePrice())) {
      return (
        <Grid container>
          <Grid item xs={12} sm={12} data-aos="fade-up">
            <SectionHeader
              title={
                <>
                  <span className={clsx(classes.whiteText)}>
                    Saccolt végösszeg{' '}
                  </span>
                  <TypedText
                    component="span"
                    variant=""
                    color="secondary"
                    className={classes.typed}
                    typedProps={{
                      strings: ['€' + calculatePrice()],
                      loop: false,
                      typeSpeed: 120,
                    }}
                  />
                </>
              }
            />
          </Grid>
          <Grid item xs={12} sm={12} data-aos="fade-up" className={classes.p}>
            <p>
              Ez az összeg a jelenlegi árfolyamunkon alapul, nem tartalmazza az
              IFÁ-t és csak tájékoztatás szempontjából van. Emailben fogjuk
              küldeni a pontos árajánlatunkat a többi információval együtt.
            </p>
          </Grid>
        </Grid>
      );
    }  else return null;
  };

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <div className={classes.heroleftSide}>
        <SectionHeader
          title="Ajánlatkérés"
          subtitle="Az üzenet mezőben írd meg a foglalásal kapcsolatos információkat."
          data-aos="fade-up"
          align="left"
        />
        <div className={classes.form}>
          <form onSubmit={sendEmail}>
            <Grid container spacing={isMd ? 4 : 2}>
              <PersonalDetails />
              <RoomDetails />
              <EstimatedPrice/>
              <Grid item container justify="center" xs={12}>
                <Button
                  variant="contained"
                  type="submit"
                  color="secondary"
                  size="large"
                  fullWidth
                >
                  Elküld
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    </div>
  );
};

ContactForm.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default ContactForm;
