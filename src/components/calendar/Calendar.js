import React from "react";

const Calendar = () => {
  return (
    <div className="calendar">
      <p className="title">
        January 2020{" "}
        <span>
          <button>
            <i className="fas fa-pencil-alt"></i>
          </button>
        </span>
      </p>
      <div className="calendar-table">
        <div className="thead">
          <div>Monday</div>
          <div>Tuesday</div>
          <div>Wednesday</div>
          <div>Thursday</div>
          <div>Friday</div>
          <div>Saturday</div>
          <div>Sunday</div>
        </div>
        <div className="tbody">
          <div className="day" style={{ opacity: 0 }}></div>
          <div className="day" style={{ opacity: 0 }}></div>
          <div className="day">1</div>
          <div className="day">2</div>
          <div className="day">3</div>
          <div className="day">4</div>
          <div className="day">5</div>
          <div className="day">6</div>
          <div className="day">7</div>
          <div className="day">8</div>
          <div className="day current-day">9</div>
          <div className="day">10</div>
          <div className="day">11</div>
          <div className="day">12</div>
          <div className="day">13</div>
          <div className="day">14</div>
          <div className="day">15</div>
          <div className="day">16</div>
          <div className="day">17</div>
          <div className="day">18</div>
          <div className="day">19</div>
          <div className="day">20</div>
          <div className="day">21</div>
          <div className="day">22</div>
          <div className="day">23</div>
          <div className="day">24</div>
          <div className="day">25</div>
          <div className="day">26</div>
          <div className="day">27</div>
          <div className="day">28</div>
          <div className="day">29</div>
          <div className="day">30</div>
          <div className="day">31</div>
          <div className="day" style={{ opacity: 0 }}></div>
          <div className="day" style={{ opacity: 0 }}></div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
