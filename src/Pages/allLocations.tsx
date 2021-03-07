import React from 'react';

const AllLocations: React.FC = () => {
  return (
    <>
      <header>All locations</header>
      <section>
        <h1>Acme locations</h1>
        <ul>
          <li>
            <div>
              <ul>
                <li>Heading</li>
                <li>
                  <span>icon 1</span>Users
                </li>
                <li>
                  <span>icon 2</span>Time zone
                </li>
                <li>
                  <span>icon 3</span>Views
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div>
              <ul>
                <li>Heading</li>
                <li>
                  <span>icon 1</span>Users
                </li>
                <li>
                  <span>icon 2</span>Time zone
                </li>
                <li>
                  <span>icon 3</span>Views
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </section>
      <aside>
        <div>
          <header>Heading</header>
          <button>Close</button>
        </div>
        <ul>
          <li>
            <span>icon 1</span>Users
          </li>
          <li>
            <span>icon 2</span>Time zone
          </li>
          <li>
            <span>icon 3</span>Views
          </li>
        </ul>
        <section>
          <header>Description</header>
          <p>Description text</p>
        </section>
      </aside>
    </>
  );
};

export default AllLocations;
