import React, { useState } from "react";
import { Mail, MessageSquare, Send } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../locales/translations";

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];

  // Google FormのURL
  const googleFormUrl =
    "https://docs.google.com/forms/u/4/d/e/1FAIpQLSfMPdTuO0zn1VF9KVLl4J_mt98G4nyjOdOaDpbCsM5wNw4nsA/formResponse";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const formBody = new URLSearchParams({
        "entry.5463756": formData.name,
        "entry.2145872422": formData.email,
        "entry.614190020": formData.message,
      });

      await fetch(googleFormUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody.toString(),
        mode: "no-cors", // CORS制限を回避
      });

      alert("メッセージを送信しました。");
      setFormData({ name: "", email: "", message: "" }); // フォームをリセット
    } catch (err) {
      setError(
        "フォームの送信中にエラーが発生しました。もう一度お試しください。"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-teal-400 to-purple-400 text-transparent bg-clip-text max-w-fit">
          {t.contact.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-zinc-100">
              {t.contact.info}
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-zinc-400">
                <Mail className="text-teal-400" size={24} />
                <span>hikarugyoji[at]gmail.com</span>
              </div>
              <div className="flex items-center space-x-4 text-zinc-400">
                <MessageSquare className="text-teal-400" size={24} />
                <span>{t.contact.available}</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-zinc-400 mb-2"
              >
                {t.contact.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-teal-400 text-zinc-100"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-zinc-400 mb-2"
              >
                {t.contact.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-teal-400 text-zinc-100"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-zinc-400 mb-2"
              >
                {t.contact.message}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-teal-400 text-zinc-100 resize-none"
                required
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
              disabled={isSubmitting}
            >
              <Send size={20} className="mr-2" />
              {isSubmitting ? t.contact.sending : t.contact.send}
            </button>
            {error && <p className="text-red-500">{error}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
