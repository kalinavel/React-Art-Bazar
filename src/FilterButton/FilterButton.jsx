import React from 'react';

function FilterButton() {

    return (
        <div class="dropdown is-hoverable">
          <div class="dropdown-trigger">
            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
              <span>Filter by Artists</span>
              <span class="icon is-small">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
              <a href="#" class="dropdown-item">
                Paul Sandby
              </a>
              <a class="dropdown-item">
                John Warwick Smith
              </a>
              <a href="#" class="dropdown-item">
                Active dropdown item
              </a>
              <a href="#" class="dropdown-item">
                Other dropdown item
              </a>
            </div>
          </div>
        </div>
    )
}

export default FilterButton;