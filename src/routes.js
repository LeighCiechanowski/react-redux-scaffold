import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/home/Home';
import About from './components/about/About';
import Courses from './components/courses/Courses';
import ManageCourse from './components/courses/ManageCourse';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
        <Route path="course/:id" component={ManageCourse} />
        <Route path="course" component={ManageCourse} />
        <Route path="courses" component={Courses} />
    </Route>
);