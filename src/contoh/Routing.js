imprt {BrowserRouter, Route , Link} from 'react-router-dom';


<BrowserRouter>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
    </Switch>
</BrowserRouter>

<ul>
    <li> <Link to="/">Home</Link></li>
    <li> <Link to="/about">About</Link></li>
    <li> <Link to="/topics">Topics</Link></li>
</ul>


self.props.history.push('/profile');

e.preventDefault

return <Redirect to={{pathname: "/signin"}} />;