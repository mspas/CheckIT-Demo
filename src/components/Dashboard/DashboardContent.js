import React from "react";
import "../../styles/dashboard.sass";
import ApiService from "../../services/api.service";
import CoursesList from "./Course/CoursesList";

class DashboardContent extends React.Component {
  constructor() {
    super();
    this._api = new ApiService();

    let lecturer_id = 0;

    this.state = {
      coursesLoading: true,
      usersLoading: true,
      courses: [],
      users: []
    };
    this._api.getCourses(lecturer_id).then(res => {
      this.setState({ courses: res, coursesLoading: false });
    });
    this._api.getUsersForLecture().then(res => {
      this.setState({ users: res, usersLoading: false });
    });
  }

  render() {
    return (
      <div className="main-content">
        {this.props.linksData[0].active && (
          <CoursesList
            courses={this.state.courses}
            isLoading={this.state.coursesLoading}
          />
        )}
      </div>
    );
  }
}
export default DashboardContent;
