import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0CC8A8] via-[#0a6c5a] to-[#042f2e] animate-[pulse_6s_ease-in-out_infinite]"></div>

      <div className="hidden md:flex w-1/2 text-white p-16 items-center">
        <div className="max-w-md space-y-6 animate-fadeIn">
          <h1 className="text-4xl font-bold">aps</h1>

          <p className="text-lg opacity-90">
            Expert level Cybersecurity in hours not weeks.
          </p>

          <div className="space-y-3 text-sm">
            <p>✔ Effortlessly spider and map targets</p>
            <p>✔ Deliver validated findings in hours</p>
            <p>✔ Generate enterprise-grade reports</p>
          </div>

          <p className="text-sm opacity-80">⭐ Rated 4.5/5.0 (100k+ reviews)</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center p-6">
        <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl transition-all duration-500">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Create Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                required
                className="border p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#0CC8A8]"
              />
              <input
                type="text"
                placeholder="Last Name"
                required
                className="border p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#0CC8A8]"
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              required
              className="border p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#0CC8A8]"
            />

            <input
              type="password"
              placeholder="Password"
              required
              className="border p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#0CC8A8]"
            />

            <label className="flex items-center text-sm gap-2">
              <input type="checkbox" required />I agree to Terms & Privacy
              Policy
            </label>

            <button
              type="submit"
              className="w-full bg-[#0CC8A8] text-white py-2 rounded-lg hover:opacity-90 transition"
            >
              Create Account
            </button>
          </form>

          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-3 text-sm text-gray-500">or</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          <div className="flex gap-3">
            <button className="flex-1 border border-gray-300 py-2 rounded-lg flex items-center justify-center hover:bg-gray-100 transition">
              <img
                src="https://w7.pngwing.com/pngs/121/286/png-transparent-apple-logo-computer-icons-apple-logo-company-heart-logo-thumbnail.png"
                alt="Apple"
                className="w-5 h-5"
              />
            </button>

            <button className="flex-1 border border-gray-300 py-2 rounded-lg flex items-center justify-center hover:bg-gray-100 transition">
              <img
                src="https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo-thumbnail.png"
                alt="Google"
                className="w-5 h-5"
              />
            </button>

            <button className="flex-1 border border-gray-300 py-2 rounded-lg flex items-center justify-center hover:bg-gray-100 transition">
              <img
                src="https://w7.pngwing.com/pngs/36/959/png-transparent-meta-logo-facebook-social-media-chat-message-communication-icon-thumbnail.png"
                alt="Meta"
                className="w-5 h-5"
              />
            </button>
          </div>
        </div>

        <div className="md:hidden mt-10 text-center text-white max-w-md space-y-4 animate-fadeIn">
          <h1 className="text-2xl font-bold">aps</h1>

          <p className="text-sm opacity-90">
            Expert level Cybersecurity in hours not weeks.
          </p>

          <div className="text-sm space-y-2">
            <p>✔ Effortlessly spider and map targets</p>
            <p>✔ Deliver validated findings in hours</p>
            <p>✔ Generate enterprise-grade reports</p>
          </div>

          <p className="text-xs opacity-80">⭐ Rated 4.5/5.0 (100k+ reviews)</p>
        </div>
      </div>
    </div>
  );
}
