import './App.css';
import React, { Component } from 'react';
import Navbar from './Comp/Navbar';
import News from './Comp/News';
import Footer from './Comp/Footer';
import PropTypes from 'prop-types';

// This is a React Router v6 app
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


export default class App extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 12,
    heading: ''
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    heading: PropTypes.string
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<News key="general" pageSize={9} country="in" category="general" />} />
            <Route path="/business" element={<News key="business" pageSize={9} country="in" category="business" heading="about Business" />} />
            <Route path="/entertainment" element={<News key="entertainment" pageSize={9} country="in" category="entertainment" heading="about Entertainment" />} />
            <Route path="/health" element={<News key="health" pageSize={9} country="in" category="health" heading="about Health" />} />
            <Route path="/science" element={<News key="science" pageSize={9} country="in" category="science" heading="about Science" />} />
            <Route path="/sports" element={<News key="sports" pageSize={9} country="in" category="sports" heading="about Sports" />} />
            <Route path="/technology" element={<News key="technology" pageSize={9} country="in" category="technology" heading="about Technology" />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    )
  }
}
