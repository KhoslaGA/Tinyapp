const urlDatabase = {};
//database helper file
const users = {};

app.set("view engine", "ejs");
// app.use(express.static('public'));
app.use(express.static('public', () => {
    console.log('Static assets middleware called');
}));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieSession({
    name: 'session',
    keys: ['CAITLIN'],
    maxAge: 24 * 60 * 60 * 1000,
}));
