import AdminLayout from "./AdminLayout";

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-card-top">
            <div>
              <h4>Total Teachers</h4>
              <h2>5</h2>
            </div>
            <div className="stat-icon stat-icon-blue">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M16 11a4 4 0 1 0-8 0 4 4 0 0 0 8 0Zm-4 5c-4.1 0-8 2.1-8 4.5V22h16v-1.5C20 18.1 16.1 16 12 16Z" />
              </svg>
            </div>
          </div>
          <p className="stat-subtext">+2 this month</p>
        </div>

        <div className="stat-card">
          <div className="stat-card-top">
            <div>
              <h4>Total Students</h4>
              <h2>6</h2>
            </div>
            <div className="stat-icon stat-icon-purple">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3 2 8l10 5 10-5-10-5Zm0 7.6L5 8l7-3.6L19 8l-7 2.6ZM4 12.5V16c0 1.9 3.6 3.5 8 3.5s8-1.6 8-3.5v-3.5l-8 3-8-3Z" />
              </svg>
            </div>
          </div>
          <p className="stat-subtext">+15 this month</p>
        </div>

        <div className="stat-card">
          <div className="stat-card-top">
            <div>
              <h4>Active Classrooms</h4>
              <h2>5</h2>
            </div>
            <div className="stat-icon stat-icon-green">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm0 4h10V4H7v2Zm0 4h10V8H7v2Zm0 4h6v-2H7v2Z" />
              </svg>
            </div>
          </div>
          <p className="stat-subtext">All operational</p>
        </div>

        <div className="stat-card">
          <div className="stat-card-top">
            <div>
              <h4>Weekly Classes</h4>
              <h2>23</h2>
            </div>
            <div className="stat-icon stat-icon-orange">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 2h2v2h6V2h2v2h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3V2Zm13 8H4v10h16V10Z" />
              </svg>
            </div>
          </div>
          <p className="stat-subtext">This week</p>
        </div>
      </div>

      <div className="ai-banner">
        <div>
          <h2>AI Timetable Generator</h2>
          <p>Generate optimized, conflict-free schedules instantly</p>
        </div>
        <button>Generate Timetable</button>
      </div>

    </AdminLayout>
  );
};

export default AdminDashboard;
