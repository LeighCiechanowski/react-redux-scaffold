import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import { authorsFormattedForDropdown } from '../../selectors/selectors';
import toastr from 'toastr';

export class ManageCourse extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: Object.assign({}, this.props.course),
            errors: {},
            saving: false
        };

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        // if (this.props.course && this.props.course.id != nextProps.course.id) {
            this.setState({course: Object.assign({}, nextProps.course)});
        // }
    }

    updateCourseState(event) {
        const field = event.target.name;
        let course = this.state.course;
        course[field] = event.target.value;
        return this.setState({course: course});
    }

    validateCourse() {
        let isValid = true;
        let errors = {};
        if(this.state.course.title.length < 15) {
            errors.title = 'Title must be at least 5 characters.';
            isValid = false;
        }
        this.setState({errors: errors});
        return isValid;
    }

    saveCourse(event) {
        event.preventDefault();
        if(!this.validateCourse()) return;

        this.setState({ saving: true });
        this.props.actions.saveCourse(this.state.course)
        .then(() => this.redirect())
        .catch(error => {
            this.setState({ saving: false });
            toastr.error(error);
        });
    }

    redirect() {
        this.setState({ saving: false });
        toastr.success('Course Saved');
        this.context.router.push('/courses');
    }

    render() {
        return (
            <CourseForm 
                allAuthors={this.props.authors} 
                course={this.state.course} 
                errors={this.state.errors} 
                onChange={this.updateCourseState} 
                onSave={this.saveCourse}
                saving={this.state.saving}/>
        );
    }
}

ManageCourse.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

ManageCourse.contextTypes = {
    router: PropTypes.object
};

function getCourseById(courses, courseId) {
    const course = courses.filter(course => course.id == courseId);
    if(course.length) return course[0];
    return null;
}

function mapStateToProps(state, ownProps) {
    const courseId = ownProps.params.id;
    let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: '' };
    
    if(courseId) {
        course = getCourseById(state.courses, courseId);
    }

    return {
        course,
        authors: authorsFormattedForDropdown(state.authors)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ManageCourse);