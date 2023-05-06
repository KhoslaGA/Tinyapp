const urlDatabase = {};
//database helper file
const users = {};


app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieSession({
    name: 'session',
    keys: ['CAITLIN'],
    maxAge: 24 * 60 * 60 * 1000,
}));
