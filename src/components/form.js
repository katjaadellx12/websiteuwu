import React, { Component } from 'react'
import './form.css'

const Form = () => {
  return (
    <form
      class="contact"
      name="contact"
      method="post"
      action="/success/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      {/* You still need to add the hidden input with the form name to your JSX form */}
      <input type="hidden" name="form-name" value="contact" />
      <label>
        <input id="name" type="text" name="name" placeholder="Name" required />
      </label>

      <label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
      </label>
      <label>
        <input id="phone" type="tel" name="tel" placeholder="Phone" required />
      </label>
      <label>
        <input
          id="message"
          type="text"
          name="text"
          placeholder="Hey, Pranav..."
          required
        />
      </label>
      <label>
        <select name="role[]" multiple>
          <option value="student">Student</option>
          <option value="recruiter">Recruiter</option>
          <option value="other">Other</option>
        </select>
      </label>
      <button type="submit">Contact</button>
    </form>
  )
}

export default Form
