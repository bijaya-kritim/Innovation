export default function Contact() {
  return (
    <section className="contact-section">
      <h2>Contact Us</h2>

      <form className="contact-form" onSubmit={e => e.preventDefault()}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required rows="5"></textarea>
        <button className="btn" type="submit">Send</button>
      </form>
    </section>
  );
}
