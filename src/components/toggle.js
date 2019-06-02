import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import './toggle.css'

class ToggleDark extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label className="switch" for="light-dark-toggle">
            <input
              id="light-dark-toggle"
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
            <span
              className="slider round"
              aria-label="toggle-light-dark-mode"
              aria-labelledby="light-dark-toggle"
            />
          </label>
        )}
      </ThemeToggler>
    )
  }
}

export default ToggleDark
