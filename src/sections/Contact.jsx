import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

function Contact() {
  const formRef = useRef()
  const serviceId = 'service_cj1ogbs'
  const templateId = 'template_c0xbtvr' 
  const [loading, setLoading] = React.useState(false)
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange =
    ({ target: { name, value } }) =>
      setForm((prevForm) => ({ ...prevForm, [name]: value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
      to_name: 'Gabriel Villanueva Vega',
      to_email: 'gvillanuevavega@gmail.com'
    }
    const publicKey= 'icmFu8yFWaDDbW4MX'
    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      alert('Your message has been sent. I will get back to you as soon as possible.')

    } catch(error) {
      console.log(error)
      alert('Something went wrong. Please try again later.')

    } finally {
      setLoading(false)
      setForm({
        name: '',
        email: '',
        message: ''
      })
    }
  }
//service_cj1ogbs
  return (
    <section className="c-space mt-20" id="contact">
      <h3 className="head-text">Get in touch</h3>
      <div className="relative min-h-screen flex items-center justify-center flex-col py-10" >
        <img src="/assets/terminal.png" alt="terminal" className="absolute inset-0 h-full w-[100%]" />
        <div className="contact-container" >
          <h3 className="head-text">Let&apos;s talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Wheter you&apos;re looking to build a new website, improve your existing platform, or bring a unique project to life, I&apos;m here to help.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}
          className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">
                Full Name
              </span>
              <input
                required
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="field-input" 
                placeholder="John Doe"
              />
              <span className="field-label">
                Email
              </span>
              <input
                required
                type="emaiñ"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="field-input"
                placeholder="johndoe@gmail.com" 
              />
              <span className="field-label">
                Your Message
              </span>
              <textarea
                required
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="field-input" 
                placeholder="Hi, I wanna give you a job.."
              />
            </label>
            <button
              type="submit"
              className="field-btn"
              disabled={loading}
             >
              {loading ? "Sending..." : "Send Message"}
              <img src="/assets/arrow-up.png" alt="arrow" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact