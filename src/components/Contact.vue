<template>
  <div class="contact-form">
    <h2>Contact Us</h2>
    <form @submit.prevent="sendEmail">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="form.name" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="form.email" required />
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" v-model="form.message" required></textarea>
      </div>
      <button type="submit" class="submit-button">Send</button>
    </form>
  </div>
</template>

<script>
import emailjs from 'emailjs-com'

export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
    }
  },
  methods: {
    async sendEmail() {
      try {
        const result = await emailjs.send(
          'service_d5of9bq',
          'template_mty42ez',
          {
            from_name: this.form.name,
            from_email: this.form.email,
            message: this.form.message,
          },
          'gines@alteridad.org',
        )

        if (result.status === 200) {
          alert('Email sent successfully!')
          this.form.name = ''
          this.form.email = ''
          this.form.message = ''
        } else {
          alert('Failed to send email.')
        }
      } catch (error) {
        console.error('Error sending email:', error)
        alert('An error occurred while sending the email.')
      }
    },
  },
}
</script>

<style scoped>
.contact-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #34495e;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.submit-button {
  display: block;
  width: 100%;
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px;
  font-size: 1.2em;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #2980b9;
}
</style>
