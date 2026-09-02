import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { EMAIL, WHATSAPP_NUMBER } from "@/data/content";
import { WaIcon } from "@/components/icons";
import { Mail, User, Phone, Calendar, Award, MapPin, MessageSquare, Compass, Users } from "lucide-react";

const EMPTY = { name: "", email: "", phone: "", interest: "", date: "", divers: "", cert: "", hotel: "", comments: "" };

export const BookingForm = () => {
  const { t } = useLanguage();
  const b = t.booking;
  const [searchParams] = useSearchParams();
  const presetIndex = parseInt(searchParams.get("i"), 10);
  const presetInterest =
    Number.isInteger(presetIndex) && presetIndex >= 0 && presetIndex < b.interestOptions.length
      ? b.interestOptions[presetIndex]
      : "";
  const [form, setForm] = useState({ ...EMPTY, interest: presetInterest });
  const [error, setError] = useState("");

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const isValid = form.name && form.email && form.phone && form.interest && form.date && form.hotel;

  const buildMessage = () => {
    const L = b.fields;
    const lines = [
      `${L.name}: ${form.name}`,
      `${L.email}: ${form.email}`,
      `${L.phone}: ${form.phone}`,
      `${L.interest}: ${form.interest}`,
      `${L.date}: ${form.date}`,
      form.divers && `${L.divers}: ${form.divers}`,
      form.cert && `${L.cert}: ${form.cert}`,
      `${L.hotel}: ${form.hotel}`,
      form.comments && `${L.comments}: ${form.comments}`,
    ].filter(Boolean);
    return lines.join("\n");
  };

  const guard = (fn) => (e) => {
    e.preventDefault();
    if (!isValid) {
      setError(b.required);
      return;
    }
    setError("");
    fn();
  };

  const sendEmail = () => {
    const subject = encodeURIComponent(b.subjectLine);
    const body = encodeURIComponent(buildMessage());
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const sendWhatsapp = () => {
    const text = encodeURIComponent(`${b.subjectLine}\n\n${buildMessage()}`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  const inputCls =
    "w-full bg-white/5 border border-white/15 focus:border-[#00B4D8] focus:ring-1 focus:ring-[#00B4D8] rounded-xl px-4 py-3 text-white placeholder-white/35 text-sm outline-none transition-colors";
  const labelCls = "flex items-center gap-2 text-xs uppercase tracking-wide text-white/60 font-semibold mb-2";
  const req = <span className="text-[#00B4D8]">*</span>;

  return (
    <form onSubmit={(e) => e.preventDefault()} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={labelCls}><User className="w-3.5 h-3.5 text-[#00B4D8]" /> {b.fields.name} {req}</label>
          <input type="text" className={inputCls} placeholder={b.placeholders.name} value={form.name} onChange={set("name")} required />
        </div>
        <div>
          <label className={labelCls}><Mail className="w-3.5 h-3.5 text-[#00B4D8]" /> {b.fields.email} {req}</label>
          <input type="email" className={inputCls} placeholder={b.placeholders.email} value={form.email} onChange={set("email")} required />
        </div>
        <div>
          <label className={labelCls}><Phone className="w-3.5 h-3.5 text-[#00B4D8]" /> {b.fields.phone} {req}</label>
          <input type="tel" className={inputCls} placeholder={b.placeholders.phone} value={form.phone} onChange={set("phone")} required />
        </div>
        <div>
          <label className={labelCls}><Compass className="w-3.5 h-3.5 text-[#00B4D8]" /> {b.fields.interest} {req}</label>
          <select className={`${inputCls} ${form.interest ? "" : "text-white/35"}`} value={form.interest} onChange={set("interest")} required>
            <option value="" disabled>{b.selectPlaceholder}</option>
            {b.interestOptions.map((opt) => (
              <option key={opt} value={opt} className="text-[#061A2B]">{opt}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelCls}><Calendar className="w-3.5 h-3.5 text-[#00B4D8]" /> {b.fields.date} {req}</label>
          <input type="date" className={inputCls} value={form.date} onChange={set("date")} required />
        </div>
        <div>
          <label className={labelCls}><Users className="w-3.5 h-3.5 text-[#00B4D8]" /> {b.fields.divers}</label>
          <input type="number" min="1" className={inputCls} placeholder="1" value={form.divers} onChange={set("divers")} />
        </div>
        <div>
          <label className={labelCls}><Award className="w-3.5 h-3.5 text-[#00B4D8]" /> {b.fields.cert}</label>
          <input type="text" className={inputCls} placeholder={b.placeholders.cert} value={form.cert} onChange={set("cert")} />
        </div>
        <div>
          <label className={labelCls}><MapPin className="w-3.5 h-3.5 text-[#00B4D8]" /> {b.fields.hotel} {req}</label>
          <input type="text" className={inputCls} placeholder={b.placeholders.hotel} value={form.hotel} onChange={set("hotel")} required />
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls}><MessageSquare className="w-3.5 h-3.5 text-[#00B4D8]" /> {b.fields.comments}</label>
          <textarea rows={3} className={inputCls} placeholder={b.placeholders.comments} value={form.comments} onChange={set("comments")} />
        </div>
      </div>

      {error && <p className="mt-4 text-sm text-red-400">{error}</p>}

      <p className="mt-6 text-white/55 text-xs leading-relaxed">{b.note}</p>

      <div className="mt-4 flex flex-col sm:flex-row items-center gap-3">
        <button
          type="button"
          onClick={guard(sendEmail)}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#00B4D8] hover:bg-[#0099BB] text-white font-semibold px-7 py-3.5 rounded-full transition-transform hover:-translate-y-0.5 shadow-lg shadow-[#00B4D8]/25"
        >
          <Mail className="w-5 h-5" /> {b.sendEmail}
        </button>
        <span className="text-white/40 text-xs uppercase tracking-wide">{b.orDivider}</span>
        <button
          type="button"
          onClick={guard(sendWhatsapp)}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-7 py-3.5 rounded-full transition-transform hover:-translate-y-0.5 shadow-lg shadow-[#25D366]/30"
        >
          <WaIcon className="w-5 h-5" /> {b.sendWhatsapp}
        </button>
      </div>
    </form>
  );
};
