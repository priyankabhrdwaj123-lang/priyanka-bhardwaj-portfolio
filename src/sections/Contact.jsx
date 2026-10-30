
import Reveal from "../components/Reveal";

const contactDetails = [
  {
    icon: "✉",
    label: "Email",
    value: "priyankabhrdwaj123@gmail.com",
    link: "mailto:priyankabhrdwaj123@gmail.com",
  },
  {
    icon: "in",
    label: "LinkedIn",
    value: "Connect professionally",
    link: "https://www.linkedin.com/in/priyanka-bhardwaj-b48b242a4/",
  },
  {
    icon: "⌘",
    label: "GitHub",
    value: "Explore my projects",
    link: "https://github.com/priyankabhrdwaj123-lang/",
  },
];

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const emailSubject = encodeURIComponent(subject);
    const emailBody = encodeURIComponent(
      `Hello Priyanka,\n\n${message}\n\nRegards,\n${name}\n${email}`
    );

    window.location.href = `mailto:priyankabhrdwaj123@gmail.com?subject=${emailSubject}&body=${emailBody}`;
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#080811] px-5 py-24 text-white sm:px-8 lg:px-16"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-purple-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Heading */}
        <Reveal>
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-purple-300">
              Get In Touch
            </span>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Let's Work{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Together
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
              Have a project, job opportunity or just want to connect?
              I'd love to hear from you.
            </p>
          </div>
        </Reveal>

        {/* Contact Content */}
        <div className="grid gap-8 md:grid-cols-2">

          {/* Left Side */}
          <Reveal>
            <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl sm:p-9">

              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-purple-300">
                  Let's Connect
                </p>

                <h3 className="text-3xl font-bold leading-tight">
                  Let's create something{" "}
                  <span className="text-purple-400">meaningful.</span>
                </h3>

                <p className="mt-5 text-sm leading-7 text-gray-400">
                  I'm interested in software development opportunities,
                  creative collaborations and projects where I can learn,
                  contribute and grow.
                </p>
              </div>

              {/* Contact Links */}
              <div className="mt-10 space-y-4">
                {contactDetails.map((item) => (
                  <a
                    key={item.label}
                    href={item.link}
                    target={item.label === "Email" ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-purple-400/40 hover:bg-purple-500/[0.07]"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/15 text-lg font-bold text-purple-300 transition group-hover:bg-purple-500/25">
                      {item.icon}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-gray-500">
                        {item.label}
                      </p>

                      <p className="mt-1 break-all text-sm font-medium text-gray-200 transition group-hover:text-purple-300">
                        {item.value}
                      </p>
                    </div>

                    <span className="text-gray-500 transition group-hover:translate-x-1 group-hover:text-purple-300">
                      ↗
                    </span>
                  </a>
                ))}
              </div>

              <div className="mt-auto border-t border-white/10 pt-7">
                <p className="text-sm text-gray-500">
                  Open to meaningful opportunities and collaborations.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right Side - Contact Form */}
          <Reveal delay={150}>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl sm:p-9"
            >
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-purple-300">
                  Send a Message
                </p>

                <h3 className="text-2xl font-bold">
                  Get in touch with me
                </h3>
              </div>

              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Your Name
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  autoComplete="name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-purple-400 focus:ring-2 focus:ring-purple-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Your Email
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-purple-400 focus:ring-2 focus:ring-purple-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Subject
                </label>

                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="Job opportunity / Project / Collaboration"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-purple-400 focus:ring-2 focus:ring-purple-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Your Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows="4"
                  placeholder="Write your message here..."
                  required
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-purple-400 focus:ring-2 focus:ring-purple-500/10"
                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 py-3.5 font-semibold text-white shadow-lg shadow-purple-500/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-purple-500/30"
              >
                Send Message
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>

              <p className="text-center text-xs leading-5 text-gray-500">
                Your default email application will open with your message.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;
